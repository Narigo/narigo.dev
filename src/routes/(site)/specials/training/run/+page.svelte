<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const workouts = {
		short: [],
		regular: [],
		long: []
	};

	const timePerWorkout = $derived($page.url.searchParams.get('timePerWorkout'));
	const typeOfWorkout = $derived($page.url.searchParams.get('typeOfWorkout'));
	let currentStep = $state($page.url.searchParams.get('currentStep') ?? 0);
</script>

<pre>
    timePerWorkout: {timePerWorkout}
     typeOfWorkout: {typeOfWorkout}
       currentStep: {currentStep}
</pre>
