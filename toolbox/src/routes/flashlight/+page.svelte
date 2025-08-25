<script lang="ts">
	import { base } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import flashlightImageError from './flashlight-error.svg';
	import flashlightImageOn from './flashlight-on.svg';
	import flashlightImageOff from './flashlight-off.svg';
	import { m } from '$lib/paraglide/messages';

	type FlashlightState =
		| 'error-needs-permission'
		| 'error-no-flashlight-found'
		| 'on'
		| 'off'
		| 'trying-to-turn-on'
		| 'trying-to-turn-off';
	let flashlightState = $state<FlashlightState>('off');
	let userMedia = $state<MediaStream | null>(null);

	async function turnOff() {
		flashlightState = 'trying-to-turn-off';
		if (!userMedia) {
			console.error('No user media stream available to turn off flashlight');
			flashlightState = 'off';
			return;
		}

		try {
			await Promise.all(userMedia.getVideoTracks().map((track) => track.stop()));
		} catch (e) {
			console.error('Failed to turn off flashlight:', e);
			flashlightState = 'error-no-flashlight-found';
			return;
		} finally {
			userMedia = null;
		}
		flashlightState = 'off';
	}
	async function turnOn() {
		flashlightState = 'trying-to-turn-on';
		if (typeof navigator !== 'undefined' && 'permissions' in navigator) {
			try {
				userMedia = await navigator.mediaDevices.getUserMedia({
					video: { facingMode: 'environment', torch: true }
				});
				const videoTracks = userMedia.getVideoTracks();
				if (videoTracks.some((track) => track.getCapabilities().torch)) {
					flashlightState = 'on';
				} else {
					flashlightState = 'error-no-flashlight-found';
					for (const track of videoTracks) {
						track.stop();
					}
				}
			} catch (e) {
				console.error('Failed to turn on flashlight:', e);
				flashlightState = 'error-needs-permission';
				return;
			}
		} else {
			flashlightState = 'error-needs-permission';
		}
	}
</script>

<PageLayout
	backLink="{base}/"
	title={m['tools.flashlight.title']()}
	description={m['tools.flashlight.seoDescription']()}
>
	<FullWidthSection>
		{#if ['on', 'trying-to-turn-on'].includes(flashlightState)}
			<button
				class="grid h-dvh w-full grid-cols-1 place-items-center gap-4 border bg-gray-50"
				disabled={flashlightState === 'trying-to-turn-on'}
				onclick={turnOff}
			>
				<img class="self-end" src={flashlightImageOn} alt="Turned on flashlight" />
				<div class="self-start">{m['tools.flashlight.switchOff']()}</div>
			</button>
		{:else if flashlightState === 'error-no-flashlight-found'}
			<button
				class="grid h-dvh w-full grid-cols-1 place-items-center gap-4 border bg-red-200"
				onclick={turnOff}
			>
				<img class="self-end" src={flashlightImageError} alt="Broken flashlight" />
				<div class="self-start">{m['tools.flashlight.errors.noFlashlightFound']()}</div>
			</button>
		{:else if flashlightState === 'error-needs-permission'}
			<button
				class="grid h-dvh w-full grid-cols-1 place-items-center gap-4 border bg-red-200"
				onclick={turnOn}
			>
				<img class="self-end" src={flashlightImageError} alt="Broken flashlight" />
				<div class="self-start">{m['tools.flashlight.errors.noPermissionGranted']()}</div>
			</button>
		{:else}
			<button
				class="grid h-dvh w-full grid-cols-1 place-items-center gap-4 border bg-gray-600"
				onclick={turnOn}
			>
				<img class="self-end" src={flashlightImageOff} alt="Turned off flashlight" />
				<div class="self-start text-white">{m['tools.flashlight.switchOn']()}</div>
			</button>
		{/if}
	</FullWidthSection>
</PageLayout>
