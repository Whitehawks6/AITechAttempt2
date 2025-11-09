export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-16 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          AI for Everyone
        </h1>
        <p className="text-xl md:text-2xl text-silverWhite max-w-4xl mx-auto mb-12">
          We believe AI education should be accessible to everyone—not just computer scientists. Every fact on this site is backed by citable sources. We don't use hype, we don't have paywalls, and we don't sell anything. Our goal is simple: help 2.5 billion people understand AI, from its humble beginnings to its potential future.
        </p>
        <p className="text-lg text-silverWhite max-w-3xl mx-auto mb-16">
          Learn about artificial intelligence through a comprehensive timeline of major milestones, breakthroughs, and future predictions. Every fact is cited. Every source is verified.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/timeline" className="px-8 py-4 bg-subtleBlue text-spaceBlack font-semibold rounded-lg hover-minimal transition-colors">
            View Timeline
          </a>
          <a href="/agents" className="px-8 py-4 border border-subtleBlue text-subtleBlue font-semibold rounded-lg hover-minimal transition-colors">
            Explore AI Agents
          </a>
          <a href="/tools" className="px-8 py-4 border border-subtleBlue text-subtleBlue font-semibold rounded-lg hover-minimal transition-colors">
            Zero-Code Tools
          </a>
          <a href="/faq" className="px-8 py-4 border border-subtleBlue text-subtleBlue font-semibold rounded-lg hover-minimal transition-colors">
            FAQ
          </a>
        </div>
      </section>
    </div>
  )
}
