<script lang="ts">
	import type { Snippet } from 'svelte';
	import { base } from '$app/paths';
	import Navigation from '../navigation/Navigation.svelte';
	import ContentSection from './ContentSection.svelte';
	import FullWidthSection from './FullWidthSection.svelte';
	import defaultPreviewImage from './preview-image.png';

	interface Props {
		title?: string;
		description?: string;
		author?: string;
		publishDate?: string;
		og_title?: string;
		og_description?: string;
		og_image?: string;
		twitter_title?: string;
		twitter_description?: string;
		twitter_image?: string;
		allowSections?: boolean;
		children?: Snippet;
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
		allowSections = false,
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

<div class="page relative min-h-full flex flex-col">
	<header class="content-grid pt-4">
		<FullWidthSection>
			<Navigation />
		</FullWidthSection>
	</header>
	<main class="content-grid flex-grow auto-rows-max">
		{#if allowSections}
			{@render children?.()}
		{:else}
			<ContentSection>
				{@render children?.()}
			</ContentSection>
		{/if}
	</main>
	<footer class="content-grid py-4 primary">
		<FullWidthSection>
			<div><a href="{base}/imprint">ℹ️ Imprint</a></div>
			<div>&copy; Jörn Bernhardt</div>
			<div>
				Statically hosted on GitHub Pages. <a
					href="https://github.com/Narigo/narigo.dev"
					rel="external">Source</a
				>
			</div>
		</FullWidthSection>
	</footer>
</div>

<style lang="postcss">
	.page {
		--rgbv-background-color: 255, 255, 255;
		--rgbv-background-inverted-color: 0, 0, 0;

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
		font-family: var(--font-family-primary);
		letter-spacing: 0.5px;
	}
	.content-grid {
		--max-page-width: 38rem;
		--max-page-size: 72ch;

		--page-padding: 1rem;

		display: grid;
		grid-template-columns:
			[full-width-start]
			minmax(var(--page-padding), 1fr)
			[breakout-start]
			minmax(0, calc(var(--page-padding) * 4))
			[content-start]
			min(100% - (var(--page-padding) * 2), var(--max-page-size))
			[content-end]
			minmax(0, calc(var(--page-padding) * 4))
			[breakout-end]
			minmax(var(--page-padding), 1fr)
			[full-width-end];
	}

	footer {
		margin-top: 1rem;
		background: rgb(var(--color-primary));
		color: rgb(var(--color-primary-text));
		position: relative;
		&::after {
			position: absolute;
			top: -1rem;
			background:
				linear-gradient(to bottom right, #0000 calc(50% - 2px), #000 0 calc(50%), #0000 0) -1rem calc(
						-1rem + 3px
					) / calc(2rem) calc(2rem),
				linear-gradient(to bottom left, #0000 calc(50% - 2px), #000 0 calc(50%), #0000 0) -1rem calc(
						-1rem + 3px
					) / calc(2rem) calc(2rem),
				conic-gradient(#0000 135deg, rgb(var(--color-primary)) 0 225deg, #0000 0)-1rem -1rem / 2rem calc(2rem +
							2px);
			mask:
				linear-gradient(to bottom right, #0000 calc(50% - 2px), #000 0 calc(50% + 2px)) calc(-1rem)
					calc(-1rem + 3px) / calc(2rem) calc(2rem) intersect,
				linear-gradient(to bottom left, #0000 calc(50% - 2px), #000 0 calc(50% + 2px)) calc(-1rem)
					calc(-1rem + 3px) / calc(2rem) calc(2rem) intersect;
			content: '';
			height: calc(1rem + 4px);
			width: 100%;
		}
	}
</style>
