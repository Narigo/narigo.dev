import{s as b,a as C,c as w,i as u,d as c,l as p,f as x,m as d,g as y,A as z,y as k}from"../chunks/scheduler.52b7490a.js";import{S as P,i as D,b as m,d as $,m as g,a as _,t as h,e as v}from"../chunks/index.644eb738.js";import{N as O}from"../chunks/Narigo.e24b860c.js";import{P as B,a as E}from"../chunks/PuzzlePageLayout.389c71ed.js";function F(l){let e,a,n="::before",o,t,i="::after",r;return{c(){e=p("Ok, I initially thought that "),a=x("code"),a.textContent=n,o=p(" and "),t=x("code"),t.textContent=i,r=p(` could be used for nesting.
		But that's not really the case, so the rotation after rotating is not possible easily.`)},l(s){e=d(s,"Ok, I initially thought that "),a=y(s,"CODE",{"data-svelte-h":!0}),z(a)!=="svelte-xwyp9n"&&(a.textContent=n),o=d(s," and "),t=y(s,"CODE",{"data-svelte-h":!0}),z(t)!=="svelte-9arc54"&&(t.textContent=i),r=d(s,` could be used for nesting.
		But that's not really the case, so the rotation after rotating is not possible easily.`)},m(s,f){u(s,e,f),u(s,a,f),u(s,o,f),u(s,t,f),u(s,r,f)},p:k,d(s){s&&(c(e),c(a),c(o),c(t),c(r))}}}function I(l){let e,a,n,o;return e=new E({props:{title:"Puzzle 37 solution",solution:l[0]}}),n=new O({props:{$$slots:{default:[F]},$$scope:{ctx:l}}}),{c(){m(e.$$.fragment),a=C(),m(n.$$.fragment)},l(t){$(e.$$.fragment,t),a=w(t),$(n.$$.fragment,t)},m(t,i){g(e,t,i),u(t,a,i),g(n,t,i),o=!0},p(t,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:t}),n.$set(r)},i(t){o||(_(e.$$.fragment,t),_(n.$$.fragment,t),o=!0)},o(t){h(e.$$.fragment,t),h(n.$$.fragment,t),o=!1},d(t){t&&c(a),v(e,t),v(n,t)}}}function N(l){let e,a;return e=new B({props:{title:"Tunnel",$$slots:{default:[I]},$$scope:{ctx:l}}}),{c(){m(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,o){g(e,n,o),a=!0},p(n,[o]){const t={};o&2&&(t.$$scope={dirty:o,ctx:n}),e.$set(t)},i(n){a||(_(e.$$.fragment,n),a=!0)},o(n){h(e.$$.fragment,n),a=!1},d(n){v(e,n)}}}function S(l){return[`<div><div><div></div></div></div>
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
`]}class j extends P{constructor(e){super(),D(this,e,S,N,b,{})}}export{j as component};
