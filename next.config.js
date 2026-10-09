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
  async redirects() {
    return [
      { source: '/shop', destination: '/', permanent: true },
      { source: '/shop/:path*', destination: '/', permanent: true },
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:path*', destination: '/', permanent: true },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/resume/:slug*',
          destination: '/api/markdown/resume/:slug*',
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
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '</llms.txt>; rel="describedby", </resume>; rel="describedby"',
          },
        ],
      },
    ]
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
