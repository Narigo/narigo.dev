<script lang="ts">
	import { onMount } from 'svelte';

	const workouts = {
		short: [],
		regular: [],
		long: []
	};
	let search = $state<string>('');
	onMount(() => {
		search = window.location.search;
	});
</script>

<pre>Search: {search}</pre>
