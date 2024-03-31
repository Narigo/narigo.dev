<script>
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h1>Rubiks Cubes</h1>
	<p>
		I like solving these cubes and it always takes a while until I can do all the necessary
		algorithms. In the past, I've seen that I tend to forget some key algorithms when I don't solve
		the cubes regularly. Especially some parity situations are hard to remember.
	</p>
	<p>
		The way I selected the algorithms were mostly for simplicity. This page won't help you
		speed-solving cubes, but if you just want a generic way to solve the cubes, this might be for
		you. There are a lot of solutions to a lot of situations - I will try to show the ones I use.
	</p>
	<h2>Rubiks 3x3</h2>
	<p>
		This is the standard cube and it makes sense to start with this one. I may reference steps from
		this one in the other cubes solutions.
	</p>
	<h2>Rubiks 4x4</h2>
	<p>I need some place where I can put the note for the "degde" parity.</p>
	<CodeBlock code="r U2 r U2 r' U2 r U2 l' U2 r U2 r' U2 l r2 U2 r'" />
</PageLayout>
