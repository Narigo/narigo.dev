import{s as _,a as v,c as b,i as n,d as i,l as g,f as x,m as h,g as y,A as z,y as w}from"../chunks/scheduler.750b9d5e.js";import{S as k,i as C,b as c,d as u,m as p,a as m,t as f,e as d}from"../chunks/index.369e6c44.js";import{N as P}from"../chunks/Narigo.2253bd05.js";import{P as A,a as q}from"../chunks/PuzzlePageLayout.b66f79f7.js";function I(l){let e,o,a="border-radius",s;return{c(){e=g("I took a very straight-forward approach to this, having three divs and let them share most code. "),o=x("code"),o.textContent=a,s=g(" with multiple values allowed me to correctly shape the divs.")},l(t){e=h(t,"I took a very straight-forward approach to this, having three divs and let them share most code. "),o=y(t,"CODE",{"data-svelte-h":!0}),z(o)!=="svelte-1fkbqek"&&(o.textContent=a),s=h(t," with multiple values allowed me to correctly shape the divs.")},m(t,r){n(t,e,r),n(t,o,r),n(t,s,r)},p:w,d(t){t&&(i(e),i(o),i(s))}}}function L(l){let e,o,a,s;return e=new q({props:{title:"Puzzle 7 solution",solution:l[0]}}),a=new P({props:{$$slots:{default:[I]},$$scope:{ctx:l}}}),{c(){c(e.$$.fragment),o=v(),c(a.$$.fragment)},l(t){u(e.$$.fragment,t),o=b(t),u(a.$$.fragment,t)},m(t,r){p(e,t,r),n(t,o,r),p(a,t,r),s=!0},p(t,r){const $={};r&2&&($.$$scope={dirty:r,ctx:t}),a.$set($)},i(t){s||(m(e.$$.fragment,t),m(a.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),f(a.$$.fragment,t),s=!1},d(t){t&&i(o),d(e,t),d(a,t)}}}function N(l){let e,o;return e=new A({props:{title:"Leafy Trail",$$slots:{default:[L]},$$scope:{ctx:l}}}),{c(){c(e.$$.fragment)},l(a){u(e.$$.fragment,a)},m(a,s){p(e,a,s),o=!0},p(a,[s]){const t={};s&2&&(t.$$scope={dirty:s,ctx:a}),e.$set(t)},i(a){o||(m(e.$$.fragment,a),o=!0)},o(a){f(e.$$.fragment,a),o=!1},d(a){d(e,a)}}}function S(l){return[`<div class="a"></div>
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
`]}class O extends k{constructor(e){super(),C(this,e,S,N,_,{})}}export{O as component};
