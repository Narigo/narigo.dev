<script>
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import ArticleLayout from '$lib/common/PageLayout/ArticleLayout.svelte';
</script>

<ArticleLayout title="Rubiks Cubes" lastUpdateOn="2024-07-09">
	<p class="bg-opacity-40 bg-red-200 border border-solid border-red-300 p-4">
		This is still a work in progress. I had to save two algorithms so I won't forget them.
	</p>
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
		<li><a href="#bottom-color-cross">Bottom color cross</a></li>
		<li><a href="#bottom-color-face-complete">Bottom color face complete</a></li>
		<li><a href="#bottom-corners-solved">Bottom corners solved</a></li>
		<li><a href="#bottom-sides-solved-complete-cube">Bottom sides solved / complete cube</a></li>
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
		with all the sides. If one of the sides sits at the correct position but it's facing in the
		wrong direction, move it out by putting something from the bottom row in (one of the yellow
		ones). This way, you can restart the algorithm of this step after moving the piece into the
		place where it should be started from: lining up with a center piece.
	</p>

	<h4 id="bottom-color-cross">Bottom color cross</h4>
	<p>
		When all upper colors are solved and only the last layer needs to be solved, I turn the cube
		around. So the solved layers are on the bottom and I can see the unsolved face at the bottom.
		This is also the time where the harder to remember algorithms come into play. The bottom face
		should be a yellow cross, similar of how solving the cube started with the white cross. But
		right now, you don't have to care about the sides matching the center pieces of the sides. There
		is also no need to care about the corners yet.
	</p>
	<p>The first step is getting a cross on the bottom. There are a few possibilities now:</p>
	<ol>
		<li>There is a cross already</li>
		<li>There is no sides matching the center</li>
		<li>There is one side matching the center</li>
		<li>There are two sides matching the center</li>
		<li>There are three sides matching the center</li>
	</ol>

	<p>You can only solve a few of them into a real cross, using the following algorithm:</p>
	<div class="not-prose">
		<CodeBlock code="F U R U' R' F'" />
	</div>

	<h5>There is a cross already</h5>
	<p>
		Well, congratulations, this step is done. You can continue with <a
			href="#bottom-color-face-complete">completing the bottom face part</a
		>.
	</p>
	<h5>There is no side matching the center</h5>
	<p>
		Try the algorithm mentioned above a couple of times - maybe turn the cube in some way after
		doing an iteration. You should be able to end with a cross (TODO: Verify this!)
	</p>

	<h5>There is one side matching the center</h5>
	<p>
		If there is only one part of yellow next to the yellow center piece. I use the above algorithm
		to get at least to three parts of yellow next to the center. It makes it easier for me to solve
		the parity situation later.
	</p>

	<h5>There are two sides matching the center</h5>
	<p>
		In case of having two parts to the center in the correct direction, you don't have a harder to
		solve parity situation. I always forget where to start and how to solve it. But it's easy to do
		this algorithm above a couple of times, so I don't really care about remembering this too well.
		If it doesn't work out, turn the cube around the Y-axis, keeping the yellow center in its place.
	</p>

	<h5>There are three sides matching the center</h5>
	<p>
		This hints to a parity situation again. The parity can be solved here or later. I tend to do it
		at the very end of solving the cube.
	</p>

	<h4 id="bottom-color-face-complete">Bottom color face complete</h4>
	<p>TODO: Add necessary steps</p>

	<h4 id="bottom-corners-solved">Bottom corners solved</h4>
	<p>TODO: Add necessary steps</p>

	<h4 id="bottom-sides-solved-complete-cube">Bottom sides solved / complete cube</h4>
	<p>TODO: Add necessary steps</p>

	<h2>Rubiks 4x4</h2>
	<p>
		I like the genericness of the 4x4 cube as you can play it like a 3x3 and a 2x2, depending on how
		you scramble it. There are two extra steps and two parity situations, which in turn made me
		learn four more algorithms vs the 3x3.
	</p>

	<h3>Solution steps</h3>
	<ol>
		<li><a href="#correct-center-pieces">Correct center pieces</a></li>
		<li><a href="#correct-pairs-on-every-side">Correct pairs on every side</a></li>
		<li><a href="#solving-the-top-3-layers-like-a-3x3">Solving the top 3 layers like a 3x3</a></li>
		<li>Bottom color cross</li>
		<li>Parity situation "edge not facing correctly"</li>
		<li>Bottom color face complete</li>
		<li>Bottom corners solved</li>
		<li>Solving bottom sides</li>
		<li>Parity situation "sides mirrored"</li>
	</ol>

	<h4 id="correct-center-pieces">Correct center pieces</h4>
	<p>
		White is top, yellow is bottom, on the sides I remember red, then blue, then orange, then green
		(RBOG). Since the edges and corners are not really to necessary to look at yet, getting a color
		next to its center is usually one move towards it, then "save" it by turning the color and then
		do a backwards move to keep the previously solved centers intact. To not move an already
		correctly colored piece from the current center, the center can be turned before moving the
		color from somewhere else into it.
	</p>

	<h4 id="correct-pairs-on-every-side">Correct pairs on every side</h4>
	<p>
		This makes all edges on the sides be of the same colors. As long as there are still broken
		sides, the algorithm is to move the same colors on the same face but in different directions.
		For example, you can put red-green on the right of the face you're looking at (red on the face,
		green on the side). Let's say it's on the upper right of the two possible center pieces. On the
		left, get red-green to the lower left, with red on the side and green on the face. Turning the
		lower half of the cube to the right should give you a working red-green side. Now move this away
		by turning the face. As an example, turning it counter-clockwise will move it to the top. Then
		turn the top face to move it away, saving the solved part. Then a broken part should be where
		the red-green was before. Turn the face clockwise again and now turn the lower body of the cube
		back again. The center pieces should be correct again and the red-green side should be solved
		"somewhere". It's not necessary that these side pieces are in the correct places yet. They only
		need to be solved so we can continue with the 4x4 like a 3x3 later.
	</p>
	<p>
		When all sides are solved, there is a chance to a parity situation. Two sides are left broken
		with the same colors and they basically need to be switched. For me, I usually break one of the
		other sides intentionally then by using the same algorithm to solve them. When I have three
		broken parts, they can be moved in a way to solve all three.
	</p>
	<p>TODO: Write down the algorithm to do three at the same time 😅</p>

	<h4 id="solving-the-top-3-layers-like-a-3x3">Solving the top 3 layers like a 3x3</h4>
	<p>
		There are a few steps now that feel like solving the 3x3 again. In essence, the top color gets a
		cross with the center pieces on the side, the top face corners get solved and then the side
		edges get put in correctly.
	</p>
	<p>
		As soon as those are done and the bottom face needs to be solved. It may look a bit different
		than the 3x3, mainly you feel like you cannot solve the bottom cross, for example. This may
		happen if you experience one of the parity situations. You can still solve most of the cube like
		a 3x3, but you will see that some sides have switched places with each other.
	</p>

	<hr />

	<p>I need some place where I can put the note for the "degde" parity.</p>
	<div class="not-prose">
		<CodeBlock code="r U2 r U2 r' U2 r U2 l' U2 r U2 r' U2 l r2 U2 r'" />
	</div>
</ArticleLayout>
