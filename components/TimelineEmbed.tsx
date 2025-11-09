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
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch('/timeline.json')
      .then(r => {
        if (!r.ok) throw new Error('Failed to load timeline.json');
        return r.json();
      })
      .then(setData)
      .catch(err => {
        console.error(err);
        setData({ title: 'Timeline Load Error', events: [] }); // Fallback empty
      });
  }, []);

  // Auto-scroll with pause
  useEffect(() => {
    if (!data || !data.events || data.events.length === 0 || paused) {
      if (timer.current) clearInterval(timer.current);
      return;
    }
    timer.current = setInterval(() => {
      setCurrent(c => (c + 1) % data.events.length);
    }, 9000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [data, paused]);

  // Stop auto-scroll on any interaction
  const stopAuto = () => setPaused(true);

  if (!data) {
    return <div className="py-32 text-center text-electricBlue text-3xl">Loading timeline... (Check console if stuck)</div>;
  }

  if (data.events.length === 0) {
    return <div className="py-32 text-center text-neonPurple text-3xl">No timeline events found. Check if timeline.json exists in /public and is valid.</div>;
  }

  const ev = data.events[current];

  return (
    <>
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <h1 className="bg-gradient-to-r from-electricBlue via-neonPurple to-electricBlue bg-clip-text text-6xl font-black text-transparent md:text-8xl">
          {data.title}
        </h1>
      </motion.div>
      {/* SLIDE */}
      <motion.div
        key={current}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="group mb-20 overflow-hidden rounded-3xl bg-nebulaDark/90 shadow-2xl backdrop-blur-3xl"
        onMouseEnter={stopAuto}
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
              unoptimized // Bypass optimization for external URLs
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-spaceBlack/90" />
            <p className="absolute bottom-8 left-8 text-2xl font-bold text-neonPurple">{ev.media.caption}</p>
          </div>
          <div className="p-12 md:w-1/2">
            <p className="mb-4 text-sm font-mono text-neonPurple/80">
              {ev.start_date.year}
              {ev.start_date.month && ` • ${new Date(`${ev.start_date.month}/1/${ev.start_date.year}`).toLocaleString('default', { month: 'short' })}${ev.start_date.day ? ` ${ev.start_date.day}` : ''}`}
            </p>
            <h2 className="mb-8 text-5xl font-black text-electricBlue md:text-7xl">{ev.text.headline}</h2>
            <p className="mb-10 text-xl text-grayText">{ev.text.text}</p>
            <button
              onClick={() => { stopAuto(); setModalOpen(true); }}
              className="rounded-full bg-gradient-to-r from-electricBlue to-neonPurple px-10 py-5 font-bold text-spaceBlack shadow-lg shadow-electricBlue/50 transition hover:scale-105"
            >
              Read Full Story
            </button>
          </div>
        </div>
      </motion.div>
      {/* TIMELINE — FLAGS + CLICKABLE YEARS */}
      <div className="rounded-3xl bg-nebulaDark/70 p-10 shadow-2xl backdrop-blur-3xl">
        <div className="relative">
          <div className="absolute left-0 right-0 top-12 h-1 bg-electricBlue/30" />
          <div
            ref={bar}
            className="scrollbar-hide flex gap-20 overflow-x-auto py-8 px-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {data.events.map((e: any, i: number) => {
              const active = i === current;
              const hasMonth = e.start_date.month;
              return (
                <div
                  key={i}
                  className="relative flex flex-col items-center"
                  style={{ minWidth: '120px' }}
                >
                  {/* FLAG */}
                  <button
                    onClick={() => { stopAuto(); setCurrent(i); }}
                    className={`absolute -top-32 left-1/2 w-64 -translate-x-1/2 rounded-t-2xl p-4 text-center text-sm font-bold shadow-2xl transition-all
                      ${active
                        ? 'bg-electricBlue text-crispWhite scale-110 shadow-electricBlue/70'
                        : 'bg-grayText/90 text-crispWhite hover:bg-electricBlue/80 hover:scale-105'
                      }`}
                  >
                    <div className="truncate px-2">{e.text.headline}</div>
                  </button>
                  {/* DOT */}
                  <button
                    onClick={() => { stopAuto(); setCurrent(i); }}
                    className={`z-10 h-6 w-6 rounded-full border-4 transition-all
                      ${active
                        ? 'border-electricBlue bg-electricBlue shadow-lg shadow-electricBlue/50 scale-150'
                        : 'border-grayText bg-gray-600 hover:border-electricBlue/70'
                      }`}
                  />
                  {/* YEAR + MONTH */}
                  <p className={`mt-4 text-lg font-bold transition-all
                    ${active ? 'text-electricBlue scale-125' : 'text-grayText'}
                  `}>
                    {e.start_date.year}
                    {hasMonth && (
                      <span className="block text-xs font-normal text-electricBlue/80">
                        {new Date(`${e.start_date.month}/1/${e.start_date.year}`).toLocaleString('default', { month: 'short' })}
                      </span>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
          {/* ARROWS */}
          <button
            onClick={() => { stopAuto(); bar.current?.scrollBy({ left: -400, behavior: 'smooth' }); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-electricBlue/20 p-4 backdrop-blur-sm transition hover:bg-electricBlue/40"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => { stopAuto(); bar.current?.scrollBy({ left: 400, behavior: 'smooth' }); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-electricBlue/20 p-4 backdrop-blur-sm transition hover:bg-electricBlue/40"
          >
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-h-full w-full max-w-4xl overflow-y-auto rounded-3xl bg-nebulaDark/95 p-12 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setModalOpen(false)} className="absolute right-8 top-8 rounded-full bg-electricBlue/20 p-4">
                <X className="h-6 w-6" />
              </button>
              <h3 className="mb-8 text-5xl font-black text-electricBlue">{ev.text.headline}</h3>
              <p className="mb-8 text-xl text-grayText">{ev.modalText}</p>
              <div className="border-t border-electricBlue/30 pt-8">
                <h4 className="mb-6 text-2xl font-bold text-neonPurple">Sources</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  {ev.sources.map((s: string, i: number) => (
                    <a key={i} href={s} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-nebulaDark/50 p-4 text-electricBlue hover:bg-electricBlue/10">
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
      {/* COUNTER */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-nebulaDark/80 px-6 py-3 backdrop-blur-xl">
        <p className="text-sm font-mono text-electricBlue">
          Event <span className="text-neonPurple">{current + 1}</span> / {data.events.length}
        </p>
      </div>
    </>
  );
}
