import type { Metadata } from "next";
import { Inter, Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mtdougsprings.com'),
  title: {
    default: "Mount Doug Springs | The Ultimate Water Store in Victoria, BC",
    template: "%s | Mount Doug Springs Victoria",
  },
  description:
    "Purified and oxygenated water in Victoria, BC. Home and office delivery from Sooke to Sidney and Oak Bay to Westshore, and walk-in refills at The Ultimate Water Store, 104-1505 Admirals Road.",
  keywords: [
    "water store Victoria BC",
    "purified water Victoria",
    "water delivery Victoria BC",
    "Mount Doug Springs",
    "oxygenated water Victoria",
    "18.9L water jug Victoria",
    "water refill Victoria",
    "emergency water supply BC",
    "water cooler Victoria",
    "alkaline water Victoria",
    "Admirals Road water store",
    "water delivery Saanich",
    "water delivery Langford",
    "drinking water Victoria BC",
  ],
  authors: [{ name: "Mount Doug Springs" }],
  creator: "Mount Doug Springs",
  publisher: "Mount Doug Springs",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "Mount Doug Springs | The Ultimate Water Store in Victoria, BC",
    description: "Purified and oxygenated water in Victoria, BC. Home and office delivery from Sooke to Sidney and Oak Bay to Westshore, and walk-in refills at The Ultimate Water Store, 104-1505 Admirals Road.",
    type: "website",
    url: "https://www.mtdougsprings.com",
    siteName: "Mount Doug Springs",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mount Doug Springs | Victoria's Ultimate Water Store",
    description: "Purified and oxygenated water delivery and walk-in refills in Victoria, BC.",
  },
  alternates: {
    canonical: "https://www.mtdougsprings.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${fraunces.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen antialiased">
        {/* ── LocalBusiness JSON-LD — read by Google, Bing, ChatGPT, Perplexity ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["LocalBusiness", "Store"],
                "@id": "https://www.mtdougsprings.com/#business",
                "name": "Mount Doug Springs, The Ultimate Water Store",
                "alternateName": "Mount Doug Springs",
                "description": "Purified and oxygenated water in Victoria, BC. Home and office delivery from Sooke to Sidney and Oak Bay to Westshore, and walk-in refills at The Ultimate Water Store, 104-1505 Admirals Road.",
                "url": "https://www.mtdougsprings.com",
                "telephone": "+1-250-381-2088",
                "email": "delivery@mtdougsprings.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "104-1505 Admirals Road",
                  "addressLocality": "Victoria",
                  "addressRegion": "BC",
                  "postalCode": "V9A 2P8",
                  "addressCountry": "CA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 48.4284,
                  "longitude": -123.3798
                },
                "openingHoursSpecification": [
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:30", "closes": "18:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:30", "closes": "17:00" }
                ],
                "priceRange": "$",
                "currenciesAccepted": "CAD",
                "paymentAccepted": "E-transfer, Online banking, EFT, Cheque, Mastercard, Visa",
                "areaServed": [
                  "Victoria, BC", "Oak Bay, BC", "Saanich, BC", "Esquimalt, BC",
                  "View Royal, BC", "Langford, BC", "Colwood, BC", "Central Saanich, BC",
                  "North Saanich, BC", "Sidney, BC"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Water Products & Accessories",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "18.9L Purified Water, delivered" }, "price": "10.50", "priceCurrency": "CAD" },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "11.3L Purified Water, delivered" }, "price": "7.50", "priceCurrency": "CAD" },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "18.9L Oxygenated Water, delivered", "description": "35 to 40 ppm of oxygen." }, "price": "11.50", "priceCurrency": "CAD" },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "20 x 18.9L Purified Water, prepaid" }, "price": "200.00", "priceCurrency": "CAD" }
                  ]
                },
                "sameAs": [
                  "https://www.mtdougsprings.com"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://www.mtdougsprings.com/#website",
                "url": "https://www.mtdougsprings.com",
                "name": "Mount Doug Springs",
                "description": "The Ultimate Water Store in Victoria, BC",
                "publisher": { "@id": "https://www.mtdougsprings.com/#business" },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": { "@type": "EntryPoint", "urlTemplate": "https://www.mtdougsprings.com/order?search={search_term_string}" },
                  "query-input": "required name=search_term_string"
                }
              }
            ]
          })}}
        />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
