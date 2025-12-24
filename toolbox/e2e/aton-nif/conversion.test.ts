import { expect, test } from '@playwright/test';
import translations from '../../messages/en.json' with { type: 'json' };

test('aton-nif converter works for small numbers', async ({ page }) => {
	await page.goto('/aton-nif');
	const encoder = await page.getByLabel(translations.tools.atonNifConverter.encodeLabel);
	const decoder = await page.getByLabel(translations.tools.atonNifConverter.decodeLabel);

	async function testAtonNifConversion(input: string, expected: string) {
		await encoder.fill(input);
		await expect(decoder).toHaveValue(expected);
	}

	await testAtonNifConversion('A', '6');
	await testAtonNifConversion('N', '8');
	await testAtonNifConversion('10', '12');
	await testAtonNifConversion('1A', '18');
});

test('aton-nif converter has labelled encoder and decoder inputs', async ({ page }) => {
	await page.goto('/aton-nif');

	const encoder = await page.getByLabel(translations.tools.atonNifConverter.encodeLabel);
	const decoder = await page.getByLabel(translations.tools.atonNifConverter.decodeLabel);

	await expect(encoder).toBeVisible();
	await expect(decoder).toBeVisible();
});
