import{S as aa,i as ia,s as na,w as Xo,x as Yo,y as Zo,f as ta,t as ea,z as oa,k as s,q as i,a as d,l,m as h,r as n,h as e,c as p,n as k,N as ra,b as r,G as o,B as sa}from"../../../../chunks/index-ed5c000a.js";import{C as la}from"../../../../chunks/CodeBlock-718745a2.js";import{P as ha}from"../../../../chunks/PageLayout-59cb6841.js";const da=""+new URL("../../../../assets/boards-manager-a9b14f77.png",import.meta.url).href;function pa(at){let u,g,c,b,C,It,U,te,vt,W,ee,kt,_,oe,S,ae,ie,gt,B,ne,_t,q,re,Et,E,it,se,le,nt,he,Pt,L,de,Tt,f,pe,rt,ue,ce,st,fe,me,lt,we,be,ht,ye,Ie,Dt,M,ve,At,m,ke,x,ge,_e,dt,Ee,Pe,pt,Te,De,St,H,Ae,xt,R,Se,Ot,y,xe,ut,Oe,$e,ct,Ce,Ue,$t,j,We,Ct,G,Be,Ut,z,qe,Wt,F,Le,Bt,K,Me,qt,V,He,Lt,N,Re,Mt,w,je,ft,Ge,ze,mt,Fe,Ke,wt,Ve,Ne,Ht,J,Je,Rt,O,jt,Q,Qe,Gt,X,Xe,zt,Y,Ye,Ft,P,Ze,$,to,eo,Kt,Z,oo,Vt,I,ao,bt,io,no,yt,ro,so,Nt,T,ho,Jt,tt,lo,Qt;return O=new la({props:{code:at[0]}}),{c(){u=s("p"),g=i(`Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.`),c=d(),b=s("h2"),C=i("Pocuter One"),It=d(),U=s("p"),te=i(`The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.`),vt=d(),W=s("p"),ee=i(`While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.`),kt=d(),_=s("p"),oe=i("If you haven't checked out the "),S=s("a"),ae=i("documentation of the Pocuter One"),ie=i(", it's definitely something to look at first."),gt=d(),B=s("h3"),ne=i("WatchKit assembly"),_t=d(),q=s("p"),re=i("There are a few things that need to be done before playing around with apps:"),Et=d(),E=s("ol"),it=s("li"),se=i("Solder a battery to the chip"),le=d(),nt=s("li"),he=i("Assemble the watch itself"),Pt=d(),L=s("h4"),de=i("Soldering the battery"),Tt=d(),f=s("p"),pe=i(`The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the `),rt=s("code"),ue=i("+"),ce=i(" and "),st=s("code"),fe=i("-"),me=i(` symbols on the chip. So my
		first research was about whether the red or the black cable is `),lt=s("code"),we=i("+"),be=i(" or "),ht=s("code"),ye=i("-"),Ie=i("."),Dt=d(),M=s("p"),ve=i(`When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.`),At=d(),m=s("p"),ke=i("Long story short, in "),x=s("a"),ge=i("the Pocuter Discord"),_e=i(`, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the `),dt=s("code"),Ee=i("+"),Pe=i(" pole and the black cable to the "),pt=s("code"),Te=i("-"),De=i(` pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.`),St=d(),H=s("p"),Ae=i(`To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.`),xt=d(),R=s("p"),Se=i(`I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.`),Ot=d(),y=s("p"),xe=i("I then started soldering with the black one on the "),ut=s("code"),Oe=i("-"),$e=i(` pole. I thought it's probably
		easier to put the soldering down on the less exposed port first, so fixing something wouldn't
		automatically mean I have to remove the potentially working and more exposed
		`),ct=s("code"),Ce=i("+"),Ue=i(" port as well."),$t=d(),j=s("p"),We=i(`While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!`),Ct=d(),G=s("p"),Be=i(`If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.`),Ut=d(),z=s("h4"),qe=i("Assembly of the watch kit"),Wt=d(),F=s("p"),Le=i(`Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.`),Bt=d(),K=s("p"),Me=i(`After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.`),qt=d(),V=s("p"),He=i(`Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.`),Lt=d(),N=s("h3"),Re=i("Applications"),Mt=d(),w=s("p"),je=i(`There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are `),ft=s("code"),Ge=i(".zip"),ze=i(` files.
		In these, there is a folder named with a number and in that folder, there is a file called
		`),mt=s("code"),Fe=i("esp32c3.app"),Ke=i(". On the SD card, these need to be put into an "),wt=s("code"),Ve=i("apps"),Ne=i(` folder,
		keeping the numbered folder.`),Ht=d(),J=s("p"),Je=i("To make it clear, the structure of the SD card should look like this:"),Rt=d(),Xo(O.$$.fragment),jt=d(),Q=s("p"),Qe=i(`Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.`),Gt=d(),X=s("p"),Xe=i("Writing my own app took a bit longer..."),zt=d(),Y=s("h3"),Ye=i("Writing an app for the Pocuter"),Ft=d(),P=s("p"),Ze=i(`To develop an application for the Pocuter, it's necessary to have a build setup that allows to
		compile code to the Arduino. It's possible to do this in different ways, the easiest is to use
		the `),$=s("a"),to=i("Arduino IDE"),eo=i(`. In the current
		pocuter documentation, it's documented how to setup the Arduino IDE 1.x, but there is a version
		2 already. I've made it work with version 2 on my Mac before I got a working build setup with my
		currently favorite IDE, VSCode. I'm documenting how I set it up in both ways.`),Kt=d(),Z=s("h4"),oo=i("Setup Arduino IDE 2.x"),Vt=d(),I=s("p"),ao=i("First thing I had to do is adding the additional boards manager URL. They provided the URL "),bt=s("code"),io=i("https://raw.githubusercontent.com/pocuter/ArduinoBoard/main/pocuter_arduino.json"),no=i(`
		in their documentation and this value can be put into
		`),yt=s("code"),ro=i('Arduino IDE -> Settings ... > "Additional Boards Manager URLs"'),so=i(`. After doing
		this, the Pocuter board should be included in the "boards manager". The boards manager is the
		second item on the left side.`),Nt=d(),T=s("img"),Jt=d(),tt=s("p"),lo=i(`As far as I understood it, you need the various boards to be able to actually compile code for
		them.`),this.h()},l(t){u=l(t,"P",{class:!0});var a=h(u);g=n(a,`Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.`),a.forEach(e),c=p(t),b=l(t,"H2",{});var po=h(b);C=n(po,"Pocuter One"),po.forEach(e),It=p(t),U=l(t,"P",{});var uo=h(U);te=n(uo,`The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.`),uo.forEach(e),vt=p(t),W=l(t,"P",{});var co=h(W);ee=n(co,`While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.`),co.forEach(e),kt=p(t),_=l(t,"P",{});var Xt=h(_);oe=n(Xt,"If you haven't checked out the "),S=l(Xt,"A",{href:!0,rel:!0});var fo=h(S);ae=n(fo,"documentation of the Pocuter One"),fo.forEach(e),ie=n(Xt,", it's definitely something to look at first."),Xt.forEach(e),gt=p(t),B=l(t,"H3",{});var mo=h(B);ne=n(mo,"WatchKit assembly"),mo.forEach(e),_t=p(t),q=l(t,"P",{});var wo=h(q);re=n(wo,"There are a few things that need to be done before playing around with apps:"),wo.forEach(e),Et=p(t),E=l(t,"OL",{});var Yt=h(E);it=l(Yt,"LI",{});var bo=h(it);se=n(bo,"Solder a battery to the chip"),bo.forEach(e),le=p(Yt),nt=l(Yt,"LI",{});var yo=h(nt);he=n(yo,"Assemble the watch itself"),yo.forEach(e),Yt.forEach(e),Pt=p(t),L=l(t,"H4",{});var Io=h(L);de=n(Io,"Soldering the battery"),Io.forEach(e),Tt=p(t),f=l(t,"P",{});var v=h(f);pe=n(v,`The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the `),rt=l(v,"CODE",{});var vo=h(rt);ue=n(vo,"+"),vo.forEach(e),ce=n(v," and "),st=l(v,"CODE",{});var ko=h(st);fe=n(ko,"-"),ko.forEach(e),me=n(v,` symbols on the chip. So my
		first research was about whether the red or the black cable is `),lt=l(v,"CODE",{});var go=h(lt);we=n(go,"+"),go.forEach(e),be=n(v," or "),ht=l(v,"CODE",{});var _o=h(ht);ye=n(_o,"-"),_o.forEach(e),Ie=n(v,"."),v.forEach(e),Dt=p(t),M=l(t,"P",{});var Eo=h(M);ve=n(Eo,`When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.`),Eo.forEach(e),At=p(t),m=l(t,"P",{});var D=h(m);ke=n(D,"Long story short, in "),x=l(D,"A",{href:!0,rel:!0});var Po=h(x);ge=n(Po,"the Pocuter Discord"),Po.forEach(e),_e=n(D,`, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the `),dt=l(D,"CODE",{});var To=h(dt);Ee=n(To,"+"),To.forEach(e),Pe=n(D," pole and the black cable to the "),pt=l(D,"CODE",{});var Do=h(pt);Te=n(Do,"-"),Do.forEach(e),De=n(D,` pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.`),D.forEach(e),St=p(t),H=l(t,"P",{});var Ao=h(H);Ae=n(Ao,`To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.`),Ao.forEach(e),xt=p(t),R=l(t,"P",{});var So=h(R);Se=n(So,`I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.`),So.forEach(e),Ot=p(t),y=l(t,"P",{});var et=h(y);xe=n(et,"I then started soldering with the black one on the "),ut=l(et,"CODE",{});var xo=h(ut);Oe=n(xo,"-"),xo.forEach(e),$e=n(et,` pole. I thought it's probably
		easier to put the soldering down on the less exposed port first, so fixing something wouldn't
		automatically mean I have to remove the potentially working and more exposed
		`),ct=l(et,"CODE",{});var Oo=h(ct);Ce=n(Oo,"+"),Oo.forEach(e),Ue=n(et," port as well."),et.forEach(e),$t=p(t),j=l(t,"P",{});var $o=h(j);We=n($o,`While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!`),$o.forEach(e),Ct=p(t),G=l(t,"P",{});var Co=h(G);Be=n(Co,`If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.`),Co.forEach(e),Ut=p(t),z=l(t,"H4",{});var Uo=h(z);qe=n(Uo,"Assembly of the watch kit"),Uo.forEach(e),Wt=p(t),F=l(t,"P",{});var Wo=h(F);Le=n(Wo,`Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.`),Wo.forEach(e),Bt=p(t),K=l(t,"P",{});var Bo=h(K);Me=n(Bo,`After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.`),Bo.forEach(e),qt=p(t),V=l(t,"P",{});var qo=h(V);He=n(qo,`Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.`),qo.forEach(e),Lt=p(t),N=l(t,"H3",{});var Lo=h(N);Re=n(Lo,"Applications"),Lo.forEach(e),Mt=p(t),w=l(t,"P",{});var A=h(w);je=n(A,`There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are `),ft=l(A,"CODE",{});var Mo=h(ft);Ge=n(Mo,".zip"),Mo.forEach(e),ze=n(A,` files.
		In these, there is a folder named with a number and in that folder, there is a file called
		`),mt=l(A,"CODE",{});var Ho=h(mt);Fe=n(Ho,"esp32c3.app"),Ho.forEach(e),Ke=n(A,". On the SD card, these need to be put into an "),wt=l(A,"CODE",{});var Ro=h(wt);Ve=n(Ro,"apps"),Ro.forEach(e),Ne=n(A,` folder,
		keeping the numbered folder.`),A.forEach(e),Ht=p(t),J=l(t,"P",{});var jo=h(J);Je=n(jo,"To make it clear, the structure of the SD card should look like this:"),jo.forEach(e),Rt=p(t),Yo(O.$$.fragment,t),jt=p(t),Q=l(t,"P",{});var Go=h(Q);Qe=n(Go,`Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.`),Go.forEach(e),Gt=p(t),X=l(t,"P",{});var zo=h(X);Xe=n(zo,"Writing my own app took a bit longer..."),zo.forEach(e),zt=p(t),Y=l(t,"H3",{});var Fo=h(Y);Ye=n(Fo,"Writing an app for the Pocuter"),Fo.forEach(e),Ft=p(t),P=l(t,"P",{});var Zt=h(P);Ze=n(Zt,`To develop an application for the Pocuter, it's necessary to have a build setup that allows to
		compile code to the Arduino. It's possible to do this in different ways, the easiest is to use
		the `),$=l(Zt,"A",{href:!0,rel:!0});var Ko=h($);to=n(Ko,"Arduino IDE"),Ko.forEach(e),eo=n(Zt,`. In the current
		pocuter documentation, it's documented how to setup the Arduino IDE 1.x, but there is a version
		2 already. I've made it work with version 2 on my Mac before I got a working build setup with my
		currently favorite IDE, VSCode. I'm documenting how I set it up in both ways.`),Zt.forEach(e),Kt=p(t),Z=l(t,"H4",{});var Vo=h(Z);oo=n(Vo,"Setup Arduino IDE 2.x"),Vo.forEach(e),Vt=p(t),I=l(t,"P",{});var ot=h(I);ao=n(ot,"First thing I had to do is adding the additional boards manager URL. They provided the URL "),bt=l(ot,"CODE",{});var No=h(bt);io=n(No,"https://raw.githubusercontent.com/pocuter/ArduinoBoard/main/pocuter_arduino.json"),No.forEach(e),no=n(ot,`
		in their documentation and this value can be put into
		`),yt=l(ot,"CODE",{});var Jo=h(yt);ro=n(Jo,'Arduino IDE -> Settings ... > "Additional Boards Manager URLs"'),Jo.forEach(e),so=n(ot,`. After doing
		this, the Pocuter board should be included in the "boards manager". The boards manager is the
		second item on the left side.`),ot.forEach(e),Nt=p(t),T=l(t,"IMG",{src:!0,alt:!0,class:!0}),Jt=p(t),tt=l(t,"P",{});var Qo=h(tt);lo=n(Qo,`As far as I understood it, you need the various boards to be able to actually compile code for
		them.`),Qo.forEach(e),this.h()},h(){k(u,"class","info svelte-g074k7"),k(S,"href","https://pocuter.com/docs/pocuter-one"),k(S,"rel","external"),k(x,"href","https://discord.com/channels/762688795035697182/762688795035697186"),k(x,"rel","external"),k($,"href","https://www.arduino.cc/en/software"),k($,"rel","external"),ra(T.src,ho=da)||k(T,"src",ho),k(T,"alt","The boards manager"),k(T,"class","svelte-g074k7")},m(t,a){r(t,u,a),o(u,g),r(t,c,a),r(t,b,a),o(b,C),r(t,It,a),r(t,U,a),o(U,te),r(t,vt,a),r(t,W,a),o(W,ee),r(t,kt,a),r(t,_,a),o(_,oe),o(_,S),o(S,ae),o(_,ie),r(t,gt,a),r(t,B,a),o(B,ne),r(t,_t,a),r(t,q,a),o(q,re),r(t,Et,a),r(t,E,a),o(E,it),o(it,se),o(E,le),o(E,nt),o(nt,he),r(t,Pt,a),r(t,L,a),o(L,de),r(t,Tt,a),r(t,f,a),o(f,pe),o(f,rt),o(rt,ue),o(f,ce),o(f,st),o(st,fe),o(f,me),o(f,lt),o(lt,we),o(f,be),o(f,ht),o(ht,ye),o(f,Ie),r(t,Dt,a),r(t,M,a),o(M,ve),r(t,At,a),r(t,m,a),o(m,ke),o(m,x),o(x,ge),o(m,_e),o(m,dt),o(dt,Ee),o(m,Pe),o(m,pt),o(pt,Te),o(m,De),r(t,St,a),r(t,H,a),o(H,Ae),r(t,xt,a),r(t,R,a),o(R,Se),r(t,Ot,a),r(t,y,a),o(y,xe),o(y,ut),o(ut,Oe),o(y,$e),o(y,ct),o(ct,Ce),o(y,Ue),r(t,$t,a),r(t,j,a),o(j,We),r(t,Ct,a),r(t,G,a),o(G,Be),r(t,Ut,a),r(t,z,a),o(z,qe),r(t,Wt,a),r(t,F,a),o(F,Le),r(t,Bt,a),r(t,K,a),o(K,Me),r(t,qt,a),r(t,V,a),o(V,He),r(t,Lt,a),r(t,N,a),o(N,Re),r(t,Mt,a),r(t,w,a),o(w,je),o(w,ft),o(ft,Ge),o(w,ze),o(w,mt),o(mt,Fe),o(w,Ke),o(w,wt),o(wt,Ve),o(w,Ne),r(t,Ht,a),r(t,J,a),o(J,Je),r(t,Rt,a),Zo(O,t,a),r(t,jt,a),r(t,Q,a),o(Q,Qe),r(t,Gt,a),r(t,X,a),o(X,Xe),r(t,zt,a),r(t,Y,a),o(Y,Ye),r(t,Ft,a),r(t,P,a),o(P,Ze),o(P,$),o($,to),o(P,eo),r(t,Kt,a),r(t,Z,a),o(Z,oo),r(t,Vt,a),r(t,I,a),o(I,ao),o(I,bt),o(bt,io),o(I,no),o(I,yt),o(yt,ro),o(I,so),r(t,Nt,a),r(t,T,a),r(t,Jt,a),r(t,tt,a),o(tt,lo),Qt=!0},p:sa,i(t){Qt||(ta(O.$$.fragment,t),Qt=!0)},o(t){ea(O.$$.fragment,t),Qt=!1},d(t){t&&e(u),t&&e(c),t&&e(b),t&&e(It),t&&e(U),t&&e(vt),t&&e(W),t&&e(kt),t&&e(_),t&&e(gt),t&&e(B),t&&e(_t),t&&e(q),t&&e(Et),t&&e(E),t&&e(Pt),t&&e(L),t&&e(Tt),t&&e(f),t&&e(Dt),t&&e(M),t&&e(At),t&&e(m),t&&e(St),t&&e(H),t&&e(xt),t&&e(R),t&&e(Ot),t&&e(y),t&&e($t),t&&e(j),t&&e(Ct),t&&e(G),t&&e(Ut),t&&e(z),t&&e(Wt),t&&e(F),t&&e(Bt),t&&e(K),t&&e(qt),t&&e(V),t&&e(Lt),t&&e(N),t&&e(Mt),t&&e(w),t&&e(Ht),t&&e(J),t&&e(Rt),oa(O,t),t&&e(jt),t&&e(Q),t&&e(Gt),t&&e(X),t&&e(zt),t&&e(Y),t&&e(Ft),t&&e(P),t&&e(Kt),t&&e(Z),t&&e(Vt),t&&e(I),t&&e(Nt),t&&e(T),t&&e(Jt),t&&e(tt)}}}function ua(at){let u,g;return u=new ha({props:{$$slots:{default:[pa]},$$scope:{ctx:at}}}),{c(){Xo(u.$$.fragment)},l(c){Yo(u.$$.fragment,c)},m(c,b){Zo(u,c,b),g=!0},p(c,[b]){const C={};b&2&&(C.$$scope={dirty:b,ctx:c}),u.$set(C)},i(c){g||(ta(u.$$.fragment,c),g=!0)},o(c){ea(u.$$.fragment,c),g=!1},d(c){oa(u,c)}}}function ca(at){return[`apps/
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
     ...`]}class ba extends aa{constructor(u){super(),ia(this,u,ca,ua,na,{})}}export{ba as default};
