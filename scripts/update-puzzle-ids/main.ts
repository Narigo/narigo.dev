const SINGLE_LINE_SEARCH_REGEX = /(<PuzzlePageLayout.*)(>)/;
const HAS_PUZZLE_ID_REGEX = /<PuzzlePageLayout.*puzzleId=.*>/;

export function updatePageSvelte(fileInput: string, puzzleId: string): string {
	if (HAS_PUZZLE_ID_REGEX.test(fileInput)) {
		return fileInput;
	}
	return fileInput.replace(SINGLE_LINE_SEARCH_REGEX, `$1 puzzleId="${puzzleId}"$2`);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
	const CHECK_FOLDER_NAME_REGEX = /^puzzle-(\d+)$/;
	const fffFolderName = `${import.meta.dirname}/../../main/src/routes/(site)/specials/frontend-friday-folks`;
	const fffFolderFiles = Deno.readDir(fffFolderName);
	for await (const file of fffFolderFiles) {
		if (!file.isDirectory) {
			continue;
		}

		const matches = CHECK_FOLDER_NAME_REGEX.exec(file.name);
		if (matches !== null) {
			const pageSvelteFilename = `${fffFolderName}/${file.name}/+page.svelte`;
			const currentPageSvelte = await Deno.readTextFile(pageSvelteFilename);
			const newPageSvelte = await updatePageSvelte(currentPageSvelte, matches[1]);
			if (currentPageSvelte !== newPageSvelte) {
				await Deno.writeTextFile(pageSvelteFilename, newPageSvelte);
			}
		}
	}
}
