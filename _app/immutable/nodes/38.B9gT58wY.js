import{s as b,b as v,j as z,k as c,i as f,t as u,e as y,h as m,d as k,p as F}from"../chunks/scheduler.Ct-hQNXS.js";import{S as C,i as I,c as $,b as d,m as g,t as h,a as x,d as _}from"../chunks/index.DAUMTxUj.js";import{C as P}from"../chunks/Code.x-nWcPNg.js";import{N as E}from"../chunks/Narigo.BkWV0FXI.js";import{P as S,a as O}from"../chunks/PuzzlePageLayout.CYBvy01F.js";function X(i){let t;return{c(){t=u("transform: scaleX(-1)")},l(n){t=m(n,"transform: scaleX(-1)")},m(n,a){c(n,t,a)},d(n){n&&f(t)}}}function j(i){let t,n,a="border-radius",s,e,o,p;return e=new P({props:{$$slots:{default:[X]},$$scope:{ctx:i}}}),{c(){t=u("The solution with gradients does not feel so great and it seems to be much easier using "),n=y("code"),n.textContent=a,s=u(`
		for what we have here. Still, it is possible to achieve the result with gradients and I'm happy I
		could make it - even if it take a lot longer than expected. One cool thing here is to mirror the
		face of the fox by using
		`),$(e.$$.fragment),o=u(`. I wonder whether it's possible to the whole face with
		gradients though! 🤔`)},l(r){t=m(r,"The solution with gradients does not feel so great and it seems to be much easier using "),n=k(r,"CODE",{"data-svelte-h":!0}),F(n)!=="svelte-1fkbqek"&&(n.textContent=a),s=m(r,`
		for what we have here. Still, it is possible to achieve the result with gradients and I'm happy I
		could make it - even if it take a lot longer than expected. One cool thing here is to mirror the
		face of the fox by using
		`),d(e.$$.fragment,r),o=m(r,`. I wonder whether it's possible to the whole face with
		gradients though! 🤔`)},m(r,l){c(r,t,l),c(r,n,l),c(r,s,l),g(e,r,l),c(r,o,l),p=!0},p(r,l){const w={};l&2&&(w.$$scope={dirty:l,ctx:r}),e.$set(w)},i(r){p||(h(e.$$.fragment,r),p=!0)},o(r){x(e.$$.fragment,r),p=!1},d(r){r&&(f(t),f(n),f(s),f(o)),_(e,r)}}}function q(i){let t,n,a,s;return t=new O({props:{title:"Puzzle 41 solution",solution:i[0]}}),a=new E({props:{$$slots:{default:[j]},$$scope:{ctx:i}}}),{c(){$(t.$$.fragment),n=v(),$(a.$$.fragment)},l(e){d(t.$$.fragment,e),n=z(e),d(a.$$.fragment,e)},m(e,o){g(t,e,o),c(e,n,o),g(a,e,o),s=!0},p(e,o){const p={};o&2&&(p.$$scope={dirty:o,ctx:e}),a.$set(p)},i(e){s||(h(t.$$.fragment,e),h(a.$$.fragment,e),s=!0)},o(e){x(t.$$.fragment,e),x(a.$$.fragment,e),s=!1},d(e){e&&f(n),_(t,e),_(a,e)}}}function N(i){let t,n;return t=new S({props:{title:"Fox Head",$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){$(t.$$.fragment)},l(a){d(t.$$.fragment,a)},m(a,s){g(t,a,s),n=!0},p(a,[s]){const e={};s&2&&(e.$$scope={dirty:s,ctx:a}),t.$set(e)},i(a){n||(h(t.$$.fragment,a),n=!0)},o(a){x(t.$$.fragment,a),n=!1},d(a){_(t,a)}}}function T(i){return[`<div></div>
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
`]}class G extends C{constructor(t){super(),I(this,t,T,N,b,{})}}export{G as component};
