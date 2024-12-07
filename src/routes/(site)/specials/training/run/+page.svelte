<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Workout from './Workout.svelte';

	type Exercise = {
		title: string;
		description: Array<string>;
		image?: string;
	};
	type ExerciseName = keyof typeof exercises;

	const exercises = {
		first: {
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
			title: 'C Workout',
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
	} satisfies Record<string, Exercise>;

	const workoutSessions: Record<string, Array<ExerciseName>> = {
		short: ['first', 'third'],
		regular: ['first', 'second', 'third'],
		long: ['first', 'second', 'third', 'fourth']
	};

	const timePerWorkout = parseInt($page.url.searchParams.get('timePerWorkout') ?? '45', 10);
	const typeOfWorkout = $page.url.searchParams.get('typeOfWorkout');
	const workoutSession = (typeOfWorkout && workoutSessions[typeOfWorkout]) || [];

	let currentStep = $state(parseInt($page.url.searchParams.get('currentStep') ?? '0', 10));
	const currentExerciseName = $derived(
		typeOfWorkout ? workoutSessions[typeOfWorkout]?.[currentStep] : null
	);
	const currentExercise = $derived(currentExerciseName ? exercises[currentExerciseName] : null);

	setTimeout(async () => {
		await next();
	}, timePerWorkout * 1000);

	async function next() {
		currentStep = currentStep + 1;
		if (!currentExercise) {
			return goto(`${base}/specials/training/done`);
		}

		setTimeout(async () => {
			await next();
		}, timePerWorkout * 1000);
	}
</script>

<pre>
    timePerWorkout: {timePerWorkout}
     typeOfWorkout: {typeOfWorkout}
       currentStep: {currentStep}
</pre>

{#if currentExercise}
	<Workout title={currentExercise.title} description={currentExercise.description} />
{/if}
