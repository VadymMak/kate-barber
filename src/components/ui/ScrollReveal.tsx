'use client';
import { useEffect, useRef, type ReactNode } from 'react';

type Direction = 'up' | 'left' | 'right' | 'scale';

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const CLASS: Record<Direction, string> = {
  up:    'reveal',
  left:  'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
};

export default function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already in viewport on mount — show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setTimeout(() => el.classList.add('is-visible'), delay);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('is-visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${CLASS[direction]}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}
