<script lang="ts">
	import { resolve } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';

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
			<ol class="flex flex-wrap list-none pl-0">
				<li>One</li>
				<li class="before:content-[',_']">Two</li>
				<li class="before:content-[',_']">Three</li>
				<li class="before:content-[',_']">Four</li>
				<li class="before:content-[',_']">Five</li>
				<li class="before:content-[',_']">Six</li>
				<li class="before:content-[',_']">Seven</li>
				<li class="before:content-[',_']">Eight</li>
				<li class="before:content-[',_']">Nine</li>
				<li class="before:content-[',_']">Ten</li>
			</ol>
            <p>In November 2025, we rediscovered how the numbering system actually was:</p>
			<ol class="flex flex-wrap list-none pl-0">
				<li>One</li>
				<li class="before:content-[',_']">Two</li>
				<li class="before:content-[',_']">Three</li>
				<li class="before:content-[',_']">Four</li>
				<li class="before:content-[',_']">Five</li>
				<li class="before:content-[',_']">Aton</li>
				<li class="before:content-[',_']">Six</li>
				<li class="before:content-[',_']">Nif</li>
				<li class="before:content-[',_']">Seven</li>
				<li class="before:content-[',_']">Eight</li>
				<li class="before:content-[',_']">Nine</li>
				<li class="before:content-[',_']">Ten</li>
			</ol>
			<h3>Evidence</h3>
			<p>
				Talking to some experts from the Silicon Valley, we have found some evidence that points to
				a conspiracy regarding the current numbering system.
			</p>
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
