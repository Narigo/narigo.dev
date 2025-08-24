<script lang="ts">
	import { base } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import { m } from '$lib/paraglide/messages';
	import Encoder from '$lib/tools/encoder/Encoder.svelte';
</script>

<PageLayout
	backLink="{base}/"
	title={m['tools.urlEncoding.title']()}
	description={m['tools.urlEncoding.seoDescription']()}
>
	<FullWidthSection>
		<Encoder encode={encodeURIComponent} decode={decodeURIComponent} />
	</FullWidthSection>
</PageLayout>
