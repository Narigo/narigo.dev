import{s as C,a as _,c as w,i as u,d as c,l as z,f as P,m as x,g as S,A,y as I}from"../chunks/scheduler.52b7490a.js";import{S as E,i as W,b as $,d as f,m,a as p,t as g,e as v}from"../chunks/index.644eb738.js";import{N as k}from"../chunks/Narigo.e24b860c.js";import{P as N,a as F}from"../chunks/PuzzlePageLayout.389c71ed.js";function q(r){let e,i,n="attr()",a;return{c(){e=z("We figured out that using counters is not going to work here. Also using "),i=P("code"),i.textContent=n,a=z(` doesn't
		work to not have to redundantly tell CSS which child it is.`)},l(o){e=x(o,"We figured out that using counters is not going to work here. Also using "),i=S(o,"CODE",{"data-svelte-h":!0}),A(i)!=="svelte-184i3a0"&&(i.textContent=n),a=x(o,` doesn't
		work to not have to redundantly tell CSS which child it is.`)},m(o,l){u(o,e,l),u(o,i,l),u(o,a,l)},p:I,d(o){o&&(c(e),c(i),c(a))}}}function D(r){let e;return{c(){e=z("...but since I couldn't get it to work with counters, at least I could add an animation 😵‍💫")},l(i){e=x(i,"...but since I couldn't get it to work with counters, at least I could add an animation 😵‍💫")},m(i,n){u(i,e,n)},d(i){i&&c(e)}}}function L(r){let e,i,n,a,o,l,d,h;return e=new F({props:{title:"Puzzle 55 solution",solution:r[0]}}),n=new k({props:{$$slots:{default:[q]},$$scope:{ctx:r}}}),o=new F({props:{title:"Puzzle 55 solution",solution:r[1]}}),d=new k({props:{$$slots:{default:[D]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment),i=_(),$(n.$$.fragment),a=_(),$(o.$$.fragment),l=_(),$(d.$$.fragment)},l(t){f(e.$$.fragment,t),i=w(t),f(n.$$.fragment,t),a=w(t),f(o.$$.fragment,t),l=w(t),f(d.$$.fragment,t)},m(t,s){m(e,t,s),u(t,i,s),m(n,t,s),u(t,a,s),m(o,t,s),u(t,l,s),m(d,t,s),h=!0},p(t,s){const b={};s&4&&(b.$$scope={dirty:s,ctx:t}),n.$set(b);const y={};s&4&&(y.$$scope={dirty:s,ctx:t}),d.$set(y)},i(t){h||(p(e.$$.fragment,t),p(n.$$.fragment,t),p(o.$$.fragment,t),p(d.$$.fragment,t),h=!0)},o(t){g(e.$$.fragment,t),g(n.$$.fragment,t),g(o.$$.fragment,t),g(d.$$.fragment,t),h=!1},d(t){t&&(c(i),c(a),c(l)),v(e,t),v(n,t),v(o,t),v(d,t)}}}function O(r){let e,i;return e=new N({props:{title:"Windmill",$$slots:{default:[L]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},l(n){f(e.$$.fragment,n)},m(n,a){m(e,n,a),i=!0},p(n,[a]){const o={};a&4&&(o.$$scope={dirty:a,ctx:n}),e.$set(o)},i(n){i||(p(e.$$.fragment,n),i=!0)},o(n){g(e.$$.fragment,n),i=!1},d(n){v(e,n)}}}function j(r){return[`<div></div>
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
`]}class K extends E{constructor(e){super(),W(this,e,j,O,C,{})}}export{K as component};
