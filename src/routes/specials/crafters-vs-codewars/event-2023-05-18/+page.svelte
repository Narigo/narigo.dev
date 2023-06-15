<script lang="ts">
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Kata from '../Kata.svelte';
	import KataLayout from '../KataLayout.svelte';

	const solution = `function spinWords(string){
  const words = string.split(' ');
  return words.map((word) => {
    if (word.length < 5) {
      return word;
    }
    return word.split('').reverse().join('');
  }).join(' ');
}`;
	const solutionWhoLikesIt = `function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return \`\${names[0]} likes this\`;
  }
  if (names.length === 2) {
    return \`\${names[0]} and \${names[1]} like this\`;
  }
  if (names.length === 3) {
    return \`\${names[0]}, \${names[1]} and \${names[2]} like this\`;
  }
  return \`\${names[0]}, \${names[1]} and \${names.length - 2} others like this\`;
}`;

	const solutionTrainingOnDigits = `function solution(number){
  if (number <= 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}`;
</script>

<KataLayout>
	<Kata id="5264d2b162488dc400000001" name="Stop gninnipS My sdroW!" {solution}>
		<Narigo>We did multiple Katas today. This is the first one of them.</Narigo>
	</Kata>
	<Kata
		id="514b92a657cdc65150000006"
		name="Training on Multiples of 3 or 5"
		solution={solutionTrainingOnDigits}
	>
		<Narigo>
			I first thought this was FizzBuzz, but it summing these numbers turns out to be a bit
			different. The solutions do not include the <code>number &lt;= 0</code> guard in the beginning,
			but from the specification, it sounds more like the test for that is missing.
		</Narigo>
	</Kata>
	<Kata id="5266876b8f4bf2da9b000362" name="Who likes it?" solution={solutionWhoLikesIt}>
		<Narigo>
			When comparing this with other solutions, the readability of this Kata can be improved
			drastically by making the first few cases explicit.
		</Narigo>
	</Kata>
</KataLayout>
