import{s as O,a as y,c as z,i as p,d as u,l as _,m as k,f as T,g as G,A as S,y as N,j as P}from"../chunks/scheduler.52b7490a.js";import{S as W,i as L,b as c,d as v,m as x,a as h,t as b,e as w}from"../chunks/index.644eb738.js";import{B as H}from"../chunks/Bubble.54fd1161.js";import{N as I}from"../chunks/Narigo.e24b860c.js";import{P as J,a as j}from"../chunks/PuzzlePageLayout.389c71ed.js";function K(f){let n;return{c(){n=_(`This is a straight forward solution using Flexbox. Even though you may see multiple rows, it's
		easier to think of it all as one row, where the stalactites and stalagmites are aligned
		differently.`)},l(e){n=k(e,`This is a straight forward solution using Flexbox. Even though you may see multiple rows, it's
		easier to think of it all as one row, where the stalactites and stalagmites are aligned
		differently.`)},m(e,a){p(e,n,a)},d(e){e&&u(n)}}}function M(f){let n;return{c(){n=_(`Since we first saw this as multiple rows, we wanted to try it as a grid as well. This solution
		uses multiple row spans to achieve the height effect.`)},l(e){n=k(e,`Since we first saw this as multiple rows, we wanted to try it as a grid as well. This solution
		uses multiple row spans to achieve the height effect.`)},m(e,a){p(e,n,a)},d(e){e&&u(n)}}}function Q(f){let n,e,a="background-position",r,s,m="background-size",d;return{c(){n=_(`The animated version moves the background of the divs around to create the animation effect. So
		instead of moving the containers around with their positioning, it uses
		`),e=T("code"),e.textContent=a,r=_(" and "),s=T("code"),s.textContent=m,d=_(` to position the gradients in a
		way they can move without "overflowing". The overflow effect can cause a part of the gradient to
		appear on the other side of the container.`)},l(i){n=k(i,`The animated version moves the background of the divs around to create the animation effect. So
		instead of moving the containers around with their positioning, it uses
		`),e=G(i,"CODE",{"data-svelte-h":!0}),S(e)!=="svelte-sjui6q"&&(e.textContent=a),r=k(i," and "),s=G(i,"CODE",{"data-svelte-h":!0}),S(s)!=="svelte-c9pnwk"&&(s.textContent=m),d=k(i,` to position the gradients in a
		way they can move without "overflowing". The overflow effect can cause a part of the gradient to
		appear on the other side of the container.`)},m(i,l){p(i,n,l),p(i,e,l),p(i,r,l),p(i,s,l),p(i,d,l)},p:N,d(i){i&&(u(n),u(e),u(r),u(s),u(d))}}}function R(f){let n,e,a="Flexbox Froggy",r,s,m="Grid Garden",d;return{c(){n=_(`Whenever I think of learning resources for Flexbox or Grid, I need to link to
		`),e=T("a"),e.textContent=a,r=_(`
		and `),s=T("a"),s.textContent=m,d=_("."),this.h()},l(i){n=k(i,`Whenever I think of learning resources for Flexbox or Grid, I need to link to
		`),e=G(i,"A",{href:!0,rel:!0,"data-svelte-h":!0}),S(e)!=="svelte-jcty96"&&(e.textContent=a),r=k(i,`
		and `),s=G(i,"A",{href:!0,rel:!0,"data-svelte-h":!0}),S(s)!=="svelte-rdunfp"&&(s.textContent=m),d=k(i,"."),this.h()},h(){P(e,"href","https://flexboxfroggy.com/"),P(e,"rel","external"),P(s,"href","https://cssgridgarden.com/"),P(s,"rel","external")},m(i,l){p(i,n,l),p(i,e,l),p(i,r,l),p(i,s,l),p(i,d,l)},p:N,d(i){i&&(u(n),u(e),u(r),u(s),u(d))}}}function U(f){let n,e,a,r,s,m,d,i,l,C,$,A,g,F;return n=new j({props:{title:"Puzzle 36 solution",solution:f[0]}}),a=new I({props:{$$slots:{default:[K]},$$scope:{ctx:f}}}),s=new j({props:{title:"Puzzle 36 solution",solution:f[1]}}),d=new I({props:{$$slots:{default:[M]},$$scope:{ctx:f}}}),l=new j({props:{title:"Puzzle 36 - animation",solution:f[2]}}),$=new I({props:{$$slots:{default:[Q]},$$scope:{ctx:f}}}),g=new H({props:{side:"right",$$slots:{default:[R]},$$scope:{ctx:f}}}),{c(){c(n.$$.fragment),e=y(),c(a.$$.fragment),r=y(),c(s.$$.fragment),m=y(),c(d.$$.fragment),i=y(),c(l.$$.fragment),C=y(),c($.$$.fragment),A=y(),c(g.$$.fragment)},l(t){v(n.$$.fragment,t),e=z(t),v(a.$$.fragment,t),r=z(t),v(s.$$.fragment,t),m=z(t),v(d.$$.fragment,t),i=z(t),v(l.$$.fragment,t),C=z(t),v($.$$.fragment,t),A=z(t),v(g.$$.fragment,t)},m(t,o){x(n,t,o),p(t,e,o),x(a,t,o),p(t,r,o),x(s,t,o),p(t,m,o),x(d,t,o),p(t,i,o),x(l,t,o),p(t,C,o),x($,t,o),p(t,A,o),x(g,t,o),F=!0},p(t,o){const E={};o&8&&(E.$$scope={dirty:o,ctx:t}),a.$set(E);const q={};o&8&&(q.$$scope={dirty:o,ctx:t}),d.$set(q);const B={};o&8&&(B.$$scope={dirty:o,ctx:t}),$.$set(B);const D={};o&8&&(D.$$scope={dirty:o,ctx:t}),g.$set(D)},i(t){F||(h(n.$$.fragment,t),h(a.$$.fragment,t),h(s.$$.fragment,t),h(d.$$.fragment,t),h(l.$$.fragment,t),h($.$$.fragment,t),h(g.$$.fragment,t),F=!0)},o(t){b(n.$$.fragment,t),b(a.$$.fragment,t),b(s.$$.fragment,t),b(d.$$.fragment,t),b(l.$$.fragment,t),b($.$$.fragment,t),b(g.$$.fragment,t),F=!1},d(t){t&&(u(e),u(r),u(m),u(i),u(C),u(A)),w(n,t),w(a,t),w(s,t),w(d,t),w(l,t),w($,t),w(g,t)}}}function V(f){let n,e;return n=new J({props:{title:"Interleaved",$$slots:{default:[U]},$$scope:{ctx:f}}}),{c(){c(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,r){x(n,a,r),e=!0},p(a,[r]){const s={};r&8&&(s.$$scope={dirty:r,ctx:a}),n.$set(s)},i(a){e||(h(n.$$.fragment,a),e=!0)},o(a){b(n.$$.fragment,a),e=!1},d(a){w(n,a)}}}function X(f){return[`<div class="m"></div>
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
</style>`]}class it extends W{constructor(n){super(),L(this,n,X,V,O,{})}}export{it as component};
