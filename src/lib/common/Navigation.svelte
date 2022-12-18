<script>
	import { base } from '$app/paths';
</script>

<nav>
	<li><a href="{base}/">Home</a></li>
	<li><a href="{base}/talks">Talks</a></li>
	<li><a href="{base}/contact">Contact</a></li>
</nav>

<style>
	nav {
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	li {
		list-style-type: none;
	}
</style>
