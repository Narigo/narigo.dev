<script>
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h1>Congratulations!</h1>
	<p>You made it through the workout!</p>
	<a href="{base}/specials/training">Back to training page</a>
</PageLayout>
