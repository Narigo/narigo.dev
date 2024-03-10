<script lang="ts">
	import { base } from '$app/paths';
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
			<p>
				This time, it's built with <a href="https://kit.svelte.dev/" rel="external">SvelteKit</a>.
			</p>
		</Narigo>
		<Narigo side="right">
			<p>... and I like comics.</p>
		</Narigo>
	</section>
	<section>
		<h2>FAQ 🙋</h2>
		<h3>Who are you? 🤔</h3>
		<Narigo>
			<p>I'm Jörn. A software engineer focused on building applications for the web.</p>
		</Narigo>
		<h3>What do you do? 🤔</h3>
		<Narigo>
			<p>
				I work at <a href="https://compose.us/" rel="external noopener noreferrer" target="_blank"
					>compose.us</a
				> and our team builds digital services. That means we're building internal and external tools
				to make our customer's offerings more efficient and user friendly.
			</p>
			<p>
				We are currently experimenting with <a
					href="https://github.com/compose-us/build-in-public/"
					rel="external noopener noreferrer"
					target="_blank">building in public</a
				>, so if you have feedback to our idea and
				<a
					href="https://github.com/compose-us/flottform/"
					rel="external noopener noreferrer"
					target="_blank">implementation</a
				>: Please let me know!
			</p>
		</Narigo>
		<Narigo>
			<p>
				I'm helping to organize the <a
					href="https://jscraftcamp.org/"
					rel="external noopener noreferrer"
					target="_blank">JSCraftCamp</a
				>, which is a two-day Barcamp / Open Space in Munich. You can attend it for free thanks to
				lots of sponsors. Every time I attend this event, I leave with new friends, professional
				contacts and much more knowledge than before.
			</p>
			<p>
				For <a href="https://virtualcoffee.io" rel="external noopener noreferrer" target="_blank"
					>VirtualCoffee.io</a
				>, I organize the "<a href="{base}/specials/frontend-friday-folks">Frontend Friday Folks</a>
				battling
				<a href="https://cssbattle.dev" rel="external noopener noreferrer" target="_blank"
					>CSSBattle.dev</a
				>", which is a place where people with all kind of levels in CSS proficiency learn something
				from each other. There are more people sharing their solutions in the
				<a
					href="https://github.com/orgs/Virtual-Coffee/discussions/categories/css-battles"
					rel="external noopener noreferrer">VirtualCoffee discussions on GitHub</a
				>.
			</p>
		</Narigo>
		<Narigo side="right">
			<p>
				...and since the Frontend Friday Folks is a really nice format, I've started something
				similar with JavaScript katas. You can join <a
					href="https://discord.gg/3mHhaXVEjP"
					rel="external noopener noreferrer">the JSCraftCamp Discord</a
				> to attend these events.
			</p>
		</Narigo>
		<Narigo>
			<p>
				Aside from work and tech related stuff, I like visiting poetry slams and <a
					href="https://www.instagram.com/slammaler/"
					rel="external noopener noreferrer">draw pictures of the texts I'm hearing</a
				>. For the local
				<a href="https://www.sprechakt.de/" rel="external noopener noreferrer"
					>SprechAkt poetry slam</a
				>, I contributed the homepage through our company.
			</p>
		</Narigo>
		<h3>Are you available for hire? 🤔</h3>
		<Narigo>
			<p>
				Usually, I work with my own team and we're building web applications. If you need assistance
				from senior developers to help you deliver high quality software while leveling up your own
				team, shoot me a message!
			</p>
		</Narigo>
		<h3>Why is this here again? 🤔</h3>
		<Narigo>
			<p>
				I needed a space where I could put <a href="{base}/talks">slides for my talks</a> online.
			</p>
			<p>But I somehow started building a "real" web page...</p>
			<p>
				I even started <a href="{base}/articles/pocuter-one"
					>a longer article about using and programming a Pocuter</a
				>.
			</p>
		</Narigo>
	</section>
</PageLayout>
