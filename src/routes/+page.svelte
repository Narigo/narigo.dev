<script lang="ts">
	import Bubble from '$lib/common/Bubble.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<section>
		<h2>Welcome to Jörns page! 👋</h2>
		<Bubble>
			<p>
				It's another stab at building a homepage for myself. I don't want to spend much time
				maintaining a page. But I need a place where I can put up slides. And maybe some other
				content that I want to share for an extended period of time.
			</p>
		</Bubble>
		<Bubble>
			<p>This time, it's built with SvelteKit.</p>
		</Bubble>
		<Bubble side="right">
			<p>... and I like comics.</p>
		</Bubble>
	</section>
	<section>
		<h2>FAQ 🙋</h2>
		<h3>Who are you? 🤔</h3>
		<Bubble>
			<p>I'm Jörn.</p>
		</Bubble>
		<h3>What do you do? 🤔</h3>
		<Bubble>
			<p>
				I work at <a href="https://compose.us/" rel="external noopener noreferrer" target="_blank"
					>compose.us</a
				> and our team builds digital services for public administrations. That means we're building
				internal and external tools to make their offerings more efficient and user friendly.
			</p>
		</Bubble>
		<h3>Why is this here again? 🤔</h3>
		<Bubble>
			<p>I needed a space where I can put slides for talks online.</p>
		</Bubble>
	</section>
</PageLayout>
