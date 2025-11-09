'use client';
import { useEffect, useRef } from 'react';

export default function Smoke() {
  const smokeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const smoke = smokeRef.current;
    if (!smoke) return;

    // Clone layers for continuous flow
    const layers = smoke.children;
    const cloneLayers = () => {
      for (let i = 0; i < 5; i++) { // Increased to 5 for finer density
        const clone = layers[i].cloneNode(true) as HTMLElement;
        clone.style.animationDelay = `${-Math.random() * 30}s`; // Longer random start
        clone.style.left = `${Math.random() * 100}%`; // Random horizontal spread
        clone.style.width = `${20 + Math.random() * 30}%`; // Smaller widths
        smoke.appendChild(clone);
      }
    };
    cloneLayers();

    // Clean old layers
    const interval = setInterval(() => {
      Array.from(smoke.children).forEach(child => {
        if (parseFloat(getComputedStyle(child).top) < -window.innerHeight) {
          child.remove();
          cloneLayers();
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={smokeRef} className="smoke-container">
      <div className="smoke-layer smoke-purple"></div>
      <div className="smoke-layer smoke-blue"></div>
      <div className="smoke-layer smoke-mix"></div>
      <div className="smoke-layer smoke-purple"></div>
      <div className="smoke-layer smoke-blue"></div>
    </div>
  );
}
