<script lang="ts">
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';

	interface Props {
		id: string;
		name: string;
		solution?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let { id, name, solution = undefined, children }: Props = $props();

	let showSolution = $state(false);
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
		{@render children?.()}
	{:else}
		<button
			class="self-center bg-primary border-0 cursor-pointer text-white p-4 mb-8"
			onclick={() => (showSolution = true)}>Show solution</button
		>
	{/if}
</div>
