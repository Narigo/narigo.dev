<script lang="ts">
	import Code from '$lib/common/Code.svelte';
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import KataLayout from '../KataLayout.svelte';

	const solutionReduce = ``;
</script>

<KataLayout id="52597aa56021e91c93000cb0" name="Moving Zeros To The End">
	<section>
		<h3>Moving Zeros To The End</h3>
		<CodeBlock code={solutionReduce} />
		<Narigo>
			There were a couple of solutions to this problem, lots of different ideas even though there were less people than usually tonight. It feels like for every challenge about an array, there has to be a solution with <Code>Array.reduce</Code>. So there is mine! 😅
		</Narigo>
	</section>
</KataLayout>
