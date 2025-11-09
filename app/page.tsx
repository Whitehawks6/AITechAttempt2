export default function Home() {
  return (
    <div className="min-h-screen bg-spaceBlack text-crispWhite">
      <section className="container mx-auto px-4 py-16 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-electricBlue">
          AI for Everyone
        </h1>
        <p className="text-xl md:text-2xl text-grayText max-w-4xl mx-auto mb-12">
          We believe AI education should be accessible to everyone—not just computer scientists. Every fact on this site is backed by citable sources. We don't use hype, we don't have paywalls, and we don't sell anything. Our goal is simple: help 2.5 billion people understand AI, from its humble beginnings to its potential future.
        </p>
        <p className="text-lg text-grayText max-w-3xl mx-auto mb-16">
          Learn through a comprehensive timeline of major milestones, breakthroughs, and future predictions. Every fact is cited. Every source is verified. Start adapting: Use agents daily, master prompts, verify facts.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/timeline" className="px-8 py-4 bg-electricBlue text-spaceBlack font-semibold rounded-lg hover:bg-neonPurple transition-colors">
            View Timeline
          </a>
          <a href="/agents" className="px-8 py-4 border border-electricBlue text-electricBlue font-semibold rounded-lg hover:bg-electricBlue/10 transition-colors">
            Explore AI Agents
          </a>
          <a href="/tools" className="px-8 py-4 border border-electricBlue text-electricBlue font-semibold rounded-lg hover:bg-electricBlue/10 transition-colors">
            Zero-Code Tools
          </a>
          <a href="/faq" className="px-8 py-4 border border-electricBlue text-electricBlue font-semibold rounded-lg hover:bg-electricBlue/10 transition-colors">
            FAQ
          </a>
        </div>
      </section>
    </div>
  )
}
