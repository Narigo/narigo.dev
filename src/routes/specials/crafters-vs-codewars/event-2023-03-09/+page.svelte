<script>
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
	<p>A somewhat readable reducer</p>
	<CodeBlock code={reducerSolution} />

	<p>Did you know that <code>for ... of string</code> does not need to split the string?</p>
	<CodeBlock code={forOfSolution} />
</KataLayout>
