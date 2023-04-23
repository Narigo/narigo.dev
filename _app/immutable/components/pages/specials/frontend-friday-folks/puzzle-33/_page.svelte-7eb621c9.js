import{S as G,i as O,s as q,w as _,x as b,y as h,f as z,t as v,z as x,a as C,c as k,b as p,h as o,q as m,r as g,k as S,l as A,m as B,G as I,B as T,n as P}from"../../../../../chunks/index-ed5c000a.js";import{B as F}from"../../../../../chunks/Bubble-111f0336.js";import{N as D}from"../../../../../chunks/Narigo-406ea8d0.js";import{P as H,a as N}from"../../../../../chunks/PuzzlePageLayout-93dc3336.js";function M(f){let t;return{c(){t=m(`This is the first puzzle where I used multiple backgrounds with gradients. It's not optimized
		yet, but the idea is clear.`)},l(s){t=g(s,`This is the first puzzle where I used multiple backgrounds with gradients. It's not optimized
		yet, but the idea is clear.`)},m(s,i){p(s,t,i)},d(s){s&&o(t)}}}function U(f){let t,s,i,a,n,l,u,d,$,c;return{c(){t=m("Here is an improved version by leveraging the fact that "),s=S("code"),i=m("inset"),a=m(` is already telling
		CSS how big the box is. `),n=S("code"),l=m("width"),u=m(` and
		`),d=S("code"),$=m("height"),c=m(` settings are therefore not necessary. The second improvement is how the gradients
		are applied: Instead of using four different, it can do it in three, using multiple color stops.`)},l(e){t=g(e,"Here is an improved version by leveraging the fact that "),s=A(e,"CODE",{});var r=B(s);i=g(r,"inset"),r.forEach(o),a=g(e,` is already telling
		CSS how big the box is. `),n=A(e,"CODE",{});var w=B(n);l=g(w,"width"),w.forEach(o),u=g(e,` and
		`),d=A(e,"CODE",{});var y=B(d);$=g(y,"height"),y.forEach(o),c=g(e,` settings are therefore not necessary. The second improvement is how the gradients
		are applied: Instead of using four different, it can do it in three, using multiple color stops.`)},m(e,r){p(e,t,r),p(e,s,r),I(s,i),p(e,a,r),p(e,n,r),I(n,l),p(e,u,r),p(e,d,r),I(d,$),p(e,c,r)},p:T,d(e){e&&o(t),e&&o(s),e&&o(a),e&&o(n),e&&o(u),e&&o(d),e&&o(c)}}}function L(f){let t,s,i,a;return{c(){t=m("MDN has a great "),s=S("a"),i=m("explanation for using multiple backgrounds"),a=m("."),this.h()},l(n){t=g(n,"MDN has a great "),s=A(n,"A",{href:!0,rel:!0});var l=B(s);i=g(l,"explanation for using multiple backgrounds"),l.forEach(o),a=g(n,"."),this.h()},h(){P(s,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"),P(s,"rel","external")},m(n,l){p(n,t,l),p(n,s,l),I(s,i),p(n,a,l)},p:T,d(n){n&&o(t),n&&o(s),n&&o(a)}}}function W(f){let t,s,i,a,n,l,u,d,$,c;return t=new N({props:{title:"Puzzle 33 solution",solution:f[0]}}),i=new D({props:{$$slots:{default:[M]},$$scope:{ctx:f}}}),n=new N({props:{title:"Puzzle 33 solution",solution:f[1]}}),u=new D({props:{$$slots:{default:[U]},$$scope:{ctx:f}}}),$=new F({props:{side:"right",$$slots:{default:[L]},$$scope:{ctx:f}}}),{c(){_(t.$$.fragment),s=C(),_(i.$$.fragment),a=C(),_(n.$$.fragment),l=C(),_(u.$$.fragment),d=C(),_($.$$.fragment)},l(e){b(t.$$.fragment,e),s=k(e),b(i.$$.fragment,e),a=k(e),b(n.$$.fragment,e),l=k(e),b(u.$$.fragment,e),d=k(e),b($.$$.fragment,e)},m(e,r){h(t,e,r),p(e,s,r),h(i,e,r),p(e,a,r),h(n,e,r),p(e,l,r),h(u,e,r),p(e,d,r),h($,e,r),c=!0},p(e,r){const w={};r&4&&(w.$$scope={dirty:r,ctx:e}),i.$set(w);const y={};r&4&&(y.$$scope={dirty:r,ctx:e}),u.$set(y);const E={};r&4&&(E.$$scope={dirty:r,ctx:e}),$.$set(E)},i(e){c||(z(t.$$.fragment,e),z(i.$$.fragment,e),z(n.$$.fragment,e),z(u.$$.fragment,e),z($.$$.fragment,e),c=!0)},o(e){v(t.$$.fragment,e),v(i.$$.fragment,e),v(n.$$.fragment,e),v(u.$$.fragment,e),v($.$$.fragment,e),c=!1},d(e){x(t,e),e&&o(s),x(i,e),e&&o(a),x(n,e),e&&o(l),x(u,e),e&&o(d),x($,e)}}}function j(f){let t,s;return t=new H({props:{title:"Birdie",$$slots:{default:[W]},$$scope:{ctx:f}}}),{c(){_(t.$$.fragment)},l(i){b(t.$$.fragment,i)},m(i,a){h(t,i,a),s=!0},p(i,[a]){const n={};a&4&&(n.$$scope={dirty:a,ctx:i}),t.$set(n)},i(i){s||(z(t.$$.fragment,i),s=!0)},o(i){v(t.$$.fragment,i),s=!1},d(i){x(t,i)}}}function J(f){return[`<div></div>
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
