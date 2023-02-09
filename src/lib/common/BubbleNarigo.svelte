<script lang="ts">
	import Bubble from './Bubble.svelte';

	export let side: 'left' | 'right' = 'left';
</script>

<Bubble {...$$restProps} {side} >
	<slot />
	<div slot="avatar">😏</div>
</Bubble>
