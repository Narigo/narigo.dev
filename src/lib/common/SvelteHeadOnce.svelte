<script lang="ts" context="module">
	import { writable } from 'svelte/store';

	let idCounter = 0;
	let mounted = writable<number[]>([]);
	let whoShowsHead = writable<number | undefined>(undefined);
</script>

<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let me = idCounter++;

	onMount(() => {
		$mounted.push(me);
		if (!$whoShowsHead) {
			$whoShowsHead = me;
		}
	});

	onDestroy(() => {
		$mounted = $mounted.filter((x) => x !== me);
		$whoShowsHead = $mounted[0];
	});
</script>

<svelte:head>
	{#if $whoShowsHead === me}
		<slot />
	{/if}
</svelte:head>
