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
</script>

<PageLayout>
	<section class="overflow-clip {currentStep}">
		<div>shower</div>
		<div>
			<img src={image} alt={image} />
		</div>
		<div>roller</div>
		<button on:click={() => nextStep()}>{currentStep}</button>
		<a href="{base}/specials/car-wash/credits">Credits</a>
	</section>
</PageLayout>

<style lang="postcss">
	section:global(.start) img {
		visibility: hidden;
		transform: translateX(-100%);
	}
	section:global(.dirty) img,
	section:global(.cleaning) img,
	section:global(.drying) img {
		visibility: visible;
		transform: translateX(0);
	}
	section:global(.done) img {
		transform: translateX(100%);
	}
	img {
		transition: transform 1000ms;
	}
</style>
