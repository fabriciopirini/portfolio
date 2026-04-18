import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_VERCEL_URL ?? 'https://fabriciopirini.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/shop', '/resume'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
