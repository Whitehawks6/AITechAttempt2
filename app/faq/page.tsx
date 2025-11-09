'use client';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is AI?',
      answer: 'AI (Artificial Intelligence) is computer systems that can perform tasks typically requiring human intelligence, such as understanding language, recognizing images, making decisions, and learning from experience. AI systems use algorithms and data to identify patterns, make predictions, and solve problems. In 2025 terms: Software that predicts next words (chatbots), pixels (images), or actions (self-driving). Adapt by using it for daily tasks like summaries, always verify outputs.',
    },
    {
      question: 'What is a prompt?',
      answer: 'A prompt is the text input you give to an AI system to tell it what you want it to do. For example, "Write a poem about space" or "Explain quantum computing in simple terms" are prompts that instruct the AI to generate specific content. Good prompts are clear, specific, and include relevant context. Adapt: Use pattern TASK + CONTEXT + FORMAT, e.g., "Summarize this PDF on solar energy. I\'m a homeowner. Bullet points, max 10."',
    },
    {
      question: 'Why does AI hallucinate?',
      answer: 'AI hallucination occurs when AI systems generate information that sounds plausible but is actually incorrect or made up. This happens because AI models predict the next most likely word or phrase based on patterns in training data, not actual knowledge or facts. The AI doesn\'t "know" what it\'s saying—it\'s generating text that fits patterns it learned, which can include false information. 2025 rate: 5-20% errors. Adapt: Spot-check facts with sources.',
    },
    {
      question: 'Is AI safe?',
      answer: 'AI safety is an ongoing area of research and concern. While AI offers many benefits, it also raises issues about bias, privacy, job displacement, misuse, and control of powerful systems. Responsible AI development includes testing, oversight, ethical guidelines, and safety measures. However, AI systems can make mistakes, be biased, or be used maliciously, so careful development and regulation are important. For personal use: Low-risk if you verify outputs and protect data.',
    },
    {
      question: 'How does AI learn?',
      answer: 'AI learns through machine learning, where algorithms process large amounts of data to identify patterns. During training, the AI adjusts its internal parameters based on examples, gradually improving its performance on tasks. Different types of learning include supervised learning (learning from labeled examples), unsupervised learning (finding patterns in data), and reinforcement learning (learning through trial and error with rewards).',
    },
    {
      question: 'What is machine learning?',
      answer: 'Machine learning is a subset of AI where computer systems learn and improve from experience without being explicitly programmed for every task. Instead of following fixed instructions, machine learning algorithms identify patterns in data and use those patterns to make predictions or decisions on new data.',
    },
    {
      question: 'What is deep learning?',
      answer: 'Deep learning is a type of machine learning that uses artificial neural networks with multiple layers (hence "deep") to learn complex patterns in data. These networks can automatically discover intricate features and representations, making them powerful for tasks like image recognition, natural language processing, and speech recognition.',
    },
    {
      question: 'Can AI replace human jobs?',
      answer: 'AI can automate certain tasks and jobs, particularly those involving routine, repetitive work or data processing. However, AI also creates new jobs and can augment human capabilities rather than simply replacing them. The impact varies by industry and role. Many experts believe AI will transform jobs rather than eliminate all of them, requiring workers to adapt and learn new skills. 2025 data: 85% of jobs evolve, not vanish (McKinsey). Adapt: Integrate tools for 2x productivity.',
    },
    {
      question: 'What is an AI agent?',
      answer: 'An AI agent is a software tool that uses artificial intelligence to perform tasks autonomously. AI agents can complete multi-step tasks, make decisions, use software tools, and work toward goals without constant human supervision. They differ from simple chatbots by maintaining context across interactions and being able to take actions in digital environments. Adapt: Start with free ones for emails or research—see agents page.',
    },
    {
      question: 'How accurate is AI?',
      answer: 'AI accuracy varies widely depending on the task, the quality of training data, and the specific system. Some AI systems achieve very high accuracy for specific tasks (like image recognition), while others are less reliable, especially for complex reasoning or tasks requiring real-world knowledge. It\'s important to verify AI outputs, especially for important decisions, as AI can make mistakes or be confidently wrong.',
    },
    {
      question: 'What is GPT?',
      answer: 'GPT stands for "Generative Pre-trained Transformer." It\'s a type of large language model developed by OpenAI that can generate human-like text. GPT models are trained on vast amounts of text data and can perform tasks like answering questions, writing content, translating languages, and coding. Each version (GPT-3, GPT-4, etc.) represents improvements in capability and performance.',
    },
    {
      question: 'What is a neural network?',
      answer: 'A neural network is a computing system inspired by biological brains, consisting of interconnected nodes (neurons) organized in layers. Information flows through these layers, with each connection having a weight that gets adjusted during training. Neural networks can learn complex patterns and relationships in data, making them fundamental to modern AI.',
    },
    {
      question: 'Is AI conscious?',
      answer: 'Current AI systems are not conscious. They process information and generate outputs based on patterns in data, but they don\'t have subjective experience, self-awareness, or consciousness as humans understand it. AI can simulate conversation and behavior that seems intelligent, but it lacks genuine understanding or awareness. The question of whether future AI could become conscious remains a topic of debate among scientists and philosophers.',
    },
    {
      question: 'What is AGI?',
      answer: 'AGI (Artificial General Intelligence) refers to AI systems that can perform any intellectual task a human can do, with the same level of versatility and adaptability. Unlike narrow AI designed for specific tasks, AGI would have broad intelligence across many domains. True AGI does not yet exist, though some systems are approaching more general capabilities. See timeline for projections.',
    },
    {
      question: 'How is AI used in everyday life?',
      answer: 'AI is used in many everyday applications: search engines, social media feeds, navigation apps, voice assistants (Siri, Alexa), recommendation systems (Netflix, Amazon), spam filters, facial recognition on phones, translation apps, and more. AI powers features we often take for granted, making technology more helpful and personalized. In 2025: Offline on phones for privacy.',
    },
    {
      question: 'What is computer vision?',
      answer: 'Computer vision is a field of AI that enables computers to interpret and understand visual information from images and videos. It allows AI to recognize objects, identify faces, read text, analyze medical images, enable autonomous vehicles to "see" the road, and perform many other visual tasks that previously required human vision.',
    },
    {
      question: 'What is natural language processing?',
      answer: 'Natural language processing (NLP) is a branch of AI that focuses on enabling computers to understand, interpret, and generate human language. NLP powers chatbots, translation services, sentiment analysis, voice assistants, and text generation. It allows AI to work with language in written or spoken form.',
    },
    {
      question: 'Can AI be biased?',
      answer: 'Yes, AI can be biased. AI systems learn from data, and if training data contains biases (based on race, gender, age, etc.), the AI can reproduce and amplify those biases. Bias can also come from how problems are framed or how systems are designed. Addressing AI bias requires careful attention to training data, testing, and ongoing monitoring to ensure fair and equitable AI systems.',
    },
    {
      question: 'What is reinforcement learning?',
      answer: 'Reinforcement learning is a type of machine learning where an AI agent learns by interacting with an environment and receiving rewards or penalties for its actions. The agent tries different actions, learns which ones lead to positive outcomes, and gradually improves its strategy. This approach has been used successfully in game-playing AI (like AlphaGo) and robotics.',
    },
    {
      question: 'How much data does AI need?',
      answer: 'The amount of data AI needs varies greatly. Simple tasks might require thousands of examples, while complex systems like large language models are trained on billions or trillions of data points. Generally, more data leads to better performance, but the quality of data is also crucial. Some modern AI techniques can learn from smaller datasets through techniques like transfer learning or few-shot learning.',
    },
    {
      question: 'What is transfer learning?',
      answer: 'Transfer learning is a technique where an AI model trained on one task is adapted for a different but related task. Instead of training from scratch, the model uses knowledge gained from the first task, requiring less data and training time for the new task. This makes AI development more efficient and accessible.',
    },
    {
      question: 'Is AI expensive to use?',
      answer: 'AI costs vary widely. Many consumer AI tools offer free or low-cost access, while enterprise AI solutions can be expensive. Training large AI models requires significant computational resources and can cost millions of dollars, but using pre-trained models through APIs is often affordable. Costs are generally decreasing as the technology becomes more efficient and accessible—2025: 10-100x cheaper than 2023.',
    },
    {
      question: 'What is the future of AI?',
      answer: 'The future of AI likely includes more capable and general systems, better integration into daily life and work, improved safety and reliability, and ongoing challenges around ethics, regulation, and societal impact. Many experts predict AI will continue transforming industries, creating new possibilities while raising important questions about jobs, privacy, control, and the relationship between humans and intelligent machines. See timeline for 1995-2035 milestones.',
    },
    {
      question: 'How do I start with AI agents?',
      answer: 'Pick one free like Grok or Claude. Sign up, ask simple: "Summarize this article: [paste link]". Practice daily—rewrite emails, explain concepts. From agents page: Verify 5-20% error rate. Builds skills without code.',
    },
    {
      question: 'What skills do I need for the AI future?',
      answer: 'Prompting basics, data literacy, ethical thinking. No coding required—zero-code tools (from tools page) handle rest. 2030 projection: 2x productivity for adapters (Epoch AI forecasts). Start: Daily practice, read timeline for context.',
    },
    {
      question: 'How can AI help me emotionally prepare?',
      answer: 'Use agents for scenarios: "How might AI change teaching jobs?" Gets grounded views. Timeline shows evolution—not overnight takeover. Adapt: Focus on augmentation (AI + human), build resilience via small wins (e.g., tool-assisted learning).',
    },
    {
      question: 'Where are all the sources?',
      answer: 'Every fact cited—check /sources page for full list from timeline.json and benchmarks. No unsubstantiated claims.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Unveil AI Enigmas</h1>
        <p className="text-lg mb-12 text-silverWhite max-w-3xl text-shadow">Direct revelations on AI essence, evolution, preparation. From 2025 astral records—no veils. If unresolved, summon the AI oracle or traverse timeline/agents/tools.</p>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-fireOrange/20 rounded-lg glass">
              <button
                className="w-full p-6 text-left flex justify-between items-center font-medium"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.question}
                <span className="text-fireOrange">{openIndex === i ? '-' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-silverWhite">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


