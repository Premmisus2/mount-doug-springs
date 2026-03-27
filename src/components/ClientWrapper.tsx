'use client';

import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';
import { ReactNode, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.42s cubic-bezier(0.22,1,0.36,1), transform 0.42s cubic-bezier(0.22,1,0.36,1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 20);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div ref={ref} style={{ willChange: 'opacity, transform' }}>
      {children}
    </div>
  );
}

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <PageTransition>
        {children}
      </PageTransition>
      <CartDrawer />
    </CartProvider>
  );
}
