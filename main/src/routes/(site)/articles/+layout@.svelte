<script lang="ts">
	import type { Snippet } from 'svelte';
	import appStyle from '../../../app.css?url';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href={appStyle} />
</svelte:head>

{@render children?.()}
