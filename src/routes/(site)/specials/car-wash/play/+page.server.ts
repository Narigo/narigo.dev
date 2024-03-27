import type { PageServerLoad } from './$types';
// import car1 from '../_assets/car1.svg?raw';
// import car2 from '../_assets/car2.svg?raw';
// import car3 from '../_assets/car3.svg?raw';
import car4 from '../_assets/car4.svg?raw';

export const load: PageServerLoad = async () => {
	const images = [car4];
	return { images };
};
