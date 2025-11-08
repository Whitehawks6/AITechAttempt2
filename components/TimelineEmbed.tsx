// components/TimelineEmbed.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ExternalLink, Sparkles } from 'lucide-react';

export default function TimelineEmbed() {
  const [data, setData] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    fetch('/timeline.json').then(r => r.json()).then(setData);
  }, []);

  useEffect(() => {
    if (!data) return;
    const tick = () => !paused && setCurrent(c => (c + 1) % data.events.length);
    timer = setInterval(tick, 9000);
    return () => clearInterval(timer);
  }, [data, paused]);

  if (!data) return <div className="py-32 text-center text-cyan text-3xl">Loading…</div>;

  const ev = data.events[current];

  return (
    <>
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <h1 className="bg-gradient-to-r from-cyan via-gold to-cyan bg-clip-text text-6xl font-black text-transparent md:text-8xl">
          {data.title}
        </h1>
      </motion.div>

      {/* SLIDE */}
      <motion.div
        key={current}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="group mb-20 overflow-hidden rounded-3xl bg-dark/90 shadow-2xl backdrop-blur-3xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex flex-col md:flex-row">
          <div className="relative h-96 md:h-auto md:w-1/2">
            <Image
              src={ev.media.url}
              alt={ev.media.caption}
              fill
              sizes="50vw"
              className="object-cover transition-transform group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90" />
            <p className="absolute bottom-8 left-8 text-2xl font-bold text-gold">{ev.media.caption}</p>
          </div>
          <div className="p-12 md:w-1/2">
            <p className="mb-4 text-sm font-mono text-gold/80">{ev.start_date.year}</p>
            <h2 className="mb-8 text-5xl font-black text-cyan md:text-7xl">{ev.text.headline}</h2>
            <p className="mb-10 text-xl text-gray-200">{ev.text.text}</p>
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-full bg-gradient-to-r from-cyan to-gold px-10 py-5 font-bold text-dark shadow-lg shadow-cyan/50 transition hover:scale-105"
            >
              Read Full Story →
            </button>
          </div>
        </div>
      </motion.div>

      {/* TIMELINE — ONLY EVENT YEARS */}
      <div className="rounded-3xl bg-dark/70 p-10 shadow-2xl backdrop-blur-3xl">
        <div className="relative">
          <div className="absolute left-0 right-0 top-12 h-1 bg-cyan/30" />
          <div
            ref={bar}
            className="scrollbar-hide flex gap-16 overflow-x-auto py-8"
          >
            {data.events.map((e: any, i: number) => {
              const active = i === current;
              return (
                <motion.div
                  key={i}
                  className="relative flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* FLAG */}
                  <motion.button
                    onClick={() => setCurrent(i)}
                    className={`absolute -top-28 w-64 -translate-x-1/2 rounded-t-2xl p-4 text-center text-sm font-bold shadow-2xl transition-all
                      ${active ? 'bg-cyan text-dark scale-110' : 'bg-gray-200/90 text-dark hover:bg-cyan/80'}`}
                  >
                    {e.text.headline}
                  </motion.button>

                  {/* DOT */}
                  <motion.div
                    animate={{ scale: active ? 1.5 : 1 }}
                    className={`h-6 w-6 rounded-full border-4 ${active ? 'border-cyan bg-cyan' : 'border-gray-500 bg-gray-600'}`}
                  />

                  {/* YEAR */}
                  <p className={`mt-4 text-lg font-bold ${active ? 'text-cyan' : 'text-gray-400'}`}>
                    {e.start_date.year}
                  </p>
                </motion.div>
              );
            })}
          </div>
          <button onClick={() => bar.current?.scrollBy({ left: -400, behavior: 'smooth' })} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-cyan/20 p-4">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={() => bar.current?.scrollBy({ left: 400, behavior: 'smooth' })} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-cyan/20 p-4">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-h-full w-full max-w-4xl overflow-y-auto rounded-3xl bg-dark/95 p-12 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setModalOpen(false)} className="absolute right-8 top-8 rounded-full bg-cyan/20 p-4">
                <X className="h-6 w-6" />
              </button>
              <h3 className="mb-8 text-5xl font-black text-cyan">{ev.text.headline}</h3>
              <p className="mb-8 text-xl text-gray-200">{ev.modalText}</p>
              <div className="border-t border-cyan/30 pt-8">
                <h4 className="mb-6 text-2xl font-bold text-gold">Sources</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  {ev.sources.map((s: string, i: number) => (
                    <a key={i} href={s} target="_blank" className="flex items-center gap-3 rounded-xl bg-dark/50 p-4 text-cyan hover:bg-cyan/10">
                      <span className="font-mono">[ {i + 1} ]</span>
                      <span className="truncate">{s.replace(/^https?:\/\//, '')}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
