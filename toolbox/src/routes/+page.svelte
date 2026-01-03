<script lang="ts">
	import { resolve } from '$app/paths';
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

<PageLayout title={m['general.title']()} description={m['general.seoDescription']()}>
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
				<a href={resolve('/base64')}>
					<ToolCard
						category="converter"
						title={m['tools.base64.title']()}
						description={m['tools.base64.description']()}
					/>
				</a>
			{/if}

			{#if isInFilter(toolFilter, `${m['tools.urlEncoding.title']()} ${m['tools.urlEncoding.description']()}`)}
				<a href={resolve('/url-encoding')}>
					<ToolCard
						category="converter"
						title={m['tools.urlEncoding.title']()}
						description={m['tools.urlEncoding.description']()}
					/>
				</a>
			{/if}

			{#if isInFilter(toolFilter, `${m['tools.documentScanner.title']()} ${m['tools.documentScanner.description']()}`)}
				<a href={resolve('/document-scanner')}>
					<ToolCard
						category="tools"
						title={m['tools.documentScanner.title']()}
						description={m['tools.documentScanner.description']()}
					/>
				</a>
			{/if}

			{#if isInFilter(toolFilter, `${m['tools.flashlight.title']()} ${m['tools.flashlight.description']()}`)}
				<a href={resolve('/flashlight')}>
					<ToolCard
						category="tools"
						title={m['tools.flashlight.title']()}
						description={m['tools.flashlight.description']()}
					/>
				</a>
			{/if}

			{#if isInFilter(toolFilter, `${m['tools.atonNifConverter.title']()} ${m['tools.atonNifConverter.description']()}`)}
				<a href={resolve('/aton-nif')}>
					<ToolCard
						category="converter"
						title={m['tools.atonNifConverter.title']()}
						description={m['tools.atonNifConverter.description']()}
					/>
				</a>
			{/if}
		</section>
	</FullWidthSection>

	<FullWidthSection>
		<p>{m['general.explanation']()}</p>
		<p>{m['general.stuffToDo']()}</p>
		<ul class="list-disc pl-6">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html m['general.toolsIWantToBuild']()
				.split('\n')
				.map((tool) => `<li>${tool}</li>`)
				.join('')}
		</ul>
		<p>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html m['general.noteAboutParaglide']()}
		</p>
	</FullWidthSection>
</PageLayout>
