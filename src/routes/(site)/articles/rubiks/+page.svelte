<script>
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import ArticleLayout from '$lib/common/PageLayout/ArticleLayout.svelte';
	import RubiksTopLayer from './RubiksTopLayer.svelte';
</script>

<ArticleLayout title="Rubiks Cubes" lastUpdateOn="2024-08-02">
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
	<RubiksTopLayer
		top={[
			['_', 'w', '_'],
			['w', 'w', 'w'],
			['_', 'w', '_']
		]}
		left={[
			['_', 'r', '_'],
			['_', 'r', '_'],
			['_', '_', '_']
		]}
		right={[
			['_', 'o', '_'],
			['_', 'o', '_'],
			['_', '_', '_']
		]}
		front={[
			['_', 'b', '_'],
			['_', 'b', '_'],
			['_', '_', '_']
		]}
		back={[
			['_', 'g', '_'],
			['_', 'g', '_'],
			['_', '_', '_']
		]}
	/>
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
	<RubiksTopLayer
		top={[
			['w', 'w', 'w'],
			['w', 'w', 'w'],
			['w', 'w', 'w']
		]}
		left={[
			['r', 'r', 'r'],
			['_', 'r', '_'],
			['_', '_', '_']
		]}
		right={[
			['o', 'o', 'o'],
			['_', 'o', '_'],
			['_', '_', '_']
		]}
		front={[
			['b', 'b', 'b'],
			['_', 'b', '_'],
			['_', '_', '_']
		]}
		back={[
			['g', 'g', 'g'],
			['_', 'g', '_'],
			['_', '_', '_']
		]}
	/>
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
		<li><a href="#there-is-a-cross-already-3x3">There is a cross already</a></li>
		<li>
			<a href="#there-are-no-sides-matching-the-center-3x3"
				>There are no sides matching the center</a
			>
		</li>
		<li>(4x4 only!)</li>
		<li>
			<a href="#there-are-two-sides-matching-the-center-3x3"
				>There are two sides matching the center</a
			>
		</li>
	</ol>
	<p>
		If you're missing the cases "There is one side matching the center" or "There are three sides
		matching the center", these can only happen on larger cubes, not the 3x3. See the solution for
		4x4, if you're trying to solve this.
	</p>

	<p>You can only solve a few of them into a real cross, using the following algorithm:</p>
	<div class="not-prose">
		<CodeBlock code="F U R U' R' F'" />
	</div>

	<h5 id="there-is-a-cross-already-3x3">There is a cross already</h5>
	<RubiksTopLayer
		back={[
			['_', 'r', '_'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
		top={[
			['_', 'y', '_'],
			['y', 'y', 'y'],
			['_', 'y', '_']
		]}
		left={[
			['_', 'b', '_'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		right={[
			['_', 'g', '_'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
		front={[
			['_', 'o', '_'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
	/>
	<p>
		Well, congratulations, this step is done. You can continue with <a
			href="#bottom-color-face-complete">completing the bottom face part</a
		>.
	</p>
	<h5 id="there-are-no-sides-matching-the-center-3x3">There are no sides matching the center</h5>
	<RubiksTopLayer
		back={[
			['_', 'y', '_'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
		top={[
			['_', '_', '_'],
			['_', 'y', '_'],
			['_', '_', '_']
		]}
		left={[
			['_', 'y', '_'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		right={[
			['_', 'y', '_'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
		front={[
			['_', 'y', '_'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
	/>
	<p>
		Try the algorithm mentioned above a couple of times - maybe turn the cube in some way after
		doing an iteration. You should be able to end with a cross (TODO: Verify this!)
	</p>

	<h5 id="there-are-two-sides-matching-the-center-3x3">There are two sides matching the center</h5>
	<div class="flex flex-row place-items-center">
		<RubiksTopLayer
			back={[
				['_', '_', '_'],
				['r', 'r', 'r'],
				['r', 'r', 'r']
			]}
			top={[
				['_', 'y', '_'],
				['y', 'y', '_'],
				['_', '_', '_']
			]}
			left={[
				['_', '_', '_'],
				['b', 'b', 'b'],
				['b', 'b', 'b']
			]}
			right={[
				['_', 'y', '_'],
				['g', 'g', 'g'],
				['g', 'g', 'g']
			]}
			front={[
				['_', 'y', '_'],
				['o', 'o', 'o'],
				['o', 'o', 'o']
			]}
		/>
		<div>or</div>
		<RubiksTopLayer
			back={[
				['_', 'y', '_'],
				['r', 'r', 'r'],
				['r', 'r', 'r']
			]}
			top={[
				['_', '_', '_'],
				['y', 'y', 'y'],
				['_', '_', '_']
			]}
			left={[
				['_', '_', '_'],
				['b', 'b', 'b'],
				['b', 'b', 'b']
			]}
			right={[
				['_', '_', '_'],
				['g', 'g', 'g'],
				['g', 'g', 'g']
			]}
			front={[
				['_', 'y', '_'],
				['o', 'o', 'o'],
				['o', 'o', 'o']
			]}
		/>
	</div>
	<p>
		I always forgot where to start and how to solve it with which of the two algorithms. If you
		happen to remember just one of the following algorithms, it's fine: Apply it multiple times and
		it will end up correctly eventually. Both are very similar and I was happy to find out that I
		couldn't really destroy my progress using the wrong one.
	</p>
	<p>
		To solve the first situation (top and left sides are correct, right and bottom sides are not
		yellow), use this algorithm:
	</p>
	<div class="not-prose">
		<CodeBlock code="F U R U' R' F'" />
	</div>

	<p>
		For the horizontal bar (left and right sides are correct, top and bottom sides are not yellow),
		use this one:
	</p>
	<div class="not-prose">
		<CodeBlock code="F R U R' U' F'" />
	</div>

	<h4 id="bottom-color-face-complete">Bottom color face complete</h4>
	<p>
		There are multiple ways the corners may look like. Using the following algorithm means putting
		the front face of the front-right corner to the top face of the back-right corner. There are
		three corners moving whih the algorithm. It won't touch the front left corner. The corners that
		are touched are being rotated clockwise.
	</p>
	<div class="not-prose">
		<CodeBlock code="R U R' U R U2 R'" />
	</div>

	<p>In essence, this will make a cube like this:</p>
	<RubiksTopLayer
		back={[
			['_', '_', 'y'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		left={[
			['_', '_', '_'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
		top={[
			['_', 'y', '_'],
			['y', 'y', 'y'],
			['y', 'y', '_']
		]}
		right={[
			['_', '_', 'y'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		front={[
			['_', '_', 'y'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
	/>

	<p>...turn into this:</p>
	<RubiksTopLayer
		back={[
			['_', '_', '_'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		left={[
			['_', '_', '_'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
		top={[
			['y', 'y', 'y'],
			['y', 'y', 'y'],
			['y', 'y', 'y']
		]}
		right={[
			['_', '_', '_'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		front={[
			['_', '_', '_'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
	/>

	<p>
		If the starting point is not 3 corners needing a rotation, apply the algorithm multiple times
		and turn the cube as necessary to get into a position that changes it to the 3 corners needing
		to be solved with a clockwise rotation. There is a mirrored version of the algorithm as well,
		essentially starting from the front-left, not touching the front-right corner and changing
		front-left, back-left and back-right corners counter clockwise:
	</p>
	<div class="not-prose">
		<CodeBlock code="L U L' U L U2 L'" />
	</div>

	<p>With these two algorithms, all corner situations should be resolvable.</p>

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
		<li><a href="#bottom-color-cross-4x4">Bottom color cross</a></li>
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

	<h5 id="bottom-color-cross-4x4">Bottom color cross (4x4)</h5>
	<p>
		There can be a special case for the 4x4 though: If there happens to be only one or three parts
		of the bottom color showing from the center to the sides, there is a parity situation. In this
		situation, you cannot solve the bottom cross. I usually solve the cube as far as I can before
		solving this parity situation at the very end. From a cube with only one side connected, you can
		get to the one with three sides by using the same algorithm to get to the cross on the 3x3:
	</p>

	<div class="not-prose">
		<CodeBlock code="F U R U' R' F'" />
	</div>

	<p>To get from this:</p>
	<RubiksTopLayer
		back={[
			['_', 'y', 'y', '_'],
			['r', 'r', 'r', 'r'],
			['r', 'r', 'r', 'r'],
			['r', 'r', 'r', 'r']
		]}
		top={[
			['_', '_', '_', '_'],
			['y', 'y', 'y', '_'],
			['y', 'y', 'y', '_'],
			['_', '_', '_', '_']
		]}
		left={[
			['_', '_', '_', '_'],
			['b', 'b', 'b', 'b'],
			['b', 'b', 'b', 'b'],
			['b', 'b', 'b', 'b']
		]}
		right={[
			['_', 'y', 'y', '_'],
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g']
		]}
		front={[
			['_', 'y', 'y', '_'],
			['o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o']
		]}
	/>

	<p>To this:</p>
	<RubiksTopLayer
		back={[
			['_', '_', '_', '_'],
			['r', 'r', 'r', 'r'],
			['r', 'r', 'r', 'r'],
			['r', 'r', 'r', 'r']
		]}
		top={[
			['_', 'y', 'y', '_'],
			['y', 'y', 'y', 'y'],
			['y', 'y', 'y', 'y'],
			['_', '_', '_', '_']
		]}
		left={[
			['_', '_', '_', '_'],
			['b', 'b', 'b', 'b'],
			['b', 'b', 'b', 'b'],
			['b', 'b', 'b', 'b']
		]}
		right={[
			['_', '_', '_', '_'],
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g']
		]}
		front={[
			['_', 'y', 'y', '_'],
			['o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o']
		]}
	/>

	<p>
		You can solve the yellow part with the following algorithm right away, but I try to get
		everything else solved first and pretend that it's solved usually. Since the algorithm to solve
		this parity situation is - at least for me - hard to remember, I try to remember the patterns
		during the steps. This allows me to recognize potential mistakes on my end easier. Doing a
		mistake during this algorithm can end up having to solve the whole cube again, so I'm trying my
		best to avoid them by solving everything else first.
	</p>

	<p>
		Anyways, even though I'm usually not solving this situation right now, it's easier to do it now
		to be able to solve the rest like the 3x3 again. So put the side to the front where the yellow
		part is incorrect and follow the following algorithm:
	</p>

	<div class="not-prose">
		<CodeBlock code="r U2 r U2 r' U2 r U2 l' U2 r U2 r' U2 l r2 U2 r'" />
	</div>

	<p>This should create the full bottom cross again:</p>

	<RubiksTopLayer
		back={[
			['_', '_', '_', '_'],
			['r', 'r', 'r', 'r'],
			['r', 'r', 'r', 'r'],
			['r', 'r', 'r', 'r']
		]}
		top={[
			['_', 'y', 'y', '_'],
			['y', 'y', 'y', 'y'],
			['y', 'y', 'y', 'y'],
			['_', 'y', 'y', '_']
		]}
		left={[
			['_', '_', '_', '_'],
			['b', 'b', 'b', 'b'],
			['b', 'b', 'b', 'b'],
			['b', 'b', 'b', 'b']
		]}
		right={[
			['_', '_', '_', '_'],
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g']
		]}
		front={[
			['_', '_', '_', '_'],
			['o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o']
		]}
	/>

	<h5>Parity situation: Mirrored side colors</h5>

	<p>To mirror the two sides in a situation like the following:</p>

	<RubiksTopLayer
		back={[
			['g', 'b', 'b', 'g'],
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g']
		]}
		top={[
			['y', 'y', 'y', 'y'],
			['y', 'y', 'y', 'y'],
			['y', 'y', 'y', 'y'],
			['y', 'y', 'y', 'y']
		]}
		left={[
			['r', 'r', 'r', 'r'],
			['r', 'r', 'r', 'r'],
			['r', 'r', 'r', 'r'],
			['r', 'r', 'r', 'r']
		]}
		right={[
			['o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o']
		]}
		front={[
			['b', 'g', 'g', 'b'],
			['b', 'b', 'b', 'b'],
			['b', 'b', 'b', 'b'],
			['b', 'b', 'b', 'b']
		]}
	/>
	<p>You can solve it by using this algorithm:</p>
	<div class="not-prose">
		<CodeBlock code="r2 U2 r2 Uw2 r2 u2" />
	</div>
</ArticleLayout>
