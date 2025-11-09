'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Background({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Nav evolves: Subtle hue shift
    let hue = 220; // Base
    if (pathname === '/timeline') hue = 230; // Slight purple
    else if (pathname === '/agents') hue = 210;
    else if (pathname === '/tools') hue = 225;
    else if (pathname === '/faq') hue = 235;
    else if (pathname === '/jobs') hue = 215;
    else if (pathname === '/sources') hue = 220;
    document.documentElement.style.setProperty('--bg-hue', hue.toString());

    // Scroll dynamics: Subtle fade + bg position shift
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 800, 0.5); // Mild fade
      document.documentElement.style.setProperty('--bg-opacity', opacity.toString());
      document.body.style.backgroundPositionY = `${scrollY * 0.05}px`; // Gentle shift
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return <>{children}</>;
}
