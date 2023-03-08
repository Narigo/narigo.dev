<script lang="ts">
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<section>
		<h2>Welcome to Jörns page! 👋</h2>
		<Narigo>
			<p>
				It's another stab at building a homepage for myself. I don't want to spend much time
				maintaining a page. But I need a place where I can put up slides. And maybe some other
				content that I want to share for an extended period of time.
			</p>
		</Narigo>
		<Narigo>
			<p>This time, it's built with SvelteKit.</p>
		</Narigo>
		<Narigo side="right">
			<p>... and I like comics.</p>
		</Narigo>
	</section>
	<section>
		<h2>FAQ 🙋</h2>
		<h3>Who are you? 🤔</h3>
		<Narigo>
			<p>I'm Jörn.</p>
		</Narigo>
		<h3>What do you do? 🤔</h3>
		<Narigo>
			<p>
				I work at <a href="https://compose.us/" rel="external noopener noreferrer" target="_blank"
					>compose.us</a
				> and our team builds digital services for public administrations. That means we're building
				internal and external tools to make their offerings more efficient and user friendly.
			</p>
		</Narigo>
		<Narigo>
			<p>
				In my spare time, I'm helping to organize the <a
					href="https://jscraftcamp.org/"
					rel="external noopener noreferrer"
					target="_blank">JSCraftCamp</a
				>, which is a two-day Barcamp / Open Space in Munich. You can attend it for free thanks to
				lots of sponsors. Every time I attend this event, I leave with new friends, professional
				contacts and much more knowledge than before.
			</p>
			<p>
				For VirtualCoffee.io, I organize the "Frontend Friday Folks battling <a
					href="https://cssbattle.dev"
					rel="external noopener noreferrer"
					target="_blank">CSSBattle.dev</a
				>", which is a place where people with all kind of levels in CSS proficiency learn something
				from each other.
			</p>
		</Narigo>
		<Narigo side="right">
			<p>
				...and since the Frontend Friday Folks is a really nice format, I'm trying something similar
				with JavaScript katas now. You can join through <a
					href="https://www.meetup.com/js-craftcamp/events/291808574/"
					rel="external">the JSCraftCamp meetup group</a
				>, which will guide you to the JSCraftCamp Discord community where we'll host it.
			</p>
		</Narigo>
		<h3>Why is this here again? 🤔</h3>
		<Narigo>
			<p>I needed a space where I can put slides for talks online.</p>
			<p>But I somehow started building a "real" web page...</p>
		</Narigo>
	</section>
</PageLayout>
