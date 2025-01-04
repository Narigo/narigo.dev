<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		children: Snippet;
		class?: string;
	}

	let { id, children, class: clazz }: Props = $props();
</script>

<section {id} class="full-width {clazz ?? ''}">
	{@render children?.()}
</section>

<style lang="postcss">
	.full-width {
		display: grid;
		grid-template-columns: inherit;
		grid-column: full-width;
	}
	.full-width > :global(*) {
		grid-column: content;
	}
</style>
