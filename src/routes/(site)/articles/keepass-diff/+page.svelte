<script lang="ts">
	import Code from '$lib/common/Code.svelte';
	import ArticleLayout from '$lib/common/PageLayout/ArticleLayout.svelte';
	import screencast from './keepass-diff-screencast.gif';
</script>

<ArticleLayout title="keepass-diff" lastUpdateOn="2024-01-25">
	<p>
		TL;DR: I've created a tool called <a href="https://keepass-diff.narigo.dev/" rel="external"
			>keepass-diff, to diff two Keepass databases (.kdbx) files</a
		>.
	</p>

	<h2>Motivation</h2>
	<p>
		The first real password manager I've used was <a
			href="https://keepass.info/"
			rel="external noopener noreferrer">KeePass</a
		>. Sharing databases with others happened through
		<a href="https://owncloud.com/" rel="external noopener noreferrer">OwnCloud</a>
		/ <a href="https://nextcloud.com/" rel="external noopener noreferrer">NextCloud</a> instances and
		.kdbx files. When I started using it for my own passwords, I could sync my database with multiple
		devices in a similar fashion using NextCloud.
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
		wanted to check out the <a href="https://www.rust-lang.org/" rel="external noopener noreferrer"
			>Rust programming language</a
		> for a while. What a great excuse to learn something new!
	</p>

	<h2>How does it work?</h2>
	<p>
		Leveraging the <a
			href="https://github.com/sseemayer/keepass-rs/"
			rel="external noopener noreferrer">underlying keepass-rs library</a
		>, it reads two files and asks for their passwords. It checks for differences and shows them as
		output. Here is a short screencast I've recorded a while ago and put on the
		<a href="https://keepass-diff.narigo.dev/" rel="external noopener noreferrer"
			>keepass-diff documentation page</a
		>:
	</p>
	<img src={screencast} alt="Screencast of how keepass-diff is being used" />

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
	<p>
		The current end-to-end tests are pretty slow as well. Using snapshot testing is always a bit
		tricky and while the current setup works, I'm pretty sure this workflow could be improved. I
		suspect there are test runners for Rust that may help here.
	</p>

	<h3>Overall code quality</h3>
	<p>
		When I started this project, there were no contributors and I didn't know anyone using Rust who
		I could ask for reviews. I even put an invite in the README.md file to give me feedback on the
		code. Since the inception of the project, there have been a few contributions that helped
		improve the code and made me aware of how things could be done differently. They mainly allowed
		everyone to better understand the intention of something and didn't hide it in weird conversions
		because I didn't know how to implement something and tested various ways until I found one that
		worked.
	</p>

	<h2>Check it out</h2>
	<p>
		The source code is available on <a href="https://github.com/Narigo/keepass-diff" rel="external"
			>github.com/Narigo/keepass-diff/</a
		>.
	</p>
</ArticleLayout>
