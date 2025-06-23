import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'pnpm run build && pnpm run preview',
		url: 'https://localhost:4173',
		ignoreHTTPSErrors: true
	},
	use: {
		baseURL: 'https://localhost:4173',
		ignoreHTTPSErrors: true,
		launchOptions: {
			args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream']
		}
	},
	testDir: 'e2e'
});
