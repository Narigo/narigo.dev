<script lang="ts">
	import Bubble from '$lib/common/Bubble.svelte';

	export let lines: string[];
</script>

{#each lines as line, index}
	<Bubble delay={index * 1000 + 1} side={index % 2 === 0 ? 'left' : 'right'}>{line}</Bubble>
{/each}
