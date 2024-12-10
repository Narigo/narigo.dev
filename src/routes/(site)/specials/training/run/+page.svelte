<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Exercise from './Exercise.svelte';
	import ExerciseProgress from './ExerciseProgress.svelte';
	import first from './image-1.png';

	type ExerciseWorkout = {
		title: string;
		description: Array<string>;
		image?: string;
		video?: string;
	};
	type ExerciseName = keyof typeof exercises;

	const exercises = {
		first: {
			image: first,
			title: 'Doing A',
			description: [
				'This is the setup.',
				'Change sides at half time.',
				'Keeping the feet higher, makes it harder.'
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
		short: ['first', 'third'],
		regular: ['first', 'second', 'third'],
		long: ['first', 'second', 'third', 'fourth']
	};

	const timePerExercise = parseInt($page.url.searchParams.get('timePerExercise') ?? '45', 10);
	const typeOfWorkout = $page.url.searchParams.get('typeOfWorkout');
	const workoutSession = (typeOfWorkout && workoutSessions[typeOfWorkout]) || [];

	let currentStep = $state(parseInt($page.url.searchParams.get('currentStep') ?? '0', 10));
	const currentExerciseName = $derived(
		typeOfWorkout ? workoutSessions[typeOfWorkout]?.[currentStep] : null
	);
	const currentExercise: ExerciseWorkout | null = $derived(
		currentExerciseName ? exercises[currentExerciseName] : null
	);

	let startedAt = $state(Date.now());
	let currentTime = $state(Date.now());
	run();

	async function run() {
		currentStep = currentStep + 1;
		if (!currentExercise) {
			return goto(`${base}/specials/training/done`);
		}

		do {
			await new Promise((r) =>
				setTimeout(r, Math.min(startedAt + timePerExercise * 1000 - currentTime, 1000))
			);
			currentTime = Date.now();
		} while (currentTime < startedAt + timePerExercise * 1000);

		run();
	}
</script>

{#if currentExercise}
	<Exercise
		title={currentExercise.title}
		description={currentExercise.description}
		image={currentExercise.image}
		video={currentExercise.video}
	/>
	<ExerciseProgress at={(currentTime - startedAt) / 1000} timeForExercise={timePerExercise} />
{/if}
