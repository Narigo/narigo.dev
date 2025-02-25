<script lang="ts">
	import { base } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import Encoder from '$lib/tools/encoder/Encoder.svelte';
</script>

<PageLayout backLink="{base}/">
	<FullWidthSection>
		<Encoder encode={encodeURIComponent} decode={decodeURIComponent} />
	</FullWidthSection>
</PageLayout>
