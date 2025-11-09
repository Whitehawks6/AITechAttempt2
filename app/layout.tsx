// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import AIBot from '@/components/AIBot'
import Background from '@/components/Background'
import Smoke from '@/components/Smoke'

export const metadata: Metadata = { /* ... */ }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> {/* Preload Inter if used */}
      </head>
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
