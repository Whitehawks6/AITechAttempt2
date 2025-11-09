'use client'
import Link from 'next/link'
import Image from 'next/image'
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
    <nav className="sticky top-0 z-50 glass-strong">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/">
            <Image
              src="/AITechExplainedLogo.png" // Path to your uploaded image
              alt="AITech Explained Logo"
              width={80} // Adjust based on your image size - test for responsiveness
              height={20}
              className="hover-minimal"
            />
          </Link>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm md:text-base hover-minimal ${
                  pathname === link.href
                    ? 'text-subtleBlue font-semibold'
                    : 'text-silverWhite hover:text-subtlePurple'
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
