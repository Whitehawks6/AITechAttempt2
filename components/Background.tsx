'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Background({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Nav evolves: Shift hue based on path
    let hue = 220; // Default blue
    if (pathname === '/timeline') hue = 260; // Purple shift
    else if (pathname === '/agents') hue = 200; // Cooler blue
    else if (pathname === '/tools') hue = 240; // Mid blue-purple
    else if (pathname === '/faq') hue = 280; // Deeper purple
    else if (pathname === '/jobs') hue = 210; // Light blue
    else if (pathname === '/sources') hue = 250; // Balanced
    document.documentElement.style.setProperty('--bg-hue', hue.toString());

    // Scroll dynamics: Fade opacity
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 800, 0.3); // Fade to 30% min
      document.documentElement.style.setProperty('--bg-opacity', opacity.toString());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return <>{children}</>;
}
