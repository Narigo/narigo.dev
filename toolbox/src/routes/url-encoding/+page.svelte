<script lang="ts">
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import Encoder from '$lib/tools/encoder/Encoder.svelte';
</script>

<PageLayout>
	<FullWidthSection>
		<Encoder encode={encodeURIComponent} decode={decodeURIComponent} />
	</FullWidthSection>
</PageLayout>
