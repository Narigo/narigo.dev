<script lang="ts">
	import { resolve } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import { m } from '$lib/paraglide/messages';
	import Encoder from '$lib/tools/encoder/Encoder.svelte';

	const decode = (decimal: string) => decimal;
	const encode = (atonNif: string) => atonNif;
</script>

<PageLayout
	backLink={resolve('/')}
	stretch={true}
	title={m['tools.atonNifConverter.title']()}
	description={m['tools.atonNifConverter.seoDescription']()}
>
	<FullWidthSection class="grid-rows-[1fr]">
		<Encoder
			{encode}
			{decode}
			placeholderDecode={m['tools.atonNifConverter.placeholderDecode']()}
			placeholderEncode={m['tools.atonNifConverter.placeholderEncode']()}
		/>
	</FullWidthSection>
</PageLayout>
