<script>
	import { base } from '$app/paths';
	import Navigation from '../Navigation.svelte';
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
			<a href="{base}/imprint">ℹ️ Impressum</a>
		</div>
	</footer>
</div>

<style>
	.page {
		--max-page-width: 54em;

		display: flex;
		background: url('./bg.svg') no-repeat;
		background-position: 0 0;
		background-size: cover;
		flex: 1;
		flex-direction: column;
		font-family: var(--font-family-primary);
		min-height: 100%;
		min-width: 100%;
	}

	.content {
		margin: 0 auto;
		max-width: var(--max-page-width);
		padding: 1em;
	}
	main {
		flex: 1;
	}
	footer {
		background: #fff4;
		padding: 2em 1em;
		position: relative;
	}
	footer::before {
		inset: 0;
		position: absolute;
		content: '';
		box-shadow: 0 0 200px #0002;
	}

	footer a {
		text-decoration: none;
	}
</style>
