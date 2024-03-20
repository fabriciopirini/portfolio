import { getBlogPosts } from '@/app/db/blog'

const URL = process.env.NEXT_PUBLIC_VERCEL_URL

// https://claritydev.net/blog/nextjs-dynamic-sitemap-pages-app-directory
const Sitemap = async () => {
  const posts = getBlogPosts().map(({ slug, metadata }) => ({
    url: `${URL}/blog/${slug}`,
    lastModified: new Date(metadata.publishedAt).toISOString(),
  }))

  const routes = ['', '/shop'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...posts]
}

export default Sitemap
