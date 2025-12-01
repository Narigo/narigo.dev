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
			<p>
				During the B4Y3RW4LD-Hackathon in November 2025, we rediscovered two long lost numbers: <strong
					>Aton</strong
				>
				and <strong>Nif</strong>.
			</p>
			<p>
				Talking to some experts from the Silicon Valley, we have found some evidence that points to
				a conspiracy regarding the current numbering system.
			</p>
			<p>
				Here are the slides we used to present this at the Hackathon: <a
					href={slidesLink}
					rel="external">https://narigo.dev/talks/zahlenskandal</a
				>
			</p>
		</div>
	</FullWidthSection>
</PageLayout>
