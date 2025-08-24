<script lang="ts">
	import { base } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import { m } from '$lib/paraglide/messages';
	import Encoder from '$lib/tools/encoder/Encoder.svelte';

	const decode = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
	const encode = (b: Uint8Array) => btoa(String.fromCharCode(...b));
	const decodeToString = (s: string) => new TextDecoder().decode(decode(s));
	const encodeString = (s: string) => encode(new TextEncoder().encode(s));
</script>

<PageLayout
	backLink="{base}/"
	stretch={true}
	title={m['tools.base64.title']()}
	description={m['tools.base64.seoDescription']()}
>
	<FullWidthSection class="grid-rows-[1fr]">
		<Encoder encode={encodeString} decode={decodeToString} />
	</FullWidthSection>
</PageLayout>
