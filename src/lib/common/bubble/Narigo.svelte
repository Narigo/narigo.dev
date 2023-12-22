<script lang="ts">
	import Bubble from './Bubble.svelte';
	import narigo from './avatar/narigo.png';

	export let side: 'left' | 'right' = 'left';
</script>

<Bubble {...$$restProps} {side}>
	<slot />
	<div slot="avatar" let:mode>
		{#if mode === 'shutup'}🤐{:else}<img
				src={narigo}
				class="rounded-full max-h-4 max-w-4"
				class:shout={mode === 'shout'}
				alt={mode === 'talk' ? 'Narigo' : 'Narigo, shouting'}
			/>{/if}
	</div>
</Bubble>

<style lang="postcss">
	.shout {
		@apply border-2 border-red-600 scale-125;
	}
</style>
