<script lang="ts">
	import Bubble from './Bubble.svelte';
	import narigo from './avatar/narigo.png';

	export let side: 'left' | 'right' = 'left';
</script>

<Bubble {...$$restProps} {side} >
	<slot />
	<div slot="avatar"><img src="{narigo}" alt="Narigo" /></div>
</Bubble>

<style>
	img {
		border-radius: 50%;
		max-height: 1em;
		max-width: 1em;
	}
</style>
