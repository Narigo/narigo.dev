import{s as uo,f as i,a as l,g as a,A as r,c as s,j as ut,B as po,i as o,y as co,d as n}from"../chunks/scheduler.52b7490a.js";import{S as fo,i as mo,b as io,d as lo,m as ao,a as so,t as ro,e as ho}from"../chunks/index.644eb738.js";import{C as vo}from"../chunks/CodeBlock.b7e19fb6.js";import{P as bo}from"../chunks/PageLayout.006f4288.js";const wo="/_app/immutable/assets/boards-manager.a9b14f77.png";function yo(ht){let h,f=`Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.`,d,u,dt="Pocuter One",pt,p,he="Last update on <span>2023-06-01</span>",ct,m,de=`The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.`,ft,v,ue=`While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.`,mt,b,pe='If you haven&#39;t checked out the <a href="https://pocuter.com/docs/pocuter-one" rel="external">documentation of the Pocuter One</a>, it&#39;s definitely something to look at first.',vt,w,ce="WatchKit assembly",bt,y,fe="There are a few things that need to be done before playing around with apps:",wt,x,me="<li>Solder a battery to the chip</li> <li>Assemble the watch itself</li>",yt,C,ve="Soldering the battery",xt,I,be=`The very first one was the most intimidating for me as someone who doesn&#39;t have much experience
		with hardware. I wasn&#39;t sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the <code>+</code> and <code>-</code> symbols on the chip. So my
		first research was about whether the red or the black cable is <code>+</code> or <code>-</code>.`,Ct,k,we=`When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.`,It,_,ye=`Long story short, in <a href="https://discord.com/channels/762688795035697182/762688795035697186" rel="external">the Pocuter Discord</a>, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the <code>+</code> pole and the black cable to the <code>-</code> pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.`,kt,g,xe=`To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.`,_t,T,Ce=`I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.`,gt,P,Ie=`I then started soldering with the black one on the <code>-</code> pole. I thought it&#39;s probably
		easier to put the soldering down on the less exposed port first, so fixing something wouldn&#39;t
		automatically mean I have to remove the potentially working and more exposed
		<code>+</code> port as well.`,Tt,H,ke=`While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!`,Pt,L,_e=`If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.`,Ht,M,ge="Assembly of the watch kit",Lt,S,Te=`Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.`,Mt,D,Pe=`After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.`,St,q,He=`Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.`,Dt,U,Le="Applications",qt,$,Me=`There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are <code>.zip</code> files.
		In these, there is a folder named with a number and in that folder, there is a file called
		<code>esp32c3.app</code>. On the SD card, these need to be put into an <code>apps</code> folder,
		keeping the numbered folder.`,Ut,A,Se="To make it clear, the structure of the SD card should look like this:",$t,B,At,j,De=`Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.`,Bt,O,qe="Writing my own app took a bit longer...",jt,E,Ue="Writing an app for the Pocuter",Ot,z,$e=`To develop an application for the Pocuter, it&#39;s necessary to have a build setup that allows to
		compile code to the Arduino. It&#39;s possible to do this in different ways, the easiest is to use
		the <a href="https://www.arduino.cc/en/software" rel="external">Arduino IDE</a>. In the current
		pocuter documentation, it&#39;s documented how to setup the Arduino IDE 1.x, but there is a version
		2 already. I&#39;ve made it work with version 2 on my Mac before I got a working build setup with my
		currently favorite IDE, VSCode. I&#39;m documenting how I set it up in both ways.`,Et,R,Ae="Setup Arduino IDE 2.x",zt,W,Be=`First thing I had to do is adding the additional boards manager URL. They provided the URL <code>https://raw.githubusercontent.com/pocuter/ArduinoBoard/main/pocuter_arduino.json</code>
		in their documentation and this value can be put into
		<code>Arduino IDE -&gt; Settings ... &gt; &quot;Additional Boards Manager URLs&quot;</code>. After doing
		this, the Pocuter board should be included in the &quot;boards manager&quot;. The boards manager is the
		second item on the left side.`,Rt,c,je,Wt,F,Oe=`As far as I understood it, you need the various boards to be able to actually compile code for
		them. As soon as the board is there, writing an application and compiling it should work.`,Ft,V,Ee="Connecting the Pocuter",Vt,G,ze=`This one was tricky when working with my Mac OS Ventura. There are quite a few blog posts out
		there mentioning to install some third party USB drivers. Most of them seem to be outdated
		though and when I tried out a couple of these, the USB connection still didn&#39;t work for me. I
		took me a while to understand one crucial thing: USB cables are not equal to USB cables. There
		are some cables that only deliver current but no data. If you happen to try and use one of the
		&quot;current-only&quot; cables, you won&#39;t be able to find your Pocuter through the serial ports at all.
		If you don&#39;t see any changes in <code>ls /dev/cu.*</code> when plugging the cable in or removing
		it, the cable itself may be the culprit.`,Gt,N,Re="Uploading code to the pocuter",Nt,Q,We="Ok, so I've seen multiple ways to do this, each of them have their own pros and cons:",Qt,K,Fe="<li>Update the SD card and write into the <code>/apps/</code> folder</li> <li>Upload compiled code directly through the USB serial port</li> <li>Upload through HTTP through an app installed on the pocuter</li>",Kt,J,Ve="1. Using SD card",Jt,X,Ge=`The SD card approach is the one mentioned in the documentation and is done through multiple
		steps:`,Xt,Y,Ne="<li>Compile the new version of your app (several steps)</li> <li>Remove the SD card from the pocuter</li> <li>Put the SD card into a reader</li> <li>Mount it on the computer</li> <li>Copy the compiled version into the <code>/apps/</code> folder on the SD card</li> <li>Unmount the SD card from the computer</li> <li>Put the SD card back into the pocuter</li> <li>Restart the pocuter</li>",Yt,Z,Qe=`While these steps worked really well for me, especially when I had the issue with the USB cable,
		this is quite a tedious process and involves a lot of manual work that can't easily be
		automated. It works for releases, but testing intermediate versions of your app takes quite some
		time.`,Zt,tt,Ke="2. Using USB",te,et,Je=`The second option is to upload compiled code directly to the pocuter. When trying to upload code
		through the Arduino IDE 2.x, I faced another issue. The error told me something like <code>Property &#39;upload.tool&#39; is undefined</code>
		or <code>Property &#39;upload.tool.serial&#39; is undefined</code>. It looks like Arduino IDE 2.x
		changed a bit regarding the <code>boards.txt</code> files, which seem to be the instructions for
		how to upload code to the board.`,ee,ot,Xe=`First of all, the I had to install the version <code>2.0.5-RC1-PC1.3</code> of the Pocuter
		library because the newer version didn&#39;t compile for me. After using that version and seeing the
		error above, I had to change the file
		<code>$HOME/Library/Arduino15/packages/esp32/hardware/esp32/2.0.5-RC1-PC1.3/boards.txt</code> to
		make this work. There is a line <code>pocuterone.upload.tool=esptool_py</code> which needed to
		be changed to
		<code>pocuterone.upload.tool.serial=esptool_py</code>. After this change, uploading through the
		Arduino IDE 2.x worked.`,oe,nt,Ye=`Since this worked now, I could even change my setup to make uploading work through the command
		line. This improves my development experience, because I can use my favorite IDE instead of the
		Arduino IDE to prepare the Sketches (VSCode) and then use the command line tool <code>arduino-cli</code> to compile and upload it. My current setup consists of two steps to make the compilation and upload
		work:`,ne,it,Ze="<li><code>arduino-cli compile -b &quot;$FQBN&quot; -p &quot;$USB_PORT&quot; --build-path &quot;$BUILD_PATH&quot;</code></li> <li><code>arduino-cli upload --input-dir &quot;$BUILD_PATH&quot; -b &quot;$FQBN&quot; -p &quot;$USB_PORT&quot;</code></li>",ie,lt,to=`The <code>FQBN</code> I got from checking the boards list (<code>arduino-cli board listall</code>), which gave me <code>esp32:esp32:pocuterone</code> identifier. The <code>USB_PORT</code> I
		get by using <code>find /dev/cu.usb*</code> when the Pocuter is connected with a USB cable that
		supports data transfer - as I mentioned earlier, this took me a while to figure out. The
		<code>BUILD_PATH</code>
		is set to <code>./build</code> so it doesn&#39;t use some temporary directory and always needs to recompile
		if something fails during upload.`,le,at,eo=`The bad side of this is that uploading code through USB is only replacing the current version.
		It will not persist as an app and you still need to write to the SD card in a later step.`,ae,st,oo="Using HTTP server",se,rt,no=`I have to admit, I haven&#39;t tried this yet, but someone in the Pocuter Discord shared their <a href="https://github.com/kallistisoft/PocuterUtils" rel="external">deployment tool</a>. From my understanding, you can install this Code Upload Server app to directly write on the
		SD card. That means you&#39;ll be able to quickly write the whole app on it instead of using the SD
		card approach mentioned earlier.`,re;return B=new vo({props:{code:ht[0]}}),{c(){h=i("p"),h.textContent=f,d=l(),u=i("h2"),u.textContent=dt,pt=l(),p=i("div"),p.innerHTML=he,ct=l(),m=i("p"),m.textContent=de,ft=l(),v=i("p"),v.textContent=ue,mt=l(),b=i("p"),b.innerHTML=pe,vt=l(),w=i("h3"),w.textContent=ce,bt=l(),y=i("p"),y.textContent=fe,wt=l(),x=i("ol"),x.innerHTML=me,yt=l(),C=i("h4"),C.textContent=ve,xt=l(),I=i("p"),I.innerHTML=be,Ct=l(),k=i("p"),k.textContent=we,It=l(),_=i("p"),_.innerHTML=ye,kt=l(),g=i("p"),g.textContent=xe,_t=l(),T=i("p"),T.textContent=Ce,gt=l(),P=i("p"),P.innerHTML=Ie,Tt=l(),H=i("p"),H.textContent=ke,Pt=l(),L=i("p"),L.textContent=_e,Ht=l(),M=i("h4"),M.textContent=ge,Lt=l(),S=i("p"),S.textContent=Te,Mt=l(),D=i("p"),D.textContent=Pe,St=l(),q=i("p"),q.textContent=He,Dt=l(),U=i("h3"),U.textContent=Le,qt=l(),$=i("p"),$.innerHTML=Me,Ut=l(),A=i("p"),A.textContent=Se,$t=l(),io(B.$$.fragment),At=l(),j=i("p"),j.textContent=De,Bt=l(),O=i("p"),O.textContent=qe,jt=l(),E=i("h3"),E.textContent=Ue,Ot=l(),z=i("p"),z.innerHTML=$e,Et=l(),R=i("h4"),R.textContent=Ae,zt=l(),W=i("p"),W.innerHTML=Be,Rt=l(),c=i("img"),Wt=l(),F=i("p"),F.textContent=Oe,Ft=l(),V=i("h4"),V.textContent=Ee,Vt=l(),G=i("p"),G.innerHTML=ze,Gt=l(),N=i("h4"),N.textContent=Re,Nt=l(),Q=i("p"),Q.textContent=We,Qt=l(),K=i("ol"),K.innerHTML=Fe,Kt=l(),J=i("h5"),J.textContent=Ve,Jt=l(),X=i("p"),X.textContent=Ge,Xt=l(),Y=i("ol"),Y.innerHTML=Ne,Yt=l(),Z=i("p"),Z.textContent=Qe,Zt=l(),tt=i("h5"),tt.textContent=Ke,te=l(),et=i("p"),et.innerHTML=Je,ee=l(),ot=i("p"),ot.innerHTML=Xe,oe=l(),nt=i("p"),nt.innerHTML=Ye,ne=l(),it=i("ol"),it.innerHTML=Ze,ie=l(),lt=i("p"),lt.innerHTML=to,le=l(),at=i("p"),at.textContent=eo,ae=l(),st=i("h5"),st.textContent=oo,se=l(),rt=i("p"),rt.innerHTML=no,this.h()},l(t){h=a(t,"P",{class:!0,"data-svelte-h":!0}),r(h)!=="svelte-jopodt"&&(h.textContent=f),d=s(t),u=a(t,"H2",{"data-svelte-h":!0}),r(u)!=="svelte-1qejv56"&&(u.textContent=dt),pt=s(t),p=a(t,"DIV",{class:!0,"data-svelte-h":!0}),r(p)!=="svelte-1xih6zg"&&(p.innerHTML=he),ct=s(t),m=a(t,"P",{"data-svelte-h":!0}),r(m)!=="svelte-j8b7sp"&&(m.textContent=de),ft=s(t),v=a(t,"P",{"data-svelte-h":!0}),r(v)!=="svelte-n6z256"&&(v.textContent=ue),mt=s(t),b=a(t,"P",{"data-svelte-h":!0}),r(b)!=="svelte-7fc19q"&&(b.innerHTML=pe),vt=s(t),w=a(t,"H3",{"data-svelte-h":!0}),r(w)!=="svelte-lnnvof"&&(w.textContent=ce),bt=s(t),y=a(t,"P",{"data-svelte-h":!0}),r(y)!=="svelte-1vd0g0h"&&(y.textContent=fe),wt=s(t),x=a(t,"OL",{"data-svelte-h":!0}),r(x)!=="svelte-19tijkj"&&(x.innerHTML=me),yt=s(t),C=a(t,"H4",{"data-svelte-h":!0}),r(C)!=="svelte-147ynil"&&(C.textContent=ve),xt=s(t),I=a(t,"P",{"data-svelte-h":!0}),r(I)!=="svelte-1j8gc5t"&&(I.innerHTML=be),Ct=s(t),k=a(t,"P",{"data-svelte-h":!0}),r(k)!=="svelte-wiutu"&&(k.textContent=we),It=s(t),_=a(t,"P",{"data-svelte-h":!0}),r(_)!=="svelte-47v0dh"&&(_.innerHTML=ye),kt=s(t),g=a(t,"P",{"data-svelte-h":!0}),r(g)!=="svelte-xibkkc"&&(g.textContent=xe),_t=s(t),T=a(t,"P",{"data-svelte-h":!0}),r(T)!=="svelte-10f8c6i"&&(T.textContent=Ce),gt=s(t),P=a(t,"P",{"data-svelte-h":!0}),r(P)!=="svelte-crb3jd"&&(P.innerHTML=Ie),Tt=s(t),H=a(t,"P",{"data-svelte-h":!0}),r(H)!=="svelte-9guby9"&&(H.textContent=ke),Pt=s(t),L=a(t,"P",{"data-svelte-h":!0}),r(L)!=="svelte-1yzo84u"&&(L.textContent=_e),Ht=s(t),M=a(t,"H4",{"data-svelte-h":!0}),r(M)!=="svelte-fwpozx"&&(M.textContent=ge),Lt=s(t),S=a(t,"P",{"data-svelte-h":!0}),r(S)!=="svelte-1rhi3z5"&&(S.textContent=Te),Mt=s(t),D=a(t,"P",{"data-svelte-h":!0}),r(D)!=="svelte-1pz9e1y"&&(D.textContent=Pe),St=s(t),q=a(t,"P",{"data-svelte-h":!0}),r(q)!=="svelte-dra5i8"&&(q.textContent=He),Dt=s(t),U=a(t,"H3",{"data-svelte-h":!0}),r(U)!=="svelte-z6pnr3"&&(U.textContent=Le),qt=s(t),$=a(t,"P",{"data-svelte-h":!0}),r($)!=="svelte-1gks29k"&&($.innerHTML=Me),Ut=s(t),A=a(t,"P",{"data-svelte-h":!0}),r(A)!=="svelte-1bdbb3j"&&(A.textContent=Se),$t=s(t),lo(B.$$.fragment,t),At=s(t),j=a(t,"P",{"data-svelte-h":!0}),r(j)!=="svelte-15rc4vt"&&(j.textContent=De),Bt=s(t),O=a(t,"P",{"data-svelte-h":!0}),r(O)!=="svelte-1kysifp"&&(O.textContent=qe),jt=s(t),E=a(t,"H3",{"data-svelte-h":!0}),r(E)!=="svelte-tyr8a8"&&(E.textContent=Ue),Ot=s(t),z=a(t,"P",{"data-svelte-h":!0}),r(z)!=="svelte-fnr80b"&&(z.innerHTML=$e),Et=s(t),R=a(t,"H4",{"data-svelte-h":!0}),r(R)!=="svelte-rfswll"&&(R.textContent=Ae),zt=s(t),W=a(t,"P",{"data-svelte-h":!0}),r(W)!=="svelte-1xfsz9h"&&(W.innerHTML=Be),Rt=s(t),c=a(t,"IMG",{src:!0,alt:!0,class:!0}),Wt=s(t),F=a(t,"P",{"data-svelte-h":!0}),r(F)!=="svelte-1ilpk0d"&&(F.textContent=Oe),Ft=s(t),V=a(t,"H4",{"data-svelte-h":!0}),r(V)!=="svelte-1kq7vvf"&&(V.textContent=Ee),Vt=s(t),G=a(t,"P",{"data-svelte-h":!0}),r(G)!=="svelte-swgr3h"&&(G.innerHTML=ze),Gt=s(t),N=a(t,"H4",{"data-svelte-h":!0}),r(N)!=="svelte-1v23qlw"&&(N.textContent=Re),Nt=s(t),Q=a(t,"P",{"data-svelte-h":!0}),r(Q)!=="svelte-1l50psk"&&(Q.textContent=We),Qt=s(t),K=a(t,"OL",{"data-svelte-h":!0}),r(K)!=="svelte-mmnrno"&&(K.innerHTML=Fe),Kt=s(t),J=a(t,"H5",{"data-svelte-h":!0}),r(J)!=="svelte-r5nf54"&&(J.textContent=Ve),Jt=s(t),X=a(t,"P",{"data-svelte-h":!0}),r(X)!=="svelte-uel9j8"&&(X.textContent=Ge),Xt=s(t),Y=a(t,"OL",{"data-svelte-h":!0}),r(Y)!=="svelte-1nllx92"&&(Y.innerHTML=Ne),Yt=s(t),Z=a(t,"P",{"data-svelte-h":!0}),r(Z)!=="svelte-1ptht36"&&(Z.textContent=Qe),Zt=s(t),tt=a(t,"H5",{"data-svelte-h":!0}),r(tt)!=="svelte-1dajjfy"&&(tt.textContent=Ke),te=s(t),et=a(t,"P",{"data-svelte-h":!0}),r(et)!=="svelte-y8iukk"&&(et.innerHTML=Je),ee=s(t),ot=a(t,"P",{"data-svelte-h":!0}),r(ot)!=="svelte-gzki10"&&(ot.innerHTML=Xe),oe=s(t),nt=a(t,"P",{"data-svelte-h":!0}),r(nt)!=="svelte-1okw025"&&(nt.innerHTML=Ye),ne=s(t),it=a(t,"OL",{"data-svelte-h":!0}),r(it)!=="svelte-sjcky7"&&(it.innerHTML=Ze),ie=s(t),lt=a(t,"P",{"data-svelte-h":!0}),r(lt)!=="svelte-1unaxx6"&&(lt.innerHTML=to),le=s(t),at=a(t,"P",{"data-svelte-h":!0}),r(at)!=="svelte-16lephz"&&(at.textContent=eo),ae=s(t),st=a(t,"H5",{"data-svelte-h":!0}),r(st)!=="svelte-r5kg9b"&&(st.textContent=oo),se=s(t),rt=a(t,"P",{"data-svelte-h":!0}),r(rt)!=="svelte-1mzhkc6"&&(rt.innerHTML=no),this.h()},h(){ut(h,"class","info svelte-7arsvs"),ut(p,"class","date svelte-7arsvs"),po(c.src,je=wo)||ut(c,"src",je),ut(c,"alt","The boards manager"),ut(c,"class","svelte-7arsvs")},m(t,e){o(t,h,e),o(t,d,e),o(t,u,e),o(t,pt,e),o(t,p,e),o(t,ct,e),o(t,m,e),o(t,ft,e),o(t,v,e),o(t,mt,e),o(t,b,e),o(t,vt,e),o(t,w,e),o(t,bt,e),o(t,y,e),o(t,wt,e),o(t,x,e),o(t,yt,e),o(t,C,e),o(t,xt,e),o(t,I,e),o(t,Ct,e),o(t,k,e),o(t,It,e),o(t,_,e),o(t,kt,e),o(t,g,e),o(t,_t,e),o(t,T,e),o(t,gt,e),o(t,P,e),o(t,Tt,e),o(t,H,e),o(t,Pt,e),o(t,L,e),o(t,Ht,e),o(t,M,e),o(t,Lt,e),o(t,S,e),o(t,Mt,e),o(t,D,e),o(t,St,e),o(t,q,e),o(t,Dt,e),o(t,U,e),o(t,qt,e),o(t,$,e),o(t,Ut,e),o(t,A,e),o(t,$t,e),ao(B,t,e),o(t,At,e),o(t,j,e),o(t,Bt,e),o(t,O,e),o(t,jt,e),o(t,E,e),o(t,Ot,e),o(t,z,e),o(t,Et,e),o(t,R,e),o(t,zt,e),o(t,W,e),o(t,Rt,e),o(t,c,e),o(t,Wt,e),o(t,F,e),o(t,Ft,e),o(t,V,e),o(t,Vt,e),o(t,G,e),o(t,Gt,e),o(t,N,e),o(t,Nt,e),o(t,Q,e),o(t,Qt,e),o(t,K,e),o(t,Kt,e),o(t,J,e),o(t,Jt,e),o(t,X,e),o(t,Xt,e),o(t,Y,e),o(t,Yt,e),o(t,Z,e),o(t,Zt,e),o(t,tt,e),o(t,te,e),o(t,et,e),o(t,ee,e),o(t,ot,e),o(t,oe,e),o(t,nt,e),o(t,ne,e),o(t,it,e),o(t,ie,e),o(t,lt,e),o(t,le,e),o(t,at,e),o(t,ae,e),o(t,st,e),o(t,se,e),o(t,rt,e),re=!0},p:co,i(t){re||(so(B.$$.fragment,t),re=!0)},o(t){ro(B.$$.fragment,t),re=!1},d(t){t&&(n(h),n(d),n(u),n(pt),n(p),n(ct),n(m),n(ft),n(v),n(mt),n(b),n(vt),n(w),n(bt),n(y),n(wt),n(x),n(yt),n(C),n(xt),n(I),n(Ct),n(k),n(It),n(_),n(kt),n(g),n(_t),n(T),n(gt),n(P),n(Tt),n(H),n(Pt),n(L),n(Ht),n(M),n(Lt),n(S),n(Mt),n(D),n(St),n(q),n(Dt),n(U),n(qt),n($),n(Ut),n(A),n($t),n(At),n(j),n(Bt),n(O),n(jt),n(E),n(Ot),n(z),n(Et),n(R),n(zt),n(W),n(Rt),n(c),n(Wt),n(F),n(Ft),n(V),n(Vt),n(G),n(Gt),n(N),n(Nt),n(Q),n(Qt),n(K),n(Kt),n(J),n(Jt),n(X),n(Xt),n(Y),n(Yt),n(Z),n(Zt),n(tt),n(te),n(et),n(ee),n(ot),n(oe),n(nt),n(ne),n(it),n(ie),n(lt),n(le),n(at),n(ae),n(st),n(se),n(rt)),ho(B,t)}}}function xo(ht){let h,f;return h=new bo({props:{$$slots:{default:[yo]},$$scope:{ctx:ht}}}),{c(){io(h.$$.fragment)},l(d){lo(h.$$.fragment,d)},m(d,u){ao(h,d,u),f=!0},p(d,[u]){const dt={};u&2&&(dt.$$scope={dirty:u,ctx:d}),h.$set(dt)},i(d){f||(so(h.$$.fragment,d),f=!0)},o(d){ro(h.$$.fragment,d),f=!1},d(d){ho(h,d)}}}function Co(ht){return[`apps/
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
     ...`]}class To extends fo{constructor(h){super(),mo(this,h,Co,xo,uo,{})}}export{To as component};
