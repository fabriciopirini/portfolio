/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path(resume|shop|blog)/:slug*',
          destination: '/api/markdown/:path/:slug*',
          has: [{ type: 'header', key: 'accept', value: '(.*)text/markdown(.*)' }],
        },
        {
          source: '/',
          destination: '/api/markdown',
          has: [{ type: 'header', key: 'accept', value: '(.*)text/markdown(.*)' }],
        },
      ],
      afterFiles: [
        {
          source: '/robots.txt',
          destination: '/api/robots',
        },
        {
          source: '/ingest/static/:path*',
          destination: 'https://us-assets.i.posthog.com/static/:path*',
        },
        {
          source: '/ingest/:path*',
          destination: 'https://us.i.posthog.com/:path*',
        },
      ],
    }
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
