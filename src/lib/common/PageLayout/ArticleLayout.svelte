<script lang="ts">
	import PageLayout from './PageLayout.svelte';

	interface Props {
		title: string;
		description?: string | undefined;
		lastUpdateOn?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let {
		title,
		description = undefined,
		lastUpdateOn = undefined,
		children
	}: Props = $props();
</script>

<PageLayout {title} {description}>
	<article>
		<h1>{title}</h1>
		{#if lastUpdateOn}
			<div class="text-xs opacity-70">Last update on <span>{lastUpdateOn}</span></div>
		{/if}
		<div class="prose prose-headings:text-white">
			{@render children?.()}
		</div>
	</article>
</PageLayout>
