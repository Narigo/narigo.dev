<script lang="ts" module>
	interface WorkoutProps {
		title: string;
		description: Array<string>;
		image?: string;
		video?: string;
	}
</script>

<script lang="ts">
	let { title, description, image, video }: WorkoutProps = $props();
</script>

<div class="grid grid-cols-1 gap-4" class:md:grid-cols-2={image || video}>
	{#if image || video}
		<div>
			{#if image}
				<img class="object-contain" src={image} alt="Workout for {title}" />
			{/if}
		</div>
	{/if}
	<div>
		<h2>{title}</h2>
		{#each description as p, index (index)}
			<p>{p}</p>
		{/each}
	</div>
</div>
