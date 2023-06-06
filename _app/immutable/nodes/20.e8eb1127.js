import{S as j,i as H,s as L,y as h,z as b,A as w,g as _,d as k,B as y,a as z,c as F,b as u,h as l,q as $,r as c,k as E,l as P,m as T,G as S,H as W,n as G}from"../chunks/index.0bb61340.js";import{B as J}from"../chunks/Bubble.0a9e1c86.js";import{N as I}from"../chunks/Narigo.7389b9d0.js";import{P as K,a as B}from"../chunks/PuzzlePageLayout.8fbea99b.js";function M(d){let i;return{c(){i=$(`This is a straight forward solution using Flexbox. Even though you may see multiple rows, it's
		easier to think of it all as one row, where the stalactites and stalagmites are aligned
		differently.`)},l(n){i=c(n,`This is a straight forward solution using Flexbox. Even though you may see multiple rows, it's
		easier to think of it all as one row, where the stalactites and stalagmites are aligned
		differently.`)},m(n,s){u(n,i,s)},d(n){n&&l(i)}}}function Q(d){let i;return{c(){i=$(`Since we first saw this as multiple rows, we wanted to try it as a grid as well. This solution
		uses multiple row spans to achieve the height effect.`)},l(n){i=c(n,`Since we first saw this as multiple rows, we wanted to try it as a grid as well. This solution
		uses multiple row spans to achieve the height effect.`)},m(n,s){u(n,i,s)},d(n){n&&l(i)}}}function R(d){let i,n,s,f,a,m,p;return{c(){i=$(`The animated version moves the background of the divs around to create the animation effect. So
		instead of moving the containers around with their positioning, it uses
		`),n=E("code"),s=$("background-position"),f=$(" and "),a=E("code"),m=$("background-size"),p=$(` to position the gradients in a
		way they can move without "overflowing". The overflow effect can cause a part of the gradient to
		appear on the other side of the container.`)},l(e){i=c(e,`The animated version moves the background of the divs around to create the animation effect. So
		instead of moving the containers around with their positioning, it uses
		`),n=P(e,"CODE",{});var o=T(n);s=c(o,"background-position"),o.forEach(l),f=c(e," and "),a=P(e,"CODE",{});var g=T(a);m=c(g,"background-size"),g.forEach(l),p=c(e,` to position the gradients in a
		way they can move without "overflowing". The overflow effect can cause a part of the gradient to
		appear on the other side of the container.`)},m(e,o){u(e,i,o),u(e,n,o),S(n,s),u(e,f,o),u(e,a,o),S(a,m),u(e,p,o)},p:W,d(e){e&&l(i),e&&l(n),e&&l(f),e&&l(a),e&&l(p)}}}function U(d){let i,n,s,f,a,m,p;return{c(){i=$(`Whenever I think of learning resources for Flexbox or Grid, I need to link to
		`),n=E("a"),s=$("Flexbox Froggy"),f=$(`
		and `),a=E("a"),m=$("Grid Garden"),p=$("."),this.h()},l(e){i=c(e,`Whenever I think of learning resources for Flexbox or Grid, I need to link to
		`),n=P(e,"A",{href:!0,rel:!0});var o=T(n);s=c(o,"Flexbox Froggy"),o.forEach(l),f=c(e,`
		and `),a=P(e,"A",{href:!0,rel:!0});var g=T(a);m=c(g,"Grid Garden"),g.forEach(l),p=c(e,"."),this.h()},h(){G(n,"href","https://flexboxfroggy.com/"),G(n,"rel","external"),G(a,"href","https://cssgridgarden.com/"),G(a,"rel","external")},m(e,o){u(e,i,o),u(e,n,o),S(n,s),u(e,f,o),u(e,a,o),S(a,m),u(e,p,o)},p:W,d(e){e&&l(i),e&&l(n),e&&l(f),e&&l(a),e&&l(p)}}}function V(d){let i,n,s,f,a,m,p,e,o,g,v,A,x,C;return i=new B({props:{title:"Puzzle 36 solution",solution:d[0]}}),s=new I({props:{$$slots:{default:[M]},$$scope:{ctx:d}}}),a=new B({props:{title:"Puzzle 36 solution",solution:d[1]}}),p=new I({props:{$$slots:{default:[Q]},$$scope:{ctx:d}}}),o=new B({props:{title:"Puzzle 36 - animation",solution:d[2]}}),v=new I({props:{$$slots:{default:[R]},$$scope:{ctx:d}}}),x=new J({props:{side:"right",$$slots:{default:[U]},$$scope:{ctx:d}}}),{c(){h(i.$$.fragment),n=z(),h(s.$$.fragment),f=z(),h(a.$$.fragment),m=z(),h(p.$$.fragment),e=z(),h(o.$$.fragment),g=z(),h(v.$$.fragment),A=z(),h(x.$$.fragment)},l(t){b(i.$$.fragment,t),n=F(t),b(s.$$.fragment,t),f=F(t),b(a.$$.fragment,t),m=F(t),b(p.$$.fragment,t),e=F(t),b(o.$$.fragment,t),g=F(t),b(v.$$.fragment,t),A=F(t),b(x.$$.fragment,t)},m(t,r){w(i,t,r),u(t,n,r),w(s,t,r),u(t,f,r),w(a,t,r),u(t,m,r),w(p,t,r),u(t,e,r),w(o,t,r),u(t,g,r),w(v,t,r),u(t,A,r),w(x,t,r),C=!0},p(t,r){const q={};r&8&&(q.$$scope={dirty:r,ctx:t}),s.$set(q);const D={};r&8&&(D.$$scope={dirty:r,ctx:t}),p.$set(D);const N={};r&8&&(N.$$scope={dirty:r,ctx:t}),v.$set(N);const O={};r&8&&(O.$$scope={dirty:r,ctx:t}),x.$set(O)},i(t){C||(_(i.$$.fragment,t),_(s.$$.fragment,t),_(a.$$.fragment,t),_(p.$$.fragment,t),_(o.$$.fragment,t),_(v.$$.fragment,t),_(x.$$.fragment,t),C=!0)},o(t){k(i.$$.fragment,t),k(s.$$.fragment,t),k(a.$$.fragment,t),k(p.$$.fragment,t),k(o.$$.fragment,t),k(v.$$.fragment,t),k(x.$$.fragment,t),C=!1},d(t){y(i,t),t&&l(n),y(s,t),t&&l(f),y(a,t),t&&l(m),y(p,t),t&&l(e),y(o,t),t&&l(g),y(v,t),t&&l(A),y(x,t)}}}function X(d){let i,n;return i=new K({props:{title:"Interleaved",$$slots:{default:[V]},$$scope:{ctx:d}}}),{c(){h(i.$$.fragment)},l(s){b(i.$$.fragment,s)},m(s,f){w(i,s,f),n=!0},p(s,[f]){const a={};f&8&&(a.$$scope={dirty:f,ctx:s}),i.$set(a)},i(s){n||(_(i.$$.fragment,s),n=!0)},o(s){k(i.$$.fragment,s),n=!1},d(s){y(i,s)}}}function Y(d){return[`<div class="m"></div>
<div class="t"></div>
<div class="m"></div>
<div class="t"></div>
<div class="m"></div>
<style>
  body {
    background:#1A4341;
    display: flex;
    justify-content: center;
    gap: 25px;
    margin: 0;
  }
  .t {
    background: #998235;
    border-radius: 0 0 25px 25px;
  }
  .m {
    align-self: flex-end;
    background: #F3AC3C;
    border-radius: 25px 25px 0 0;
  }
  div {
    width: 50px;
    height: 200px;
    background: #dd6b4d;
  }
</style>`,`<div></div>
<div class="t"></div>
<div></div>
<div class="t"></div>
<div></div>
<div class="m"></div>
<div class="m"></div>
<div class="m"></div>
<style>
  body {
    background:#1A4341;
    display: grid;
    grid-template: repeat(3, 100px) / repeat(5, 50px);
    gap: 0 25px;
    margin: 0 25px;
  }
  .t,.m {
    grid-row: span 2;
  }
  .t {
    background: #998235;
    border-radius: 0 0 25px 25px;
  }
  .m {
    background: #F3AC3C;
    border-radius: 25px 25px 0 0;
  }
</style>`,`<div class="m"></div>
<div class="t"></div>
<div class="m"></div>
<div class="t"></div>
<div class="m"></div>
<style>
  body {
    background: #1A4341;
    display: flex;
    gap: 0 25px;
    margin: 0 25px;
  }
  div {
    width: 50px;
    height: 100%;
    animation: 500ms 1s alternate ease-in-out infinite;
  }
  .t {
    background:
      radial-gradient(circle, #998235 25px, transparent 0),
      linear-gradient(#998235 175px, transparent 0)
    ;
    background-position: 0px 25px, 0px 0px;
    background-size: 100% 100%, 100% 200%;
    animation-name: sliding-t;
  }
  .m {
    background:
      radial-gradient(circle, #F3AC3C 25px, transparent 0),
      linear-gradient(to top, #F3AC3C 175px, transparent 0)
    ;
    background-position: 0px -25px, 0px -150px;
    background-size: 100% 100%, 100% 150%;
    animation-name: sliding-m;
  }
  @keyframes sliding-m {
    0% {
      background-position: 0 -25px, 0 -150px;
    }
    100% {
      background-position: 0 125px, 0 0;
    }
  }
  @keyframes sliding-t {
    0% {
      background-position: 0 25px, 0 0;
    }
    100% {
      background-position: 0 -125px, 0 -150px;
    }
  }
</style>`]}class nt extends j{constructor(i){super(),H(this,i,Y,X,L,{})}}export{nt as component};
