<script lang="ts">
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Kata from '../Kata.svelte';
	import KataLayout from '../KataLayout.svelte';

	const solution = `function rotate(str, acc = [], at = 0) {
  if (str.length <= at) {
    return acc;
  }
  const nextSlice = str.slice(at + 1) + str.slice(0, at + 1);
  return rotate(str, [...acc, nextSlice], at + 1);
}`;

	const solutionPalindrome = `function longestPalindrome(s){
  let maxAmountOfChars = 0;
  for (let start = 0; start < (s.length - maxAmountOfChars); start++) {
    for (let endOfPalindrome = s.length; (start + maxAmountOfChars) < endOfPalindrome; endOfPalindrome--) {
      if (isPalindrome(s.slice(start, endOfPalindrome))) {
        maxAmountOfChars = endOfPalindrome - start;
      }
    }
  }
  return maxAmountOfChars;
}

function isPalindrome(s) {
  return s.split("").reverse().join("") === s;
}`;
</script>

<KataLayout>
	<Kata id="586560a639c5ab3a260000f3" name="All Star Code Challenge #15" {solution}>
		<Narigo>
			<p>
				I had to leave shortly after finishing mine. They did another challenge and had a couple
				more solutions. My version uses default arguments and recursion to get to the result without
				having to write a second helper function.
			</p>
			<p>
				The initial idea brought up by Gustaf in the screenshare was to add the same string to the
				string again. Then, you can take a slice of the string's length starting from index 1 up to
				the length of the string. While it takes a bit more memory, I'm still wondering which
				approach would be faster for the computer to work with.
			</p>
		</Narigo>
	</Kata>
	<Kata id="54bb6f887e5a80180900046b" name="Longest Palindrome" solution={solutionPalindrome}>
		<Narigo>
			This is the second challenge that has been done. I didn't create a solution during the event
			as I had to leave early. From what I could see in the chat, my solution differs in the way of
			the for loops: If you switch them (count backwards in the outer one), it's possible to return
			the outer one as the length of the palindrome.
		</Narigo>
	</Kata>
</KataLayout>
