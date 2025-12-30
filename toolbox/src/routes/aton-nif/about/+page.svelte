<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { getLocale } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';

	onMount(() => {
		switch (getLocale()) {
			case 'de':
				return goto(resolve('/aton-nif/about/de'));
			default:
				return goto(resolve('/aton-nif/about/en'));
		}
	});
</script>

<p>Redirecting to the appropriate language ...</p>
