<script>
	import Code from '$lib/common/Code.svelte';
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
		The first real password manager I've used was <a href="https://keepass.info/" rel="external"
			>KeePass</a
		>. Sharing databases with others happened through
		<a href="https://owncloud.com/" rel="external"> OwnCloud</a>
		/ <a href="https://nextcloud.com/" rel="external">NextCloud</a> instances and .kdbx files. When I
		started using it for my own passwords, I could sync my database with multiple devices in a similar
		fashion using NextCloud.
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
		As I'm a software engineer, I wanted to write something that helps me with this task. And I
		wanted to check out the <a href="https://www.rust-lang.org/" rel="external"
			>Rust programming language</a
		> for a while. What a great excuse to learn something new!
	</p>

	<h2>How does it work?</h2>
	<p></p>

	<h2>Roadmap</h2>
	<p>There are a couple of open points I want to work on.</p>

	<h3>Automated releases</h3>
	<p>
		In the beginning, I thought it's good to let people read the code and have to install the tool
		manually through <Code>cargo install</Code>. I didn't want people to use this on their secrets
		without knowing what it does. So to be able to use this, you did have to check out the code
		first.
	</p>
	<p>
		My opinion on this changed, after receiving feedback from users who desperately needed a tool
		like this but weren't able to use it. Having to install Rust first, getting everything to run on
		their device is not really straight forward if you have never done this. I understand that
		people may not have time for this. And before having those rely on someone else to build a
		version for them and let them download a binary from some other, unofficial site which may
		contain something else... it's probably better to provide an official release for the various
		platforms.
	</p>
	<p>Creating releases could be handled automatically through GitHub actions.</p>

	<h3>Improve testing</h3>
	<p>
		Currently, there are a few end-to-end tests by checking the output of commands. The only real
		unit tests are written for a custom Stack implementation. That implementation can probably be
		switched out by using some built-in Rust data structure that I didn't know about.
	</p>
	<p>
		I think there could be unit tests for the diff algorithm containing all relevant information
		that shows up in the representation in the end, like intendation and whether it's left or right
		side.
	</p>

	<h2>Check it out</h2>
	<p>
		The source code is available on <a href="https://github.com/Narigo/keepass-diff" rel="external"
			>github.com/Narigo/keepass-diff/</a
		>.
	</p>
</ArticleLayout>
