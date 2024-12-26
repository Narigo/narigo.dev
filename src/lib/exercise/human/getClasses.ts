export type BodyProps = 'left' | 'left-70' | 'right' | 'right-70' | 'standing';

export function getBodyClasses(value: BodyProps): string {
	switch (value) {
		case 'left':
			return 'rotate-[90deg]';
		case 'left-70':
			return 'rotate-[70deg]';
		case 'right':
			return 'rotate-[-90deg]';
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
			return 'h-9 -rotate-[90deg]';
		case 'halfUp':
			return 'h-9 rotate-[225deg]';
		case 'up':
			return 'h-9 rotate-[180deg]';
	}
}
export function getUpperArmRightClasses(value: UpperArmProps): string {
	switch (value) {
		case 'straight':
			return 'h-9';
		case 'front':
			return 'h-3';
		case 'side':
			return 'h-9 rotate-[90deg]';
		case 'halfUp':
			return 'h-9 rotate-[135deg]';
		case 'up':
			return 'h-9 rotate-[180deg]';
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
			return 'h-9 -rotate-[90deg]';
		case 'bendedRight':
			return 'h-9 rotate-[90deg]';
	}
}

export type UpperLegProps = 'straight' | 'halfOut' | 'front' | 'frontHalf';

export function getUpperLegLeftClasses(value: UpperLegProps): string {
	switch (value) {
		case 'straight':
			return 'h-11';
		case 'halfOut':
			return 'h-11 -rotate-[45deg]';
		case 'front':
			return 'h-3';
		case 'frontHalf':
			return 'h-6';
	}
}

export function getUpperLegRightClasses(value: UpperLegProps): string {
	switch (value) {
		case 'straight':
			return 'h-11';
		case 'halfOut':
			return 'h-11 rotate-[45deg]';
		case 'front':
			return 'h-3';
		case 'frontHalf':
			return 'h-6';
	}
}
