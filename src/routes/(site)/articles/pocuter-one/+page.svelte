<script>
	import Code from '$lib/common/Code.svelte';
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import ArticleLayout from '$lib/common/PageLayout/ArticleLayout.svelte';
	import boardsManager from './boards-manager.png';

	const appDir = `apps/
     1/
          esp32c3.app
     2/
          esp32c3.app
     3/
          esp32c3.app
     4/
          esp32c3.app
     ...
config/      (optionally)
     1/
          settings.ini
          TIME.ini
          WIFI.ini
     2/      (these folders can be empty)
     3/
     ...`;
</script>

<ArticleLayout
	title="Pocuter One"
	description="My experiences with the Pocuter One and all the things I learnt along the way."
	lastUpdateOn="2023-06-01"
>
	<p class="bg-opacity-40 bg-red-200 border border-solid border-red-300 p-4">
		Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.
	</p>
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

	<h2>WatchKit assembly</h2>
	<p>There are a few things that need to be done before playing around with apps:</p>
	<ol>
		<li>Solder a battery to the chip</li>
		<li>Assemble the watch itself</li>
	</ol>

	<h3>Soldering the battery</h3>
	<p>
		The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the <Code>+</Code> and <Code>-</Code> symbols on the chip. So my
		first research was about whether the red or the black cable is <Code>+</Code> or <Code>-</Code>.
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
		cable goes to the <Code>+</Code> pole and the black cable to the <Code>-</Code> pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.
	</p>
	<p>
		To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.
	</p>
	<p>
		I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.
	</p>
	<p>
		I then started soldering with the black one on the <Code>-</Code> pole. I thought it's probably easier
		to put the soldering down on the less exposed port first, so fixing something wouldn't automatically
		mean I have to remove the potentially working and more exposed
		<Code>+</Code> port as well.
	</p>
	<p>
		While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!
	</p>
	<p>
		If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.
	</p>

	<h3>Assembly of the watch kit</h3>
	<p>
		Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.
	</p>
	<p>
		After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.
	</p>
	<p>
		Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.
	</p>

	<h2>Applications</h2>
	<p>
		There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are <Code>.zip</Code> files. In
		these, there is a folder named with a number and in that folder, there is a file called
		<Code>esp32c3.app</Code>. On the SD card, these need to be put into an <Code>apps</Code> folder,
		keeping the numbered folder.
	</p>
	<p>To make it clear, the structure of the SD card should look like this:</p>
	<CodeBlock code={appDir} />
	<p>
		Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.
	</p>
	<p>Writing my own app took a bit longer...</p>

	<h2>Writing an app for the Pocuter</h2>
	<p>
		To develop an application for the Pocuter, it's necessary to have a build setup that allows to
		compile code to the Arduino. It's possible to do this in different ways, the easiest is to use
		the <a href="https://www.arduino.cc/en/software" rel="external">Arduino IDE</a>. In the current
		pocuter documentation, it's documented how to setup the Arduino IDE 1.x, but there is a version
		2 already. I've made it work with version 2 on my Mac before I got a working build setup with my
		currently favorite IDE, VSCode. I'm documenting how I set it up in both ways.
	</p>
	<h3>Setup Arduino IDE 2.x</h3>
	<p>
		First thing I had to do is adding the additional boards manager URL. They provided the URL <Code
			>https://raw.githubusercontent.com/pocuter/ArduinoBoard/main/pocuter_arduino.json</Code
		>
		in their documentation and this value can be put into
		<Code>Arduino IDE -&gt; Settings ... &gt; "Additional Boards Manager URLs"</Code>. After doing
		this, the Pocuter board should be included in the "boards manager". The boards manager is the
		second item on the left side.
	</p>
	<img class="block max-w-full" src={boardsManager} alt="The boards manager" />
	<p>
		As far as I understood it, you need the various boards to be able to actually compile code for
		them. As soon as the board is there, writing an application and compiling it should work.
	</p>
	<h3>Connecting the Pocuter</h3>
	<p>
		This one was tricky when working with my Mac OS Ventura. There are quite a few blog posts out
		there mentioning to install some third party USB drivers. Most of them seem to be outdated
		though and when I tried out a couple of these, the USB connection still didn't work for me. I
		took me a while to understand one crucial thing: USB cables are not equal to USB cables. There
		are some cables that only deliver current but no data. If you happen to try and use one of the
		"current-only" cables, you won't be able to find your Pocuter through the serial ports at all.
		If you don't see any changes in <Code>ls /dev/cu.*</Code> when plugging the cable in or removing
		it, the cable itself may be the culprit.
	</p>
	<h3>Uploading code to the pocuter</h3>
	<p>Ok, so I've seen multiple ways to do this, each of them have their own pros and cons:</p>
	<ol>
		<li>Update the SD card and write into the <Code>/apps/</Code> folder</li>
		<li>Upload compiled code directly through the USB serial port</li>
		<li>Upload through HTTP through an app installed on the pocuter</li>
	</ol>
	<h4>1. Using SD card</h4>
	<p>
		The SD card approach is the one mentioned in the documentation and is done through multiple
		steps:
	</p>
	<ol>
		<li>Compile the new version of your app (several steps)</li>
		<li>Remove the SD card from the pocuter</li>
		<li>Put the SD card into a reader</li>
		<li>Mount it on the computer</li>
		<li>Copy the compiled version into the <Code>/apps/</Code> folder on the SD card</li>
		<li>Unmount the SD card from the computer</li>
		<li>Put the SD card back into the pocuter</li>
		<li>Restart the pocuter</li>
	</ol>
	<p>
		While these steps worked really well for me, especially when I had the issue with the USB cable,
		this is quite a tedious process and involves a lot of manual work that can't easily be
		automated. It works for releases, but testing intermediate versions of your app takes quite some
		time.
	</p>
	<h4>2. Using USB</h4>
	<p>
		The second option is to upload compiled code directly to the pocuter. When trying to upload code
		through the Arduino IDE 2.x, I faced another issue. The error told me something like <Code
			>Property 'upload.tool' is undefined</Code
		> or <Code>Property 'upload.tool.serial' is undefined</Code>. It looks like Arduino IDE 2.x
		changed a bit regarding the <Code>boards.txt</Code> files, which seem to be the instructions for
		how to upload code to the board.
	</p>
	<p>
		First of all, the I had to install the version <Code>2.0.5-RC1-PC1.3</Code> of the Pocuter library
		because the newer version didn't compile for me. After using that version and seeing the error above,
		I had to change the file
		<Code>$HOME/Library/Arduino15/packages/esp32/hardware/esp32/2.0.5-RC1-PC1.3/boards.txt</Code> to
		make this work. There is a line <Code>pocuterone.upload.tool=esptool_py</Code> which needed to be
		changed to
		<Code>pocuterone.upload.tool.serial=esptool_py</Code>. After this change, uploading through the
		Arduino IDE 2.x worked.
	</p>
	<p>
		Since this worked now, I could even change my setup to make uploading work through the command
		line. This improves my development experience, because I can use my favorite IDE instead of the
		Arduino IDE to prepare the Sketches (VSCode) and then use the command line tool <Code
			>arduino-cli</Code
		> to compile and upload it. My current setup consists of two steps to make the compilation and upload
		work:
	</p>
	<ol>
		<li>
			<Code>arduino-cli compile -b "$FQBN" -p "$USB_PORT" --build-path "$BUILD_PATH"</Code>
		</li>
		<li>
			<Code>arduino-cli upload --input-dir "$BUILD_PATH" -b "$FQBN" -p "$USB_PORT"</Code>
		</li>
	</ol>
	<p>
		The <Code>FQBN</Code> I got from checking the boards list (<Code>arduino-cli board listall</Code
		>), which gave me <Code>esp32:esp32:pocuterone</Code> identifier. The <Code>USB_PORT</Code> I get
		by using <Code>find /dev/cu.usb*</Code> when the Pocuter is connected with a USB cable that supports
		data transfer - as I mentioned earlier, this took me a while to figure out. The
		<Code>BUILD_PATH</Code>
		is set to <Code>./build</Code> so it doesn't use some temporary directory and always needs to recompile
		if something fails during upload.
	</p>
	<p>
		The bad side of this is that uploading code through USB is only replacing the current version.
		It will not persist as an app and you still need to write to the SD card in a later step.
	</p>
	<h4>Using HTTP server</h4>
	<p>
		I have to admit, I haven't tried this yet, but someone in the Pocuter Discord shared their <a
			href="https://github.com/kallistisoft/PocuterUtils"
			rel="external">deployment tool</a
		>. From my understanding, you can install this Code Upload Server app to directly write on the
		SD card. That means you'll be able to quickly write the whole app on it instead of using the SD
		card approach mentioned earlier.
	</p>
</ArticleLayout>
