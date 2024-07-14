// generate-sitemap.js

const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define your base URL
const BASE_URL = 'https://crowndefencesecurity.co.uk';

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/join-our-team', changefreq: 'weekly', priority: 0.8 },


  // Add more routes as needed
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));

  sitemap.pipe(writeStream);
  
  routes.forEach(route => {
    sitemap.write(route);
  });

  sitemap.end();
  
  await streamToPromise(sitemap);

  console.log('Sitemap generated successfully!');
}

generateSitemap();
