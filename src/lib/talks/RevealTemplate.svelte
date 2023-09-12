<script lang="ts">
	import Markdown from 'reveal.js/plugin/markdown/markdown.js';
	import type Reveal from 'reveal.js';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/black.css';
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';
	import { setContext } from 'svelte';

	let deck: Reveal.Api | null = null;
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
		{#if deck}<slot />{/if}
	</div>
</div>

<style>
	.reveal {
		/* background-color: #000;
		background-image: linear-gradient(
				calc(360deg / 3 * var(--blue)),
				#2a21d3,
				#233bd0ee,
				#265ccddd,
				#287bcbcc,
				#2a98c8aa,
				#2cb3c566,
				#2fc3b855,
				#31c09b44,
				#33bd8033,
				#36ba6722,
				#38b85011,
				#3ab53a00
			),
			linear-gradient(
				calc(360deg / 3 * var(--green)),
				#3ab53a,
				#4eb834ee,
				#65bb2fdd,
				#7fbe29cc,
				#9dc024aa,
				#bdc31f66,
				#c5aa1a55,
				#c8891544,
				#ca651033,
				#cc3e0b22,
				#ce150711,
				#d0021b00
			),
			linear-gradient(
				calc(360deg / 3 * var(--red)),
				#d0021b,
				#d1043fee,
				#d10763dd,
				#d20a86cc,
				#d20ca8aa,
				#d20fc966,
				#bc12d355,
				#9d15d344,
				#7f18d333,
				#611bd322,
				#451ed311,
				#2a21d300
			);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		text-shadow: 0 0 5px #000 !important; */
	}
</style>
