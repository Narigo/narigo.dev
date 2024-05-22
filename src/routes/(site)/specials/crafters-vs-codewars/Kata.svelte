<script lang="ts">
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';

	export let id: string;
	export let name: string;
	export let solution: string | undefined = undefined;

	let showSolution = false;
</script>

<div class="grid gap-8">
	<section>
		<h3>{name}</h3>
		<Narigo>
			If you want to learn more about the puzzle first, check out the <a
				href="https://www.codewars.com/kata/{id}">Kata on CodeWars</a
			>.
		</Narigo>
	</section>
	{#if showSolution}
		{#if solution}<CodeBlock code={solution} />{/if}
		<slot />
	{:else}
		<button
			class="self-center bg-primary border-0 cursor-pointer text-white p-4 mb-8"
			on:click={() => (showSolution = true)}>Show solution</button
		>
	{/if}
</div>
