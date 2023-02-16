<script lang="ts">
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Today I learnt</h2>
	<Narigo>
		To remember more of the little things I learn, I want to write them down. I'll update this page
		whenever I find something worth to log. Most of this will be around web development, but I don't
		want to limit myself to that. Let's see where this leads to.
	</Narigo>
	<ul>
		<li>
			<h3>Drawing with linear gradients</h3>
			<p>
				In <a href="https://virtualcoffee.io/" rel="external">VirtualCoffee.io</a> Frontend Friday
				Folks, we have to create divs that resemble a given image on
				<a href="https://cssbattle.dev/" rel="external">CSSBattle.dev</a>. Lately, I've tried to do
				the puzzles by styling them with
				<code
					>background: <a
						href="https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient"
						rel="external">linear-gradient()</a
					></code
				>. When you find out a way how to draw it like that, it always feels like a hack of the
				puzzle itself.
			</p>
		</li>
	</ul>
</PageLayout>
