import { MetadataRoute } from 'next'

const URL = process.env.NEXT_PUBLIC_VERCEL_URL

const Robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: URL,
    sitemap: `${URL}/sitemap.xml`,
  }
}

export default Robots
