<script lang="ts">
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
</script>

<PageLayout
	title="Car Wash"
	description="My kid liked to play a car wash simulator on the iPad. It was just manually clicking on the screen to let it continue cleaning a car. That game looked so easy to replicate, so I've used mostly CSS to recreate it."
>
	<h2>Car Wash</h2>
	<Narigo>
		This is something for my kids. They like cars. They like dirty cars getting cleaned. I thought
		this <a href="https://retne-games.itch.io/car-wash" rel="external noopener noreferrer"
			>Car Wash (for Toddlers) game by retne_games</a
		>
		could be done with CSS and little JavaScript. And as you can see, it worked:
		<a href="{base}/specials/car-wash/play">Try it out here!</a>
	</Narigo>
	<Narigo>Oh and one of the cars was drawn by my nephew!</Narigo>
</PageLayout>
