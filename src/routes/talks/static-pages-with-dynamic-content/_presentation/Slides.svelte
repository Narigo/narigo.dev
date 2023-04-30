<script lang="ts">
	import { getContext } from 'svelte';
	import type Reveal from 'reveal.js';
	import Intro from './Intro.svelte';
	import SvelteKit from './SvelteKit.svelte';

	const getReveal = getContext<() => Reveal.Api>('Reveal');
	const Reveal = getReveal();

	Reveal.on('fragmentshown', (event) => {
		const fragment = (event as Event & { fragment: HTMLElement }).fragment;
		const shakeIt = fragment.getAttribute('data-shake-it');
		if (shakeIt === 'true') {
			fragment.classList.add('shakeit');
		}
	});
</script>

<Intro />
<section>
	<section>
		<h2>We program web pages and web apps for a living 💰</h2>
		<p class="fragment">... but we have a dark secret 🤫</p>
	</section>
	<section>
		<h2>We didn't do it for our own website. 😳</h2>
		<p class="fragment">We used a page builder tool. 😱</p>
	</section>
</section>
<section>
	<section>
		<h2>And we were <u>just fine</u> with it! ☀️</h2>
		<p class="fragment fade-in-then-semi-out">... Until that one day ... 🌤️</p>
		<p class="fragment fade-in-then-semi-out">... when we got mail ... 🌥️</p>
		<p class="fragment fade-in-then-semi-out">... and someone told us ... 🌦️</p>
		<p class="fragment fade-in-then-semi-out" data-shake-it="true">
			... our page would be violating GDPR! ⛈️
		</p>
	</section>
	<section>
		<h2>OK. <span class="fragment">Don't panic 😰</span></h2>
		<p class="fragment fade-in-then-semi-out">It wasn't <strong>really</strong> a problem. 😮‍💨</p>
		<p class="fragment fade-in-then-semi-out">But it made us aware of a fact we ignored: 🕵️</p>
		<p class="fragment fade-in-then-semi-out">
			We can't rule out that other people change the code we wanted them to deliver. 😬
		</p>
	</section>
</section>
<section>
	<section>
		<h2>So we started again 🏃</h2>
		<p class="fragment fade-in-then-semi-out">... with all the experience we had 🤓</p>
		<p class="fragment fade-in-then-semi-out">... ruling out all problematic tools 🙅</p>
		<p class="fragment fade-in-then-semi-out">... which need ongoing maintenance efforts 🥵</p>
	</section>
	<section>
		<h2>That means:</h2>
		<ul>
			<li class="fragment">
				No Wordpress <span class="fragment">(Maintenance 🤢)</span>
			</li>
			<li class="fragment">
				No Rails
				<span class="fragment">(Too much magic anyways 🤮)</span>
			</li>
			<li class="fragment">
				No ReactJS
				<span class="fragment">(Experienced Gatsby, SSR, hydration, bundle sizes 😢)</span>
			</li>
			<li class="fragment">No ... component based frameworks ... ❓❗️</li>
		</ul>
	</section>
	<section>
		<h2>Thankfully, there are options now 😮‍💨</h2>
		<ul>
			<li class="fragment fade-in-then-semi-out">
				Newer versions of NextJS allow static page generation 🧐
			</li>
			<li class="fragment fade-in-then-semi-out">VueJS has some options 🧑‍🎨</li>
			<li class="fragment fade-in-then-semi-out">Hugo, Jekyll, etc. 👴</li>
			<li class="fragment fade-in-then-semi-out">
				And <a href="https://kit.svelte.dev/" rel="external noopener noreferrer" target="_blank"
					>SvelteKit</a
				> is super cool 😎
			</li>
		</ul>
	</section>
	<SvelteKit />
</section>
<section>
	<h2>
		Static <br />
		<span class="fragment">!==</span><br />
		<span class="fragment">"no dynamic content" 🧐</span>
	</h2>
	<p class="fragment fade-in-then-semi-out">JavaScript is possible! 🤩</p>
	<p class="fragment fade-in-then-semi-out">A build process can help 🛠️</p>
	<p class="fragment fade-in-then-semi-out">
		See <a href="https://jamstack.org/" rel="external noreferrer" target="_blank">JAMStack.org</a>
		(JavaScript, APIs, Markup) 🤓
	</p>
