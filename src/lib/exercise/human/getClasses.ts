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
