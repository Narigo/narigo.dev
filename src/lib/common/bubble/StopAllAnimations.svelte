<script lang="ts">
	import { getContext } from 'svelte';
	import type { AnimationContext } from './AnimationContext.svelte';

	const context = getContext<AnimationContext>('AnimationContext');
	const { animationsDone, finishAllAnimations } = context;
</script>

<button on:click={() => finishAllAnimations()} disabled={$animationsDone}
	>Fast forward animations &gt;&gt;</button
>

<style>
	button {
		background: none;
		border: none;
		cursor: pointer;
		font: inherit;
		padding: 0.5em 1em;
	}
	button:hover {
		background: #0002;
	}
	button:disabled:hover {
		background: none;
		cursor: not-allowed;
	}
</style>
