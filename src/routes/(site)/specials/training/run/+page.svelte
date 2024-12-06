<script lang="ts">
	import { page } from '$app/stores';

	type Exercise = {
		title: string;
		description: Array<string>;
		image?: string;
	};

	const exercises = {
		first: {
			title: 'Doing A',
			desription: [
				'This is the setup.',
				'Change sides at half time.',
				'Keeping the feet higher, makes it harder.'
			]
		},
		second: {
			title: 'Exercise B',
			desription: [
				'This is the setup.',
				'Change sides at half time.',
				'Keeping the feet higher, makes it harder.'
			]
		},
		third: {
			title: 'C Workout',
			desription: [
				'This is the setup.',
				'Change sides at half time.',
				'Keeping the feet higher, makes it harder.'
			]
		},
		fourth: {
			title: 'D Something',
			desription: [
				'This is the setup.',
				'Change sides at half time.',
				'Keeping the feet higher, makes it harder.'
			]
		}
	};

	const workoutSessions: Record<string, Array<keyof typeof exercises>> = {
		short: ['first', 'third'],
		regular: ['first', 'second', 'third'],
		long: ['first', 'second', 'third', 'fourth']
	};

	const timePerWorkout = $derived($page.url.searchParams.get('timePerWorkout'));
	const typeOfWorkout = $derived($page.url.searchParams.get('typeOfWorkout'));
	let currentStep = $state(parseInt($page.url.searchParams.get('currentStep') ?? '0', 10));
	const x = $derived(typeOfWorkout ? workoutSessions[typeOfWorkout]?.[currentStep] : null);

	setTimeout(() => {
		currentStep += 1;
	}, 2000);
</script>

<pre>
    timePerWorkout: {timePerWorkout}
     typeOfWorkout: {typeOfWorkout}
       currentStep: {currentStep}
                 x: {x}
</pre>
