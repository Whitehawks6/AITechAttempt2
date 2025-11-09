'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Background({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Nav evolves: Mild hue shift for subtle change
    let hue = 220; // Base
    if (pathname === '/timeline') hue = 230;
    else if (pathname === '/agents') hue = 210;
    else if (pathname === '/tools') hue = 225;
    else if (pathname === '/faq') hue = 235;
    else if (pathname === '/jobs') hue = 215;
    else if (pathname === '/sources') hue = 220;
    document.documentElement.style.setProperty('--bg-hue', hue.toString());

    // Scroll dynamics: Subtle fade + bg shift for smoky evolve
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 800, 0.6); // Gentle fade
      document.documentElement.style.setProperty('--bg-opacity', opacity.toString());
      document.body.style.backgroundPositionY = `${scrollY * 0.03}px`; // Minimal shift
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return <>{children}</>;
}
