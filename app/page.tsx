export default function Home() {
  return (
    <div className="min-h-screen bg-spaceBlack text-crispWhite">
      <section className="container mx-auto px-4 py-16 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-electricBlue">
          Navigate the AI Cosmos
        </h1>
        <p className="text-xl md:text-2xl text-grayText max-w-4xl mx-auto mb-12">
          Chart your course through AI's evolution—no barriers, just verified facts. From 1995 foundations to 2035 horizons, equip yourself with knowledge to adapt: Master agents, wield tools, build resilient skills.
        </p>
        <p className="text-lg text-grayText max-w-3xl mx-auto mb-16">
          2.5 billion non-tech minds, one clear path: Understand patterns, verify truths, augment your potential. Start your trajectory.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/timeline" className="px-8 py-4 bg-electricBlue text-spaceBlack font-semibold rounded-lg hover:bg-neonPurple transition-colors">
            Launch Timeline
          </a>
          <a href="/agents" className="px-8 py-4 border border-electricBlue text-electricBlue font-semibold rounded-lg hover:bg-electricBlue/10 transition-colors">
            Deploy AI Agents
          </a>
          <a href="/tools" className="px-8 py-4 border border-electricBlue text-electricBlue font-semibold rounded-lg hover:bg-electricBlue/10 transition-colors">
            Activate Tools
          </a>
          <a href="/faq" className="px-8 py-4 border border-electricBlue text-electricBlue font-semibold rounded-lg hover:bg-electricBlue/10 transition-colors">
            Query FAQ
          </a>
        </div>
      </section>
    </div>
  )
}
