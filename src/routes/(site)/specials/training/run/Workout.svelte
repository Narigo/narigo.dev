<script lang="ts" module>
	interface WorkoutProps {
		title: string;
		description: Array<string>;
		image?: string;
		video?: string;
	}
</script>

<script lang="ts">
	let { title, description }: WorkoutProps = $props();
</script>

<div class="">
	<h2>{title}</h2>
	{#each description as p}
		<p>{p}</p>
	{/each}
</div>
