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
	<p>
		There are a few older ones that I didn't have anymore. If you're looking for one of them, please
		let me know.
	</p>
	<ul>
		<li>
			<a href="{base}/talks/static-pages-with-dynamic-content" rel="external"
				>Static pages with "dynamic" content</a
			>
			-
			<a
				href="https://www.meetup.com/de-DE/frankenjs/events/289645924/"
				rel="external noopener noreferrer">FrankenJS Meetup 2022-12-07</a
			>
		</li>
	</ul>
</PageLayout>
