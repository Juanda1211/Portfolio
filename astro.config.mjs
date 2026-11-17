import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://juanda1211.github.io',
  base: '/',
  integrations: [tailwind({ applyBaseStyles: false })],
});
