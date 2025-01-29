import { assertEquals } from 'jsr:@std/assert';
import { updatePageSvelte } from './main.ts';

Deno.test('keeps +page.svelte files without PuzzlePageLayout', async () => {
	const input = await Deno.readTextFile(
		import.meta.dirname + '/_fixtures/page-without-puzzle-layout.txt'
	);
	const result = await updatePageSvelte(input, '89');
	assertEquals(result, input);
});

Deno.test('keeps +page.svelte files with existing puzzleId in PuzzlePageLayout', async () => {
	const input = await Deno.readTextFile(
		import.meta.dirname + '/_fixtures/page-with-existing-puzzle-id.txt'
	);
	const result = await updatePageSvelte(input, '89');
	assertEquals(result, input);
});

Deno.test('updates +page.svelte files with missing puzzleId', async () => {
	const expected = await Deno.readTextFile(
		import.meta.dirname + '/_fixtures/page-with-missing-puzzle-id-89-out.txt'
	);
	const input = await Deno.readTextFile(
		import.meta.dirname + '/_fixtures/page-with-missing-puzzle-id-89-in.txt'
	);
	const result = await updatePageSvelte(input, '89');
	assertEquals(result, expected);
});
