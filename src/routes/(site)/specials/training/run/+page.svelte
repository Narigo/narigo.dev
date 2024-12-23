<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { supportsScreenLock, requestScreenLock } from '$lib/screenlock/screenlock';
	import { onMount } from 'svelte';
	import Exercise from './Exercise.svelte';
	import ExerciseProgress from './ExerciseProgress.svelte';
	import Human from './Human.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import FullWidthSection from '$lib/common/PageLayout/FullWidthSection.svelte';

	type ExerciseWorkout = {
		title: string;
		description: Array<string>;
		image?: string;
		video?: string;
	};
	type ExerciseName = keyof typeof exercises;

	const exercises = {
		beetleCrunch: {
			title: 'Beetle crunch',
			description: [
				'Lie on your back, keep the shoulders above the ground. One leg is pulled up, the other one hovers stretched out above the floor. Arms push forward towards the feet.',
				'Switch the pulled up and stretched out legs about every 10 seconds.',
				''
			]
		},
		second: {
			title: 'Exercise B',
			description: [
				'This is the setup.',
				'Change sides at half time.',
				'Keeping the feet higher, makes it harder.'
			]
		},
		third: {
			title: 'C Exercise',
			description: [
				'This is the setup.',
				'Change sides at half time.',
				'Keeping the feet higher, makes it harder.'
			]
		},
		fourth: {
			title: 'D Something',
			description: [
				'This is the setup.',
				'Change sides at half time.',
				'Keeping the feet higher, makes it harder.'
			]
		}
	} satisfies Record<string, ExerciseWorkout>;

	const workoutSessions: Record<string, Array<ExerciseName>> = {
		short: ['beetleCrunch', 'third'],
		regular: ['beetleCrunch', 'second', 'third'],
		long: ['beetleCrunch', 'second', 'third', 'fourth']
	};

	const timePerExercise = parseInt($page.url.searchParams.get('timePerExercise') ?? '45', 10);
	const typeOfWorkout = $page.url.searchParams.get('typeOfWorkout');

	let currentStep = $state(parseInt($page.url.searchParams.get('currentStep') ?? '0', 10));
	const currentExerciseName = $derived(
		typeOfWorkout ? workoutSessions[typeOfWorkout]?.[currentStep] : null
	);
	const currentExercise: ExerciseWorkout | null = $derived(
		currentExerciseName ? exercises[currentExerciseName] : null
	);

	let startedAt = $state(Date.now());
	let currentTime = $state(Date.now());

	onMount(() => {
		const lockPromise = supportsScreenLock() ? requestScreenLock() : null;
		console.log('requested screen lock', lockPromise);

		run();

		if (lockPromise) {
			return async () => {
				const lock = await lockPromise;
				console.log('releasing lock');
				lock.release();
			};
		}
	});

	async function run() {
		console.log({ currentStep, currentExercise });
		if (!currentExercise) {
			return await goto(`${base}/specials/training/done`);
		}

		do {
			await new Promise((r) =>
				setTimeout(r, Math.min(startedAt + timePerExercise * 1000 - currentTime, 1000))
			);
			currentTime = Date.now();
		} while (currentTime < startedAt + timePerExercise * 1000);

		currentStep = currentStep + 1;
		startedAt = Date.now();

		await run();
	}
</script>

<PageLayout allowSections mainClasses="auto-rows-auto">
	<FullWidthSection class="h-full">
		{#if currentExercise}
			<Exercise
				title={currentExercise.title}
				description={currentExercise.description}
				image={currentExercise.image}
				video={currentExercise.video}
			/>
			<div class="grid place-items-center">
				<Human
					body="right-70"
					upperArmLeft="halfUp"
					upperArmRight="side"
					forearmLeft="straight"
					forearmRight="bendedX"
					upperLegLeft="halfOut"
					upperLegRight="straight"
				></Human>
			</div>
			<ExerciseProgress at={(currentTime - startedAt) / 1000} timeForExercise={timePerExercise} />
		{/if}
	</FullWidthSection>
</PageLayout>
