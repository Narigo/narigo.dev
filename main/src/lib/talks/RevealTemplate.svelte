<script lang="ts">
	import Markdown from 'reveal.js/plugin/markdown/markdown.js';
	import type Reveal from 'reveal.js';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/black.css';
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';
	import { setContext } from 'svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let deck: Reveal.Api | null = $state(null);
	setContext('Reveal', () => deck);

	onMount(async () => {
		if (browser) {
			const Reveal = await import('reveal.js').then((mod) => mod.default);
			await tick();
			deck = new Reveal({
				plugins: [Markdown]
			});
			deck.initialize();
		}
	});
</script>

<div class="reveal">
	<div class="slides">
		{#if deck}{@render children?.()}{/if}
	</div>
</div>
