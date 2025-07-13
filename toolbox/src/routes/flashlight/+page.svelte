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

	async function turnOff() {
		flashlightState = 'trying-to-turn-off';
	}
	async function turnOn() {
		flashlightState = 'trying-to-turn-on';
		if (typeof navigator !== 'undefined' && 'permissions' in navigator) {
			const permissionStatus = await navigator.permissions.query({ name: 'camera' });
			if (permissionStatus.state === 'granted') {
				try {
					const supportedConstraints = await navigator.mediaDevices.getSupportedConstraints();
					console.log('Supported constraints:', supportedConstraints);
					const userMedia = await navigator.mediaDevices.getUserMedia({
						video: { facingMode: 'environment', torch: true }
					});
					const videoTracks = userMedia.getVideoTracks();
					if (videoTracks.length === 0) {
						console.error('No video track found');
						flashlightState = 'error-no-flashlight-found';
						return;
					}
					flashlightState = 'on';
				} catch (e) {
					console.error('Failed to turn on flashlight:', e);
					flashlightState = 'off';
					return;
				}
			} else if (permissionStatus.state === 'prompt') {
				flashlightState = 'error-needs-permission';
			} else {
				flashlightState = 'off';
			}
		} else {
			flashlightState = 'error-needs-permission';
		}
	}
</script>

<PageLayout backLink="{base}/">
	<FullWidthSection>
		{#if ['on', 'trying-to-turn-on'].includes(flashlightState)}
			<button
				class="grid h-dvh w-full grid-cols-1 place-items-center gap-4 border bg-gray-50"
				disabled={flashlightState === 'trying-to-turn-on'}
				onclick={turnOff}
			>
				<img class="self-end" src={flashlightImageOn} alt="Turned on flashlight" />
				<div class="self-start">{m['flashlight.switchOff']()}</div>
			</button>
		{:else if flashlightState === 'error-no-flashlight-found'}
			<button
				class="grid h-dvh w-full grid-cols-1 place-items-center gap-4 border bg-red-200"
				disabled
			>
				<img class="self-end" src={flashlightImageError} alt="Broken flashlight" />
				<div class="self-start">{m['flashlight.errors.noFlashlightFound']()}</div>
			</button>
		{:else if flashlightState === 'error-needs-permission'}
			<button
				class="grid h-dvh w-full grid-cols-1 place-items-center gap-4 border bg-red-200"
				disabled
			>
				<img class="self-end" src={flashlightImageError} alt="Broken flashlight" />
				<div class="self-start">{m['flashlight.errors.noPermissionGranted']()}</div>
			</button>
		{:else}
			<button
				class="grid h-dvh w-full grid-cols-1 place-items-center gap-4 border bg-gray-600"
				onclick={turnOn}
			>
				<img class="self-end" src={flashlightImageOff} alt="Turned off flashlight" />
				<div class="self-start text-white">{m['flashlight.switchOn']()}</div>
			</button>
		{/if}
	</FullWidthSection>
</PageLayout>
