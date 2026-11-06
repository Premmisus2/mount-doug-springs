// One icon set for the whole site, drawn in the same line style as the "How We Deliver Freshness" cards.
// Use these everywhere instead of emojis, so every phone, pin and mail icon on the site is the same one.

type IconProps = { size?: number; color?: string; strokeWidth?: number };

function Svg({ size = 18, color = 'currentColor', strokeWidth = 1.8, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      {children}
    </svg>
  );
}

export function PhoneIcon(p: IconProps) {
  return <Svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></Svg>;
}

export function PinIcon(p: IconProps) {
  return <Svg {...p}><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></Svg>;
}

export function MailIcon(p: IconProps) {
  return <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Svg>;
}

export function ClockIcon(p: IconProps) {
  return <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Svg>;
}

export function StoreIcon(p: IconProps) {
  return <Svg {...p}><path d="M4 9l1.5-5h13L20 9" /><path d="M4 9h16v2a3 3 0 0 1-5.33 1.9A3 3 0 0 1 12 14a3 3 0 0 1-2.67-1.1A3 3 0 0 1 4 11V9z" /><path d="M5.5 13.5V20h13v-6.5" /><path d="M10 20v-4h4v4" /></Svg>;
}

export function DropIcon(p: IconProps) {
  return <Svg {...p}><path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z" /><path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5" /></Svg>;
}

export function CarIcon(p: IconProps) {
  return <Svg {...p}><path d="M5 16V11l2-5h10l2 5v5" /><path d="M3 16h18v2a1 1 0 0 1-1 1h-1M3 16v2a1 1 0 0 0 1 1h1" /><path d="M5 11h14" /><circle cx="7.5" cy="16" r="1.5" /><circle cx="16.5" cy="16" r="1.5" /></Svg>;
}

export function ExchangeIcon(p: IconProps) {
  return <Svg {...p}><path d="M5 12a7 7 0 0 1 12.2-4.7" /><path d="M19 12a7 7 0 0 1-12.2 4.7" /><path d="M17.5 3.5v4h-4" /><path d="M6.5 20.5v-4h4" /></Svg>;
}

export function BottleIcon(p: IconProps) {
  return <Svg {...p}><path d="M10 2h4v3l2 2v2.5a2 2 0 0 1 0 3V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-7.5a2 2 0 0 1 0-3V7l2-2V2z" /><path d="M8 12.5h8" /></Svg>;
}

export function ArrowIcon(p: IconProps) {
  return <Svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>;
}

// The navy square tile the freshness cards use, for icons that sit beside a heading.
export function IconTile({ children, size = 44 }: { children: React.ReactNode; size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 10, flexShrink: 0,
      background: '#1E3892', color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {children}
    </div>
  );
}
