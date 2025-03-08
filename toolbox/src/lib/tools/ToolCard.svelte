<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	type Category = 'strings' | 'tools';

	interface ToolCardProps {
		category: Category;
		title: string;
		description: string;
	}

	let { category, title, description }: ToolCardProps = $props();

	const cardBackground = (
		{
			strings: 'bg-purple-600',
			tools: 'bg-green-600'
		} as Record<Category, string>
	)[category];

	const categoryName = (
		{
			strings: m.toolsCategoryStrings(),
			tools: m.toolsCategoryTools()
		} as Record<Category, string>
	)[category];
</script>

<div class="relative min-h-52 overflow-clip {cardBackground} p-4 text-white">
	<h2 class="text-4xl font-bold">{title}</h2>
	<p>{description}</p>
	<span
		class="absolute -right-1 -bottom-1 text-9xl font-bold text-black opacity-15"
		aria-label={m.toolsCategoryLabel({ label: categoryName })}>{categoryName}</span
	>
</div>
