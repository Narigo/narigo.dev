<script>
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import ArticleLayout from '$lib/common/PageLayout/ArticleLayout.svelte';
	import RubiksTopLayer from './RubiksTopLayer.svelte';
</script>

<ArticleLayout title="Rubiks Cubes" lastUpdateOn="2024-09-10">
	<p class="bg-opacity-40 bg-red-200 border border-solid border-red-300 p-4">
		This is still a work in progress.
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
	<p>
		Having the cross part done, only the corners are left to get the first row correct. As long as
		the top color is visible on the side, you need to check the other two colors to find on which
		corner it needs to be placed. The corners can only be on the eight corners of the cube and
		possibly facing in the wrong directions.
	</p>

	<p>
		If it's in the top row, rotate it a side down that moves it to the bottom, move the part away,
		rotate the face from before back. Here is an example:
	</p>
	<RubiksTopLayer
		top={[
			['_', 'w', '_'],
			['w', 'w', 'w'],
			['b', 'w', '_']
		]}
		left={[
			['_', 'r', 'w'],
			['_', 'r', '_'],
			['_', '_', '_']
		]}
		right={[
			['_', 'o', '_'],
			['_', 'o', '_'],
			['_', '_', '_']
		]}
		front={[
			['r', 'b', '_'],
			['_', 'b', '_'],
			['_', '_', '_']
		]}
		back={[
			['_', 'g', '_'],
			['_', 'g', '_'],
			['_', '_', '_']
		]}
	/>

	<p>Let's turn the cube so blue gets to the front.</p>
	<RubiksTopLayer
		top={[
			['r', 'b', '_'],
			['_', 'b', '_'],
			['_', '_', '_']
		]}
		left={[
			['w', '_', '_'],
			['r', 'r', '_'],
			['_', '_', '_']
		]}
		right={[
			['_', '_', '_'],
			['_', 'o', 'o'],
			['_', '_', '_']
		]}
		front={[
			['_', '_', '_'],
			['_', 'y', '_'],
			['_', '_', '_']
		]}
		back={[
			['_', 'w', 'b'],
			['w', 'w', 'w'],
			['_', 'w', '_']
		]}
	/>

	<p>Follow this algorithm to move the corner into the bottom row:</p>

	<div class="not-prose">
		<CodeBlock code="F' B F" />
	</div>

	<RubiksTopLayer
		top={[
			['_', 'b', '_'],
			['_', 'b', '_'],
			['b', '_', '_']
		]}
		left={[
			['_', '_', 'w'],
			['r', 'r', '_'],
			['_', '_', '_']
		]}
		right={[
			['_', '_', '_'],
			['_', 'o', 'o'],
			['_', '_', '_']
		]}
		front={[
			['r', '_', '_'],
			['_', 'y', '_'],
			['_', '_', '_']
		]}
		back={[
			['_', 'w', '_'],
			['w', 'w', 'w'],
			['_', 'w', '_']
		]}
	/>

	<p>Now, the part seems to be "gone". There are only two possible situations now.</p>

	<p>Once it's in the bottom, there are two possible situations:</p>
	<ul>
		<li>
			<a href="#top-color-bottom-row-facing-to-the-side"
				>Top color in the bottom row, facing to the side</a
			>
		</li>
		<li>
			<a href="#top-color-bottom-row-facing-down">Top color in the bottom row, facing down</a>
		</li>
	</ul>

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

	<RubiksTopLayer
		top={[
			['_', 'b', '_'],
			['_', 'b', '_'],
			['b', '_', '_']
		]}
		left={[
			['_', '_', 'w'],
			['r', 'r', '_'],
			['_', '_', '_']
		]}
		right={[
			['_', '_', '_'],
			['_', 'o', 'o'],
			['_', '_', '_']
		]}
		front={[
			['r', '_', '_'],
			['_', 'y', '_'],
			['_', '_', '_']
		]}
		back={[
			['_', 'w', '_'],
			['w', 'w', 'w'],
			['_', 'w', '_']
		]}
	/>
	<div class="not-prose">
		<CodeBlock code="B' F' B F" />
	</div>
	<RubiksTopLayer
		top={[
			['b', 'b', '_'],
			['_', 'b', '_'],
			['_', '_', '_']
		]}
		left={[
			['r', '_', '_'],
			['r', 'r', '_'],
			['_', '_', '_']
		]}
		right={[
			['_', '_', '_'],
			['_', 'o', 'o'],
			['_', '_', '_']
		]}
		front={[
			['_', '_', '_'],
			['_', 'y', '_'],
			['_', '_', '_']
		]}
		back={[
			['_', 'w', 'w'],
			['w', 'w', 'w'],
			['_', 'w', '_']
		]}
	/>

	<h5 id="top-color-bottom-row-facing-down">Top color in the bottom row, facing down</h5>
	<p>
		If you have some solved corners on the side, move the piece to the bottom corner where the top
		corner isn't solved yet. The safest place is the one where the corner belongs later. Rotate one
		of the sides so that the unsolved top corner will go to the place where the corner is that we
		want to make face sideways. Move the corner away from the side after the rotation. Rotate the
		side back up. This makes the corner facing <a href="#top-color-bottom-row-facing-to-the-side"
			>to the side in the bottom row and the previous step can be used to solve this situation</a
		>.
	</p>
	<RubiksTopLayer
		top={[
			['_', 'b', '_'],
			['_', 'b', '_'],
			['_', '_', 'b']
		]}
		left={[
			['_', '_', '_'],
			['r', 'r', '_'],
			['_', '_', '_']
		]}
		right={[
			['r', '_', '_'],
			['_', 'o', 'o'],
			['_', '_', '_']
		]}
		front={[
			['_', '_', 'w'],
			['_', 'y', '_'],
			['_', '_', '_']
		]}
		back={[
			['_', 'w', '_'],
			['w', 'w', 'w'],
			['_', 'w', '_']
		]}
	/>

	<p>
		We want to get it to the one facing to the side first, then solve it with the algorithm from
		above:
	</p>
	<div class="not-prose">
		<CodeBlock code="F B' F' B" />
	</div>

	<p>This will get to this again:</p>
	<RubiksTopLayer
		top={[
			['_', 'b', '_'],
			['_', 'b', '_'],
			['b', '_', '_']
		]}
		left={[
			['_', '_', 'w'],
			['r', 'r', '_'],
			['_', '_', '_']
		]}
		right={[
			['_', '_', '_'],
			['_', 'o', 'o'],
			['_', '_', '_']
		]}
		front={[
			['r', '_', '_'],
			['_', 'y', '_'],
			['_', '_', '_']
		]}
		back={[
			['_', 'w', '_'],
			['w', 'w', 'w'],
			['_', 'w', '_']
		]}
	/>
	<p>
		See <a href="#top-color-bottom-row-facing-to-the-side"
			>above solution for the top face, where the top color faces to the side in the bottom row</a
		>. The solution was to continue with this:
	</p>
	<div class="not-prose">
		<CodeBlock code="B' F' B F" />
	</div>

	<p>
		After all corners are put up correctly to the top, you should see a cube like the one below and
		be able to continue with the sides.
	</p>

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
			<a href="#there-are-two-sides-matching-the-center-3x3"
				>There are two sides matching the center</a
			>
		</li>
		<li>
			<a href="#there-are-no-sides-matching-the-center-3x3"
				>There are no sides matching the center</a
			>
		</li>
	</ol>
	<p>
		If you're missing the cases "There is one side matching the center" or "There are three sides
		matching the center", these can only happen on larger cubes, not the 3x3. See the solution for
		4x4, if you need to solve those. Let's look into the possible cases:
	</p>

	<section id="there-are-two-sides-matching-the-center-3x3">
		<h5>Two sides matching, opposite ones are solved</h5>
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
		<p>
			If there are two sides solved and they are on the opposite sides, it looks like a line. Turn
			the cube in a way that the line goes from the left to the right side. Then, you should get to
			the cross by using this algorithm:
		</p>
		<div class="not-prose">
			<CodeBlock code="F R U R' U' F'" />
		</div>

		<p>
			If you faced above situation, you can continue with solving from the bottom face cross and
			skip the following section.
		</p>

		<h5>Two sides matching, solved around a corner</h5>
		<p>
			Another variation could be that the two solved sides are around a corner. If there are two
			sides solved and they are around a corner. Turn the cube in a way that the left and the one to
			the top are in the bottom face color.
		</p>
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
		<p>In this situation, you can get to the cross by using this algorithm:</p>
		<div class="not-prose">
			<CodeBlock code="F U R U' R' F'" />
		</div>
	</section>

	<section id="there-are-no-sides-matching-the-center-3x3">
		<p>
			If all sides are in a different color than the bottom face, select one of the two algorithms
			for either the line or the corner situation and apply it once. You should end up with a corner
			or a line situation and then apply the appropriate one from the solutions above.
		</p>
	</section>

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
		doing an iteration. You should be able to end with a cross:
	</p>
	<div class="not-prose">
		<CodeBlock code="F U R U' R' F'" />
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
	<p>
		If you can find two corners which are solved (two corners on the same side have the same color),
		move them to the side where they should be. This solved side should be in the opposite direction
		of you looking at the cube. That means they should be on the back side of the cube. For example:
	</p>
	<RubiksTopLayer
		back={[
			['b', '_', 'b'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		left={[
			['r', '_', 'g'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
		top={[
			['y', 'y', 'y'],
			['y', 'y', 'y'],
			['y', 'y', 'y']
		]}
		right={[
			['g', '_', 'o'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		front={[
			['o', '_', 'r'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
	/>

	<p>The algorithm to solve the corners then is this:</p>

	<div class="not-prose">
		<CodeBlock code="L F' L B2 L' F L B2 L2 U" />
	</div>
	<p>This should let the cube end up with solved corners like this:</p>
	<RubiksTopLayer
		back={[
			['b', '_', 'b'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		left={[
			['r', '_', 'r'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
		top={[
			['y', 'y', 'y'],
			['y', 'y', 'y'],
			['y', 'y', 'y']
		]}
		right={[
			['o', '_', 'o'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		front={[
			['g', '_', 'g'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
	/>

	<h4 id="bottom-sides-solved-complete-cube">Bottom sides solved / complete cube</h4>
	<p>
		Now that all the corners and the bottom face is solved, there are only a few possibilities left:
	</p>
	<ul>
		<li>The cube is solved</li>
		<li>All sides are mixed up</li>
		<li>Three sides are mixed up</li>
	</ul>
	<p>
		If the cube is already solved: Congratulations, you're lucky! Usually one of the next steps is
		necessary though.
	</p>

	<h5 id="solve-all-sides-bottom-3x3">All sides are mixed up</h5>
	<p>
		Sometimes, all sides are mixed up. It doesn't really matter if you start with a clockwise or
		counter-clockwise algorithm then.
	</p>

	<RubiksTopLayer
		back={[
			['o', 'b', 'o'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		left={[
			['b', 'o', 'b'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		top={[
			['y', 'y', 'y'],
			['y', 'y', 'y'],
			['y', 'y', 'y']
		]}
		right={[
			['g', 'r', 'g'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
		front={[
			['r', 'g', 'r'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
	/>
	<p>
		As mentioned, the solution is going to use the three corner clockwise or counter-clockwise
		algorithm multiple times. It doesn't really matter which one is going to be used, so let's use
		the clockwise algorithm:
	</p>
	<div class="not-prose">
		<CodeBlock code="R U R' U R U2 R'" />
	</div>
	<p>It should result in this:</p>
	<RubiksTopLayer
		back={[
			['r', 'r', 'g'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		left={[
			['y', 'b', 'o'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		top={[
			['r', 'y', 'y'],
			['y', 'y', 'y'],
			['g', 'y', 'o']
		]}
		right={[
			['y', 'o', 'b'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
		front={[
			['y', 'g', 'b'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
	/>
	<p>
		Turn the cube clockwise to get to something that can be solved with the counter-clockwise three
		corner solution algorithm:
	</p>
	<RubiksTopLayer
		back={[
			['y', 'b', 'o'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		left={[
			['y', 'g', 'b'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
		top={[
			['g', 'y', 'r'],
			['y', 'y', 'y'],
			['o', 'y', 'y']
		]}
		right={[
			['r', 'r', 'g'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		front={[
			['y', 'o', 'b'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
	/>
	<p>Use the mentioned algorithm:</p>
	<div class="not-prose">
		<CodeBlock code="L U' L' U' L U2 L'" />
	</div>
	<RubiksTopLayer
		back={[
			['b', 'g', 'b'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		left={[
			['r', 'r', 'r'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
		top={[
			['y', 'y', 'y'],
			['y', 'y', 'y'],
			['y', 'y', 'y']
		]}
		right={[
			['o', 'b', 'o'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		front={[
			['g', 'o', 'g'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
	/>
	<p>Turn the cube again, so that the fully solved side (red in this example) is at the back:</p>
	<RubiksTopLayer
		back={[
			['r', 'r', 'r'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
		left={[
			['g', 'o', 'g'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
		top={[
			['y', 'y', 'y'],
			['y', 'y', 'y'],
			['y', 'y', 'y']
		]}
		right={[
			['b', 'g', 'b'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		front={[
			['o', 'b', 'o'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
	/>
	<p>Now it can be solved as described in the next chapter, solving the three remaining sides.</p>

	<h5 id="solve-three-sides-bottom-3x3">Three sides are mixed up</h5>
	<p>
		The cube may have one color solved, all others are mixed up. When they are mixed up, they can be
		in two ways: Clockwise or counter-clockwise.
	</p>
	<p>
		These situations can be solved by using the same algorithm to fix the three corners of the
		bottom face. Put the solved color to the back, then look at the front and see where the side
		needs to go. If it needs to go left (= clockwise), use the algorithm that starts from the right
		and moves the top layer clockwise in the second step. If it needs to go to the right (=
		counter-clockwise), use the other one.
	</p>
	<p>
		Let's put it into examples. The orange side is solved, the others are unsolved in the clockwise
		way:
	</p>
	<RubiksTopLayer
		back={[
			['o', 'o', 'o'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		left={[
			['b', 'g', 'b'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		top={[
			['y', 'y', 'y'],
			['y', 'y', 'y'],
			['y', 'y', 'y']
		]}
		right={[
			['g', 'r', 'g'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
		front={[
			['r', 'b', 'r'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
	/>
	<p>
		From this situation, I think of where I want to move the middle part in the front to. The blue
		at the top of the front (= red) face needs to go to the left side. Therefore I need to turn the
		upper part clockwise. Use the three corner clockwise algorithm step here first then:
	</p>
	<div class="not-prose">
		<CodeBlock code="R U R' U R U2 R'" />
	</div>
	<p>You should see:</p>
	<RubiksTopLayer
		back={[
			['r', 'r', 'g'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		left={[
			['y', 'o', 'o'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		top={[
			['r', 'y', 'y'],
			['y', 'y', 'y'],
			['g', 'y', 'o']
		]}
		right={[
			['y', 'g', 'b'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
		front={[
			['y', 'b', 'b'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
	/>
	<p>Turn the cube clockwise, so you see it like this:</p>
	<RubiksTopLayer
		back={[
			['y', 'o', 'o'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		left={[
			['y', 'b', 'b'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
		top={[
			['g', 'y', 'r'],
			['y', 'y', 'y'],
			['o', 'y', 'y']
		]}
		right={[
			['r', 'r', 'g'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		front={[
			['y', 'g', 'b'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
	/>
	<p>To solve the cube completely, use the three corner counter-clockwise algorithm:</p>
	<div class="not-prose">
		<CodeBlock code="L U' L' U' L U2 L'" />
	</div>

	<p>
		If the situation above didn't fit, it's probably the counter-clockwise variant. The orange side
		is solved, the others are unsolved in the counter-clockwise way:
	</p>
	<RubiksTopLayer
		back={[
			['o', 'o', 'o'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		left={[
			['b', 'r', 'b'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		top={[
			['y', 'y', 'y'],
			['y', 'y', 'y'],
			['y', 'y', 'y']
		]}
		right={[
			['g', 'b', 'g'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
		front={[
			['r', 'g', 'r'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
	/>
	<p>
		To solve this situation, three steps are necessary, but the used algorithms could be familiar to
		you as you may have used them previously already. Use the counter-clockwise "three corner solve"
		algorithm first, then turn the cube and then use the clockwise three corner solve. So step one:
	</p>
	<div class="not-prose">
		<CodeBlock code="L' U' L U' L' U2 L" />
	</div>
	<p>After this, you see the cube like this:</p>
	<RubiksTopLayer
		back={[
			['b', 'r', 'r'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		left={[
			['g', 'b', 'y'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
		top={[
			['y', 'y', 'r'],
			['y', 'y', 'y'],
			['o', 'y', 'b']
		]}
		right={[
			['o', 'o', 'y'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
		front={[
			['g', 'g', 'y'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
	/>
	<p>
		Turn the whole cube counter-clockwise (step 2), to be in this situation and solve it by using
		the clockwise algorithm:
	</p>
	<RubiksTopLayer
		back={[
			['o', 'o', 'y'],
			['g', 'g', 'g'],
			['g', 'g', 'g']
		]}
		left={[
			['b', 'r', 'r'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]}
		top={[
			['r', 'y', 'b'],
			['y', 'y', 'y'],
			['y', 'y', 'o']
		]}
		right={[
			['g', 'g', 'y'],
			['r', 'r', 'r'],
			['r', 'r', 'r']
		]}
		front={[
			['g', 'b', 'y'],
			['b', 'b', 'b'],
			['b', 'b', 'b']
		]}
	/>
	<p>To solve it, use the clockwise three corner solve algorithm again:</p>
	<div class="not-prose">
		<CodeBlock code="R U R' U R U2 R'" />
	</div>
	<p>Congratulations, the cube should be solved now!</p>

	<h2>Rubiks 4x4</h2>
	<p>
		I like the genericness of the 4x4 cube as you can play it like a 3x3 and a 2x2, depending on how
		you scramble it. There are two extra steps and two parity situations, which in turn made me
		learn four more algorithms vs the 3x3.
	</p>
	<p>Parity situations will be explained in the steps where they can occur.</p>

	<h3>Solution steps</h3>
	<ol>
		<li><a href="#correct-center-pieces">Correct center pieces</a></li>
		<li><a href="#correct-pairs-on-every-side">Correct pairs on every side</a></li>
		<li><a href="#solving-the-top-3-layers-like-a-3x3">Solving the top 3 layers like a 3x3</a></li>
		<li><a href="#bottom-color-cross-4x4">Bottom color cross</a></li>
		<li><a href="#bottom-color-face-complete-4x4">Bottom color face complete</a></li>
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

	<RubiksTopLayer
		back={[
			['_', 'y', 'b', '_'],
			['_', 'w', 'w', '_'],
			['_', 'w', 'w', '_'],
			['_', '_', '_', '_']
		]}
		top={[
			['_', 'r', 'o', '_'],
			['o', 'b', 'b', '_'],
			['b', 'b', 'b', '_'],
			['_', 'y', 'o', '_']
		]}
		left={[
			['_', 'g', 'r', '_'],
			['_', 'r', 'r', '_'],
			['_', 'r', 'r', '_'],
			['_', '_', '_', '_']
		]}
		right={[
			['_', '_', '_', '_'],
			['_', 'o', 'o', '_'],
			['_', 'o', 'o', '_'],
			['_', '_', '_', '_']
		]}
		front={[
			['_', 'o', 'g', '_'],
			['_', 'y', 'y', '_'],
			['_', 'y', 'y', '_'],
			['_', '_', '_', '_']
		]}
	/>

	<p>
		When having a situation like the above example, this algorithm should solve all three parts:
	</p>

	<div class="not-prose">
		<CodeBlock code="l' B L' B' l" />
	</div>

	<p>This ends up in this:</p>

	<RubiksTopLayer
		back={[
			['_', 'b', 'b', '_'],
			['_', 'w', 'w', '_'],
			['_', 'w', 'w', '_'],
			['_', '_', '_', '_']
		]}
		top={[
			['_', 'r', 'r', '_'],
			['y', 'b', 'b', '_'],
			['y', 'b', 'b', '_'],
			['_', 'o', 'o', '_']
		]}
		left={[
			['_', 'g', 'g', '_'],
			['_', 'r', 'r', '_'],
			['_', 'r', 'r', '_'],
			['_', '_', '_', '_']
		]}
		right={[
			['_', '_', '_', '_'],
			['_', 'o', 'o', '_'],
			['_', 'o', 'o', '_'],
			['_', '_', '_', '_']
		]}
		front={[
			['_', 'g', 'g', '_'],
			['_', 'y', 'y', '_'],
			['_', 'y', 'y', '_'],
			['_', '_', '_', '_']
		]}
	/>

	<p>A second possibility is this:</p>

	<RubiksTopLayer
		back={[
			['_', 'y', 'b', '_'],
			['_', 'w', 'w', '_'],
			['_', 'w', 'w', '_'],
			['_', '_', '_', '_']
		]}
		top={[
			['_', 'r', 'o', '_'],
			['b', 'b', 'b', '_'],
			['o', 'b', 'b', '_'],
			['_', 'y', 'o', '_']
		]}
		left={[
			['_', 'r', 'g', '_'],
			['_', 'r', 'r', '_'],
			['_', 'r', 'r', '_'],
			['_', '_', '_', '_']
		]}
		right={[
			['_', '_', '_', '_'],
			['_', 'o', 'o', '_'],
			['_', 'o', 'o', '_'],
			['_', '_', '_', '_']
		]}
		front={[
			['_', 'o', 'g', '_'],
			['_', 'y', 'y', '_'],
			['_', 'y', 'y', '_'],
			['_', '_', '_', '_']
		]}
	/>

	<p>Solving this situation is very similar to the one before.</p>

	<div class="not-prose">
		<CodeBlock code="Lw' U' L U l" />
	</div>

	<h4 id="solving-the-top-3-layers-like-a-3x3">Solving the top 3 layers like a 3x3</h4>
	<p>
		There are a few steps now that feel like solving the 3x3 again. In essence, the top color gets a
		cross with the center pieces on the side, the top face corners get solved and then the side
		edges get put in correctly.
	</p>
	<p>
		As mentioned before, the center piece on the top of the cube should be White. The center pieces
		on the sides are in this order: Red, Blue, Orange, Green. On the bottom, the center piece is
		Yellow.
	</p>
	<h5>Top cross</h5>
	<p>
		Look for the white side pieces. Move them to the side that matches the other color and make sure
		they fits together. For example like this:
	</p>
	<RubiksTopLayer
		back={[
			['_', '_', '_', '_'],
			['_', 'w', 'w', '_'],
			['_', 'w', 'w', '_'],
			['_', '_', '_', '_']
		]}
		top={[
			['_', '_', '_', '_'],
			['_', 'b', 'b', 'b'],
			['_', 'b', 'b', 'b'],
			['_', '_', '_', '_']
		]}
		left={[
			['_', '_', '_', '_'],
			['_', 'r', 'r', '_'],
			['_', 'r', 'r', '_'],
			['_', '_', '_', '_']
		]}
		right={[
			['_', 'w', 'w', '_'],
			['_', 'o', 'o', '_'],
			['_', 'o', 'o', '_'],
			['_', '_', '_', '_']
		]}
		front={[
			['_', '_', '_', '_'],
			['_', 'y', 'y', '_'],
			['_', 'y', 'y', '_'],
			['_', '_', '_', '_']
		]}
	/>
	<p>
		You can see, that rotating only the blue face now would lead to a solve. This won't mix up any
		other part of the cube - or at least none of the things we care about for now. One situation
		that could happen though is that the side is mixed up like the following, and have the one side
		solved already:
	</p>
	<RubiksTopLayer
		back={[
			['_', '_', '_', '_'],
			['w', 'w', 'w', '_'],
			['w', 'w', 'w', '_'],
			['_', '_', '_', '_']
		]}
		top={[
			['_', '_', '_', '_'],
			['_', 'b', 'b', 'w'],
			['_', 'b', 'b', 'w'],
			['_', '_', '_', '_']
		]}
		left={[
			['_', '_', '_', '_'],
			['_', 'r', 'r', '_'],
			['_', 'r', 'r', '_'],
			['_', '_', '_', '_']
		]}
		right={[
			['_', 'b', 'b', '_'],
			['_', 'o', 'o', 'o'],
			['_', 'o', 'o', 'o'],
			['_', '_', '_', '_']
		]}
		front={[
			['_', '_', '_', '_'],
			['_', 'y', 'y', '_'],
			['_', 'y', 'y', '_'],
			['_', '_', '_', '_']
		]}
	/>
	<p>
		Instead of using a very complicated and long algorithm that you will learn later to solve a
		special parity situation, there is an easier way to solve this situation. You need the help of
		the other side and use the bottom face to move it. The bottom face is something we don't yet
		care about. But rotating a side could lead to a solved part getting unsolved. So we need to turn
		that one back after moving our blue side in the bottom:
	</p>
	<div class="not-prose">
		<CodeBlock code="r' b' r" />
	</div>
	<p>
		This should result in two solved sides - solving blue and keeping the other part (orange-white
		in this example) intact:
	</p>
	<RubiksTopLayer
		back={[
			['_', 'w', 'w', '_'],
			['w', 'w', 'w', '_'],
			['w', 'w', 'w', '_'],
			['_', '_', '_', '_']
		]}
		top={[
			['_', 'b', 'b', '_'],
			['_', 'b', 'b', '_'],
			['_', 'b', 'b', '_'],
			['_', '_', '_', '_']
		]}
		left={[
			['_', '_', '_', '_'],
			['_', 'r', 'r', '_'],
			['_', 'r', 'r', '_'],
			['_', '_', '_', '_']
		]}
		right={[
			['_', '_', '_', '_'],
			['_', 'o', 'o', 'o'],
			['_', 'o', 'o', 'o'],
			['_', '_', '_', '_']
		]}
		front={[
			['_', '_', '_', '_'],
			['_', 'y', 'y', '_'],
			['_', 'y', 'y', '_'],
			['_', '_', '_', '_']
		]}
	/>

	<p>
		If you see white with a color on the side next to the yellow face, move it to the face you're
		trying to solve (blue, in the examples above). Then, a single rotation of that face will either
		move it correctly to white or you can move it to the side as per above example and solve it in
		the same way.
	</p>

	<p>Do these steps for all sides until you see the cross like this:</p>

	<RubiksTopLayer
		back={[
			['_', 'g', 'g', '_'],
			['_', 'g', 'g', '_'],
			['_', 'g', 'g', '_'],
			['_', '_', '_', '_']
		]}
		top={[
			['_', 'w', 'w', '_'],
			['w', 'w', 'w', 'w'],
			['w', 'w', 'w', 'w'],
			['_', 'w', 'w', '_']
		]}
		left={[
			['_', 'r', 'r', '_'],
			['_', 'r', 'r', '_'],
			['_', 'r', 'r', '_'],
			['_', '_', '_', '_']
		]}
		right={[
			['_', 'o', 'o', '_'],
			['_', 'o', 'o', '_'],
			['_', 'o', 'o', '_'],
			['_', '_', '_', '_']
		]}
		front={[
			['_', 'b', 'b', '_'],
			['_', 'b', 'b', '_'],
			['_', 'b', 'b', '_'],
			['_', '_', '_', '_']
		]}
	/>

	<h5>Solve top layer corners</h5>
	<p>
		This is exactly like <a href="#solve-top-color-and-corners"
			>the 3x3 solution for the top corners</a
		>. If you have a white corner in the top layer but facing to a side instead of the top, move it
		down to the bottom layer, move it away, restore the cross. Afterwards, there are two options:
		White on the bottom or white on the side.
	</p>
	<p>
		If white faces towards the bottom: Turn the front so that white stays on the front part, move it
		away from the front face, turn the front face back. The white part should then be on the side.
	</p>
	<p>
		When white is on the side, move it where it needs to go. Move it away from the part to turn,
		move the front, move the white part back to the front, move the front back. See the 3x3 solution
		for examples.
	</p>

	<h5>Solve second and third layer</h5>
	<p>After finishing the top layer corners, the cube should look like this:</p>
	<RubiksTopLayer
		back={[
			['g', 'g', 'g', 'g'],
			['_', 'g', 'g', '_'],
			['_', 'g', 'g', '_'],
			['_', '_', '_', '_']
		]}
		top={[
			['w', 'w', 'w', 'w'],
			['w', 'w', 'w', 'w'],
			['w', 'w', 'w', 'w'],
			['w', 'w', 'w', 'w']
		]}
		left={[
			['r', 'r', 'r', 'r'],
			['_', 'r', 'r', '_'],
			['_', 'r', 'r', '_'],
			['_', '_', '_', '_']
		]}
		right={[
			['o', 'o', 'o', 'o'],
			['_', 'o', 'o', '_'],
			['_', 'o', 'o', '_'],
			['_', '_', '_', '_']
		]}
		front={[
			['b', 'b', 'b', 'b'],
			['_', 'b', 'b', '_'],
			['_', 'b', 'b', '_'],
			['_', '_', '_', '_']
		]}
	/>

	<p>TODO solve second and third layer</p>

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

	<h4 id="bottom-color-face-complete-4x4">Completing the bottom color face (4x4)</h4>

	<p>
		This is very similar to the 3x3 solution. Use the same algorithms to solve the corners first,
		then check if there is an additional parity situation (mirrored side colors).
	</p>
	<p>TODO show same algorithms and examples as with the 3x3 with the 4x4</p>

	<h4>Last layer corner correction</h4>
	<p>This is the same as for the 3x3. Use the algorithm to exchange two corners.</p>

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

	<h5>Parity situation: Side colors mirrored over corner</h5>

	<p>Similar to the one before, the parity situation could happen around a corner, like this:</p>

	<RubiksTopLayer
		back={[
			['r', 'r', 'r', 'r'],
			['r', 'r', 'r', 'r'],
			['r', 'r', 'r', 'r'],
			['r', 'r', 'r', 'r']
		]}
		top={[
			['y', 'y', 'y', 'y'],
			['y', 'y', 'y', 'y'],
			['y', 'y', 'y', 'y'],
			['y', 'y', 'y', 'y']
		]}
		left={[
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g']
		]}
		right={[
			['b', 'o', 'o', 'b'],
			['b', 'b', 'b', 'b'],
			['b', 'b', 'b', 'b'],
			['b', 'b', 'b', 'b']
		]}
		front={[
			['o', 'b', 'b', 'o'],
			['o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o']
		]}
	/>
	<p>
		In this case, I first roll the cube so that the top goes to the back. The cube should look like
		this then:
	</p>
	<RubiksTopLayer
		back={[
			['y', 'y', 'y', 'y'],
			['y', 'y', 'y', 'y'],
			['y', 'y', 'y', 'y'],
			['y', 'y', 'y', 'y']
		]}
		top={[
			['o', 'b', 'b', 'o'],
			['o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o'],
			['o', 'o', 'o', 'o']
		]}
		left={[
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g'],
			['g', 'g', 'g', 'g']
		]}
		right={[
			['b', 'b', 'b', 'b'],
			['b', 'b', 'b', 'o'],
			['b', 'b', 'b', 'o'],
			['b', 'b', 'b', 'b']
		]}
		front={[
			['w', 'w', 'w', 'w'],
			['w', 'w', 'w', 'w'],
			['w', 'w', 'w', 'w'],
			['w', 'w', 'w', 'w']
		]}
	/>
	<p>
		Now it's two extra steps before and after the algorithm for the opposing sides: Move the face on
		the right to the top at the side facing to you, do the algorithm, then move it back. The full
		algorithm is then:
	</p>
	<div class="not-prose">
		<CodeBlock code="r2 f' r2 U2 r2 Uw2 r2 u2 f r2" />
	</div>
</ArticleLayout>
