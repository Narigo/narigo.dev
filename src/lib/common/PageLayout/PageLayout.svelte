<script>
	import { base } from '$app/paths';
	import Navigation from '../navigation/Navigation.svelte';
</script>

<div class="page font-primary">
	<header>
		<div class="mx-auto max-w-[--max-page-width] p-4 pb-0">
			<Navigation />
		</div>
	</header>
	<main class="flex-1">
		<div class="mx-auto max-w-[--max-page-width] p-4">
			<slot />
		</div>
	</main>
	<footer class="px-4 py-8">
		<div class="flex flex-row flex-wrap gap-8 justify-between mx-auto max-w-[--max-page-width] p-4">
			<div><a class="no-underline" href="{base}/imprint">ℹ️ Imprint</a></div>
			<div>&copy; Jörn Bernhardt</div>
			<div>Statically hosted on GitHub Pages.</div>
			<div><a class="no-underline" href="https://github.com/Narigo/narigo.dev" rel="external">Source</a></div>
		</div>
	</footer>
</div>

<style>
	.page {
		--max-page-width: 38rem;
		--rgbv-background-color: 255, 255, 255;
		--rgbv-background-inverted-color: 0, 0, 0;

		display: flex;
		background:
			linear-gradient(
					to top right,
					rgba(var(--rgbv-background-inverted-color), 0) 50%,
					rgba(var(--rgbv-background-inverted-color), 0.02) 50%,
					rgba(var(--rgbv-background-inverted-color), 0)
				)
				fixed 0 0 / contain no-repeat,
			linear-gradient(
					to top left,
					rgba(var(--rgbv-background-inverted-color), 0) 50%,
					rgba(var(--rgbv-background-inverted-color), 0.02) 50%,
					rgba(var(--rgbv-background-inverted-color), 0)
				)
				center / cover no-repeat,
			rgba(var(--rgbv-background-color), 1);
		background-size: cover;
		flex: 1;
		flex-direction: column;
		font-family: var(--font-family-primary);
		letter-spacing: 0.5px;
		min-height: 100%;
		min-width: 100%;
	}
</style>
