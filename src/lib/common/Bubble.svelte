<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	export let side: 'left' | 'right' = 'left';
</script>

<div
	class:left={side === 'left'}
	class:right={side === 'right'}
	in:fade={{ duration: 2000 }}
>
	<slot />
</div>

<style>
	div {
		position: relative;
		background: #fff;
		border-radius: 0.5rem;
		border: 2px solid #000;
		font-size: 1em;
		line-height: 2em;
		margin: 0.5em auto;
		padding: 0.5em;
		max-width: max-content;
	}
	div :global(:first-child) {
		margin-top: 0;
	}
	div :global(:last-child) {
		margin-bottom: 0;
	}
	div.left {
		margin-left: 2em;
	}
	div.right {
		margin-right: 2em;
	}
	div::before {
		position: absolute;
		box-sizing: border-box;
		width: calc(1em - 1px);
		height: calc(1em - 1px);
		content: '';
		border-top: 2px solid #000;
		border-right: 2px solid #000;
		/* background: linear-gradient(0.125turn, transparent 0 calc(50% - 2px), #fff calc(50% - 2px) 100%); */
		clip-path: polygon(0 0, 100% 0, 100% calc(100% + 1px), -1px 0);
		background: #fff;
		overflow: hidden;
		z-index: 0;
	}
	div.left::before {
		transform: rotate(225deg);
		bottom: 0.8em;
		left: -0.5em;
	}
	div.right::before {
		transform: scaleX(-1) rotate(225deg);
		bottom: 0.8em;
		right: -0.5em;
	}
	div::after {
		position: absolute;
		content: '🗣️';
		bottom: 0.2em;
	}
	div.left::after {
		left: -2em;
	}
	div.right::after {
		right: -2em;
		transform: scaleX(-1);
	}
</style>
