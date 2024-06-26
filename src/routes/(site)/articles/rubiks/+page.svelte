<script>
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import ArticleLayout from '$lib/common/PageLayout/ArticleLayout.svelte';
</script>

<ArticleLayout title="Rubiks Cubes" lastUpdateOn="2024-04-13">
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
	<h3>Solution steps</h3>
	<ol>
		<li><a href="#cross-top-color">Cross with the top color</a></li>
		<li><a href="#solve-top-color-and-corners">Solve top color and corners</a></li>
		<li><a href="#sides-to-get-the-first-two-rows">Sides to get the first two rows</a></li>
		<li>Bottom color cross</li>
		<li>Bottom color face complete</li>
		<li>Bottom corners solved</li>
		<li>Bottom sides solved / complete cube</li>
	</ol>
	<h4 id="cross-top-color">Cross with the top color</h4>
	<p>
		The first thing to understand with the cube is that the faces in the middle cannot change. If
		you think of white being the top face, yellow will be bottom. On the sides, there will be red,
		blue, orange and green in that order. Building a cross from the top side to the middle centers
		feels quite simple to me, if I don't have to care about any other piece yet:
	</p>
	<p>
		Select white and red, move it in a way that either part of it is correct on its matching color
		face. Next, do the same with blue and white. If you have to move the upper part (white) for this
		to succeed, move the already positioned red-white part away by rotating the red face once and
		back, once blue-white is positioned correctly. Then do orange-white with the same approach and
		green-white in the end. If you have to move one or more of the other parts, it should be easy to
		put them back.
	</p>

	<h4 id="solve-top-color-and-corners">Solve top color and corners</h4>
	<p>
		Having the cross part done, only the corners are left to get the first row correct. As long as
		the top color is visible on the side, you need to check the other two colors to find on which
		corner it needs to be placed. The corners can only be on the eight corners of the cube and
		possibly facing in the wrong directions.
	</p>

	<h5 id="top-color-bottom-row-facing-to-the-side">
		Top color in the bottom row, facing to the side
	</h5>
	<p>
		The best direction to have is the top color being placed in the bottom row corners and facing to
		the side. If that's the case, move it to the same spot as the corner where it needs to be
		placed. Then, rotate the bottom row left, if it was facing to the left or right, if it was
		facing to the right. Rotate the side of the cube that will not rotate the corner you looked at
		so that the top color is facing in the direction how you rotated the bottom row. Then rotate the
		bottom row back to click the top colors together and finally rotate the side back to move the
		cross plus the corner up.
	</p>
	<h5>Top color in the bottom row, facing down</h5>
	<p>
		If you have some solved corners on the side, move the piece to the bottom corner where the top
		corner isn't solved yet. The safest place is the one where the corner belongs later. Rotate one
		of the sides so that the unsolved top corner will go to the place where the corner is that we
		want to make face sideways. Move the corner away from the side after the rotation. Rotate the
		side back up. This makes the corner facing <a href="#top-color-bottom-row-facing-to-the-side"
			>to the side in the bottom row and the previous step can be used to solve this situation</a
		>.
	</p>

	<h4 id="sides-to-get-the-first-two-rows">Sides to get the first two rows</h4>
	<p>
		The first face and row should be solved and the center pieces are correctly set up. To get the
		second row, look at the pieces that need to go to the sides. If the upper face was white, there
		need to be red-blue, blue-orange, orange-green and green-red pieces somewhere on the cube. If
		they happen to be in the bottom row: Perfect! Let's say red-blue is there with red facing to the
		side and blue to the bottom. Move it below red first, so it looks like having a red "T" on the
		side that needs red. The algorithm to solve this is: Move it away from the blue side, rotate the
		blue side anti-clockwise, so the white side shows on the red side. Now move the red-blue piece
		from before back to red. Rotate the blue side clockwise again, making the corner, that needs to
		go into the upper row again, line up with the red-blue piece from the beginning. Now move it in
		the direction of blue, rotate the red side clockwise, the bottom piece back and the red side
		anti-clockwise again. The red-blue piece should now sit in the correct spot. This has to be done
		with all the sides. If one of the sides sits at the correct position but it facing in the wrong
		direction, move it out by putting something from the bottom row in (one of the yellow ones).
		This way, you can restart the algorithm of this step after moving the piece into the place where
		it should be started from: lining up with a center piece.
	</p>

	<h2>Rubiks 4x4</h2>
	<p>
		I like the genericness of the 4x4 cube as you can play it like a 3x3 and a 2x2, depending on how
		you scramble it. There are two extra steps and two parity situations, which in turn made me
		learn four more algorithms vs the 3x3.
	</p>
	<ol>
		<li>Correct center pieces</li>
		<li>Correct pairs on every side</li>
		<li><a href="#cross-top-color">Cross with the top color</a></li>
		<li>Solve top color and corners</li>
		<li>Sides to get the first two rows</li>
		<li>Bottom color cross</li>
		<li>Parity situation "edge not facing correctly"</li>
		<li>Bottom color face complete</li>
		<li>Bottom corners solved</li>
		<li>Solving bottom sides</li>
		<li>Parity situation "sides mirrored"</li>
	</ol>
	<p>I need some place where I can put the note for the "degde" parity.</p>
	<div class="not-prose">
		<CodeBlock code="r U2 r U2 r' U2 r U2 l' U2 r U2 r' U2 l r2 U2 r'" />
	</div>
</ArticleLayout>
