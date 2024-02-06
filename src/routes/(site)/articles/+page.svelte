<script>
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Articles</h2>
	<p>
		Read about <a href="{base}/articles/pocuter-one">my experience with the pocuter one</a>.
	</p>
	<p>
		Read about <a href="{base}/articles/keepass-diff">the keepass-diff CLI tool written in Rust</a>.
	</p>
</PageLayout>
