// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// TODO at launch: confirm production domain with Alissa and update `site` below.
// Used for canonical URLs, OG absolute URLs, and sitemap-index.xml generation.
export default defineConfig({
  site: 'https://alissawhittle.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
