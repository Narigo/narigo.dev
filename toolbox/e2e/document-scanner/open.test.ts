import { expect, test } from '@playwright/test';

test('document scanner has expected start button', async ({ page }) => {
	await page.goto('/document-scanner');
	await expect(page.locator('button')).toHaveText('start', { ignoreCase: true });
});

test('document scanner has a preview bar and a camera section', async ({page}) => {
    await page.goto('/document-scanner');
    await expect(page.locator('section')).toHaveText('preview', { ignoreCase: true });
    await expect(page.locator('section')).toHaveText('camera', { ignoreCase: true });
})