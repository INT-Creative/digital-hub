import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://intcreative.co',
  output: 'hybrid', // Enable server-side rendering for API routes
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});