import{S as Gr,i as Qr,s as zr,y as Mr,z as Wr,A as Fr,g as Nr,d as Vr,B as jr,k as r,q as a,a as d,l as n,m as s,r as i,h as e,c as p,n as I,J as Kr,b as h,G as o,H as Jr}from"../chunks/index.3d7f15fc.js";import{C as Xr}from"../chunks/CodeBlock.f87bc43a.js";import{P as Yr}from"../chunks/PageLayout.d1ea7d5d.js";const Zr=""+new URL("../assets/boards-manager.a9b14f77.png",import.meta.url).href;function tn(Ot){let f,O,m,g,J,ge,C,Co,Ct,Ao,De,X,Bo,Pe,Y,Lo,Se,A,$o,N,xo,Ho,Te,Z,qo,Ue,tt,Ro,Oe,B,At,Mo,Wo,Bt,Fo,Ce,et,No,Ae,y,Vo,Lt,jo,Go,$t,Qo,zo,xt,Ko,Jo,Ht,Xo,Yo,Be,ot,Zo,Le,E,ta,V,ea,oa,qt,aa,ia,Rt,la,ra,$e,at,na,xe,it,sa,He,D,ha,Mt,da,pa,Wt,ca,ua,qe,lt,fa,Re,rt,ma,Me,nt,wa,We,st,ba,Fe,ht,ya,Ne,dt,va,Ve,pt,Ia,je,k,Ea,Ft,ka,_a,Nt,ga,Da,Vt,Pa,Sa,Ge,ct,Ta,Qe,j,ze,ut,Ua,Ke,ft,Oa,Je,mt,Ca,Xe,L,Aa,G,Ba,La,Ye,wt,$a,Ze,P,xa,jt,Ha,qa,Gt,Ra,Ma,to,$,pl,eo,bt,Wa,oo,yt,Fa,ao,x,Na,Qt,Va,ja,io,vt,Ga,lo,It,Qa,ro,S,Q,za,zt,Ka,Ja,Xa,Kt,Ya,Za,Jt,ti,no,Et,ei,so,kt,oi,ho,c,Xt,ai,ii,Yt,li,ri,Zt,ni,si,te,hi,di,z,pi,ee,ci,ui,fi,oe,mi,wi,ae,bi,yi,ie,vi,po,_t,Ii,co,gt,Ei,uo,_,ki,le,_i,gi,re,Di,Pi,ne,Si,Ti,fo,v,Ui,se,Oi,Ci,he,Ai,Bi,de,Li,$i,pe,xi,Hi,mo,H,qi,ce,Ri,Mi,wo,q,ue,fe,Wi,Fi,me,we,Ni,bo,u,Vi,be,ji,Gi,ye,Qi,zi,ve,Ki,Ji,Ie,Xi,Yi,Ee,Zi,tl,ke,el,ol,_e,al,il,yo,Dt,ll,vo,Pt,rl,Io,R,nl,K,sl,hl,Eo;return j=new Xr({props:{code:Ot[0]}}),{c(){f=r("p"),O=a(`Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.`),m=d(),g=r("h2"),J=a("Pocuter One"),ge=d(),C=r("div"),Co=a("Last update on "),Ct=r("span"),Ao=a("2023-06-01"),De=d(),X=r("p"),Bo=a(`The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.`),Pe=d(),Y=r("p"),Lo=a(`While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.`),Se=d(),A=r("p"),$o=a("If you haven't checked out the "),N=r("a"),xo=a("documentation of the Pocuter One"),Ho=a(", it's definitely something to look at first."),Te=d(),Z=r("h3"),qo=a("WatchKit assembly"),Ue=d(),tt=r("p"),Ro=a("There are a few things that need to be done before playing around with apps:"),Oe=d(),B=r("ol"),At=r("li"),Mo=a("Solder a battery to the chip"),Wo=d(),Bt=r("li"),Fo=a("Assemble the watch itself"),Ce=d(),et=r("h4"),No=a("Soldering the battery"),Ae=d(),y=r("p"),Vo=a(`The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the `),Lt=r("code"),jo=a("+"),Go=a(" and "),$t=r("code"),Qo=a("-"),zo=a(` symbols on the chip. So my
		first research was about whether the red or the black cable is `),xt=r("code"),Ko=a("+"),Jo=a(" or "),Ht=r("code"),Xo=a("-"),Yo=a("."),Be=d(),ot=r("p"),Zo=a(`When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.`),Le=d(),E=r("p"),ta=a("Long story short, in "),V=r("a"),ea=a("the Pocuter Discord"),oa=a(`, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the `),qt=r("code"),aa=a("+"),ia=a(" pole and the black cable to the "),Rt=r("code"),la=a("-"),ra=a(` pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.`),$e=d(),at=r("p"),na=a(`To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.`),xe=d(),it=r("p"),sa=a(`I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.`),He=d(),D=r("p"),ha=a("I then started soldering with the black one on the "),Mt=r("code"),da=a("-"),pa=a(` pole. I thought it's probably
		easier to put the soldering down on the less exposed port first, so fixing something wouldn't
		automatically mean I have to remove the potentially working and more exposed
		`),Wt=r("code"),ca=a("+"),ua=a(" port as well."),qe=d(),lt=r("p"),fa=a(`While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!`),Re=d(),rt=r("p"),ma=a(`If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.`),Me=d(),nt=r("h4"),wa=a("Assembly of the watch kit"),We=d(),st=r("p"),ba=a(`Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.`),Fe=d(),ht=r("p"),ya=a(`After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.`),Ne=d(),dt=r("p"),va=a(`Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.`),Ve=d(),pt=r("h3"),Ia=a("Applications"),je=d(),k=r("p"),Ea=a(`There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are `),Ft=r("code"),ka=a(".zip"),_a=a(` files.
		In these, there is a folder named with a number and in that folder, there is a file called
		`),Nt=r("code"),ga=a("esp32c3.app"),Da=a(". On the SD card, these need to be put into an "),Vt=r("code"),Pa=a("apps"),Sa=a(` folder,
		keeping the numbered folder.`),Ge=d(),ct=r("p"),Ta=a("To make it clear, the structure of the SD card should look like this:"),Qe=d(),Mr(j.$$.fragment),ze=d(),ut=r("p"),Ua=a(`Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.`),Ke=d(),ft=r("p"),Oa=a("Writing my own app took a bit longer..."),Je=d(),mt=r("h3"),Ca=a("Writing an app for the Pocuter"),Xe=d(),L=r("p"),Aa=a(`To develop an application for the Pocuter, it's necessary to have a build setup that allows to
		compile code to the Arduino. It's possible to do this in different ways, the easiest is to use
		the `),G=r("a"),Ba=a("Arduino IDE"),La=a(`. In the current
		pocuter documentation, it's documented how to setup the Arduino IDE 1.x, but there is a version
		2 already. I've made it work with version 2 on my Mac before I got a working build setup with my
		currently favorite IDE, VSCode. I'm documenting how I set it up in both ways.`),Ye=d(),wt=r("h4"),$a=a("Setup Arduino IDE 2.x"),Ze=d(),P=r("p"),xa=a("First thing I had to do is adding the additional boards manager URL. They provided the URL "),jt=r("code"),Ha=a("https://raw.githubusercontent.com/pocuter/ArduinoBoard/main/pocuter_arduino.json"),qa=a(`
		in their documentation and this value can be put into
		`),Gt=r("code"),Ra=a('Arduino IDE -> Settings ... > "Additional Boards Manager URLs"'),Ma=a(`. After doing
		this, the Pocuter board should be included in the "boards manager". The boards manager is the
		second item on the left side.`),to=d(),$=r("img"),eo=d(),bt=r("p"),Wa=a(`As far as I understood it, you need the various boards to be able to actually compile code for
		them. As soon as the board is there, writing an application and compiling it should work.`),oo=d(),yt=r("h4"),Fa=a("Connecting the Pocuter"),ao=d(),x=r("p"),Na=a(`This one was tricky when working with my Mac OS Ventura. There are quite a few blog posts out
		there mentioning to install some third party USB drivers. Most of them seem to be outdated
		though and when I tried out a couple of these, the USB connection still didn't work for me. I
		took me a while to understand one crucial thing: USB cables are not equal to USB cables. There
		are some cables that only deliver current but no data. If you happen to try and use one of the
		"current-only" cables, you won't be able to find your Pocuter through the serial ports at all.
		If you don't see any changes in `),Qt=r("code"),Va=a("ls /dev/cu.*"),ja=a(` when plugging the cable in or removing
		it, the cable itself may be the culprit.`),io=d(),vt=r("h4"),Ga=a("Uploading code to the pocuter"),lo=d(),It=r("p"),Qa=a("Ok, so I've seen multiple ways to do this, each of them have their own pros and cons:"),ro=d(),S=r("ol"),Q=r("li"),za=a("Update the SD card and write into the "),zt=r("code"),Ka=a("/apps/"),Ja=a(" folder"),Xa=d(),Kt=r("li"),Ya=a("Upload compiled code directly through the USB serial port"),Za=d(),Jt=r("li"),ti=a("Upload through HTTP through an app installed on the pocuter"),no=d(),Et=r("h5"),ei=a("1. Using SD card"),so=d(),kt=r("p"),oi=a(`The SD card approach is the one mentioned in the documentation and is done through multiple
		steps:`),ho=d(),c=r("ol"),Xt=r("li"),ai=a("Compile the new version of your app (several steps)"),ii=d(),Yt=r("li"),li=a("Remove the SD card from the pocuter"),ri=d(),Zt=r("li"),ni=a("Put the SD card into a reader"),si=d(),te=r("li"),hi=a("Mount it on the computer"),di=d(),z=r("li"),pi=a("Copy the compiled version into the "),ee=r("code"),ci=a("/apps/"),ui=a(" folder on the SD card"),fi=d(),oe=r("li"),mi=a("Unmount the SD card from the computer"),wi=d(),ae=r("li"),bi=a("Put the SD card back into the pocuter"),yi=d(),ie=r("li"),vi=a("Restart the pocuter"),po=d(),_t=r("p"),Ii=a(`While these steps worked really well for me, especially when I had the issue with the USB cable,
		this is quite a tedious process and involves a lot of manual work that can't easily be
		automated. It works for releases, but testing intermediate versions of your app takes quite some
		time.`),co=d(),gt=r("h5"),Ei=a("2. Using USB"),uo=d(),_=r("p"),ki=a(`The second option is to upload compiled code directly to the pocuter. When trying to upload code
		through the Arduino IDE 2.x, I faced another issue. The error told me something like `),le=r("code"),_i=a("Property 'upload.tool' is undefined"),gi=a(`
		or `),re=r("code"),Di=a("Property 'upload.tool.serial' is undefined"),Pi=a(`. It looks like Arduino IDE 2.x
		changed a bit regarding the `),ne=r("code"),Si=a("boards.txt"),Ti=a(` files, which seem to be the instructions for
		how to upload code to the board.`),fo=d(),v=r("p"),Ui=a("First of all, the I had to install the version "),se=r("code"),Oi=a("2.0.5-RC1-PC1.3"),Ci=a(` of the Pocuter
		library because the newer version didn't compile for me. After using that version and seeing the
		error above, I had to change the file
		`),he=r("code"),Ai=a("$HOME/Library/Arduino15/packages/esp32/hardware/esp32/2.0.5-RC1-PC1.3/boards.txt"),Bi=a(` to
		make this work. There is a line `),de=r("code"),Li=a("pocuterone.upload.tool=esptool_py"),$i=a(` which needed to
		be changed to
		`),pe=r("code"),xi=a("pocuterone.upload.tool.serial=esptool_py"),Hi=a(`. After this change, uploading through the
		Arduino IDE 2.x worked.`),mo=d(),H=r("p"),qi=a(`Since this worked now, I could even change my setup to make uploading work through the command
		line. This improves my development experience, because I can use my favorite IDE instead of the
		Arduino IDE to prepare the Sketches (VSCode) and then use the command line tool `),ce=r("code"),Ri=a("arduino-cli"),Mi=a(` to compile and upload it. My current setup consists of two steps to make the compilation and upload
		work:`),wo=d(),q=r("ol"),ue=r("li"),fe=r("code"),Wi=a('arduino-cli compile -b "$FQBN" -p "$USB_PORT" --build-path "$BUILD_PATH"'),Fi=d(),me=r("li"),we=r("code"),Ni=a('arduino-cli upload --input-dir "$BUILD_PATH" -b "$FQBN" -p "$USB_PORT"'),bo=d(),u=r("p"),Vi=a("The "),be=r("code"),ji=a("FQBN"),Gi=a(" I got from checking the boards list ("),ye=r("code"),Qi=a("arduino-cli board listall"),zi=a("), which gave me "),ve=r("code"),Ki=a("esp32:esp32:pocuterone"),Ji=a(" identifier. The "),Ie=r("code"),Xi=a("USB_PORT"),Yi=a(` I
		get by using `),Ee=r("code"),Zi=a("find /dev/cu.usb*"),tl=a(` when the Pocuter is connected with a USB cable that
		supports data transfer - as I mentioned earlier, this took me a while to figure out. The
		`),ke=r("code"),el=a("BUILD_PATH"),ol=a(`
		is set to `),_e=r("code"),al=a("./build"),il=a(` so it doesn't use some temporary directory and always needs to recompile
		if something fails during upload.`),yo=d(),Dt=r("p"),ll=a(`The bad side of this is that uploading code through USB is only replacing the current version.
		It will not persist as an app and you still need to write to the SD card in a later step.`),vo=d(),Pt=r("h5"),rl=a("Using HTTP server"),Io=d(),R=r("p"),nl=a("I have to admit, I haven't tried this yet, but someone in the Pocuter Discord shared their "),K=r("a"),sl=a("deployment tool"),hl=a(`. From my understanding, you can install this Code Upload Server app to directly write on the
		SD card. That means you'll be able to quickly write the whole app on it instead of using the SD
		card approach mentioned earlier.`),this.h()},l(t){f=n(t,"P",{class:!0});var l=s(f);O=i(l,`Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.`),l.forEach(e),m=p(t),g=n(t,"H2",{});var cl=s(g);J=i(cl,"Pocuter One"),cl.forEach(e),ge=p(t),C=n(t,"DIV",{class:!0});var dl=s(C);Co=i(dl,"Last update on "),Ct=n(dl,"SPAN",{});var ul=s(Ct);Ao=i(ul,"2023-06-01"),ul.forEach(e),dl.forEach(e),De=p(t),X=n(t,"P",{});var fl=s(X);Bo=i(fl,`The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.`),fl.forEach(e),Pe=p(t),Y=n(t,"P",{});var ml=s(Y);Lo=i(ml,`While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.`),ml.forEach(e),Se=p(t),A=n(t,"P",{});var ko=s(A);$o=i(ko,"If you haven't checked out the "),N=n(ko,"A",{href:!0,rel:!0});var wl=s(N);xo=i(wl,"documentation of the Pocuter One"),wl.forEach(e),Ho=i(ko,", it's definitely something to look at first."),ko.forEach(e),Te=p(t),Z=n(t,"H3",{});var bl=s(Z);qo=i(bl,"WatchKit assembly"),bl.forEach(e),Ue=p(t),tt=n(t,"P",{});var yl=s(tt);Ro=i(yl,"There are a few things that need to be done before playing around with apps:"),yl.forEach(e),Oe=p(t),B=n(t,"OL",{});var _o=s(B);At=n(_o,"LI",{});var vl=s(At);Mo=i(vl,"Solder a battery to the chip"),vl.forEach(e),Wo=p(_o),Bt=n(_o,"LI",{});var Il=s(Bt);Fo=i(Il,"Assemble the watch itself"),Il.forEach(e),_o.forEach(e),Ce=p(t),et=n(t,"H4",{});var El=s(et);No=i(El,"Soldering the battery"),El.forEach(e),Ae=p(t),y=n(t,"P",{});var T=s(y);Vo=i(T,`The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the `),Lt=n(T,"CODE",{});var kl=s(Lt);jo=i(kl,"+"),kl.forEach(e),Go=i(T," and "),$t=n(T,"CODE",{});var _l=s($t);Qo=i(_l,"-"),_l.forEach(e),zo=i(T,` symbols on the chip. So my
		first research was about whether the red or the black cable is `),xt=n(T,"CODE",{});var gl=s(xt);Ko=i(gl,"+"),gl.forEach(e),Jo=i(T," or "),Ht=n(T,"CODE",{});var Dl=s(Ht);Xo=i(Dl,"-"),Dl.forEach(e),Yo=i(T,"."),T.forEach(e),Be=p(t),ot=n(t,"P",{});var Pl=s(ot);Zo=i(Pl,`When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.`),Pl.forEach(e),Le=p(t),E=n(t,"P",{});var M=s(E);ta=i(M,"Long story short, in "),V=n(M,"A",{href:!0,rel:!0});var Sl=s(V);ea=i(Sl,"the Pocuter Discord"),Sl.forEach(e),oa=i(M,`, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the `),qt=n(M,"CODE",{});var Tl=s(qt);aa=i(Tl,"+"),Tl.forEach(e),ia=i(M," pole and the black cable to the "),Rt=n(M,"CODE",{});var Ul=s(Rt);la=i(Ul,"-"),Ul.forEach(e),ra=i(M,` pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.`),M.forEach(e),$e=p(t),at=n(t,"P",{});var Ol=s(at);na=i(Ol,`To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.`),Ol.forEach(e),xe=p(t),it=n(t,"P",{});var Cl=s(it);sa=i(Cl,`I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.`),Cl.forEach(e),He=p(t),D=n(t,"P",{});var St=s(D);ha=i(St,"I then started soldering with the black one on the "),Mt=n(St,"CODE",{});var Al=s(Mt);da=i(Al,"-"),Al.forEach(e),pa=i(St,` pole. I thought it's probably
		easier to put the soldering down on the less exposed port first, so fixing something wouldn't
		automatically mean I have to remove the potentially working and more exposed
		`),Wt=n(St,"CODE",{});var Bl=s(Wt);ca=i(Bl,"+"),Bl.forEach(e),ua=i(St," port as well."),St.forEach(e),qe=p(t),lt=n(t,"P",{});var Ll=s(lt);fa=i(Ll,`While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!`),Ll.forEach(e),Re=p(t),rt=n(t,"P",{});var $l=s(rt);ma=i($l,`If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.`),$l.forEach(e),Me=p(t),nt=n(t,"H4",{});var xl=s(nt);wa=i(xl,"Assembly of the watch kit"),xl.forEach(e),We=p(t),st=n(t,"P",{});var Hl=s(st);ba=i(Hl,`Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.`),Hl.forEach(e),Fe=p(t),ht=n(t,"P",{});var ql=s(ht);ya=i(ql,`After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.`),ql.forEach(e),Ne=p(t),dt=n(t,"P",{});var Rl=s(dt);va=i(Rl,`Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.`),Rl.forEach(e),Ve=p(t),pt=n(t,"H3",{});var Ml=s(pt);Ia=i(Ml,"Applications"),Ml.forEach(e),je=p(t),k=n(t,"P",{});var W=s(k);Ea=i(W,`There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are `),Ft=n(W,"CODE",{});var Wl=s(Ft);ka=i(Wl,".zip"),Wl.forEach(e),_a=i(W,` files.
		In these, there is a folder named with a number and in that folder, there is a file called
		`),Nt=n(W,"CODE",{});var Fl=s(Nt);ga=i(Fl,"esp32c3.app"),Fl.forEach(e),Da=i(W,". On the SD card, these need to be put into an "),Vt=n(W,"CODE",{});var Nl=s(Vt);Pa=i(Nl,"apps"),Nl.forEach(e),Sa=i(W,` folder,
		keeping the numbered folder.`),W.forEach(e),Ge=p(t),ct=n(t,"P",{});var Vl=s(ct);Ta=i(Vl,"To make it clear, the structure of the SD card should look like this:"),Vl.forEach(e),Qe=p(t),Wr(j.$$.fragment,t),ze=p(t),ut=n(t,"P",{});var jl=s(ut);Ua=i(jl,`Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.`),jl.forEach(e),Ke=p(t),ft=n(t,"P",{});var Gl=s(ft);Oa=i(Gl,"Writing my own app took a bit longer..."),Gl.forEach(e),Je=p(t),mt=n(t,"H3",{});var Ql=s(mt);Ca=i(Ql,"Writing an app for the Pocuter"),Ql.forEach(e),Xe=p(t),L=n(t,"P",{});var go=s(L);Aa=i(go,`To develop an application for the Pocuter, it's necessary to have a build setup that allows to
		compile code to the Arduino. It's possible to do this in different ways, the easiest is to use
		the `),G=n(go,"A",{href:!0,rel:!0});var zl=s(G);Ba=i(zl,"Arduino IDE"),zl.forEach(e),La=i(go,`. In the current
		pocuter documentation, it's documented how to setup the Arduino IDE 1.x, but there is a version
		2 already. I've made it work with version 2 on my Mac before I got a working build setup with my
		currently favorite IDE, VSCode. I'm documenting how I set it up in both ways.`),go.forEach(e),Ye=p(t),wt=n(t,"H4",{});var Kl=s(wt);$a=i(Kl,"Setup Arduino IDE 2.x"),Kl.forEach(e),Ze=p(t),P=n(t,"P",{});var Tt=s(P);xa=i(Tt,"First thing I had to do is adding the additional boards manager URL. They provided the URL "),jt=n(Tt,"CODE",{});var Jl=s(jt);Ha=i(Jl,"https://raw.githubusercontent.com/pocuter/ArduinoBoard/main/pocuter_arduino.json"),Jl.forEach(e),qa=i(Tt,`
		in their documentation and this value can be put into
		`),Gt=n(Tt,"CODE",{});var Xl=s(Gt);Ra=i(Xl,'Arduino IDE -> Settings ... > "Additional Boards Manager URLs"'),Xl.forEach(e),Ma=i(Tt,`. After doing
		this, the Pocuter board should be included in the "boards manager". The boards manager is the
		second item on the left side.`),Tt.forEach(e),to=p(t),$=n(t,"IMG",{src:!0,alt:!0,class:!0}),eo=p(t),bt=n(t,"P",{});var Yl=s(bt);Wa=i(Yl,`As far as I understood it, you need the various boards to be able to actually compile code for
		them. As soon as the board is there, writing an application and compiling it should work.`),Yl.forEach(e),oo=p(t),yt=n(t,"H4",{});var Zl=s(yt);Fa=i(Zl,"Connecting the Pocuter"),Zl.forEach(e),ao=p(t),x=n(t,"P",{});var Do=s(x);Na=i(Do,`This one was tricky when working with my Mac OS Ventura. There are quite a few blog posts out
		there mentioning to install some third party USB drivers. Most of them seem to be outdated
		though and when I tried out a couple of these, the USB connection still didn't work for me. I
		took me a while to understand one crucial thing: USB cables are not equal to USB cables. There
		are some cables that only deliver current but no data. If you happen to try and use one of the
		"current-only" cables, you won't be able to find your Pocuter through the serial ports at all.
		If you don't see any changes in `),Qt=n(Do,"CODE",{});var tr=s(Qt);Va=i(tr,"ls /dev/cu.*"),tr.forEach(e),ja=i(Do,` when plugging the cable in or removing
		it, the cable itself may be the culprit.`),Do.forEach(e),io=p(t),vt=n(t,"H4",{});var er=s(vt);Ga=i(er,"Uploading code to the pocuter"),er.forEach(e),lo=p(t),It=n(t,"P",{});var or=s(It);Qa=i(or,"Ok, so I've seen multiple ways to do this, each of them have their own pros and cons:"),or.forEach(e),ro=p(t),S=n(t,"OL",{});var Ut=s(S);Q=n(Ut,"LI",{});var Po=s(Q);za=i(Po,"Update the SD card and write into the "),zt=n(Po,"CODE",{});var ar=s(zt);Ka=i(ar,"/apps/"),ar.forEach(e),Ja=i(Po," folder"),Po.forEach(e),Xa=p(Ut),Kt=n(Ut,"LI",{});var ir=s(Kt);Ya=i(ir,"Upload compiled code directly through the USB serial port"),ir.forEach(e),Za=p(Ut),Jt=n(Ut,"LI",{});var lr=s(Jt);ti=i(lr,"Upload through HTTP through an app installed on the pocuter"),lr.forEach(e),Ut.forEach(e),no=p(t),Et=n(t,"H5",{});var rr=s(Et);ei=i(rr,"1. Using SD card"),rr.forEach(e),so=p(t),kt=n(t,"P",{});var nr=s(kt);oi=i(nr,`The SD card approach is the one mentioned in the documentation and is done through multiple
		steps:`),nr.forEach(e),ho=p(t),c=n(t,"OL",{});var w=s(c);Xt=n(w,"LI",{});var sr=s(Xt);ai=i(sr,"Compile the new version of your app (several steps)"),sr.forEach(e),ii=p(w),Yt=n(w,"LI",{});var hr=s(Yt);li=i(hr,"Remove the SD card from the pocuter"),hr.forEach(e),ri=p(w),Zt=n(w,"LI",{});var dr=s(Zt);ni=i(dr,"Put the SD card into a reader"),dr.forEach(e),si=p(w),te=n(w,"LI",{});var pr=s(te);hi=i(pr,"Mount it on the computer"),pr.forEach(e),di=p(w),z=n(w,"LI",{});var So=s(z);pi=i(So,"Copy the compiled version into the "),ee=n(So,"CODE",{});var cr=s(ee);ci=i(cr,"/apps/"),cr.forEach(e),ui=i(So," folder on the SD card"),So.forEach(e),fi=p(w),oe=n(w,"LI",{});var ur=s(oe);mi=i(ur,"Unmount the SD card from the computer"),ur.forEach(e),wi=p(w),ae=n(w,"LI",{});var fr=s(ae);bi=i(fr,"Put the SD card back into the pocuter"),fr.forEach(e),yi=p(w),ie=n(w,"LI",{});var mr=s(ie);vi=i(mr,"Restart the pocuter"),mr.forEach(e),w.forEach(e),po=p(t),_t=n(t,"P",{});var wr=s(_t);Ii=i(wr,`While these steps worked really well for me, especially when I had the issue with the USB cable,
		this is quite a tedious process and involves a lot of manual work that can't easily be
		automated. It works for releases, but testing intermediate versions of your app takes quite some
		time.`),wr.forEach(e),co=p(t),gt=n(t,"H5",{});var br=s(gt);Ei=i(br,"2. Using USB"),br.forEach(e),uo=p(t),_=n(t,"P",{});var F=s(_);ki=i(F,`The second option is to upload compiled code directly to the pocuter. When trying to upload code
		through the Arduino IDE 2.x, I faced another issue. The error told me something like `),le=n(F,"CODE",{});var yr=s(le);_i=i(yr,"Property 'upload.tool' is undefined"),yr.forEach(e),gi=i(F,`
		or `),re=n(F,"CODE",{});var vr=s(re);Di=i(vr,"Property 'upload.tool.serial' is undefined"),vr.forEach(e),Pi=i(F,`. It looks like Arduino IDE 2.x
		changed a bit regarding the `),ne=n(F,"CODE",{});var Ir=s(ne);Si=i(Ir,"boards.txt"),Ir.forEach(e),Ti=i(F,` files, which seem to be the instructions for
		how to upload code to the board.`),F.forEach(e),fo=p(t),v=n(t,"P",{});var U=s(v);Ui=i(U,"First of all, the I had to install the version "),se=n(U,"CODE",{});var Er=s(se);Oi=i(Er,"2.0.5-RC1-PC1.3"),Er.forEach(e),Ci=i(U,` of the Pocuter
		library because the newer version didn't compile for me. After using that version and seeing the
		error above, I had to change the file
		`),he=n(U,"CODE",{});var kr=s(he);Ai=i(kr,"$HOME/Library/Arduino15/packages/esp32/hardware/esp32/2.0.5-RC1-PC1.3/boards.txt"),kr.forEach(e),Bi=i(U,` to
		make this work. There is a line `),de=n(U,"CODE",{});var _r=s(de);Li=i(_r,"pocuterone.upload.tool=esptool_py"),_r.forEach(e),$i=i(U,` which needed to
		be changed to
		`),pe=n(U,"CODE",{});var gr=s(pe);xi=i(gr,"pocuterone.upload.tool.serial=esptool_py"),gr.forEach(e),Hi=i(U,`. After this change, uploading through the
		Arduino IDE 2.x worked.`),U.forEach(e),mo=p(t),H=n(t,"P",{});var To=s(H);qi=i(To,`Since this worked now, I could even change my setup to make uploading work through the command
		line. This improves my development experience, because I can use my favorite IDE instead of the
		Arduino IDE to prepare the Sketches (VSCode) and then use the command line tool `),ce=n(To,"CODE",{});var Dr=s(ce);Ri=i(Dr,"arduino-cli"),Dr.forEach(e),Mi=i(To,` to compile and upload it. My current setup consists of two steps to make the compilation and upload
		work:`),To.forEach(e),wo=p(t),q=n(t,"OL",{});var Uo=s(q);ue=n(Uo,"LI",{});var Pr=s(ue);fe=n(Pr,"CODE",{});var Sr=s(fe);Wi=i(Sr,'arduino-cli compile -b "$FQBN" -p "$USB_PORT" --build-path "$BUILD_PATH"'),Sr.forEach(e),Pr.forEach(e),Fi=p(Uo),me=n(Uo,"LI",{});var Tr=s(me);we=n(Tr,"CODE",{});var Ur=s(we);Ni=i(Ur,'arduino-cli upload --input-dir "$BUILD_PATH" -b "$FQBN" -p "$USB_PORT"'),Ur.forEach(e),Tr.forEach(e),Uo.forEach(e),bo=p(t),u=n(t,"P",{});var b=s(u);Vi=i(b,"The "),be=n(b,"CODE",{});var Or=s(be);ji=i(Or,"FQBN"),Or.forEach(e),Gi=i(b," I got from checking the boards list ("),ye=n(b,"CODE",{});var Cr=s(ye);Qi=i(Cr,"arduino-cli board listall"),Cr.forEach(e),zi=i(b,"), which gave me "),ve=n(b,"CODE",{});var Ar=s(ve);Ki=i(Ar,"esp32:esp32:pocuterone"),Ar.forEach(e),Ji=i(b," identifier. The "),Ie=n(b,"CODE",{});var Br=s(Ie);Xi=i(Br,"USB_PORT"),Br.forEach(e),Yi=i(b,` I
		get by using `),Ee=n(b,"CODE",{});var Lr=s(Ee);Zi=i(Lr,"find /dev/cu.usb*"),Lr.forEach(e),tl=i(b,` when the Pocuter is connected with a USB cable that
		supports data transfer - as I mentioned earlier, this took me a while to figure out. The
		`),ke=n(b,"CODE",{});var $r=s(ke);el=i($r,"BUILD_PATH"),$r.forEach(e),ol=i(b,`
		is set to `),_e=n(b,"CODE",{});var xr=s(_e);al=i(xr,"./build"),xr.forEach(e),il=i(b,` so it doesn't use some temporary directory and always needs to recompile
		if something fails during upload.`),b.forEach(e),yo=p(t),Dt=n(t,"P",{});var Hr=s(Dt);ll=i(Hr,`The bad side of this is that uploading code through USB is only replacing the current version.
		It will not persist as an app and you still need to write to the SD card in a later step.`),Hr.forEach(e),vo=p(t),Pt=n(t,"H5",{});var qr=s(Pt);rl=i(qr,"Using HTTP server"),qr.forEach(e),Io=p(t),R=n(t,"P",{});var Oo=s(R);nl=i(Oo,"I have to admit, I haven't tried this yet, but someone in the Pocuter Discord shared their "),K=n(Oo,"A",{href:!0,rel:!0});var Rr=s(K);sl=i(Rr,"deployment tool"),Rr.forEach(e),hl=i(Oo,`. From my understanding, you can install this Code Upload Server app to directly write on the
		SD card. That means you'll be able to quickly write the whole app on it instead of using the SD
		card approach mentioned earlier.`),Oo.forEach(e),this.h()},h(){I(f,"class","info svelte-7arsvs"),I(C,"class","date svelte-7arsvs"),I(N,"href","https://pocuter.com/docs/pocuter-one"),I(N,"rel","external"),I(V,"href","https://discord.com/channels/762688795035697182/762688795035697186"),I(V,"rel","external"),I(G,"href","https://www.arduino.cc/en/software"),I(G,"rel","external"),Kr($.src,pl=Zr)||I($,"src",pl),I($,"alt","The boards manager"),I($,"class","svelte-7arsvs"),I(K,"href","https://github.com/kallistisoft/PocuterUtils"),I(K,"rel","external")},m(t,l){h(t,f,l),o(f,O),h(t,m,l),h(t,g,l),o(g,J),h(t,ge,l),h(t,C,l),o(C,Co),o(C,Ct),o(Ct,Ao),h(t,De,l),h(t,X,l),o(X,Bo),h(t,Pe,l),h(t,Y,l),o(Y,Lo),h(t,Se,l),h(t,A,l),o(A,$o),o(A,N),o(N,xo),o(A,Ho),h(t,Te,l),h(t,Z,l),o(Z,qo),h(t,Ue,l),h(t,tt,l),o(tt,Ro),h(t,Oe,l),h(t,B,l),o(B,At),o(At,Mo),o(B,Wo),o(B,Bt),o(Bt,Fo),h(t,Ce,l),h(t,et,l),o(et,No),h(t,Ae,l),h(t,y,l),o(y,Vo),o(y,Lt),o(Lt,jo),o(y,Go),o(y,$t),o($t,Qo),o(y,zo),o(y,xt),o(xt,Ko),o(y,Jo),o(y,Ht),o(Ht,Xo),o(y,Yo),h(t,Be,l),h(t,ot,l),o(ot,Zo),h(t,Le,l),h(t,E,l),o(E,ta),o(E,V),o(V,ea),o(E,oa),o(E,qt),o(qt,aa),o(E,ia),o(E,Rt),o(Rt,la),o(E,ra),h(t,$e,l),h(t,at,l),o(at,na),h(t,xe,l),h(t,it,l),o(it,sa),h(t,He,l),h(t,D,l),o(D,ha),o(D,Mt),o(Mt,da),o(D,pa),o(D,Wt),o(Wt,ca),o(D,ua),h(t,qe,l),h(t,lt,l),o(lt,fa),h(t,Re,l),h(t,rt,l),o(rt,ma),h(t,Me,l),h(t,nt,l),o(nt,wa),h(t,We,l),h(t,st,l),o(st,ba),h(t,Fe,l),h(t,ht,l),o(ht,ya),h(t,Ne,l),h(t,dt,l),o(dt,va),h(t,Ve,l),h(t,pt,l),o(pt,Ia),h(t,je,l),h(t,k,l),o(k,Ea),o(k,Ft),o(Ft,ka),o(k,_a),o(k,Nt),o(Nt,ga),o(k,Da),o(k,Vt),o(Vt,Pa),o(k,Sa),h(t,Ge,l),h(t,ct,l),o(ct,Ta),h(t,Qe,l),Fr(j,t,l),h(t,ze,l),h(t,ut,l),o(ut,Ua),h(t,Ke,l),h(t,ft,l),o(ft,Oa),h(t,Je,l),h(t,mt,l),o(mt,Ca),h(t,Xe,l),h(t,L,l),o(L,Aa),o(L,G),o(G,Ba),o(L,La),h(t,Ye,l),h(t,wt,l),o(wt,$a),h(t,Ze,l),h(t,P,l),o(P,xa),o(P,jt),o(jt,Ha),o(P,qa),o(P,Gt),o(Gt,Ra),o(P,Ma),h(t,to,l),h(t,$,l),h(t,eo,l),h(t,bt,l),o(bt,Wa),h(t,oo,l),h(t,yt,l),o(yt,Fa),h(t,ao,l),h(t,x,l),o(x,Na),o(x,Qt),o(Qt,Va),o(x,ja),h(t,io,l),h(t,vt,l),o(vt,Ga),h(t,lo,l),h(t,It,l),o(It,Qa),h(t,ro,l),h(t,S,l),o(S,Q),o(Q,za),o(Q,zt),o(zt,Ka),o(Q,Ja),o(S,Xa),o(S,Kt),o(Kt,Ya),o(S,Za),o(S,Jt),o(Jt,ti),h(t,no,l),h(t,Et,l),o(Et,ei),h(t,so,l),h(t,kt,l),o(kt,oi),h(t,ho,l),h(t,c,l),o(c,Xt),o(Xt,ai),o(c,ii),o(c,Yt),o(Yt,li),o(c,ri),o(c,Zt),o(Zt,ni),o(c,si),o(c,te),o(te,hi),o(c,di),o(c,z),o(z,pi),o(z,ee),o(ee,ci),o(z,ui),o(c,fi),o(c,oe),o(oe,mi),o(c,wi),o(c,ae),o(ae,bi),o(c,yi),o(c,ie),o(ie,vi),h(t,po,l),h(t,_t,l),o(_t,Ii),h(t,co,l),h(t,gt,l),o(gt,Ei),h(t,uo,l),h(t,_,l),o(_,ki),o(_,le),o(le,_i),o(_,gi),o(_,re),o(re,Di),o(_,Pi),o(_,ne),o(ne,Si),o(_,Ti),h(t,fo,l),h(t,v,l),o(v,Ui),o(v,se),o(se,Oi),o(v,Ci),o(v,he),o(he,Ai),o(v,Bi),o(v,de),o(de,Li),o(v,$i),o(v,pe),o(pe,xi),o(v,Hi),h(t,mo,l),h(t,H,l),o(H,qi),o(H,ce),o(ce,Ri),o(H,Mi),h(t,wo,l),h(t,q,l),o(q,ue),o(ue,fe),o(fe,Wi),o(q,Fi),o(q,me),o(me,we),o(we,Ni),h(t,bo,l),h(t,u,l),o(u,Vi),o(u,be),o(be,ji),o(u,Gi),o(u,ye),o(ye,Qi),o(u,zi),o(u,ve),o(ve,Ki),o(u,Ji),o(u,Ie),o(Ie,Xi),o(u,Yi),o(u,Ee),o(Ee,Zi),o(u,tl),o(u,ke),o(ke,el),o(u,ol),o(u,_e),o(_e,al),o(u,il),h(t,yo,l),h(t,Dt,l),o(Dt,ll),h(t,vo,l),h(t,Pt,l),o(Pt,rl),h(t,Io,l),h(t,R,l),o(R,nl),o(R,K),o(K,sl),o(R,hl),Eo=!0},p:Jr,i(t){Eo||(Nr(j.$$.fragment,t),Eo=!0)},o(t){Vr(j.$$.fragment,t),Eo=!1},d(t){t&&e(f),t&&e(m),t&&e(g),t&&e(ge),t&&e(C),t&&e(De),t&&e(X),t&&e(Pe),t&&e(Y),t&&e(Se),t&&e(A),t&&e(Te),t&&e(Z),t&&e(Ue),t&&e(tt),t&&e(Oe),t&&e(B),t&&e(Ce),t&&e(et),t&&e(Ae),t&&e(y),t&&e(Be),t&&e(ot),t&&e(Le),t&&e(E),t&&e($e),t&&e(at),t&&e(xe),t&&e(it),t&&e(He),t&&e(D),t&&e(qe),t&&e(lt),t&&e(Re),t&&e(rt),t&&e(Me),t&&e(nt),t&&e(We),t&&e(st),t&&e(Fe),t&&e(ht),t&&e(Ne),t&&e(dt),t&&e(Ve),t&&e(pt),t&&e(je),t&&e(k),t&&e(Ge),t&&e(ct),t&&e(Qe),jr(j,t),t&&e(ze),t&&e(ut),t&&e(Ke),t&&e(ft),t&&e(Je),t&&e(mt),t&&e(Xe),t&&e(L),t&&e(Ye),t&&e(wt),t&&e(Ze),t&&e(P),t&&e(to),t&&e($),t&&e(eo),t&&e(bt),t&&e(oo),t&&e(yt),t&&e(ao),t&&e(x),t&&e(io),t&&e(vt),t&&e(lo),t&&e(It),t&&e(ro),t&&e(S),t&&e(no),t&&e(Et),t&&e(so),t&&e(kt),t&&e(ho),t&&e(c),t&&e(po),t&&e(_t),t&&e(co),t&&e(gt),t&&e(uo),t&&e(_),t&&e(fo),t&&e(v),t&&e(mo),t&&e(H),t&&e(wo),t&&e(q),t&&e(bo),t&&e(u),t&&e(yo),t&&e(Dt),t&&e(vo),t&&e(Pt),t&&e(Io),t&&e(R)}}}function en(Ot){let f,O;return f=new Yr({props:{$$slots:{default:[tn]},$$scope:{ctx:Ot}}}),{c(){Mr(f.$$.fragment)},l(m){Wr(f.$$.fragment,m)},m(m,g){Fr(f,m,g),O=!0},p(m,[g]){const J={};g&2&&(J.$$scope={dirty:g,ctx:m}),f.$set(J)},i(m){O||(Nr(f.$$.fragment,m),O=!0)},o(m){Vr(f.$$.fragment,m),O=!1},d(m){jr(f,m)}}}function on(Ot){return[`apps/
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
     ...`]}class nn extends Gr{constructor(f){super(),Qr(this,f,on,en,zr,{})}}export{nn as component};
