<script lang="ts">
	import { base } from '$app/paths';
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
		<li>
			<h3>srcdoc sets an iframes doctype implicitly, Quirks mode expands the body height</h3>
			<p>
				When working on the Puzzle iframe for the <a href="{base}/specials/frontend-friday-folks"
					>Frontend Friday Folks</a
				>, I had trouble centering the image. I had the same code result in the Chrome Dev Tools as
				in CSSBattle.dev, when inspecting the elements, so I didn't realize why it still looked
				different. It looks like when using the <code>srcdoc</code> on an <code>iframe</code>
				element, the iframe sets the doctype implicitly. When writing into the iframe through
				<code>contentWindow.write</code>, it doesn't set a doctype for the iframe and hence it stays
				in Quirks mode. Quirks mode seems to expand the body height, without having to set
				<code>html,body {'{ height: 100% }'}</code> or something similar.
			</p>
		</li>
		<li>
			<h3>`::before` and `::after` are siblings, nested and `display: inline` in a div</h3>
			<p>
				I can never really remember how they work and during this Frontend Friday Folks puzzle, we
				looked into that again. It seems to be easier to nest divs than using the pseudo elements
				here. So to understand it better: <code
					>&lt;div&gt;&lt;::before&gt;content in ::before&lt;/::before&gt;content of
					div&lt;::after&gt;content in ::after&lt;/::after&gt;&lt;/div&gt;</code
				>
			</p>
		</li>
		<li>
			<h3>Strings in JavaScript are iterable without using `split`</h3>
			<p>
				When using <code>for (const c of string) {'{ ... }'}</code>, it's not necessary to do a
				<code>string.split('')</code>
				before. If you want to <code>string.map()</code> or <code>string.filter()</code> though, you
				need to split it first.
			</p>
		</li>
		<li>
			<h3>A `.github` repository for templates, code of conduct, etc.</h3>
			<p>
				I tried template repositories and forking them before, but it always felt a bit weird.
				Thanks to Bekah from VirtualCoffee.io, I learnt that you can have a <code>.github</code>
				repository instead of a folder in each of your projects to hold your templates. Credit goes to
				<a
					href="https://dev.to/opensauced/managing-community-health-files-and-templates-with-a-github-repository-l8f"
					rel="external">Bekah's blog post</a
				>!
			</p>
		</li>
		<li>
			<h3>Check whether form is valid or not with CSS</h3>
			<p>
				There is a selector called <code>:invalid</code>! Thanks to Travis Barnette for pointing
				that out in VirtualCoffee and to Justin Noel for asking this question. Up to that point, I
				thought you can only check validity with JavaScript enabled...!
			</p>
		</li>
	</ul>
</PageLayout>
