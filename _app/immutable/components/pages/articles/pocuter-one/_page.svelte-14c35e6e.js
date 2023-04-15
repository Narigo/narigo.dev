import{S as go,i as _o,s as Eo,w as wo,x as bo,y as yo,f as Io,t as ko,z as vo,k as l,q as i,a as d,l as s,m as h,r as n,h as e,c as p,n as st,b as r,G as o,B as To}from"../../../../chunks/index-ed5c000a.js";import{C as Po}from"../../../../chunks/CodeBlock-718745a2.js";import{P as Do}from"../../../../chunks/PageLayout-59cb6841.js";function $o(Q){let c,k,f,b,$,ht,O,Ut,dt,S,Lt,pt,v,zt,T,Gt,Ht,ct,x,jt,ft,C,Kt,ut,g,R,Ft,Mt,V,Jt,mt,W,Nt,wt,u,Qt,X,Rt,Vt,Y,Xt,Yt,Z,Zt,te,tt,ee,oe,bt,q,ae,yt,m,ie,P,ne,re,et,le,se,ot,he,de,It,A,pe,kt,B,ce,vt,y,fe,at,ue,me,it,we,be,gt,U,ye,_t,L,Ie,Et,z,ke,Tt,G,ve,Pt,H,ge,Dt,j,_e,$t,K,Ee,Ot,w,Te,nt,Pe,De,rt,$e,Oe,lt,Se,xe,St,F,Ce,xt,D,Ct,M,We,Wt,J,qe,qt;return D=new Po({props:{code:Q[0]}}),{c(){c=l("p"),k=i(`Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.`),f=d(),b=l("h2"),$=i("Pocuter One"),ht=d(),O=l("p"),Ut=i(`The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.`),dt=d(),S=l("p"),Lt=i(`While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.`),pt=d(),v=l("p"),zt=i("If you haven't checked out the "),T=l("a"),Gt=i("documentation of the Pocuter One"),Ht=i(", it's definitely something to look at first."),ct=d(),x=l("h3"),jt=i("WatchKit assembly"),ft=d(),C=l("p"),Kt=i("There are a few things that need to be done before playing around with apps:"),ut=d(),g=l("ol"),R=l("li"),Ft=i("Solder a battery to the chip"),Mt=d(),V=l("li"),Jt=i("Assemble the watch itself"),mt=d(),W=l("h4"),Nt=i("Soldering the battery"),wt=d(),u=l("p"),Qt=i(`The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the `),X=l("code"),Rt=i("+"),Vt=i(" and "),Y=l("code"),Xt=i("-"),Yt=i(` symbols on the chip. So my
		first research was about whether the red or the black cable is `),Z=l("code"),Zt=i("+"),te=i(" or "),tt=l("code"),ee=i("-"),oe=i("."),bt=d(),q=l("p"),ae=i(`When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.`),yt=d(),m=l("p"),ie=i("Long story short, in "),P=l("a"),ne=i("the Pocuter Discord"),re=i(`, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the `),et=l("code"),le=i("+"),se=i(" pole and the black cable to the "),ot=l("code"),he=i("-"),de=i(` pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.`),It=d(),A=l("p"),pe=i(`To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.`),kt=d(),B=l("p"),ce=i(`I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.`),vt=d(),y=l("p"),fe=i("I then started soldering with the black one on the "),at=l("code"),ue=i("-"),me=i(` pole. I thought it's probably
		easier to put the soldering down on the less exposed port first, so fixing something wouldn't
		automatically mean I have to remove the potentially working and more exposed
		`),it=l("code"),we=i("+"),be=i(" port as well."),gt=d(),U=l("p"),ye=i(`While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!`),_t=d(),L=l("p"),Ie=i(`If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.`),Et=d(),z=l("h4"),ke=i("Assembly of the watch kit"),Tt=d(),G=l("p"),ve=i(`Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.`),Pt=d(),H=l("p"),ge=i(`After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.`),Dt=d(),j=l("p"),_e=i(`Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.`),$t=d(),K=l("h3"),Ee=i("Applications"),Ot=d(),w=l("p"),Te=i(`There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are `),nt=l("code"),Pe=i(".zip"),De=i(` files.
		In these, there is a folder named with a number and in that folder, there is a file called
		`),rt=l("code"),$e=i("esp32c3.app"),Oe=i(". On the SD card, these need to be put into an "),lt=l("code"),Se=i("apps"),xe=i(` folder,
		keeping the numbered folder.`),St=d(),F=l("p"),Ce=i("To make it clear, the structure of the SD card should look like this:"),xt=d(),wo(D.$$.fragment),Ct=d(),M=l("p"),We=i(`Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.`),Wt=d(),J=l("p"),qe=i("Writing my own app took a bit longer..."),this.h()},l(t){c=s(t,"P",{class:!0});var a=h(c);k=n(a,`Be aware, I'm going to continue writing and improving on this article. Maybe the parts I release
		are already useful for someone.`),a.forEach(e),f=p(t),b=s(t,"H2",{});var Ae=h(b);$=n(Ae,"Pocuter One"),Ae.forEach(e),ht=p(t),O=s(t,"P",{});var Be=h(O);Ut=n(Be,`The Pocuter One is a project I've backed on Kickstarter a while ago. I received their package
		right before Easter holidays in Germany, so I had some time to assemble it.`),Be.forEach(e),dt=p(t),S=s(t,"P",{});var Ue=h(S);Lt=n(Ue,`While I was pretty shocked to learn that I had to solder a battery onto this mini computer for
		it to work, I'm pretty happy with the result. Since I'm pretty much new to working with
		hardware, I want to share what I had to do in order to get to a result.`),Ue.forEach(e),pt=p(t),v=s(t,"P",{});var At=h(v);zt=n(At,"If you haven't checked out the "),T=s(At,"A",{href:!0,rel:!0});var Le=h(T);Gt=n(Le,"documentation of the Pocuter One"),Le.forEach(e),Ht=n(At,", it's definitely something to look at first."),At.forEach(e),ct=p(t),x=s(t,"H3",{});var ze=h(x);jt=n(ze,"WatchKit assembly"),ze.forEach(e),ft=p(t),C=s(t,"P",{});var Ge=h(C);Kt=n(Ge,"There are a few things that need to be done before playing around with apps:"),Ge.forEach(e),ut=p(t),g=s(t,"OL",{});var Bt=h(g);R=s(Bt,"LI",{});var He=h(R);Ft=n(He,"Solder a battery to the chip"),He.forEach(e),Mt=p(Bt),V=s(Bt,"LI",{});var je=h(V);Jt=n(je,"Assemble the watch itself"),je.forEach(e),Bt.forEach(e),mt=p(t),W=s(t,"H4",{});var Ke=h(W);Nt=n(Ke,"Soldering the battery"),Ke.forEach(e),wt=p(t),u=s(t,"P",{});var I=h(u);Qt=n(I,`The very first one was the most intimidating for me as someone who doesn't have much experience
		with hardware. I wasn't sure which cable needs to go to which pole, since the only thing I saw
		was a red and a black cable and the `),X=s(I,"CODE",{});var Fe=h(X);Rt=n(Fe,"+"),Fe.forEach(e),Vt=n(I," and "),Y=s(I,"CODE",{});var Me=h(Y);Xt=n(Me,"-"),Me.forEach(e),Yt=n(I,` symbols on the chip. So my
		first research was about whether the red or the black cable is `),Z=s(I,"CODE",{});var Je=h(Z);Zt=n(Je,"+"),Je.forEach(e),te=n(I," or "),tt=s(I,"CODE",{});var Ne=h(tt);ee=n(Ne,"-"),Ne.forEach(e),oe=n(I,"."),I.forEach(e),bt=p(t),q=s(t,"P",{});var Qe=h(q);ae=n(Qe,`When I researched cable color codes, I found conflicting information based on what part of the
		world you are in. I know that the company that sells the computer is based in Germany, but as
		far as I understand it, the parts come from China.`),Qe.forEach(e),yt=p(t),m=s(t,"P",{});var _=h(m);ie=n(_,"Long story short, in "),P=s(_,"A",{href:!0,rel:!0});var Re=h(P);ne=n(Re,"the Pocuter Discord"),Re.forEach(e),re=n(_,`, people shared pictures of how they put batteries on the board. I could infer that the red
		cable goes to the `),et=s(_,"CODE",{});var Ve=h(et);le=n(Ve,"+"),Ve.forEach(e),se=n(_," pole and the black cable to the "),ot=s(_,"CODE",{});var Xe=h(ot);he=n(Xe,"-"),Xe.forEach(e),de=n(_,` pole. I can definitly
		recommend joining their Discord as they seem to be very active and helpful regarding support.`),_.forEach(e),It=p(t),A=s(t,"P",{});var Ye=h(A);pe=n(Ye,`To be able to solder a cable, I had to cut the outer parts of the wire, so the metallic inside
		is visible. There are specialized tools for doing that and trying to cut it off with something
		sharp resulted in losing quite a bit of the wire itself. I then found a small tool I could use
		that I got from some random hackathon or conference that I attended. It worked out, but it was
		quite painful to get it done. Anyways, once you see the metallic inside of the red and the black
		wires from the battery, you can solder it. I opened it a couple of millimeters, so I was sure I
		can hit it with my relatively big soldering iron.`),Ye.forEach(e),kt=p(t),B=s(t,"P",{});var Ze=h(B);ce=n(Ze,`I put the cables from "below" into the holes. "Below" means when folding the screen on top of
		the chip as it needs to be put in the watch case, the battery is below the chip. The red and
		black cables from the battery then don't need to be wrapped around the chip in the small watch
		case.`),Ze.forEach(e),vt=p(t),y=s(t,"P",{});var N=h(y);fe=n(N,"I then started soldering with the black one on the "),at=s(N,"CODE",{});var to=h(at);ue=n(to,"-"),to.forEach(e),me=n(N,` pole. I thought it's probably
		easier to put the soldering down on the less exposed port first, so fixing something wouldn't
		automatically mean I have to remove the potentially working and more exposed
		`),it=s(N,"CODE",{});var eo=h(it);we=n(eo,"+"),eo.forEach(e),be=n(N," port as well."),N.forEach(e),gt=p(t),U=s(t,"P",{});var oo=h(U);ye=n(oo,`While soldering, the watch started to boot up. For me, this was the sign that the soldering
		worked out well and I made sure both cables were properly fixed. I made sure the soldered metal
		wasn't too high, so the screen wouldn't be hurt by that. I had to take off some of the soldering
		again by using the hot soldering iron and gently draw something away from it again. I guess it
		was pure luck that I didn't destroy anything while doing that - the pocuter continued to work!`),oo.forEach(e),_t=p(t),L=s(t,"P",{});var ao=h(L);Ie=n(ao,`If the watch turned off at some point during the assembly, it wasn't because of my lack of
		experience with the soldering: The included battery runs out pretty quickly. I think when using
		the "Clock" application, it's running for about 1.5 hours after having the USB connected for an
		extended period of time.`),ao.forEach(e),Et=p(t),z=s(t,"H4",{});var io=h(z);ke=n(io,"Assembly of the watch kit"),io.forEach(e),Tt=p(t),G=s(t,"P",{});var no=h(G);ve=n(no,`Ok, so this looked pretty straightforward. The screen only has one place where it can go. I
		could see from the outside where the USB port and the buttons / knobs should be. The buttons
		were a bit too hard to put in and it felt a bit wrong to push them so hard into it. I made it,
		but once I put in all the screws, I couldn't really push the buttons at all or they were "always
		pushed". This felt really wrong.`),no.forEach(e),Pt=p(t),H=s(t,"P",{});var ro=h(H);ge=n(ro,`After checking the Discord again, I saw that people used a file to make the inside of the button
		a bit wider, so I tried that out myself: Unscrew the watch case, take out the knobs again.
		Equipped with a small file for fingernails, I could scrub a little bit away from the sides from
		the inside of the "U"-shaped buttons. When I put the buttons into the watch again, they were
		fitting way better than before and I didn't even have to push them into the case - they actually
		fit really nice after using the file. The problems with "always pushed" buttons or having a hard
		time to press anything at all, vanished completely.`),ro.forEach(e),Dt=p(t),j=s(t,"P",{});var lo=h(j);_e=n(lo,`Setting up the wrist band worked well for me: I had to put the metal bars into one hole, then
		press and hold the tiny metal piece so the whole bar fits into the side of the watch and once it
		inside the sides, find the other hole by wiggling it around a bit. It took me a few tries but it
		worked out eventually and didn't take too long.`),lo.forEach(e),$t=p(t),K=s(t,"H3",{});var so=h(K);Ee=n(so,"Applications"),so.forEach(e),Ot=p(t),w=s(t,"P",{});var E=h(w);Te=n(E,`There are a couple of apps you can download and add to the pocuter. This is actually quite easy
		to do, but the documentation was a bit lacking. The SD card from the pocuter should be plugged
		into a regular computer. The apps that can currently be downloaded are `),nt=s(E,"CODE",{});var ho=h(nt);Pe=n(ho,".zip"),ho.forEach(e),De=n(E,` files.
		In these, there is a folder named with a number and in that folder, there is a file called
		`),rt=s(E,"CODE",{});var po=h(rt);$e=n(po,"esp32c3.app"),po.forEach(e),Oe=n(E,". On the SD card, these need to be put into an "),lt=s(E,"CODE",{});var co=h(lt);Se=n(co,"apps"),co.forEach(e),xe=n(E,` folder,
		keeping the numbered folder.`),E.forEach(e),St=p(t),F=s(t,"P",{});var fo=h(F);Ce=n(fo,"To make it clear, the structure of the SD card should look like this:"),fo.forEach(e),xt=p(t),bo(D.$$.fragment,t),Ct=p(t),M=s(t,"P",{});var uo=h(M);We=n(uo,`Once the apps are put onto the SD card in the proper structure, putting it back into the pocuter
		and restarting it yielded all the apps in there.`),uo.forEach(e),Wt=p(t),J=s(t,"P",{});var mo=h(J);qe=n(mo,"Writing my own app took a bit longer..."),mo.forEach(e),this.h()},h(){st(c,"class","info svelte-10vhhi8"),st(T,"href","https://pocuter.com/docs/pocuter-one"),st(T,"rel","external"),st(P,"href","https://discord.com/channels/762688795035697182/762688795035697186"),st(P,"rel","external")},m(t,a){r(t,c,a),o(c,k),r(t,f,a),r(t,b,a),o(b,$),r(t,ht,a),r(t,O,a),o(O,Ut),r(t,dt,a),r(t,S,a),o(S,Lt),r(t,pt,a),r(t,v,a),o(v,zt),o(v,T),o(T,Gt),o(v,Ht),r(t,ct,a),r(t,x,a),o(x,jt),r(t,ft,a),r(t,C,a),o(C,Kt),r(t,ut,a),r(t,g,a),o(g,R),o(R,Ft),o(g,Mt),o(g,V),o(V,Jt),r(t,mt,a),r(t,W,a),o(W,Nt),r(t,wt,a),r(t,u,a),o(u,Qt),o(u,X),o(X,Rt),o(u,Vt),o(u,Y),o(Y,Xt),o(u,Yt),o(u,Z),o(Z,Zt),o(u,te),o(u,tt),o(tt,ee),o(u,oe),r(t,bt,a),r(t,q,a),o(q,ae),r(t,yt,a),r(t,m,a),o(m,ie),o(m,P),o(P,ne),o(m,re),o(m,et),o(et,le),o(m,se),o(m,ot),o(ot,he),o(m,de),r(t,It,a),r(t,A,a),o(A,pe),r(t,kt,a),r(t,B,a),o(B,ce),r(t,vt,a),r(t,y,a),o(y,fe),o(y,at),o(at,ue),o(y,me),o(y,it),o(it,we),o(y,be),r(t,gt,a),r(t,U,a),o(U,ye),r(t,_t,a),r(t,L,a),o(L,Ie),r(t,Et,a),r(t,z,a),o(z,ke),r(t,Tt,a),r(t,G,a),o(G,ve),r(t,Pt,a),r(t,H,a),o(H,ge),r(t,Dt,a),r(t,j,a),o(j,_e),r(t,$t,a),r(t,K,a),o(K,Ee),r(t,Ot,a),r(t,w,a),o(w,Te),o(w,nt),o(nt,Pe),o(w,De),o(w,rt),o(rt,$e),o(w,Oe),o(w,lt),o(lt,Se),o(w,xe),r(t,St,a),r(t,F,a),o(F,Ce),r(t,xt,a),yo(D,t,a),r(t,Ct,a),r(t,M,a),o(M,We),r(t,Wt,a),r(t,J,a),o(J,qe),qt=!0},p:To,i(t){qt||(Io(D.$$.fragment,t),qt=!0)},o(t){ko(D.$$.fragment,t),qt=!1},d(t){t&&e(c),t&&e(f),t&&e(b),t&&e(ht),t&&e(O),t&&e(dt),t&&e(S),t&&e(pt),t&&e(v),t&&e(ct),t&&e(x),t&&e(ft),t&&e(C),t&&e(ut),t&&e(g),t&&e(mt),t&&e(W),t&&e(wt),t&&e(u),t&&e(bt),t&&e(q),t&&e(yt),t&&e(m),t&&e(It),t&&e(A),t&&e(kt),t&&e(B),t&&e(vt),t&&e(y),t&&e(gt),t&&e(U),t&&e(_t),t&&e(L),t&&e(Et),t&&e(z),t&&e(Tt),t&&e(G),t&&e(Pt),t&&e(H),t&&e(Dt),t&&e(j),t&&e($t),t&&e(K),t&&e(Ot),t&&e(w),t&&e(St),t&&e(F),t&&e(xt),vo(D,t),t&&e(Ct),t&&e(M),t&&e(Wt),t&&e(J)}}}function Oo(Q){let c,k;return c=new Do({props:{$$slots:{default:[$o]},$$scope:{ctx:Q}}}),{c(){wo(c.$$.fragment)},l(f){bo(c.$$.fragment,f)},m(f,b){yo(c,f,b),k=!0},p(f,[b]){const $={};b&2&&($.$$scope={dirty:b,ctx:f}),c.$set($)},i(f){k||(Io(c.$$.fragment,f),k=!0)},o(f){ko(c.$$.fragment,f),k=!1},d(f){vo(c,f)}}}function So(Q){return[`apps/
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
     ...`]}class qo extends go{constructor(c){super(),_o(this,c,So,Oo,Eo,{})}}export{qo as default};
