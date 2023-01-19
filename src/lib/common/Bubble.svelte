<script lang="ts" context="module">
	let animations: Record<
		string,
		{
			current: number;
			started: boolean;
			nextTimer: ReturnType<typeof window.setTimeout> | null;
			animations: { delayNext: number; animation: () => void }[];
		}
	> = {};
</script>

<script lang="ts">
	import { beforeNavigate } from '$app/navigation';

	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Shaker from './Shaker.svelte';

	export let side: 'left' | 'right' = 'left';
	export let delay: number = 0;
	export let duration: number = 100;
	export let delayNext: number = 0;
	export let animation: string | undefined = undefined;

	let angle = Math.random() * 1.5 - 1.5 / 2;
	let translateX = Math.random() * 5 - 5 / 2;
	let show = delay === 0 && animation === undefined;

	const modes = ['talk', 'shutup', 'talk', 'shutup', 'talk', 'shout', 'talk', 'shutup'];
	let mode = 0;

	const toggleTalking = () => {
		mode = (mode + 1) % modes.length;
		if (modes[mode] === 'talk') {
			angle = Math.random() * 1.5 - 1.5 / 2;
			translateX = Math.random() * 5 - 5 / 2;
		}
	};

	let myId = 0;
	let clickHandler: ((this: Document, ev: MouseEvent) => any) | null = null;
	onMount(() => {
		if (animation) {
			if (animations[animation] === undefined) {
				animations[animation] = {
					current: 0,
					started: false,
					nextTimer: null,
					animations: []
				};
			}
			const animationData = animations[animation];
			myId = animationData.animations.length;
			const runAnimation = () => {
				if (animation) {
					if (myId <= animationData.current) {
						document.removeEventListener('click', runAnimation);
						const { nextTimer } = animationData;
						if (nextTimer !== null) {
							clearTimeout(nextTimer);
							animationData.nextTimer = null;
						}
						show = true;
						animationData.current += 1;
						const nextAnimation =
							animationData.current < animationData.animations.length
								? animationData.animations[animationData.current]
								: undefined;
						if (nextAnimation) {
							animationData.nextTimer = setTimeout(
								nextAnimation.animation,
								nextAnimation.delayNext
							);
							clickHandler = nextAnimation.animation;
							document.addEventListener('click', clickHandler);
						}
					}
				} else {
					show = true;
					clickHandler = runAnimation;
					document.removeEventListener('click', runAnimation);
				}
			};
			animationData.animations.push({ delayNext, animation: runAnimation });
			if (!animationData.started) {
				animationData.started = true;
				animationData.nextTimer = setTimeout(runAnimation, delay);
				clickHandler = runAnimation;
				document.addEventListener('click', runAnimation);
			}
		}
	});
	beforeNavigate(() => {
		if (clickHandler !== null) {
			document.removeEventListener('click', clickHandler);
		}
		if (animation) {
			const { nextTimer } = animations[animation];
			if (nextTimer !== null) {
				clearTimeout(nextTimer);
			}
		}
		animations = {};
	});
</script>

{#if show}
	<Shaker shake={modes[mode] === 'shout'}>
		<div
			class="wrap"
			class:shutup={modes[mode] === 'shutup'}
			class:left={side === 'left'}
			class:right={side === 'right'}
			style="--angle: {angle}deg; --x: {translateX}px;"
		>
			{#if modes[mode] === 'talk' || modes[mode] === 'shout'}
				<div class="bubble" transition:fly={{ x: (side === 'left' ? -1 : 1) * 50, duration }}>
					<div class="content">
						<slot />
					</div>
				</div>
			{/if}
			<button class="avatar" on:click|preventDefault={toggleTalking}>
				{#if modes[mode] === 'talk'}🗣️{:else if modes[mode] === 'shout'}😱{:else}🤐{/if}
			</button>
		</div>
	</Shaker>
{/if}

<style>
	.wrap {
		position: relative;
		min-height: 3em;
		transform: rotate(var(--angle));
	}
	.bubble {
		position: relative;
		background: #fff;
		border-radius: 0.5rem;
		border: 2px solid #000;
		font-size: 1em;
		line-height: 2em;
		margin: 0.5em auto;
		max-width: max-content;
		padding: 0.5em;
		transform: translateX(var(--x));
	}
	.content :global(:first-child) {
		margin-top: 0;
	}
	.content :global(:last-child) {
		margin-bottom: 0;
	}
	.left .bubble {
		margin-left: 2em;
	}
	.right .bubble {
		margin-right: 2em;
	}
	.bubble::before {
		position: absolute;
		box-sizing: border-box;
		width: 1em;
		height: 1em;
		content: '';
		border-top: 2px solid #000;
		border-right: 2px solid #000;
		clip-path: polygon(0 0, 100% 0, 100% calc(100% + 1px), -1px 0);
		background: #fff;
		overflow: hidden;
		z-index: 0;
	}
	.left .bubble::before {
		transform: rotate(225deg);
		bottom: 0.8em;
		left: -0.5em;
	}
	.right .bubble::before {
		transform: scaleX(-1) rotate(225deg);
		bottom: 0.8em;
		right: -0.5em;
	}
	.avatar {
		position: absolute;
		background: transparent;
		border: none;
		bottom: 0.8em;
		cursor: pointer;
		font-size: 1em;
	}
	.left .avatar {
		left: 0;
	}
	.right .avatar {
		right: 0;
		transform: scaleX(-1);
	}
</style>
