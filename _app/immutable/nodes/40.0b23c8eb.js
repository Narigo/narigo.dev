import{s as h,a as g,c as _,i,d as l,l as x,f as v,m as $,g as w,A as z,y}from"../chunks/scheduler.52b7490a.js";import{S as k,i as I,b as p,d,m as u,a as f,t as c,e as m}from"../chunks/index.644eb738.js";import{N as P}from"../chunks/Narigo.e24b860c.js";import{P as C,a as F}from"../chunks/PuzzlePageLayout.389c71ed.js";function S(n){let e,a,s="border-radius",o;return{c(){e=x("Thanks to Dan Ott, I learned something new about "),a=v("code"),a.textContent=s,o=x(` this time! The border
		itself counts towards the border-radius. So to see any radius, it needs to be at least as thick as
		the border itself to be visible. It may also lead to different "angles" of the border, but I need
		to research that at some point...`)},l(t){e=$(t,"Thanks to Dan Ott, I learned something new about "),a=w(t,"CODE",{"data-svelte-h":!0}),z(a)!=="svelte-seua1b"&&(a.textContent=s),o=$(t,` this time! The border
		itself counts towards the border-radius. So to see any radius, it needs to be at least as thick as
		the border itself to be visible. It may also lead to different "angles" of the border, but I need
		to research that at some point...`)},m(t,r){i(t,e,r),i(t,a,r),i(t,o,r)},p:y,d(t){t&&(l(e),l(a),l(o))}}}function T(n){let e,a,s,o;return e=new F({props:{title:"Puzzle 58 solution",solution:n[0]}}),s=new P({props:{$$slots:{default:[S]},$$scope:{ctx:n}}}),{c(){p(e.$$.fragment),a=g(),p(s.$$.fragment)},l(t){d(e.$$.fragment,t),a=_(t),d(s.$$.fragment,t)},m(t,r){u(e,t,r),i(t,a,r),u(s,t,r),o=!0},p(t,r){const b={};r&2&&(b.$$scope={dirty:r,ctx:t}),s.$set(b)},i(t){o||(f(e.$$.fragment,t),f(s.$$.fragment,t),o=!0)},o(t){c(e.$$.fragment,t),c(s.$$.fragment,t),o=!1},d(t){t&&l(a),m(e,t),m(s,t)}}}function D(n){let e,a;return e=new C({props:{title:"Rose",$$slots:{default:[T]},$$scope:{ctx:n}}}),{c(){p(e.$$.fragment)},l(s){d(e.$$.fragment,s)},m(s,o){u(e,s,o),a=!0},p(s,[o]){const t={};o&2&&(t.$$scope={dirty:o,ctx:s}),e.$set(t)},i(s){a||(f(e.$$.fragment,s),a=!0)},o(s){c(e.$$.fragment,s),a=!1},d(s){m(e,s)}}}function O(n){return[`<div class="beige f"></div>
<div class="beige e"></div>
<div class="blue d"></div>
<div class="blue c"></div>
<div class="blue b"></div>
<div class="blue a"></div>
<style>
  body {
    background: #191919;
  }
  .blue {
    background: #4F77FF;
  }
  .beige {
    background: #F9E492;
    border: 0;
  }
  div {
    position: fixed;
    border: 10px solid #191919;
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }
  .a {
    top: 35px;
    left: 175px
  }
  .b {
    border-radius: 15px 15px 35px 35px;
    top: 55px;
    left: 140px;
    width: 100px;
  }
  .c {
    border-radius: 15px 15px 35px 35px;
    top: 75px;
    left: 120px;
    width: 140px;
  }
  .d {
    border: 0;
    top: 65px;
    left: 150px;
    height: 100px;
    width: 100px;
  }
  .e {
    top: 145px;
    left: 180px;
    height: 40px;
    width: 40px;
  }
  .f {
    border-radius: 10px;
    top: 155px;
    left: 190px;
    height: 100px;
    width: 20px;
  }
</style>
`]}class L extends k{constructor(e){super(),I(this,e,O,D,h,{})}}export{L as component};
