<script lang="ts">
	import type { Snippet } from 'svelte';
	import appStyle from '../../app.css?url';
	import comicsStyle from './comics.css?url';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href={appStyle} />
	<link rel="stylesheet" href={comicsStyle} />
</svelte:head>

{@render children?.()}
