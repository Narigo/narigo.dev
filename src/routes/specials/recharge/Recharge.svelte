<script lang="ts">
	import Bubble from '$lib/common/bubble/Bubble.svelte';
	import { writable } from 'svelte/store';
	import type { TransitionConfig } from 'svelte/transition';
	import { bounceOut } from 'svelte/easing';

	export let person: string;
	export let emojis: string;
	export let message: string;

	let active = false;
	let done = false;
	let currentEmojis = writable<string[]>([]);

	const floatUp: (node: Element, params: { index: number }) => TransitionConfig = (
		_node,
		{ index }
	) => {
		return {
			duration: 5000,
			easing: bounceOut,
			css(t) {
				return `
				${t < 1 ? `bottom: ${Math.min(100, Math.max(0, t * 200 >= 100 ? 200 - t * 200 : t * 200))}%;` : ''}
				${index % 2 === 0 ? `left: ${2.5 + t * 15}vh;` : `right: ${2.5 + t * 15}vh;`}
				opacity: ${t * 2 >= 1 ? 2 - t * 2 : t};
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
					#28de53 1vh calc(${t * 100}% - 1vh),
					#333 calc(${t * 100}% - 1vh) calc(100% - 1vh),
					#b3b3b3 calc(100% - 1vh)
				);
				`;
			},
			tick(t) {
				const nextEmoji = allEmojis[Math.round(t * (allEmojis.length - 1))];
				if (
					$currentEmojis.length === 0 ||
					$currentEmojis[$currentEmojis.length - 1] !== nextEmoji
				) {
					$currentEmojis = [...$currentEmojis, nextEmoji];
				}

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
				<span in:floatUp={{ index }} style="z-index: {$currentEmojis.length - index}"
					>{currentEmoji}</span
				>
			{/each}
		</div>
	{/if}
	{#if done}
		{#if message !== ''}<div>{message}</div>{/if}
		<button
			on:click={() => {
				active = done = false;
				$currentEmojis = [];
			}}>reset</button
		>
	{/if}
</section>

<style>
	@keyframes change-opacity {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	button.battery {
		cursor: pointer;
	}
	button.battery::before {
		content: '⚡️';
		font-size: 5vh;
		animation: change-opacity 2s ease 0s infinite normal;
	}
	div.battery,
	.battery {
		height: 40vh;
		width: 10vh;
		border: 0;
		border-radius: 1vh;
		background: linear-gradient(
			to bottom,
			#b3b3b3 1vh,
			#333 1vh calc(100% - 1vh),
			#b3b3b3 calc(100% - 1vh)
		);
		box-shadow: 0px -3vh 0 -2vh #b3b3b3, -0.5vh 0 2vh #333 inset;
	}
	div.battery {
		background: linear-gradient(
			to bottom,
			#b3b3b3 1vh,
			#28de53 1vh calc(100% - 1vh),
			#b3b3b3 calc(100% - 1vh)
		);
		display: grid;
		place-items: center;
		position: relative;
	}
	section {
		display: grid;
		gap: 2em;
		padding: 2vh;
		place-items: center;
		flex: 1;
	}
	span {
		position: absolute;
		opacity: 0;
	}
</style>
