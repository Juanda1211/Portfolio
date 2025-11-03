import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Use the official Astro Tailwind integration instead of @tailwindcss/vite
export default defineConfig({
  site: 'https://juanda1211.github.io',
  base: '/my-portfolio',
  integrations: [tailwind()],
});
