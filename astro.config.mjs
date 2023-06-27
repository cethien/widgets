import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
	site: 'https://cethien.github.io',
	base: '/obs-widgets',
	integrations: [compress(), tailwind()]
});
