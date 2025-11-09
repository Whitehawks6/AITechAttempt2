'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Background({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Nav evolves: Hue + orange intensity per path
    let hue = 220; // Default blue
    let orangeOpacity = 0.02; // Base fire
    if (pathname === '/timeline') { hue = 260; orangeOpacity = 0.05; } // Purple + stronger fire
    else if (pathname === '/agents') { hue = 200; orangeOpacity = 0.04; }
    else if (pathname === '/tools') { hue = 240; orangeOpacity = 0.06; }
    else if (pathname === '/faq') { hue = 280; orangeOpacity = 0.03; }
    else if (pathname === '/jobs') { hue = 210; orangeOpacity = 0.05; }
    else if (pathname === '/sources') { hue = 250; orangeOpacity = 0.04; }
    document.documentElement.style.setProperty('--bg-hue', hue.toString());
    document.documentElement.style.setProperty('--flare-opacity', orangeOpacity.toString()); // New var for fire control

    // Scroll dynamics: Fade + parallax + glow intensify
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 800, 0.3);
      const glow = 0.3 + (scrollY / 2000); // Increase glow on scroll
      document.documentElement.style.setProperty('--bg-opacity', opacity.toString());
      document.documentElement.style.setProperty('--glow-intensity', Math.min(glow, 0.6).toString());
      document.body.style.backgroundPositionY = `${scrollY * 0.1}px`; // Stronger parallax shift
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return <>{children}</>;
}
