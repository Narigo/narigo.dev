import { dirname } from 'node:path';
import { readdir, readFile } from 'node:fs/promises';
import type { PageServerLoad } from './$types';

const currentFolder = dirname(new URL(import.meta.url).pathname);

export const load: PageServerLoad = async () => {
	const filesAndFolders = await readdir(currentFolder);
	const puzzleFolderNames = filesAndFolders.filter((name) => /^puzzle-\d+$/.test(name));
	let puzzles = [];
	for (let folder of puzzleFolderNames) {
		const number = parseInt(folder.slice(folder.indexOf('-') + 1), 10);
		const contents = await readFile(`${currentFolder}/${folder}/+page.svelte`, 'utf-8');
		const [_, title] = /PuzzlePageLayout title="(.*?)"/.exec(contents)!;
		puzzles.push({ number, title });
	}
	puzzles.sort(({ number: a }, { number: b }) => (a < b ? -1 : b < a ? 1 : 0));
	return {
		puzzles
	};
};
