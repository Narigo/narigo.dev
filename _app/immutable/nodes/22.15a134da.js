import{S as P,i as h,s as C,y as u,z as f,A as c,g,d,B as _,a as x,c as v,b as p,h as m,q as F,k as N,r as b,l as A,m as S,G as q,H as O}from"../chunks/index.0bb61340.js";import{N as k}from"../chunks/Narigo.7389b9d0.js";import{P as W,a as E}from"../chunks/PuzzlePageLayout.8fbea99b.js";function B(i){let t,r,n,s;return{c(){t=F("Whenever doing a "),r=N("code"),n=F("transform"),s=F(", remember that the order matters...!")},l(a){t=b(a,"Whenever doing a "),r=A(a,"CODE",{});var l=S(r);n=b(l,"transform"),l.forEach(m),s=b(a,", remember that the order matters...!")},m(a,l){p(a,t,l),p(a,r,l),q(r,n),p(a,s,l)},p:O,d(a){a&&m(t),a&&m(r),a&&m(s)}}}function D(i){let t;return{c(){t=F("Ok, one more solution with no elements set up.")},l(r){t=b(r,"Ok, one more solution with no elements set up.")},m(r,n){p(r,t,n)},d(r){r&&m(t)}}}function G(i){let t,r,n,s,a,l,$,z;return t=new E({props:{title:"Puzzle 38 solution",solution:i[0]}}),n=new k({props:{$$slots:{default:[B]},$$scope:{ctx:i}}}),a=new E({props:{title:"Puzzle 38 solution",solution:i[1]}}),$=new k({props:{$$slots:{default:[D]},$$scope:{ctx:i}}}),{c(){u(t.$$.fragment),r=x(),u(n.$$.fragment),s=x(),u(a.$$.fragment),l=x(),u($.$$.fragment)},l(e){f(t.$$.fragment,e),r=v(e),f(n.$$.fragment,e),s=v(e),f(a.$$.fragment,e),l=v(e),f($.$$.fragment,e)},m(e,o){c(t,e,o),p(e,r,o),c(n,e,o),p(e,s,o),c(a,e,o),p(e,l,o),c($,e,o),z=!0},p(e,o){const y={};o&4&&(y.$$scope={dirty:o,ctx:e}),n.$set(y);const w={};o&4&&(w.$$scope={dirty:o,ctx:e}),$.$set(w)},i(e){z||(g(t.$$.fragment,e),g(n.$$.fragment,e),g(a.$$.fragment,e),g($.$$.fragment,e),z=!0)},o(e){d(t.$$.fragment,e),d(n.$$.fragment,e),d(a.$$.fragment,e),d($.$$.fragment,e),z=!1},d(e){_(t,e),e&&m(r),_(n,e),e&&m(s),_(a,e),e&&m(l),_($,e)}}}function H(i){let t,r;return t=new W({props:{title:"Not Simply Square",$$slots:{default:[G]},$$scope:{ctx:i}}}),{c(){u(t.$$.fragment)},l(n){f(t.$$.fragment,n)},m(n,s){c(t,n,s),r=!0},p(n,[s]){const a={};s&4&&(a.$$scope={dirty:s,ctx:n}),t.$set(a)},i(n){r||(g(t.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),r=!1},d(n){_(t,n)}}}function L(i){return[`<div></div>
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
`]}class J extends P{constructor(t){super(),h(this,t,L,H,C,{})}}export{J as component};