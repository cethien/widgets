import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://obs-widgets.cethien.xyz',
  integrations: [compress(), tailwind(), mdx()]
});
