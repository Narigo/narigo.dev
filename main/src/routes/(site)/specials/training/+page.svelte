<script lang="ts">
	import { base } from '$app/paths';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';

	type WorkoutTypes = 'short' | 'regular' | 'long';
	let typeOfWorkout: WorkoutTypes = $state('regular');
	let timePerExercise: number = $state(45);

	const calculateTrainingDuration = (typeOfWorkout: WorkoutTypes, timePerExercise: number) => {
		const amountOfWorkouts: Record<WorkoutTypes, number> = {
			short: 6,
			regular: 11,
			long: 15
		};
		const timeToPauseInSeconds = 10;
		const timeInSeconds =
			timePerExercise * amountOfWorkouts[typeOfWorkout] +
			timeToPauseInSeconds * (amountOfWorkouts[typeOfWorkout] - 1);
		return `${Math.floor(timeInSeconds / 60)} minutes and ${timeInSeconds % 60} seconds`;
	};
</script>

<PageLayout>
	<h2>Training</h2>
	<Narigo>
		<p>
			At some point, my dentist sent me a link to a workout that strengthens your back. I've been
			doing these workouts myself but at some point, it didn't really work well with the iPad
			anymore (screen turns off and sound doesn't play). So I'm trying to recreate this, to make it
			work on all of my devices.
		</p>
		<p>
			The page started with some settings, to customize the workout for yourself. When you press
			start, it gives you a few seconds to see an image of someone doing the exercise and text
			explaining what to do. After that, you should do the exercise for some seconds before it jumps
			to the next one.
		</p>
	</Narigo>

	<form class="grid" method="GET" action="{base}/specials/training/run">
		<p class="my-4 rounded border-l-4 border-l-yellow-300 bg-yellow-100 p-4">
			WARNING: Work in progress, you won't be able to submit yet!
		</p>
		<h2>Select your training mode to start training</h2>
		<label>
			<span>Time per workout:</span>
			<input
				name="timePerExercise"
				type="number"
				class="w-fit border-b-2 border-black text-center"
				style="width:calc(1ch * 4)"
				oninput={(e) => {
					e.currentTarget.setAttribute(
						'style',
						`width:calc(1ch * ${(e.currentTarget.value.length || 1) + 2});`
					);
				}}
				bind:value={timePerExercise}
			/>
			<span>seconds</span>
		</label>
		<p>Please select the type of the workout:</p>
		<label>
			<input name="typeOfWorkout" bind:group={typeOfWorkout} type="radio" value="short" />
			<span>Short workout</span>
		</label>
		<label>
			<input name="typeOfWorkout" bind:group={typeOfWorkout} type="radio" value="regular" />
			<span>Regular workout</span>
		</label>
		<label>
			<input name="typeOfWorkout" bind:group={typeOfWorkout} type="radio" value="long" />
			<span>Long workout</span>
		</label>
		<p>Training duration: {calculateTrainingDuration(typeOfWorkout, timePerExercise)}</p>
		<button class="disabled:bg-gray-300">Start training</button>
	</form>
</PageLayout>
