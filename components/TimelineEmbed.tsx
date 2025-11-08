// components/TimelineEmbed.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Event {
  media: { url: string; caption: string };
  start_date: { year: string; month?: string; day?: string };
  text: { headline: string; text: string };
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
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load data
  useEffect(() => {
    fetch('/timeline.json')
      .then(r => r.json())
      .then(setData)
      .catch(() => alert('timeline.json not found – check /public folder'));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!data) return;
      if (e.key === 'ArrowRight') setCurrent(c => (c + 1) % data.events.length);
      if (e.key === 'ArrowLeft') setCurrent(c => (c - 1 + data.events.length) % data.events.length);
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [data]);

  if (!data) return <div className="h-96 flex items-center justify-center text-cyan animate-pulse">Loading timeline…</div>;

  const event = data.events[current];
  const progress = ((current + 1) / data.events.length) * 100;

  return (
    <>
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-cyan">
        {data.title}
      </h2>

      {/* Main Timeline Container */}
      <div
        ref={containerRef}
        className="relative bg-dark/50 backdrop-blur border border-cyan/20 rounded-2xl overflow-hidden shadow-2xl"
        style={{ height: '600px' }}
      >
        {/* Background Nebula */}
        <div className="absolute inset-0 bg-nebula opacity-40" />

        {/* Slide */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
            {/* Image */}
            <div
              className="relative aspect-square rounded-xl overflow-hidden cursor-zoom-in shadow-2xl"
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src={event.media.url}
                alt={event.media.caption}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                <p className="text-sm text-gold font-medium">{event.media.caption}</p>
              </div>
            </div>

            {/* Text */}
            <div className="text-left space-y-4">
              <div className="flex items-center gap-3 text-gold text-sm font-mono">
                <span>{event.start_date.year}</span>
                {event.start_date.month && <span>• {event.start_date.month}{event.start_date.day && `/${event.start_date.day}`}</span>}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-cyan leading-tight">
                {event.text.headline}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {event.text.text}
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 text-cyan hover:text-gold transition"
              >
                Read full story <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + data.events.length) % data.events.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-cyan/20 hover:bg-cyan/40 backdrop-blur p-3 rounded-full transition"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % data.events.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-cyan/20 hover:bg-cyan/40 backdrop-blur p-3 rounded-full transition"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-dark/50">
          <div
            className="h-full bg-gradient-to-r from-cyan to-gold transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dot Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {data.events.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === current ? 'bg-cyan w-8' : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-6 right-8 bg-dark/70 backdrop-blur px-4 py-2 rounded-full text-sm text-cyan">
          {current + 1} / {data.events.length}
        </div>
      </div>

      {/* Full-screen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="max-w-5xl w-full max-h-full overflow-y-auto bg-dark border border-cyan/30 rounded-2xl">
            <div className="relative">
              <Image
                src={event.modalImage}
                alt={event.text.headline}
                width={1200}
                height={600}
                sizes="100vw"
                className="w-full object-cover rounded-t-2xl"
                priority
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 bg-cyan/20 hover:bg-cyan/40 p-3 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-3xl font-bold text-cyan">{event.text.headline}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{event.modalText}</p>
              <div>
                <h4 className="text-gold font-bold mb-3">Sources</h4>
                <ul className="space-y-2">
                  {event.sources.map((src, i) => (
                    <li key={i}>
                      <a
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan hover:underline text-sm break-all"
                      >
                        {src.replace(/^https?:\/\//, '')}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
