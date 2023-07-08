import{S as _,i as v,s as b,y as u,z as d,A as f,g as m,d as $,B as g,a as y,c as z,b as i,h as n,q as c,k as x,r as p,l as w,m as k,G as P,H as C}from"../chunks/index.b1660a48.js";import{N as A}from"../chunks/Narigo.1c5e5246.js";import{P as q,a as B}from"../chunks/PuzzlePageLayout.437a5001.js";function E(l){let t,o,a,s;return{c(){t=c("I took a very straight-forward approach to this, having three divs and let them share most code. "),o=x("code"),a=c("border-radius"),s=c(" with multiple values allowed me to correctly shape the divs.")},l(e){t=p(e,"I took a very straight-forward approach to this, having three divs and let them share most code. "),o=w(e,"CODE",{});var r=k(o);a=p(r,"border-radius"),r.forEach(n),s=p(e," with multiple values allowed me to correctly shape the divs.")},m(e,r){i(e,t,r),i(e,o,r),P(o,a),i(e,s,r)},p:C,d(e){e&&n(t),e&&n(o),e&&n(s)}}}function I(l){let t,o,a,s;return t=new B({props:{title:"Puzzle 7 solution",solution:l[0]}}),a=new A({props:{$$slots:{default:[E]},$$scope:{ctx:l}}}),{c(){u(t.$$.fragment),o=y(),u(a.$$.fragment)},l(e){d(t.$$.fragment,e),o=z(e),d(a.$$.fragment,e)},m(e,r){f(t,e,r),i(e,o,r),f(a,e,r),s=!0},p(e,r){const h={};r&2&&(h.$$scope={dirty:r,ctx:e}),a.$set(h)},i(e){s||(m(t.$$.fragment,e),m(a.$$.fragment,e),s=!0)},o(e){$(t.$$.fragment,e),$(a.$$.fragment,e),s=!1},d(e){g(t,e),e&&n(o),g(a,e)}}}function L(l){let t,o;return t=new q({props:{title:"Leafy Trail",$$slots:{default:[I]},$$scope:{ctx:l}}}),{c(){u(t.$$.fragment)},l(a){d(t.$$.fragment,a)},m(a,s){f(t,a,s),o=!0},p(a,[s]){const e={};s&2&&(e.$$scope={dirty:s,ctx:a}),t.$set(e)},i(a){o||(m(t.$$.fragment,a),o=!0)},o(a){$(t.$$.fragment,a),o=!1},d(a){g(t,a)}}}function N(l){return[`<div class="a"></div>
<div class="b"></div>
<div class="c"></div>
<style>
  body {background:#0B2429}
  .a {background:#1A4341;left: calc(50% - 125px);}
  .b {background:#998235;left: calc(50% - 75px);}
  .c {background:#F3AC3C;left: calc(50% - 25px);}
  div {
    position: absolute;
    border-radius: calc(200% / 3) 0 calc(200% / 3) 0;
    top: calc(50% - 75px);
    left: calc(50% - 75px);
    height: 150px;
    width: 150px;
    background: #dd6b4d;
  }
</style>
`]}class G extends _{constructor(t){super(),v(this,t,N,L,b,{})}}export{G as component};
