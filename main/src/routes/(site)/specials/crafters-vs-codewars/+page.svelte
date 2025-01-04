<script lang="ts">
	import { base } from '$app/paths';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<PageLayout
	title="Crafters vs CodeWars"
	description="Similar to the Frontend Friday Folks, we did some CodeWars puzzles together while waiting for the JSCraftCamp to begin. Here are the solutions we've collected."
>
	<h2>Crafters vs CodeWars</h2>
	<Narigo
		>At JSCraftCamp 2022, a lot of participants complained about the lack of events until the next
		JSCraftCamp. We decided to push the online community around JSCraftCamp and start by organizing
		more meetups.</Narigo
	>
	<ul>
		{#each data.events as { date, names }}
			<li>
				<a href="{base}/specials/crafters-vs-codewars/event-{date}">
					{date}
					{#if names.length > 0}
						- {names.join('; ')}
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</PageLayout>
