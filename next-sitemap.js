/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://u-days.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/search?'
      }
    ]
  }
}
