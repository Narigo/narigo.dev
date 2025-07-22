<script lang="ts">
	import { base } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import * as m from '$lib/paraglide/messages';
	import ToolCard from '$lib/tools/ToolCard.svelte';

	let toolFilter = $state<string>('');

	function isInFilter(filter: string, text: string): boolean {
		if (!filter) return true;
		if (filter.trim() === '') return true;

		return text.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
	}
</script>

<PageLayout>
	<FullWidthSection class="gap-y-4">
		<h1 class="text-4xl font-bold">Online-Toolbox</h1>
		<input
			class="rounded-lg border-0 bg-gray-200"
			type="text"
			bind:value={toolFilter}
			placeholder={m.placeholderFilter()}
		/>

		<section class="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
			{#if isInFilter(toolFilter, `${m.toolsBase64Title()} ${m.toolsBase64Description()}`)}
				<a href="{base}/base64">
					<ToolCard
						category="strings"
						title={m.toolsBase64Title()}
						description={m.toolsBase64Description()}
					/>
				</a>
			{/if}

			{#if isInFilter(toolFilter, `${m.toolsUrlEncodingTitle()} ${m.toolsUrlEncodingDescription()}`)}
				<a href="{base}/url-encoding">
					<ToolCard
						category="strings"
						title={m.toolsUrlEncodingTitle()}
						description={m.toolsUrlEncodingDescription()}
					/>
				</a>
			{/if}

			{#if isInFilter(toolFilter, `${m.toolsDocumentScannerTitle()} ${m.toolsDocumentScannerDescription()}`)}
				<a href="{base}/document-scanner">
					<ToolCard
						category="tools"
						title={m.toolsDocumentScannerTitle()}
						description={m.toolsDocumentScannerDescription()}
					/>
				</a>
			{/if}

			{#if isInFilter(toolFilter, `${m.toolsFlashlightTitle()} ${m.toolsFlashlightDescription()}`)}
				<a href="{base}/flashlight">
					<ToolCard
						category="tools"
						title={m.toolsFlashlightTitle()}
						description={m.toolsFlashlightDescription()}
					/>
				</a>
			{/if}
		</section>
	</FullWidthSection>

	<FullWidthSection>
		<p>
			{m['general.explanation']()}
		</p>
		<p>{m['general.stuffToDo']()}</p>
		<ul class="list-disc pl-6">
			{@html m['general.toolsIWantToBuild']()
				.split('\n')
				.map((tool) => `<li>${tool}</li>`)
				.join('')}
		</ul>
		<p>
			{@html m['general.noteAboutParaglide']()}
		</p>
	</FullWidthSection>
</PageLayout>
