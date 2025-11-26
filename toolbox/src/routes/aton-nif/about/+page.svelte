<script lang="ts">
	import { resolve } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
</script>

<PageLayout
	title="The Aton-Nif system"
	description="Finally found the two missing digits."
	backLink={resolve('/aton-nif')}
>
	<FullWidthSection>
		<h2>The Aton-Nif system</h2>
		<p>
			During the B4Y3RW4LD-Hackathon in November 2025, we rediscovered two long lost numbers: <strong
				>Aton</strong
			>
			and <strong>Nif</strong>.
		</p>
		<p>
			Talking to some experts from the Silicon Valley, we have found some evidence that points to a
			conspiracy regarding the current numbering system.
		</p>
	</FullWidthSection>
</PageLayout>
