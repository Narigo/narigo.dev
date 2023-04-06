<script lang="ts" context="module">
	export type AnimationData = {
		current: number;
		started: boolean;
		nextTimer: ReturnType<typeof window.setTimeout> | null;
		animations: { delayNext: number; animation: () => void }[];
	};
	let animations: Record<string, AnimationData> = {};
</script>

<script lang="ts">
	import { beforeNavigate } from '$app/navigation';

	import { setContext } from 'svelte';

	export let name: string;

	animations[name] = {
		current: 0,
		started: false,
		nextTimer: null,
		animations: []
	};

	setContext('Bubble:animationName', name);
	setContext('Bubble:animations', animations);
	setContext('Bubble:animationData', animations[name]);

	let clickHandler: ((this: Document, ev: MouseEvent) => any) | null = null;

	beforeNavigate(() => {
		if (clickHandler !== null) {
			document.removeEventListener('click', clickHandler);
		}
		if (name) {
			const animationData = animations[name];
			const { nextTimer } = animationData;
			if (nextTimer !== null) {
				clearTimeout(nextTimer);
			}
		}
		animations = {};
	});
</script>

<slot />
