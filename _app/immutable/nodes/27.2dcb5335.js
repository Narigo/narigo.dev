import{s as y,a as z,c as C,i as p,d as c,l as f,f as w,m,g as v,A as b,y as F}from"../chunks/scheduler.52b7490a.js";import{S as k,i as E,b as d,d as h,m as g,a as $,t as x,e as _}from"../chunks/index.644eb738.js";import{N as I}from"../chunks/Narigo.e24b860c.js";import{P,a as O}from"../chunks/PuzzlePageLayout.389c71ed.js";function S(i){let e,n,a="border-radius",o,t,r="transform: scaleX(-1)",l;return{c(){e=f("The solution with gradients does not feel so great and it seems to be much easier using "),n=w("code"),n.textContent=a,o=f(`
		for what we have here. Still, it is possible to achieve the result with gradients and I'm happy I
		could make it - even if it take a lot longer than expected. One cool thing here is to mirror the
		face of the fox by using
		`),t=w("code"),t.textContent=r,l=f(`. I wonder whether it's possible to the whole face with
		gradients though! 🤔`)},l(s){e=m(s,"The solution with gradients does not feel so great and it seems to be much easier using "),n=v(s,"CODE",{"data-svelte-h":!0}),b(n)!=="svelte-1fkbqek"&&(n.textContent=a),o=m(s,`
		for what we have here. Still, it is possible to achieve the result with gradients and I'm happy I
		could make it - even if it take a lot longer than expected. One cool thing here is to mirror the
		face of the fox by using
		`),t=v(s,"CODE",{"data-svelte-h":!0}),b(t)!=="svelte-r1eea1"&&(t.textContent=r),l=m(s,`. I wonder whether it's possible to the whole face with
		gradients though! 🤔`)},m(s,u){p(s,e,u),p(s,n,u),p(s,o,u),p(s,t,u),p(s,l,u)},p:F,d(s){s&&(c(e),c(n),c(o),c(t),c(l))}}}function q(i){let e,n,a,o;return e=new O({props:{title:"Puzzle 41 solution",solution:i[0]}}),a=new I({props:{$$slots:{default:[S]},$$scope:{ctx:i}}}),{c(){d(e.$$.fragment),n=z(),d(a.$$.fragment)},l(t){h(e.$$.fragment,t),n=C(t),h(a.$$.fragment,t)},m(t,r){g(e,t,r),p(t,n,r),g(a,t,r),o=!0},p(t,r){const l={};r&2&&(l.$$scope={dirty:r,ctx:t}),a.$set(l)},i(t){o||($(e.$$.fragment,t),$(a.$$.fragment,t),o=!0)},o(t){x(e.$$.fragment,t),x(a.$$.fragment,t),o=!1},d(t){t&&c(n),_(e,t),_(a,t)}}}function D(i){let e,n;return e=new P({props:{title:"Fox Head",$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){d(e.$$.fragment)},l(a){h(e.$$.fragment,a)},m(a,o){g(e,a,o),n=!0},p(a,[o]){const t={};o&2&&(t.$$scope={dirty:o,ctx:a}),e.$set(t)},i(a){n||($(e.$$.fragment,a),n=!0)},o(a){x(e.$$.fragment,a),n=!1},d(a){_(e,a)}}}function N(i){return[`<div></div>
<div class="r"></div>
<style>
  body {
    background: #293462;
    display: flex;
    place-items: center;
    justify-content: center;
    margin: 0;
  }
  .r {
    transform: scaleX(-1);
  }
  div {
    background: 
      radial-gradient(circle at 0px 40px, #FE5F55 40px, #293462 0) 10px 0 / 50px 40px no-repeat,
      radial-gradient(circle at 30px 75px, #293462 15px, transparent 15px),
      radial-gradient(circle at 0px 140px, #293462 40px, #FE5F55 0) 10px 0 / 50px 140px no-repeat,
      linear-gradient(transparent 40px, #FE5F55 0 100px, #293462 0),
      linear-gradient(to right,#FE5F55 0 10px, transparent 0)
    ;
    height: 140px;
    width: 50px;
  }
</style>
`]}class H extends k{constructor(e){super(),E(this,e,N,D,y,{})}}export{H as component};
