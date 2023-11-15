<script lang="ts">
	import PageLayout from './PageLayout.svelte';

	export let title: string;
	export let lastUpdateOn: string | undefined = undefined;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<PageLayout>
	<article>
		<h1>{title}</h1>
		{#if lastUpdateOn}
			<div class="date">Last update on <span>{lastUpdateOn}</span></div>
		{/if}
		<slot />
	</article>
</PageLayout>

<style>
	.date {
		font-size: 0.8em;
		opacity: 0.7;
	}
</style>
