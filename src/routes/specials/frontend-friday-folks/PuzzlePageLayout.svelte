<script lang="ts">
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import Puzzle from './Puzzle.svelte';

	export let solution: string | undefined = undefined;
	export let title: string | undefined = undefined;
</script>

<PageLayout>
	<div>
		<a href="{base}/specials/frontend-friday-folks">&lt; Back to Frontend Friday Folks Index</a>
		<section>
			{#if title}<h2>{title}</h2>{/if}
			{#if title && solution}
				<Puzzle {title} solution={solution.trim()} />
				<slot />
			{:else}
				<slot />
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
