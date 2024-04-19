import{s as h,b as x,j as w,k as m,i as u,t as F,h as b}from"../chunks/scheduler.Ct-hQNXS.js";import{S as C,i as E,c as f,b as p,m as c,t as g,a as d,d as _}from"../chunks/index.DAUMTxUj.js";import{C as N}from"../chunks/Code.x-nWcPNg.js";import{N as y}from"../chunks/Narigo.DCh2BCzZ.js";import{P as S,a as P}from"../chunks/PuzzlePageLayout.DzOxJxqk.js";function A(s){let e;return{c(){e=F("transform")},l(n){e=b(n,"transform")},m(n,r){m(n,e,r)},d(n){n&&u(e)}}}function q(s){let e,n,r,a;return n=new N({props:{$$slots:{default:[A]},$$scope:{ctx:s}}}),{c(){e=F("Whenever doing a "),f(n.$$.fragment),r=F(", remember that the order matters...!")},l(o){e=b(o,"Whenever doing a "),p(n.$$.fragment,o),r=b(o,", remember that the order matters...!")},m(o,l){m(o,e,l),c(n,o,l),m(o,r,l),a=!0},p(o,l){const i={};l&4&&(i.$$scope={dirty:l,ctx:o}),n.$set(i)},i(o){a||(g(n.$$.fragment,o),a=!0)},o(o){d(n.$$.fragment,o),a=!1},d(o){o&&(u(e),u(r)),_(n,o)}}}function O(s){let e;return{c(){e=F("Ok, one more solution with no elements set up.")},l(n){e=b(n,"Ok, one more solution with no elements set up.")},m(n,r){m(n,e,r)},d(n){n&&u(e)}}}function W(s){let e,n,r,a,o,l,i,z;return e=new P({props:{title:"Puzzle 38 solution",solution:s[0]}}),r=new y({props:{$$slots:{default:[q]},$$scope:{ctx:s}}}),o=new P({props:{title:"Puzzle 38 solution",solution:s[1]}}),i=new y({props:{$$slots:{default:[O]},$$scope:{ctx:s}}}),{c(){f(e.$$.fragment),n=x(),f(r.$$.fragment),a=x(),f(o.$$.fragment),l=x(),f(i.$$.fragment)},l(t){p(e.$$.fragment,t),n=w(t),p(r.$$.fragment,t),a=w(t),p(o.$$.fragment,t),l=w(t),p(i.$$.fragment,t)},m(t,$){c(e,t,$),m(t,n,$),c(r,t,$),m(t,a,$),c(o,t,$),m(t,l,$),c(i,t,$),z=!0},p(t,$){const v={};$&4&&(v.$$scope={dirty:$,ctx:t}),r.$set(v);const k={};$&4&&(k.$$scope={dirty:$,ctx:t}),i.$set(k)},i(t){z||(g(e.$$.fragment,t),g(r.$$.fragment,t),g(o.$$.fragment,t),g(i.$$.fragment,t),z=!0)},o(t){d(e.$$.fragment,t),d(r.$$.fragment,t),d(o.$$.fragment,t),d(i.$$.fragment,t),z=!1},d(t){t&&(u(n),u(a),u(l)),_(e,t),_(r,t),_(o,t),_(i,t)}}}function j(s){let e,n;return e=new S({props:{title:"Not Simply Square",$$slots:{default:[W]},$$scope:{ctx:s}}}),{c(){f(e.$$.fragment)},l(r){p(e.$$.fragment,r)},m(r,a){c(e,r,a),n=!0},p(r,[a]){const o={};a&4&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(g(e.$$.fragment,r),n=!0)},o(r){d(e.$$.fragment,r),n=!1},d(r){_(e,r)}}}function L(s){return[`<div></div>
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
`]}class I extends C{constructor(e){super(),E(this,e,L,j,h,{})}}export{I as component};
