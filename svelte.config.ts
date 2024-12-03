import adapter from '@sveltejs/adapter-static';
import { Config } from '@sveltejs/kit';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	}
} satisfies Config;
