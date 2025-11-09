import TimelineEmbed from '@/components/TimelineEmbed'

export default function Timeline() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Forge AI's Chronicle (1995-2035)</h1>
        <p className="text-lg mb-12 text-silverWhite max-w-3xl text-shadow">
          Navigate stellar milestones with absolute precision—no distortions. Each beacon a forge: Illuminate breakthroughs, temper your arsenal for the expanse.
        </p>
        <TimelineEmbed />
      </section>
    </div>
  )
}
