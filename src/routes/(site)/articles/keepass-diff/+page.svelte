<script>
	import ArticleLayout from '$lib/common/PageLayout/ArticleLayout.svelte';
</script>

<ArticleLayout title="keepass-diff" lastUpdateOn="2024-01-25">
	<p>
		TL;DR: I've created a tool called <a href="https://keepass-diff.narigo.dev/" rel="external"
			>keepass-diff, to diff two Keepass databases (.kdbx) files</a
		>.
	</p>
	<h2>Motivation</h2>
	<p>
		The first real password manager I've used was Keepass. Sharing databases with others happened
		through OwnCloud / NextCloud instances and .kdbx files. When I started using it for my own
		passwords, I could sync my database with multiple devices in a similar fashion using NextCloud.
	</p>
	<p>
		At some point in time, you may forget closing the database on one machine and still use it to
		edit something on another. If that happens, NextCloud creates two files, showing that there is a
		conflict as it can't merge these encrypted files automatically. Since I don't really have to
		look in the directory all the time, it happened that I had conflicting files and didn't realize
		it until I forgot which passwords I've changed. With bigger databases, checking each individual
		password becomes a tedious and time consuming process.
	</p>
	<p>
		As I'm a software engineer, I figured out that I should probably write something that helps me
		with this task. And I wanted to check out the <a
			href="https://www.rust-lang.org/"
			rel="external">Rust programming language</a
		> for a while.
	</p>
	<h2>How does it work?</h2>
	<h2>Check it out</h2>
</ArticleLayout>
