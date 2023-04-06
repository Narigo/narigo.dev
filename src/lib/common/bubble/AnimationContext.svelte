<script lang="ts" context="module">
	export type AnimationData = {
		current: number;
		started: boolean;
		nextTimer: ReturnType<typeof window.setTimeout> | null;
		animations: { delayNext: number; animation: () => void }[];
	};
	export type AnimationContext = {
		animationsDone: Writable<boolean>;
		createAnimation: (show: Writable<boolean>, delay: number, delayNext: number) => void;
		finishAllAnimations: () => void;
	};
	let animations: Record<string, AnimationData> = {};
</script>

<script lang="ts">
	import { browser } from '$app/environment';

	import { beforeNavigate } from '$app/navigation';

	import { onDestroy, onMount, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let name: string;

	animations[name] = {
		current: 0,
		started: false,
		nextTimer: null,
		animations: []
	};
	const animationData = animations[name];
	const animationsDone = writable(false);

	const clickHandler: (this: Document, ev: MouseEvent) => any = () => {
		if (animationData.current < animationData.animations.length) {
			animationData.animations[animationData.current].animation();
		}
		if (animationData.current === animationData.animations.length) {
			document.removeEventListener('click', clickHandler);
		}
	};
	const createAnimation = (show: Writable<boolean>, delay: number, delayNext: number) => {
		let myId = animationData.animations.length;
		const runAnimation = () => {
			if (animationData) {
				if (myId <= animationData.current) {
					const { nextTimer } = animationData;
					if (nextTimer !== null) {
						clearTimeout(nextTimer);
						animationData.nextTimer = null;
					}
					show.set(true);
					animationData.current += 1;
					const nextAnimation =
						animationData.current < animationData.animations.length
							? animationData.animations[animationData.current]
							: undefined;
					if (nextAnimation) {
						animationData.nextTimer = setTimeout(nextAnimation.animation, nextAnimation.delayNext);
					} else {
						animationsDone.set(true);
						document.removeEventListener('click', clickHandler);
					}
				}
			} else {
				show.set(true);
			}
		};
		animationData.animations.push({ delayNext, animation: runAnimation });

		if (!animationData.started) {
			animationData.started = true;
			animationData.nextTimer = setTimeout(runAnimation, delay);
		}
	};
	const finishAllAnimations = () => {
		animationData.animations.slice(animationData.current).forEach((anim) => {
			anim.animation();
		});
	};

	setContext('AnimationContext', { animationsDone, createAnimation, finishAllAnimations });

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
	onMount(() => {
		if (browser) {
			document.addEventListener('click', clickHandler);
		}
	});
	onDestroy(() => {
		if (browser) {
			document.removeEventListener('click', clickHandler);
		}
	});
</script>

<slot />
