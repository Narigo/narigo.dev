import{S as _,i as b,s as x,y as m,z as d,A as c,g as f,d as h,B as $,a as z,c as w,b as l,h as i,q as p,k as F,r as u,l as k,m as v,n as y,G as I,H as P}from"../chunks/index.0bb61340.js";import{N as C}from"../chunks/Narigo.7389b9d0.js";import{P as q,a as G}from"../chunks/PuzzlePageLayout.37ff2b50.js";function A(s){let t,a,n,o;return{c(){t=p(`I missed Frontend Fridays this time, since it was a holiday here in Germany and I kept my phone
		muted for the whole day. Terribly sorry for not giving a heads-up, but there were a couple of
		people and `),a=F("a"),n=p("contributing solutions to Puzzle 42"),o=p(`. I'm happy I didn't look into them before coming up with my own, so it's actually quite
		different, this time using background size and repeat plus a pseudo element.`),this.h()},l(e){t=u(e,`I missed Frontend Fridays this time, since it was a holiday here in Germany and I kept my phone
		muted for the whole day. Terribly sorry for not giving a heads-up, but there were a couple of
		people and `),a=k(e,"A",{href:!0,rel:!0});var r=v(a);n=u(r,"contributing solutions to Puzzle 42"),r.forEach(i),o=u(e,`. I'm happy I didn't look into them before coming up with my own, so it's actually quite
		different, this time using background size and repeat plus a pseudo element.`),this.h()},h(){y(a,"href","https://github.com/orgs/Virtual-Coffee/discussions/846"),y(a,"rel","external")},m(e,r){l(e,t,r),l(e,a,r),I(a,n),l(e,o,r)},p:P,d(e){e&&i(t),e&&i(a),e&&i(o)}}}function B(s){let t,a,n,o;return t=new G({props:{title:"Puzzle 42 solution",solution:s[0]}}),n=new C({props:{$$slots:{default:[A]},$$scope:{ctx:s}}}),{c(){m(t.$$.fragment),a=z(),m(n.$$.fragment)},l(e){d(t.$$.fragment,e),a=w(e),d(n.$$.fragment,e)},m(e,r){c(t,e,r),l(e,a,r),c(n,e,r),o=!0},p(e,r){const g={};r&2&&(g.$$scope={dirty:r,ctx:e}),n.$set(g)},i(e){o||(f(t.$$.fragment,e),f(n.$$.fragment,e),o=!0)},o(e){h(t.$$.fragment,e),h(n.$$.fragment,e),o=!1},d(e){$(t,e),e&&i(a),$(n,e)}}}function E(s){let t,a;return t=new q({props:{title:"Baby",$$slots:{default:[B]},$$scope:{ctx:s}}}),{c(){m(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,o){c(t,n,o),a=!0},p(n,[o]){const e={};o&2&&(e.$$scope={dirty:o,ctx:n}),t.$set(e)},i(n){a||(f(t.$$.fragment,n),a=!0)},o(n){h(t.$$.fragment,n),a=!1},d(n){$(t,n)}}}function N(s){return[`<div></div>
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
</style>`]}class L extends _{constructor(t){super(),b(this,t,N,E,x,{})}}export{L as component};
