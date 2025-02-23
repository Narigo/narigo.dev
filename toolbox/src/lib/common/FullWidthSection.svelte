<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface Props {
		class?: string;
		id?: string;
		children?: Snippet;
	}

	let {
		class: bgClass = '',
		id = undefined,
		children,
		...rest
	}: Props & SvelteHTMLElements['section'] = $props();
</script>

<section {id} {...rest} class="full-width {bgClass}">
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
