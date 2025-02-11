<script lang="ts">
	import { onMount } from 'svelte';

	let left: HTMLTextAreaElement;
	let right: HTMLTextAreaElement;

	onMount(() => {
		left.addEventListener('input', () => {
			right.value = encodeURIComponent(left.value);
		});
		right.addEventListener('input', () => {
			left.value = decodeURIComponent(right.value);
		});
	});

	const swapInputs = () => {
		const currentLeftValue = left.value;
		left.value = right.value;
		right.value = currentLeftValue;
	};
</script>

<section class="@container">
	<div class="grid w-full auto-cols-fr grid-cols-1 @md:grid-cols-3">
		<h3>Encoded</h3>
		<button class="row-span-2 bg-gray-200" onclick={swapInputs}>Switch</button>
		<h3>Decoded</h3>
		<textarea bind:this={left} class="w-full"></textarea>
		<textarea bind:this={right} class="w-full"></textarea>
	</div>
</section>
