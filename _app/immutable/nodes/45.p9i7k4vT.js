import{s as P,a as z,c as b,i as $,d,l as _,m as w}from"../chunks/scheduler.Po0zCuFf.js";import{S,i as C,b as c,d as f,m,a as p,t as g,e as v}from"../chunks/index.WEWm72Kh.js";import{C as A}from"../chunks/Code.GrnAcMCy.js";import{N as y}from"../chunks/Narigo.D6yA7VHj.js";import{P as I,a as F}from"../chunks/PuzzlePageLayout.HNVszHb_.js";function W(s){let t;return{c(){t=_("attr()")},l(n){t=w(n,"attr()")},m(n,i){$(n,t,i)},d(n){n&&d(t)}}}function E(s){let t,n,i,r;return n=new A({props:{$$slots:{default:[W]},$$scope:{ctx:s}}}),{c(){t=_("We figured out that using counters is not going to work here. Also using "),c(n.$$.fragment),i=_(` doesn't
		work to not have to redundantly tell CSS which child it is.`)},l(o){t=w(o,"We figured out that using counters is not going to work here. Also using "),f(n.$$.fragment,o),i=w(o,` doesn't
		work to not have to redundantly tell CSS which child it is.`)},m(o,l){$(o,t,l),m(n,o,l),$(o,i,l),r=!0},p(o,l){const u={};l&4&&(u.$$scope={dirty:l,ctx:o}),n.$set(u)},i(o){r||(p(n.$$.fragment,o),r=!0)},o(o){g(n.$$.fragment,o),r=!1},d(o){o&&(d(t),d(i)),v(n,o)}}}function N(s){let t;return{c(){t=_("...but since I couldn't get it to work with counters, at least I could add an animation 😵‍💫")},l(n){t=w(n,"...but since I couldn't get it to work with counters, at least I could add an animation 😵‍💫")},m(n,i){$(n,t,i)},d(n){n&&d(t)}}}function q(s){let t,n,i,r,o,l,u,h;return t=new F({props:{title:"Puzzle 55 solution",solution:s[0]}}),i=new y({props:{$$slots:{default:[E]},$$scope:{ctx:s}}}),o=new F({props:{title:"Puzzle 55 solution",solution:s[1]}}),u=new y({props:{$$slots:{default:[N]},$$scope:{ctx:s}}}),{c(){c(t.$$.fragment),n=z(),c(i.$$.fragment),r=z(),c(o.$$.fragment),l=z(),c(u.$$.fragment)},l(e){f(t.$$.fragment,e),n=b(e),f(i.$$.fragment,e),r=b(e),f(o.$$.fragment,e),l=b(e),f(u.$$.fragment,e)},m(e,a){m(t,e,a),$(e,n,a),m(i,e,a),$(e,r,a),m(o,e,a),$(e,l,a),m(u,e,a),h=!0},p(e,a){const x={};a&4&&(x.$$scope={dirty:a,ctx:e}),i.$set(x);const k={};a&4&&(k.$$scope={dirty:a,ctx:e}),u.$set(k)},i(e){h||(p(t.$$.fragment,e),p(i.$$.fragment,e),p(o.$$.fragment,e),p(u.$$.fragment,e),h=!0)},o(e){g(t.$$.fragment,e),g(i.$$.fragment,e),g(o.$$.fragment,e),g(u.$$.fragment,e),h=!1},d(e){e&&(d(n),d(r),d(l)),v(t,e),v(i,e),v(o,e),v(u,e)}}}function L(s){let t,n;return t=new I({props:{title:"Windmill",$$slots:{default:[q]},$$scope:{ctx:s}}}),{c(){c(t.$$.fragment)},l(i){f(t.$$.fragment,i)},m(i,r){m(t,i,r),n=!0},p(i,[r]){const o={};r&4&&(o.$$scope={dirty:r,ctx:i}),t.$set(o)},i(i){n||(p(t.$$.fragment,i),n=!0)},o(i){g(t.$$.fragment,i),n=!1},d(i){v(t,i)}}}function j(s){return[`<div></div>
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
`]}class K extends S{constructor(t){super(),C(this,t,j,L,P,{})}}export{K as component};
