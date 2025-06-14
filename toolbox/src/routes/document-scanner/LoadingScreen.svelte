<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	const { children }: Props = $props();
</script>

<div role="presentation" class="loader">
	{@render children?.()}
</div>

<style lang="postcss">
	.loader {
		--percentage: 0;
		--orbit-size: 4em;
		animation: 5s loader infinite linear;

		width: calc(2 * (var(--orbit-size) + 1.25em));
		height: calc(2 * (var(--orbit-size) + 1.25em));

		background:
			radial-gradient(
				circle,
				hsl(calc((var(--percentage) + .00) * 720), 100%, calc(60% + sin(var(--percentage) * 540deg) * 10%)) calc(1em + sin((var(--percentage) + .00) * 1080deg) * .25em),
				transparent 0
			) calc(50% + sin((var(--percentage) + .00) * 360deg) * var(--orbit-size))
			  calc(50% - cos((var(--percentage) + .00) * 360deg) * var(--orbit-size))
              no-repeat,
			radial-gradient(
				circle,
				hsl(calc((var(--percentage) + .15) * 720), 100%, calc(60% + sin(var(--percentage) * 540deg) * 10%)) calc(1em + sin((var(--percentage) + .5) * 1080deg) * .25em),
				transparent 0
			) calc(50% + sin((var(--percentage) + .20) * 360deg) * var(--orbit-size))
			  calc(50% - cos((var(--percentage) + .20) * 360deg) * var(--orbit-size))
              no-repeat,
			radial-gradient(
				circle,
				hsl(calc((var(--percentage) + .30) * 720), 100%, calc(60% + sin(var(--percentage) * 540deg) * 10%)) calc(1em + sin((var(--percentage) + .10) * 1080deg) * .25em),
				transparent 0
			) calc(50% + sin((var(--percentage) + .40) * 360deg) * var(--orbit-size))
			  calc(50% - cos((var(--percentage) + .40) * 360deg) * var(--orbit-size))
              no-repeat,
			radial-gradient(
				circle,
				hsl(calc((var(--percentage) + .45) * 720), 100%, calc(60% + sin(var(--percentage) * 540deg) * 10%)) calc(1em + sin((var(--percentage) + .15) * 1080deg) * .25em),
				transparent 0
			) calc(50% + sin((var(--percentage) + .60) * 360deg) * var(--orbit-size))
			  calc(50% - cos((var(--percentage) + .60) * 360deg) * var(--orbit-size))
              no-repeat,
			radial-gradient(
				circle,
				hsl(calc((var(--percentage) + .60) * 720), 100%, calc(60% + sin(var(--percentage) * 540deg) * 10%)) calc(1em + sin((var(--percentage) + .20) * 1080deg) * .25em),
				transparent 0
			) calc(50% + sin((var(--percentage) + .80) * 360deg) * var(--orbit-size))
			  calc(50% - cos((var(--percentage) + .80) * 360deg) * var(--orbit-size))
              no-repeat
            ;
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
