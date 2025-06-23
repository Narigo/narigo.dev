import { expect, test } from '@playwright/test';

test('document scanner has expected start button', async ({ page }) => {
	await page.goto('/document-scanner');
	await expect(page.locator('button.start')).toContainText(/start/i);
});

test('document scanner has a preview bar and a camera section', async ({ page, context }) => {
	await page.goto('/document-scanner');
	console.log('h2 = ', await page.locator('h2', {hasText: /scannerState/i}).innerText());
    await context.grantPermissions(["camera"]);
	console.log('h2 = ', await page.locator('h2', {hasText: /scannerState/i}).innerText());
	await page.locator('button.start').click();
	console.log('h2 = ', await page.locator('h2', {hasText: /scannerState/i}).innerText());
    await context.grantPermissions(["camera"]);
	console.log('h2 = ', await page.locator('h2', {hasText: /scannerState/i}).innerText());
	await expect(page.locator('section.preview')).toContainText(/preview/i);
	await expect(page.locator('section.scanner')).toBeVisible();
});
