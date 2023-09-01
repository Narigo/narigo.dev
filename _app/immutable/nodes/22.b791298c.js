import{s as L,a as z,c as C,i as u,d as p,l as b,m as w,f as E,g as N,A as W,j as P,y as D}from"../chunks/scheduler.58de62d3.js";import{S as H,i as J,b as m,d as g,m as c,a as v,t as h,e as x}from"../chunks/index.698fb7dd.js";import{C as q}from"../chunks/Code.f01f5db6.js";import{B as K}from"../chunks/Bubble.b320fa89.js";import{N as T}from"../chunks/Narigo.08d9f4ea.js";import{P as M,a as G}from"../chunks/PuzzlePageLayout.b81087b6.js";function O(f){let n;return{c(){n=b(`This is a straight forward solution using Flexbox. Even though you may see multiple rows, it's
		easier to think of it all as one row, where the stalactites and stalagmites are aligned
		differently.`)},l(e){n=w(e,`This is a straight forward solution using Flexbox. Even though you may see multiple rows, it's
		easier to think of it all as one row, where the stalactites and stalagmites are aligned
		differently.`)},m(e,s){u(e,n,s)},d(e){e&&p(n)}}}function Q(f){let n;return{c(){n=b(`Since we first saw this as multiple rows, we wanted to try it as a grid as well. This solution
		uses multiple row spans to achieve the height effect.`)},l(e){n=w(e,`Since we first saw this as multiple rows, we wanted to try it as a grid as well. This solution
		uses multiple row spans to achieve the height effect.`)},m(e,s){u(e,n,s)},d(e){e&&p(n)}}}function R(f){let n;return{c(){n=b("background-position")},l(e){n=w(e,"background-position")},m(e,s){u(e,n,s)},d(e){e&&p(n)}}}function U(f){let n;return{c(){n=b("background-size")},l(e){n=w(e,"background-size")},m(e,s){u(e,n,s)},d(e){e&&p(n)}}}function V(f){let n,e,s,r,o,$;return e=new q({props:{$$slots:{default:[R]},$$scope:{ctx:f}}}),r=new q({props:{$$slots:{default:[U]},$$scope:{ctx:f}}}),{c(){n=b(`The animated version moves the background of the divs around to create the animation effect. So
		instead of moving the containers around with their positioning, it uses
		`),m(e.$$.fragment),s=b(" and "),m(r.$$.fragment),o=b(` to position the gradients in a
		way they can move without "overflowing". The overflow effect can cause a part of the gradient to
		appear on the other side of the container.`)},l(i){n=w(i,`The animated version moves the background of the divs around to create the animation effect. So
		instead of moving the containers around with their positioning, it uses
		`),g(e.$$.fragment,i),s=w(i," and "),g(r.$$.fragment,i),o=w(i,` to position the gradients in a
		way they can move without "overflowing". The overflow effect can cause a part of the gradient to
		appear on the other side of the container.`)},m(i,a){u(i,n,a),c(e,i,a),u(i,s,a),c(r,i,a),u(i,o,a),$=!0},p(i,a){const d={};a&8&&(d.$$scope={dirty:a,ctx:i}),e.$set(d);const y={};a&8&&(y.$$scope={dirty:a,ctx:i}),r.$set(y)},i(i){$||(v(e.$$.fragment,i),v(r.$$.fragment,i),$=!0)},o(i){h(e.$$.fragment,i),h(r.$$.fragment,i),$=!1},d(i){i&&(p(n),p(s),p(o)),x(e,i),x(r,i)}}}function X(f){let n,e,s="Flexbox Froggy",r,o,$="Grid Garden",i;return{c(){n=b(`Whenever I think of learning resources for Flexbox or Grid, I need to link to
		`),e=E("a"),e.textContent=s,r=b(`
		and `),o=E("a"),o.textContent=$,i=b("."),this.h()},l(a){n=w(a,`Whenever I think of learning resources for Flexbox or Grid, I need to link to
		`),e=N(a,"A",{href:!0,rel:!0,"data-svelte-h":!0}),W(e)!=="svelte-jcty96"&&(e.textContent=s),r=w(a,`
		and `),o=N(a,"A",{href:!0,rel:!0,"data-svelte-h":!0}),W(o)!=="svelte-rdunfp"&&(o.textContent=$),i=w(a,"."),this.h()},h(){P(e,"href","https://flexboxfroggy.com/"),P(e,"rel","external"),P(o,"href","https://cssgridgarden.com/"),P(o,"rel","external")},m(a,d){u(a,n,d),u(a,e,d),u(a,r,d),u(a,o,d),u(a,i,d)},p:D,d(a){a&&(p(n),p(e),p(r),p(o),p(i))}}}function Y(f){let n,e,s,r,o,$,i,a,d,y,_,A,k,F;return n=new G({props:{title:"Puzzle 36 solution",solution:f[0]}}),s=new T({props:{$$slots:{default:[O]},$$scope:{ctx:f}}}),o=new G({props:{title:"Puzzle 36 solution",solution:f[1]}}),i=new T({props:{$$slots:{default:[Q]},$$scope:{ctx:f}}}),d=new G({props:{title:"Puzzle 36 - animation",solution:f[2]}}),_=new T({props:{$$slots:{default:[V]},$$scope:{ctx:f}}}),k=new K({props:{side:"right",$$slots:{default:[X]},$$scope:{ctx:f}}}),{c(){m(n.$$.fragment),e=z(),m(s.$$.fragment),r=z(),m(o.$$.fragment),$=z(),m(i.$$.fragment),a=z(),m(d.$$.fragment),y=z(),m(_.$$.fragment),A=z(),m(k.$$.fragment)},l(t){g(n.$$.fragment,t),e=C(t),g(s.$$.fragment,t),r=C(t),g(o.$$.fragment,t),$=C(t),g(i.$$.fragment,t),a=C(t),g(d.$$.fragment,t),y=C(t),g(_.$$.fragment,t),A=C(t),g(k.$$.fragment,t)},m(t,l){c(n,t,l),u(t,e,l),c(s,t,l),u(t,r,l),c(o,t,l),u(t,$,l),c(i,t,l),u(t,a,l),c(d,t,l),u(t,y,l),c(_,t,l),u(t,A,l),c(k,t,l),F=!0},p(t,l){const S={};l&8&&(S.$$scope={dirty:l,ctx:t}),s.$set(S);const I={};l&8&&(I.$$scope={dirty:l,ctx:t}),i.$set(I);const j={};l&8&&(j.$$scope={dirty:l,ctx:t}),_.$set(j);const B={};l&8&&(B.$$scope={dirty:l,ctx:t}),k.$set(B)},i(t){F||(v(n.$$.fragment,t),v(s.$$.fragment,t),v(o.$$.fragment,t),v(i.$$.fragment,t),v(d.$$.fragment,t),v(_.$$.fragment,t),v(k.$$.fragment,t),F=!0)},o(t){h(n.$$.fragment,t),h(s.$$.fragment,t),h(o.$$.fragment,t),h(i.$$.fragment,t),h(d.$$.fragment,t),h(_.$$.fragment,t),h(k.$$.fragment,t),F=!1},d(t){t&&(p(e),p(r),p($),p(a),p(y),p(A)),x(n,t),x(s,t),x(o,t),x(i,t),x(d,t),x(_,t),x(k,t)}}}function Z(f){let n,e;return n=new M({props:{title:"Interleaved",$$slots:{default:[Y]},$$scope:{ctx:f}}}),{c(){m(n.$$.fragment)},l(s){g(n.$$.fragment,s)},m(s,r){c(n,s,r),e=!0},p(s,[r]){const o={};r&8&&(o.$$scope={dirty:r,ctx:s}),n.$set(o)},i(s){e||(v(n.$$.fragment,s),e=!0)},o(s){h(n.$$.fragment,s),e=!1},d(s){x(n,s)}}}function tt(f){return[`<div class="m"></div>
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
</style>`]}class rt extends H{constructor(n){super(),J(this,n,tt,Z,L,{})}}export{rt as component};
