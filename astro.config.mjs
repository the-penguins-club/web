// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';

// Keystatic is a local-only admin (/keystatic, no auth); it is left out of production builds.
const dev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: 'https://thepenguins.club',
  // sitemap-index.xml is generated from every built page on each build; robots.txt points at it.
  integrations: [sitemap(), ...(dev ? [react(), keystatic()] : [])]
});
