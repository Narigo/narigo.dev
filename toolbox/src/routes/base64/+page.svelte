<script lang="ts">
	import { onMount } from 'svelte';

	let left: HTMLTextAreaElement;
	let right: HTMLTextAreaElement;

	let decodedSide: 'left' | 'right' = $state('left');

	onMount(() => {
		left.addEventListener('input', () => {
			if (decodedSide === 'left') {
				right.value = encodeURIComponent(left.value);
			} else {
				right.value = decodeURIComponent(left.value);
			}
		});
		right.addEventListener('input', () => {
			if (decodedSide === 'right') {
				left.value = encodeURIComponent(right.value);
			} else {
				left.value = decodeURIComponent(right.value);
			}
		});
	});

	const swapInputs = () => {
		decodedSide = decodedSide === 'left' ? 'right' : 'left';
		if (decodedSide === 'left') {
			left.value = decodeURIComponent(left.value);
			right.value = encodeURIComponent(right.value);
		} else {
			left.value = encodeURIComponent(left.value);
			right.value = decodeURIComponent(right.value);
		}
	};
</script>

<section class="@container">
	<div class="grid w-full auto-cols-fr grid-cols-1 @md:grid-cols-3">
		<h3>
			{#if decodedSide === 'left'}Decoded{:else}Encoded{/if}
		</h3>
		<button class="row-span-2 bg-gray-200" onclick={swapInputs}>Switch</button>
		<h3>
			{#if decodedSide === 'right'}Decoded{:else}Encoded{/if}
		</h3>
		<textarea bind:this={left} class="w-full"></textarea>
		<textarea bind:this={right} class="w-full"></textarea>
	</div>
</section>
