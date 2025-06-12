import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'pnpm run build && pnpm run preview',
		url: 'https://localhost:4173',
		ignoreHTTPSErrors: true
	},
	use: {
		baseURL: 'https://localhost:4173',
		ignoreHTTPSErrors: true
	},
	testDir: 'e2e'
});
