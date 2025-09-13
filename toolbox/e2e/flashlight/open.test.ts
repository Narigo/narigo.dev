import { expect, test } from '@playwright/test';

test('flashlight has expected start button', async ({ page }) => {
	await page.goto('/flashlight');
	await expect(page.locator('button img[alt^="Turned off"]')).toBeVisible();
});

test('flashlight asks for permission if it needs it', async ({ page }) => {
	await page.goto('/flashlight');
	await page.locator('button img[alt^="Turned off"]').click();
	await expect(page.locator('button img[alt^="Broken"]')).toBeVisible();
});

test('flashlight should be turned on with proper permissions', async ({ page, context }) => {
	await page.goto('/flashlight');
	await page.locator('button img[alt^="Turned off"]').click();
	await context.grantPermissions(['camera']);
	await expect(page.locator('button img[alt^="Turned on"]')).toBeVisible();
});
