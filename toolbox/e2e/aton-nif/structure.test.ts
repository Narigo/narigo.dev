import { expect, test } from '@playwright/test';
import translations from '../../messages/en.json' with { type: 'json' };

test.describe('aton-nif converter', () => {
	test('has a link to the about page', async ({ page }) => {
		await page.goto('/aton-nif');
		await expect(
			page.locator('a').getByText(translations.tools.atonNifConverter.aboutLink)
		).toBeVisible();
	});

	test('has labelled encoder and decoder inputs', async ({ page }) => {
		await page.goto('/aton-nif');

		const encoder = await page.getByLabel(translations.tools.atonNifConverter.encodeLabel);
		const decoder = await page.getByLabel(translations.tools.atonNifConverter.decodeLabel);

		await expect(encoder).toBeVisible();
		await expect(decoder).toBeVisible();
	});
});
