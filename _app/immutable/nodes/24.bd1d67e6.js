import{s as C,a as x,c as w,i as m,d as u,l as F,m as b}from"../chunks/scheduler.58de62d3.js";import{S as h,i as E,b as f,d as p,m as c,a as g,t as d,e as _}from"../chunks/index.698fb7dd.js";import{C as N}from"../chunks/Code.f01f5db6.js";import{N as P}from"../chunks/Narigo.08d9f4ea.js";import{P as S,a as k}from"../chunks/PuzzlePageLayout.b81087b6.js";function A(s){let e;return{c(){e=F("transform")},l(n){e=b(n,"transform")},m(n,r){m(n,e,r)},d(n){n&&u(e)}}}function q(s){let e,n,r,o;return n=new N({props:{$$slots:{default:[A]},$$scope:{ctx:s}}}),{c(){e=F("Whenever doing a "),f(n.$$.fragment),r=F(", remember that the order matters...!")},l(a){e=b(a,"Whenever doing a "),p(n.$$.fragment,a),r=b(a,", remember that the order matters...!")},m(a,l){m(a,e,l),c(n,a,l),m(a,r,l),o=!0},p(a,l){const i={};l&4&&(i.$$scope={dirty:l,ctx:a}),n.$set(i)},i(a){o||(g(n.$$.fragment,a),o=!0)},o(a){d(n.$$.fragment,a),o=!1},d(a){a&&(u(e),u(r)),_(n,a)}}}function O(s){let e;return{c(){e=F("Ok, one more solution with no elements set up.")},l(n){e=b(n,"Ok, one more solution with no elements set up.")},m(n,r){m(n,e,r)},d(n){n&&u(e)}}}function W(s){let e,n,r,o,a,l,i,z;return e=new k({props:{title:"Puzzle 38 solution",solution:s[0]}}),r=new P({props:{$$slots:{default:[q]},$$scope:{ctx:s}}}),a=new k({props:{title:"Puzzle 38 solution",solution:s[1]}}),i=new P({props:{$$slots:{default:[O]},$$scope:{ctx:s}}}),{c(){f(e.$$.fragment),n=x(),f(r.$$.fragment),o=x(),f(a.$$.fragment),l=x(),f(i.$$.fragment)},l(t){p(e.$$.fragment,t),n=w(t),p(r.$$.fragment,t),o=w(t),p(a.$$.fragment,t),l=w(t),p(i.$$.fragment,t)},m(t,$){c(e,t,$),m(t,n,$),c(r,t,$),m(t,o,$),c(a,t,$),m(t,l,$),c(i,t,$),z=!0},p(t,$){const v={};$&4&&(v.$$scope={dirty:$,ctx:t}),r.$set(v);const y={};$&4&&(y.$$scope={dirty:$,ctx:t}),i.$set(y)},i(t){z||(g(e.$$.fragment,t),g(r.$$.fragment,t),g(a.$$.fragment,t),g(i.$$.fragment,t),z=!0)},o(t){d(e.$$.fragment,t),d(r.$$.fragment,t),d(a.$$.fragment,t),d(i.$$.fragment,t),z=!1},d(t){t&&(u(n),u(o),u(l)),_(e,t),_(r,t),_(a,t),_(i,t)}}}function L(s){let e,n;return e=new S({props:{title:"Not Simply Square",$$slots:{default:[W]},$$scope:{ctx:s}}}),{c(){f(e.$$.fragment)},l(r){p(e.$$.fragment,r)},m(r,o){c(e,r,o),n=!0},p(r,[o]){const a={};o&4&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(g(e.$$.fragment,r),n=!0)},o(r){d(e.$$.fragment,r),n=!1},d(r){_(e,r)}}}function X(s){return[`<div></div>
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
`]}class I extends h{constructor(e){super(),E(this,e,X,L,C,{})}}export{I as component};
