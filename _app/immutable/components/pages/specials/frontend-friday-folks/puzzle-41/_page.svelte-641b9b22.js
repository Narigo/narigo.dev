import{S as F,i as E,s as k,w as m,x as h,y as $,f as g,t as x,z as _,a as I,c as P,b as f,h as l,q as u,k as b,r as d,l as v,m as y,G as z,B as O}from"../../../../../chunks/index-ed5c000a.js";import{N as S}from"../../../../../chunks/Narigo-406ea8d0.js";import{P as C,a as X}from"../../../../../chunks/PuzzlePageLayout-93dc3336.js";function q(p){let t,r,a,o,e,s,c;return{c(){t=u("The solution with gradients does not feel so great and it seems to be much easier using "),r=b("code"),a=u("border-radius"),o=u(`
		for what we have here. Still, it is possible to achieve the result with gradients and I'm happy I
		could make it - even if it take a lot longer than expected. One cool thing here is to mirror the
		face of the fox by using
		`),e=b("code"),s=u("transform: scaleX(-1)"),c=u(`. I wonder whether it's possible to the whole face with
		gradients though! 🤔`)},l(n){t=d(n,"The solution with gradients does not feel so great and it seems to be much easier using "),r=v(n,"CODE",{});var i=y(r);a=d(i,"border-radius"),i.forEach(l),o=d(n,`
		for what we have here. Still, it is possible to achieve the result with gradients and I'm happy I
		could make it - even if it take a lot longer than expected. One cool thing here is to mirror the
		face of the fox by using
		`),e=v(n,"CODE",{});var w=y(e);s=d(w,"transform: scaleX(-1)"),w.forEach(l),c=d(n,`. I wonder whether it's possible to the whole face with
		gradients though! 🤔`)},m(n,i){f(n,t,i),f(n,r,i),z(r,a),f(n,o,i),f(n,e,i),z(e,s),f(n,c,i)},p:O,d(n){n&&l(t),n&&l(r),n&&l(o),n&&l(e),n&&l(c)}}}function D(p){let t,r,a,o;return t=new X({props:{title:"Puzzle 41 solution",solution:p[0]}}),a=new S({props:{$$slots:{default:[q]},$$scope:{ctx:p}}}),{c(){m(t.$$.fragment),r=I(),m(a.$$.fragment)},l(e){h(t.$$.fragment,e),r=P(e),h(a.$$.fragment,e)},m(e,s){$(t,e,s),f(e,r,s),$(a,e,s),o=!0},p(e,s){const c={};s&2&&(c.$$scope={dirty:s,ctx:e}),a.$set(c)},i(e){o||(g(t.$$.fragment,e),g(a.$$.fragment,e),o=!0)},o(e){x(t.$$.fragment,e),x(a.$$.fragment,e),o=!1},d(e){_(t,e),e&&l(r),_(a,e)}}}function N(p){let t,r;return t=new C({props:{title:"Fox Head",$$slots:{default:[D]},$$scope:{ctx:p}}}),{c(){m(t.$$.fragment)},l(a){h(t.$$.fragment,a)},m(a,o){$(t,a,o),r=!0},p(a,[o]){const e={};o&2&&(e.$$scope={dirty:o,ctx:a}),t.$set(e)},i(a){r||(g(t.$$.fragment,a),r=!0)},o(a){x(t.$$.fragment,a),r=!1},d(a){_(t,a)}}}function T(p){return[`<div></div>
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
`]}class H extends F{constructor(t){super(),E(this,t,T,N,k,{})}}export{H as default};
