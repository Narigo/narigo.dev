import { expect, test } from '@playwright/test';

test('document scanner has expected start button', async ({ page }) => {
	await page.goto('/document-scanner');
	await expect(page.locator('button')).toHaveText('start', { ignoreCase: true });
});
