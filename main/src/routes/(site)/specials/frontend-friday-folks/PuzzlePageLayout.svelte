<script lang="ts">
	import { resolve } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import Puzzle from './Puzzle.svelte';

	interface Props {
		solution?: string | undefined;
		title?: string | undefined;
		puzzleId?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let { solution = undefined, title = undefined, puzzleId = undefined, children }: Props = $props();
</script>

<PageLayout>
	<div>
		<a href={resolve('/specials/frontend-friday-folks')}>&lt; Back to Frontend Friday Folks Index</a
		>
		<section>
			{#if title}<h2>{title}</h2>{/if}
			{#if puzzleId}
				<p class="my-4 rounded border-l-4 border-l-yellow-300 bg-yellow-100 p-4">
					Visit <a
						href="https://cssbattle.dev/play/{puzzleId}?via=compose-us"
						rel="external noopener">the official puzzle page (affiliate link!)</a
					> to play it yourself. If you buy a course from CSSBattle through my affiliate link, I receive
					a share of it!
				</p>
			{/if}
			{#if title && solution}
				<Puzzle {title} solution={solution.trim()} />
				{@render children?.()}
			{:else}
				{@render children?.()}
			{/if}
		</section>
		<a href={resolve('/specials/frontend-friday-folks')}>&lt; Back to Frontend Friday Folks Index</a
		>
	</div>
</PageLayout>

<style>
	div {
		display: flex;
		flex-flow: column;
		gap: 2em;
	}
</style>
