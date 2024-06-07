<script lang="ts">
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import colors from 'tailwindcss/colors';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	const AMOUNT_OF_FINGERS = 20;
	const AMOUNT_OF_ROWS = 5;
	const MIN_BUBBLE_RADIUS = 10;
	const MAX_BUBBLE_RADIUS = 20;
	const MITTER_COLORS_1 = 'from-red-700 to-red-600';
	const MITTER_COLORS_2 = 'from-red-900 to-red-800';

	const images = data.images;
	const randomImage = () => images[Math.floor(Math.random() * images.length)];
	const setCarColors = () => {
		const colorsWithShades = Object.entries(colors).flatMap(([name, values]) => {
			const isDeprecatedColor = [
				'blueGray',
				'coolGray',
				'lightBlue',
				'trueGray',
				'warmGray'
			].includes(name);
			const hasNecessaryShades = values[300] && values[500] && values[800];
			return !isDeprecatedColor && hasNecessaryShades ? [values] : [];
		});
		const randomColor = colorsWithShades[Math.floor(Math.random() * colorsWithShades.length)];
		return {
			carColor300: randomColor[300],
			carColor500: randomColor[500],
			carColor800: randomColor[800]
		};
	};
	let currentStep: 'start' | 'dirty' | 'cleaning' | 'showering' | 'drying' | 'done' = 'start';
	let image: string,
		carColor300: string,
		carColor500: string,
		carColor800: string,
		bubblesOverlay: SVGElement;

	const createBubbleOverlay = (image: string) => {
		const overlay = document.createElement('div');
		const bubblesSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		overlay.innerHTML = image;
		const overlaySvg = overlay.querySelector('svg')!;
		const bodyClip = overlaySvg.querySelector('#body');
		if (!bodyClip) {
			return overlaySvg;
		}

		const pathData: Array<string> = [];
		for (const child of bodyClip.children) {
			try {
				switch (child.tagName) {
					case 'rect':
						const x = parseFloat(child.getAttribute('x') ?? '0');
						const y = parseFloat(child.getAttribute('y') ?? '0');
						const width = parseFloat(child.getAttribute('width') ?? '0');
						const height = parseFloat(child.getAttribute('height') ?? '0');
						pathData.push(`M${x},${y}h${width}v${height}h${-width}z`);
						break;
					case 'circle':
						const cx = parseFloat(child.getAttribute('cx')!);
						const cy = parseFloat(child.getAttribute('cy')!);
						const r = parseFloat(child.getAttribute('r')!);
						pathData.push(
							`M${cx - r},${cy}a${r},${r} 0 1,0 ${2 * r},0a${r},${r} 0 1,0 ${-2 * r},0`
						);
						break;
					case 'path':
						pathData.push(child.getAttribute('d')!);
						break;
				}
			} catch {}
		}
		const pathString = pathData.join(' ');

		const svgNS = 'http://www.w3.org/2000/svg';
		const { x, y, width, height } = overlaySvg.viewBox.baseVal;
		const actualHeight = overlaySvg.height.baseVal.value;
		const actualWidth = overlaySvg.width.baseVal.value;
		const scaleFactorWidth = actualWidth / width;
		const scaleFactorHeight = actualHeight / height;
		const scaleFactor = Math.max(scaleFactorHeight, scaleFactorWidth);
		bubblesSvg.setAttribute(
			'viewBox',
			`${x - MAX_BUBBLE_RADIUS} ${y - MAX_BUBBLE_RADIUS} ${width + 2 * MAX_BUBBLE_RADIUS} ${height + 2 * MAX_BUBBLE_RADIUS}`
		);
		bubblesSvg.setAttribute('width', `${actualWidth + 2 * MAX_BUBBLE_RADIUS * scaleFactor}`);
		bubblesSvg.setAttribute('height', `${actualHeight + 2 * MAX_BUBBLE_RADIUS * scaleFactor}`);
		const tempSvg = document.createElementNS(svgNS, 'svg');
		const tempPath = document.createElementNS(svgNS, 'path');
		tempPath.setAttribute('d', pathString);
		tempSvg.appendChild(tempPath);
		document.body.appendChild(tempSvg);

		const minBubbleRadius = MIN_BUBBLE_RADIUS / scaleFactor;
		const maxBubbleRadius = MAX_BUBBLE_RADIUS / scaleFactor;
		const bubbles: Array<string> = [];
		for (
			let coordinateX = x + width;
			coordinateX >= x;
			coordinateX = coordinateX - minBubbleRadius
		) {
			for (
				let coordinateY = y + height;
				coordinateY >= y;
				coordinateY = coordinateY - minBubbleRadius
			) {
				const point = tempSvg.createSVGPoint();
				point.x = coordinateX;
				point.y = coordinateY;
				const isInside = tempPath.isPointInFill(point);
				if (isInside) {
					const radius =
						Math.floor(Math.random() * (maxBubbleRadius - minBubbleRadius)) + minBubbleRadius;
					const circleAtPoint = `<circle cx="${point.x}" cy="${point.y}" r="${radius}" fill="url(#bubbleGradient)" />`;
					bubbles.push(circleAtPoint);
				}
			}
		}
		const bubblesGroup = document.createElementNS(svgNS, 'g');
		bubblesGroup.innerHTML = `<defs>
	<radialGradient id="bubbleGradient" transform-origin=".47 .47">
        <stop offset="0%" stop-color="#fff"></stop>
        <stop offset="85%" stop-color="#fffc"></stop>
        <stop offset="100%" stop-color="transparent"></stop>
    </radialGradient>
</defs>
${bubbles.join('')}`;
		bubblesSvg.appendChild(bubblesGroup);

		document.body.removeChild(tempSvg); // Clean up

		return bubblesSvg;
	};
	const resetToNewCar = () => {
		image = randomImage();
		const randomColor = setCarColors();
		carColor300 = randomColor.carColor300;
		carColor500 = randomColor.carColor500;
		carColor800 = randomColor.carColor800;
		bubblesOverlay = createBubbleOverlay(image);
	};

	let nextStepTimer: ReturnType<typeof setTimeout> | null = null;
	const startStopAnim = () => {
		if (nextStepTimer) {
			clearTimeout(nextStepTimer);
			nextStepTimer = null;
			return;
		}
		nextStep();
	};
	const nextStep = () => {
		if (nextStepTimer) {
			clearTimeout(nextStepTimer);
		}
		switch (currentStep) {
			case 'start':
				resetToNewCar();
				currentStep = 'dirty';
				nextStepTimer = setTimeout(nextStep, 2000);
				break;
			case 'dirty':
				currentStep = 'cleaning';
				nextStepTimer = setTimeout(nextStep, 4000);
				break;
			case 'cleaning':
				currentStep = 'showering';
				nextStepTimer = setTimeout(nextStep, 6000);
				break;
			case 'showering':
				currentStep = 'drying';
				nextStepTimer = setTimeout(nextStep, 10000);
				break;
			case 'drying':
				currentStep = 'done';
				nextStepTimer = setTimeout(nextStep, 5000);
				break;
			case 'done':
				currentStep = 'start';
				break;
		}
	};

	onMount(() => {
		resetToNewCar();
	});
