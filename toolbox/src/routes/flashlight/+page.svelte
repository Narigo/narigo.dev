<script lang="ts">
	import { base } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import { m } from '$lib/paraglide/messages';

	type FlashlightState =
		| 'on'
		| 'off'
		| 'needs-permission'
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
						flashlightState = 'off';
						return;
					}
					flashlightState = 'on';
				} catch (e) {
					console.error('Failed to turn on flashlight:', e);
					flashlightState = 'off';
					return;
				}
			} else if (permissionStatus.state === 'prompt') {
				flashlightState = 'needs-permission';
			} else {
				flashlightState = 'off';
			}
		} else {
			flashlightState = 'needs-permission';
		}
	}
</script>

<PageLayout backLink="{base}/">
	<FullWidthSection>
		{#if flashlightState === 'on'}
			<button class="h-dvh w-full" onclick={turnOff}>{m['flashlight.switchOff']()}</button>
		{:else}
			<button class="h-dvh w-full" onclick={turnOn}>{m['flashlight.switchOn']()}</button>
		{/if}
	</FullWidthSection>
</PageLayout>
