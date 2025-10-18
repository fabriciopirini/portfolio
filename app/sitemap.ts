const URL = process.env.NEXT_PUBLIC_VERCEL_URL

// https://claritydev.net/blog/nextjs-dynamic-sitemap-pages-app-directory
const Sitemap = async () => {
  const routes = ['', '/shop'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}

export default Sitemap
