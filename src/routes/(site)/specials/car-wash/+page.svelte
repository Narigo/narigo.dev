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
		This is going to be something for my kids. They like cars. They like dirty cars getting cleaned.
		I believe this <a href="https://retne-games.itch.io/car-wash" rel="external noopener noreferrer"
			>Car Wash (for Toddlers) game by retne_games</a
		>
		can be done with CSS and little JavaScript.
		<a href="{base}/specials/car-wash/play">Let's try it!</a>
	</Narigo>
</PageLayout>
