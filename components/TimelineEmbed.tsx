// components/TimelineEmbed.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Source {
  url: string;
  title?: string;
}

interface Event {
  media: {
    url: string;
    caption: string;
  };
  start_date: {
    year: string;
    month?: string;
    day?: string;
  };
  text: {
    headline: string;
    text: string;
  };
  modalImage: string;
  modalText: string;
  sources: string[];
}

interface TimelineData {
  title: string;
  events: Event[];
}

export default function TimelineEmbed() {
  const [data, setData] = useState<TimelineData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    async function fetchTimeline() {
      try {
        const res = await fetch('/timeline.json');
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
        const json: TimelineData = await res.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load timeline');
      } finally {
        setLoading(false);
      }
    }
    fetchTimeline();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-pulse text-lg text-gray-400">Loading timeline...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-red-400 text-center p-8 bg-red-900/20 rounded-lg">
        Error: {error || 'No data'}
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-cyan">
          {data.title}
        </h2>

        <div className="space-y-12">
          {data.events.map((event, idx) => {
            const date = `${event.start_date.day ? event.start_date.day + '/' : ''}${
              event.start_date.month || ''
            } ${event.start_date.year}`;

            return (
              <div
                key={idx}
                className="grid md:grid-cols-2 gap-6 items-center group cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                {/* Image */}
                <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow">
                  <Image
                    src={event.media.url}
                    alt={event.media.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-sm text-white font-medium">{event.media.caption}</p>
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gold">
                    <span className="font-mono">{date}</span>
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-cyan group-hover:underline">
                    {event.text.headline}
                  </h3>
                  <p className="text-gray-300 line-clamp-3">{event.text.text}</p>
                  <button className="text-sm text-cyan hover:underline">
                    Click to read more →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-dark border border-cyan/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={selectedEvent.modalImage}
                alt={selectedEvent.text.headline}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-cyan">{selectedEvent.text.headline}</h3>
              <p className="text-gray-300">{selectedEvent.modalText}</p>

              <div>
                <h4 className="font-semibold text-gold mb-2">Sources:</h4>
                <ul className="space-y-1">
                  {selectedEvent.sources.map((src, i) => (
                    <li key={i}>
                      <a
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cyan hover:underline break-all"
                      >
                        {src}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-6 w-full py-2 bg-cyan/20 hover:bg-cyan/30 text-cyan rounded-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