</script>

<PageLayout>
	<section
		class="aspect-video relative grid overflow-clip {currentStep}"
		style="--car-color-300: {carColor300};--car-color-500: {carColor500};--car-color-800: {carColor800}"
	>
		<div
			class="mitter back absolute grid h-full w-full"
			class:moving={currentStep === 'cleaning'}
			class:rotating={currentStep === 'cleaning'}
		>
			<div class="absolute right-8 top-[5%] h-[90%] w-24">
				{#each new Array(AMOUNT_OF_FINGERS * AMOUNT_OF_ROWS) as _, index}
					<div
						class="finger rounded absolute w-1 bg-gradient-to-b {index % 2 === 0
							? MITTER_COLORS_1
							: MITTER_COLORS_2}"
						style="height: {100 / AMOUNT_OF_ROWS}%;left:{((index % AMOUNT_OF_FINGERS) /
							AMOUNT_OF_FINGERS) *
							100}%;top:{(Math.floor(index / AMOUNT_OF_FINGERS) * 100) / AMOUNT_OF_ROWS}%"
					></div>
				{/each}
			</div>
		</div>
		<div class="shower absolute h-full w-full" class:enabled={currentStep === 'showering'}>
			<div class="puddle absolute w-full h-4 -bottom-2"></div>
		</div>
		<div
			class="track absolute grid place-items-center items-end h-full w-full pb-1 [&_svg_.body]:fill-[--car-color-500] [&_svg_.darker]:fill-[--car-color-800] [&_svg_.lighter]:fill-[--car-color-300] {[
				'start',
				'dirty',
				'cleaning'
			].includes(currentStep)
				? ''
				: '[&_svg_.dirt]:fill-none'}"
		>
			{@html image}
			<div class="absolute bubbles" class:enabled={currentStep === 'cleaning'}>
				{@html bubblesOverlay?.outerHTML}
			</div>
		</div>
		<div
			class="mitter front absolute grid h-full w-full"
			class:moving={currentStep === 'cleaning'}
			class:rotating={currentStep === 'cleaning'}
		>
			<div class="absolute right-4 top-0 h-full w-24">
				{#each new Array(AMOUNT_OF_FINGERS * AMOUNT_OF_ROWS) as _, index}
					<div
						class="finger rounded absolute w-1 bg-gradient-to-b {index % 2 === 0
							? MITTER_COLORS_1
							: MITTER_COLORS_2}"
						style="height: {100 / AMOUNT_OF_ROWS}%;left:{((index % AMOUNT_OF_FINGERS) /
							AMOUNT_OF_FINGERS) *
							100}%;top:{(Math.floor(index / AMOUNT_OF_FINGERS) * 100) / AMOUNT_OF_ROWS}%"
					></div>
				{/each}
			</div>
		</div>
	</section>
	<button
		class="block m-auto border rounded px-4 py-2 bg-primary text-white"
		on:click={() => startStopAnim()}>{currentStep}</button
	>
