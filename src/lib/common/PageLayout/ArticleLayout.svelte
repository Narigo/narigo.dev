<script lang="ts">
	import PageLayout from './PageLayout.svelte';

	export let title: string;
	export let description: string | undefined = undefined;
	export let lastUpdateOn: string | undefined = undefined;
</script>

<PageLayout {title} {description}>
	<article>
		<h1>{title}</h1>
		{#if lastUpdateOn}
			<div class="text-xs opacity-70">Last update on <span>{lastUpdateOn}</span></div>
		{/if}
		<div class="prose prose-headings:text-white">
			<slot />
		</div>
	</article>
</PageLayout>
