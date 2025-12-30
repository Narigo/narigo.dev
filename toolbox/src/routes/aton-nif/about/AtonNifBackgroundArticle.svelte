<script lang="ts">
	import { resolve } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import { m } from '$lib/paraglide/messages';
	import { onMount, type Component } from 'svelte';
	import atonNifImage from './aton-und-nif.png';
	import { getLocale } from '$lib/paraglide/runtime';
	import { goto } from '$app/navigation';

	const slidesLink = 'https://narigo.dev/talks/zahlenskandal';

	interface Props {
		AtonNifArticle: Component;
	}

	let { AtonNifArticle }: Props = $props();

	onMount(() => {
		switch (getLocale()) {
			case 'de':
				return goto(resolve('/aton-nif/about/de'));
			default:
				return goto(resolve('/aton-nif/about/en'));
		}
	});
</script>

<PageLayout
	title={m['tools.atonNifConverter.aboutTitle']()}
	description={m['tools.atonNifConverter.aboutSeoDescription']()}
	backLink={resolve('/aton-nif')}
	og_image={atonNifImage}
>
	<FullWidthSection>
		<div class="prose">
			<AtonNifArticle />
		</div>
		<aside class="my-8 max-w-prose border-l-2 border-l-blue-400 bg-blue-100 p-4">
			<p>
				{m['tools.atonNifConverter.talkLinkDescription']()}
			</p>
			<a class="underline" href={slidesLink} rel="external"
				>https://narigo.dev/talks/zahlenskandal ({m[
					'tools.atonNifConverter.talkLinkLanguage'
				]()})</a
			>
		</aside>
	</FullWidthSection>
</PageLayout>
