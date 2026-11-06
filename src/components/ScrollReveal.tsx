'use client';
import { useEffect, useRef, ReactNode } from 'react';
import type React from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  variant?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  style,
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const variantClass = variant === 'left' ? 'reveal-left' : variant === 'right' ? 'reveal-right' : variant === 'scale' ? 'reveal-scale' : 'reveal';
    el.classList.add(variantClass);
    if (delay) el.style.transitionDelay = `${delay}s`;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('in');
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay]);

  return (
    // @ts-ignore
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
