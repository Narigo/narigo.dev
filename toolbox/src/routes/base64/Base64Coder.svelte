<script lang="ts">
	import { onMount } from 'svelte';
	import * as m from '$lib/paraglide/messages.js';

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

<section class="@container h-full w-full">
	<div class="grid h-full w-full grid-cols-[1fr_min-content_1fr] grid-rows-[min-content_1fr]">
		<h3 class="h-min">
			{#if decodedSide === 'left'}{m.decoded()}{:else}{m.encoded()}{/if}
		</h3>
		<button class="row-span-2 bg-gray-200 p-4" onclick={swapInputs}>{m.toggle()}</button>
		<h3 class="h-min">
			{#if decodedSide === 'right'}{m.decoded()}{:else}{m.encoded()}{/if}
		</h3>
		<textarea bind:this={left} class="w-full" placeholder={m.placeholderDecoded()}></textarea>
		<textarea bind:this={right} class="w-full" placeholder={m.placeholderEncoded()}></textarea>
	</div>
</section>
