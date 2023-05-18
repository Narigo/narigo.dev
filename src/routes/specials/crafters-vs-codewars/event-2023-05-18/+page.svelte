<script lang="ts">
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
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
</script>

<KataLayout id="5264d2b162488dc400000001" name="Stop gninnipS My sdroW!">
	<section>
		<h3>Stop gninnipS My sdroW!</h3>
		<CodeBlock code={solution} />
		<Narigo>
			We did multiple Katas today. This is the first one of them.
		</Narigo>
	</section>
</KataLayout>
