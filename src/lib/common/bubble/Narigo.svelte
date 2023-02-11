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
				class:shout={mode === 'shout'}
				alt={mode === 'talk' ? 'Narigo' : 'Narigo, shouting'}
			/>{/if}
	</div>
</Bubble>

<style>
	img {
		border-radius: 50%;
		max-height: 1em;
		max-width: 1em;
	}
	.shout {
		border: 2px solid #f00;
		scale: 1.3;
	}
</style>
