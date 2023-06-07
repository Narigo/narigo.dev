import{S as G,i as H,s as O,y as _,z as b,A as h,g as z,d as v,B as x,a as C,c as k,b as p,h as o,q as m,r as g,k as S,l as A,m as B,G as I,H as T,n as P}from"../chunks/index.0bb61340.js";import{B as q}from"../chunks/Bubble.0a9e1c86.js";import{N as D}from"../chunks/Narigo.7389b9d0.js";import{P as F,a as N}from"../chunks/PuzzlePageLayout.37ff2b50.js";function M(f){let t;return{c(){t=m(`This is the first puzzle where I used multiple backgrounds with gradients. It's not optimized
		yet, but the idea is clear.`)},l(s){t=g(s,`This is the first puzzle where I used multiple backgrounds with gradients. It's not optimized
		yet, but the idea is clear.`)},m(s,n){p(s,t,n)},d(s){s&&o(t)}}}function U(f){let t,s,n,a,i,l,u,d,$,c;return{c(){t=m("Here is an improved version by leveraging the fact that "),s=S("code"),n=m("inset"),a=m(` is already telling
		CSS how big the box is. `),i=S("code"),l=m("width"),u=m(` and
		`),d=S("code"),$=m("height"),c=m(` settings are therefore not necessary. The second improvement is how the gradients
		are applied: Instead of using four different, it can do it in three, using multiple color stops.`)},l(e){t=g(e,"Here is an improved version by leveraging the fact that "),s=A(e,"CODE",{});var r=B(s);n=g(r,"inset"),r.forEach(o),a=g(e,` is already telling
		CSS how big the box is. `),i=A(e,"CODE",{});var w=B(i);l=g(w,"width"),w.forEach(o),u=g(e,` and
		`),d=A(e,"CODE",{});var y=B(d);$=g(y,"height"),y.forEach(o),c=g(e,` settings are therefore not necessary. The second improvement is how the gradients
		are applied: Instead of using four different, it can do it in three, using multiple color stops.`)},m(e,r){p(e,t,r),p(e,s,r),I(s,n),p(e,a,r),p(e,i,r),I(i,l),p(e,u,r),p(e,d,r),I(d,$),p(e,c,r)},p:T,d(e){e&&o(t),e&&o(s),e&&o(a),e&&o(i),e&&o(u),e&&o(d),e&&o(c)}}}function L(f){let t,s,n,a;return{c(){t=m("MDN has a great "),s=S("a"),n=m("explanation for using multiple backgrounds"),a=m("."),this.h()},l(i){t=g(i,"MDN has a great "),s=A(i,"A",{href:!0,rel:!0});var l=B(s);n=g(l,"explanation for using multiple backgrounds"),l.forEach(o),a=g(i,"."),this.h()},h(){P(s,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"),P(s,"rel","external")},m(i,l){p(i,t,l),p(i,s,l),I(s,n),p(i,a,l)},p:T,d(i){i&&o(t),i&&o(s),i&&o(a)}}}function W(f){let t,s,n,a,i,l,u,d,$,c;return t=new N({props:{title:"Puzzle 33 solution",solution:f[0]}}),n=new D({props:{$$slots:{default:[M]},$$scope:{ctx:f}}}),i=new N({props:{title:"Puzzle 33 solution",solution:f[1]}}),u=new D({props:{$$slots:{default:[U]},$$scope:{ctx:f}}}),$=new q({props:{side:"right",$$slots:{default:[L]},$$scope:{ctx:f}}}),{c(){_(t.$$.fragment),s=C(),_(n.$$.fragment),a=C(),_(i.$$.fragment),l=C(),_(u.$$.fragment),d=C(),_($.$$.fragment)},l(e){b(t.$$.fragment,e),s=k(e),b(n.$$.fragment,e),a=k(e),b(i.$$.fragment,e),l=k(e),b(u.$$.fragment,e),d=k(e),b($.$$.fragment,e)},m(e,r){h(t,e,r),p(e,s,r),h(n,e,r),p(e,a,r),h(i,e,r),p(e,l,r),h(u,e,r),p(e,d,r),h($,e,r),c=!0},p(e,r){const w={};r&4&&(w.$$scope={dirty:r,ctx:e}),n.$set(w);const y={};r&4&&(y.$$scope={dirty:r,ctx:e}),u.$set(y);const E={};r&4&&(E.$$scope={dirty:r,ctx:e}),$.$set(E)},i(e){c||(z(t.$$.fragment,e),z(n.$$.fragment,e),z(i.$$.fragment,e),z(u.$$.fragment,e),z($.$$.fragment,e),c=!0)},o(e){v(t.$$.fragment,e),v(n.$$.fragment,e),v(i.$$.fragment,e),v(u.$$.fragment,e),v($.$$.fragment,e),c=!1},d(e){x(t,e),e&&o(s),x(n,e),e&&o(a),x(i,e),e&&o(l),x(u,e),e&&o(d),x($,e)}}}function j(f){let t,s;return t=new F({props:{title:"Birdie",$$slots:{default:[W]},$$scope:{ctx:f}}}),{c(){_(t.$$.fragment)},l(n){b(t.$$.fragment,n)},m(n,a){h(t,n,a),s=!0},p(n,[a]){const i={};a&4&&(i.$$scope={dirty:a,ctx:n}),t.$set(i)},i(n){s||(z(t.$$.fragment,n),s=!0)},o(n){v(t.$$.fragment,n),s=!1},d(n){x(t,n)}}}function J(f){return[`<div></div>
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
  }`]}class X extends G{constructor(t){super(),H(this,t,J,j,O,{})}}export{X as component};
