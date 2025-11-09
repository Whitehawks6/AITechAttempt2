'use client';
import { useEffect, useRef } from 'react';

export default function Smoke() {
  const smokeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const smoke = smokeRef.current;
    if (!smoke) return;

    // Create multiple fine layers for wispy density
    const createLayer = (color: string, delay: number, duration: number, size: string, left: string) => {
      const layer = document.createElement('div');
      layer.className = 'smoke-layer';
      layer.style.background = `radial-gradient(ellipse at center, ${color} 0%, transparent 70%)`;
      layer.style.animationDelay = `${delay}s`;
      layer.style.animationDuration = `${duration}s`;
      layer.style.width = size;
      layer.style.left = left;
      smoke.appendChild(layer);
      return layer;
    };

    // Generate 8-10 layers with random vars for natural flow
    const generateLayers = () => {
      for (let i = 0; i < 8; i++) {
        const isPurple = i % 2 === 0;
        const color = isPurple ? 'rgba(109, 40, 217, 0.25)' : 'rgba(30, 64, 175, 0.25)';
        const delay = -Math.random() * 30;
        const duration = 20 + Math.random() * 10;
        const size = `${40 + Math.random() * 40}%`; // Smaller, variable
        const left = `${Math.random() * 100}%`; // Spread across
        createLayer(color, delay, duration, size, left);
      }
    };
    generateLayers();

    // Clean and replenish off-screen layers
    const interval = setInterval(() => {
      Array.from(smoke.children).forEach(child => {
        if (parseFloat(getComputedStyle(child).bottom) > window.innerHeight) { // Bottom-up check
          child.remove();
        }
      });
      if (smoke.children.length < 8) generateLayers(); // Keep density
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <div ref={smokeRef} className="smoke-container" />;
}
