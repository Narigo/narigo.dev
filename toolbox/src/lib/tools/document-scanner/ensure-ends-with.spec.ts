import { describe, expect, it } from 'vitest';
import { ensureEndsWith } from './ensure-ends-with';

describe('ensureEndsWith()', () => {
	it('returns ".pdf" for an empty string', () => {
		const emptyString = '';
		const expected = '.pdf';
		const result = ensureEndsWith('.pdf', emptyString);
		expect(result).toStrictEqual(expected);
	});

	it('returns the same string if it already ends with the same string', () => {
		const example = 'this is a string';
		const result = ensureEndsWith(' string', example);
		expect(result).toStrictEqual(example);
	});

	it('returns the same string plus ending if it did not end with the expected ending', () => {
		const example = 'this is a strong';
		const result = ensureEndsWith(' string', example);
		const expected = 'this is a strong string';
		expect(result).toStrictEqual(expected);
	});

	it('works with null values, expecting the ending string', () => {
		const result = ensureEndsWith('something', null as unknown as string);
		expect(result).toStrictEqual('something');
	});

	it('works with undefined values, expecting the ending string', () => {
		const result = ensureEndsWith('something', undefined as unknown as string);
		expect(result).toStrictEqual('something');
	});
});
