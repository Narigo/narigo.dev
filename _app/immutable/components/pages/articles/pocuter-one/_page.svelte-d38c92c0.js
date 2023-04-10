import{S as bo,i as yo,s as Io,w as ko,x as vo,y as go,f as _o,t as Eo,z as To,k as r,q as n,a as d,l as s,m as h,r as i,h as e,c as p,n as rt,b as l,G as o,B as Po}from"../../../../chunks/index-1eaa4f41.js";import{P as Do}from"../../../../chunks/PageLayout-7674fa64.js";function Oo(At){let c,k,f,b,D,st,O,Bt,ht,S,Ut,dt,v,Lt,T,zt,Gt,pt,x,Ht,ct,C,jt,ft,g,N,Ft,Kt,Q,Mt,ut,$,Rt,mt,u,Jt,V,Nt,Qt,X,Vt,Xt,Y,Yt,Zt,Z,te,ee,wt,W,oe,bt,m,ae,P,ne,ie,tt,le,re,et,se,he,yt,q,de,It,A,pe,kt,y,ce,ot,fe,ue,at,me,we,vt,B,be,gt,U,ye,_t,L,Ie,Et,z,ke,Tt,G,ve,Pt,H,ge,Dt,j,_e,Ot,w,Ee,nt,Te,Pe,it,De,Oe,lt,Se,xe,St,F,Ce,xt,K,$e,Ct,M,We,$t,R,qe;return{c(){c=r("p"),k=n(`Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.`),f=d(),b=r("h2"),D=n("Pocuter One"),st=d(),O=r("p"),Bt=n(`The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.`),ht=d(),S=r("p"),Ut=n(`While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.`),dt=d(),v=r("p"),Lt=n("If you haven't checked out the "),T=r("a"),zt=n("documentation of the Pocuter One"),Gt=n(", it's definitely something to look at first."),pt=d(),x=r("h3"),Ht=n("WatchKit assembly"),ct=d(),C=r("p"),jt=n("There are a few things that need to be done before playing around with apps:"),ft=d(),g=r("ol"),N=r("li"),Ft=n("Solder a battery to the chip"),Kt=d(),Q=r("li"),Mt=n("Assemble the watch itself"),ut=d(),$=r("h4"),Rt=n("Soldering the battery"),mt=d(),u=r("p"),Jt=n(`The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the `),V=r("code"),Nt=n("+"),Qt=n(" and "),X=r("code"),Vt=n("-"),Xt=n(` symbols on the chip. So my
		first research was about whether the red or the black cable is `),Y=r("code"),Yt=n("+"),Zt=n(" or "),Z=r("code"),te=n("-"),ee=n("."),wt=d(),W=r("p"),oe=n(`When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.`),bt=d(),m=r("p"),ae=n("Long story short, in "),P=r("a"),ne=n("the Pocuter Discord"),ie=n(`, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the `),tt=r("code"),le=n("+"),re=n(" pole and the black cable to the "),et=r("code"),se=n("-"),he=n(` pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.`),yt=d(),q=r("p"),de=n(`To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.`),It=d(),A=r("p"),pe=n(`I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.`),kt=d(),y=r("p"),ce=n("I then started soldering with the black one on the "),ot=r("code"),fe=n("-"),ue=n(` pole. I thought it's probably
		easier to put the soldering down on the less exposed port first, so fixing something wouldn't
		automatically mean I have to remove the potentially working and more exposed
		`),at=r("code"),me=n("+"),we=n(" port as well."),vt=d(),B=r("p"),be=n(`While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!`),gt=d(),U=r("p"),ye=n(`If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.`),_t=d(),L=r("h4"),Ie=n("Assembly of the watch kit"),Et=d(),z=r("p"),ke=n(`Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.`),Tt=d(),G=r("p"),ve=n(`After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.`),Pt=d(),H=r("p"),ge=n(`Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.`),Dt=d(),j=r("h3"),_e=n("Applications"),Ot=d(),w=r("p"),Ee=n(`There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are `),nt=r("code"),Te=n(".zip"),Pe=n(` files.
		In these, there is a folder named with a number and in that folder, there is a file called
		`),it=r("code"),De=n("esp32c3.app"),Oe=n(". On the SD card, these need to be put into an "),lt=r("code"),Se=n("apps"),xe=n(` folder,
		keeping the numbered folder.`),St=d(),F=r("p"),Ce=n("To make it clear, the structure of the SD card should look like this:"),xt=d(),K=r("pre"),$e=n(`apps/
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
     ...
	`),Ct=d(),M=r("p"),We=n(`Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.`),$t=d(),R=r("p"),qe=n("Writing my own app took a bit longer..."),this.h()},l(t){c=s(t,"P",{class:!0});var a=h(c);k=i(a,`Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.`),a.forEach(e),f=p(t),b=s(t,"H2",{});var Ae=h(b);D=i(Ae,"Pocuter One"),Ae.forEach(e),st=p(t),O=s(t,"P",{});var Be=h(O);Bt=i(Be,`The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.`),Be.forEach(e),ht=p(t),S=s(t,"P",{});var Ue=h(S);Ut=i(Ue,`While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.`),Ue.forEach(e),dt=p(t),v=s(t,"P",{});var Wt=h(v);Lt=i(Wt,"If you haven't checked out the "),T=s(Wt,"A",{href:!0,rel:!0});var Le=h(T);zt=i(Le,"documentation of the Pocuter One"),Le.forEach(e),Gt=i(Wt,", it's definitely something to look at first."),Wt.forEach(e),pt=p(t),x=s(t,"H3",{});var ze=h(x);Ht=i(ze,"WatchKit assembly"),ze.forEach(e),ct=p(t),C=s(t,"P",{});var Ge=h(C);jt=i(Ge,"There are a few things that need to be done before playing around with apps:"),Ge.forEach(e),ft=p(t),g=s(t,"OL",{});var qt=h(g);N=s(qt,"LI",{});var He=h(N);Ft=i(He,"Solder a battery to the chip"),He.forEach(e),Kt=p(qt),Q=s(qt,"LI",{});var je=h(Q);Mt=i(je,"Assemble the watch itself"),je.forEach(e),qt.forEach(e),ut=p(t),$=s(t,"H4",{});var Fe=h($);Rt=i(Fe,"Soldering the battery"),Fe.forEach(e),mt=p(t),u=s(t,"P",{});var I=h(u);Jt=i(I,`The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the `),V=s(I,"CODE",{});var Ke=h(V);Nt=i(Ke,"+"),Ke.forEach(e),Qt=i(I," and "),X=s(I,"CODE",{});var Me=h(X);Vt=i(Me,"-"),Me.forEach(e),Xt=i(I,` symbols on the chip. So my
		first research was about whether the red or the black cable is `),Y=s(I,"CODE",{});var Re=h(Y);Yt=i(Re,"+"),Re.forEach(e),Zt=i(I," or "),Z=s(I,"CODE",{});var Je=h(Z);te=i(Je,"-"),Je.forEach(e),ee=i(I,"."),I.forEach(e),wt=p(t),W=s(t,"P",{});var Ne=h(W);oe=i(Ne,`When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.`),Ne.forEach(e),bt=p(t),m=s(t,"P",{});var _=h(m);ae=i(_,"Long story short, in "),P=s(_,"A",{href:!0,rel:!0});var Qe=h(P);ne=i(Qe,"the Pocuter Discord"),Qe.forEach(e),ie=i(_,`, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the `),tt=s(_,"CODE",{});var Ve=h(tt);le=i(Ve,"+"),Ve.forEach(e),re=i(_," pole and the black cable to the "),et=s(_,"CODE",{});var Xe=h(et);se=i(Xe,"-"),Xe.forEach(e),he=i(_,` pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.`),_.forEach(e),yt=p(t),q=s(t,"P",{});var Ye=h(q);de=i(Ye,`To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.`),Ye.forEach(e),It=p(t),A=s(t,"P",{});var Ze=h(A);pe=i(Ze,`I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.`),Ze.forEach(e),kt=p(t),y=s(t,"P",{});var J=h(y);ce=i(J,"I then started soldering with the black one on the "),ot=s(J,"CODE",{});var to=h(ot);fe=i(to,"-"),to.forEach(e),ue=i(J,` pole. I thought it's probably
		easier to put the soldering down on the less exposed port first, so fixing something wouldn't
		automatically mean I have to remove the potentially working and more exposed
		`),at=s(J,"CODE",{});var eo=h(at);me=i(eo,"+"),eo.forEach(e),we=i(J," port as well."),J.forEach(e),vt=p(t),B=s(t,"P",{});var oo=h(B);be=i(oo,`While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!`),oo.forEach(e),gt=p(t),U=s(t,"P",{});var ao=h(U);ye=i(ao,`If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.`),ao.forEach(e),_t=p(t),L=s(t,"H4",{});var no=h(L);Ie=i(no,"Assembly of the watch kit"),no.forEach(e),Et=p(t),z=s(t,"P",{});var io=h(z);ke=i(io,`Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.`),io.forEach(e),Tt=p(t),G=s(t,"P",{});var lo=h(G);ve=i(lo,`After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.`),lo.forEach(e),Pt=p(t),H=s(t,"P",{});var ro=h(H);ge=i(ro,`Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.`),ro.forEach(e),Dt=p(t),j=s(t,"H3",{});var so=h(j);_e=i(so,"Applications"),so.forEach(e),Ot=p(t),w=s(t,"P",{});var E=h(w);Ee=i(E,`There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are `),nt=s(E,"CODE",{});var ho=h(nt);Te=i(ho,".zip"),ho.forEach(e),Pe=i(E,` files.
		In these, there is a folder named with a number and in that folder, there is a file called
		`),it=s(E,"CODE",{});var po=h(it);De=i(po,"esp32c3.app"),po.forEach(e),Oe=i(E,". On the SD card, these need to be put into an "),lt=s(E,"CODE",{});var co=h(lt);Se=i(co,"apps"),co.forEach(e),xe=i(E,` folder,
		keeping the numbered folder.`),E.forEach(e),St=p(t),F=s(t,"P",{});var fo=h(F);Ce=i(fo,"To make it clear, the structure of the SD card should look like this:"),fo.forEach(e),xt=p(t),K=s(t,"PRE",{});var uo=h(K);$e=i(uo,`apps/
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
     ...
	`),uo.forEach(e),Ct=p(t),M=s(t,"P",{});var mo=h(M);We=i(mo,`Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.`),mo.forEach(e),$t=p(t),R=s(t,"P",{});var wo=h(R);qe=i(wo,"Writing my own app took a bit longer..."),wo.forEach(e),this.h()},h(){rt(c,"class","info svelte-10vhhi8"),rt(T,"href","https://pocuter.com/docs/pocuter-one"),rt(T,"rel","external"),rt(P,"href","https://discord.com/channels/762688795035697182/762688795035697186"),rt(P,"rel","external")},m(t,a){l(t,c,a),o(c,k),l(t,f,a),l(t,b,a),o(b,D),l(t,st,a),l(t,O,a),o(O,Bt),l(t,ht,a),l(t,S,a),o(S,Ut),l(t,dt,a),l(t,v,a),o(v,Lt),o(v,T),o(T,zt),o(v,Gt),l(t,pt,a),l(t,x,a),o(x,Ht),l(t,ct,a),l(t,C,a),o(C,jt),l(t,ft,a),l(t,g,a),o(g,N),o(N,Ft),o(g,Kt),o(g,Q),o(Q,Mt),l(t,ut,a),l(t,$,a),o($,Rt),l(t,mt,a),l(t,u,a),o(u,Jt),o(u,V),o(V,Nt),o(u,Qt),o(u,X),o(X,Vt),o(u,Xt),o(u,Y),o(Y,Yt),o(u,Zt),o(u,Z),o(Z,te),o(u,ee),l(t,wt,a),l(t,W,a),o(W,oe),l(t,bt,a),l(t,m,a),o(m,ae),o(m,P),o(P,ne),o(m,ie),o(m,tt),o(tt,le),o(m,re),o(m,et),o(et,se),o(m,he),l(t,yt,a),l(t,q,a),o(q,de),l(t,It,a),l(t,A,a),o(A,pe),l(t,kt,a),l(t,y,a),o(y,ce),o(y,ot),o(ot,fe),o(y,ue),o(y,at),o(at,me),o(y,we),l(t,vt,a),l(t,B,a),o(B,be),l(t,gt,a),l(t,U,a),o(U,ye),l(t,_t,a),l(t,L,a),o(L,Ie),l(t,Et,a),l(t,z,a),o(z,ke),l(t,Tt,a),l(t,G,a),o(G,ve),l(t,Pt,a),l(t,H,a),o(H,ge),l(t,Dt,a),l(t,j,a),o(j,_e),l(t,Ot,a),l(t,w,a),o(w,Ee),o(w,nt),o(nt,Te),o(w,Pe),o(w,it),o(it,De),o(w,Oe),o(w,lt),o(lt,Se),o(w,xe),l(t,St,a),l(t,F,a),o(F,Ce),l(t,xt,a),l(t,K,a),o(K,$e),l(t,Ct,a),l(t,M,a),o(M,We),l(t,$t,a),l(t,R,a),o(R,qe)},p:Po,d(t){t&&e(c),t&&e(f),t&&e(b),t&&e(st),t&&e(O),t&&e(ht),t&&e(S),t&&e(dt),t&&e(v),t&&e(pt),t&&e(x),t&&e(ct),t&&e(C),t&&e(ft),t&&e(g),t&&e(ut),t&&e($),t&&e(mt),t&&e(u),t&&e(wt),t&&e(W),t&&e(bt),t&&e(m),t&&e(yt),t&&e(q),t&&e(It),t&&e(A),t&&e(kt),t&&e(y),t&&e(vt),t&&e(B),t&&e(gt),t&&e(U),t&&e(_t),t&&e(L),t&&e(Et),t&&e(z),t&&e(Tt),t&&e(G),t&&e(Pt),t&&e(H),t&&e(Dt),t&&e(j),t&&e(Ot),t&&e(w),t&&e(St),t&&e(F),t&&e(xt),t&&e(K),t&&e(Ct),t&&e(M),t&&e($t),t&&e(R)}}}function So(At){let c,k;return c=new Do({props:{$$slots:{default:[Oo]},$$scope:{ctx:At}}}),{c(){ko(c.$$.fragment)},l(f){vo(c.$$.fragment,f)},m(f,b){go(c,f,b),k=!0},p(f,[b]){const D={};b&1&&(D.$$scope={dirty:b,ctx:f}),c.$set(D)},i(f){k||(_o(c.$$.fragment,f),k=!0)},o(f){Eo(c.$$.fragment,f),k=!1},d(f){To(c,f)}}}class $o extends bo{constructor(c){super(),yo(this,c,null,So,Io,{})}}export{$o as default};
