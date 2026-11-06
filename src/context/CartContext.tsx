'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  note?: string;
  deposit: number; // per-unit Security Credit: 0 = exchange, 10 = new bottle
}

interface CartCtx {
  items: CartItem[];
  count: number;
  subtotal: number;
  totalDeposit: number;
  total: number;
  addItem: (item: Omit<CartItem, 'qty'>) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  updateDeposit: (id: string, deposit: number) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const addItem = useCallback((item: Omit<CartItem, 'qty'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    if (qty < 1) { removeItem(id); return; }
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  }, [removeItem]);

  const updateDeposit = useCallback((id: string, deposit: number) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, deposit } : i));
  }, []);

  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const totalDeposit = items.reduce((s, i) => s + i.deposit * i.qty, 0);
  const total = subtotal + totalDeposit;

  return (
    <Ctx.Provider value={{ items, count, subtotal, totalDeposit, total, addItem, removeItem, updateQty, updateDeposit, open, setOpen }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
