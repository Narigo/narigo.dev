<script lang="ts">
	import { resolve } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import atonAndNif from './aton-und-nif.png';
	import { html as atonAndNifArticle } from './aton-and-nif.md';

	const slidesLink = 'https://narigo.dev/talks/zahlenskandal';
</script>

<PageLayout
	title="The Aton-Nif system"
	description="Finally found the two missing digits."
	backLink={resolve('/aton-nif')}
>
	<FullWidthSection>
		<div class="prose">
			{@html atonAndNifArticle}
		</div>
		<aside>
			<p>
				Here are the slides we used to present this at the Bayerwald Hackathon: <a
					href={slidesLink}
					rel="external">https://narigo.dev/talks/zahlenskandal (German)</a
				>
			</p>
		</aside>
	</FullWidthSection>
</PageLayout>
