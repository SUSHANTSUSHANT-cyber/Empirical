'use client';

import { useEffect } from 'react';

/**
 * Enables progressive section fade-in as the user scrolls.
 * Respects prefers-reduced-motion — if motion is reduced the attribute
 * is never set and all sections are immediately visible (handled via CSS).
 */
export function MotionController() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.documentElement.dataset.motion = 'enabled';

    const sections = document.querySelectorAll<HTMLElement>('main > section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.motion = 'ready';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.motion;
    };
  }, []);

  return null;
}
