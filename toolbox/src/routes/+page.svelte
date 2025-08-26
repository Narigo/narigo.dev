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

<PageLayout description={m['general.seoDescription']()}>
	<FullWidthSection class="gap-y-4">
		<h1 class="text-4xl font-bold">{m['general.toolbox']()}</h1>
		<input
			class="rounded-lg border-0 bg-gray-200"
			type="text"
			bind:value={toolFilter}
			placeholder={m.placeholderFilter()}
		/>

		<section class="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
			{#if isInFilter(toolFilter, `${m['tools.base64.title']()} ${m['tools.base64.description']()}`)}
				<a href="{base}/base64">
					<ToolCard
						category="strings"
						title={m['tools.base64.title']()}
						description={m['tools.base64.description']()}
					/>
				</a>
			{/if}

			{#if isInFilter(toolFilter, `${m['tools.urlEncoding.title']()} ${m['tools.urlEncoding.description']()}`)}
				<a href="{base}/url-encoding">
					<ToolCard
						category="strings"
						title={m['tools.urlEncoding.title']()}
						description={m['tools.urlEncoding.description']()}
					/>
				</a>
			{/if}

			{#if isInFilter(toolFilter, `${m['tools.documentScanner.title']()} ${m['tools.documentScanner.description']()}`)}
				<a href="{base}/document-scanner">
					<ToolCard
						category="tools"
						title={m['tools.documentScanner.title']()}
						description={m['tools.documentScanner.description']()}
					/>
				</a>
			{/if}

			{#if isInFilter(toolFilter, `${m['tools.flashlight.title']()} ${m['tools.flashlight.description']()}`)}
				<a href="{base}/flashlight">
					<ToolCard
						category="tools"
						title={m['tools.flashlight.title']()}
						description={m['tools.flashlight.description']()}
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
