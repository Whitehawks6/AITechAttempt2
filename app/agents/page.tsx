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
    {
      name: 'Gemini (by Google)',
      description: 'Integrated with Google tools, strong in search and multimodality.',
      howTo: 'gemini.google.com. Ask: "Summarize this PDF: [upload or link]". Free access.',
      link: 'https://gemini.google.com',
    },
    {
      name: 'Perplexity AI',
      description: 'Research-focused with citations, blends search and generation.',
      howTo: 'perplexity.ai. Query: "What\'s the state of AI in 2025?" It cites sources automatically.',
      link: 'https://perplexity.ai',
    },
    {
      name: 'Copilot (by Microsoft)',
      description: 'Built into Windows/Office, good for productivity and code suggestions.',
      howTo: 'copilot.microsoft.com or via Bing. Prompt: "Help plan my weekly schedule." Free with Microsoft account.',
      link: 'https://copilot.microsoft.com',
    },
    {
      name: 'HuggingChat (by Hugging Face)',
      description: 'Open-source based, customizable models like Llama. Community-driven.',
      howTo: 'chat.huggingface.co. Select a model, ask: "Explain machine learning basics." Fully free, no sign-up needed for basics.',
      link: 'https://huggingface.co/chat',
    },
    {
      name: 'Pi (by Inflection)',
      description: 'Conversational AI focused on empathy and personal advice.',
      howTo: 'pi.ai. Say: "How can I learn AI skills as a beginner?" Free app-based access.',
      link: 'https://pi.ai',
    },
    {
      name: 'You.com AI',
      description: 'Search-enhanced AI with web citations, good for fact-finding.',
      howTo: 'you.com. Search: "Best free AI tools for beginners" and chat refine. Free tier.',
      link: 'https://you.com',
    },
    {
      name: 'Cohere Chat',
      description: 'Enterprise-grade but free playground, strong in multilingual tasks.',
      howTo: 'chat.cohere.com. Prompt: "Translate and explain this document." Free for testing.',
      link: 'https://cohere.com/chat',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">AI Agents for Everyday Use</h1>
        <p className="text-lg mb-12 text-silverWhite max-w-3xl">These are free or low-cost AIs that handle tasks like summarizing docs or brainstorming ideas. Start simple, verify outputs. Every entry here is based on 2025 usage data from public benchmarks.</p>
        <div className="space-y-8">
          {agents.map((agent, i) => (
            <div key={i} className="p-6 rounded-lg glass border border-subtleBlue/20 hover-minimal">
              <h2 className="text-2xl font-semibold mb-4">{agent.name}</h2>
              <p className="mb-4 text-silverWhite">{agent.description}</p>
              <p className="mb-4 font-medium text-silverWhite">How to adapt: {agent.howTo}</p>
              <a href={agent.link} className="text-subtleBlue hover:text-subtlePurple hover:underline">Try it →</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
