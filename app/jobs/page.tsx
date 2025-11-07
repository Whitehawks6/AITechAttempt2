export default function JobsPage() {
  const currentJobs = [
    {
      title: 'Prompt Engineer',
      description: 'Prompt engineers design and optimize text prompts to get the best results from AI systems like ChatGPT, Claude, and other language models. They understand how AI interprets instructions and craft prompts that produce accurate, useful, and creative outputs.',
      tasks: [
        'Design and test prompts for AI language models',
        'Optimize prompts for specific use cases and industries',
        'Document prompt templates and best practices',
      ],
      skills: [
        'Strong writing and communication skills',
        'Understanding of AI language model behavior',
        'Creative problem-solving',
        'Attention to detail',
      ],
      learnMore: 'https://www.glassdoor.com/job-listing/prompt-engineer',
    },
    {
      title: 'AI Safety Auditor',
      description: 'AI safety auditors evaluate AI systems for potential risks, biases, and safety issues. They test systems to ensure they behave safely, fairly, and as intended, helping prevent harm from AI deployments.',
      tasks: [
        'Test AI systems for bias and discrimination',
        'Evaluate AI safety and security vulnerabilities',
        'Develop safety guidelines and standards',
      ],
      skills: [
        'Technical knowledge of AI systems',
        'Understanding of ethics and fairness',
        'Risk assessment abilities',
        'Communication and reporting skills',
      ],
      learnMore: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
    },
    {
      title: 'Data Labeler',
      description: 'Data labelers annotate and categorize data used to train AI systems. They label images, text, audio, and video to create training datasets that help AI learn to recognize patterns and make accurate predictions.',
      tasks: [
        'Label and annotate images, text, or other data',
        'Verify data quality and accuracy',
        'Follow labeling guidelines and standards',
      ],
      skills: [
        'Attention to detail',
        'Consistency and accuracy',
        'Basic computer skills',
        'Ability to follow guidelines',
      ],
      learnMore: 'https://www.weforum.org/reports/the-future-of-jobs-report-2023',
    },
    {
      title: 'MLOps Engineer',
      description: 'MLOps (Machine Learning Operations) engineers manage the deployment, monitoring, and maintenance of AI systems in production. They ensure AI models perform reliably, scale effectively, and integrate smoothly with existing systems.',
      tasks: [
        'Deploy and maintain AI models in production',
        'Monitor model performance and accuracy',
        'Automate ML workflows and pipelines',
      ],
      skills: [
        'Software engineering and DevOps',
        'Knowledge of machine learning frameworks',
        'Cloud computing platforms',
        'System monitoring and troubleshooting',
      ],
      learnMore: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
    },
    {
      title: 'AI Ethicist',
      description: 'AI ethicists examine the ethical implications of AI development and deployment. They work to ensure AI systems are fair, transparent, and aligned with human values, addressing concerns about bias, privacy, and societal impact.',
      tasks: [
        'Develop ethical guidelines for AI development',
        'Assess AI systems for ethical concerns',
        'Advise on policy and regulation',
      ],
      skills: [
        'Understanding of ethics and philosophy',
        'Knowledge of AI technology',
        'Critical thinking and analysis',
        'Policy and regulation knowledge',
      ],
      learnMore: 'https://www.weforum.org/reports/the-future-of-jobs-report-2023',
    },
  ]

  const futureJobs = [
    {
      title: 'Robot Repair Tech',
      description: 'Robot repair technicians will maintain and repair AI-powered robots used in manufacturing, healthcare, service industries, and homes. As robots become more common, skilled technicians will be needed to keep them operating safely and efficiently.',
      tasks: [
        'Diagnose and repair robotic systems',
        'Maintain AI software and hardware components',
        'Update robot firmware and AI models',
      ],
      skills: [
        'Mechanical and electrical engineering',
        'Understanding of robotics and AI systems',
        'Troubleshooting and problem-solving',
        'Technical documentation',
      ],
      learnMore: 'https://www.mckinsey.com/capabilities/operations/our-insights/the-future-of-work-in-manufacturing',
    },
    {
      title: 'UBI Policy Designer',
      description: 'Universal Basic Income (UBI) policy designers will develop and implement policies to support people affected by AI-driven job displacement. As AI automates more jobs, UBI may become necessary to ensure economic security and social stability.',
      tasks: [
        'Design UBI programs and policies',
        'Analyze economic impacts of automation',
        'Collaborate with government and stakeholders',
      ],
      skills: [
        'Economics and public policy',
        'Data analysis and modeling',
        'Understanding of social systems',
        'Communication and negotiation',
      ],
      learnMore: 'https://www.weforum.org/reports/the-future-of-jobs-report-2023',
    },
    {
      title: 'AI Trainer',
      description: 'AI trainers will work directly with AI systems to improve their performance through training, fine-tuning, and feedback. They will help AI learn new skills, correct mistakes, and adapt to specific domains and use cases.',
      tasks: [
        'Train and fine-tune AI models',
        'Provide feedback to improve AI performance',
        'Curate training datasets',
      ],
      skills: [
        'Understanding of machine learning',
        'Domain expertise in specific fields',
        'Data curation and analysis',
        'Patience and attention to detail',
      ],
      learnMore: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
    },
    {
      title: 'Synthetic Data Curator',
      description: 'Synthetic data curators will create and manage artificially generated datasets used to train AI systems. As privacy concerns limit access to real data, synthetic data that mimics real patterns becomes crucial for AI development.',
      tasks: [
        'Generate synthetic training datasets',
        'Ensure synthetic data quality and diversity',
        'Validate synthetic data against real data',
      ],
      skills: [
        'Understanding of data science',
        'Knowledge of generative AI',
        'Quality assurance',
        'Domain expertise',
      ],
      learnMore: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
    },
    {
      title: 'Neuro-AI Interface Designer',
      description: 'Neuro-AI interface designers will create systems that connect human brains with AI, enabling direct thought-based control of devices and seamless integration between biological and artificial intelligence.',
      tasks: [
        'Design brain-computer interfaces',
        'Develop AI systems that interpret neural signals',
        'Test and validate interface safety and usability',
      ],
      skills: [
        'Neuroscience and brain science',
        'AI and machine learning',
        'Human-computer interaction',
        'Safety and ethics',
      ],
      learnMore: 'https://www.nature.com/articles/s41586-021-03506-2',
    },
  ]

  const JobCard = ({ job }: { job: typeof currentJobs[0] }) => (
    <div className="glass rounded-lg p-6 hover:scale-105 transition-transform">
      <h3 className="text-2xl font-semibold text-gold mb-3">{job.title}</h3>
      <p className="text-gray-300 mb-4">{job.description}</p>
      
      <div className="mb-4">
        <h4 className="text-cyan font-semibold mb-2">Example Tasks:</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {job.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-cyan font-semibold mb-2">Skills Employers Want:</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {job.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <a
        href={job.learnMore}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-2 bg-cyan text-dark font-semibold rounded-lg hover:bg-gold transition-colors"
      >
        Learn More
      </a>
    </div>
  )

  return (
    <div className="min-h-screen container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4 text-center">
        AI Jobs: Current & Future
      </h1>
      <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
        Explore current AI jobs and emerging roles that will shape the future of work.
      </p>

      {/* Current Jobs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-cyan mb-8">Current AI Jobs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </section>

      {/* Future Jobs */}
      <section>
        <h2 className="text-3xl font-bold text-cyan mb-8">Future AI Jobs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </section>
    </div>
  )
}


