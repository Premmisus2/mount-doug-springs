import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.mtdougsprings.com';
  const now = new Date();

  return [
    { url: base,                                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/order`,                         lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/the-ultimate-water-store`,      lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/hyper-oxygenated-water`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/delivery-info`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/emergency-water`,               lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/cooler-help`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
