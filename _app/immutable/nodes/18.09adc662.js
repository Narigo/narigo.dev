import{S as g,i as _,s as h,y as i,z as l,A as c,g as p,d as u,B as $,a as z,c as b,b as m,h as d,q as v,r as x}from"../chunks/index.b1660a48.js";import{N as y}from"../chunks/Narigo.1c5e5246.js";import{P as w,a as P}from"../chunks/PuzzlePageLayout.97ef4086.js";function k(a){let e;return{c(){e=v("Using pseudo elements here to check the stacking seemed to be a good way to solve this.")},l(s){e=x(s,"Using pseudo elements here to check the stacking seemed to be a good way to solve this.")},m(s,t){m(s,e,t)},d(s){s&&d(e)}}}function C(a){let e,s,t,n;return e=new P({props:{title:"Puzzle 34 solution",solution:a[0]}}),t=new y({props:{$$slots:{default:[k]},$$scope:{ctx:a}}}),{c(){i(e.$$.fragment),s=z(),i(t.$$.fragment)},l(o){l(e.$$.fragment,o),s=b(o),l(t.$$.fragment,o)},m(o,r){c(e,o,r),m(o,s,r),c(t,o,r),n=!0},p(o,r){const f={};r&2&&(f.$$scope={dirty:r,ctx:o}),t.$set(f)},i(o){n||(p(e.$$.fragment,o),p(t.$$.fragment,o),n=!0)},o(o){u(e.$$.fragment,o),u(t.$$.fragment,o),n=!1},d(o){$(e,o),o&&d(s),$(t,o)}}}function F(a){let e,s;return e=new w({props:{title:"Christmas Tree",$$slots:{default:[C]},$$scope:{ctx:a}}}),{c(){i(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,n){c(e,t,n),s=!0},p(t,[n]){const o={};n&2&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){u(e.$$.fragment,t),s=!1},d(t){$(e,t)}}}function q(a){return[`<div></div>
<style>
  body {
    background: #007065;
    --c: #00A79D;
  }
  div {
    inset: 25px 75px;
  }
  div::after {
    inset: -225px -125px;
    --c: #FFEECF;
  }
  div::before {
    inset: -175px -125px;
    --c: #F5C181;
  }
  div,div:after,div:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0;
    border: 125px solid transparent;
    border-bottom: 100px solid var(--c);
  }
</style>
`]}class S extends g{constructor(e){super(),_(this,e,q,F,h,{})}}export{S as component};
