export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-16 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Ignite Your AI Journey
        </h1>
        <p className="text-xl md:text-2xl text-silverWhite max-w-4xl mx-auto mb-12 text-shadow">
          Traverse the cosmic expanse of AI—no barriers, pure illumination. From 1995 origins to 2035 vistas, arm yourself with verified beacons to evolve: Command agents, forge tools, ignite resilient capabilities.
        </p>
        <p className="text-lg text-silverWhite max-w-3xl mx-auto mb-16">
          2.5 billion minds, one radiant path: Decode patterns, affirm truths, amplify your essence. Launch your ascent.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/timeline" className="px-8 py-4 bg-gradient-to-r from-electricBlue to-fireOrange text-spaceBlack font-semibold rounded-lg hover:scale-105 transition-transform pulse-flare">
            Ignite Timeline
          </a>
          <a href="/agents" className="px-8 py-4 border border-fireOrange text-fireOrange font-semibold rounded-lg hover:bg-fireOrange/10 transition-colors pulse-flare">
            Summon AI Agents
          </a>
          <a href="/tools" className="px-8 py-4 border border-fireOrange text-fireOrange font-semibold rounded-lg hover:bg-fireOrange/10 transition-colors pulse-flare">
            Forge Tools
          </a>
          <a href="/faq" className="px-8 py-4 border border-fireOrange text-fireOrange font-semibold rounded-lg hover:bg-fireOrange/10 transition-colors pulse-flare">
            Probe FAQ
          </a>
        </div>
      </section>
    </div>
  )
}
