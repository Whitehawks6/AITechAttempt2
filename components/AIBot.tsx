'use client'

import { useState, useEffect } from 'react'

interface AIBotProps {
  context?: string
  onClose?: () => void
}

export default function AIBot({ context, onClose }: AIBotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setLoading(true)
    setResponse('')

    // Static Q&A fallback (since we don't have API keys)
    const staticResponses: { [key: string]: string } = {
      'what is ai': 'AI (Artificial Intelligence) is computer systems that can perform tasks typically requiring human intelligence, such as understanding language, recognizing images, making decisions, and learning from experience.',
      'what is an ai agent': 'An AI agent is a software tool that uses artificial intelligence to perform tasks autonomously. AI agents can write content, analyze data, generate images, answer questions, and complete complex workflows without constant human supervision.',
      'how does ai work': 'AI works by processing large amounts of data through algorithms called neural networks. These networks learn patterns from data, allowing the system to make predictions, recognize objects, understand language, and perform other intelligent tasks.',
      'is ai safe': 'AI safety is an ongoing area of research. While AI offers many benefits, it also raises concerns about bias, privacy, job displacement, and misuse. Responsible AI development includes testing, oversight, and ethical guidelines to ensure AI systems are safe and beneficial.',
      'what is a prompt': 'A prompt is the text input you give to an AI system to tell it what you want it to do. For example, "Write a poem about space" or "Explain quantum computing in simple terms" are prompts that instruct the AI to generate specific content.',
      'why does ai hallucinate': 'AI hallucination occurs when AI systems generate information that sounds plausible but is actually incorrect or made up. This happens because AI models predict the next most likely word or phrase based on patterns, not actual knowledge, so they can confidently state false information.',
    }

    // Simple keyword matching for demo
    const lowerMessage = message.toLowerCase()
    let foundResponse = ''
    
    for (const [key, value] of Object.entries(staticResponses)) {
      if (lowerMessage.includes(key)) {
        foundResponse = value
        break
      }
    }

    if (!foundResponse) {
      foundResponse = context
        ? `Based on the context you're viewing, I can help explain more about this topic. Could you ask a more specific question?`
        : "I'm here to help answer questions about AI. Try asking about AI agents, how AI works, AI safety, or other AI topics. For more detailed information, check out the FAQ page!"
    }

    // Simulate API delay
    setTimeout(() => {
      setResponse(foundResponse)
      setLoading(false)
    }, 1000)
  }

  // Modal mode (when called from EventModal)
  if (onClose) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60] p-4">
        <div className="glass-strong rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-cyan font-semibold text-xl">Ask AI About This Event</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>
          {context && (
            <div className="mb-4 p-4 bg-cyan bg-opacity-10 rounded-lg">
              <p className="text-sm text-gray-300">Context: {context.substring(0, 200)}...</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask a question about this event..."
              className="w-full px-4 py-2 bg-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan"
            />
            <button
              type="submit"
              className="w-full py-2 bg-cyan text-dark font-semibold rounded-lg hover:bg-gold transition-colors"
            >
              {loading ? 'Thinking...' : 'Ask'}
            </button>
          </form>
          {response && (
            <div className="mt-4 p-4 bg-cyan bg-opacity-20 rounded-lg">
              <p className="text-gray-200">{response}</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Floating bubble mode
  if (!onClose) {
    return (
      <>
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 w-16 h-16 bg-cyan rounded-full flex items-center justify-center pulse-cyan z-40 shadow-lg hover:scale-110 transition-transform"
            aria-label="Open AI Assistant"
          >
            <svg
              className="w-8 h-8 text-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </button>
        )}

        {isOpen && (
          <div className="fixed bottom-8 right-8 w-96 h-[600px] glass-strong rounded-lg shadow-2xl z-50 flex flex-col">
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-cyan font-semibold">AI Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {response && (
                <div className="bg-cyan bg-opacity-20 rounded-lg p-4">
                  <p className="text-gray-200">{response}</p>
                </div>
              )}
              {loading && (
                <div className="text-cyan">Thinking...</div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me about AI..."
                className="w-full px-4 py-2 bg-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan"
              />
              <button
                type="submit"
                className="mt-2 w-full py-2 bg-cyan text-dark font-semibold rounded-lg hover:bg-gold transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </>
    )
  }

  return null
}

