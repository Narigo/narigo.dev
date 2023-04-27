import{S as Ea,i as _a,s as Pa,w as wa,x as ya,y as Ia,f as va,t as ga,z as ka,k as l,q as i,a as d,l as s,m as h,r as n,h as e,c as u,n as g,N as Ta,b as r,G as o,B as Da}from"../../../../chunks/index-ed5c000a.js";import{C as Sa}from"../../../../chunks/CodeBlock-718745a2.js";import{P as Aa}from"../../../../chunks/PageLayout-59cb6841.js";const Oa=""+new URL("../../../../assets/boards-manager-a9b14f77.png",import.meta.url).href;function xa(rt){let p,k,c,w,B,_t,q,de,Pt,W,ue,Tt,E,pe,x,ce,fe,Dt,L,me,St,M,be,At,_,lt,we,ye,st,Ie,Ot,H,ve,xt,f,ge,ht,ke,Ee,dt,_e,Pe,ut,Te,De,pt,Se,Ae,Ct,R,Oe,$t,m,xe,C,Ce,$e,ct,Ue,Be,ft,qe,We,Ut,j,Le,Bt,G,Me,qt,y,He,mt,Re,je,bt,Ge,ze,Wt,z,Fe,Lt,F,Ke,Mt,K,Ve,Ht,V,Ne,Rt,N,Je,jt,J,Qe,Gt,Q,Xe,zt,b,Ye,wt,Ze,to,yt,eo,oo,It,ao,io,Ft,X,no,Kt,$,Vt,Y,ro,Nt,Z,lo,Jt,tt,so,Qt,P,ho,U,uo,po,Xt,et,co,Yt,I,fo,vt,mo,bo,gt,wo,yo,Zt,T,Do,te,ot,Io,ee,at,vo,oe,D,go,kt,ko,Eo,ae,S,_o,Et,Po,To,ie;return $=new Sa({props:{code:rt[0]}}),{c(){p=l("p"),k=i(`Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.`),c=d(),w=l("h2"),B=i("Pocuter One"),_t=d(),q=l("p"),de=i(`The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.`),Pt=d(),W=l("p"),ue=i(`While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.`),Tt=d(),E=l("p"),pe=i("If you haven't checked out the "),x=l("a"),ce=i("documentation of the Pocuter One"),fe=i(", it's definitely something to look at first."),Dt=d(),L=l("h3"),me=i("WatchKit assembly"),St=d(),M=l("p"),be=i("There are a few things that need to be done before playing around with apps:"),At=d(),_=l("ol"),lt=l("li"),we=i("Solder a battery to the chip"),ye=d(),st=l("li"),Ie=i("Assemble the watch itself"),Ot=d(),H=l("h4"),ve=i("Soldering the battery"),xt=d(),f=l("p"),ge=i(`The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the `),ht=l("code"),ke=i("+"),Ee=i(" and "),dt=l("code"),_e=i("-"),Pe=i(` symbols on the chip. So my
		first research was about whether the red or the black cable is `),ut=l("code"),Te=i("+"),De=i(" or "),pt=l("code"),Se=i("-"),Ae=i("."),Ct=d(),R=l("p"),Oe=i(`When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.`),$t=d(),m=l("p"),xe=i("Long story short, in "),C=l("a"),Ce=i("the Pocuter Discord"),$e=i(`, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the `),ct=l("code"),Ue=i("+"),Be=i(" pole and the black cable to the "),ft=l("code"),qe=i("-"),We=i(` pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.`),Ut=d(),j=l("p"),Le=i(`To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.`),Bt=d(),G=l("p"),Me=i(`I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.`),qt=d(),y=l("p"),He=i("I then started soldering with the black one on the "),mt=l("code"),Re=i("-"),je=i(` pole. I thought it's probably
		easier to put the soldering down on the less exposed port first, so fixing something wouldn't
		automatically mean I have to remove the potentially working and more exposed
		`),bt=l("code"),Ge=i("+"),ze=i(" port as well."),Wt=d(),z=l("p"),Fe=i(`While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!`),Lt=d(),F=l("p"),Ke=i(`If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.`),Mt=d(),K=l("h4"),Ve=i("Assembly of the watch kit"),Ht=d(),V=l("p"),Ne=i(`Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.`),Rt=d(),N=l("p"),Je=i(`After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.`),jt=d(),J=l("p"),Qe=i(`Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.`),Gt=d(),Q=l("h3"),Xe=i("Applications"),zt=d(),b=l("p"),Ye=i(`There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are `),wt=l("code"),Ze=i(".zip"),to=i(` files.
		In these, there is a folder named with a number and in that folder, there is a file called
		`),yt=l("code"),eo=i("esp32c3.app"),oo=i(". On the SD card, these need to be put into an "),It=l("code"),ao=i("apps"),io=i(` folder,
		keeping the numbered folder.`),Ft=d(),X=l("p"),no=i("To make it clear, the structure of the SD card should look like this:"),Kt=d(),wa($.$$.fragment),Vt=d(),Y=l("p"),ro=i(`Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.`),Nt=d(),Z=l("p"),lo=i("Writing my own app took a bit longer..."),Jt=d(),tt=l("h3"),so=i("Writing an app for the Pocuter"),Qt=d(),P=l("p"),ho=i(`To develop an application for the Pocuter, it's necessary to have a build setup that allows to
		compile code to the Arduino. It's possible to do this in different ways, the easiest is to use
		the `),U=l("a"),uo=i("Arduino IDE"),po=i(`. In the current
		pocuter documentation, it's documented how to setup the Arduino IDE 1.x, but there is a version
		2 already. I've made it work with version 2 on my Mac before I got a working build setup with my
		currently favorite IDE, VSCode. I'm documenting how I set it up in both ways.`),Xt=d(),et=l("h4"),co=i("Setup Arduino IDE 2.x"),Yt=d(),I=l("p"),fo=i("First thing I had to do is adding the additional boards manager URL. They provided the URL "),vt=l("code"),mo=i("https://raw.githubusercontent.com/pocuter/ArduinoBoard/main/pocuter_arduino.json"),bo=i(`
		in their documentation and this value can be put into
		`),gt=l("code"),wo=i('Arduino IDE -> Settings ... > "Additional Boards Manager URLs"'),yo=i(`. After doing
		this, the Pocuter board should be included in the "boards manager". The boards manager is the
		second item on the left side.`),Zt=d(),T=l("img"),te=d(),ot=l("p"),Io=i(`As far as I understood it, you need the various boards to be able to actually compile code for
		them. As soon as the board is there, writing an application and compiling it should work.`),ee=d(),at=l("h4"),vo=i("Connecting the Pocuter"),oe=d(),D=l("p"),go=i(`This one was tricky when working with my Mac OS Ventura. There are quite a few blog posts out
		there mentioning to install some third party USB drivers. Most of them seem to be outdated
		though and when I tried out a couple of these, the USB connection still didn't work for me. I
		took me a while to understand one crucial thing: USB cables are not equal to USB cables. There
		are some cables that only deliver current but no data. If you happen to try and use one of the
		"current-only" cables, you won't be able to find your Pocuter through the serial ports at all.
		If you don't see any changes in `),kt=l("code"),ko=i("ls /dev/cu.*"),Eo=i(` when plugging the cable in or removing
		it, the cable itself may be the culprit.`),ae=d(),S=l("p"),_o=i("When trying to upload code from the Arduino IDE, I faced another issue, telling me "),Et=l("code"),Po=i("upload.tool.serial"),To=i(" needs to be set."),this.h()},l(t){p=s(t,"P",{class:!0});var a=h(p);k=n(a,`Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.`),a.forEach(e),c=u(t),w=s(t,"H2",{});var So=h(w);B=n(So,"Pocuter One"),So.forEach(e),_t=u(t),q=s(t,"P",{});var Ao=h(q);de=n(Ao,`The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.`),Ao.forEach(e),Pt=u(t),W=s(t,"P",{});var Oo=h(W);ue=n(Oo,`While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.`),Oo.forEach(e),Tt=u(t),E=s(t,"P",{});var ne=h(E);pe=n(ne,"If you haven't checked out the "),x=s(ne,"A",{href:!0,rel:!0});var xo=h(x);ce=n(xo,"documentation of the Pocuter One"),xo.forEach(e),fe=n(ne,", it's definitely something to look at first."),ne.forEach(e),Dt=u(t),L=s(t,"H3",{});var Co=h(L);me=n(Co,"WatchKit assembly"),Co.forEach(e),St=u(t),M=s(t,"P",{});var $o=h(M);be=n($o,"There are a few things that need to be done before playing around with apps:"),$o.forEach(e),At=u(t),_=s(t,"OL",{});var re=h(_);lt=s(re,"LI",{});var Uo=h(lt);we=n(Uo,"Solder a battery to the chip"),Uo.forEach(e),ye=u(re),st=s(re,"LI",{});var Bo=h(st);Ie=n(Bo,"Assemble the watch itself"),Bo.forEach(e),re.forEach(e),Ot=u(t),H=s(t,"H4",{});var qo=h(H);ve=n(qo,"Soldering the battery"),qo.forEach(e),xt=u(t),f=s(t,"P",{});var v=h(f);ge=n(v,`The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the `),ht=s(v,"CODE",{});var Wo=h(ht);ke=n(Wo,"+"),Wo.forEach(e),Ee=n(v," and "),dt=s(v,"CODE",{});var Lo=h(dt);_e=n(Lo,"-"),Lo.forEach(e),Pe=n(v,` symbols on the chip. So my
		first research was about whether the red or the black cable is `),ut=s(v,"CODE",{});var Mo=h(ut);Te=n(Mo,"+"),Mo.forEach(e),De=n(v," or "),pt=s(v,"CODE",{});var Ho=h(pt);Se=n(Ho,"-"),Ho.forEach(e),Ae=n(v,"."),v.forEach(e),Ct=u(t),R=s(t,"P",{});var Ro=h(R);Oe=n(Ro,`When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.`),Ro.forEach(e),$t=u(t),m=s(t,"P",{});var A=h(m);xe=n(A,"Long story short, in "),C=s(A,"A",{href:!0,rel:!0});var jo=h(C);Ce=n(jo,"the Pocuter Discord"),jo.forEach(e),$e=n(A,`, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the `),ct=s(A,"CODE",{});var Go=h(ct);Ue=n(Go,"+"),Go.forEach(e),Be=n(A," pole and the black cable to the "),ft=s(A,"CODE",{});var zo=h(ft);qe=n(zo,"-"),zo.forEach(e),We=n(A,` pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.`),A.forEach(e),Ut=u(t),j=s(t,"P",{});var Fo=h(j);Le=n(Fo,`To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.`),Fo.forEach(e),Bt=u(t),G=s(t,"P",{});var Ko=h(G);Me=n(Ko,`I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.`),Ko.forEach(e),qt=u(t),y=s(t,"P",{});var it=h(y);He=n(it,"I then started soldering with the black one on the "),mt=s(it,"CODE",{});var Vo=h(mt);Re=n(Vo,"-"),Vo.forEach(e),je=n(it,` pole. I thought it's probably
		easier to put the soldering down on the less exposed port first, so fixing something wouldn't
		automatically mean I have to remove the potentially working and more exposed
		`),bt=s(it,"CODE",{});var No=h(bt);Ge=n(No,"+"),No.forEach(e),ze=n(it," port as well."),it.forEach(e),Wt=u(t),z=s(t,"P",{});var Jo=h(z);Fe=n(Jo,`While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!`),Jo.forEach(e),Lt=u(t),F=s(t,"P",{});var Qo=h(F);Ke=n(Qo,`If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.`),Qo.forEach(e),Mt=u(t),K=s(t,"H4",{});var Xo=h(K);Ve=n(Xo,"Assembly of the watch kit"),Xo.forEach(e),Ht=u(t),V=s(t,"P",{});var Yo=h(V);Ne=n(Yo,`Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.`),Yo.forEach(e),Rt=u(t),N=s(t,"P",{});var Zo=h(N);Je=n(Zo,`After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.`),Zo.forEach(e),jt=u(t),J=s(t,"P",{});var ta=h(J);Qe=n(ta,`Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.`),ta.forEach(e),Gt=u(t),Q=s(t,"H3",{});var ea=h(Q);Xe=n(ea,"Applications"),ea.forEach(e),zt=u(t),b=s(t,"P",{});var O=h(b);Ye=n(O,`There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are `),wt=s(O,"CODE",{});var oa=h(wt);Ze=n(oa,".zip"),oa.forEach(e),to=n(O,` files.
		In these, there is a folder named with a number and in that folder, there is a file called
		`),yt=s(O,"CODE",{});var aa=h(yt);eo=n(aa,"esp32c3.app"),aa.forEach(e),oo=n(O,". On the SD card, these need to be put into an "),It=s(O,"CODE",{});var ia=h(It);ao=n(ia,"apps"),ia.forEach(e),io=n(O,` folder,
		keeping the numbered folder.`),O.forEach(e),Ft=u(t),X=s(t,"P",{});var na=h(X);no=n(na,"To make it clear, the structure of the SD card should look like this:"),na.forEach(e),Kt=u(t),ya($.$$.fragment,t),Vt=u(t),Y=s(t,"P",{});var ra=h(Y);ro=n(ra,`Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.`),ra.forEach(e),Nt=u(t),Z=s(t,"P",{});var la=h(Z);lo=n(la,"Writing my own app took a bit longer..."),la.forEach(e),Jt=u(t),tt=s(t,"H3",{});var sa=h(tt);so=n(sa,"Writing an app for the Pocuter"),sa.forEach(e),Qt=u(t),P=s(t,"P",{});var le=h(P);ho=n(le,`To develop an application for the Pocuter, it's necessary to have a build setup that allows to
		compile code to the Arduino. It's possible to do this in different ways, the easiest is to use
		the `),U=s(le,"A",{href:!0,rel:!0});var ha=h(U);uo=n(ha,"Arduino IDE"),ha.forEach(e),po=n(le,`. In the current
		pocuter documentation, it's documented how to setup the Arduino IDE 1.x, but there is a version
		2 already. I've made it work with version 2 on my Mac before I got a working build setup with my
		currently favorite IDE, VSCode. I'm documenting how I set it up in both ways.`),le.forEach(e),Xt=u(t),et=s(t,"H4",{});var da=h(et);co=n(da,"Setup Arduino IDE 2.x"),da.forEach(e),Yt=u(t),I=s(t,"P",{});var nt=h(I);fo=n(nt,"First thing I had to do is adding the additional boards manager URL. They provided the URL "),vt=s(nt,"CODE",{});var ua=h(vt);mo=n(ua,"https://raw.githubusercontent.com/pocuter/ArduinoBoard/main/pocuter_arduino.json"),ua.forEach(e),bo=n(nt,`
		in their documentation and this value can be put into
		`),gt=s(nt,"CODE",{});var pa=h(gt);wo=n(pa,'Arduino IDE -> Settings ... > "Additional Boards Manager URLs"'),pa.forEach(e),yo=n(nt,`. After doing
		this, the Pocuter board should be included in the "boards manager". The boards manager is the
		second item on the left side.`),nt.forEach(e),Zt=u(t),T=s(t,"IMG",{src:!0,alt:!0,class:!0}),te=u(t),ot=s(t,"P",{});var ca=h(ot);Io=n(ca,`As far as I understood it, you need the various boards to be able to actually compile code for
		them. As soon as the board is there, writing an application and compiling it should work.`),ca.forEach(e),ee=u(t),at=s(t,"H4",{});var fa=h(at);vo=n(fa,"Connecting the Pocuter"),fa.forEach(e),oe=u(t),D=s(t,"P",{});var se=h(D);go=n(se,`This one was tricky when working with my Mac OS Ventura. There are quite a few blog posts out
		there mentioning to install some third party USB drivers. Most of them seem to be outdated
		though and when I tried out a couple of these, the USB connection still didn't work for me. I
		took me a while to understand one crucial thing: USB cables are not equal to USB cables. There
		are some cables that only deliver current but no data. If you happen to try and use one of the
		"current-only" cables, you won't be able to find your Pocuter through the serial ports at all.
		If you don't see any changes in `),kt=s(se,"CODE",{});var ma=h(kt);ko=n(ma,"ls /dev/cu.*"),ma.forEach(e),Eo=n(se,` when plugging the cable in or removing
		it, the cable itself may be the culprit.`),se.forEach(e),ae=u(t),S=s(t,"P",{});var he=h(S);_o=n(he,"When trying to upload code from the Arduino IDE, I faced another issue, telling me "),Et=s(he,"CODE",{});var ba=h(Et);Po=n(ba,"upload.tool.serial"),ba.forEach(e),To=n(he," needs to be set."),he.forEach(e),this.h()},h(){g(p,"class","info svelte-g074k7"),g(x,"href","https://pocuter.com/docs/pocuter-one"),g(x,"rel","external"),g(C,"href","https://discord.com/channels/762688795035697182/762688795035697186"),g(C,"rel","external"),g(U,"href","https://www.arduino.cc/en/software"),g(U,"rel","external"),Ta(T.src,Do=Oa)||g(T,"src",Do),g(T,"alt","The boards manager"),g(T,"class","svelte-g074k7")},m(t,a){r(t,p,a),o(p,k),r(t,c,a),r(t,w,a),o(w,B),r(t,_t,a),r(t,q,a),o(q,de),r(t,Pt,a),r(t,W,a),o(W,ue),r(t,Tt,a),r(t,E,a),o(E,pe),o(E,x),o(x,ce),o(E,fe),r(t,Dt,a),r(t,L,a),o(L,me),r(t,St,a),r(t,M,a),o(M,be),r(t,At,a),r(t,_,a),o(_,lt),o(lt,we),o(_,ye),o(_,st),o(st,Ie),r(t,Ot,a),r(t,H,a),o(H,ve),r(t,xt,a),r(t,f,a),o(f,ge),o(f,ht),o(ht,ke),o(f,Ee),o(f,dt),o(dt,_e),o(f,Pe),o(f,ut),o(ut,Te),o(f,De),o(f,pt),o(pt,Se),o(f,Ae),r(t,Ct,a),r(t,R,a),o(R,Oe),r(t,$t,a),r(t,m,a),o(m,xe),o(m,C),o(C,Ce),o(m,$e),o(m,ct),o(ct,Ue),o(m,Be),o(m,ft),o(ft,qe),o(m,We),r(t,Ut,a),r(t,j,a),o(j,Le),r(t,Bt,a),r(t,G,a),o(G,Me),r(t,qt,a),r(t,y,a),o(y,He),o(y,mt),o(mt,Re),o(y,je),o(y,bt),o(bt,Ge),o(y,ze),r(t,Wt,a),r(t,z,a),o(z,Fe),r(t,Lt,a),r(t,F,a),o(F,Ke),r(t,Mt,a),r(t,K,a),o(K,Ve),r(t,Ht,a),r(t,V,a),o(V,Ne),r(t,Rt,a),r(t,N,a),o(N,Je),r(t,jt,a),r(t,J,a),o(J,Qe),r(t,Gt,a),r(t,Q,a),o(Q,Xe),r(t,zt,a),r(t,b,a),o(b,Ye),o(b,wt),o(wt,Ze),o(b,to),o(b,yt),o(yt,eo),o(b,oo),o(b,It),o(It,ao),o(b,io),r(t,Ft,a),r(t,X,a),o(X,no),r(t,Kt,a),Ia($,t,a),r(t,Vt,a),r(t,Y,a),o(Y,ro),r(t,Nt,a),r(t,Z,a),o(Z,lo),r(t,Jt,a),r(t,tt,a),o(tt,so),r(t,Qt,a),r(t,P,a),o(P,ho),o(P,U),o(U,uo),o(P,po),r(t,Xt,a),r(t,et,a),o(et,co),r(t,Yt,a),r(t,I,a),o(I,fo),o(I,vt),o(vt,mo),o(I,bo),o(I,gt),o(gt,wo),o(I,yo),r(t,Zt,a),r(t,T,a),r(t,te,a),r(t,ot,a),o(ot,Io),r(t,ee,a),r(t,at,a),o(at,vo),r(t,oe,a),r(t,D,a),o(D,go),o(D,kt),o(kt,ko),o(D,Eo),r(t,ae,a),r(t,S,a),o(S,_o),o(S,Et),o(Et,Po),o(S,To),ie=!0},p:Da,i(t){ie||(va($.$$.fragment,t),ie=!0)},o(t){ga($.$$.fragment,t),ie=!1},d(t){t&&e(p),t&&e(c),t&&e(w),t&&e(_t),t&&e(q),t&&e(Pt),t&&e(W),t&&e(Tt),t&&e(E),t&&e(Dt),t&&e(L),t&&e(St),t&&e(M),t&&e(At),t&&e(_),t&&e(Ot),t&&e(H),t&&e(xt),t&&e(f),t&&e(Ct),t&&e(R),t&&e($t),t&&e(m),t&&e(Ut),t&&e(j),t&&e(Bt),t&&e(G),t&&e(qt),t&&e(y),t&&e(Wt),t&&e(z),t&&e(Lt),t&&e(F),t&&e(Mt),t&&e(K),t&&e(Ht),t&&e(V),t&&e(Rt),t&&e(N),t&&e(jt),t&&e(J),t&&e(Gt),t&&e(Q),t&&e(zt),t&&e(b),t&&e(Ft),t&&e(X),t&&e(Kt),ka($,t),t&&e(Vt),t&&e(Y),t&&e(Nt),t&&e(Z),t&&e(Jt),t&&e(tt),t&&e(Qt),t&&e(P),t&&e(Xt),t&&e(et),t&&e(Yt),t&&e(I),t&&e(Zt),t&&e(T),t&&e(te),t&&e(ot),t&&e(ee),t&&e(at),t&&e(oe),t&&e(D),t&&e(ae),t&&e(S)}}}function Ca(rt){let p,k;return p=new Aa({props:{$$slots:{default:[xa]},$$scope:{ctx:rt}}}),{c(){wa(p.$$.fragment)},l(c){ya(p.$$.fragment,c)},m(c,w){Ia(p,c,w),k=!0},p(c,[w]){const B={};w&2&&(B.$$scope={dirty:w,ctx:c}),p.$set(B)},i(c){k||(va(p.$$.fragment,c),k=!0)},o(c){ga(p.$$.fragment,c),k=!1},d(c){ka(p,c)}}}function $a(rt){return[`apps/
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
     ...`]}class Wa extends Ea{constructor(p){super(),_a(this,p,$a,Ca,Pa,{})}}export{Wa as default};
