import { MetadataRoute } from 'next'

const URL = process.env.NEXT_PUBLIC_VERCEL_URL

const Robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${URL}/sitemap.xml`,
  }
}

export default Robots
