export function ensureEndsWith(ending: string, string: string): string {
	const ensuredString = string ?? '';
	if (ensuredString?.endsWith(ending)) {
		return ensuredString;
	}
	return ensuredString + ending;
}
