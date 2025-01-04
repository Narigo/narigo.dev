import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig, mergeConfig } from 'vitest/config';
import type { UserConfig } from 'vite';

export default mergeConfig(
	{
		plugins: [enhancedImages(), sveltekit()]
	},
	defineConfig({
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		}
	})
) satisfies UserConfig;
