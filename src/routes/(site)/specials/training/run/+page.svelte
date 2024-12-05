<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const workouts: Record<string, Array<string>> = {
		short: ['first', 'second'],
		regular: ['first', 'second'],
		long: ['first', 'second']
	};

	const timePerWorkout = $derived($page.url.searchParams.get('timePerWorkout'));
	const typeOfWorkout = $derived($page.url.searchParams.get('typeOfWorkout'));
	let currentStep = $state(parseInt($page.url.searchParams.get('currentStep') ?? '0', 10));
	const x = $derived(typeOfWorkout ? workouts[typeOfWorkout]?.[currentStep] : null);

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
