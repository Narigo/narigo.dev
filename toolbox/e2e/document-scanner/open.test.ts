import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/document-scanner');
	await expect(page.locator('button')).toHaveText('start', { ignoreCase: true });
});
