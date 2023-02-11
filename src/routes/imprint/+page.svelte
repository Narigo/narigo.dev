<script lang="ts">
	import Bubble from '$lib/common/bubble/Bubble.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Imprint</h2>
	<Narigo>
		<p>
			This is a personal homepage without commercial intentions. I will most likely link to my
			company and other potentially commercial offerings, which may be interpreted as
			advertisements. Therefore I'm going to publish the necessary information for §5
			Telemediengesetz on this page.
		</p>
	</Narigo>
	<Bubble side="right">
		<p>Jörn Bernhardt, Goethestr. 46, 84032 Landshut</p>
	</Bubble>
	<Narigo>
		<p>
			I avoid unnecessary data collection on this page. Please be aware that this is a static page
			and hosted on GitHub Pages. As with any hoster, they may collect data that your browser sends
			to them.
		</p>
		<p>To contact me via e-mail, please use hello@narigo.dev</p>
	</Narigo>
</PageLayout>
