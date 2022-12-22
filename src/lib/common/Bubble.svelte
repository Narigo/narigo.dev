<script lang="ts">
	import { fly } from 'svelte/transition';

	export let side: 'left' | 'right' = 'left';

	let randomAngle = Math.random() * 1.5 - 1.5 / 2;
	let randomTranslate = Math.random() * 5 - 5 / 2;

	let open = true;

	const toggleTalking = () => {
		open = !open;
		if (open) {
			randomAngle = Math.random() * 1.5 - 1.5 / 2;
			randomTranslate = Math.random() * 5 - 5 / 2;
		}
	};
</script>

<div
	class="wrap"
	class:shutup={!open}
	class:left={side === 'left'}
	class:right={side === 'right'}
	style="--angle: {randomAngle}deg; --x: {randomTranslate}px;"
>
	{#if open}
		<div class="bubble" transition:fly={{ x: (side === 'left' ? -1 : 1) * 50, duration: 100 }}>
			<div class="content">
				<slot />
			</div>
		</div>
	{/if}
	<div class="avatar" on:click={toggleTalking} on:keypress={toggleTalking}>
		{#if open}🗣️{:else}🤐{/if}
	</div>
</div>

<style>
	.wrap {
		position: relative;
		min-height: 3em;
		transform: rotate(var(--angle));
	}
	.bubble {
		position: relative;
		background: #fff;
		border-radius: 0.5rem;
		border: 2px solid #000;
		font-size: 1em;
		line-height: 2em;
		margin: 0.5em auto;
		max-width: max-content;
		padding: 0.5em;
		transform: translateX(var(--x));
	}
	.content {
		/* transform: translateX(calc(var(--x) * -1)) rotate(calc(var(--angle) * -1)); */
	}
	.content :global(:first-child) {
		margin-top: 0;
	}
	.content :global(:last-child) {
		margin-bottom: 0;
	}
	.left .bubble {
		margin-left: 2em;
	}
	.right .bubble {
		margin-right: 2em;
	}
	.bubble::before {
		position: absolute;
		box-sizing: border-box;
		width: 1em;
		height: 1em;
		content: '';
		border-top: 2px solid #000;
		border-right: 2px solid #000;
		/* background: linear-gradient(0.125turn, transparent 0 calc(50% - 2px), #fff calc(50% - 2px) 100%); */
		clip-path: polygon(0 0, 100% 0, 100% calc(100% + 1px), -1px 0);
		background: #fff;
		overflow: hidden;
		z-index: 0;
	}
	.left .bubble::before {
		transform: rotate(225deg);
		bottom: 0.8em;
		left: -0.5em;
	}
	.right .bubble::before {
		transform: scaleX(-1) rotate(225deg);
		bottom: 0.8em;
		right: -0.5em;
	}
	.avatar {
		position: absolute;
		bottom: 0.8em;
	}
	.left .avatar {
		left: 0;
	}
	.right .avatar {
		right: 0;
		transform: scaleX(-1);
	}
</style>
