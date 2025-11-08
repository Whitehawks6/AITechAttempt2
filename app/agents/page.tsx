// app/agents/page.tsx
import Navigation from '@/components/Navigation';

export default function Agents() {
  const agents = [
    {
      name: 'Grok (by xAI)',
      description: 'Truth-seeking AI, great for real-time facts from X posts. Free tier available.',
      howTo: 'Go to x.com/grok or grok.com. Ask: "Explain quantum computing simply." Spot-check sources.',
      link: 'https://grok.com',
    },
    {
      name: 'Claude (by Anthropic)',
      description: 'Helpful for writing, coding, analysis. Focuses on safety.',
      howTo: 'Sign up at claude.ai. Prompt: "Rewrite this email professionally: [paste text]". Free with limits.',
      link: 'https://claude.ai',
    },
    {
      name: 'ChatGPT (by OpenAI)',
      description: 'Versatile for chat, ideas, learning. Multimodal (text + images).',
      howTo: 'chat.openai.com. Try: "Teach me basics of AI in 5 bullet points." Free version solid.',
      link: 'https://chat.openai.com',
    },
    // Add 3-5 more: Gemini, Perplexity, etc., with citable facts
  ];

  return (
    <div className="min-h-screen bg-spaceBlack text-crispWhite">
      <Navigation />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-electricBlue">AI Agents for Everyday Use</h1>
        <p className="text-lg mb-12 text-grayText max-w-3xl">These are free or low-cost AIs that handle tasks like summarizing docs or brainstorming ideas. Start simple, verify outputs.</p>
        <div className="space-y-8">
          {agents.map((agent, i) => (
            <div key={i} className="p-6 rounded-lg bg-nebulaDark/50 border border-electricBlue/20">
              <h2 className="text-2xl font-semibold mb-4 text-neonPurple">{agent.name}</h2>
              <p className="mb-4">{agent.description}</p>
              <p className="mb-4 font-medium">How to adapt: {agent.howTo}</p>
              <a href={agent.link} className="text-electricBlue hover:underline">Try it →</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
