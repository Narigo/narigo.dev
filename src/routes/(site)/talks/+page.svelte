<script lang="ts">
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Slides for my talks</h2>
	<p>
		I usually share the slide deck to my talks for people who attended the
		meetup/conference/whatever. Reach out if you have questions!
	</p>
	<ul>
		<li>
			<a href="{base}/talks/static-pages-with-dynamic-content"
				>Static pages with "dynamic" content</a
			>
			-
			<a href="https://www.meetup.com/de-DE/frankenjs/events/289645924/" rel="external"
				>FrankenJS Meetup 2022-12-07</a
			>
		</li>
	</ul>
</PageLayout>
