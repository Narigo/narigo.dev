<script lang="ts">
	interface Props {
		shake?: boolean;
		children?: import('svelte').Snippet;
	}

	let { shake = true, children }: Props = $props();
</script>

<div class="contents" class:shakeit={shake}>
	{@render children?.()}
</div>

<style lang="postcss">
	@reference "../../app.css";

	.shakeit > :global(*) {
		@apply animate-shake;
		text-transform: uppercase;
	}
</style>
