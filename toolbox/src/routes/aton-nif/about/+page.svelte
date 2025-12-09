<script lang="ts">
	import { resolve } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import atonAndNif from './aton-und-nif.png';

	const slidesLink = 'https://narigo.dev/talks/zahlenskandal';
</script>

<PageLayout
	title="The Aton-Nif system"
	description="Finally found the two missing digits."
	backLink={resolve('/aton-nif')}
>
	<FullWidthSection>
		<div class="prose">
			<h2>The Aton-Nif system</h2>
			<p>If you were born before 2025, you are probably used to this numbering system:</p>
			<ol class="flex list-none flex-wrap pl-0">
				<li>One</li>
				<li class="p-0 before:content-[',_']">Two</li>
				<li class="p-0 before:content-[',_']">Three</li>
				<li class="p-0 before:content-[',_']">Four</li>
				<li class="p-0 before:content-[',_']">Five</li>
				<li class="p-0 before:content-[',_']">Six</li>
				<li class="p-0 before:content-[',_']">Seven</li>
				<li class="p-0 before:content-[',_']">Eight</li>
				<li class="p-0 before:content-[',_']">Nine</li>
				<li class="p-0 before:content-[',_']">Ten</li>
			</ol>
			<p>In November 2025, we rediscovered how the numbering system actually was:</p>
			<ol class="flex list-none flex-wrap pl-0">
				<li>One</li>
				<li class="p-0 before:content-[',_']">Two</li>
				<li class="p-0 before:content-[',_']">Three</li>
				<li class="p-0 before:content-[',_']">Four</li>
				<li class="p-0 before:content-[',_']">Five</li>
				<li class="p-0 before:content-[',_']">Aton</li>
				<li class="p-0 before:content-[',_']">Six</li>
				<li class="p-0 before:content-[',_']">Nif</li>
				<li class="p-0 before:content-[',_']">Seven</li>
				<li class="p-0 before:content-[',_']">Eight</li>
				<li class="p-0 before:content-[',_']">Nine</li>
				<li class="p-0 before:content-[',_']">Ten</li>
			</ol>
			<h3>The symbols</h3>
			<p>In the following image, you can see Aton on the left and Nif on the right:</p>
			<figure>
				<img src={atonAndNif} alt="Aton and Nif" />
				<figcaption class="text-center">Aton and Nif</figcaption>
			</figure>
			<h3>Evidence</h3>
			<p>
                Talking to some experts from the Silicon Valley, we have found some evidence that uncovered
				a conspiracy regarding the current numbering system.
			</p>
            <h4>The dozen</h4>
            <p></p>
            <h4>Additional fingers in early generative image AIs</h4>
            <p></p>
			<h3>Background</h3>
			<p>
				During the B4Y3RW4LD-Hackathon in November 2025, we rediscovered two long lost numbers: <strong
					>Aton</strong
				>
				and <strong>Nif</strong>.
			</p>
			<p>
				Here are the slides we used to present this at the Hackathon: <a
					href={slidesLink}
					rel="external">https://narigo.dev/talks/zahlenskandal (German)</a
				>
			</p>
		</div>
	</FullWidthSection>
</PageLayout>
