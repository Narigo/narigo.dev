<script lang="ts">
	import Code from '$lib/common/Code.svelte';
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import KataLayout from '../KataLayout.svelte';

	const solution = `function findUniq(arr) {
    const [a, b, c] = arr;
    const [uniqA, uniqB] = new Set(arr);
    if (uniqA === a && (uniqA === b || uniqA === c)) return uniqB;
    return uniqA;
  }`;

	const fasterSolution = `function findUniq(arr) {
  const [a, b, c] = arr;
  if (a !== b && b === c) return a;
  if (a !== c && a === c) return b;
  
  for (let i = arr.length - 1; i > 0; --i) {
    if (arr[i] !== a) return arr[i];
  }
}`;
</script>

<KataLayout id="585d7d5adb20cf33cb000235" name="Find the unique number">
	<section>
		<h3>Find the unique number</h3>
		<CodeBlock code={solution} />
		<Narigo>
			The easy <Code>filter().length &gt; 1</Code> solution is not performant enough for the tests to
			work. Two sets worked better.
		</Narigo>
		<CodeBlock code={fasterSolution} />
		<Narigo>This is walking through the array to find the first that's not unique.</Narigo>
	</section>
</KataLayout>
