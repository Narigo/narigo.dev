<script lang="ts">
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import KataLayout from '../KataLayout.svelte';

	const solution1 = `function accum(s) {
  let length = s.length;
  let output = '';
  for (let i = 0; i < length; i++) {
    output += s[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      output += s[i].toLowerCase();
    }
    if (i < length - 1) {
      output += '-';
    }
  }
  return output;
}`;
	const solution2 = `function accum(s) {
  let length = s.length;
  let fragments = [];
  for (let i = 0; i < length; i++) {
    let output = s[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      output += s[i].toLowerCase();
    }
    fragments.push(output);
  }
  return fragments.join('-');
}`;
	const solution3 = `function accum(s) {
  let length = s.length;
  let fragments = [];
  for (let i = 0; i < length; i++) {
    let output = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
    fragments.push(output);
  }
  return fragments.join('-');
}`;
	const solution4 = `function accum(inputString) {
  const fragments = [];
  for (let i = 0; i < inputString.length; i++) {
    const letter = inputString[i];
    const fragment = letter.toUpperCase() + letter.toLowerCase().repeat(i);
    fragments.push(fragment);
  }
  return fragments.join('-');
}`;
	const solutionMap = `function accum(inputString) {
  const letters = inputString.split('');
  const fragments = letters.map((letter, index) => {
    return letter.toUpperCase() + letter.toLowerCase().repeat(index);
  })
  return fragments.join('-');
}`;
</script>

<KataLayout id="5667e8f4e3f572a8f2000039" name="Mumbling">
	<section>
		<h3>for-loops</h3>
		<CodeBlock code={solution1} />
		<Narigo
			>The very first solution we came up with, thanks to @komatian to guide me. We improved the
			solution a couple of times:</Narigo
		>
		<CodeBlock code={solution2} />
		<Narigo>@Gustaf even made the inner for-loop disappear with String.prototype.repeat:</Narigo>
		<CodeBlock code={solution3} />
		<Narigo>In the end, we came up with a bit more readable code:</Narigo>
		<CodeBlock code={solution4} />
	</section>
	<section>
		<h3>Using split/map/join</h3>
		<CodeBlock code={solutionMap} />
		<Narigo
			>A completely different solution, using split, map and join instead of using loops. After
			submitting we saw a different way to split the string by using <code>[...inputString]</code>,
			but it seemed "too clever", so we kept using <code>split('')</code>.</Narigo
		>
	</section>
</KataLayout>
