import{s as N,a as C,c as S,i as p,d as u,l as g,m as d,f as T,g as D,A as F,j as y,y as G}from"../chunks/scheduler.7b4a0948.js";import{S as H,i as M,b as _,d as h,m as b,a as z,t as v,e as w}from"../chunks/index.38f4d462.js";import{C as k}from"../chunks/Code.81306a52.js";import{B as U}from"../chunks/Bubble.9b07f18a.js";import{N as B}from"../chunks/Narigo.3993b19b.js";import{P as j,a as P}from"../chunks/PuzzlePageLayout.096430e5.js";function q($){let t;return{c(){t=g(`This is the first puzzle where I used multiple backgrounds with gradients. It's not optimized
		yet, but the idea is clear.`)},l(e){t=d(e,`This is the first puzzle where I used multiple backgrounds with gradients. It's not optimized
		yet, but the idea is clear.`)},m(e,r){p(e,t,r)},d(e){e&&u(t)}}}function L($){let t;return{c(){t=g("inset")},l(e){t=d(e,"inset")},m(e,r){p(e,t,r)},d(e){e&&u(t)}}}function W($){let t;return{c(){t=g("width")},l(e){t=d(e,"width")},m(e,r){p(e,t,r)},d(e){e&&u(t)}}}function E($){let t;return{c(){t=g("height")},l(e){t=d(e,"height")},m(e,r){p(e,t,r)},d(e){e&&u(t)}}}function J($){let t,e,r,i,a,f,m,c;return e=new k({props:{$$slots:{default:[L]},$$scope:{ctx:$}}}),i=new k({props:{$$slots:{default:[W]},$$scope:{ctx:$}}}),f=new k({props:{$$slots:{default:[E]},$$scope:{ctx:$}}}),{c(){t=g("Here is an improved version by leveraging the fact that "),_(e.$$.fragment),r=g(` is already telling
		CSS how big the box is. `),_(i.$$.fragment),a=g(` and
		`),_(f.$$.fragment),m=g(` settings are therefore not necessary. The second improvement is how the gradients
		are applied: Instead of using four different, it can do it in three, using multiple color stops.`)},l(s){t=d(s,"Here is an improved version by leveraging the fact that "),h(e.$$.fragment,s),r=d(s,` is already telling
		CSS how big the box is. `),h(i.$$.fragment,s),a=d(s,` and
		`),h(f.$$.fragment,s),m=d(s,` settings are therefore not necessary. The second improvement is how the gradients
		are applied: Instead of using four different, it can do it in three, using multiple color stops.`)},m(s,o){p(s,t,o),b(e,s,o),p(s,r,o),b(i,s,o),p(s,a,o),b(f,s,o),p(s,m,o),c=!0},p(s,o){const n={};o&4&&(n.$$scope={dirty:o,ctx:s}),e.$set(n);const l={};o&4&&(l.$$scope={dirty:o,ctx:s}),i.$set(l);const x={};o&4&&(x.$$scope={dirty:o,ctx:s}),f.$set(x)},i(s){c||(z(e.$$.fragment,s),z(i.$$.fragment,s),z(f.$$.fragment,s),c=!0)},o(s){v(e.$$.fragment,s),v(i.$$.fragment,s),v(f.$$.fragment,s),c=!1},d(s){s&&(u(t),u(r),u(a),u(m)),w(e,s),w(i,s),w(f,s)}}}function K($){let t,e,r="explanation for using multiple backgrounds",i;return{c(){t=g("MDN has a great "),e=T("a"),e.textContent=r,i=g("."),this.h()},l(a){t=d(a,"MDN has a great "),e=D(a,"A",{href:!0,rel:!0,"data-svelte-h":!0}),F(e)!=="svelte-v9f2c7"&&(e.textContent=r),i=d(a,"."),this.h()},h(){y(e,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"),y(e,"rel","external")},m(a,f){p(a,t,f),p(a,e,f),p(a,i,f)},p:G,d(a){a&&(u(t),u(e),u(i))}}}function O($){let t,e,r,i,a,f,m,c,s,o;return t=new P({props:{title:"Puzzle 33 solution",solution:$[0]}}),r=new B({props:{$$slots:{default:[q]},$$scope:{ctx:$}}}),a=new P({props:{title:"Puzzle 33 solution",solution:$[1]}}),m=new B({props:{$$slots:{default:[J]},$$scope:{ctx:$}}}),s=new U({props:{side:"right",$$slots:{default:[K]},$$scope:{ctx:$}}}),{c(){_(t.$$.fragment),e=C(),_(r.$$.fragment),i=C(),_(a.$$.fragment),f=C(),_(m.$$.fragment),c=C(),_(s.$$.fragment)},l(n){h(t.$$.fragment,n),e=S(n),h(r.$$.fragment,n),i=S(n),h(a.$$.fragment,n),f=S(n),h(m.$$.fragment,n),c=S(n),h(s.$$.fragment,n)},m(n,l){b(t,n,l),p(n,e,l),b(r,n,l),p(n,i,l),b(a,n,l),p(n,f,l),b(m,n,l),p(n,c,l),b(s,n,l),o=!0},p(n,l){const x={};l&4&&(x.$$scope={dirty:l,ctx:n}),r.$set(x);const A={};l&4&&(A.$$scope={dirty:l,ctx:n}),m.$set(A);const I={};l&4&&(I.$$scope={dirty:l,ctx:n}),s.$set(I)},i(n){o||(z(t.$$.fragment,n),z(r.$$.fragment,n),z(a.$$.fragment,n),z(m.$$.fragment,n),z(s.$$.fragment,n),o=!0)},o(n){v(t.$$.fragment,n),v(r.$$.fragment,n),v(a.$$.fragment,n),v(m.$$.fragment,n),v(s.$$.fragment,n),o=!1},d(n){n&&(u(e),u(i),u(f),u(c)),w(t,n),w(r,n),w(a,n),w(m,n),w(s,n)}}}function Q($){let t,e;return t=new j({props:{title:"Birdie",$$slots:{default:[O]},$$scope:{ctx:$}}}),{c(){_(t.$$.fragment)},l(r){h(t.$$.fragment,r)},m(r,i){b(t,r,i),e=!0},p(r,[i]){const a={};i&4&&(a.$$scope={dirty:i,ctx:r}),t.$set(a)},i(r){e||(z(t.$$.fragment,r),e=!0)},o(r){v(t.$$.fragment,r),e=!1},d(r){w(t,r)}}}function R($){return[`<div></div>
<style>
  body {
    background: #1A4341;
  }
  div {
    position: absolute;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    inset: 50px 100px;
    background:
      radial-gradient(#0B2429 15px, transparent 0) -30px -30px,
      conic-gradient(#F3AC3C 90deg, transparent 0),
      radial-gradient(transparent 75px, #1A4341 0),
      conic-gradient(transparent 180deg, #998235 0);
  }`,`<div></div>
<style>
  body {
    background: #1A4341;
  }
  div {
    position: absolute;
    border-radius: 50%;
    inset: 50px 100px;
    background:
      radial-gradient(#0B2429 15px, transparent 0) -30px -30px,
      conic-gradient(#F3AC3C 90deg, #1A4341 0 180deg,transparent 0),
      radial-gradient(#998235 75px, #1A4341 0);
  }`]}class ne extends H{constructor(t){super(),M(this,t,R,Q,N,{})}}export{ne as component};
