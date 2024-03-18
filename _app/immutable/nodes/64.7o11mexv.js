import{s as _,b as v,j as b,k as l,i,t as g,e as x,h,d as z,p as y,n as k}from"../chunks/scheduler.Bz19wuGf.js";import{S as w,i as C,c,b as p,m as u,t as m,a as f,d}from"../chunks/index.D0WKZCG1.js";import{N as P}from"../chunks/Narigo.D4GIj-7X.js";import{P as q,a as A}from"../chunks/PuzzlePageLayout.CqohPXvw.js";function I(n){let e,o,a="border-radius",s;return{c(){e=g("I took a very straight-forward approach to this, having three divs and let them share most code. "),o=x("code"),o.textContent=a,s=g(" with multiple values allowed me to correctly shape the divs.")},l(t){e=h(t,"I took a very straight-forward approach to this, having three divs and let them share most code. "),o=z(t,"CODE",{"data-svelte-h":!0}),y(o)!=="svelte-1fkbqek"&&(o.textContent=a),s=h(t," with multiple values allowed me to correctly shape the divs.")},m(t,r){l(t,e,r),l(t,o,r),l(t,s,r)},p:k,d(t){t&&(i(e),i(o),i(s))}}}function L(n){let e,o,a,s;return e=new A({props:{title:"Puzzle 7 solution",solution:n[0]}}),a=new P({props:{$$slots:{default:[I]},$$scope:{ctx:n}}}),{c(){c(e.$$.fragment),o=v(),c(a.$$.fragment)},l(t){p(e.$$.fragment,t),o=b(t),p(a.$$.fragment,t)},m(t,r){u(e,t,r),l(t,o,r),u(a,t,r),s=!0},p(t,r){const $={};r&2&&($.$$scope={dirty:r,ctx:t}),a.$set($)},i(t){s||(m(e.$$.fragment,t),m(a.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),f(a.$$.fragment,t),s=!1},d(t){t&&i(o),d(e,t),d(a,t)}}}function N(n){let e,o;return e=new q({props:{title:"Leafy Trail",$$slots:{default:[L]},$$scope:{ctx:n}}}),{c(){c(e.$$.fragment)},l(a){p(e.$$.fragment,a)},m(a,s){u(e,a,s),o=!0},p(a,[s]){const t={};s&2&&(t.$$scope={dirty:s,ctx:a}),e.$set(t)},i(a){o||(m(e.$$.fragment,a),o=!0)},o(a){f(e.$$.fragment,a),o=!1},d(a){d(e,a)}}}function S(n){return[`<div class="a"></div>
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
`]}class F extends w{constructor(e){super(),C(this,e,S,N,_,{})}}export{F as component};
