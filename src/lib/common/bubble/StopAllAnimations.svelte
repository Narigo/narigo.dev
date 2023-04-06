<script lang="ts">
	import { getContext } from 'svelte';
	import type { AnimationContext } from './AnimationContext.svelte';

	const context = getContext<AnimationContext>('AnimationContext');
	const { animationsDone, finishAllAnimations } = context;
</script>

<button on:click={() => finishAllAnimations()} disabled={$animationsDone}>Fast forward animations</button>
