<script lang="ts">
	import { resolve } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import { getLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';

	const slidesLink = 'https://narigo.dev/talks/zahlenskandal';

	async function retrieveArticle() {
		switch (getLocale()) {
			case 'de':
				return import('./aton-nif-background-de.md').then((module) => module.default);
			default:
				return import('./aton-nif-background-en.md').then((module) => module.default);
		}
	}
</script>

<PageLayout
	title="The Aton-Nif system"
	description="Finally found the two missing digits."
	backLink={resolve('/aton-nif')}
>
	<FullWidthSection>
		<div class="prose">
			{#await retrieveArticle()}
				<h1>{m['tools.atonNifConverter.title']()}</h1>
				<p>{m['tools.atonNifConverter.loading']()}</p>
			{:then AtonAndNifArticle}
				<AtonAndNifArticle />
			{:catch error}
				<h1>{m['tools.atonNifConverter.title']()}</h1>
				<p>{m['tools.atonNifConverter.couldNotLoad']()}</p>
				<pre>{error}</pre>
			{/await}
		</div>
		<aside class="my-8 max-w-prose border-l-2 border-l-blue-400 bg-blue-100 p-4">
			<p>
				{m['tools.atonNifConverter.talkLinkDescription']()}
			</p>
			<a class="underline" href={slidesLink} rel="external"
				>https://narigo.dev/talks/zahlenskandal (German)</a
			>
		</aside>
	</FullWidthSection>
</PageLayout>
