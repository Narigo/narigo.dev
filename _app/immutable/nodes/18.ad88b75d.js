import{s as E,a as z,c as w,i as o,d as l,l as g,m as c,f as y,g as S,A as k,y as T,j as P}from"../chunks/scheduler.52b7490a.js";import{S as O,i as F,b as _,d as h,m as b,a as x,t as v,e as C}from"../chunks/index.644eb738.js";import{B as G}from"../chunks/Bubble.54fd1161.js";import{N as D}from"../chunks/Narigo.e24b860c.js";import{P as H,a as N}from"../chunks/PuzzlePageLayout.389c71ed.js";function M(u){let e;return{c(){e=g(`This is the first puzzle where I used multiple backgrounds with gradients. It's not optimized
		yet, but the idea is clear.`)},l(n){e=c(n,`This is the first puzzle where I used multiple backgrounds with gradients. It's not optimized
		yet, but the idea is clear.`)},m(n,s){o(n,e,s)},d(n){n&&l(e)}}}function U(u){let e,n,s="inset",r,i,d="width",p,f,$="height",m;return{c(){e=g("Here is an improved version by leveraging the fact that "),n=y("code"),n.textContent=s,r=g(` is already telling
		CSS how big the box is. `),i=y("code"),i.textContent=d,p=g(` and
		`),f=y("code"),f.textContent=$,m=g(` settings are therefore not necessary. The second improvement is how the gradients
		are applied: Instead of using four different, it can do it in three, using multiple color stops.`)},l(t){e=c(t,"Here is an improved version by leveraging the fact that "),n=S(t,"CODE",{"data-svelte-h":!0}),k(n)!=="svelte-1yp09pp"&&(n.textContent=s),r=c(t,` is already telling
		CSS how big the box is. `),i=S(t,"CODE",{"data-svelte-h":!0}),k(i)!=="svelte-1stdfwe"&&(i.textContent=d),p=c(t,` and
		`),f=S(t,"CODE",{"data-svelte-h":!0}),k(f)!=="svelte-xu0kcf"&&(f.textContent=$),m=c(t,` settings are therefore not necessary. The second improvement is how the gradients
		are applied: Instead of using four different, it can do it in three, using multiple color stops.`)},m(t,a){o(t,e,a),o(t,n,a),o(t,r,a),o(t,i,a),o(t,p,a),o(t,f,a),o(t,m,a)},p:T,d(t){t&&(l(e),l(n),l(r),l(i),l(p),l(f),l(m))}}}function j(u){let e,n,s="explanation for using multiple backgrounds",r;return{c(){e=g("MDN has a great "),n=y("a"),n.textContent=s,r=g("."),this.h()},l(i){e=c(i,"MDN has a great "),n=S(i,"A",{href:!0,rel:!0,"data-svelte-h":!0}),k(n)!=="svelte-v9f2c7"&&(n.textContent=s),r=c(i,"."),this.h()},h(){P(n,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"),P(n,"rel","external")},m(i,d){o(i,e,d),o(i,n,d),o(i,r,d)},p:T,d(i){i&&(l(e),l(n),l(r))}}}function q(u){let e,n,s,r,i,d,p,f,$,m;return e=new N({props:{title:"Puzzle 33 solution",solution:u[0]}}),s=new D({props:{$$slots:{default:[M]},$$scope:{ctx:u}}}),i=new N({props:{title:"Puzzle 33 solution",solution:u[1]}}),p=new D({props:{$$slots:{default:[U]},$$scope:{ctx:u}}}),$=new G({props:{side:"right",$$slots:{default:[j]},$$scope:{ctx:u}}}),{c(){_(e.$$.fragment),n=z(),_(s.$$.fragment),r=z(),_(i.$$.fragment),d=z(),_(p.$$.fragment),f=z(),_($.$$.fragment)},l(t){h(e.$$.fragment,t),n=w(t),h(s.$$.fragment,t),r=w(t),h(i.$$.fragment,t),d=w(t),h(p.$$.fragment,t),f=w(t),h($.$$.fragment,t)},m(t,a){b(e,t,a),o(t,n,a),b(s,t,a),o(t,r,a),b(i,t,a),o(t,d,a),b(p,t,a),o(t,f,a),b($,t,a),m=!0},p(t,a){const A={};a&4&&(A.$$scope={dirty:a,ctx:t}),s.$set(A);const I={};a&4&&(I.$$scope={dirty:a,ctx:t}),p.$set(I);const B={};a&4&&(B.$$scope={dirty:a,ctx:t}),$.$set(B)},i(t){m||(x(e.$$.fragment,t),x(s.$$.fragment,t),x(i.$$.fragment,t),x(p.$$.fragment,t),x($.$$.fragment,t),m=!0)},o(t){v(e.$$.fragment,t),v(s.$$.fragment,t),v(i.$$.fragment,t),v(p.$$.fragment,t),v($.$$.fragment,t),m=!1},d(t){t&&(l(n),l(r),l(d),l(f)),C(e,t),C(s,t),C(i,t),C(p,t),C($,t)}}}function L(u){let e,n;return e=new H({props:{title:"Birdie",$$slots:{default:[q]},$$scope:{ctx:u}}}),{c(){_(e.$$.fragment)},l(s){h(e.$$.fragment,s)},m(s,r){b(e,s,r),n=!0},p(s,[r]){const i={};r&4&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(x(e.$$.fragment,s),n=!0)},o(s){v(e.$$.fragment,s),n=!1},d(s){C(e,s)}}}function W(u){return[`<div></div>
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
  }`]}class X extends O{constructor(e){super(),F(this,e,W,L,E,{})}}export{X as component};
