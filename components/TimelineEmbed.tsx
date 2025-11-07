'use client'

import { useEffect, useRef, useState } from 'react'
import EventModal from './EventModal'

declare global {
  interface Window {
    TL: any
  }
}

interface TimelineEvent {
  modalImage?: string
  modalText: string
  sources?: string[]
  title?: string
  text?: {
    headline: string
  }
}

export default function TimelineEmbed() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const timelineInstanceRef = useRef<any>(null)
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)
  const [timelineData, setTimelineData] = useState<any>(null)

  useEffect(() => {
    // Load timeline data
    fetch('/timeline.json')
      .then((res) => res.json())
      .then((data) => {
        setTimelineData(data)
      })
  }, [])

  useEffect(() => {
    if (!timelineRef.current || !timelineData) return

    // Load TimelineJS library
    const script = document.createElement('script')
    script.src = 'https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js'
    script.onload = () => {
      if (window.TL && timelineRef.current) {
        timelineInstanceRef.current = new window.TL.Timeline(
          timelineRef.current,
          timelineData,
          {
            width: '100%',
            height: '650',
            font: 'Default',
            start_at_end: false,
            initial_zoom: 2,
            language: 'en',
          }
        )

        // Listen for event changes
        timelineInstanceRef.current.on('select', (event: any) => {
          if (event.data && timelineData.events) {
            const eventIndex = event.data.slide_index
            const eventData = timelineData.events[eventIndex]
            if (eventData && (eventData.modalText || eventData.text)) {
              setSelectedEvent({
                modalImage: eventData.modalImage,
                modalText: eventData.modalText || eventData.text?.text || '',
                sources: eventData.sources,
                title: eventData.text?.headline,
                text: {
                  headline: eventData.text?.headline || '',
                },
              })
            }
          }
        })
      }
    }
    document.head.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      if (link.parentNode) {
        link.parentNode.removeChild(link)
      }
    }
  }, [timelineData])

  return (
    <>
      <div className="w-full my-8">
        <div ref={timelineRef} id="timeline-embed" className="w-full" />
      </div>
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  )
}

