'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/timeline', label: 'Timeline' },
    { href: '/agents', label: 'AI Agents' },
    { href: '/tools', label: 'AI Tools' },
    { href: '/faq', label: 'FAQ' },
    { href: '/jobs', label: 'Jobs' },
    { href: '/sources', label: 'Sources' },
  ]
  return (
    <nav className="sticky top-0 z-50 glass-strong bg-gradient-to-r from-spaceBlack to-nebulaDark/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold text-silverWhite hover:text-fireOrange transition-colors text-shadow">
            AITechExplained.com
          </Link>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm md:text-base pulse-flare ${
                  pathname === link.href
                    ? 'text-fireOrange font-semibold text-shadow'
                    : 'text-silverWhite hover:text-fireOrange'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
