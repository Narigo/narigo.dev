<script>
	import { base } from '$app/paths';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Frontend Friday Folks</h2>
	<Narigo
		>In VirtualCoffee.io, we started a group that meets every Friday to work on a CSSBattle.dev
		puzzle. I think there hasn't been a single time where I haven't learnt a new CSS trick. I'm
		going to share some puzzle solutions and write about it.</Narigo
	>
	<ul>
		<li><a href="{base}/specials/frontend-friday-folks/puzzle-35">Puzzle 35 - Ice Cream</a></li>
	</ul>
</PageLayout>
