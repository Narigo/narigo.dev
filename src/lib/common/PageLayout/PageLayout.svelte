<script>
	import { base } from '$app/paths';
</script>

<div class="page">
	<header>
		<nav>
			<li><a href="{base}/">Home</a></li>
			<li><a href="{base}/talks">Talks</a></li>
			<li><a href="{base}/contact">Contact</a></li>
		</nav>
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
</style>
