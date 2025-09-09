<script lang="ts">
	import type { Snippet } from 'svelte';
	import appStyle from '../../../app.css?url';
	import articlesStyle from './articles.css?url';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href={appStyle} />
	<link rel="stylesheet" href={articlesStyle} />
</svelte:head>

{@render children?.()}
