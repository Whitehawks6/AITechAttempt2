// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import AIBot from '@/components/AIBot'
import Background from '@/components/Background'
import Smoke from '@/components/Smoke' // Add this

export const metadata: Metadata = {
  title: 'AITechExplained.com - Learn AI with Facts, Not Hype',
  description: 'We believe AI education should be accessible to everyone—not just computer scientists. Every fact on this site is backed by citable sources. We don\'t use hype, we don\'t have paywalls, and we don\'t sell anything. Our goal is simple: help 2.5 billion people understand AI, from its humble beginnings to its potential future.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navigation />
        <Background>
          <Smoke />
          <main>{children}</main>
        </Background>
        <AIBot />
      </body>
    </html>
  )
}
