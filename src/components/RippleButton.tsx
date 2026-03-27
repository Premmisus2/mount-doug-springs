'use client';
import { MouseEvent, ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

export default function RippleButton({ children, href, onClick, style, className = '', target, rel, 'aria-label': ariaLabel }: Props) {
  function handleRipple(e: MouseEvent<HTMLElement>) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple-wave';
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  }

  const props = {
    className: `ripple-btn ${className}`,
    style,
    'aria-label': ariaLabel,
    onMouseDown: handleRipple,
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
}
