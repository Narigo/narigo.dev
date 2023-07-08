import{S as d,i as _,s as x,y as i,z as l,A as p,g as u,d as $,B as f,a as h,c as z,b as m,h as g,q as b,r as v}from"../chunks/index.b1660a48.js";import{N as y}from"../chunks/Narigo.1c5e5246.js";import{P as w,a as P}from"../chunks/PuzzlePageLayout.437a5001.js";function S(o){let t;return{c(){t=b("Something with linear-gradients again!")},l(n){t=v(n,"Something with linear-gradients again!")},m(n,e){m(n,t,e)},d(n){n&&g(t)}}}function C(o){let t,n,e,r;return t=new P({props:{title:"Puzzle 40 solution",solution:o[0]}}),e=new y({props:{$$slots:{default:[S]},$$scope:{ctx:o}}}),{c(){i(t.$$.fragment),n=h(),i(e.$$.fragment)},l(a){l(t.$$.fragment,a),n=z(a),l(e.$$.fragment,a)},m(a,s){p(t,a,s),m(a,n,s),p(e,a,s),r=!0},p(a,s){const c={};s&2&&(c.$$scope={dirty:s,ctx:a}),e.$set(c)},i(a){r||(u(t.$$.fragment,a),u(e.$$.fragment,a),r=!0)},o(a){$(t.$$.fragment,a),$(e.$$.fragment,a),r=!1},d(a){f(t,a),a&&g(n),f(e,a)}}}function D(o){let t,n;return t=new w({props:{title:"Letter B",$$slots:{default:[C]},$$scope:{ctx:o}}}),{c(){i(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,r){p(t,e,r),n=!0},p(e,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){f(t,e)}}}function k(o){return[`<div></div>
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
`]}class L extends d{constructor(t){super(),_(this,t,k,D,x,{})}}export{L as component};
