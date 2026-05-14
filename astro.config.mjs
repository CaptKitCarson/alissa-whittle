// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// Production domain confirmed by Alissa 2026-05-14: www.alissawhittle.com.
// Used for canonical URLs, OG absolute URLs, and sitemap-index.xml generation.
export default defineConfig({
  site: 'https://www.alissawhittle.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
