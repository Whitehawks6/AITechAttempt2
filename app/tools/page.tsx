export default function Tools() {
  const tools = [
    {
      name: 'Grok Image Generator (via xAI)',
      useCase: 'Image Creation',
      description: 'Creates images from text prompts. Offline on phones soon.',
      howTo: 'On grok.com: "Generate image of a solar-powered home." Download result. Spot-check for accuracy.',
      freeTier: 'Free with limits; SuperGrok for more.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      link: 'https://grok.com',
    },
    {
      name: 'Midjourney',
      useCase: 'Art Generation',
      description: 'Midjourney creates stunning artistic images from text descriptions. Artists, designers, and creators use it to generate concept art, illustrations, and visual content with impressive aesthetic quality and creative flair.',
      howTo: 'Join Discord server, type /imagine "futuristic city skyline". Upscale best ones. No app needed.',
      freeTier: 'Trial generations; subscription for unlimited.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      link: 'https://www.midjourney.com',
    },
    {
      name: 'Notion AI',
      useCase: 'Project Planning',
      description: 'Notion AI helps you plan projects, organize tasks, and manage workflows using artificial intelligence. It can generate project outlines, create task lists, summarize meeting notes, and assist with documentation.',
      howTo: 'In Notion app: Highlight text, click AI → Summarize. Free account to start.',
      freeTier: 'Included in free plan with limits.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      link: 'https://www.notion.so/product/ai',
    },
    {
      name: 'Canva Magic Studio',
      useCase: 'Design Editing',
      description: 'Edits photos, creates designs with AI fills/removals.',
      howTo: 'Upload photo to Canva, use Magic Eraser or Text-to-Image. Drag-drop interface.',
      freeTier: 'Free basics; Pro for advanced.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      link: 'https://canva.com',
    },
    {
      name: 'Grammarly AI',
      useCase: 'Writing Assistance',
      description: 'Rewrites emails/text for clarity, tone adjustment.',
      howTo: 'Paste text into Grammarly editor: "Make this professional." Browser extension free.',
      freeTier: 'Core features free.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      link: 'https://grammarly.com',
    },
    {
      name: 'Zapier AI Actions',
      useCase: 'Task Automation',
      description: 'Automates tasks between apps (e.g., email to spreadsheet).',
      howTo: 'Connect Gmail + Sheets: "When email arrives, add to sheet." No-code builder.',
      freeTier: 'Free for basic zaps.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      link: 'https://zapier.com',
    },
    {
      name: 'Descript',
      useCase: 'Podcast Editing',
      description: 'Descript uses AI to transcribe audio and video, allowing you to edit podcasts and videos by editing text. It can remove filler words, improve audio quality, and generate captions automatically.',
      howTo: 'Upload recording, edit transcript—AI regenerates voice. Simple timeline.',
      freeTier: 'Free trial minutes.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      link: 'https://www.descript.com',
    },
    {
      name: 'Otter.ai',
      useCase: 'Meeting Transcription',
      description: 'Transcribes meetings, summarizes discussions.',
      howTo: 'Record call in app: Auto-notes and key points. Shareable.',
      freeTier: '300 minutes/month free.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      link: 'https://otter.ai',
    },
    {
      name: 'Adobe Firefly',
      useCase: 'Image Editing',
      description: 'Generates/edits images in Photoshop ecosystem.',
      howTo: 'In web app: "Fill background with mountains." Integrates with free Express.',
      freeTier: 'Free generations with watermark.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      link: 'https://firefly.adobe.com',
    },
    {
      name: 'Replicate',
      useCase: 'Open-Source Models',
      description: 'Replicate provides access to thousands of open-source AI models for image generation, video processing, audio generation, and more. Developers can easily integrate AI capabilities into their applications using Replicate\'s API.',
      howTo: 'Select model, input prompt: "Generate 30s track: upbeat jazz." Browser-only.',
      freeTier: 'Free compute credits.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      link: 'https://replicate.com',
    },
    {
      name: 'Jasper',
      useCase: 'Marketing Copy',
      description: 'Jasper is an AI writing assistant designed for marketers and content creators. It helps generate marketing copy, blog posts, social media content, ad copy, and other marketing materials with brand voice consistency.',
      howTo: 'Input prompt like "Write ad copy for eco-friendly shoes." Customize tone/voice. Browser-based.',
      freeTier: 'Free trial; subscription for full access.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      link: 'https://www.jasper.ai',
    },
    {
      name: 'Runway',
      useCase: 'Video Generation',
      description: 'Runway provides AI-powered video generation and editing tools. It can generate videos from text, remove objects from videos, extend video clips, and apply various AI effects to create professional video content.',
      howTo: 'Input text prompt: "Generate video of flying cars in city." Edit in timeline. Web app.',
      freeTier: 'Free credits; plans for more.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      link: 'https://www.runwayml.com',
    },
  ];

  return (
    <div className="min-h-screen bg-spaceBlack text-crispWhite">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-electricBlue">Zero-Code AI Tools</h1>
        <p className="text-lg mb-12 text-grayText max-w-3xl">These tools let you create, automate, or edit without coding. Pick one, start small (e.g., test on personal tasks), verify results. Based on 2025 accessibility data—no hype, just practical entry points.</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-nebulaDark/50">
                <th className="p-4 text-left border border-electricBlue/20">Tool</th>
                <th className="p-4 text-left border border-electricBlue/20">Use Case</th>
                <th className="p-4 text-left border border-electricBlue/20">What It Does</th>
                <th className="p-4 text-left border border-electricBlue/20">How to Start</th>
                <th className="p-4 text-left border border-electricBlue/20">Free Tier</th>
                <th className="p-4 text-left border border-electricBlue/20">Link</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool, i) => (
                <tr key={i} className="hover:bg-nebulaDark/30">
                  <td className="p-4 border border-electricBlue/20 text-neonPurple font-medium">{tool.name}</td>
                  <td className="p-4 border border-electricBlue/20">{tool.useCase}</td>
                  <td className="p-4 border border-electricBlue/20">{tool.description}</td>
                  <td className="p-4 border border-electricBlue/20">{tool.howTo}</td>
                  <td className="p-4 border border-electricBlue/20">{tool.freeTier}</td>
                  <td className="p-4 border border-electricBlue/20">
                    <a href={tool.link} className="text-electricBlue hover:underline">Go →</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}


