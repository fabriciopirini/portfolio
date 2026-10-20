/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  experimental: {
    inlineCss: true,
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
}

module.exports = nextConfig
