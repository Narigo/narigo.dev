import{s as x,b as _,j as b,k as i,i as l,t as $,e as z,h as g,d as w,p as F,r as y,n as k}from"../chunks/scheduler.Bz19wuGf.js";import{S as v,i as C,c as p,b as u,m,t as d,a as c,d as f}from"../chunks/index.D0WKZCG1.js";import{N as I}from"../chunks/Narigo.KOWV6Nbp.js";import{P,a as q}from"../chunks/PuzzlePageLayout.D4vM-8YV.js";function G(s){let e,a,n="contributing solutions to Puzzle 42",o;return{c(){e=$(`I missed Frontend Fridays this time, since it was a holiday here in Germany and I kept my phone
		muted for the whole day. Terribly sorry for not giving a heads-up, but there were a couple of
		people and `),a=z("a"),a.textContent=n,o=$(`. I'm happy I didn't look into them before coming up with my own, so it's actually quite
		different, this time using background size and repeat plus a pseudo element.`),this.h()},l(t){e=g(t,`I missed Frontend Fridays this time, since it was a holiday here in Germany and I kept my phone
		muted for the whole day. Terribly sorry for not giving a heads-up, but there were a couple of
		people and `),a=w(t,"A",{href:!0,rel:!0,"data-svelte-h":!0}),F(a)!=="svelte-otcskc"&&(a.textContent=n),o=g(t,`. I'm happy I didn't look into them before coming up with my own, so it's actually quite
		different, this time using background size and repeat plus a pseudo element.`),this.h()},h(){y(a,"href","https://github.com/orgs/Virtual-Coffee/discussions/846"),y(a,"rel","external")},m(t,r){i(t,e,r),i(t,a,r),i(t,o,r)},p:k,d(t){t&&(l(e),l(a),l(o))}}}function N(s){let e,a,n,o;return e=new q({props:{title:"Puzzle 42 solution",solution:s[0]}}),n=new I({props:{$$slots:{default:[G]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),a=_(),p(n.$$.fragment)},l(t){u(e.$$.fragment,t),a=b(t),u(n.$$.fragment,t)},m(t,r){m(e,t,r),i(t,a,r),m(n,t,r),o=!0},p(t,r){const h={};r&2&&(h.$$scope={dirty:r,ctx:t}),n.$set(h)},i(t){o||(d(e.$$.fragment,t),d(n.$$.fragment,t),o=!0)},o(t){c(e.$$.fragment,t),c(n.$$.fragment,t),o=!1},d(t){t&&l(a),f(e,t),f(n,t)}}}function S(s){let e,a;return e=new P({props:{title:"Baby",$$slots:{default:[N]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(n){u(e.$$.fragment,n)},m(n,o){m(e,n,o),a=!0},p(n,[o]){const t={};o&2&&(t.$$scope={dirty:o,ctx:n}),e.$set(t)},i(n){a||(d(e.$$.fragment,n),a=!0)},o(n){c(e.$$.fragment,n),a=!1},d(n){f(e,n)}}}function T(s){return[`<div></div>
<style>
body {
  background: #293462;
  display: grid;
  place-items: center;
}  
  div {
    background:
      radial-gradient(circle, #FFF1C1 50px, transparent 50px) 0px -200px / 50% 200%,
      radial-gradient(circle, #FFF1C1 30px, transparent 25px) 0px -80px / 50% 200%,
      #FE5F55
    ;
    border-radius: 50% 50% 50px 50px;
    width: 200px;
    height: 200px;
  }
  div::after {
    background: #FFF1C1;
    content: '';
    border-radius: 10px;
    position: absolute;
    left: 45%;
    bottom: 70px;
    height: 10px;
    width: 40px;
  }
</style>`]}class L extends v{constructor(e){super(),C(this,e,T,S,x,{})}}export{L as component};
