<script lang="ts">
	import { base } from '$app/paths';
	import Navigation from '../navigation/Navigation.svelte';
	import defaultPreviewImage from './preview-image.png';

	interface Props {
		title?: string;
		description?: string | undefined;
		author?: string | undefined;
		publishDate?: string | undefined;
		og_title?: string | undefined;
		og_description?: string | undefined;
		og_image?: string | undefined;
		twitter_title?: string | undefined;
		twitter_description?: string | undefined;
		twitter_image?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let {
		title = 'Thoughts, Talks and Trials by Narigo',
		description = undefined,
		author = undefined,
		publishDate = undefined,
		og_title = undefined,
		og_description = undefined,
		og_image = undefined,
		twitter_title = undefined,
		twitter_description = undefined,
		twitter_image = undefined,
		children
	}: Props = $props();

	const defaultAuthor = 'Jörn Bernhardt';
	const defaultDescription =
		'Welcome to the personal website of Jörn Bernhardt, where I share my thoughts, lessons learned, and experimental projects. Explore my talks and musings on technology, software development, and more.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	{#if description}
		<meta name="description" content={description} />
	{:else}
		<meta name="description" content={defaultDescription} />
	{/if}
	{#if og_title}
		<meta property="og:title" content={og_title} />
	{:else}
		<meta property="og:title" content={title} />
	{/if}
	{#if og_description}
		<meta property="og:description" content={og_description} />
	{:else if description}
		<meta property="og:description" content={description} />
	{:else}
		<meta name="og:description" content={defaultDescription} />
	{/if}
	{#if og_image}
		<meta name="image" property="og:image" content={og_image} />
	{:else}
		<meta name="image" property="og:image" content={defaultPreviewImage} />
	{/if}
	{#if author}
		<meta name="author" content={author} />
	{:else}
		<meta name="author" content={defaultAuthor} />
	{/if}
	{#if publishDate}
		<meta
			name="publish_date"
			property="og:publish_date"
			content={new Date(publishDate).toISOString()}
		/>
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@NarigoDF" />
	<meta name="twitter:creator" content="@NarigoDF" />
	<meta name="twitter:domain" content="https://narigo.dev/" />
	{#if twitter_title}
		<meta name="twitter:title" content={twitter_title} />
	{:else if og_title}
		<meta name="twitter:title" content={og_title} />
	{:else}
		<meta name="twitter:title" content={title} />
	{/if}
	{#if twitter_description}
		<meta name="twitter:description" content={twitter_description} />
	{:else if og_description}
		<meta name="twitter:description" content={og_description} />
	{:else if description}
		<meta name="twitter:description" content={description} />
	{:else}
		<meta name="twitter:description" content={defaultDescription} />
	{/if}
	{#if twitter_image}
		<meta name="twitter:image" content={twitter_image} />
	{:else if og_image}
		<meta name="twitter:image" content={og_image} />
	{:else}
		<meta name="twitter:image" content={defaultPreviewImage} />
	{/if}
</svelte:head>

<div class="page font-primary">
	<header>
		<div class="mx-auto max-w-[--max-page-width] p-4 pb-0">
			<Navigation />
		</div>
	</header>
	<main class="flex-1">
		<div class="mx-auto max-w-[--max-page-width] p-4">
			{@render children?.()}
		</div>
	</main>
	<footer class="px-4 py-8">
		<div class="flex flex-row flex-wrap gap-8 justify-between mx-auto max-w-[--max-page-width] p-4">
			<div><a class="no-underline" href="{base}/imprint">ℹ️ Imprint</a></div>
			<div>&copy; Jörn Bernhardt</div>
			<div>
				Statically hosted on GitHub Pages. <a
					class="no-underline"
					href="https://github.com/Narigo/narigo.dev"
					rel="external">Source</a
				>
			</div>
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
</style>
