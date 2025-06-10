import { describe, expect, it } from 'vitest';
import { ensureEndsWith } from './ensure-ends-with';

describe('ensureEndsWith()', () => {
	it('returns ".pdf" for an empty string', () => {
		const emptyString = '';
		const expected = '.pdf';
		const result = ensureEndsWith('.pdf', emptyString);
		expect(result).toStrictEqual(expected);
	});
});
