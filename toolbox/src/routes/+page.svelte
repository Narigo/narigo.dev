<script lang="ts">
	import { base } from '$app/paths';
	import * as m from '$lib/paraglide/messages';
</script>

<h1>Online-Toolbox</h1>
<p>{m.placeholderFilter()}</p>

<a href="{base}/base64">
	<section class="grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))]">
		<div class="relative min-h-52 overflow-clip bg-purple-600 p-4 text-white">
			<h2 class="text-4xl">Base64 Encoding</h2>
			<p>{m.toolsBase64description()}</p>
			<span
				class="absolute -right-1 -bottom-1 text-8xl font-bold text-black opacity-15"
				aria-label="Category: Strings">{m.toolsCategoryStrings()}</span
			>
		</div>
	</section>
</a>

<h1>Toolbox</h1>
<p>
	I use a lot of online tools myself and thanks to ads and cookie banners, the experience is not
	really that great. So I thought I'm going to build a couple of tools myself whenever I have time
	and see what I can do. Maybe even have some webassembly tools like image converter or similar
	things. Tools that could be used offline as well. Let's see where this goes.
</p>
<p>For now, I want to build:</p>
<ul>
	<li>Base64 encoder / decoder</li>
	<li>URL encoder / decoder</li>
	<li>JWT extractor</li>
</ul>
<p>
	Oh, and I'm going to try out this localisation that was added by <code>sv create</code>:
	ParaglideJS.
</p>
