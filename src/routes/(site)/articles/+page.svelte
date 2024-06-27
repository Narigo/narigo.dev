<script>
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Articles</h2>
	<ul>
		<li>
			You can read <a href="{base}/articles/jscc24">my personal retrospective of JSCraftCamp 2024</a
			>.
		</li>
		<li>
			I have written <a href="{base}/articles/jscc23">some thoughts about JSCraftCamp 2023</a>.
		</li>
		<li>
			Read about <a href="{base}/articles/keepass-diff">the keepass-diff CLI tool written in Rust</a
			>.
		</li>
		<li>
			Read about <a href="{base}/articles/pocuter-one">my experience with the pocuter one</a>.
		</li>
	</ul>
</PageLayout>
