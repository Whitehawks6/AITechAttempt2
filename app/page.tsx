import TimelineEmbed from '@/components/TimelineEmbed'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Educate 2.5 billion non-tech people on AI with only citable facts. No hype, no paywalls, no sales. Get up to speed so you won't feel let behind.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
          Learn about artificial intelligence through a comprehensive timeline of major milestones, 
          breakthroughs, and future predictions. Every fact is cited. Every source is verified.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 py-8">
        <TimelineEmbed />
      </section>
    </div>
  )
}

