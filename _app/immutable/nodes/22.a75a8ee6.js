import{s as g,a as _,c as h,i as f,d,l as b,m as v}from"../chunks/scheduler.8784edd5.js";import{S as x,i as z,b as i,d as l,m as c,a as p,t as m,e as u}from"../chunks/index.32600fc5.js";import{N as y}from"../chunks/Narigo.46b84240.js";import{P as w,a as P}from"../chunks/PuzzlePageLayout.df6f0bec.js";function k(a){let e;return{c(){e=b("Using pseudo elements here to check the stacking seemed to be a good way to solve this.")},l(s){e=v(s,"Using pseudo elements here to check the stacking seemed to be a good way to solve this.")},m(s,t){f(s,e,t)},d(s){s&&d(e)}}}function C(a){let e,s,t,n;return e=new P({props:{title:"Puzzle 34 solution",solution:a[0]}}),t=new y({props:{$$slots:{default:[k]},$$scope:{ctx:a}}}),{c(){i(e.$$.fragment),s=_(),i(t.$$.fragment)},l(o){l(e.$$.fragment,o),s=h(o),l(t.$$.fragment,o)},m(o,r){c(e,o,r),f(o,s,r),c(t,o,r),n=!0},p(o,r){const $={};r&2&&($.$$scope={dirty:r,ctx:o}),t.$set($)},i(o){n||(p(e.$$.fragment,o),p(t.$$.fragment,o),n=!0)},o(o){m(e.$$.fragment,o),m(t.$$.fragment,o),n=!1},d(o){o&&d(s),u(e,o),u(t,o)}}}function F(a){let e,s;return e=new w({props:{title:"Christmas Tree",$$slots:{default:[C]},$$scope:{ctx:a}}}),{c(){i(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,n){c(e,t,n),s=!0},p(t,[n]){const o={};n&2&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){u(e,t)}}}function E(a){return[`<div></div>
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
`]}class A extends x{constructor(e){super(),z(this,e,E,F,g,{})}}export{A as component};
