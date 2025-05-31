<script lang="ts">
	import Bubble from './Bubble.svelte';
	import narigo from './avatar/narigo.png';

	interface Props {
		side?: 'left' | 'right';
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { side = 'left', children, ...rest }: Props = $props();
</script>

<Bubble {...rest} {side}>
	{@render children?.()}
	{#snippet avatar(mode)}
		<div>
			{#if mode === 'shutup'}🤐{:else}<img
					src={narigo}
					class="max-h-4 max-w-4 rounded-full"
					class:shout={mode === 'shout'}
					alt={mode === 'talk' ? 'Narigo' : 'Narigo, shouting'}
				/>{/if}
		</div>
	{/snippet}
</Bubble>

<style lang="postcss">
	@reference "../../../app.css";
	.shout {
		@apply scale-125 border-2 border-red-600;
	}
</style>
