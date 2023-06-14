import type { PageServerLoad } from './$types';

const puzzleFiles = Object.entries(
	import.meta.glob(['./puzzle-*/+page.svelte'], { as: 'raw', eager: true })
);

export const load: PageServerLoad = async () => {
	let puzzles = [];
	for (let [path, content] of puzzleFiles) {
		const number = parseInt(path.slice(path.indexOf('-') + 1, path.lastIndexOf('/')), 10);
		const [_, title] = /PuzzlePageLayout title="(.*?)"/.exec(content)!;
		puzzles.push({ number, title });
	}
	puzzles.sort(({ number: a }, { number: b }) => (a < b ? -1 : b < a ? 1 : 0));
	return {
		puzzles
	};
};
