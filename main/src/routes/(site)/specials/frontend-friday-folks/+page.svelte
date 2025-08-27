<script lang="ts">
	import { resolve } from '$app/paths';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { puzzles } = data;
</script>

<PageLayout
	title="Frontend Friday Folks fighting CSSBattle.dev"
	description="At VirtualCoffee.io, we're regularly hijacking the co-working-room to do CSS puzzles together. This page collects my solutions and includes my experiments with animations."
>
	<h2>Frontend Friday Folks</h2>
	<Narigo>
		<p>
			In <a href="https://virtualcoffee.io/" rel="external">the VirtualCoffee.io community</a>, we
			started a group that meets every Friday to work on a
			<a href="https://cssbattle.dev/?via=compose-us" rel="external"
				>CSSBattle.dev (affiliate link!)</a
			> puzzle. I think there hasn't been a single time where I haven't learnt a new CSS trick.
		</p>
		<p>
			There was enough interest to actually start a second session per week now. I'm sharing
			solutions I've done here, but I'm open to share others as well, if someone wants to submit
			anything. You can also check out <a
				href="https://github.com/orgs/Virtual-Coffee/discussions/categories/css-battles"
				rel="external">the solutions collected in the VirtualCoffee.io community</a
			>.
		</p>
		<p>Here are solutions to the puzzles I did:</p>
	</Narigo>
	<ul class="my-8 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
		{#each puzzles as { number, title }}
			<li>
				<a
					class="relative block rounded border-2 border-black bg-white p-4 no-underline shadow-lg hover:shadow-none overflow-clip"
					href="{resolve('/specials/frontend-friday-folks')}/puzzle-{number}"
				>
					<div class="absolute -bottom-2 -right-2 font-sans text-6xl font-extrabold opacity-25">
						#{number}
					</div>
					<div class="text-black">{title}</div>
				</a>
			</li>
		{/each}
	</ul>
</PageLayout>
