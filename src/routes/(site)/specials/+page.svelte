<script lang="ts">
	import { base } from '$app/paths';
	import AnimationContext from '$lib/common/bubble/AnimationContext.svelte';
	import Bubble from '$lib/common/bubble/Bubble.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import StopAllAnimations from '$lib/common/bubble/StopAllAnimations.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import Panel from '$lib/common/Panel.svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import SpecialNavigation from '../../../lib/common/navigation/SpecialNavigation.svelte';
	import ContentSection from '$lib/common/PageLayout/ContentSection.svelte';
	import FullWidthSection from '$lib/common/PageLayout/FullWidthSection.svelte';
	import ContentTwoColumns from '$lib/common/PageLayout/ContentTwoColumns.svelte';

	function getRandomColor() {
		return `${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(
			Math.random() * 255
		)}`;
	}

	const setRandomColorOnHover: MouseEventHandler<HTMLLIElement> = (e) => {
		e.currentTarget?.style.setProperty('--color-random', getRandomColor());
	};
</script>

<PageLayout
	title="Special projects"
	description="Jörn likes to experiment and create small things. Here you can explore some of these."
	allowSections
>
	<FullWidthSection class="py-12">
		<ContentTwoColumns>
			{#snippet left()}
				<Panel class="p-4">
					{#snippet text()}
						<h1 class="shadow-none">Specials</h1>
					{/snippet}
					<Narigo side="left"
						>Here are some strange experiments I've built, just to play around a bit.</Narigo
					>
				</Panel>
			{/snippet}
			{#snippet right()}
				<Panel class="p-4" outerClass="h-full">
					<Narigo side="left">...and I couldn't come up with a better name for this page.</Narigo>
				</Panel>
			{/snippet}
		</ContentTwoColumns>
	</FullWidthSection>
	<ContentSection>
		<SpecialNavigation />
		<AnimationContext name="dialog" defaultDelay={1000}>
			{#snippet children({ isDone, stopAllAnimations })}
				{#if !isDone}
					<div style="position:relative;height:2em">
						<div style="position:absolute;top:0;right:0;">
							<StopAllAnimations {stopAllAnimations} />
						</div>
					</div>
				{/if}

				<Bubble>Hey, what's up with this page?</Bubble>
				<Narigo side="right">I thought I may want to write some code here.</Narigo>
				<Bubble>Okay, but ...</Bubble>
				<Bubble delay={1500}>What?!</Bubble>
				<Narigo side="right">For example an animation for this "exchange" here.</Narigo>
				<Narigo side="right"
					>You can <a href="{base}/specials/talking/create">create your own</a>, if you want.</Narigo
				>
				<Narigo delay={1000} side="right"
					>Or a clone of a word game where you can provide your own word: <a
						href="{base}/specials/weirdle">Weirdle</a
					></Narigo
				>
				<Narigo delay={600} side="right"
					>Or <a href="{base}/specials/recharge">Recharge</a> someone.</Narigo
				>
				<Narigo delay={800} side="right"
					>Or look up solutions from <a href="{base}/specials/frontend-friday-folks"
						>Frontend Friday Folks</a
					>.</Narigo
				>
				<Narigo delay={900} side="right"
					>Or check previous events from <a href="{base}/specials/crafters-vs-codewars"
						>Crafters vs CodeWars</a
					>.</Narigo
				>
				<Narigo delay={600} side="right"
					>Or read about things I learnt in small <a href="{base}/specials/today-i-learnt">TIL</a> posts.</Narigo
				>
			{/snippet}
		</AnimationContext>
		<section>
			<h3>Some projects / links</h3>
			<Narigo>
				There are some projects I've created that I want to highlight. I had a real need for these
				at some point in time and I'm pretty happy I can share some of them today.
			</Narigo>
			<ul class="m-0 p-0 list-none">
				<li
					class="m-0 p-0 list-none"
					onmouseenter={setRandomColorOnHover}
					style="--color-random:{getRandomColor()};"
				>
					<a
						class="text-body hover:text-body no-underline after:[&&]:[background:none]"
						href="https://github.com/Narigo/keepass-diff"
						rel="external"
					>
						<div class="hover:shadow-box">
							<Panel class="panellink" textBgColor="#d22">
								{#snippet text()}
									<div>
										After finding multiple binary files in my cloud storage that couldn't sync...
									</div>
								{/snippet}
								<div class="panel p-2">
									<Bubble side="right"
										>Shoot, my keepass database on Nextcloud created a sync file when I changed it
										on multiple devices!</Bubble
									>
									<Narigo>Did you try out <strong>keepass-diff</strong> yet?</Narigo>
								</div>
							</Panel>
						</div>
					</a>
				</li>
				<li
					class="m-0 p-0 list-none"
					onmouseenter={setRandomColorOnHover}
					style="--color-random:{getRandomColor()};"
				>
					<a
						class="text-body hover:text-body no-underline after:[&&]:[background:none]"
						href="https://github.com/Narigo/reimemonster"
						rel="external"
					>
						<div class="hover:shadow-box">
							<Panel textBgColor="#dd2" textColor="#000">
								{#snippet text()}
									<div>While working on a poem for a birthday</div>
								{/snippet}
								<div class="panel p-2">
									<Bubble side="right"
										>I want to create poems and need words that rhyme. I'd like to have hints that
										the flow / meter works out as well. Is there a tool for this?</Bubble
									>
									<Narigo
										>If you're looking for a tool to help you write poems in German, there is:
										<strong>Reimemonster</strong>!</Narigo
									>
								</div>
							</Panel>
						</div>
					</a>
				</li>
				<li
					class="m-0 p-0 list-none"
					onmouseenter={setRandomColorOnHover}
					style="--color-random:{getRandomColor()};"
				>
					<a
						class="text-body hover:text-body no-underline after:[&&]:[background:none]"
						href="https://github.com/Narigo/dripping-spray"
						rel="external"
					>
						<div class="hover:shadow-box">
							<Panel>
								{#snippet text()}
									<div>Frustrations with unrealistic spray cans...</div>
								{/snippet}
								<div class="panel p-2">
									<Bubble side="right"
										>All the painting tools have an unrealistic spray can brush. It never creates
										drops when spraying on the same spot or it generates the same one over and over
										again.</Bubble
									>
									<Narigo>
										There is <strong>dripping-spray</strong> to help you create a better experience!
									</Narigo>
								</div>
							</Panel>
						</div>
					</a>
				</li>
			</ul>
		</section>
	</ContentSection>
</PageLayout>

<style lang="postcss">
	.panel {
		background: linear-gradient(rgba(255, 255, 255, 0), rgba(var(--color-random), 0.15));
	}
</style>
