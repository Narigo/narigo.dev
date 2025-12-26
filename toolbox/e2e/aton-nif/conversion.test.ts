import { expect, test } from '@playwright/test';
import translations from '../../messages/en.json' with { type: 'json' };

test.describe('aton-nif conversion', () => {
	test('works for small numbers from aton-nif to decimal', async ({ page }) => {
		await page.goto('/aton-nif');
		const decoder = await page.getByLabel(translations.tools.atonNifConverter.decodeLabel);
		const encoder = await page.getByLabel(translations.tools.atonNifConverter.encodeLabel);
		async function testAtonNifToDecimalConversion(input: string, expected: string) {
			await decoder.fill(input);
			await expect(decoder).toHaveValue(input);
			await expect(encoder).toHaveValue(expected);
		}

		await testAtonNifToDecimalConversion('1', '1');
		await testAtonNifToDecimalConversion('A', '6');
		await testAtonNifToDecimalConversion('N', '8');
		await testAtonNifToDecimalConversion('10', '12');
		await testAtonNifToDecimalConversion('1A', '18');
	});

	test('works for numbers from decimal to aton-nif', async ({ page }) => {
		await page.goto('/aton-nif');
		const decoder = await page.getByLabel(translations.tools.atonNifConverter.decodeLabel);
		const encoder = await page.getByLabel(translations.tools.atonNifConverter.encodeLabel);
		async function testAtonNifToDecimalConversion(input: string, expected: string) {
			await encoder.fill(input);
			await expect(encoder).toHaveValue(input);
			await expect(decoder).toHaveValue(expected);
		}

		await testAtonNifToDecimalConversion('1', '1');
		await testAtonNifToDecimalConversion('6', 'A');
		await testAtonNifToDecimalConversion('8', 'N');
		await testAtonNifToDecimalConversion('12', '10');
		await testAtonNifToDecimalConversion('18', '1A');
		await testAtonNifToDecimalConversion('144', '100');
	});
});
