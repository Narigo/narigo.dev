<script lang="ts">
	import Bubble from '$lib/common/Bubble.svelte';

	export let lines: string[];
</script>

{#each lines as line, index}
	<Bubble animation="dialog" delayNext={300 + line.length * 50} side={index % 2 === 0 ? 'left' : 'right'}
		>{line}</Bubble
	>
{/each}
