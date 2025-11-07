export default function SourcesPage() {
  const sources = [
    {
      category: 'AI Research & Development',
      items: [
        'https://openai.com/research',
        'https://www.anthropic.com/research',
        'https://deepmind.com/research',
        'https://papers.nips.cc/',
        'https://www.nature.com/subjects/machine-learning',
      ],
    },
    {
      category: 'AI Companies & Products',
      items: [
        'https://openai.com',
        'https://www.anthropic.com',
        'https://x.ai',
        'https://www.perplexity.ai',
        'https://gemini.google.com',
        'https://llama.meta.com',
        'https://mistral.ai',
        'https://cohere.com',
      ],
    },
    {
      category: 'AI Tools & Applications',
      items: [
        'https://www.notion.so/product/ai',
        'https://www.jasper.ai',
        'https://www.midjourney.com',
        'https://www.descript.com',
        'https://www.runwayml.com',
        'https://replicate.com',
      ],
    },
    {
      category: 'AI History & Milestones',
      items: [
        'https://www.ibm.com/ibm/history/ibm100/us/en/icons/deepblue/',
        'https://www.chess.com/article/view/deep-blue-vs-kasparov',
        'https://en.wikipedia.org/wiki/PageRank',
        'https://www.google.com/about/our-story/',
        'https://www.ibm.com/watson',
        'https://www.nytimes.com/2011/02/17/science/17jeopardy-watson.html',
        'https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks',
        'https://www.image-net.org/',
        'https://openai.com/blog/chatgpt',
        'https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-note-2023-02-01/',
        'https://openai.com/research/gpt-4',
        'https://www.nytimes.com/2023/03/14/technology/openai-gpt4-chatgpt.html',
        'https://openai.com/sora',
        'https://www.theverge.com/2024/2/15/24073438/openai-sora-text-to-video-generator-announcement',
      ],
    },
    {
      category: 'AI Jobs & Employment',
      items: [
        'https://www.glassdoor.com/job-listing/prompt-engineer',
        'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
        'https://www.weforum.org/reports/the-future-of-jobs-report-2023',
        'https://www.mckinsey.com/capabilities/operations/our-insights/the-future-of-work-in-manufacturing',
      ],
    },
    {
      category: 'AI Ethics & Governance',
      items: [
        'https://www.un.org/en/ai-advisory-body',
        'https://www.oecd.org/digital/artificial-intelligence/',
        'https://www.who.int/news/item/28-06-2021-who-issues-first-global-report-on-ai-in-health',
      ],
    },
    {
      category: 'AI in Healthcare',
      items: [
        'https://www.nature.com/articles/s41591-021-01614-0',
        'https://www.fda.gov/medical-devices/brain-computer-interfaces',
        'https://www.nature.com/articles/s41586-021-03506-2',
      ],
    },
    {
      category: 'AI in Transportation',
      items: [
        'https://www.nhtsa.gov/technology-innovation/automated-vehicles-safety',
        'https://www.rand.org/pubs/research_reports/RR1478.html',
        'https://www.nasa.gov/mars',
        'https://www.jpl.nasa.gov/news/nasa-mars-helicopter-ingenuity',
      ],
    },
    {
      category: 'AI in Education',
      items: [
        'https://www.unesco.org/en/digital-education',
        'https://www.brookings.edu/articles/how-artificial-intelligence-is-transforming-the-world/',
      ],
    },
    {
      category: 'AI in Climate & Environment',
      items: [
        'https://www.un.org/en/climatechange',
        'https://www.nature.com/articles/s41586-021-03854-1',
      ],
    },
    {
      category: 'Quantum Computing & AI',
      items: [
        'https://www.ibm.com/quantum',
        'https://www.nature.com/articles/s41586-023-06096-3',
      ],
    },
    {
      category: 'AI Safety & Future',
      items: [
        'https://openai.com/research/planning-for-agi',
        'https://www.anthropic.com/research/when-will-we-get-agi',
      ],
    },
  ]

  return (
    <div className="min-h-screen container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4 text-center">
        Sources & Citations
      </h1>
      <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
        Master citation list of all sources used across AITechExplained.com. 
        Every fact is citable. Every source is verified.
      </p>

      <div className="max-w-5xl mx-auto space-y-8">
        {sources.map((category, index) => (
          <div key={index} className="glass rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-cyan mb-4">{category.category}</h2>
            <ul className="space-y-2">
              {category.items.map((source, sourceIndex) => (
                <li key={sourceIndex}>
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan hover:text-gold transition-colors underline break-all"
                  >
                    {source}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-3xl mx-auto glass rounded-lg p-6 text-center">
        <p className="text-gray-300 text-lg">
          This page is regularly updated as new sources are added to the site. 
          All information on AITechExplained.com is based on verified, citable sources.
        </p>
      </div>
    </div>
  )
}


