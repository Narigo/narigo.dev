<script lang="ts">
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Here will be a list of the talks.</h2>
	<p>For now, it's a placeholder page.</p>
	<ul>
		<li>
			<a href="{base}/talks/static-pages-with-dynamic-content"
				>Static pages with "dynamic" content</a
			>
			-
			<a href="https://www.meetup.com/de-DE/frankenjs/events/289645924/" rel="external"
				>FrankenJS Meetup</a
			>
		</li>
	</ul>
</PageLayout>
