<script lang="ts">
	import { getContext } from 'svelte';
	import type { AnimationContext } from './AnimationContext.svelte';
	import { fade } from 'svelte/transition';

	export let stopAllAnimations: (() => void) | undefined = undefined;

	const context = getContext<AnimationContext>('AnimationContext');

	const stopAll = stopAllAnimations ?? context.finishAllAnimations;
</script>

<button
	class="animate-pulse-fast sticky top-0 right-0 bg-none hover:bg-black hover:bg-opacity-20 border-none cursor-pointer py-2 px-4 z-10 disabled:hover:bg-none disabled:hover:cursor-not-allowed"
	transition:fade|global={{ duration: 500 }}
	on:click={() => stopAll()}>Fast forward animations &gt;&gt;</button
>
