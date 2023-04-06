import{S as P,i as h,s as C,w as f,x as p,y as c,f as g,t as d,z as _,a as b,c as v,b as u,h as m,q as F,k as N,r as x,l as A,m as O,G as q,B as S}from"../../../../../chunks/index-1eaa4f41.js";import{N as k}from"../../../../../chunks/Narigo-79588e20.js";import{P as W,a as E}from"../../../../../chunks/PuzzlePageLayout-6f385dbc.js";function B(i){let t,r,n,s;return{c(){t=F("Whenever doing a "),r=N("code"),n=F("transform"),s=F(", remember that the order matters...!")},l(a){t=x(a,"Whenever doing a "),r=A(a,"CODE",{});var l=O(r);n=x(l,"transform"),l.forEach(m),s=x(a,", remember that the order matters...!")},m(a,l){u(a,t,l),u(a,r,l),q(r,n),u(a,s,l)},p:S,d(a){a&&m(t),a&&m(r),a&&m(s)}}}function D(i){let t;return{c(){t=F("Ok, one more solution with no elements set up.")},l(r){t=x(r,"Ok, one more solution with no elements set up.")},m(r,n){u(r,t,n)},d(r){r&&m(t)}}}function G(i){let t,r,n,s,a,l,$,z;return t=new E({props:{title:"Puzzle 38 solution",solution:i[0]}}),n=new k({props:{$$slots:{default:[B]},$$scope:{ctx:i}}}),a=new E({props:{title:"Puzzle 38 solution",solution:i[1]}}),$=new k({props:{$$slots:{default:[D]},$$scope:{ctx:i}}}),{c(){f(t.$$.fragment),r=b(),f(n.$$.fragment),s=b(),f(a.$$.fragment),l=b(),f($.$$.fragment)},l(e){p(t.$$.fragment,e),r=v(e),p(n.$$.fragment,e),s=v(e),p(a.$$.fragment,e),l=v(e),p($.$$.fragment,e)},m(e,o){c(t,e,o),u(e,r,o),c(n,e,o),u(e,s,o),c(a,e,o),u(e,l,o),c($,e,o),z=!0},p(e,o){const w={};o&4&&(w.$$scope={dirty:o,ctx:e}),n.$set(w);const y={};o&4&&(y.$$scope={dirty:o,ctx:e}),$.$set(y)},i(e){z||(g(t.$$.fragment,e),g(n.$$.fragment,e),g(a.$$.fragment,e),g($.$$.fragment,e),z=!0)},o(e){d(t.$$.fragment,e),d(n.$$.fragment,e),d(a.$$.fragment,e),d($.$$.fragment,e),z=!1},d(e){_(t,e),e&&m(r),_(n,e),e&&m(s),_(a,e),e&&m(l),_($,e)}}}function L(i){let t,r;return t=new W({props:{$$slots:{default:[G]},$$scope:{ctx:i}}}),{c(){f(t.$$.fragment)},l(n){p(t.$$.fragment,n)},m(n,s){c(t,n,s),r=!0},p(n,[s]){const a={};s&4&&(a.$$scope={dirty:s,ctx:n}),t.$set(a)},i(n){r||(g(t.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),r=!1},d(n){_(t,n)}}}function X(i){return[`<div></div>
<div class="b"></div>
<style>
  body {
    background: #293462;
    margin: 0;
  }
  div {
    position: absolute;
    width: 300px;
    height: 200px;
    background:
      linear-gradient(90deg, #FFF1C1 200px, transparent 0),
      linear-gradient(#FE5F55 150px, #A64942 0)
    ;
  }
  .b {
    transform: translate(-50px, 50px) scaleX(-1) rotate(90deg);
  }
</style>`,`<style>
  body {
    background:
      linear-gradient(#FFF1C1, #FFF1C1) no-repeat,
      linear-gradient(90deg, #FE5F55 150px, #A64942 0 50%, transparent 0 300px, #293462 0),
      linear-gradient(#FE5F55 150px, #A64942 0 200px, transparent 0),
      #293462
    ;
    background-size: 50% 50vw, 100%, 100%;
  }
</style>
`]}class J extends P{constructor(t){super(),h(this,t,X,L,C,{})}}export{J as default};
