import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const imageFiles = await import.meta.glob('../_assets/*.svg', { eager: true });
	const images = Object.values(imageFiles).map((module) => module.default);
	return { images };
};
