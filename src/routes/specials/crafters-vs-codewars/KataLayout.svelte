<script lang="ts">
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';

	export let id: string;
	export let name: string;
</script>

<PageLayout>
	<div>
		<section>
			<h2>{name}</h2>
			<p>
				If you want to learn about the puzzle first, check out the <a
					href="https://www.codewars.com/kata/{id}">Kata on CodeWars</a
				>.
			</p>
		</section>
		<slot />
	</div>
</PageLayout>

<style>
	div {
		display: flex;
		flex-flow: column;
		gap: 2em;
	}
</style>
