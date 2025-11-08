import TimelineEmbed from '@/components/TimelineEmbed'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            We believe AI education should be accessible to everyone—not just computer scientists. Every fact on this site is backed by citable sources. We don't use hype, we don't have paywalls, and we don't sell anything. Our goal is simple: help 2.5 billion people understand AI, from its humble beginnings to its potential future.
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

