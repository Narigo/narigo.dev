import{s as x,a as _,c as b,i,d as l,l as g,f as z,m as h,g as w,A as F,j as y,y as k}from"../chunks/scheduler.2899a8c8.js";import{S as v,i as C,b as p,d as u,m,a as d,t as c,e as f}from"../chunks/index.bbb9ebb1.js";import{N as I}from"../chunks/Narigo.6d414d16.js";import{P,a as q}from"../chunks/PuzzlePageLayout.50a99cbb.js";function A(r){let t,a,n="contributing solutions to Puzzle 42",o;return{c(){t=g(`I missed Frontend Fridays this time, since it was a holiday here in Germany and I kept my phone
		muted for the whole day. Terribly sorry for not giving a heads-up, but there were a couple of
		people and `),a=z("a"),a.textContent=n,o=g(`. I'm happy I didn't look into them before coming up with my own, so it's actually quite
		different, this time using background size and repeat plus a pseudo element.`),this.h()},l(e){t=h(e,`I missed Frontend Fridays this time, since it was a holiday here in Germany and I kept my phone
		muted for the whole day. Terribly sorry for not giving a heads-up, but there were a couple of
		people and `),a=w(e,"A",{href:!0,rel:!0,"data-svelte-h":!0}),F(a)!=="svelte-otcskc"&&(a.textContent=n),o=h(e,`. I'm happy I didn't look into them before coming up with my own, so it's actually quite
		different, this time using background size and repeat plus a pseudo element.`),this.h()},h(){y(a,"href","https://github.com/orgs/Virtual-Coffee/discussions/846"),y(a,"rel","external")},m(e,s){i(e,t,s),i(e,a,s),i(e,o,s)},p:k,d(e){e&&(l(t),l(a),l(o))}}}function G(r){let t,a,n,o;return t=new q({props:{title:"Puzzle 42 solution",solution:r[0]}}),n=new I({props:{$$slots:{default:[A]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment),a=_(),p(n.$$.fragment)},l(e){u(t.$$.fragment,e),a=b(e),u(n.$$.fragment,e)},m(e,s){m(t,e,s),i(e,a,s),m(n,e,s),o=!0},p(e,s){const $={};s&2&&($.$$scope={dirty:s,ctx:e}),n.$set($)},i(e){o||(d(t.$$.fragment,e),d(n.$$.fragment,e),o=!0)},o(e){c(t.$$.fragment,e),c(n.$$.fragment,e),o=!1},d(e){e&&l(a),f(t,e),f(n,e)}}}function N(r){let t,a;return t=new P({props:{title:"Baby",$$slots:{default:[G]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(n){u(t.$$.fragment,n)},m(n,o){m(t,n,o),a=!0},p(n,[o]){const e={};o&2&&(e.$$scope={dirty:o,ctx:n}),t.$set(e)},i(n){a||(d(t.$$.fragment,n),a=!0)},o(n){c(t.$$.fragment,n),a=!1},d(n){f(t,n)}}}function S(r){return[`<div></div>
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
</style>`]}class L extends v{constructor(t){super(),C(this,t,S,N,x,{})}}export{L as component};
