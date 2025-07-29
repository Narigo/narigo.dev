import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig, mergeConfig } from 'vitest/config';
import type { UserConfig } from 'vite';

export default mergeConfig(
	{
		plugins: [tailwindcss(), enhancedImages(), sveltekit()]
	},
	defineConfig({
		server: {
			host: '0.0.0.0',
			port: 5174
		},
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		}
	})
) satisfies UserConfig;
