<script lang="ts">
	import Narigo from '../bubble/Narigo.svelte';
	import ContentSection from './ContentSection.svelte';
	import FullWidthSection from './FullWidthSection.svelte';
	import PageLayout from './PageLayout.svelte';

	interface Props {
		title: string;
		description?: string | undefined;
		lastUpdateOn?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let { title, description = undefined, lastUpdateOn = undefined, children }: Props = $props();
</script>

<PageLayout {title} {description}>
	<FullWidthSection>
		<article>
			<FullWidthSection>
				<div>
					<h1>{title}</h1>
					{#if lastUpdateOn}
						<Narigo side="right">
							<div class="text-xs opacity-70">Last update on <span>{lastUpdateOn}</span></div>
						</Narigo>
					{/if}
				</div>
			</FullWidthSection>
			<ContentSection>
				<div class="prose prose-headings:text-white">
					{@render children?.()}
				</div>
			</ContentSection>
		</article>
	</FullWidthSection>
</PageLayout>
