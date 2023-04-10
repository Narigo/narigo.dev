import{S as w,i as P,s as C,w as $,x as m,y as g,f as _,t as h,z as v,a as D,c as E,b as p,h as l,q as c,k as z,r as d,l as b,m as x,G as k,B as O}from"../../../../../chunks/index-ed5c000a.js";import"../../../../../chunks/Bubble-111f0336.js";import{N as B}from"../../../../../chunks/Narigo-406ea8d0.js";import{P as q,a as F}from"../../../../../chunks/PuzzlePageLayout-e3ab490f.js";function I(u){let e,s,a,n,t,i,f;return{c(){e=c("Ok, I initially thought that "),s=z("code"),a=c("::before"),n=c(" and "),t=z("code"),i=c("::after"),f=c(` could be used for nesting.
		But that's not really the case, so the rotation after rotating is not possible easily.`)},l(o){e=d(o,"Ok, I initially thought that "),s=b(o,"CODE",{});var r=x(s);a=d(r,"::before"),r.forEach(l),n=d(o," and "),t=b(o,"CODE",{});var y=x(t);i=d(y,"::after"),y.forEach(l),f=d(o,` could be used for nesting.
		But that's not really the case, so the rotation after rotating is not possible easily.`)},m(o,r){p(o,e,r),p(o,s,r),k(s,a),p(o,n,r),p(o,t,r),k(t,i),p(o,f,r)},p:O,d(o){o&&l(e),o&&l(s),o&&l(n),o&&l(t),o&&l(f)}}}function N(u){let e,s,a,n;return e=new F({props:{title:"Puzzle 37 solution",solution:u[0]}}),a=new B({props:{$$slots:{default:[I]},$$scope:{ctx:u}}}),{c(){$(e.$$.fragment),s=D(),$(a.$$.fragment)},l(t){m(e.$$.fragment,t),s=E(t),m(a.$$.fragment,t)},m(t,i){g(e,t,i),p(t,s,i),g(a,t,i),n=!0},p(t,i){const f={};i&2&&(f.$$scope={dirty:i,ctx:t}),a.$set(f)},i(t){n||(_(e.$$.fragment,t),_(a.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),h(a.$$.fragment,t),n=!1},d(t){v(e,t),t&&l(s),v(a,t)}}}function S(u){let e,s;return e=new q({props:{$$slots:{default:[N]},$$scope:{ctx:u}}}),{c(){$(e.$$.fragment)},l(a){m(e.$$.fragment,a)},m(a,n){g(e,a,n),s=!0},p(a,[n]){const t={};n&2&&(t.$$scope={dirty:n,ctx:a}),e.$set(t)},i(a){s||(_(e.$$.fragment,a),s=!0)},o(a){h(e.$$.fragment,a),s=!1},d(a){v(e,a)}}}function G(u){return[`<div><div><div></div></div></div>
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
`]}class J extends w{constructor(e){super(),P(this,e,G,S,C,{})}}export{J as default};
