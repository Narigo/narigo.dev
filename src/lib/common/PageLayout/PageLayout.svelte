<script>
	import { base } from '$app/paths';
	import Navigation from '../navigation/Navigation.svelte';
</script>

<div class="page">
	<header>
		<div class="content">
			<Navigation />
		</div>
	</header>
	<main>
		<div class="content">
			<slot />
		</div>
	</main>
	<footer>
		<div class="content">
			<div><a href="{base}/imprint">ℹ️ Imprint</a></div>
			<div>&copy; Jörn Bernhardt</div>
			<div>Statically hosted on GitHub Pages.</div>
			<div><a href="https://github.com/Narigo/narigo.dev" rel="external">Source</a></div>
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

	.content {
		margin: 0 auto;
		max-width: var(--max-page-width);
		padding: 1em;
	}
	header .content {
		padding-bottom: 0;
	}
	main {
		flex: 1;
	}
	footer {
		padding: 2em 1em;
		position: relative;
	}
	footer::before {
		inset: 0;
		position: absolute;
		content: '';
		box-shadow: 0 0 200px #0002;
		z-index: -1;
	}
	footer .content {
		display: flex;
		flex-flow: row wrap;
		gap: 2em;
		justify-content: space-between;
	}
	footer a {
		text-decoration: none;
	}
</style>
