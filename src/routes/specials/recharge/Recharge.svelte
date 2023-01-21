<script lang="ts">
	import Bubble from '$lib/common/Bubble.svelte';
	import { writable } from 'svelte/store';
	import type { TransitionConfig } from 'svelte/transition';

	export let person: string;
	export let emojis: string;
	export let message: string;

	let active = false;
	let done = false;
	let currentEmojis = writable<string[]>([]);

	const floatUp: (node: Element) => TransitionConfig = (_node) => {
		return {
			duration: 5000,
			css(t) {
				return `
				${t < 1 ? `bottom: ${Math.min(80, Math.max(0, t * 100))}%;` : ''}
				scale: ${t * 3};
				`;
			}
		};
	};
	const recharge: (node: Element) => TransitionConfig = (_node) => {
		const allEmojis = emojis.split(new RegExp('', 'u'));
		return {
			duration: 5000,
			css(t) {
				return `
				background: linear-gradient(
					to top,
					#b3b3b3 1vh,
					#0f0 1vh,
					#0f0 calc(${t * 100}% - 1vh),
					#333 calc(${t * 100}% - 1vh),
					#333 calc(100% - 1vh),
					#b3b3b3 calc(100% - 1vh)
				);
				`;
			},
			tick(t) {
				$currentEmojis = [...$currentEmojis, allEmojis[Math.round(t * (allEmojis.length - 1))]];

				if (t === 1) {
					$currentEmojis = [...$currentEmojis, allEmojis[allEmojis.length - 1]];
					done = true;
				}
			}
		};
	};
</script>

<Bubble>Feeling low on energy? Press the battery to recharge, {person}!</Bubble>
<section>
	{#if !active}
		<button class="battery" on:click={() => (active = true)} />
	{:else}
		<div class="battery" in:recharge>
			{#each $currentEmojis as currentEmoji, index}
				<span in:floatUp style="z-index: {$currentEmojis.length - index}">{currentEmoji}</span>
			{/each}
		</div>
	{/if}
	{#if done}
		{#if message !== ''}<div>{message}</div>{/if}
		<button on:click={() => (active = done = false)}>reset</button>
	{/if}
</section>

<style>
	div.battery,
	.battery {
		height: 40vh;
		width: 10vh;
		border: 0;
		border-radius: 1vh;
		background: linear-gradient(
			to bottom,
			#b3b3b3 1vh,
			#333 1vh,
			#333 calc(100% - 1vh),
			#b3b3b3 calc(100% - 1vh)
		);
		box-shadow: 0px -3vh 0 -2vh #b3b3b3;
	}
	div.battery {
		background: linear-gradient(
			to bottom,
			#b3b3b3 1vh,
			#0f0 1vh,
			#0f0 calc(100% - 1vh),
			#b3b3b3 calc(100% - 1vh)
		);
		display: grid;
		place-items: center;
		position: relative;
	}
	section {
		display: grid;
		padding: 2vh;
		place-items: center;
		flex: 1;
	}
	span {
		position: absolute;
	}
</style>
