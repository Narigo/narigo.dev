<script lang="ts">
	import { resolve } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
</script>

<PageLayout
	title="Slides for my talks"
	description="Here I share the slides to my talks that I held in front of different audiences."
>
	<h2>Slides for my talks</h2>
	<p>
		I usually share the slide deck to my talks for people who attended the
		meetup/conference/whatever. Reach out if you have questions!
	</p>
	<p>
		There are a few older ones that I didn't have anymore. If you're looking for one of them, please
		let me know.
	</p>
	<ul class="mt-12 grid gap-12">
		<li>
			<div>
				<a href="{resolve('/talks')}/verbindet-euch-dezentral" rel="external"
					>Verbindet Euch! Dezentral!</a
				>
				-
				<a href="https://www.tech-slam.com/" rel="external noopener noreferrer"
					>4. Tech-Slam 2025-11-18</a
				>
			</div>
			<Narigo>
				<p>
					I was extremely nervous to perform a poem on a big stage - especially when finalizing the
					slides right at the event! I am very proud to have been one of the two winners at the
					event.
				</p>
			</Narigo>
		</li>
		<li>
			<div>
				<a href="{resolve('/talks')}/zahlenskandal" rel="external"
					>Der große Zahlenskandal - Wie Aton und Nif aus dem Dezimalsystem getilgt wurden</a
				>
				-
				<a href="https://www.bayerwald-hackathon.de/" rel="external noopener noreferrer"
					>Bayerwald Hackathon 2025-11-15</a
				>
			</div>
			<Narigo>
				<p>
					During a long time without sleep, we started to ask the right questions. The two missing
					numbers have been found: <strong>Aton</strong> and <strong>Nif</strong>. Let's spread the
					word, expose the five-finger-elite and fix our numbering system!
				</p>
			</Narigo>
		</li>
		<li>
			<div>
				<a href="{resolve('/talks')}/dezentralisierung-mit-webrtc" rel="external"
					>Dezentralisierung mit WebRTC - Inspirierende Use-Cases</a
				>
				- German version of the lightning talk at the
				<a href="https://www.bayerwald-hackathon.de/" rel="external noopener noreferrer"
					>Bayerwald Hackathon May 2024</a
				>
				.
			</div>
			<Narigo>
				<p>
					This is the German version of the lightning talk at VirtualCoffee. Sounded like there were
					quite a few people feeling nostalgic when I mentioned different peer to peer software
					tools... 😅
				</p>
			</Narigo>
		</li>
		<li>
			<div>
				<a href="{resolve('/talks')}/decentralization-with-webrtc" rel="external"
					>Decentralization with WebRTC - Inspiring Use-Cases</a
				>
				-
				<a href="https://www.youtube.com/watch?v=pzLXQYZpOPU" rel="external noopener noreferrer"
					>VirtualCoffee.io Lightning Talks April 2024</a
				>
				(<a
					href="https://www.youtube.com/watch?v=pzLXQYZpOPU&t=1528s"
					rel="external noopener noreferrer">video of my talk</a
				>)
			</div>
			<Narigo>
				<p>This was a shorter version of the one held at MunichJS Meetup.</p>
			</Narigo>
		</li>
		<li>
			<div>
				<a href="{resolve('/talks')}/webrtc-use-cases" rel="external"
					>Beyond Calls - Inspiring Use-Cases for WebRTC</a
				>
				-
				<a
					href="https://www.meetup.com/munichjs-user-group/events/299867927/"
					rel="external noopener noreferrer">MunichJS Meetup 2024-04-18</a
				>
			</div>
			<Narigo>
				<p>
					First time speaking about Flottform.io as one of the showcased use-cases. We are always
					looking for people to test and integrate it.
				</p>
			</Narigo>
		</li>
		<li>
			<div>
				<a href="{resolve('/talks')}/static-pages-with-dynamic-content" rel="external"
					>Static pages with "dynamic" content</a
				>
				-
				<a
					href="https://www.meetup.com/frankenjs/events/289645924/"
					rel="external noopener noreferrer">FrankenJS Meetup 2022-12-07</a
				>
			</div>
			<Narigo>
				<p>My first time at FrankenJS and first time speaking since a long time!</p>
			</Narigo>
		</li>
	</ul>
</PageLayout>
