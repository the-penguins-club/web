// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// Keystatic is a local-only admin (/keystatic, no auth); it is left out of production builds.
const dev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  integrations: dev ? [react(), keystatic()] : []
});
