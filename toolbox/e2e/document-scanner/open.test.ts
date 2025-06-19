import { expect, test } from '@playwright/test';

test('document scanner has expected start button', async ({ page }) => {
	await page.goto('/document-scanner');
	await expect(page.locator('button')).toContainText(/start/i);
});

test('document scanner has a preview bar and a camera section', async ({ page }) => {
	await page.goto('/document-scanner');
	await expect(page.locator('section')).toContainText(/preview/i);
	await expect(page.locator('section')).toContainText(/camera/i);
});
