export default function AgentsPage() {
  const agents = [
    {
      name: 'ChatGPT',
      bestFor: 'General conversation, writing, coding assistance, brainstorming',
      description: 'ChatGPT by OpenAI is a conversational AI that can engage in natural dialogue, answer questions, write essays and code, solve problems, and assist with a wide variety of tasks. It\'s based on GPT language models and excels at understanding context, following instructions, and generating human-like text. ChatGPT can help with everything from explaining complex topics in simple terms to creating creative content, debugging code, and providing tutoring across various subjects.',
      tryIt: 'https://chat.openai.com',
      bestPractice: 'Use ChatGPT for general questions, writing assistance, and creative tasks. Be specific in your prompts, provide context when needed, and ask follow-up questions to refine responses. Remember that ChatGPT can make mistakes, so verify important information from reliable sources.',
    },
    {
      name: 'Claude',
      bestFor: 'Long-form writing, analysis, document processing, ethical reasoning',
      description: 'Claude by Anthropic is designed to be helpful, harmless, and honest. It excels at processing long documents, writing detailed analyses, and engaging in nuanced conversations. Claude has a strong focus on safety and can handle complex reasoning tasks. It\'s particularly good at summarizing long texts, comparing documents, and providing thoughtful analysis while being transparent about its limitations and uncertainties.',
      tryIt: 'https://claude.ai',
      bestPractice: 'Use Claude for analyzing documents, long-form writing, and tasks requiring careful reasoning. Take advantage of its ability to process long contexts by uploading documents for analysis. Claude works best when you provide clear instructions and specify the format or style you want for the output.',
    },
    {
      name: 'Grok',
      bestFor: 'Real-time information, current events, conversations with personality',
      description: 'Grok by xAI is designed to provide real-time information and engage in conversations with a more direct and sometimes humorous personality. It has access to current information through integration with X (formerly Twitter) and can provide up-to-date answers about recent events, trends, and news. Grok aims to be less filtered than some other AI systems while maintaining helpfulness.',
      tryIt: 'https://x.ai',
      bestPractice: 'Use Grok for current events and real-time information. Its personality can make conversations more engaging, but always verify important facts from multiple sources. Grok works well for getting quick answers to current questions and understanding trending topics.',
    },
    {
      name: 'Perplexity',
      bestFor: 'Research, fact-checking, citations, academic queries',
      description: 'Perplexity combines AI language understanding with web search capabilities to provide accurate, cited answers to questions. It excels at research tasks, finding relevant sources, and providing information with citations. Perplexity is particularly useful for academic research, fact-checking, and getting comprehensive answers that include references to original sources, making it easier to verify information.',
      tryIt: 'https://www.perplexity.ai',
      bestPractice: 'Use Perplexity when you need accurate, cited information for research or fact-checking. It\'s excellent for academic queries and getting comprehensive answers with sources. Always review the citations provided and cross-reference important information from multiple sources for reliability.',
    },
    {
      name: 'Gemini',
      bestFor: 'Multimodal tasks, image understanding, Google integration',
      description: 'Gemini by Google is a multimodal AI that can understand and process text, images, audio, and video. It integrates with Google services and can work with various types of content simultaneously. Gemini excels at tasks that require understanding visual content, analyzing images, and working with multiple types of media. It\'s designed to be helpful across a wide range of applications from creative tasks to technical analysis.',
      tryIt: 'https://gemini.google.com',
      bestPractice: 'Use Gemini for tasks involving images, videos, or multiple types of content. It works well with Google services and can handle complex multimodal queries. When using image inputs, provide clear descriptions of what you want analyzed, and be specific about the type of information or analysis you need.',
    },
    {
      name: 'Llama 3',
      bestFor: 'Open-source development, customization, privacy-focused applications',
      description: 'Llama 3 by Meta is an open-source large language model that developers and organizations can use, modify, and deploy according to their needs. It provides strong performance across various tasks while being available for customization and integration into custom applications. Llama 3 is particularly valuable for organizations that need AI capabilities while maintaining control over their data and model behavior, making it suitable for privacy-sensitive applications.',
      tryIt: 'https://llama.meta.com',
      bestPractice: 'Use Llama 3 when you need an open-source solution that can be customized for specific needs. It\'s ideal for developers building custom AI applications or organizations requiring data privacy. Since it\'s open-source, you can fine-tune it for specific domains or use cases, but this requires technical expertise.',
    },
    {
      name: 'Mistral',
      bestFor: 'European compliance, multilingual tasks, efficient performance',
      description: 'Mistral AI provides language models that are efficient, performant, and designed with European data protection regulations in mind. Mistral models offer strong performance while being computationally efficient, making them suitable for applications where resource usage matters. They excel at multilingual tasks and are optimized for European languages and compliance requirements, making them attractive for European organizations and applications.',
      tryIt: 'https://mistral.ai',
      bestPractice: 'Use Mistral for applications requiring European data protection compliance or efficient resource usage. It works well for multilingual tasks, especially involving European languages. Mistral is a good choice when you need strong performance with lower computational requirements, making it cost-effective for scaling applications.',
    },
    {
      name: 'Cohere',
      bestFor: 'Enterprise applications, semantic search, classification',
      description: 'Cohere specializes in enterprise AI applications, focusing on semantic search, text classification, and language understanding for business use cases. Cohere\'s models are designed for integration into enterprise systems and excel at tasks like document search, content classification, sentiment analysis, and extracting insights from business documents. The platform emphasizes reliability, scalability, and ease of integration for enterprise environments.',
      tryIt: 'https://cohere.com',
      bestPractice: 'Use Cohere for enterprise applications that require semantic search, document classification, or content understanding at scale. It\'s designed for integration into business workflows and works well for processing large volumes of business documents. Cohere is particularly strong when you need reliable, production-ready AI capabilities for enterprise use cases.',
    },
    {
      name: 'Sora',
      bestFor: 'Video generation, creative video content, visual storytelling',
      description: 'Sora by OpenAI is an AI model that generates realistic video clips from text descriptions. It can create videos up to a minute long with consistent characters, proper physics, and coherent storytelling. Sora understands spatial relationships, object permanence, and can generate complex scenes with multiple characters and dynamic motion. It\'s designed for creative applications like filmmaking, marketing, education, and visual storytelling, enabling users to produce professional-quality videos from simple text prompts.',
      tryIt: 'https://openai.com/sora',
      bestPractice: 'Use Sora for generating video content from text descriptions. Be specific in your prompts about the scene, characters, actions, and style you want. Describe camera movements, lighting, and mood to get the best results. Remember that video generation is computationally intensive, so expect processing times. Review generated videos carefully and iterate on prompts to refine the output to match your vision.',
    },
    {
      name: 'Midjourney',
      bestFor: 'Image generation, artistic creation, visual design, concept art',
      description: 'Midjourney is an AI image generation tool that creates high-quality, artistic images from text descriptions. It\'s known for producing visually stunning, often surreal or highly stylized images with strong aesthetic appeal. Midjourney excels at creative and artistic image generation, making it popular among artists, designers, marketers, and content creators. The tool generates images with impressive detail, composition, and artistic flair, though results can be unpredictable and require experimentation with prompts to achieve desired outcomes.',
      tryIt: 'https://www.midjourney.com',
      bestPractice: 'Use Midjourney for creative and artistic image generation. Experiment with different prompt styles, artistic references, and technical parameters to achieve the desired aesthetic. Midjourney responds well to descriptive prompts that include style, mood, composition, and visual details. Use the platform\'s iteration features to refine images, and don\'t be afraid to experiment with unexpected combinations of concepts to discover unique visual results.',
    },
  ]

  return (
    <div className="min-h-screen container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gold mb-8 text-center">
        AI Agents
      </h1>

      {/* Intro Section */}
      <section className="mb-12 max-w-4xl mx-auto">
        <div className="glass rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-cyan mb-4">What is an AI Agent?</h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            An AI agent is a software tool that uses artificial intelligence to perform tasks autonomously. 
            AI agents can write content, analyze data, generate images and videos, answer questions, and 
            complete complex workflows without constant human supervision. These systems understand natural 
            language instructions and can adapt to different tasks, making them versatile assistants for 
            work, learning, and creativity. While thousands of AI agents exist today, the most popular 
            and widely-used agents are built by major technology companies and offer powerful capabilities 
            for everyday use. From conversational chatbots to image generators to research assistants, 
            AI agents are transforming how people interact with computers and accomplish tasks.
          </p>
        </div>
      </section>

      {/* Agents Table */}
      <section className="overflow-x-auto">
        <div className="glass rounded-lg p-4 md:p-6">
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-4 text-cyan font-semibold">Name</th>
                  <th className="text-left p-4 text-cyan font-semibold">Best For</th>
                  <th className="text-left p-4 text-cyan font-semibold">Description</th>
                  <th className="text-left p-4 text-cyan font-semibold">Try It</th>
                  <th className="text-left p-4 text-cyan font-semibold">Best Practice</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((agent, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-800 hover:bg-cyan hover:bg-opacity-10 transition-colors"
                  >
                    <td className="p-4 font-semibold text-gold">{agent.name}</td>
                    <td className="p-4 text-gray-300">{agent.bestFor}</td>
                    <td className="p-4 text-gray-300 max-w-md">{agent.description}</td>
                    <td className="p-4">
                      <a
                        href={agent.tryIt}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan hover:text-gold transition-colors underline"
                      >
                        Visit Site
                      </a>
                    </td>
                    <td className="p-4 text-gray-300 max-w-md">{agent.bestPractice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mobile Card View */}
          <div className="md:hidden space-y-6">
            {agents.map((agent, index) => (
              <div key={index} className="glass rounded-lg p-4 space-y-4">
                <h3 className="text-xl font-semibold text-gold">{agent.name}</h3>
                <div>
                  <h4 className="text-cyan font-semibold mb-2">Best For:</h4>
                  <p className="text-gray-300">{agent.bestFor}</p>
                </div>
                <div>
                  <h4 className="text-cyan font-semibold mb-2">Description:</h4>
                  <p className="text-gray-300">{agent.description}</p>
                </div>
                <div>
                  <h4 className="text-cyan font-semibold mb-2">Best Practice:</h4>
                  <p className="text-gray-300">{agent.bestPractice}</p>
                </div>
                <a
                  href={agent.tryIt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-cyan text-dark font-semibold rounded-lg hover:bg-gold transition-colors"
                >
                  Visit Site
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

