<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setLocale, type Locale } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import FullWidthSection from './FullWidthSection.svelte';
	import type { PageMetaProps } from './PageMeta.svelte';
	import PageMeta from './PageMeta.svelte';

	type PageLayoutProps = {
		children: Snippet;
		backLink?: string;
		stretch?: boolean;
	};

	let { backLink, children, stretch = false, ...meta }: PageLayoutProps & PageMetaProps = $props();

	const switchLanguage = (language: Locale) => () => {
		setLocale(language);
	};
</script>

<PageMeta {...meta} />

<div class="relative flex min-h-full flex-col">
	<header class="content-grid">
		<FullWidthSection>
			<div class="flex justify-between gap-4">
				<div>
					{#if backLink}
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a class="arrow-left p-4" href={backLink}>{m['general.backButton']()}</a>
					{/if}
				</div>
				<div>
					<button class="p-4" onclick={switchLanguage('de')}>{m.switchToGerman()}</button>
					<button class="p-4" onclick={switchLanguage('en')}>{m.switchToEnglish()}</button>
				</div>
			</div>
		</FullWidthSection>
	</header>
	<main class="content-grid flex-grow" class:auto-rows-max={!stretch}>
		{@render children()}
	</main>
</div>

<style lang="postcss">
	.content-grid {
		--page-padding: 1rem;
		--max-page-size: 64rem;

		display: grid;
		grid-template-columns:
			[full-width-start]
			minmax(var(--page-padding), 1fr)
			[breakout-start]
			minmax(0, calc(var(--page-padding) * 4))
			[content-start]
			min(100% - (var(--page-padding) * 2), var(--max-page-size))
			[content-end]
			minmax(0, calc(var(--page-padding) * 4))
			[breakout-end]
			minmax(var(--page-padding), 1fr)
			[full-width-end];
	}
	.arrow-left {
		position: relative;
		display: inline-flex;
		gap: 1em;
		align-items: center;
		&::before {
			content: '';
			display: inline-block;
			width: 1em;
			height: 1em;
			background: conic-gradient(transparent 45deg, currentColor 0 135deg, transparent 0) -0.25em
				no-repeat;
		}
	}
</style>
