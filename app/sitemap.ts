import { execSync } from 'child_process'
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://fabriciopirini.com'

// Get git timestamp for a file
const getLastModified = (path: string): Date => {
  try {
    const timestamp = execSync(`git log -1 --format=%ct -- ${path}`, { encoding: 'utf-8' })
    return new Date(parseInt(timestamp.trim()) * 1000)
  } catch {
    return new Date()
  }
}

const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  return [
    {
      url: BASE_URL,
      lastModified: getLastModified('app/page.tsx'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: getLastModified('app/resume/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/shop`,
      lastModified: getLastModified('app/shop/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

export default Sitemap
