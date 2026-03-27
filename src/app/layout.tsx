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
    "Victoria's #1 purified water store. Multi-stage filtered, oxygenated & emergency water. Drive-up filling, home delivery, and refillable 18.9L & 11.3L jugs. 104-1505 Admirals Road.",
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
    description: "Victoria's #1 purified water store. Multi-stage filtered water, oxygenated water, and home delivery across Greater Victoria.",
    type: "website",
    url: "https://www.mtdougsprings.com",
    siteName: "Mount Doug Springs",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mount Doug Springs | Victoria's Ultimate Water Store",
    description: "Premium purified & oxygenated water. Drive-up, delivery, and refill. Victoria, BC.",
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
                "name": "Mount Doug Springs — The Ultimate Water Store",
                "alternateName": "Mount Doug Springs",
                "description": "Victoria's premier purified water store offering multi-stage filtered water, hyper-oxygenated water, emergency water supply, water coolers, and accessories. Drive-up filling and home delivery across Greater Victoria, BC.",
                "url": "https://www.mtdougsprings.com",
                "telephone": "+1-250-381-2088",
                "email": "delivery@mtdougsprings.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "104-1505 Admirals Road",
                  "addressLocality": "Victoria",
                  "addressRegion": "BC",
                  "postalCode": "V9A 7B2",
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
                "paymentAccepted": "Cash, Credit Card, Debit",
                "areaServed": [
                  "Victoria, BC", "Oak Bay, BC", "Saanich, BC", "Esquimalt, BC",
                  "View Royal, BC", "Langford, BC", "Colwood, BC", "Central Saanich, BC",
                  "North Saanich, BC", "Sidney, BC"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Water Products & Accessories",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "18.9L Purified Water", "description": "Multi-stage filtered purified drinking water in BPA-free 18.9L jugs." }, "price": "9.50", "priceCurrency": "CAD" },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "11.3L Purified Water", "description": "Multi-stage filtered purified drinking water in BPA-free 11.3L jugs." }, "price": "6.50", "priceCurrency": "CAD" },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "18.9L Hyper-Oxygenated Water", "description": "Water enriched with 38-40 ppm dissolved oxygen for enhanced hydration." }, "price": "10.50", "priceCurrency": "CAD" },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "20x Purified Water Bundle", "description": "Pre-pay for 20 fills of 18.9L purified water. Save $10." }, "price": "180.00", "priceCurrency": "CAD" }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "200",
                  "bestRating": "5"
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
