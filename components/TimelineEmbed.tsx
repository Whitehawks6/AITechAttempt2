'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [isPaused, setIsPaused] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<NodeJS.Timeout | null>(null);

  // -----------------------------------------------------------------
  // Load JSON
  // -----------------------------------------------------------------
  useEffect(() => {
    fetch('/timeline.json')
      .then((r) => r.json())
      .then(setData)
      .catch(() => alert('timeline.json not found – check /public folder'));
  }, []);

  // -----------------------------------------------------------------
  // Auto-scroll (8 s) – pause on hover / manual click
  // -----------------------------------------------------------------
  useEffect(() => {
    if (!data) return;

    const tick = () => {
      if (!isPaused) {
        setCurrent((c) => (c + 1) % data.events.length);
      }
    };

    autoRef.current = setInterval(tick, 8000);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [data, isPaused]);

  // -----------------------------------------------------------------
  // Keyboard navigation
  // -----------------------------------------------------------------
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!data) return;
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % data.events.length);
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + data.events.length) % data.events.length);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [data]);

  if (!data) return <div className="py-32 text-center text-cyan text-2xl">Loading AI Timeline…</div>;

  const event = data.events[current];

  // -----------------------------------------------------------------
  // Build year range (1950 – 2035) – change if you need a different span
  // -----------------------------------------------------------------
  const startYear = 1950;
  const endYear = 2035;
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

  // -----------------------------------------------------------------
  // Helper: scroll timeline to a year
  // -----------------------------------------------------------------
  const scrollToYear = (year: number) => {
    const idx = data.events.findIndex((e) => +e.start_date.year === year);
    if (idx !== -1) setCurrent(idx);
  };

  // -----------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------
  return (
    <div className="max-w-7xl mx-auto p-4 font-sans">
      {/* Title */}
      <h1 className="mb-12 text-center text-4xl font-bold text-cyan md:text-6xl">{data.title}</h1>

      {/* -------------------------------------------------------------
          BIG SLIDE (Knight-Lab style)
      ------------------------------------------------------------- */}
      <div
        className="mb-12 overflow-hidden rounded-3xl bg-dark/90 shadow-2xl backdrop-blur-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative h-80 md:h-auto md:w-1/2">
            <Image
              src={event.media.url}
              alt={event.media.caption}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <p className="text-lg font-medium text-gold">{event.media.caption}</p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
            <p className="mb-3 text-sm font-mono text-gold">
              {event.start_date.year}
              {event.start_date.month && ` • ${event.start_date.month}${event.start_date.day ? `/${event.start_date.day}` : ''}`}
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-cyan md:text-5xl">{event.text.headline}</h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-300">{event.text.text}</p>

            {/* Modal trigger – simple alert for demo */}
            <button
              onClick={() => alert(event.modalText)}
              className="self-start rounded-full bg-cyan/20 px-6 py-3 font-bold text-cyan transition hover:bg-cyan/40"
            >
              Read Full Story
            </button>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          HORIZONTAL TIMELINE (flags + years)
      ------------------------------------------------------------- */}
      <div className="rounded-2xl bg-dark/70 p-6 shadow-xl backdrop-blur-lg">
        <div className="relative">
          {/* Base line */}
          <div className="absolute left-0 right-0 top-8 h-0.5 bg-gray-700"></div>

          {/* Scroll container */}
          <div
            ref={timelineRef}
            className="scrollbar-hide flex gap-8 overflow-x-auto py-4 px-2"
            style={{ scrollBehavior: 'smooth' }}
          >
            {years.map((year) => {
              const ev = data.events.find((e) => +e.start_date.year === year);
              const active = +data.events[current].start_date.year === year;

              return (
                <div key={year} className="relative flex flex-col items-center min-w-16">
                  {/* FLAG – only when an event exists */}
                  {ev && (
                    <button
                      onClick={() => setCurrent(data.events.indexOf(ev))}
                      className={`absolute -top-16 left-1/2 -translate-x-1/2 w-40 whitespace-nowrap rounded-t-lg p-2 text-xs font-medium shadow-lg transition-all
                        ${active ? 'bg-cyan text-dark scale-110' : 'bg-gray-300 text-dark hover:bg-cyan/80'}`}
                    >
                      {ev.text.headline}
                    </button>
                  )}

                  {/* Dot */}
                  <div
                    className={`z-10 h-3 w-3 rounded-full border-2 transition-all
                      ${active ? 'border-cyan bg-cyan scale-150' : 'border-gray-600 bg-gray-500'}`}
                  />

                  {/* Year label */}
                  <p className={`mt-2 text-xs ${active ? 'font-bold text-cyan' : 'text-gray-400'}`}>{year}</p>
                </div>
              );
            })}
          </div>

          {/* Left / Right arrows */}
          <button
            onClick={() => timelineRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-cyan/20 p-2 hover:bg-cyan/40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => timelineRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-cyan/20 p-2 hover:bg-cyan/40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Counter */}
      <p className="mt-6 text-center text-sm text-gray-400">
        Event {current + 1} / {data.events.length}
      </p>
    </div>
  );
}
