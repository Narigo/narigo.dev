<script>
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Articles</h2>
	<ul>
		<li>
			<a href="{base}/articles/jscc24">My personal retrospective of JSCraftCamp 2024</a>
		</li>
		<li>
			<a href="{base}/articles/jscc23">Some thoughts about JSCraftCamp 2023</a>
		</li>
		<li>
			<a href="{base}/articles/keepass-diff">The keepass-diff CLI tool, written in Rust</a>
		</li>
		<li>
			<a href="{base}/articles/pocuter-one">My experiences with the pocuter one</a>
		</li>
		<li>
			<a href="{base}/articles/rubiks">How I solve the Rubiks cube (3x3 and 4x4)</a>
		</li>
	</ul>
</PageLayout>
