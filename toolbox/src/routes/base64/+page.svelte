<script lang="ts">
	import { onMount } from 'svelte';

	let left: HTMLTextAreaElement;
	let right: HTMLTextAreaElement;

	onMount(() => {
		left.addEventListener('input', () => {
			right.value = encodeURIComponent(left.value);
		});
	});
</script>

<section class="container grid grid-cols-1 md:grid-cols-2">
	<textarea bind:this={left}></textarea>
	<textarea bind:this={right}></textarea>
</section>
