// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    site: 'https://ajim3796.github.io',
    base: '/ajim-new-portfolio',
});
