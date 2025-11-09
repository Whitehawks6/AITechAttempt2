import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import AIBot from '@/components/AIBot'
import Background from '@/components/Background' // Add this import

export const metadata: Metadata = { /* ... */ }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navigation />
        <Background>
          <main>{children}</main>
        </Background>
        <AIBot />
      </body>
    </html>
  )
}
