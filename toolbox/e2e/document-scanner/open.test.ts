import { expect, test } from '@playwright/test';

test('document scanner has expected start button', async ({ page }) => {
	await page.goto('/document-scanner');
	await expect(page.locator('button.start')).toContainText(/start/i);
});

test('document scanner asks for permission if it needs it', async ({ page, context }) => {
	await page.goto('/document-scanner');
	await expect(page.locator('section.scanner')).not.toBeVisible();
	await page.locator('button.start').click();
	await context.grantPermissions(['camera']);
	await expect(page.locator('section.preview')).toContainText(/preview/i);
	await expect(page.locator('section.scanner')).toBeVisible();
});

test('document scanner has a preview bar and a camera section if permission is given', async ({
	page,
	context
}) => {
	await context.grantPermissions(['camera']);
	await page.goto('/document-scanner');
	await expect(page.locator('section.preview')).toContainText(/preview/i);
	await expect(page.locator('section.scanner')).toBeVisible();
});
