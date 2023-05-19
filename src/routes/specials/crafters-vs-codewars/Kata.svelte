<script lang="ts">
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';

	export let id: string;
	export let name: string;
	export let solution: string | undefined = undefined;

	let showSolutions = false;
</script>

<div>
	<section>
		<h3>{name}</h3>
		<Narigo>
			If you want to learn more about the puzzle first, check out the <a
				href="https://www.codewars.com/kata/{id}">Kata on CodeWars</a
			>.
		</Narigo>
	</section>
	{#if showSolutions}
		{#if solution}<CodeBlock code={solution} />{/if}
		<slot />
	{:else}
		<button on:click={() => (showSolutions = true)}>Show solutions</button>
	{/if}
</div>

<style>
	div {
		display: grid;
		gap: 2em;
		margin-bottom: 2em;
	}
	button {
		align-self: center;
		background: var(--color-primary);
		border: 0;
		color: #fff;
		cursor: pointer;
		font: inherit;
		padding: 1em;
	}
</style>
