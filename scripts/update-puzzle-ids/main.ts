const SINGLE_LINE_SEARCH_REGEX = /(<PuzzlePageLayout.*)(>)/;
const HAS_PUZZLE_ID_REGEX = /<PuzzlePageLayout.*puzzleId=.*>/;

export function updatePageSvelte(fileInput: string, puzzleId: string): string {
	if (HAS_PUZZLE_ID_REGEX.test(fileInput)) {
    console.log('has puzzle id already');
		return fileInput;
	}
	return fileInput.replace(SINGLE_LINE_SEARCH_REGEX, `$1 puzzleId="${puzzleId}"$2`);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
}
