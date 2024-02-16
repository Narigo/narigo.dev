import type { PageServerLoad } from './$types';
import car1 from '../_assets/car1.svg?raw';
import car2 from '../_assets/car2.svg?raw';

export const load: PageServerLoad = async () => {
	// const imageFiles = await import.meta.glob('../_assets/car1.svg', { eager: true });
	// const images = Object.values(imageFiles).map((module) => module.default);
	const images = [car1, car2];
	// const images = [car1];
	return { images };
};
