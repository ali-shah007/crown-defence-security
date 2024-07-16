// generate-sitemap.js

const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define your base URL
const BASE_URL = 'https://crowndefencesecurity.co.uk';

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about-crown-defence-security-uk', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact-crown-security-uk', changefreq: 'weekly', priority: 0.8 },
  { url: '/security-services-uk', changefreq: 'weekly', priority: 0.8 },
  { url: '/construction-site-security-uk', changefreq: 'weekly', priority: 0.8 },
  { url: '/fire-marshal-uk', changefreq: 'weekly', priority: 0.8 },
  { url: '/traffic-marshal-uk', changefreq: 'weekly', priority: 0.8 },
  { url: '/dog-handler-security-uk', changefreq: 'weekly', priority: 0.8 },
  { url: '/patrolling-security-uk', changefreq: 'weekly', priority: 0.8 },
  { url: '/key-holding-service-uk', changefreq: 'weekly', priority: 0.8 },
  { url: '/cctv-monitoring-uk', changefreq: 'weekly', priority: 0.8 },
  { url: '/escort-services-uk', changefreq: 'weekly', priority: 0.8 },
  { url: '/subcontracting-service-uk', changefreq: 'weekly', priority: 0.8 },
  // Add more routes as needed
];

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({ hostname: BASE_URL });
    const writeStream = createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));

    sitemap.pipe(writeStream);

    routes.forEach(route => {
      sitemap.write(route);
    });

    sitemap.end();

    await streamToPromise(sitemap);

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
