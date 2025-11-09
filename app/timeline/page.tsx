'use client';
import dynamic from 'next/dynamic';

const TimelineEmbed = dynamic(() => import('@/components/TimelineEmbed'), { ssr: false });

export default function Timeline() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">AI Timeline (1995-2035)</h1>
        <p className="text-lg mb-12 text-silverWhite max-w-3xl">Learn about artificial intelligence through a comprehensive timeline of major milestones, breakthroughs, and future predictions. Every fact is cited. Every source is verified.</p>
        <TimelineEmbed />
      </section>
    </div>
  )
}
