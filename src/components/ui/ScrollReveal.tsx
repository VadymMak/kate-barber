'use client';
import { useEffect, useRef, type ReactNode, type ElementType } from 'react';

type Direction = 'up' | 'left' | 'right' | 'scale';

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: ElementType;
}

const CLASS: Record<Direction, string> = {
  up:    'reveal',
  left:  'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('is-visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`${CLASS[direction]}${className ? ` ${className}` : ''}`}>
      {children}
    </Tag>
  );
}
