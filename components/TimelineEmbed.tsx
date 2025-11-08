// components/TimelineEmbed.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ExternalLink, Sparkles } from 'lucide-react';

interface Event {
  media: { url: string; caption: string };
  start_date: { year: string; month?: string; day?: string };
  text: { headline: string; text: string };
  modalImage: string;
  modalText: string;
  sources: string[];
  articleSummary?: string;
}

interface TimelineData {
  title: string;
  events: Event[];
}

export default function TimelineEmbed() {
  const [data, setData] = useState<TimelineData | null>(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch('/timeline.json')
      .then(r => r.json())
      .then(setData)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!data) return;
    const tick = () => !paused && setCurrent(c => (c + 1) % data.events.length);
    autoRef.current = setInterval(tick, 9000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [data, paused]);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (!data) return;
      if (e.key === 'ArrowRight') setCurrent(c => (c + 1) % data.events.length);
      if (e.key === 'ArrowLeft') setCurrent(c => (c - 1 + data.events.length) % data.events.length);
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [data]);

  if (!data) return (
    <div className="flex h-screen items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="h-16 w-16 rounded-full border-4 border-cyan/30 border-t-cyan"
      />
    </div>
  );

  const event = data.events[current];
  const years = Array.from({ length: 86 }, (_, i) => 1950 + i);
  const currentYear = +event.start_date.year;

  return (
    <>
      {/* HERO TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mb-20 text-center"
      >
        <h1 className="bg-gradient-to-r from-cyan via-gold to-cyan bg-clip-text text-6xl font-black text-transparent md:text-8xl">
          {data.title}
        </h1>
        <p className="mt-4 text-lg text-gray-400">Scroll or swipe to explore the future</p>
      </motion.div>

      {/* MAIN SLIDE */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mb-24 overflow-hidden rounded-3xl bg-gradient-to-br from-dark/90 via-dark to-dark/90 shadow-2xl backdrop-blur-3xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex flex-col md:flex-row">
          {/* IMAGE */}
          <div className="relative h-96 md:h-auto md:w-1/2">
            <Image
              src={event.media.url}
              alt={event.media.caption}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xl font-semibold text-gold drop-shadow-lg">{event.media.caption}</p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center p-10 md:w-1/2 md:p-20">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <p className="text-sm font-mono text-gold/80">
                {event.start_date.year}
                {event.start_date.month && ` • ${new Date(`${event.start_date.month}/1/${event.start_date.year}`).toLocaleString('default', { month: 'long' })}${event.start_date.day ? ` ${event.start_date.day}` : ''}`}
              </p>
            </motion.div>

            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 bg-gradient-to-r from-cyan to-gold bg-clip-text text-5xl font-black text-transparent md:text-7xl"
            >
              {event.text.headline}
            </motion.h2>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-10 text-xl leading-relaxed text-gray-200"
            >
              {event.text.text}
            </motion.p>

            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => setModalOpen(true)}
              className="group relative w-fit overflow-hidden rounded-full bg-gradient-to-r from-cyan to-gold px-10 py-5 font-bold text-dark transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan/50"
            >
              <span className="relative z-10 flex items-center gap-3">
                Read Full Story <Sparkles className="h-5 w-5" />
              </span>
              <div className="absolute inset-0 bg-white/20 transition-transform group-hover:translate-x-full" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* TIMELINE BAR */}
      <div className="relative z-10 mb-20">
        <div className="rounded-3xl bg-gradient-to-b from-dark/80 to-dark/60 p-10 shadow-2xl backdrop-blur-3xl">
          <div className="relative">
            <div className="absolute left-0 right-0 top-12 h-1 bg-gradient-to-r from-cyan/50 via-gold/50 to-cyan/50" />
            <div className="absolute left-0 right-0 top-12 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent blur-xl" />

            <div
              ref={timelineRef}
              className="scrollbar-hide flex gap-12 overflow-x-auto py-8 px-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {years.map(year => {
                const ev = data.events.find((e: any) => +e.start_date.year === year);
                const isActive = currentYear === year;
                const isFuture = year > new Date().getFullYear();

                return (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative flex flex-col items-center"
                    style={{ minWidth: '80px' }}
                  >
                    {ev && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrent(data.events.indexOf(ev))}
                        className={`absolute -top-24 left-1/2 w-56 -translate-x-1/2 rounded-t-xl p-4 text-center text-sm font-bold shadow-2xl transition-all
                          ${isActive
                            ? 'bg-gradient-to-b from-cyan to-cyan/80 text-dark scale-110 shadow-cyan/70'
                            : isFuture
                              ? 'bg-gradient-to-b from-gray-700 to-gray-800 text-gray-300'
                              : 'bg-gradient-to-b from-gray-200 to-gray-300 text-dark hover:from-cyan hover:to-cyan/80 hover:text-dark'
                          }`}
                      >
                        <div className="truncate px-2">{ev.text.headline}</div>
                      </motion.button>
                    )}

                    <motion.div
                      animate={{
                        scale: isActive ? [1, 1.3, 1] : 1,
                        boxShadow: isActive ? "0 0 30px rgba(0, 255, 255, 0.8)" : "none"
                      }}
                      transition={{ duration: 0.6 }}
                      className={`z-10 h-5 w-5 rounded-full border-4 transition-all
                        ${isActive
                          ? 'border-cyan bg-cyan shadow-lg shadow-cyan/50'
                          : isFuture
                            ? 'border-gray-600 bg-gray-700'
                            : 'border-gray-500 bg-gray-600'
                        }`}
                    />

                    <p className={`mt-4 text-sm font-medium transition-all
                      ${isActive ? 'text-cyan scale-125 font-bold' : isFuture ? 'text-gray-500' : 'text-gray-400'}
                    `}>
                      {year}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={() => timelineRef.current?.scrollBy({ left: -500, behavior: 'smooth' })}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-cyan/20 p-4 backdrop-blur-sm transition hover:bg-cyan/40 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => timelineRef.current?.scrollBy({ left: 500, behavior: 'smooth' })}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-cyan/20 p-4 backdrop-blur-sm transition hover:bg-cyan/40 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-h-full w-full max-w-5xl overflow-y-auto rounded-3xl bg-gradient-to-br from-dark via-dark/95 to-dark/90 p-12 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute right-8 top-8 rounded-full bg-cyan/20 p-4 transition hover:bg-cyan/40"
              >
                <X className="h-6 w-6" />
              </button>

              <motion.h3
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mb-8 bg-gradient-to-r from-cyan to-gold bg-clip-text text-5xl font-black text-transparent"
              >
                {event.text.headline}
              </motion.h3>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-invert mb-12 max-w-none text-lg leading-relaxed text-gray-200"
              >
                {event.modalText.split('\n').map((p, i) => (
                  <p key={i} className="mb-6">{p}</p>
                ))}
                {event.articleSummary && (
                  <p className="mt-8 italic text-cyan/80">
                    <strong>Summary:</strong> {event.articleSummary}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="border-t border-cyan/30 pt-8"
              >
                <h4 className="mb-6 text-2xl font-bold text-gold">Sources</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  {event.sources.map((src, i) => (
                    <a
                      key={i}
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl bg-dark/50 p-4 transition-all hover:bg-cyan/10 hover:shadow-lg hover:shadow-cyan/20"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/20 text-cyan group-hover:bg-cyan group-hover:text-dark">
                        {i + 1}
                      </div>
                      <span className="flex-1 truncate text-sm text-cyan group-hover:text-gold">
                        {src.replace(/^https?:\/\//, '')}
                      </span>
                      <ExternalLink className="h-4 w-4 text-cyan/60 group-hover:text-gold" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COUNTER */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-dark/80 px-6 py-3 backdrop-blur-xl">
        <p className="text-sm font-mono text-cyan">
          Event <span className="text-gold">{current + 1}</span> / {data.events.length}
        </p>
      </div>
    </>
  );
}
