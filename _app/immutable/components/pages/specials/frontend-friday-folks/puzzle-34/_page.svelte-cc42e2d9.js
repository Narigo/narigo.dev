import{S as g,i as _,s as h,w as i,x as l,y as c,f as u,t as p,z as f,a as x,c as z,b as m,h as d,q as b,r as v}from"../../../../../chunks/index-ed5c000a.js";import{N as y}from"../../../../../chunks/Narigo-406ea8d0.js";import{P as w,a as P}from"../../../../../chunks/PuzzlePageLayout-93dc3336.js";function k(n){let e;return{c(){e=b("Using pseudo elements here to check the stacking seemed to be a good way to solve this.")},l(o){e=v(o,"Using pseudo elements here to check the stacking seemed to be a good way to solve this.")},m(o,t){m(o,e,t)},d(o){o&&d(e)}}}function C(n){let e,o,t,a;return e=new P({props:{title:"Puzzle 34 solution",solution:n[0]}}),t=new y({props:{$$slots:{default:[k]},$$scope:{ctx:n}}}),{c(){i(e.$$.fragment),o=x(),i(t.$$.fragment)},l(s){l(e.$$.fragment,s),o=z(s),l(t.$$.fragment,s)},m(s,r){c(e,s,r),m(s,o,r),c(t,s,r),a=!0},p(s,r){const $={};r&2&&($.$$scope={dirty:r,ctx:s}),t.$set($)},i(s){a||(u(e.$$.fragment,s),u(t.$$.fragment,s),a=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),a=!1},d(s){f(e,s),s&&d(o),f(t,s)}}}function F(n){let e,o;return e=new w({props:{title:"Christmas Tree",$$slots:{default:[C]},$$scope:{ctx:n}}}),{c(){i(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,a){c(e,t,a),o=!0},p(t,[a]){const s={};a&2&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){p(e.$$.fragment,t),o=!1},d(t){f(e,t)}}}function q(n){return[`<div></div>
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
`]}class U extends g{constructor(e){super(),_(this,e,q,F,h,{})}}export{U as default};