</section>
<section>
	<section>
		<h2>Let's find solutions! 💡</h2>
	</section>
	<section>
		<h2>News / Blog / Content 📜</h2>
		<p class="fragment fade-in-then-semi-out">How often will it really update? ⌚️</p>
		<p class="fragment fade-in-then-semi-out">
			Faster than it takes to build a new version of the pages? 🤨
		</p>
		<p class="fragment fade-in-then-semi-out">Fetch the content during build process! ✅</p>
	</section>
	<section>
		<h2>Shared Resources (manuals, etc.) 📚</h2>
		<p class="fragment fade-in-then-semi-out">That's a static file 😎</p>
		<p class="fragment fade-in-then-semi-out">Put it next to your content ✅</p>
		<p class="fragment fade-in-then-semi-out">
			Use a file server and create links to them during build ✅
		</p>
	</section>
	<section>
		<h2>Contact form</h2>
		<p class="fragment fade-in-then-semi-out">Phone numbers and e-mails rarely change ☎️</p>
		<p class="fragment fade-in-then-semi-out">Generate <code>mailto:</code>-links ✅</p>
		<p class="fragment fade-in-then-semi-out">Use a third-party service ✅</p>
	</section>
	<section>
		<h2>Random content</h2>
		<p class="fragment fade-in-then-semi-out">Use JavaScript to fetch / change randomly 💯</p>
		<p class="fragment fade-in-then-semi-out">Randomize initial values on each update 🧱</p>
	</section>
	<section>
		<h2>Changing texts, translations, etc. 📝</h2>
		<p class="fragment fade-in-then-semi-out">Use CMS as a backend 🏭</p>
		<p class="fragment fade-in-then-semi-out">Generate separate pages for different languages 🗺️</p>
		<p class="fragment fade-in-then-semi-out">
			Find out about missing translations during build ✅
		</p>
	</section>
	<section>
		<h2>Filtering products 🔎</h2>
		<p class="fragment fade-in-then-semi-out">Build presets for filters 🧘</p>
		<p class="fragment fade-in-then-semi-out">
			Split your products into different JSON files for dynamic filters 🖖
		</p>
	</section>
	<section>
		<h2>Search 🔎</h2>
		<p class="fragment fade-in-then-semi-out">Roll out your own service ✅</p>
		<p class="fragment fade-in-then-semi-out">Use a third-party service ✅</p>
		<p class="fragment fade-in-then-semi-out">
			Setup <a href="https://pagefind.app/" rel="external noreferrer">Pagefind</a> 🤯
		</p>
	</section>
	<section>
		<h2>Preview builds 💅</h2>
		<p class="fragment fade-in-then-semi-out">Use a third-party service ✅</p>
		<p class="fragment fade-in-then-semi-out">Setup a second build pipeline and deploy there 😏</p>
	</section>
	<section>
		<h2>Chat with support 💬</h2>
		<h2>Newsletters ✉️</h2>
		<p class="fragment fade-in-then-semi-out">Use a third-party service ✅</p>
		<p class="fragment fade-in-then-semi-out">Roll out your own service ✅</p>
	</section>
</section>
<section>
	<section>
		<h2>Recap: Cons 😭</h2>
		<ul>
			<li class="fragment fade-in-then-semi-out">Usage of third-party services 💳</li>
			<li class="fragment fade-in-then-semi-out">Initial setup cost ⏱️💸</li>
			<li class="fragment fade-in-then-semi-out">Custom scripts / frameworks 🍝</li>
		</ul>
	</section>
	<section>
		<h2>Recap: Pros 🥳</h2>
		<ul>
			<li class="fragment fade-in-then-semi-out">Fast response times ⚡️</li>
			<li class="fragment fade-in-then-semi-out">No technical maintenance overhead 🧑‍🔧</li>
			<li class="fragment fade-in-then-semi-out">Secure website 🔐</li>
			<li class="fragment fade-in-then-semi-out">Full flexibility and control 🤹</li>
		</ul>
	</section>
</section>
<section>
	<h2>Demos!</h2>
	<p class="fragment fade-in-then-semi-out">
		<a href="https://github.com/Narigo/sprechakt.de" rel="external noreferrer" target="_blank"
			>SprechAkt.de</a
		>
	</p>
	<p class="fragment fade-in-then-semi-out">
		<a href="https://github.com/compose-us/website" rel="external noreferrer" target="_blank"
			>compose.us Website</a
		>
	</p>
</section>
<section>
	<h2>Thanks!</h2>
	<p>
		Visit <a href="https://jscraftcamp.org" rel="external noreferrer" target="_blank">JSCraftCamp</a
		> next year!
	</p>
	<p>GitHub: @Narigo</p>
	<p>Twitter: @NarigoDF</p>
</section>

<style>
	:global(.shakeit) {
		animation-name: shake;
		animation-iteration-count: infinite;
		animation-direction: alternate;
		animation-duration: 100ms;
	}

	@keyframes shake {
		0% {
			transform: translate(-2px, -1px);
		}
		20% {
			transform: translate(1px, 2px);
		}
		40% {
			transform: translate(2px, 1px);
		}
		60% {
			transform: translate(-1px, -1px);
		}
		80% {
			transform: translate(1px, 2px);
		}
		100% {
			transform: translate(-2px, -1px);
		}
	}
</style>
