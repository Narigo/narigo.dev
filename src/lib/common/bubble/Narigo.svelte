<script lang="ts">
	import Bubble from './Bubble.svelte';
	import narigo from './avatar/narigo.png';

	interface Props {
		side?: 'left' | 'right';
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { side = 'left', children, ...rest }: Props = $props();
</script>

<Bubble {...rest} {side}>
	{@render children?.()}
	{#snippet avatar({ mode })}
		<div  >
			{#if mode === 'shutup'}🤐{:else}<img
					src={narigo}
					class="rounded-full max-h-4 max-w-4"
					class:shout={mode === 'shout'}
					alt={mode === 'talk' ? 'Narigo' : 'Narigo, shouting'}
				/>{/if}
		</div>
	{/snippet}
</Bubble>

<style lang="postcss">
	.shout {
		@apply border-2 border-red-600 scale-125;
	}
</style>
