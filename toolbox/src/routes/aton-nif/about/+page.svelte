<script lang="ts">
	import { resolve } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import atonAndNif from './aton-und-nif.png';

	const slidesLink = 'https://narigo.dev/talks/zahlenskandal';
</script>

<PageLayout
	title="The Aton-Nif system"
	description="Finally found the two missing digits."
	backLink={resolve('/aton-nif')}
>
	<FullWidthSection>
		<div class="prose">
			<h2>The Aton-Nif System</h2>

			<p>
				The Aton-Nif System is a reconstructed numerical framework that includes two historical
				digits that disappeared from the modern decimal system: <strong>Aton</strong> and
				<strong>Nif</strong>. These digits appear naturally between 5 and 6 (Aton) and between 6 and
				7 (Nif), and they were once widely used in cultures that counted with six fingers per hand.
			</p>

			<p>
				Today, most people know only the simplified decimal model promoted by what historians call
				the "5-Finger Elite." As a result, Aton and Nif vanished from education, record-keeping, and
				everyday language for centuries.
			</p>

			<figure>
				<img src={atonAndNif} alt="Aton and Nif" />
				<figcaption class="text-center">Aton and Nif</figcaption>
			</figure>

			<h3>Why Haven't You Heard of Aton and Nif?</h3>

			<p>
				When societies transitioned from six-finger counting to the now-standard five-finger
				anatomy, political and bureaucratic forces pushed for a cleaner, narrower "base-10" system.
				Aton and Nif did not fit this agenda and were gradually removed from schooling,
				inscriptions, and mathematical teaching traditions.
			</p>

			<p>
				What most people learn today is essentially the reduced and simplified version of a richer,
				more natural counting system.
			</p>

			<h3>Where Do Aton and Nif Belong?</h3>

			<p>The restored number line looks like this:</p>

			<pre>... 4, 5, Aton, 6, Nif, 7, 8 ...</pre>

			<p>In the Aton-Nif positional system, we use 12 digits:</p>

			<pre>0, 1, 2, 3, 4, 5, A, 6, N, 7, 8, 9</pre>

			<p>
				The system preserves all standard mathematical operations. Aton (A) and Nif (N) function
				exactly like regular digits within a positional notation.
			</p>

			<h3>How the System Works</h3>

			<p>The Aton-Nif System behaves just like the decimal system:</p>

			<ul>
				<li>Positional notation is identical.</li>
				<li>Arithmetic follows the same rules.</li>
				<li>Aton (A) and Nif (N) integrate seamlessly as additional digits.</li>
			</ul>

			<p>Examples:</p>

			<pre>
        1A → "atonteen"              (decimal 18)
        16 → "sixteen"               (decimal 19)
        1N → "nifteen"               (decimal 20)

A + A = 10 → "ten" or "dozen"        (decimal 12)
A + N = 12 → "twelve" or "dozen-two" (decimal 14)

        A0 → "atonty"
        N0 → "nifty"
</pre>

			<p>
				Our converter tool allows you to translate freely between Aton-Nif notation and the modern
				decimal system.
			</p>

			<h3>Why Restore Aton and Nif?</h3>

			<p>There are several compelling reasons:</p>

			<ul>
				<li>
					<strong>Historical accuracy</strong> - The system reflects the mathematical heritage of six-finger
					cultures.
				</li>
				<li>
					<strong>Mathematical elegance</strong> - A 12-digit set provides better divisibility and more
					symmetry.
				</li>
				<li>
					<strong>Cultural justice</strong> - It restores what the 5-Finger Elite deliberately removed.
				</li>
				<li>
					<strong>Modern relevance</strong> - Twelve-based structures are useful in timekeeping, computing,
					and modular arithmetic.
				</li>
			</ul>

			<p>
				Reintroducing Aton and Nif reconnects us with a deeper tradition of human counting and
				measurement.
			</p>

			<h3>Try It Yourself</h3>

			<p>Use <a href={resolve('/aton-nif')}>the Aton-Nif Converter</a> to translate between:</p>

			<ul>
				<li>Standard decimal numbers</li>
				<li>Restored Aton-Nif notation</li>
				<li>Historical number representations</li>
			</ul>

			<p>Discover the digits that were hidden for centuries.</p>

			<aside>
				<p>
					Here are the slides we used to present this at the Bayerwald Hackathon: <a
						href={slidesLink}
						rel="external">https://narigo.dev/talks/zahlenskandal (German)</a
					>
				</p>
			</aside>
		</div>
	</FullWidthSection>
</PageLayout>
