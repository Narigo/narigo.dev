<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../../app.css';
	import comicsStyle from './comics.css?url';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href={comicsStyle} />
</svelte:head>

{@render children?.()}
