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
	class="animate-pulse-fast hover:bg-opacity-20 sticky top-0 right-0 z-10 cursor-pointer border-none bg-none px-4 py-2 hover:bg-black disabled:hover:cursor-not-allowed disabled:hover:bg-none"
	transition:fade|global={{ duration: 500 }}
	onclick={() => stopAll()}>Fast forward animations &gt;&gt;</button
>
