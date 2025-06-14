<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	const { children }: Props = $props();

	let content: HTMLDivElement;
	let loader: HTMLDivElement;

	onMount(() => {
		loader.setAttribute('style', `--orbit-size: calc((${content.scrollWidth}px / 2) - 1.5em);`);
	});
</script>

<div role="presentation" bind:this={loader} class="loader grid place-items-center">
	<div
		bind:this={content}
		class="grid aspect-square place-items-center rounded-full p-16 text-center"
	>
		{@render children?.()}
	</div>
</div>

<style lang="postcss">
	.loader {
		--percentage: 0;
		--orbit-size: 4em;
		animation: 5s loader infinite linear;

		background:
			radial-gradient(
					circle,
					hsl(
							calc((var(--percentage) + 0) * 720),
							100%,
							calc(60% + sin(var(--percentage) * 540deg) * 10%)
						)
						calc(1em + sin((var(--percentage) + 0) * 1080deg) * 0.25em),
					transparent 0
				)
				calc(50% + sin((var(--percentage) + 0) * 360deg) * var(--orbit-size))
				calc(50% - cos((var(--percentage) + 0) * 360deg) * var(--orbit-size)) no-repeat,
			radial-gradient(
					circle,
					hsl(
							calc((var(--percentage) + 0.15) * 720),
							100%,
							calc(60% + sin(var(--percentage) * 540deg) * 10%)
						)
						calc(1em + sin((var(--percentage) + 0.5) * 1080deg) * 0.25em),
					transparent 0
				)
				calc(50% + sin((var(--percentage) + 0.2) * 360deg) * var(--orbit-size))
				calc(50% - cos((var(--percentage) + 0.2) * 360deg) * var(--orbit-size)) no-repeat,
			radial-gradient(
					circle,
					hsl(
							calc((var(--percentage) + 0.3) * 720),
							100%,
							calc(60% + sin(var(--percentage) * 540deg) * 10%)
						)
						calc(1em + sin((var(--percentage) + 0.1) * 1080deg) * 0.25em),
					transparent 0
				)
				calc(50% + sin((var(--percentage) + 0.4) * 360deg) * var(--orbit-size))
				calc(50% - cos((var(--percentage) + 0.4) * 360deg) * var(--orbit-size)) no-repeat,
			radial-gradient(
					circle,
					hsl(
							calc((var(--percentage) + 0.45) * 720),
							100%,
							calc(60% + sin(var(--percentage) * 540deg) * 10%)
						)
						calc(1em + sin((var(--percentage) + 0.15) * 1080deg) * 0.25em),
					transparent 0
				)
				calc(50% + sin((var(--percentage) + 0.6) * 360deg) * var(--orbit-size))
				calc(50% - cos((var(--percentage) + 0.6) * 360deg) * var(--orbit-size)) no-repeat,
			radial-gradient(
					circle,
					hsl(
							calc((var(--percentage) + 0.6) * 720),
							100%,
							calc(60% + sin(var(--percentage) * 540deg) * 10%)
						)
						calc(1em + sin((var(--percentage) + 0.2) * 1080deg) * 0.25em),
					transparent 0
				)
				calc(50% + sin((var(--percentage) + 0.8) * 360deg) * var(--orbit-size))
				calc(50% - cos((var(--percentage) + 0.8) * 360deg) * var(--orbit-size)) no-repeat;
	}

	@property --percentage {
		syntax: '<number>';
		initial-value: 0;
		inherits: false;
	}

	@keyframes loader {
		0% {
			--percentage: 0;
		}
		100% {
			--percentage: 2;
		}
	}
</style>
