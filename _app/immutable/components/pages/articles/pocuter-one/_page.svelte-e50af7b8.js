import{S as Rl,i as Ml,s as Wl,w as Bl,x as xl,y as $l,f as Ll,t as Hl,z as ql,k as l,q as i,a as d,l as n,m as s,r as a,h as e,c as p,n as _,N as Fl,b as h,G as o,B as Nl}from"../../../../chunks/index-ed5c000a.js";import{C as jl}from"../../../../chunks/CodeBlock-718745a2.js";import{P as Gl}from"../../../../chunks/PageLayout-59cb6841.js";const Ql=""+new URL("../../../../assets/boards-manager-a9b14f77.png",import.meta.url).href;function Vl(Ut){let f,O,m,g,K,ke,J,To,_e,X,Uo,ge,C,Oo,F,Co,Ao,De,Y,Bo,Pe,Z,xo,Se,A,Ot,$o,Lo,Ct,Ho,Te,tt,qo,Ue,y,Ro,At,Mo,Wo,Bt,Fo,No,xt,jo,Go,$t,Qo,Vo,Oe,et,zo,Ce,I,Ko,N,Jo,Xo,Lt,Yo,Zo,Ht,ti,ei,Ae,ot,oi,Be,it,ii,xe,D,ai,qt,ri,li,Rt,ni,si,$e,at,hi,Le,rt,di,He,lt,pi,qe,nt,ci,Re,st,ui,Me,ht,fi,We,dt,mi,Fe,E,wi,Mt,bi,yi,Wt,vi,Ii,Ft,Ei,ki,Ne,pt,_i,je,j,Ge,ct,gi,Qe,ut,Di,Ve,ft,Pi,ze,B,Si,G,Ti,Ui,Ke,mt,Oi,Je,P,Ci,Nt,Ai,Bi,jt,xi,$i,Xe,x,rr,Ye,wt,Li,Ze,bt,Hi,to,$,qi,Gt,Ri,Mi,eo,yt,Wi,oo,vt,Fi,io,S,Q,Ni,Qt,ji,Gi,Qi,Vt,Vi,zi,zt,Ki,ao,It,Ji,ro,Et,Xi,lo,c,Kt,Yi,Zi,Jt,ta,ea,Xt,oa,ia,Yt,aa,ra,V,la,Zt,na,sa,ha,te,da,pa,ee,ca,ua,oe,fa,no,kt,ma,so,_t,wa,ho,k,ba,ie,ya,va,ae,Ia,Ea,re,ka,_a,po,v,ga,le,Da,Pa,ne,Sa,Ta,se,Ua,Oa,he,Ca,Aa,co,L,Ba,de,xa,$a,uo,H,pe,ce,La,Ha,ue,fe,qa,fo,u,Ra,me,Ma,Wa,we,Fa,Na,be,ja,Ga,ye,Qa,Va,ve,za,Ka,Ie,Ja,Xa,Ee,Ya,Za,mo,gt,tr,wo,Dt,er,bo,q,or,z,ir,ar,yo;return j=new jl({props:{code:Ut[0]}}),{c(){f=l("p"),O=i(`Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.`),m=d(),g=l("h2"),K=i("Pocuter One"),ke=d(),J=l("p"),To=i(`The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.`),_e=d(),X=l("p"),Uo=i(`While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.`),ge=d(),C=l("p"),Oo=i("If you haven't checked out the "),F=l("a"),Co=i("documentation of the Pocuter One"),Ao=i(", it's definitely something to look at first."),De=d(),Y=l("h3"),Bo=i("WatchKit assembly"),Pe=d(),Z=l("p"),xo=i("There are a few things that need to be done before playing around with apps:"),Se=d(),A=l("ol"),Ot=l("li"),$o=i("Solder a battery to the chip"),Lo=d(),Ct=l("li"),Ho=i("Assemble the watch itself"),Te=d(),tt=l("h4"),qo=i("Soldering the battery"),Ue=d(),y=l("p"),Ro=i(`The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the `),At=l("code"),Mo=i("+"),Wo=i(" and "),Bt=l("code"),Fo=i("-"),No=i(` symbols on the chip. So my
		first research was about whether the red or the black cable is `),xt=l("code"),jo=i("+"),Go=i(" or "),$t=l("code"),Qo=i("-"),Vo=i("."),Oe=d(),et=l("p"),zo=i(`When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.`),Ce=d(),I=l("p"),Ko=i("Long story short, in "),N=l("a"),Jo=i("the Pocuter Discord"),Xo=i(`, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the `),Lt=l("code"),Yo=i("+"),Zo=i(" pole and the black cable to the "),Ht=l("code"),ti=i("-"),ei=i(` pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.`),Ae=d(),ot=l("p"),oi=i(`To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.`),Be=d(),it=l("p"),ii=i(`I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.`),xe=d(),D=l("p"),ai=i("I then started soldering with the black one on the "),qt=l("code"),ri=i("-"),li=i(` pole. I thought it's probably
		easier to put the soldering down on the less exposed port first, so fixing something wouldn't
		automatically mean I have to remove the potentially working and more exposed
		`),Rt=l("code"),ni=i("+"),si=i(" port as well."),$e=d(),at=l("p"),hi=i(`While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!`),Le=d(),rt=l("p"),di=i(`If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.`),He=d(),lt=l("h4"),pi=i("Assembly of the watch kit"),qe=d(),nt=l("p"),ci=i(`Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.`),Re=d(),st=l("p"),ui=i(`After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.`),Me=d(),ht=l("p"),fi=i(`Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.`),We=d(),dt=l("h3"),mi=i("Applications"),Fe=d(),E=l("p"),wi=i(`There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are `),Mt=l("code"),bi=i(".zip"),yi=i(` files.
		In these, there is a folder named with a number and in that folder, there is a file called
		`),Wt=l("code"),vi=i("esp32c3.app"),Ii=i(". On the SD card, these need to be put into an "),Ft=l("code"),Ei=i("apps"),ki=i(` folder,
		keeping the numbered folder.`),Ne=d(),pt=l("p"),_i=i("To make it clear, the structure of the SD card should look like this:"),je=d(),Bl(j.$$.fragment),Ge=d(),ct=l("p"),gi=i(`Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.`),Qe=d(),ut=l("p"),Di=i("Writing my own app took a bit longer..."),Ve=d(),ft=l("h3"),Pi=i("Writing an app for the Pocuter"),ze=d(),B=l("p"),Si=i(`To develop an application for the Pocuter, it's necessary to have a build setup that allows to
		compile code to the Arduino. It's possible to do this in different ways, the easiest is to use
		the `),G=l("a"),Ti=i("Arduino IDE"),Ui=i(`. In the current
		pocuter documentation, it's documented how to setup the Arduino IDE 1.x, but there is a version
		2 already. I've made it work with version 2 on my Mac before I got a working build setup with my
		currently favorite IDE, VSCode. I'm documenting how I set it up in both ways.`),Ke=d(),mt=l("h4"),Oi=i("Setup Arduino IDE 2.x"),Je=d(),P=l("p"),Ci=i("First thing I had to do is adding the additional boards manager URL. They provided the URL "),Nt=l("code"),Ai=i("https://raw.githubusercontent.com/pocuter/ArduinoBoard/main/pocuter_arduino.json"),Bi=i(`
		in their documentation and this value can be put into
		`),jt=l("code"),xi=i('Arduino IDE -> Settings ... > "Additional Boards Manager URLs"'),$i=i(`. After doing
		this, the Pocuter board should be included in the "boards manager". The boards manager is the
		second item on the left side.`),Xe=d(),x=l("img"),Ye=d(),wt=l("p"),Li=i(`As far as I understood it, you need the various boards to be able to actually compile code for
		them. As soon as the board is there, writing an application and compiling it should work.`),Ze=d(),bt=l("h4"),Hi=i("Connecting the Pocuter"),to=d(),$=l("p"),qi=i(`This one was tricky when working with my Mac OS Ventura. There are quite a few blog posts out
		there mentioning to install some third party USB drivers. Most of them seem to be outdated
		though and when I tried out a couple of these, the USB connection still didn't work for me. I
		took me a while to understand one crucial thing: USB cables are not equal to USB cables. There
		are some cables that only deliver current but no data. If you happen to try and use one of the
		"current-only" cables, you won't be able to find your Pocuter through the serial ports at all.
		If you don't see any changes in `),Gt=l("code"),Ri=i("ls /dev/cu.*"),Mi=i(` when plugging the cable in or removing
		it, the cable itself may be the culprit.`),eo=d(),yt=l("h4"),Wi=i("Uploading code to the pocuter"),oo=d(),vt=l("p"),Fi=i("Ok, so I've seen multiple ways to do this, each of them have their own pros and cons:"),io=d(),S=l("ol"),Q=l("li"),Ni=i("Update the SD card and write into the "),Qt=l("code"),ji=i("/apps/"),Gi=i(" folder"),Qi=d(),Vt=l("li"),Vi=i("Upload compiled code directly through the USB serial port"),zi=d(),zt=l("li"),Ki=i("Upload through HTTP through an app installed on the pocuter"),ao=d(),It=l("h5"),Ji=i("1. Using SD card"),ro=d(),Et=l("p"),Xi=i(`The SD card approach is the one mentioned in the documentation and is done through multiple
		steps:`),lo=d(),c=l("ol"),Kt=l("li"),Yi=i("Compile the new version of your app (several steps)"),Zi=d(),Jt=l("li"),ta=i("Remove the SD card from the pocuter"),ea=d(),Xt=l("li"),oa=i("Put the SD card into a reader"),ia=d(),Yt=l("li"),aa=i("Mount it on the computer"),ra=d(),V=l("li"),la=i("Copy the compiled version into the "),Zt=l("code"),na=i("/apps/"),sa=i(" folder on the SD card"),ha=d(),te=l("li"),da=i("Unmount the SD card from the computer"),pa=d(),ee=l("li"),ca=i("Put the SD card back into the pocuter"),ua=d(),oe=l("li"),fa=i("Restart the pocuter"),no=d(),kt=l("p"),ma=i(`While these steps worked really well for me, especially when I had the issue with the USB cable,
		this is quite a tedious process and involves a lot of manual work that can't easily be
		automated. It works for releases, but testing intermediate versions of your app takes quite some
		time.`),so=d(),_t=l("h5"),wa=i("2. Using USB"),ho=d(),k=l("p"),ba=i(`The second option is to upload compiled code directly to the pocuter. When trying to upload code
		through the Arduino IDE 2.x, I faced another issue. The error told me something like `),ie=l("code"),ya=i("Property 'upload.tool' is undefined"),va=i(`
		or `),ae=l("code"),Ia=i("Property 'upload.tool.serial' is undefined"),Ea=i(`. It looks like Arduino IDE 2.x
		changed a bit regarding the `),re=l("code"),ka=i("boards.txt"),_a=i(` files, which seem to be the instructions for
		how to upload code to the board.`),po=d(),v=l("p"),ga=i("First of all, the I had to install the version "),le=l("code"),Da=i("2.0.5-RC1-PC1.3"),Pa=i(` of the Pocuter
		library because the newer version didn't compile for me. After using that version and seeing the
		error above, I had to change the file
		`),ne=l("code"),Sa=i("$HOME/Library/Arduino15/packages/esp32/hardware/esp32/2.0.5-RC1-PC1.3/boards.txt"),Ta=i(` to
		make this work. There is a line `),se=l("code"),Ua=i("pocuterone.upload.tool=esptool_py"),Oa=i(` which needed to
		be changed to
		`),he=l("code"),Ca=i("pocuterone.upload.tool.serial=esptool_py"),Aa=i(`. After this change, uploading through the
		Arduino IDE 2.x worked.`),co=d(),L=l("p"),Ba=i(`Since this worked now, I could even change my setup to make uploading work through the command
		line. This improves my development experience, because I can use my favorite IDE instead of the
		Arduino IDE to prepare the Sketches (VSCode) and then use the command line tool `),de=l("code"),xa=i("arduino-cli"),$a=i(` to compile and upload it. My current setup consists of two steps to make the compilation and upload
		work:`),uo=d(),H=l("ol"),pe=l("li"),ce=l("code"),La=i('arduino-cli compile -b "$FQBN" -p "$USB_PORT" --build-path "$BUILD_PATH"'),Ha=d(),ue=l("li"),fe=l("code"),qa=i('arduino-cli upload --input-dir "$BUILD_PATH" -b "$FQBN" -p "$USB_PORT"'),fo=d(),u=l("p"),Ra=i("The "),me=l("code"),Ma=i("FQBN"),Wa=i(" I got from checking the boards list ("),we=l("code"),Fa=i("arduino-cli board listall"),Na=i("), which gave me "),be=l("code"),ja=i("esp32:esp32:pocuterone"),Ga=i(" identifier. The "),ye=l("code"),Qa=i("USB_PORT"),Va=i(` I
		get by using `),ve=l("code"),za=i("find /dev/cu.usb*"),Ka=i(` when the Pocuter is connected with a USB cable that
		supports data transfer - as I mentioned earlier, this took me a while to figure out. The
		`),Ie=l("code"),Ja=i("BUILD_PATH"),Xa=i(`
		is set to `),Ee=l("code"),Ya=i("./build"),Za=i(` so it doesn't use some temporary directory and always needs to recompile
		if something fails during upload.`),mo=d(),gt=l("p"),tr=i(`The bad side of this is that uploading code through USB is only replacing the current version.
		It will not persist as an app and you still need to write to the SD card in a later step.`),wo=d(),Dt=l("h5"),er=i("Using HTTP server"),bo=d(),q=l("p"),or=i("I have to admit, I haven't tried this yet, but someone in the Pocuter Discord shared their "),z=l("a"),ir=i("deployment tool"),ar=i(`. From my understanding, you can install this Code Upload Server app to directly write on the
		SD card. That means you'll be able to quickly write the whole app on it instead of using the SD
		card approach mentioned earlier.`),this.h()},l(t){f=n(t,"P",{class:!0});var r=s(f);O=a(r,`Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.`),r.forEach(e),m=p(t),g=n(t,"H2",{});var lr=s(g);K=a(lr,"Pocuter One"),lr.forEach(e),ke=p(t),J=n(t,"P",{});var nr=s(J);To=a(nr,`The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.`),nr.forEach(e),_e=p(t),X=n(t,"P",{});var sr=s(X);Uo=a(sr,`While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.`),sr.forEach(e),ge=p(t),C=n(t,"P",{});var vo=s(C);Oo=a(vo,"If you haven't checked out the "),F=n(vo,"A",{href:!0,rel:!0});var hr=s(F);Co=a(hr,"documentation of the Pocuter One"),hr.forEach(e),Ao=a(vo,", it's definitely something to look at first."),vo.forEach(e),De=p(t),Y=n(t,"H3",{});var dr=s(Y);Bo=a(dr,"WatchKit assembly"),dr.forEach(e),Pe=p(t),Z=n(t,"P",{});var pr=s(Z);xo=a(pr,"There are a few things that need to be done before playing around with apps:"),pr.forEach(e),Se=p(t),A=n(t,"OL",{});var Io=s(A);Ot=n(Io,"LI",{});var cr=s(Ot);$o=a(cr,"Solder a battery to the chip"),cr.forEach(e),Lo=p(Io),Ct=n(Io,"LI",{});var ur=s(Ct);Ho=a(ur,"Assemble the watch itself"),ur.forEach(e),Io.forEach(e),Te=p(t),tt=n(t,"H4",{});var fr=s(tt);qo=a(fr,"Soldering the battery"),fr.forEach(e),Ue=p(t),y=n(t,"P",{});var T=s(y);Ro=a(T,`The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the `),At=n(T,"CODE",{});var mr=s(At);Mo=a(mr,"+"),mr.forEach(e),Wo=a(T," and "),Bt=n(T,"CODE",{});var wr=s(Bt);Fo=a(wr,"-"),wr.forEach(e),No=a(T,` symbols on the chip. So my
		first research was about whether the red or the black cable is `),xt=n(T,"CODE",{});var br=s(xt);jo=a(br,"+"),br.forEach(e),Go=a(T," or "),$t=n(T,"CODE",{});var yr=s($t);Qo=a(yr,"-"),yr.forEach(e),Vo=a(T,"."),T.forEach(e),Oe=p(t),et=n(t,"P",{});var vr=s(et);zo=a(vr,`When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.`),vr.forEach(e),Ce=p(t),I=n(t,"P",{});var R=s(I);Ko=a(R,"Long story short, in "),N=n(R,"A",{href:!0,rel:!0});var Ir=s(N);Jo=a(Ir,"the Pocuter Discord"),Ir.forEach(e),Xo=a(R,`, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the `),Lt=n(R,"CODE",{});var Er=s(Lt);Yo=a(Er,"+"),Er.forEach(e),Zo=a(R," pole and the black cable to the "),Ht=n(R,"CODE",{});var kr=s(Ht);ti=a(kr,"-"),kr.forEach(e),ei=a(R,` pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.`),R.forEach(e),Ae=p(t),ot=n(t,"P",{});var _r=s(ot);oi=a(_r,`To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.`),_r.forEach(e),Be=p(t),it=n(t,"P",{});var gr=s(it);ii=a(gr,`I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.`),gr.forEach(e),xe=p(t),D=n(t,"P",{});var Pt=s(D);ai=a(Pt,"I then started soldering with the black one on the "),qt=n(Pt,"CODE",{});var Dr=s(qt);ri=a(Dr,"-"),Dr.forEach(e),li=a(Pt,` pole. I thought it's probably
		easier to put the soldering down on the less exposed port first, so fixing something wouldn't
		automatically mean I have to remove the potentially working and more exposed
		`),Rt=n(Pt,"CODE",{});var Pr=s(Rt);ni=a(Pr,"+"),Pr.forEach(e),si=a(Pt," port as well."),Pt.forEach(e),$e=p(t),at=n(t,"P",{});var Sr=s(at);hi=a(Sr,`While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!`),Sr.forEach(e),Le=p(t),rt=n(t,"P",{});var Tr=s(rt);di=a(Tr,`If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.`),Tr.forEach(e),He=p(t),lt=n(t,"H4",{});var Ur=s(lt);pi=a(Ur,"Assembly of the watch kit"),Ur.forEach(e),qe=p(t),nt=n(t,"P",{});var Or=s(nt);ci=a(Or,`Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.`),Or.forEach(e),Re=p(t),st=n(t,"P",{});var Cr=s(st);ui=a(Cr,`After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.`),Cr.forEach(e),Me=p(t),ht=n(t,"P",{});var Ar=s(ht);fi=a(Ar,`Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.`),Ar.forEach(e),We=p(t),dt=n(t,"H3",{});var Br=s(dt);mi=a(Br,"Applications"),Br.forEach(e),Fe=p(t),E=n(t,"P",{});var M=s(E);wi=a(M,`There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are `),Mt=n(M,"CODE",{});var xr=s(Mt);bi=a(xr,".zip"),xr.forEach(e),yi=a(M,` files.
		In these, there is a folder named with a number and in that folder, there is a file called
		`),Wt=n(M,"CODE",{});var $r=s(Wt);vi=a($r,"esp32c3.app"),$r.forEach(e),Ii=a(M,". On the SD card, these need to be put into an "),Ft=n(M,"CODE",{});var Lr=s(Ft);Ei=a(Lr,"apps"),Lr.forEach(e),ki=a(M,` folder,
		keeping the numbered folder.`),M.forEach(e),Ne=p(t),pt=n(t,"P",{});var Hr=s(pt);_i=a(Hr,"To make it clear, the structure of the SD card should look like this:"),Hr.forEach(e),je=p(t),xl(j.$$.fragment,t),Ge=p(t),ct=n(t,"P",{});var qr=s(ct);gi=a(qr,`Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.`),qr.forEach(e),Qe=p(t),ut=n(t,"P",{});var Rr=s(ut);Di=a(Rr,"Writing my own app took a bit longer..."),Rr.forEach(e),Ve=p(t),ft=n(t,"H3",{});var Mr=s(ft);Pi=a(Mr,"Writing an app for the Pocuter"),Mr.forEach(e),ze=p(t),B=n(t,"P",{});var Eo=s(B);Si=a(Eo,`To develop an application for the Pocuter, it's necessary to have a build setup that allows to
		compile code to the Arduino. It's possible to do this in different ways, the easiest is to use
		the `),G=n(Eo,"A",{href:!0,rel:!0});var Wr=s(G);Ti=a(Wr,"Arduino IDE"),Wr.forEach(e),Ui=a(Eo,`. In the current
		pocuter documentation, it's documented how to setup the Arduino IDE 1.x, but there is a version
		2 already. I've made it work with version 2 on my Mac before I got a working build setup with my
		currently favorite IDE, VSCode. I'm documenting how I set it up in both ways.`),Eo.forEach(e),Ke=p(t),mt=n(t,"H4",{});var Fr=s(mt);Oi=a(Fr,"Setup Arduino IDE 2.x"),Fr.forEach(e),Je=p(t),P=n(t,"P",{});var St=s(P);Ci=a(St,"First thing I had to do is adding the additional boards manager URL. They provided the URL "),Nt=n(St,"CODE",{});var Nr=s(Nt);Ai=a(Nr,"https://raw.githubusercontent.com/pocuter/ArduinoBoard/main/pocuter_arduino.json"),Nr.forEach(e),Bi=a(St,`
		in their documentation and this value can be put into
		`),jt=n(St,"CODE",{});var jr=s(jt);xi=a(jr,'Arduino IDE -> Settings ... > "Additional Boards Manager URLs"'),jr.forEach(e),$i=a(St,`. After doing
		this, the Pocuter board should be included in the "boards manager". The boards manager is the
		second item on the left side.`),St.forEach(e),Xe=p(t),x=n(t,"IMG",{src:!0,alt:!0,class:!0}),Ye=p(t),wt=n(t,"P",{});var Gr=s(wt);Li=a(Gr,`As far as I understood it, you need the various boards to be able to actually compile code for
		them. As soon as the board is there, writing an application and compiling it should work.`),Gr.forEach(e),Ze=p(t),bt=n(t,"H4",{});var Qr=s(bt);Hi=a(Qr,"Connecting the Pocuter"),Qr.forEach(e),to=p(t),$=n(t,"P",{});var ko=s($);qi=a(ko,`This one was tricky when working with my Mac OS Ventura. There are quite a few blog posts out
		there mentioning to install some third party USB drivers. Most of them seem to be outdated
		though and when I tried out a couple of these, the USB connection still didn't work for me. I
		took me a while to understand one crucial thing: USB cables are not equal to USB cables. There
		are some cables that only deliver current but no data. If you happen to try and use one of the
		"current-only" cables, you won't be able to find your Pocuter through the serial ports at all.
		If you don't see any changes in `),Gt=n(ko,"CODE",{});var Vr=s(Gt);Ri=a(Vr,"ls /dev/cu.*"),Vr.forEach(e),Mi=a(ko,` when plugging the cable in or removing
		it, the cable itself may be the culprit.`),ko.forEach(e),eo=p(t),yt=n(t,"H4",{});var zr=s(yt);Wi=a(zr,"Uploading code to the pocuter"),zr.forEach(e),oo=p(t),vt=n(t,"P",{});var Kr=s(vt);Fi=a(Kr,"Ok, so I've seen multiple ways to do this, each of them have their own pros and cons:"),Kr.forEach(e),io=p(t),S=n(t,"OL",{});var Tt=s(S);Q=n(Tt,"LI",{});var _o=s(Q);Ni=a(_o,"Update the SD card and write into the "),Qt=n(_o,"CODE",{});var Jr=s(Qt);ji=a(Jr,"/apps/"),Jr.forEach(e),Gi=a(_o," folder"),_o.forEach(e),Qi=p(Tt),Vt=n(Tt,"LI",{});var Xr=s(Vt);Vi=a(Xr,"Upload compiled code directly through the USB serial port"),Xr.forEach(e),zi=p(Tt),zt=n(Tt,"LI",{});var Yr=s(zt);Ki=a(Yr,"Upload through HTTP through an app installed on the pocuter"),Yr.forEach(e),Tt.forEach(e),ao=p(t),It=n(t,"H5",{});var Zr=s(It);Ji=a(Zr,"1. Using SD card"),Zr.forEach(e),ro=p(t),Et=n(t,"P",{});var tl=s(Et);Xi=a(tl,`The SD card approach is the one mentioned in the documentation and is done through multiple
		steps:`),tl.forEach(e),lo=p(t),c=n(t,"OL",{});var w=s(c);Kt=n(w,"LI",{});var el=s(Kt);Yi=a(el,"Compile the new version of your app (several steps)"),el.forEach(e),Zi=p(w),Jt=n(w,"LI",{});var ol=s(Jt);ta=a(ol,"Remove the SD card from the pocuter"),ol.forEach(e),ea=p(w),Xt=n(w,"LI",{});var il=s(Xt);oa=a(il,"Put the SD card into a reader"),il.forEach(e),ia=p(w),Yt=n(w,"LI",{});var al=s(Yt);aa=a(al,"Mount it on the computer"),al.forEach(e),ra=p(w),V=n(w,"LI",{});var go=s(V);la=a(go,"Copy the compiled version into the "),Zt=n(go,"CODE",{});var rl=s(Zt);na=a(rl,"/apps/"),rl.forEach(e),sa=a(go," folder on the SD card"),go.forEach(e),ha=p(w),te=n(w,"LI",{});var ll=s(te);da=a(ll,"Unmount the SD card from the computer"),ll.forEach(e),pa=p(w),ee=n(w,"LI",{});var nl=s(ee);ca=a(nl,"Put the SD card back into the pocuter"),nl.forEach(e),ua=p(w),oe=n(w,"LI",{});var sl=s(oe);fa=a(sl,"Restart the pocuter"),sl.forEach(e),w.forEach(e),no=p(t),kt=n(t,"P",{});var hl=s(kt);ma=a(hl,`While these steps worked really well for me, especially when I had the issue with the USB cable,
		this is quite a tedious process and involves a lot of manual work that can't easily be
		automated. It works for releases, but testing intermediate versions of your app takes quite some
		time.`),hl.forEach(e),so=p(t),_t=n(t,"H5",{});var dl=s(_t);wa=a(dl,"2. Using USB"),dl.forEach(e),ho=p(t),k=n(t,"P",{});var W=s(k);ba=a(W,`The second option is to upload compiled code directly to the pocuter. When trying to upload code
		through the Arduino IDE 2.x, I faced another issue. The error told me something like `),ie=n(W,"CODE",{});var pl=s(ie);ya=a(pl,"Property 'upload.tool' is undefined"),pl.forEach(e),va=a(W,`
		or `),ae=n(W,"CODE",{});var cl=s(ae);Ia=a(cl,"Property 'upload.tool.serial' is undefined"),cl.forEach(e),Ea=a(W,`. It looks like Arduino IDE 2.x
		changed a bit regarding the `),re=n(W,"CODE",{});var ul=s(re);ka=a(ul,"boards.txt"),ul.forEach(e),_a=a(W,` files, which seem to be the instructions for
		how to upload code to the board.`),W.forEach(e),po=p(t),v=n(t,"P",{});var U=s(v);ga=a(U,"First of all, the I had to install the version "),le=n(U,"CODE",{});var fl=s(le);Da=a(fl,"2.0.5-RC1-PC1.3"),fl.forEach(e),Pa=a(U,` of the Pocuter
		library because the newer version didn't compile for me. After using that version and seeing the
		error above, I had to change the file
		`),ne=n(U,"CODE",{});var ml=s(ne);Sa=a(ml,"$HOME/Library/Arduino15/packages/esp32/hardware/esp32/2.0.5-RC1-PC1.3/boards.txt"),ml.forEach(e),Ta=a(U,` to
		make this work. There is a line `),se=n(U,"CODE",{});var wl=s(se);Ua=a(wl,"pocuterone.upload.tool=esptool_py"),wl.forEach(e),Oa=a(U,` which needed to
		be changed to
		`),he=n(U,"CODE",{});var bl=s(he);Ca=a(bl,"pocuterone.upload.tool.serial=esptool_py"),bl.forEach(e),Aa=a(U,`. After this change, uploading through the
		Arduino IDE 2.x worked.`),U.forEach(e),co=p(t),L=n(t,"P",{});var Do=s(L);Ba=a(Do,`Since this worked now, I could even change my setup to make uploading work through the command
		line. This improves my development experience, because I can use my favorite IDE instead of the
		Arduino IDE to prepare the Sketches (VSCode) and then use the command line tool `),de=n(Do,"CODE",{});var yl=s(de);xa=a(yl,"arduino-cli"),yl.forEach(e),$a=a(Do,` to compile and upload it. My current setup consists of two steps to make the compilation and upload
		work:`),Do.forEach(e),uo=p(t),H=n(t,"OL",{});var Po=s(H);pe=n(Po,"LI",{});var vl=s(pe);ce=n(vl,"CODE",{});var Il=s(ce);La=a(Il,'arduino-cli compile -b "$FQBN" -p "$USB_PORT" --build-path "$BUILD_PATH"'),Il.forEach(e),vl.forEach(e),Ha=p(Po),ue=n(Po,"LI",{});var El=s(ue);fe=n(El,"CODE",{});var kl=s(fe);qa=a(kl,'arduino-cli upload --input-dir "$BUILD_PATH" -b "$FQBN" -p "$USB_PORT"'),kl.forEach(e),El.forEach(e),Po.forEach(e),fo=p(t),u=n(t,"P",{});var b=s(u);Ra=a(b,"The "),me=n(b,"CODE",{});var _l=s(me);Ma=a(_l,"FQBN"),_l.forEach(e),Wa=a(b," I got from checking the boards list ("),we=n(b,"CODE",{});var gl=s(we);Fa=a(gl,"arduino-cli board listall"),gl.forEach(e),Na=a(b,"), which gave me "),be=n(b,"CODE",{});var Dl=s(be);ja=a(Dl,"esp32:esp32:pocuterone"),Dl.forEach(e),Ga=a(b," identifier. The "),ye=n(b,"CODE",{});var Pl=s(ye);Qa=a(Pl,"USB_PORT"),Pl.forEach(e),Va=a(b,` I
		get by using `),ve=n(b,"CODE",{});var Sl=s(ve);za=a(Sl,"find /dev/cu.usb*"),Sl.forEach(e),Ka=a(b,` when the Pocuter is connected with a USB cable that
		supports data transfer - as I mentioned earlier, this took me a while to figure out. The
		`),Ie=n(b,"CODE",{});var Tl=s(Ie);Ja=a(Tl,"BUILD_PATH"),Tl.forEach(e),Xa=a(b,`
		is set to `),Ee=n(b,"CODE",{});var Ul=s(Ee);Ya=a(Ul,"./build"),Ul.forEach(e),Za=a(b,` so it doesn't use some temporary directory and always needs to recompile
		if something fails during upload.`),b.forEach(e),mo=p(t),gt=n(t,"P",{});var Ol=s(gt);tr=a(Ol,`The bad side of this is that uploading code through USB is only replacing the current version.
		It will not persist as an app and you still need to write to the SD card in a later step.`),Ol.forEach(e),wo=p(t),Dt=n(t,"H5",{});var Cl=s(Dt);er=a(Cl,"Using HTTP server"),Cl.forEach(e),bo=p(t),q=n(t,"P",{});var So=s(q);or=a(So,"I have to admit, I haven't tried this yet, but someone in the Pocuter Discord shared their "),z=n(So,"A",{href:!0,rel:!0});var Al=s(z);ir=a(Al,"deployment tool"),Al.forEach(e),ar=a(So,`. From my understanding, you can install this Code Upload Server app to directly write on the
		SD card. That means you'll be able to quickly write the whole app on it instead of using the SD
		card approach mentioned earlier.`),So.forEach(e),this.h()},h(){_(f,"class","info svelte-g074k7"),_(F,"href","https://pocuter.com/docs/pocuter-one"),_(F,"rel","external"),_(N,"href","https://discord.com/channels/762688795035697182/762688795035697186"),_(N,"rel","external"),_(G,"href","https://www.arduino.cc/en/software"),_(G,"rel","external"),Fl(x.src,rr=Ql)||_(x,"src",rr),_(x,"alt","The boards manager"),_(x,"class","svelte-g074k7"),_(z,"href","https://github.com/kallistisoft/PocuterUtils"),_(z,"rel","external")},m(t,r){h(t,f,r),o(f,O),h(t,m,r),h(t,g,r),o(g,K),h(t,ke,r),h(t,J,r),o(J,To),h(t,_e,r),h(t,X,r),o(X,Uo),h(t,ge,r),h(t,C,r),o(C,Oo),o(C,F),o(F,Co),o(C,Ao),h(t,De,r),h(t,Y,r),o(Y,Bo),h(t,Pe,r),h(t,Z,r),o(Z,xo),h(t,Se,r),h(t,A,r),o(A,Ot),o(Ot,$o),o(A,Lo),o(A,Ct),o(Ct,Ho),h(t,Te,r),h(t,tt,r),o(tt,qo),h(t,Ue,r),h(t,y,r),o(y,Ro),o(y,At),o(At,Mo),o(y,Wo),o(y,Bt),o(Bt,Fo),o(y,No),o(y,xt),o(xt,jo),o(y,Go),o(y,$t),o($t,Qo),o(y,Vo),h(t,Oe,r),h(t,et,r),o(et,zo),h(t,Ce,r),h(t,I,r),o(I,Ko),o(I,N),o(N,Jo),o(I,Xo),o(I,Lt),o(Lt,Yo),o(I,Zo),o(I,Ht),o(Ht,ti),o(I,ei),h(t,Ae,r),h(t,ot,r),o(ot,oi),h(t,Be,r),h(t,it,r),o(it,ii),h(t,xe,r),h(t,D,r),o(D,ai),o(D,qt),o(qt,ri),o(D,li),o(D,Rt),o(Rt,ni),o(D,si),h(t,$e,r),h(t,at,r),o(at,hi),h(t,Le,r),h(t,rt,r),o(rt,di),h(t,He,r),h(t,lt,r),o(lt,pi),h(t,qe,r),h(t,nt,r),o(nt,ci),h(t,Re,r),h(t,st,r),o(st,ui),h(t,Me,r),h(t,ht,r),o(ht,fi),h(t,We,r),h(t,dt,r),o(dt,mi),h(t,Fe,r),h(t,E,r),o(E,wi),o(E,Mt),o(Mt,bi),o(E,yi),o(E,Wt),o(Wt,vi),o(E,Ii),o(E,Ft),o(Ft,Ei),o(E,ki),h(t,Ne,r),h(t,pt,r),o(pt,_i),h(t,je,r),$l(j,t,r),h(t,Ge,r),h(t,ct,r),o(ct,gi),h(t,Qe,r),h(t,ut,r),o(ut,Di),h(t,Ve,r),h(t,ft,r),o(ft,Pi),h(t,ze,r),h(t,B,r),o(B,Si),o(B,G),o(G,Ti),o(B,Ui),h(t,Ke,r),h(t,mt,r),o(mt,Oi),h(t,Je,r),h(t,P,r),o(P,Ci),o(P,Nt),o(Nt,Ai),o(P,Bi),o(P,jt),o(jt,xi),o(P,$i),h(t,Xe,r),h(t,x,r),h(t,Ye,r),h(t,wt,r),o(wt,Li),h(t,Ze,r),h(t,bt,r),o(bt,Hi),h(t,to,r),h(t,$,r),o($,qi),o($,Gt),o(Gt,Ri),o($,Mi),h(t,eo,r),h(t,yt,r),o(yt,Wi),h(t,oo,r),h(t,vt,r),o(vt,Fi),h(t,io,r),h(t,S,r),o(S,Q),o(Q,Ni),o(Q,Qt),o(Qt,ji),o(Q,Gi),o(S,Qi),o(S,Vt),o(Vt,Vi),o(S,zi),o(S,zt),o(zt,Ki),h(t,ao,r),h(t,It,r),o(It,Ji),h(t,ro,r),h(t,Et,r),o(Et,Xi),h(t,lo,r),h(t,c,r),o(c,Kt),o(Kt,Yi),o(c,Zi),o(c,Jt),o(Jt,ta),o(c,ea),o(c,Xt),o(Xt,oa),o(c,ia),o(c,Yt),o(Yt,aa),o(c,ra),o(c,V),o(V,la),o(V,Zt),o(Zt,na),o(V,sa),o(c,ha),o(c,te),o(te,da),o(c,pa),o(c,ee),o(ee,ca),o(c,ua),o(c,oe),o(oe,fa),h(t,no,r),h(t,kt,r),o(kt,ma),h(t,so,r),h(t,_t,r),o(_t,wa),h(t,ho,r),h(t,k,r),o(k,ba),o(k,ie),o(ie,ya),o(k,va),o(k,ae),o(ae,Ia),o(k,Ea),o(k,re),o(re,ka),o(k,_a),h(t,po,r),h(t,v,r),o(v,ga),o(v,le),o(le,Da),o(v,Pa),o(v,ne),o(ne,Sa),o(v,Ta),o(v,se),o(se,Ua),o(v,Oa),o(v,he),o(he,Ca),o(v,Aa),h(t,co,r),h(t,L,r),o(L,Ba),o(L,de),o(de,xa),o(L,$a),h(t,uo,r),h(t,H,r),o(H,pe),o(pe,ce),o(ce,La),o(H,Ha),o(H,ue),o(ue,fe),o(fe,qa),h(t,fo,r),h(t,u,r),o(u,Ra),o(u,me),o(me,Ma),o(u,Wa),o(u,we),o(we,Fa),o(u,Na),o(u,be),o(be,ja),o(u,Ga),o(u,ye),o(ye,Qa),o(u,Va),o(u,ve),o(ve,za),o(u,Ka),o(u,Ie),o(Ie,Ja),o(u,Xa),o(u,Ee),o(Ee,Ya),o(u,Za),h(t,mo,r),h(t,gt,r),o(gt,tr),h(t,wo,r),h(t,Dt,r),o(Dt,er),h(t,bo,r),h(t,q,r),o(q,or),o(q,z),o(z,ir),o(q,ar),yo=!0},p:Nl,i(t){yo||(Ll(j.$$.fragment,t),yo=!0)},o(t){Hl(j.$$.fragment,t),yo=!1},d(t){t&&e(f),t&&e(m),t&&e(g),t&&e(ke),t&&e(J),t&&e(_e),t&&e(X),t&&e(ge),t&&e(C),t&&e(De),t&&e(Y),t&&e(Pe),t&&e(Z),t&&e(Se),t&&e(A),t&&e(Te),t&&e(tt),t&&e(Ue),t&&e(y),t&&e(Oe),t&&e(et),t&&e(Ce),t&&e(I),t&&e(Ae),t&&e(ot),t&&e(Be),t&&e(it),t&&e(xe),t&&e(D),t&&e($e),t&&e(at),t&&e(Le),t&&e(rt),t&&e(He),t&&e(lt),t&&e(qe),t&&e(nt),t&&e(Re),t&&e(st),t&&e(Me),t&&e(ht),t&&e(We),t&&e(dt),t&&e(Fe),t&&e(E),t&&e(Ne),t&&e(pt),t&&e(je),ql(j,t),t&&e(Ge),t&&e(ct),t&&e(Qe),t&&e(ut),t&&e(Ve),t&&e(ft),t&&e(ze),t&&e(B),t&&e(Ke),t&&e(mt),t&&e(Je),t&&e(P),t&&e(Xe),t&&e(x),t&&e(Ye),t&&e(wt),t&&e(Ze),t&&e(bt),t&&e(to),t&&e($),t&&e(eo),t&&e(yt),t&&e(oo),t&&e(vt),t&&e(io),t&&e(S),t&&e(ao),t&&e(It),t&&e(ro),t&&e(Et),t&&e(lo),t&&e(c),t&&e(no),t&&e(kt),t&&e(so),t&&e(_t),t&&e(ho),t&&e(k),t&&e(po),t&&e(v),t&&e(co),t&&e(L),t&&e(uo),t&&e(H),t&&e(fo),t&&e(u),t&&e(mo),t&&e(gt),t&&e(wo),t&&e(Dt),t&&e(bo),t&&e(q)}}}function zl(Ut){let f,O;return f=new Gl({props:{$$slots:{default:[Vl]},$$scope:{ctx:Ut}}}),{c(){Bl(f.$$.fragment)},l(m){xl(f.$$.fragment,m)},m(m,g){$l(f,m,g),O=!0},p(m,[g]){const K={};g&2&&(K.$$scope={dirty:g,ctx:m}),f.$set(K)},i(m){O||(Ll(f.$$.fragment,m),O=!0)},o(m){Hl(f.$$.fragment,m),O=!1},d(m){ql(f,m)}}}function Kl(Ut){return[`apps/
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
     ...`]}class Zl extends Rl{constructor(f){super(),Ml(this,f,Kl,zl,Wl,{})}}export{Zl as default};
