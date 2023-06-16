import{S as P,i as S,s as A,y as $,z as f,A as m,g as p,d as g,B as v,a as z,c as y,b as c,h as d,q as _,k as C,r as w,l as E,m as I,G as W,H as q}from"../chunks/index.3d7f15fc.js";import{N as x}from"../chunks/Narigo.f2af5427.js";import{P as N,a as F}from"../chunks/PuzzlePageLayout.5cca13de.js";function B(l){let e,n,i,a;return{c(){e=_("We figured out that using counters is not going to work here. Also using "),n=C("code"),i=_("attr()"),a=_(` doesn't
		work to not have to redundantly tell CSS which child it is.`)},l(o){e=w(o,"We figured out that using counters is not going to work here. Also using "),n=E(o,"CODE",{});var r=I(n);i=w(r,"attr()"),r.forEach(d),a=w(o,` doesn't
		work to not have to redundantly tell CSS which child it is.`)},m(o,r){c(o,e,r),c(o,n,r),W(n,i),c(o,a,r)},p:q,d(o){o&&d(e),o&&d(n),o&&d(a)}}}function D(l){let e;return{c(){e=_("...but since I couldn't get it to work with counters, at least I could add an animation 😵‍💫")},l(n){e=w(n,"...but since I couldn't get it to work with counters, at least I could add an animation 😵‍💫")},m(n,i){c(n,e,i)},d(n){n&&d(e)}}}function G(l){let e,n,i,a,o,r,u,h;return e=new F({props:{title:"Puzzle 54 solution",solution:l[0]}}),i=new x({props:{$$slots:{default:[B]},$$scope:{ctx:l}}}),o=new F({props:{title:"Puzzle 54 solution",solution:l[1]}}),u=new x({props:{$$slots:{default:[D]},$$scope:{ctx:l}}}),{c(){$(e.$$.fragment),n=z(),$(i.$$.fragment),a=z(),$(o.$$.fragment),r=z(),$(u.$$.fragment)},l(t){f(e.$$.fragment,t),n=y(t),f(i.$$.fragment,t),a=y(t),f(o.$$.fragment,t),r=y(t),f(u.$$.fragment,t)},m(t,s){m(e,t,s),c(t,n,s),m(i,t,s),c(t,a,s),m(o,t,s),c(t,r,s),m(u,t,s),h=!0},p(t,s){const b={};s&4&&(b.$$scope={dirty:s,ctx:t}),i.$set(b);const k={};s&4&&(k.$$scope={dirty:s,ctx:t}),u.$set(k)},i(t){h||(p(e.$$.fragment,t),p(i.$$.fragment,t),p(o.$$.fragment,t),p(u.$$.fragment,t),h=!0)},o(t){g(e.$$.fragment,t),g(i.$$.fragment,t),g(o.$$.fragment,t),g(u.$$.fragment,t),h=!1},d(t){v(e,t),t&&d(n),v(i,t),t&&d(a),v(o,t),t&&d(r),v(u,t)}}}function H(l){let e,n;return e=new N({props:{title:"Windmill",$$slots:{default:[G]},$$scope:{ctx:l}}}),{c(){$(e.$$.fragment)},l(i){f(e.$$.fragment,i)},m(i,a){m(e,i,a),n=!0},p(i,[a]){const o={};a&4&&(o.$$scope={dirty:a,ctx:i}),e.$set(o)},i(i){n||(p(e.$$.fragment,i),n=!0)},o(i){g(e.$$.fragment,i),n=!1},d(i){v(e,i)}}}function L(l){return[`<div></div>
<div></div>
<div></div>
<div></div>
<style>
  * {
    background: var(--c,#191919);
  }
  div {
    --c: #F9E492;
    position: absolute;
    border-radius: 0 0 50px 50px;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 50px;
    rotate: calc(var(--r) * 90deg);
    transform-origin: 0 0;
  }
  div:nth-child(1) {
    --r: 1;
  }
  div:nth-child(2) {
    --r: 2;
  }
  div:nth-child(3) {
    --r: 3;
  }
  div:nth-child(odd) {
    --c: #4F77FF;
  }
</style>`,`<div></div>
<div></div>
<div></div>
<div></div>
<style>
  * {
    background: var(--c,#191919);
  }
  body {
    animation: wind 3s infinite ease-in-out;
  }
  div {
    --c: #F9E492;
    position: absolute;
    border-radius: 0 0 50px 50px;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 50px;
    rotate: calc(var(--r) * 90deg);
    transform-origin: 0 0;
  }
  div:nth-child(1) {
    --r: 1;
  }
  div:nth-child(2) {
    --r: 2;
  }
  div:nth-child(3) {
    --r: 3;
  }
  div:nth-child(odd) {
    --c: #4F77FF;
  }
  @keyframes wind {
    0% { rotate: calc(0deg) }
    100% { rotate: calc(360deg) }
  }
</style>
`]}class K extends P{constructor(e){super(),S(this,e,L,H,A,{})}}export{K as component};
