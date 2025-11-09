import TimelineEmbed from '@/components/TimelineEmbed'

export default function Timeline() {
  return (
    <div className="min-h-screen bg-spaceBlack text-crispWhite">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-electricBlue">AI Timeline (1995-2035)</h1>
        <p className="text-lg mb-12 text-grayText max-w-3xl">
          Major milestones with facts only—no speculation. Every event cited. Use to understand evolution and adapt: See patterns in breakthroughs, plan skills accordingly.
        </p>
        <TimelineEmbed />
      </section>
    </div>
  )
}
