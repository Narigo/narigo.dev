import{S as G,i as O,s as q,w as _,x as b,y as h,f as z,t as v,z as x,a as C,c as k,b as p,h as o,q as m,r as g,k as S,l as A,m as I,G as B,B as T,n as P}from"../../../../../chunks/index-543a8e9c.js";import{B as F}from"../../../../../chunks/Bubble-4e6bc313.js";import{N as D}from"../../../../../chunks/Narigo-aec83592.js";import{P as H,a as N}from"../../../../../chunks/PuzzlePageLayout-9335484a.js";function M(f){let t;return{c(){t=m(`This is the first puzzle where I used multiple backgrounds with gradients. It's not optimized
		yet, but the idea is clear.`)},l(s){t=g(s,`This is the first puzzle where I used multiple backgrounds with gradients. It's not optimized
		yet, but the idea is clear.`)},m(s,n){p(s,t,n)},d(s){s&&o(t)}}}function U(f){let t,s,n,a,r,l,u,d,$,c;return{c(){t=m("Here is an improved version by leveraging the fact that "),s=S("code"),n=m("inset"),a=m(` is already telling
		CSS how big the box is. `),r=S("code"),l=m("width"),u=m(` and
		`),d=S("code"),$=m("height"),c=m(` settings are therefore not necessary. The second improvement is how the gradients
		are applied: Instead of using four different, it can do it in three, using multiple color stops.`)},l(e){t=g(e,"Here is an improved version by leveraging the fact that "),s=A(e,"CODE",{});var i=I(s);n=g(i,"inset"),i.forEach(o),a=g(e,` is already telling
		CSS how big the box is. `),r=A(e,"CODE",{});var w=I(r);l=g(w,"width"),w.forEach(o),u=g(e,` and
		`),d=A(e,"CODE",{});var y=I(d);$=g(y,"height"),y.forEach(o),c=g(e,` settings are therefore not necessary. The second improvement is how the gradients
		are applied: Instead of using four different, it can do it in three, using multiple color stops.`)},m(e,i){p(e,t,i),p(e,s,i),B(s,n),p(e,a,i),p(e,r,i),B(r,l),p(e,u,i),p(e,d,i),B(d,$),p(e,c,i)},p:T,d(e){e&&o(t),e&&o(s),e&&o(a),e&&o(r),e&&o(u),e&&o(d),e&&o(c)}}}function L(f){let t,s,n,a;return{c(){t=m("MDN has a great "),s=S("a"),n=m("explanation for using multiple backgrounds"),a=m("."),this.h()},l(r){t=g(r,"MDN has a great "),s=A(r,"A",{href:!0,rel:!0});var l=I(s);n=g(l,"explanation for using multiple backgrounds"),l.forEach(o),a=g(r,"."),this.h()},h(){P(s,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"),P(s,"rel","external")},m(r,l){p(r,t,l),p(r,s,l),B(s,n),p(r,a,l)},p:T,d(r){r&&o(t),r&&o(s),r&&o(a)}}}function W(f){let t,s,n,a,r,l,u,d,$,c;return t=new N({props:{title:"Puzzle 33 solution",solution:f[0]}}),n=new D({props:{$$slots:{default:[M]},$$scope:{ctx:f}}}),r=new N({props:{title:"Puzzle 33 solution",solution:f[1]}}),u=new D({props:{$$slots:{default:[U]},$$scope:{ctx:f}}}),$=new F({props:{side:"right",$$slots:{default:[L]},$$scope:{ctx:f}}}),{c(){_(t.$$.fragment),s=C(),_(n.$$.fragment),a=C(),_(r.$$.fragment),l=C(),_(u.$$.fragment),d=C(),_($.$$.fragment)},l(e){b(t.$$.fragment,e),s=k(e),b(n.$$.fragment,e),a=k(e),b(r.$$.fragment,e),l=k(e),b(u.$$.fragment,e),d=k(e),b($.$$.fragment,e)},m(e,i){h(t,e,i),p(e,s,i),h(n,e,i),p(e,a,i),h(r,e,i),p(e,l,i),h(u,e,i),p(e,d,i),h($,e,i),c=!0},p(e,i){const w={};i&4&&(w.$$scope={dirty:i,ctx:e}),n.$set(w);const y={};i&4&&(y.$$scope={dirty:i,ctx:e}),u.$set(y);const E={};i&4&&(E.$$scope={dirty:i,ctx:e}),$.$set(E)},i(e){c||(z(t.$$.fragment,e),z(n.$$.fragment,e),z(r.$$.fragment,e),z(u.$$.fragment,e),z($.$$.fragment,e),c=!0)},o(e){v(t.$$.fragment,e),v(n.$$.fragment,e),v(r.$$.fragment,e),v(u.$$.fragment,e),v($.$$.fragment,e),c=!1},d(e){x(t,e),e&&o(s),x(n,e),e&&o(a),x(r,e),e&&o(l),x(u,e),e&&o(d),x($,e)}}}function j(f){let t,s;return t=new H({props:{$$slots:{default:[W]},$$scope:{ctx:f}}}),{c(){_(t.$$.fragment)},l(n){b(t.$$.fragment,n)},m(n,a){h(t,n,a),s=!0},p(n,[a]){const r={};a&4&&(r.$$scope={dirty:a,ctx:n}),t.$set(r)},i(n){s||(z(t.$$.fragment,n),s=!0)},o(n){v(t.$$.fragment,n),s=!1},d(n){x(t,n)}}}function J(f){return[`<div></div>
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
  }`]}class X extends G{constructor(t){super(),O(this,t,J,j,q,{})}}export{X as default};
