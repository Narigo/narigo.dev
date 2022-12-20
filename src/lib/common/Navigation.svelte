<script>
	import { base } from '$app/paths';
</script>

<nav>
	<li><a href="{base}/">🏠 Home</a></li>
	<li><a href="{base}/talks">🗣️ Talks</a></li>
	<li><a href="{base}/contact">🧑‍💼 Contact</a></li>
</nav>

<style>
	nav {
		align-items: center;
		display: flex;
		flex-flow: row wrap;
		font-family: var(--font-family-headline);
		justify-content: space-between;
		max-width: var(--max-page-width);
	}
	li {
		list-style-type: none;
	}
	a {
		background: rgba(0, 128, 0, 0.8);
		box-shadow: 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.7);
		color: #fff;
		display: inline-flex;
		padding: 0.5em 1em;
		margin: 0 0 1em 0;
		text-decoration: none;
	}
	a:hover {
		background: rgba(51, 179, 51, 0.8);
	}
</style>
