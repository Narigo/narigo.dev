<script lang="ts" module>
	let idCounter = 0;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import * as m from '$lib/paraglide/messages.js';

	interface EncoderProps {
		encode: (text: string) => string;
		decode: (text: string) => string;
		encodeLabel?: string;
		decodeLabel?: string;
		placeholderEncode?: string;
		placeholderDecode?: string;
	}

	let {
		encode,
		decode,
		encodeLabel = m.encoded(),
		decodeLabel = m.decoded(),
		placeholderEncode = m.placeholderEncoded(),
		placeholderDecode = m.placeholderDecoded()
	}: EncoderProps = $props();

	let left: HTMLTextAreaElement;
	let right: HTMLTextAreaElement;

	let decodedSide: 'left' | 'right' = $state('left');

	idCounter++;
	const leftId = `converter-left-${idCounter}`;
	const rightId = `converter-right-${idCounter}`;

	onMount(() => {
		left.addEventListener('input', () => {
			try {
				if (decodedSide === 'left') {
					right.value = encode(left.value);
				} else {
					right.value = decode(left.value);
				}
				right.classList.remove('border-red-500');
			} catch {
				right.classList.add('border-red-500');
			}
		});
		right.addEventListener('input', () => {
			try {
				if (decodedSide === 'right') {
					left.value = encode(right.value);
				} else {
					left.value = decode(right.value);
				}
				left.classList.remove('border-red-500');
			} catch {
				left.classList.add('border-red-500');
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
		<label for={leftId} class="h-min font-bold">
			{#if decodedSide === 'left'}{decodeLabel}{:else}{encodeLabel}{/if}
		</label>
		<div></div>
		<label for={rightId} class="h-min font-bold">
			{#if decodedSide === 'right'}{decodeLabel}{:else}{encodeLabel}{/if}
		</label>
		<textarea id={leftId} bind:this={left} class="w-full" placeholder={placeholderDecode}
		></textarea>
		<button class="bg-gray-200 p-4" onclick={swapInputs}>{m.toggle()}</button>
		<textarea id={rightId} bind:this={right} class="w-full" placeholder={placeholderEncode}
		></textarea>
	</div>
</section>
