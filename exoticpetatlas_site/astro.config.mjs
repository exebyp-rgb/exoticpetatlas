import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Astro configuration
export default defineConfig({
  site: 'https://exoticpetatlas.com',
  integrations: [tailwind(), sitemap()],
});