<script lang="ts">
	import { base } from '$app/paths';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { puzzles } = data;
</script>

<PageLayout>
	<h2>Frontend Friday Folks</h2>
	<Narigo>
		<p>
			In <a href="https://virtualcoffee.io/" rel="external">the VirtualCoffee.io community</a>, we started a
			group that meets every Friday to work on a CSSBattle.dev puzzle. I think there hasn't been a
			single time where I haven't learnt a new CSS trick.
		</p>
		<p>
			There was enough interest to actually start a second session per week now. I'm sharing
			solutions I've done here, but I'm open to share others as well, if someone wants to submit
			anything.
		</p>
	</Narigo>
	<Narigo>
		<p>Here are solutions to puzzles we completed:</p>
		<ul>
			{#each puzzles as { number, title }}
				<li>
					<a href="{base}/specials/frontend-friday-folks/puzzle-{number}"
						>Puzzle {number} - {title}</a
					>
				</li>
			{/each}
		</ul>
	</Narigo>
</PageLayout>
