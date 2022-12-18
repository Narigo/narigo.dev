<script>
	import { base } from '$app/paths';
	import Navigation from '../Navigation.svelte';
</script>

<div class="page">
	<header>
		<div class="nav">
			<Navigation />
		</div>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<a href="{base}/imprint">Impressum</a>
	</footer>
</div>

<style>
	.page {
		display: flex;
		background: url('./bg.svg') no-repeat;
		background-position: 0 0;
		background-size: cover;
		flex: 1;
		flex-direction: column;
		min-height: 100%;
		min-width: 100%;
	}

	.nav {
		margin: 0 auto;
		max-width: 70em;
		padding: 1em;
	}
</style>
