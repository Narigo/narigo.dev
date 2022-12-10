<script>
	import { base } from '$app/paths';
</script>

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
