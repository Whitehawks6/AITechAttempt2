import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import AIBot from '@/components/AIBot'

export const metadata: Metadata = {
  title: 'AITechExplained.com - Learn AI with Facts, Not Hype',
  description: 'Educate 2.5 billion non-tech people on AI (1995-2035) with only citable facts. No hype, no paywalls, no sales.',
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
        <main>{children}</main>
        <AIBot />
      </body>
    </html>
  )
}


