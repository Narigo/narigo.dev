<script lang="ts">
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { languageTag, onSetLanguageTag, setLanguageTag } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import Base64Coder from './Base64Coder.svelte';

	let currentLanguage = $state(languageTag());
	onSetLanguageTag((newLanguageTag) => (currentLanguage = newLanguageTag));

	const switchLanguage = (language: AvailableLanguageTag) => () => {
		setLanguageTag(language);
	};
</script>

{#key currentLanguage}
	<button onclick={switchLanguage('de')}>{m.switchToGerman()}</button>
	<button onclick={switchLanguage('en')}>{m.switchToEnglish()}</button>
	<div class="grid h-full grid-rows-1">
		<Base64Coder />
	</div>
{/key}
