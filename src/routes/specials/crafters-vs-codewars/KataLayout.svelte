<script lang="ts">
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';

	export let id: string;
	export let name: string;

	let showSolutions = false;
</script>

<PageLayout>
	<div>
		<section>
			<h2>{name}</h2>
			<Narigo>
				If you want to learn more about the puzzle first, check out the <a
					href="https://www.codewars.com/kata/{id}">Kata on CodeWars</a
				>.
			</Narigo>
		</section>
		{#if showSolutions}
			<slot />
		{:else}
			<button on:click={() => (showSolutions = true)}>Show solutions</button>
		{/if}
	</div>
</PageLayout>

<style>
	div {
		display: flex;
		flex-flow: column;
		gap: 2em;
	}
</style>
