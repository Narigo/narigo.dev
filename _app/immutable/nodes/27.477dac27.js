import{s as d,a as _,c as x,i as c,d as g,l as h,m as z}from"../chunks/scheduler.2310f8de.js";import{S as b,i as v,b as i,d as l,m as p,a as u,t as $,e as f}from"../chunks/index.b08acff1.js";import{N as w}from"../chunks/Narigo.9a23746e.js";import{P as y,a as P}from"../chunks/PuzzlePageLayout.f3f512ce.js";function S(o){let t;return{c(){t=h("Something with linear-gradients again!")},l(n){t=z(n,"Something with linear-gradients again!")},m(n,e){c(n,t,e)},d(n){n&&g(t)}}}function C(o){let t,n,e,r;return t=new P({props:{title:"Puzzle 40 solution",solution:o[0]}}),e=new w({props:{$$slots:{default:[S]},$$scope:{ctx:o}}}),{c(){i(t.$$.fragment),n=_(),i(e.$$.fragment)},l(a){l(t.$$.fragment,a),n=x(a),l(e.$$.fragment,a)},m(a,s){p(t,a,s),c(a,n,s),p(e,a,s),r=!0},p(a,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:a}),e.$set(m)},i(a){r||(u(t.$$.fragment,a),u(e.$$.fragment,a),r=!0)},o(a){$(t.$$.fragment,a),$(e.$$.fragment,a),r=!1},d(a){a&&g(n),f(t,a),f(e,a)}}}function D(o){let t,n;return t=new y({props:{title:"Letter B",$$slots:{default:[C]},$$scope:{ctx:o}}}),{c(){i(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,r){p(t,e,r),n=!0},p(e,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){f(t,e)}}}function k(o){return[`<div></div>
<style>
  body {
    background: #6592CF;
    display: grid;
    place-items: center;
  }
  div {
    width: 200px;
    height: 200px;
  }
  div::after,div::before {
    position: absolute;
    content: '';
    height: 100px;
    width: 100px;
  }
  div::before {
    border: 50px solid #243D83;
    border-radius: 0 100px 100px 100px;
  }
  div::after {
    background: linear-gradient(to right, #243D83 50px, #6592CF 0 100px, #243D83 50px);
  }
</style>
`]}class B extends b{constructor(t){super(),v(this,t,k,D,d,{})}}export{B as component};
