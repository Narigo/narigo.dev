<script lang="ts">
	import { onMount } from 'svelte';
	import * as m from '$lib/paraglide/messages.js';

	interface EncoderProps {
		encode: (text: string) => string;
		decode: (text: string) => string;
	}

	let { encode, decode }: EncoderProps = $props();

	let left: HTMLTextAreaElement;
	let right: HTMLTextAreaElement;

	let decodedSide: 'left' | 'right' = $state('left');

	onMount(() => {
		left.addEventListener('input', () => {
			if (decodedSide === 'left') {
				right.value = encode(left.value);
			} else {
				right.value = decode(left.value);
			}
		});
		right.addEventListener('input', () => {
			if (decodedSide === 'right') {
				left.value = encode(right.value);
			} else {
				left.value = decode(right.value);
			}
		});
	});

	const swapInputs = () => {
		decodedSide = decodedSide === 'left' ? 'right' : 'left';
		if (decodedSide === 'left') {
			left.value = decode(left.value);
			right.value = encode(right.value);
		} else {
			left.value = encode(left.value);
			right.value = decode(right.value);
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
