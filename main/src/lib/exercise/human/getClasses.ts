export type BodyProps = 'left' | 'left-70' | 'right' | 'right-70' | 'standing';

export function getBodyClasses(value: BodyProps): string {
	switch (value) {
		case 'left':
			return 'rotate-90';
		case 'left-70':
			return 'rotate-70';
		case 'right':
			return '-rotate-90';
		case 'right-70':
			return 'rotate-[-70deg]';
		case 'standing':
			return '';
	}
}

export type UpperArmProps = 'straight' | 'front' | 'side' | 'halfUp' | 'up';
export function getUpperArmLeftClasses(value: UpperArmProps): string {
	switch (value) {
		case 'straight':
			return 'h-9';
		case 'front':
			return 'h-3';
		case 'side':
			return 'h-9 -rotate-90';
		case 'halfUp':
			return 'h-9 rotate-225';
		case 'up':
			return 'h-9 rotate-180';
	}
}
export function getUpperArmRightClasses(value: UpperArmProps): string {
	switch (value) {
		case 'straight':
			return 'h-9';
		case 'front':
			return 'h-3';
		case 'side':
			return 'h-9 rotate-90';
		case 'halfUp':
			return 'h-9 rotate-135';
		case 'up':
			return 'h-9 rotate-180';
	}
}

export type ForearmProps = 'straight' | 'bendedX' | 'bendedLeft' | 'bendedRight';
export function getForearmClasses(value: ForearmProps): string {
	switch (value) {
		case 'straight':
			return 'h-9';
		case 'bendedX':
			return 'h-3';
		case 'bendedLeft':
			return 'h-9 -rotate-90';
		case 'bendedRight':
			return 'h-9 rotate-90';
	}
}

export type ThighProps = 'straight' | 'halfOut' | 'front' | 'frontHalf';

export function getThighLeftClasses(value: ThighProps): string {
	switch (value) {
		case 'straight':
			return 'h-11';
		case 'halfOut':
			return 'h-11 -rotate-45';
		case 'front':
			return 'h-3';
		case 'frontHalf':
			return 'h-6';
	}
}

export function getThighRightClasses(value: ThighProps): string {
	switch (value) {
		case 'straight':
			return 'h-11';
		case 'halfOut':
			return 'h-11 rotate-45';
		case 'front':
			return 'h-3';
		case 'frontHalf':
			return 'h-6';
	}
}
