import { MetadataRoute } from 'next'

const URL = process.env.NEXT_PUBLIC_VERCEL_URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/private/',
    },
    host: URL,
    sitemap: `${URL}/sitemap.xml`,
  }
}
