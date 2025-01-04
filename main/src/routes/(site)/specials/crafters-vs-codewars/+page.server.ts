import type { PageServerLoad } from './$types';

// TODO use a svelte parser
const kataRegex = /Kata(?:Layout)?\s+(?:id="[^"]*?"\s+)?name="(.*?)"/gm;

export const load: PageServerLoad = async () => {
	const eventFiles = Object.entries<string>(
		import.meta.glob(['./event-*/+page.svelte'], { query: '?raw', import: 'default', eager: true })
	);
	const events = [];
	for (const [path, content] of eventFiles) {
		const date = path.slice(path.indexOf('-') + 1, path.lastIndexOf('/'));
		const names = [];
		let matches;
		while ((matches = kataRegex.exec(content)) !== null) {
			names.push(matches[1]);
		}
		events.push({ date, names });
	}
	events.sort(({ date: a }, { date: b }) => (a < b ? -1 : b < a ? 1 : 0));
	return {
		events
	};
};
