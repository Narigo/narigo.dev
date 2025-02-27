<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { languageTag, onSetLanguageTag, setLanguageTag } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import FullWidthSection from './FullWidthSection.svelte';

	interface Props {
		children: Snippet;
		backLink?: string;
	}

	let { backLink, children }: Props = $props();
	let currentLanguage = $state(languageTag());
	onSetLanguageTag((newLanguageTag) => (currentLanguage = newLanguageTag));

	const switchLanguage = (language: AvailableLanguageTag) => () => {
		setLanguageTag(language);
	};
</script>

{#key currentLanguage}
	<div class="relative flex min-h-full flex-col">
		<header class="content-grid">
			<FullWidthSection>
				<div class="flex gap-4 justify-between">
                    <div>
                        {#if backLink}<a class="arrow-left p-4" href={backLink}>Back</a>{/if}
                    </div>
					<div>
						<button class="p-4" onclick={switchLanguage('de')}>{m.switchToGerman()}</button>
						<button class="p-4" onclick={switchLanguage('en')}>{m.switchToEnglish()}</button>
					</div>
				</div>
			</FullWidthSection>
		</header>
		<main class="content-grid flex-grow auto-rows-max">
			{@render children()}
		</main>
	</div>
{/key}

<style lang="postcss">
	.content-grid {
		--page-padding: 1rem;
		--max-page-size: 72ch;

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
			background: conic-gradient(transparent 45deg, currentColor 0 135deg, transparent 0) -.25em no-repeat;
		}
	}
</style>
