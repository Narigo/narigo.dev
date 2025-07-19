<script lang="ts">
	import { base } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import * as m from '$lib/paraglide/messages';
	import ToolCard from '$lib/tools/ToolCard.svelte';
</script>

<PageLayout>
	<FullWidthSection class="gap-y-4">
		<h1 class="text-4xl font-bold">Online-Toolbox</h1>
		<input
			class="rounded-lg border-0 bg-gray-200"
			type="text"
			disabled
			placeholder={m.placeholderFilter()}
		/>

		<section class="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
			<a href="{base}/base64">
				<ToolCard
					category="strings"
					title={m.toolsBase64Title()}
					description={m.toolsBase64Description()}
				/>
			</a>

			<a href="{base}/url-encoding">
				<ToolCard
					category="strings"
					title={m.toolsUrlEncodingTitle()}
					description={m.toolsUrlEncodingDescription()}
				/>
			</a>

			<a href="{base}/document-scanner">
				<ToolCard
					category="tools"
					title={m.toolsDocumentScannerTitle()}
					description={m.toolsDocumentScannerDescription()}
				/>
			</a>

			<a href="{base}/flashlight">
				<ToolCard
					category="tools"
					title={m.toolsFlashlightTitle()}
					description={m.toolsFlashlightDescription()}
				/>
			</a>
		</section>
	</FullWidthSection>

	<FullWidthSection>
		<p>
			{m['general.explanation']()}
		</p>
		<p>{m['general.stuffToDo']}</p>
		<ul class="list-disc pl-6">
			{@html m['general.toolsIWantToBuild']()
				.split('\n')
				.map((tool) => `<li>${tool}</li>`)
				.join('')}
		</ul>
		<p>
			Oh, and I'm going to try out this localisation that was added by <code>sv create</code>:
			ParaglideJS.
		</p>
	</FullWidthSection>
</PageLayout>
