import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });
const fraunces = Fraunces({ variable: '--font-fraunces', subsets: ['latin'], display: 'swap', weight: ['500', '600', '700'] });

const DESCRIPTION =
  'Purified and oxygenated water in Victoria, BC. Home and office delivery from Sooke to Sidney, and walk-in refills at The Ultimate Water Store, 104-1505 Admirals Road.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mtdougsprings.com'),
  title: 'Mount Doug Springs | Water delivery and The Ultimate Water Store, Victoria BC',
  description: DESCRIPTION,
  openGraph: {
    title: 'Mount Doug Springs | The Ultimate Water Store',
    description: DESCRIPTION,
    type: 'website',
    locale: 'en_CA',
    siteName: 'Mount Doug Springs',
  },
  alternates: { canonical: 'https://www.mtdougsprings.com' },
};

// Only facts from the business's own pages and Google listing. No rating markup:
// Google does not show self-published review stars for a local business.
const BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mount Doug Springs',
  alternateName: 'The Ultimate Water Store',
  description: DESCRIPTION,
  url: 'https://www.mtdougsprings.com',
  telephone: '+1-250-381-2088',
  email: 'delivery@mtdougsprings.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '104-1505 Admirals Road',
    addressLocality: 'Victoria',
    addressRegion: 'BC',
    postalCode: 'V9A 2P8',
    addressCountry: 'CA',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:30', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:30', closes: '17:00' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS) }} />
        {children}
      </body>
    </html>
  );
}
