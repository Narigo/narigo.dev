<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	type Category = 'converter' | 'tools';

	interface ToolCardProps {
		category: Category;
		title: string;
		description: string;
	}

	let { category, title, description }: ToolCardProps = $props();

	const cardBackground = (
		{
			converter: 'bg-purple-600',
			tools: 'bg-green-600'
		} as Record<Category, string>
	)[category];

	const categoryName = (
		{
			converter: m['tools.categories.converter'](),
			tools: m['tools.categories.tools']()
		} as Record<Category, string>
	)[category];
</script>

<div class="relative min-h-52 overflow-clip {cardBackground} p-4 text-white">
	<h2 class="text-4xl font-bold">{title}</h2>
	<p>{description}</p>
	<span
		class="absolute -right-1 -bottom-1 text-8xl font-bold text-black opacity-15"
		aria-label={m['tools.categories.label']({ label: categoryName })}>{categoryName}</span
	>
</div>
