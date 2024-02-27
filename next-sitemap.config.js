/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fabriciopirini.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/blog'],
  additionalPaths: async (config) => [
    await config.transform(
      {
        ...config,
      },
      '/'
    ),
  ],
}
