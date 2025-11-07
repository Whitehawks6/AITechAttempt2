'use client'

import { useState } from 'react'
import AIBot from './AIBot'

interface EventModalProps {
  event: {
    modalImage?: string
    modalText: string
    sources?: string[]
    title?: string
    text?: {
      headline: string
    }
  }
  onClose: () => void
}

export default function EventModal({ event, onClose }: EventModalProps) {
  const [showAIBot, setShowAIBot] = useState(false)

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <div
          className="glass-strong rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gold">
                {event.title || event.text?.headline || 'AI Event'}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            {event.modalImage && (
              <div className="mb-6">
                <img
                  src={event.modalImage}
                  alt={event.title || event.text?.headline || 'AI Event'}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}

            <div className="mb-6">
              <p className="text-gray-200 text-lg leading-relaxed">
                {event.modalText}
              </p>
            </div>

            {event.sources && event.sources.length > 0 && (
              <div className="mb-6">
                <h3 className="text-cyan font-semibold mb-2">Sources:</h3>
                <ul className="space-y-2">
                  {event.sources.map((source, index) => (
                    <li key={index}>
                      <a
                        href={source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan hover:text-gold transition-colors underline"
                      >
                        {source}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={() => setShowAIBot(true)}
                className="px-6 py-3 bg-cyan text-dark font-semibold rounded-lg hover:bg-gold transition-colors"
              >
                Ask AI
              </button>
            </div>
          </div>
        </div>
      </div>

      {showAIBot && (
        <AIBot
          context={event.modalText}
          onClose={() => setShowAIBot(false)}
        />
      )}
    </>
  )
}