</PageLayout>

<style lang="postcss">
	.mitter {
		transform: translate(0);
		transition: transform 2000ms;
	}
	.moving {
		animation: moveMitterCurtains 3000ms forwards;
	}
	.back.moving {
		--padding: 4rem;
	}
	.back .finger {
		@apply bg-blend-color;
		background-image: linear-gradient(to bottom, var(--tw-gradient-stops)),
			linear-gradient(#0003, #0003);
	}
	.finger {
		transform-origin: 50% 0;
		transition: transform 2000ms;
	}
	.rotating .finger {
		transform: rotate(20deg);
	}
	.mitter.rotating > div {
		animation: rotateCurtain 500ms infinite linear;
	}
	.shower {
		--rain-color: hsl(199, 89%, 75%);
		background:
			radial-gradient(circle, gray 2px, transparent 0) 0 0 / 20px 20px repeat-x,
			radial-gradient(circle, gray 2px, transparent 0) 10px 10px / 20px 20px repeat-x;
	}
	.shower > .puddle {
		background-position: 50% 50%;
		background-size: 0 0;
		background-repeat: no-repeat;
		opacity: 1;
		transition:
			background-size 5000ms,
			opacity 10000ms;
	}
	.shower.enabled > .puddle {
		background-image: radial-gradient(var(--rain-color) 25%, transparent 25%);
		background-position: 50% 50%;
		background-size: 600% 2rem;
		background-repeat: no-repeat;
		opacity: 1;
	}
	.drying .shower > .puddle {
		background-image: radial-gradient(var(--rain-color) 25%, transparent 25%);
		background-position: 50% 50%;
		background-size: 100% 1rem;
		background-repeat: no-repeat;
		opacity: 0;
	}
	.shower.enabled {
		background:
			radial-gradient(circle, gray 2px, transparent 0) 0 0 / 20px 20px repeat-x,
			radial-gradient(circle, gray 2px, transparent 0) 10px 10px / 20px 20px repeat-x;
	}
	.shower.enabled::after {
		animation: showerAnimation 400ms infinite linear;
		content: '';
		position: absolute;
		inset: 10px 0 0 0;
		background:
			radial-gradient(circle, var(--rain-color) 1px, transparent 3px) 0 0 / 20px 20px,
			radial-gradient(circle, var(--rain-color) 1px, transparent 3px) 10px 10px / 20px 20px;
	}
	.bubbles {
		transition:
			opacity 1500ms,
			clip-path 1500ms;
		clip-path: inset(0 0 0 100%);
		opacity: 0;
	}
	.bubbles.enabled {
		transition:
			opacity 1500ms,
			clip-path 1500ms;
		clip-path: inset(0 0 0 0);
		opacity: 1;
	}
	section:global(.showering) .bubbles {
		clip-path: inset(100% 0 0 0);
	}
	@keyframes showerAnimationBottomDrying {
		to {
			background-position: 50% 50%;
			background-size: 0 0;
		}
	}
	@keyframes showerAnimationBottom {
		to {
			background-position: 50% 50%;
			background-size: 600% 2rem;
		}
	}
	@keyframes showerAnimation {
		0% {
			background-position:
				10px 0,
				0 0;
		}
		100% {
			background-position:
				10px 80px,
				0px 120px;
		}
	}
	@keyframes moveMitterCurtains {
		0% {
			transform: translate(0);
		}
		50% {
			transform: translate(calc(-100% + 6rem + var(--padding, 2rem)));
		}
		100% {
			transform: translate(0);
		}
	}
	@keyframes rotateCurtain {
		0% {
			transform: rotateY(0deg);
		}
		100% {
			transform: rotateY(360deg);
		}
	}
	section:global(.start) .track {
		visibility: hidden;
		transform: translateX(-100%);
	}
	section:global(.dirty) .track,
	section:global(.cleaning) .track,
	section:global(.drying) .track {
		transform: translateX(0);
		visibility: visible;
	}
	section:global(.done) .track {
		transform: translateX(100%);
	}
	.track {
		transition: transform 1000ms;
	}
</style>
