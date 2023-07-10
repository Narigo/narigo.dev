<script lang="ts">
	import { fade, type TransitionConfig } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	let visible = false;

	const spin = (node: HTMLElement, { duration }: { duration: number }): TransitionConfig => {
		return {
			duration,
			css: (t) => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`;
			}
		};
	};
</script>

<section
	role="presentation"
	on:click={() => {
		visible = !visible;
	}}
	on:keydown={() => {
		visible = !visible;
	}}
>
	{#if visible}
		<div class="centered" in:spin={{ duration: 8000 }} out:fade>
			<span>transitions!</span>
		</div>
	{:else}
		<div transition:fade>... really cool 😉</div>
	{/if}
</section>

<style>
	.centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 4em;
	}
</style>
