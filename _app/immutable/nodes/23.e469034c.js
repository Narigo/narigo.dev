import{s as h,a as x,c as F,i as $,d as u,l as v,f as k,m as b,g as E,A as N,y as A}from"../chunks/scheduler.52b7490a.js";import{S,i as O,b as p,d as f,m as g,a as c,t as d,e as _}from"../chunks/index.644eb738.js";import{N as C}from"../chunks/Narigo.e24b860c.js";import{P as q,a as P}from"../chunks/PuzzlePageLayout.389c71ed.js";function W(l){let t,a,n="transform",r;return{c(){t=v("Whenever doing a "),a=k("code"),a.textContent=n,r=v(", remember that the order matters...!")},l(s){t=b(s,"Whenever doing a "),a=E(s,"CODE",{"data-svelte-h":!0}),N(a)!=="svelte-ivmwea"&&(a.textContent=n),r=b(s,", remember that the order matters...!")},m(s,i){$(s,t,i),$(s,a,i),$(s,r,i)},p:A,d(s){s&&(u(t),u(a),u(r))}}}function D(l){let t;return{c(){t=v("Ok, one more solution with no elements set up.")},l(a){t=b(a,"Ok, one more solution with no elements set up.")},m(a,n){$(a,t,n)},d(a){a&&u(t)}}}function L(l){let t,a,n,r,s,i,m,z;return t=new P({props:{title:"Puzzle 38 solution",solution:l[0]}}),n=new C({props:{$$slots:{default:[W]},$$scope:{ctx:l}}}),s=new P({props:{title:"Puzzle 38 solution",solution:l[1]}}),m=new C({props:{$$slots:{default:[D]},$$scope:{ctx:l}}}),{c(){p(t.$$.fragment),a=x(),p(n.$$.fragment),r=x(),p(s.$$.fragment),i=x(),p(m.$$.fragment)},l(e){f(t.$$.fragment,e),a=F(e),f(n.$$.fragment,e),r=F(e),f(s.$$.fragment,e),i=F(e),f(m.$$.fragment,e)},m(e,o){g(t,e,o),$(e,a,o),g(n,e,o),$(e,r,o),g(s,e,o),$(e,i,o),g(m,e,o),z=!0},p(e,o){const w={};o&4&&(w.$$scope={dirty:o,ctx:e}),n.$set(w);const y={};o&4&&(y.$$scope={dirty:o,ctx:e}),m.$set(y)},i(e){z||(c(t.$$.fragment,e),c(n.$$.fragment,e),c(s.$$.fragment,e),c(m.$$.fragment,e),z=!0)},o(e){d(t.$$.fragment,e),d(n.$$.fragment,e),d(s.$$.fragment,e),d(m.$$.fragment,e),z=!1},d(e){e&&(u(a),u(r),u(i)),_(t,e),_(n,e),_(s,e),_(m,e)}}}function X(l){let t,a;return t=new q({props:{title:"Not Simply Square",$$slots:{default:[L]},$$scope:{ctx:l}}}),{c(){p(t.$$.fragment)},l(n){f(t.$$.fragment,n)},m(n,r){g(t,n,r),a=!0},p(n,[r]){const s={};r&4&&(s.$$scope={dirty:r,ctx:n}),t.$set(s)},i(n){a||(c(t.$$.fragment,n),a=!0)},o(n){d(t.$$.fragment,n),a=!1},d(n){_(t,n)}}}function j(l){return[`<div></div>
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
`]}class J extends S{constructor(t){super(),O(this,t,j,X,h,{})}}export{J as component};
