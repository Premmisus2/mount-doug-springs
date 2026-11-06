import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://www.mtdougsprings.com', changeFrequency: 'monthly', priority: 1 }];
}
