<script lang="ts" module>
	import type { Snippet } from 'svelte';

	interface ExerciseProgressProps {
		at: number;
		timeForExercise: number;
	}
</script>

<script lang="ts">
	let { at, timeForExercise }: ExerciseProgressProps = $props();
</script>

<progress class="border border-gray-400" max={timeForExercise} value={at}>
	{Math.floor((at / timeForExercise) * 100)}%
</progress>
