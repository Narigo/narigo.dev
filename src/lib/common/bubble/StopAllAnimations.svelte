<script lang="ts">
	import { getContext } from 'svelte';
	import type { AnimationContext } from './AnimationContext.svelte';
	import { fade } from 'svelte/transition';

	const context = getContext<AnimationContext>('AnimationContext');
	const { animationsDone, finishAllAnimations } = context;
</script>

{#if !$animationsDone}
	<button transition:fade|global disabled={$animationsDone} on:click={() => finishAllAnimations()}
		>Fast forward animations &gt;&gt;</button
	>
{/if}

<style>
	button {
		position: fixed;
		top: 0;
		right: 0;
		background: none;
		border: none;
		cursor: pointer;
		font: inherit;
		padding: 0.5em 1em;
		z-index: 1;
	}
	button:hover {
		background: #0002;
	}
	button:disabled:hover {
		background: none;
		cursor: not-allowed;
	}
</style>
