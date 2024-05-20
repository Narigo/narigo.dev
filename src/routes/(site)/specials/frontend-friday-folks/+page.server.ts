import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const puzzleFiles = Object.entries<string>(
		import.meta.glob(['./puzzle-*/+page.svelte'], { query: '?raw', import: 'default', eager: true })
	);
	const puzzles = [];
	for (const [path, content] of puzzleFiles) {
		const number = parseInt(path.slice(path.indexOf('-') + 1, path.lastIndexOf('/')), 10);
		const [, title] = /PuzzlePageLayout title="(.*?)"/.exec(content)!;
		puzzles.push({ number, title });
	}
	puzzles.sort(({ number: a }, { number: b }) => (a < b ? -1 : b < a ? 1 : 0));
	return {
		puzzles
	};
};
