<script lang="ts" module>
	export type PageMetaProps = {
		title?: string;
		description?: string;
		author?: string;
		noIndex?: boolean;
		publishDate?: string;
		og_title?: string;
		og_description?: string;
		og_image?: string;
		twitter_title?: string;
		twitter_description?: string;
		twitter_image?: string;
	};
</script>

<script lang="ts">
	const {
		title = "Narigo's Toolbox",
		description = undefined,
		author = undefined,
		noIndex = import.meta.env.BASE_URL.startsWith('/preview'),
		publishDate = undefined,
		og_title = undefined,
		og_description = undefined,
		og_image = undefined,
		twitter_title = undefined,
		twitter_description = undefined,
		twitter_image = undefined
	}: PageMetaProps = $props();

	const defaultAuthor = 'Jörn Bernhardt';
	const defaultDescription = 'This is a little toolbox with small helpers that I regularly need.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	{#if noIndex}
		<meta name="robots" content="noindex,nofollow" />
	{/if}
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
	{/if}
</svelte:head>
