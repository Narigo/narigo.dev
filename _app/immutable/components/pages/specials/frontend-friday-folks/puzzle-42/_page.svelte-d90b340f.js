import{S as x,i as _,s as b,w as m,x as d,y as f,f as c,t as h,z as $,a as z,c as w,b as l,h as i,q as p,k as F,r as u,l as k,m as v,n as y,G as I,B as P}from"../../../../../chunks/index-ed5c000a.js";import{N as C}from"../../../../../chunks/Narigo-406ea8d0.js";import{P as q,a as G}from"../../../../../chunks/PuzzlePageLayout-93dc3336.js";function B(s){let t,n,a,o;return{c(){t=p(`I missed Frontend Fridays this time, since it was a holiday here in Germany and I kept my phone
		muted for the whole day. Terribly sorry for not giving a heads-up, but there were a couple of
		people and `),n=F("a"),a=p("contributing solutions to Puzzle 42"),o=p(`. I'm happy I didn't look into them before coming up with my own, so it's actually quite
		different, this time using background size and repeat plus a pseudo element.`),this.h()},l(e){t=u(e,`I missed Frontend Fridays this time, since it was a holiday here in Germany and I kept my phone
		muted for the whole day. Terribly sorry for not giving a heads-up, but there were a couple of
		people and `),n=k(e,"A",{href:!0,rel:!0});var r=v(n);a=u(r,"contributing solutions to Puzzle 42"),r.forEach(i),o=u(e,`. I'm happy I didn't look into them before coming up with my own, so it's actually quite
		different, this time using background size and repeat plus a pseudo element.`),this.h()},h(){y(n,"href","https://github.com/orgs/Virtual-Coffee/discussions/846"),y(n,"rel","external")},m(e,r){l(e,t,r),l(e,n,r),I(n,a),l(e,o,r)},p:P,d(e){e&&i(t),e&&i(n),e&&i(o)}}}function E(s){let t,n,a,o;return t=new G({props:{title:"Puzzle 42 solution",solution:s[0]}}),a=new C({props:{$$slots:{default:[B]},$$scope:{ctx:s}}}),{c(){m(t.$$.fragment),n=z(),m(a.$$.fragment)},l(e){d(t.$$.fragment,e),n=w(e),d(a.$$.fragment,e)},m(e,r){f(t,e,r),l(e,n,r),f(a,e,r),o=!0},p(e,r){const g={};r&2&&(g.$$scope={dirty:r,ctx:e}),a.$set(g)},i(e){o||(c(t.$$.fragment,e),c(a.$$.fragment,e),o=!0)},o(e){h(t.$$.fragment,e),h(a.$$.fragment,e),o=!1},d(e){$(t,e),e&&i(n),$(a,e)}}}function N(s){let t,n;return t=new q({props:{title:"Baby",$$slots:{default:[E]},$$scope:{ctx:s}}}),{c(){m(t.$$.fragment)},l(a){d(t.$$.fragment,a)},m(a,o){f(t,a,o),n=!0},p(a,[o]){const e={};o&2&&(e.$$scope={dirty:o,ctx:a}),t.$set(e)},i(a){n||(c(t.$$.fragment,a),n=!0)},o(a){h(t.$$.fragment,a),n=!1},d(a){$(t,a)}}}function S(s){return[`<div></div>
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
</style>`]}class V extends x{constructor(t){super(),_(this,t,S,N,b,{})}}export{V as default};
