<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../../app.postcss';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
