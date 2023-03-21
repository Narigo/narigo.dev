<script lang="ts">
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';

	export let id: string;
	export let name: string;
</script>

<PageLayout>
	<h2>{name}</h2>
	<a href="https://www.codewars.com/kata/{id}">Link</a>
	<slot />
</PageLayout>
