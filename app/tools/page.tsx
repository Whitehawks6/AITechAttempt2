export default function ToolsPage() {
  const tools = [
    {
      name: 'Notion AI',
      useCase: 'Project Planning',
      description: 'Notion AI helps you plan projects, organize tasks, and manage workflows using artificial intelligence. It can generate project outlines, create task lists, summarize meeting notes, and assist with documentation.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual Notion AI demo
      link: 'https://www.notion.so/product/ai',
    },
    {
      name: 'Jasper',
      useCase: 'Marketing Copy',
      description: 'Jasper is an AI writing assistant designed for marketers and content creators. It helps generate marketing copy, blog posts, social media content, ad copy, and other marketing materials with brand voice consistency.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual Jasper demo
      link: 'https://www.jasper.ai',
    },
    {
      name: 'Midjourney',
      useCase: 'Art Generation',
      description: 'Midjourney creates stunning artistic images from text descriptions. Artists, designers, and creators use it to generate concept art, illustrations, and visual content with impressive aesthetic quality and creative flair.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual Midjourney demo
      link: 'https://www.midjourney.com',
    },
    {
      name: 'Descript',
      useCase: 'Podcast Editing',
      description: 'Descript uses AI to transcribe audio and video, allowing you to edit podcasts and videos by editing text. It can remove filler words, improve audio quality, and generate captions automatically.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual Descript demo
      link: 'https://www.descript.com',
    },
    {
      name: 'Runway',
      useCase: 'Video Generation',
      description: 'Runway provides AI-powered video generation and editing tools. It can generate videos from text, remove objects from videos, extend video clips, and apply various AI effects to create professional video content.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual Runway demo
      link: 'https://www.runwayml.com',
    },
    {
      name: 'Replicate',
      useCase: 'Open-Source Models',
      description: 'Replicate provides access to thousands of open-source AI models for image generation, video processing, audio generation, and more. Developers can easily integrate AI capabilities into their applications using Replicate\'s API.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual Replicate demo
      link: 'https://replicate.com',
    },
  ]

  return (
    <div className="min-h-screen container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4 text-center">
        Real-World AI Tools
      </h1>
      <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
        Explore practical AI tools that people use every day to enhance productivity, 
        creativity, and workflow efficiency.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <div key={index} className="glass rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-cyan mb-2">{tool.name}</h2>
              <p className="text-gold font-medium mb-4">{tool.useCase}</p>
              <p className="text-gray-300 mb-4">{tool.description}</p>
              
              <div className="mb-4 aspect-video">
                <iframe
                  src={tool.videoUrl}
                  title={tool.name}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-cyan text-dark font-semibold text-center rounded-lg hover:bg-gold transition-colors"
              >
                Use It
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


