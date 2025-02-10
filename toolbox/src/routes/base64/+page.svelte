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
</script>

<section class="@container">
	<div class="grid w-full auto-cols-fr grid-cols-1 @md:grid-cols-2">
		<textarea bind:this={left} class="w-full"></textarea>
		<textarea bind:this={right} class="w-full"></textarea>
	</div>
</section>
