<script lang="ts">
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import Puzzle from './Puzzle.svelte';

	interface Props {
		solution?: string | undefined;
		title?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let { solution = undefined, title = undefined, children }: Props = $props();
</script>

<PageLayout>
	<div>
		<a href="{base}/specials/frontend-friday-folks">&lt; Back to Frontend Friday Folks Index</a>
		<section>
			{#if title}<h2>{title}</h2>{/if}
			{#if title && solution}
				<Puzzle {title} solution={solution.trim()} />
				{@render children?.()}
			{:else}
				{@render children?.()}
			{/if}
		</section>
		<a href="{base}/specials/frontend-friday-folks">&lt; Back to Frontend Friday Folks Index</a>
	</div>
</PageLayout>

<style>
	div {
		display: flex;
		flex-flow: column;
		gap: 2em;
	}
</style>
