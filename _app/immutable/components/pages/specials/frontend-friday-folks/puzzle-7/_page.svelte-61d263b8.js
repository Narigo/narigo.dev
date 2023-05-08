import{S as _,i as v,s as b,w as p,x as f,y as d,f as m,t as $,z as g,a as y,c as z,b as i,h as n,q as c,k as x,r as u,l as w,m as k,G as P,B as C}from"../../../../../chunks/index-ed5c000a.js";import{N as q}from"../../../../../chunks/Narigo-406ea8d0.js";import{P as A,a as B}from"../../../../../chunks/PuzzlePageLayout-93dc3336.js";function E(l){let t,s,a,o;return{c(){t=c("I took a very straight-forward approach to this, having three divs and let them share most code. "),s=x("code"),a=c("border-radius"),o=c(" with multiple values allowed me to correctly shape the divs.")},l(e){t=u(e,"I took a very straight-forward approach to this, having three divs and let them share most code. "),s=w(e,"CODE",{});var r=k(s);a=u(r,"border-radius"),r.forEach(n),o=u(e," with multiple values allowed me to correctly shape the divs.")},m(e,r){i(e,t,r),i(e,s,r),P(s,a),i(e,o,r)},p:C,d(e){e&&n(t),e&&n(s),e&&n(o)}}}function I(l){let t,s,a,o;return t=new B({props:{title:"Puzzle 7 solution",solution:l[0]}}),a=new q({props:{$$slots:{default:[E]},$$scope:{ctx:l}}}),{c(){p(t.$$.fragment),s=y(),p(a.$$.fragment)},l(e){f(t.$$.fragment,e),s=z(e),f(a.$$.fragment,e)},m(e,r){d(t,e,r),i(e,s,r),d(a,e,r),o=!0},p(e,r){const h={};r&2&&(h.$$scope={dirty:r,ctx:e}),a.$set(h)},i(e){o||(m(t.$$.fragment,e),m(a.$$.fragment,e),o=!0)},o(e){$(t.$$.fragment,e),$(a.$$.fragment,e),o=!1},d(e){g(t,e),e&&n(s),g(a,e)}}}function L(l){let t,s;return t=new A({props:{title:"Leafy Trail",$$slots:{default:[I]},$$scope:{ctx:l}}}),{c(){p(t.$$.fragment)},l(a){f(t.$$.fragment,a)},m(a,o){d(t,a,o),s=!0},p(a,[o]){const e={};o&2&&(e.$$scope={dirty:o,ctx:a}),t.$set(e)},i(a){s||(m(t.$$.fragment,a),s=!0)},o(a){$(t.$$.fragment,a),s=!1},d(a){g(t,a)}}}function N(l){return[`<div class="a"></div>
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
`]}class G extends _{constructor(t){super(),v(this,t,N,L,b,{})}}export{G as default};
