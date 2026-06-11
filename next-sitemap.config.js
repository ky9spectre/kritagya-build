/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://agency.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
    additionalSitemaps: [],
  },
  exclude: ['/admin', '/admin/*', '/api/*', '/login'],
  changefreq: 'weekly',
  priority: 0.7,
  generateIndexSitemap: false,
};