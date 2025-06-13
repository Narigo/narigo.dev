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
		animation: 4s loader infinite;

        width: 10em;
        height: 10em;

		background: radial-gradient(
				circle at calc(cos(var(--percentage)) * var(--orbit-size))
					calc(cos(var(--percentage)) * var(--orbit-size)),
				hsl(240, 100%, calc(var(--percentage) * 100%)) calc(var(--percentage) * var(--orbit-size)),
				transparent 0
			)
			lime;
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
			--percentage: 1;
		}
	}
</style>
