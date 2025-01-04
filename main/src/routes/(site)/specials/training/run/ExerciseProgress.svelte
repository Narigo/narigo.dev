<script lang="ts" module>
	interface ExerciseProgressProps {
		at: number;
		timeForExercise: number;
	}
</script>

<script lang="ts">
	let { at, timeForExercise }: ExerciseProgressProps = $props();
</script>

<label>
	<div class="text-3xl">{Math.floor(timeForExercise - at)}s</div>
	<progress class="h-8 w-full border border-gray-400 bg-gray-200" max={timeForExercise} value={at}>
		{Math.floor((at / timeForExercise) * 100)}%
	</progress>
</label>
