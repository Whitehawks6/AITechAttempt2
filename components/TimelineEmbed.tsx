// components/TimelineEmbed.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TimelineEmbed() {
  const [data, setData] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch('/timeline.json')
      .then(r => r.json())
      .then(setData);
  }, []);

  if (!data) return <div className="text-center py-20 text-cyan text-2xl">Loading AI Timeline…</div>;

  const event = data.events[current];

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-cyan">
        {data.title}
      </h1>

      {/* Big Slide */}
      <div className="bg-dark/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden mb-8">
        <div className="md:flex">
          {/* Image */}
          <div className="md:w-1/2 relative h-96 md:h-auto">
            <Image
              src={event.media.url}
              alt={event.media.caption}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <p className="text-gold text-lg font-medium">{event.media.caption}</p>
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <p className="text-gold text-sm font-mono mb-2">
              {event.start_date.year}
              {event.start_date.month && ` • ${event.start_date.month}${event.start_date.day ? `/${event.start_date.day}` : ''}`}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-cyan mb-6 leading-tight">
              {event.text.headline}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {event.text.text}
            </p>
            <button
              onClick={() => alert(event.modalText)}
              className="self-start px-6 py-3 bg-cyan/20 hover:bg-cyan/40 rounded-full text-cyan font-bold transition"
            >
              Read Full Story →
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Timeline Bar */}
      <div className="bg-dark/60 backdrop-blur rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
          {data.events.map((e: any, i: number) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex flex-col items-center min-w-32 transition-all ${
                i === current ? 'text-cyan scale-125' : 'text-gray-400 hover:text-cyan'
              }`}
            >
              <div className="relative">
                <div className={`w-4 h-4 rounded-full border-4 ${
                  i === current ? 'bg-cyan border-cyan' : 'bg-dark border-gray-500'
                }`} />
                {i === current && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <p className="text-xs font-bold text-cyan">{e.start_date.year}</p>
                  </div>
                )}
              </div>
              <p className="mt-3 text-xs font-medium">{e.text.headline.slice(0, 20)}...</p>
            </button>
          ))}
        </div>

        {/* Progress Line */}
        <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan to-gold transition-all duration-500"
            style={{ width: `${((current + 1) / data.events.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Counter */}
      <p className="text-center mt-6 text-gray-400">
        Event {current + 1} of {data.events.length}
      </p>
    </div>
  );
}
