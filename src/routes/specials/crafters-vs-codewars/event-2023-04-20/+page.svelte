<script lang="ts">
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import KataLayout from '../KataLayout.svelte';

	const solution = `function digitalRoot(n) {
  const nString = \`\${n}\`;
  if (nString.length === 1) {
    return n;
  }

  let sum = 0;
  for (let char of nString) {
    sum = sum + Number(char);
  }
  return digitalRoot(sum);
}`;
</script>

<KataLayout id="541c8630095125aba6000c00" name="Sum of Digits / Digital Root">
	<section>
		<h3>Sum of Digits / Digital Root</h3>
		<CodeBlock code={solution} />
		<Narigo
			>I couldn't make it today, but Gustaf hosted it this time. I've added this solution for
			writing a very naive implementation for this issue.</Narigo
		>
	</section>
</KataLayout>
