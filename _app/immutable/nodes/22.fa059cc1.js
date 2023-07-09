import{S as w,i as P,s as C,y as $,z as m,A as g,g as _,d as h,B as v,a as D,c as E,b as c,h as l,q as p,k as z,r as d,l as b,m as x,G as k,H as O}from"../chunks/index.b1660a48.js";import{N as B}from"../chunks/Narigo.1c5e5246.js";import{P as q,a as F}from"../chunks/PuzzlePageLayout.fbe6c2ec.js";function I(u){let e,n,a,s,t,i,f;return{c(){e=p("Ok, I initially thought that "),n=z("code"),a=p("::before"),s=p(" and "),t=z("code"),i=p("::after"),f=p(` could be used for nesting.
		But that's not really the case, so the rotation after rotating is not possible easily.`)},l(o){e=d(o,"Ok, I initially thought that "),n=b(o,"CODE",{});var r=x(n);a=d(r,"::before"),r.forEach(l),s=d(o," and "),t=b(o,"CODE",{});var y=x(t);i=d(y,"::after"),y.forEach(l),f=d(o,` could be used for nesting.
		But that's not really the case, so the rotation after rotating is not possible easily.`)},m(o,r){c(o,e,r),c(o,n,r),k(n,a),c(o,s,r),c(o,t,r),k(t,i),c(o,f,r)},p:O,d(o){o&&l(e),o&&l(n),o&&l(s),o&&l(t),o&&l(f)}}}function N(u){let e,n,a,s;return e=new F({props:{title:"Puzzle 37 solution",solution:u[0]}}),a=new B({props:{$$slots:{default:[I]},$$scope:{ctx:u}}}),{c(){$(e.$$.fragment),n=D(),$(a.$$.fragment)},l(t){m(e.$$.fragment,t),n=E(t),m(a.$$.fragment,t)},m(t,i){g(e,t,i),c(t,n,i),g(a,t,i),s=!0},p(t,i){const f={};i&2&&(f.$$scope={dirty:i,ctx:t}),a.$set(f)},i(t){s||(_(e.$$.fragment,t),_(a.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),h(a.$$.fragment,t),s=!1},d(t){v(e,t),t&&l(n),v(a,t)}}}function S(u){let e,n;return e=new q({props:{title:"Tunnel",$$slots:{default:[N]},$$scope:{ctx:u}}}),{c(){$(e.$$.fragment)},l(a){m(e.$$.fragment,a)},m(a,s){g(e,a,s),n=!0},p(a,[s]){const t={};s&2&&(t.$$scope={dirty:s,ctx:a}),e.$set(t)},i(a){n||(_(e.$$.fragment,a),n=!0)},o(a){h(e.$$.fragment,a),n=!1},d(a){v(e,a)}}}function A(u){return[`<div><div><div></div></div></div>
<style>
  body,div {
    background: #6592CF;
    display: grid;
    place-items: center;
    rotate: -15deg;
  }
  div {
    background: #243D83;
    height: 250px;
    width: 250px;
    rotate: 15deg;
  }
  div > div {
    background: #6592CF;
    height: 150px;
    width: 150px;
  }
  div > div > div {
    background: #243D83;
    height: 75px;
    width: 75px;
  }
</style>
`]}class T extends w{constructor(e){super(),P(this,e,A,S,C,{})}}export{T as component};
