<script>
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<p class="info">
		Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.
	</p>

	<h2>Pocuter One</h2>
	<p>
		The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.
	</p>
	<p>
		While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.
	</p>
	<p>
		If you haven't checked out the <a href="https://pocuter.com/docs/pocuter-one" rel="external"
			>documentation of the Pocuter One</a
		>, it's definitely something to look at first.
	</p>

	<h3>WatchKit assembly</h3>
	<p>There are a few things that need to be done:</p>
	<ol>
		<li>Solder a battery to the chip</li>
		<li>Assemble the watch itself</li>
		<li>Add apps on the watch</li>
	</ol>
	<h4>Soldering the battery</h4>
	<p>
		The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the <code>+</code> and <code>-</code> symbols on the chip. So my
		first research was about whether the red or the black cable is <code>+</code> or <code>-</code>.
	</p>
	<p>
		When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.
	</p>
	<p>
		Long story short, in <a
			href="https://discord.com/channels/762688795035697182/762688795035697186"
			rel="external">the Pocuter Discord</a
		>, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the <code>+</code> pole and the black cable to the <code>-</code> pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.
	</p>
</PageLayout>

<style>
	.info {
		background: #f002;
		border: 1px solid #f00b;
		padding: 1em;
	}
</style>
