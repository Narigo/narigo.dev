<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/stores';
	import { supportsScreenLock, requestScreenLock } from '$lib/screenlock/screenlock';
	import { onMount } from 'svelte';
	import Exercise from './Exercise.svelte';
	import ExerciseProgress from './ExerciseProgress.svelte';
	import Human, { type HumanProps } from '$lib/exercise/human/Human.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import FullWidthSection from '$lib/common/PageLayout/FullWidthSection.svelte';

	type ExerciseWorkout = {
		title: string;
		description: Array<string>;
		human?: HumanProps;
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
		lateralForearmSupportLeft: {
			title: 'Lateral forearm support (left)',
			description: [
				'The body rests on the left forearm and the lower left leg. The free leg should be pulled up as much as possible and held in position.',
				'The hip must not bend downwards. It is better to lower the leg then.',
				'The exercise will be repeated for the other side.'
			],
			human: {
				body: 'left-70',
				upperArmLeft: 'side',
				upperArmRight: 'halfUp',
				forearmLeft: 'bendedX',
				forearmRight: 'straight',
				thighLeft: 'straight',
				thighRight: 'halfOut'
			}
		},
		lateralForearmSupportRight: {
			title: 'Lateral forearm support (right)',
			description: [
				'The body rests on the right forearm and the lower right leg. The free leg should be pulled up as much as possible and held in position.',
				'The hip must not bend downwards. It is better to lower the leg then.',
				''
			],
			human: {
				body: 'right-70',
				upperArmLeft: 'halfUp',
				upperArmRight: 'side',
				forearmLeft: 'straight',
				forearmRight: 'bendedX',
				thighLeft: 'halfOut',
				thighRight: 'straight'
			}
		},
		pelvicLiftLeft: {
			title: 'Pelvic lift (left)',
			description: [
				'Lay on your back and place your hands behind your head. Keep left heel on the ground, right leg is pulled up.',
				'Lift your pelvis upward and hold the position. Toes are going up, heels should be pulled towards your glutes to build tension.',
				'The exercise will be repeated for the other side.'
			]
		},
		pelvicLiftRight: {
			title: 'Pelvic lift (right)',
			description: [
				'Lay on your back and place your hands behind your head. Keep right heel on the ground, left leg is pulled up.',
				'Lift your pelvis upward and hold the position. Toes are going up, heels should be pulled towards your glutes to build tension.',
				''
			]
		}
	} satisfies Record<string, ExerciseWorkout>;

	const workoutSessions: Record<string, Array<ExerciseName>> = {
		short: ['beetleCrunch', 'pelvicLiftLeft'],
		regular: [
			'lateralForearmSupportLeft',
			'lateralForearmSupportRight',
			'beetleCrunch',
			'pelvicLiftLeft',
			'pelvicLiftRight'
		],
		long: [
			'lateralForearmSupportLeft',
			'lateralForearmSupportRight',
			'beetleCrunch',
			'pelvicLiftLeft',
			'pelvicLiftRight'
		]
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
			return await goto(resolve('/specials/training/done'));
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
				{#if currentExercise.human}
					<Human {...currentExercise.human} />
				{/if}
			</div>
			<ExerciseProgress at={(currentTime - startedAt) / 1000} timeForExercise={timePerExercise} />
		{/if}
	</FullWidthSection>
</PageLayout>
