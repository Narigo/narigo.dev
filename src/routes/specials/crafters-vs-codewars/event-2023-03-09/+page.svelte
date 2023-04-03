<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import KataLayout from '../KataLayout.svelte';

	const reducerSolution = `function isVowel(c) {
  return "aeiou".includes(c.toLowerCase());
}

function disemvowel(str) {
  return str.split('').reduce((stringWithoutVowels, char) => {
    if (isVowel(char)) {
      return stringWithoutVowels;
    }
    return stringWithoutVowels + char;
  }, '');
}`;

	const forOfSolution = `function disemvowel(str) {
  let out = '';
  for (const c of str) {
    if (!['a','e','i','o','u'].includes(c.toLowerCase())) {
      out += c;
    }
  }
  return out;
}`;
</script>

<KataLayout id="52fba66badcd10859f00097e" name="Disemvowel Trolls">
	<section>
		<h3>Array.reduce</h3>
		<p>A somewhat readable reducer</p>
		<CodeBlock code={reducerSolution} />
		<Narigo>
			I think reducers are a really cool tool to do several things in one run through an array. It's
			very easy for them to get complex and too clever to understand them quickly. I try moving
			things out of them and keep descriptive names for variables and functions that I use.
		</Narigo>
	</section>

	<section>
		<h3>for-of</h3>
		<p>Did you know that <code>for ... of string</code> does not need to split the string?</p>
		<CodeBlock code={forOfSolution} />
		<Narigo>
			I didn't know that for ... of splits a string directly! It's fun to hear other people's
			solutions and then come up with something else that nobody used to solve this. It seems to be
			a good way of learning new stuff.
		</Narigo>
	</section>
</KataLayout>
