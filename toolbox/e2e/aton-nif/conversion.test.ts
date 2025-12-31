import { expect, test } from '@playwright/test';
import translations from '../../messages/en.json' with { type: 'json' };

test.describe('aton-nif conversion', () => {
	test('works for numbers from aton-nif to decimal', async ({ page }) => {
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
		await testAtonNifToDecimalConversion('100', '144');
	});

	test('works for numbers from decimal to aton-nif', async ({ page }) => {
		await page.goto('/aton-nif');
		const decoder = await page.getByLabel(translations.tools.atonNifConverter.decodeLabel);
		const encoder = await page.getByLabel(translations.tools.atonNifConverter.encodeLabel);
		async function testDecimalToAtonNifConversion(input: string, expected: string) {
			await encoder.fill(input);
			await expect(encoder).toHaveValue(input);
			await expect(decoder).toHaveValue(expected);
		}

		await testDecimalToAtonNifConversion('1', '1');
		await testDecimalToAtonNifConversion('6', 'A');
		await testDecimalToAtonNifConversion('8', 'N');
		await testDecimalToAtonNifConversion('12', '10');
		await testDecimalToAtonNifConversion('18', '1A');
		await testDecimalToAtonNifConversion('144', '100');
	});

	test('allows decoding calculations by only decoding strings it considers as numbers', async ({
		page
	}) => {
		await page.goto('/aton-nif');
		const decoder = await page.getByLabel(translations.tools.atonNifConverter.decodeLabel);
		const encoder = await page.getByLabel(translations.tools.atonNifConverter.encodeLabel);
		async function testAtonNifToDecimalConversion(input: string, expected: string) {
			await decoder.fill(input);
			await expect(decoder).toHaveValue(input);
			await expect(encoder).toHaveValue(expected);
		}

		await testAtonNifToDecimalConversion('A + 5 = 9', '6 + 5 = 11');
	});

	test('allows encoding calculations by only encoding strings it considers as numbers', async ({
		page
	}) => {
		await page.goto('/aton-nif');
		const decoder = await page.getByLabel(translations.tools.atonNifConverter.decodeLabel);
		const encoder = await page.getByLabel(translations.tools.atonNifConverter.encodeLabel);
		async function testDecimalToAtonNifConversion(input: string, expected: string) {
			await encoder.fill(input);
			await expect(encoder).toHaveValue(input);
			await expect(decoder).toHaveValue(expected);
		}

		await testDecimalToAtonNifConversion('6 + 5 = 11', 'A + 5 = 9');
		await testDecimalToAtonNifConversion('A - 5 = 1', 'A - 5 = 1');
	});
});
