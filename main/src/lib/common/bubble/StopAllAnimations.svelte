<script lang="ts">
	import { getContext } from 'svelte';
	import type { AnimationContext } from './AnimationContext.svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		stopAllAnimations?: (() => void) | undefined;
	}

	let { stopAllAnimations = undefined }: Props = $props();

	const context = getContext<AnimationContext>('AnimationContext');

	const stopAll = stopAllAnimations ?? context.finishAllAnimations;
</script>

<button
	class="animate-pulse-fast sticky top-0 right-0 bg-none hover:bg-black hover:bg-opacity-20 border-none cursor-pointer py-2 px-4 z-10 disabled:hover:bg-none disabled:hover:cursor-not-allowed"
	transition:fade|global={{ duration: 500 }}
	onclick={() => stopAll()}>Fast forward animations &gt;&gt;</button
>
