import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Use the official Astro Tailwind integration instead of @tailwindcss/vite
export default defineConfig({
  integrations: [tailwind()],
});
