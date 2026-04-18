import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_VERCEL_URL ?? 'https://fabriciopirini.com'

const Robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}

export default Robots
