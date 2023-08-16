<script lang="ts">
	import { getContext } from 'svelte';
	import type { AnimationContext } from './AnimationContext.svelte';
	import { fade } from 'svelte/transition';

	export let stopAllAnimations: (() => void) | undefined = undefined;

	const context = getContext<AnimationContext>('AnimationContext');

	const stopAll = stopAllAnimations ?? context.finishAllAnimations;
</script>

<button transition:fade|global={{ duration: 500 }} on:click={() => stopAll()}
	>Fast forward animations &gt;&gt;</button
>

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
		animation: pulse 1000ms ease-in-out 500ms infinite forwards;
	}
	button:hover {
		background: rgba(0, 0, 0, 0.2);
	}
	button:disabled:hover {
		background: none;
		cursor: not-allowed;
	}

	@keyframes pulse {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.25;
		}
		100% {
			opacity: 1;
		}
	}
</style>
