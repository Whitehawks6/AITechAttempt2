'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/agents', label: 'AI Agents' },
    { href: '/tools', label: 'AI Tools' },
    { href: '/faq', label: 'FAQ' },
    { href: '/jobs', label: 'Jobs' },
    { href: '/sources', label: 'Sources' },
  ]

  return (
    <nav className="sticky top-0 z-50 glass-strong">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold text-cyan hover:text-gold transition-colors">
            AITechExplained.com
          </Link>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm md:text-base ${
                  pathname === link.href
                    ? 'text-cyan font-semibold'
                    : 'text-gray-300 hover:text-cyan'
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

