import{s as k,a as I,c as P,i as l,d as i,l as m,f as x,m as $,g,A as _,y as D}from"../chunks/scheduler.Po0zCuFf.js";import{S as E,i as O,b as v,d as b,m as z,a as C,t as y,e as h}from"../chunks/index.WEWm72Kh.js";import{N as A}from"../chunks/Narigo.WPUeKXWO.js";import{P as B,a as N}from"../chunks/PuzzlePageLayout.q5lcHSNq.js";function S(u){let e,a,n="body::before",s,t,r="z-index",f,p,w="div::before",d;return{c(){e=m("That was fast and fun to work on. I learned that I can use "),a=x("code"),a.textContent=n,s=m(` to get rid
		of an extra `),t=x("code"),t.textContent=r,f=m(" if I'd used a "),p=x("code"),p.textContent=w,d=m("...!")},l(o){e=$(o,"That was fast and fun to work on. I learned that I can use "),a=g(o,"CODE",{"data-svelte-h":!0}),_(a)!=="svelte-1gxec6v"&&(a.textContent=n),s=$(o,` to get rid
		of an extra `),t=g(o,"CODE",{"data-svelte-h":!0}),_(t)!=="svelte-7ak22v"&&(t.textContent=r),f=$(o," if I'd used a "),p=g(o,"CODE",{"data-svelte-h":!0}),_(p)!=="svelte-8c3hkm"&&(p.textContent=w),d=$(o,"...!")},m(o,c){l(o,e,c),l(o,a,c),l(o,s,c),l(o,t,c),l(o,f,c),l(o,p,c),l(o,d,c)},p:D,d(o){o&&(i(e),i(a),i(s),i(t),i(f),i(p),i(d))}}}function T(u){let e,a,n,s;return e=new N({props:{title:"Puzzle 68 solution",solution:u[0]}}),n=new A({props:{$$slots:{default:[S]},$$scope:{ctx:u}}}),{c(){v(e.$$.fragment),a=I(),v(n.$$.fragment)},l(t){b(e.$$.fragment,t),a=P(t),b(n.$$.fragment,t)},m(t,r){z(e,t,r),l(t,a,r),z(n,t,r),s=!0},p(t,r){const f={};r&2&&(f.$$scope={dirty:r,ctx:t}),n.$set(f)},i(t){s||(C(e.$$.fragment,t),C(n.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),y(n.$$.fragment,t),s=!1},d(t){t&&i(a),h(e,t),h(n,t)}}}function q(u){let e,a;return e=new B({props:{title:"Bell",$$slots:{default:[T]},$$scope:{ctx:u}}}),{c(){v(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,s){z(e,n,s),a=!0},p(n,[s]){const t={};s&2&&(t.$$scope={dirty:s,ctx:n}),e.$set(t)},i(n){a||(C(e.$$.fragment,n),a=!0)},o(n){y(e.$$.fragment,n),a=!1},d(n){h(e,n)}}}function F(u){return[`<div></div>
<style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  div {
    position:relative;
    width: 120px;
    height: 120px;
    background: #E08027;
    border-radius: 50% 50% 10px 10px;
  }
  body::before {
    content:'';
    position:absolute;
    height:170px;
    width:50px;
    background: linear-gradient(#F2AD43 50%, #824B20 0);
    border-radius: 50px;
    top: 65px;
    left: 175px;
  }
</style>`]}class J extends E{constructor(e){super(),O(this,e,F,q,k,{})}}export{J as component};
