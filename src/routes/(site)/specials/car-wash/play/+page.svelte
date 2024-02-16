<script lang="ts">
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const images = data.images;

	const randomImage = () => images[Math.floor(Math.random() * images.length)];
	let image = randomImage();

	let currentStep: 'start' | 'dirty' | 'cleaning' | 'drying' | 'done' = 'start';
	const nextStep = () => {
		switch (currentStep) {
			case 'start':
				image = randomImage();
				currentStep = 'dirty';
				break;
			case 'dirty':
				currentStep = 'cleaning';
				break;
			case 'cleaning':
				currentStep = 'drying';
				break;
			case 'drying':
				currentStep = 'done';
				break;
			case 'done':
				currentStep = 'start';
				break;
		}
	};

	const AMOUNT_OF_FINGERS = 20;
	const AMOUNT_OF_ROWS = 5;
</script>

<PageLayout>
	<section class="aspect-video relative grid overflow-clip {currentStep}">
		<div
			class="mitter back absolute grid h-full w-full"
			class:moving={currentStep === 'cleaning'}
			class:rotating={['cleaning', 'drying'].includes(currentStep)}
		>
			<div class="absolute right-8 top-[5%] h-[90%] w-24">
				{#each new Array(AMOUNT_OF_FINGERS * AMOUNT_OF_ROWS) as _, index}
					<div
						class="finger rounded absolute w-1 bg-gradient-to-b {index % 2 === 0
							? 'from-blue-600 to-blue-800'
							: 'from-blue-800 to-blue-900'}"
						style="height: {100 / AMOUNT_OF_ROWS}%;left:{((index % AMOUNT_OF_FINGERS) /
							AMOUNT_OF_FINGERS) *
							100}%;top:{(Math.floor(index / AMOUNT_OF_FINGERS) * 100) / AMOUNT_OF_ROWS}%"
					></div>
				{/each}
			</div>
		</div>
		<div
			class="track absolute grid place-items-center items-end h-full w-full pb-1 [&_svg_.body]:fill-blue-500 [&_svg_.darker]:fill-blue-800 [&_svg_.lighter]:fill-blue-300 {[
				'start',
				'dirty',
				'cleaning'
			].includes(currentStep)
				? ''
				: '[&_svg_.dirt]:fill-none'}"
		>
			{@html image}
		</div>
		<div
			class="mitter front absolute grid h-full w-full"
			class:moving={currentStep === 'cleaning'}
			class:rotating={['cleaning', 'drying'].includes(currentStep)}
		>
			<div class="absolute right-4 top-0 h-full w-24">
				{#each new Array(AMOUNT_OF_FINGERS * AMOUNT_OF_ROWS) as _, index}
					<div
						class="finger rounded absolute w-1 bg-gradient-to-b {index % 2 === 0
							? 'from-blue-500 to-blue-400'
							: 'from-blue-600 to-blue-700'}"
						style="height: {100 / AMOUNT_OF_ROWS}%;left:{((index % AMOUNT_OF_FINGERS) /
							AMOUNT_OF_FINGERS) *
							100}%;top:{(Math.floor(index / AMOUNT_OF_FINGERS) * 100) / AMOUNT_OF_ROWS}%"
					></div>
				{/each}
			</div>
		</div>
	</section>
	<button class="" on:click={() => nextStep()}>{currentStep}</button>
</PageLayout>

<style lang="postcss">
	.mitter {
		transform: translate(0);
		transition: transform 2000ms;
	}
	.moving {
		transform: translate(calc(-100% + 6rem + 2rem));
	}
	.back.moving {
		transform: translate(calc(-100% + 6rem + 4rem));
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
