import{S as x,i as h,s as g,y as n,z as p,A as d,g as l,d as u,B as c,a as b,c as _,b as $,h as m,q as v,r as w}from"../chunks/index.b1660a48.js";import{N as z}from"../chunks/Narigo.1c5e5246.js";import{P as y,a as k}from"../chunks/PuzzlePageLayout.437a5001.js";function P(a){let e;return{c(){e=v(`I learned something! The border itself is somehow counting towards the border-radius. So if you
		need to have some radius with a thicker border, add the border thickness itself at least.`)},l(o){e=w(o,`I learned something! The border itself is somehow counting towards the border-radius. So if you
		need to have some radius with a thicker border, add the border thickness itself at least.`)},m(o,t){$(o,e,t)},d(o){o&&m(e)}}}function F(a){let e,o,t,r;return e=new k({props:{title:"Puzzle 58 solution",solution:a[0]}}),t=new z({props:{$$slots:{default:[P]},$$scope:{ctx:a}}}),{c(){n(e.$$.fragment),o=b(),n(t.$$.fragment)},l(s){p(e.$$.fragment,s),o=_(s),p(t.$$.fragment,s)},m(s,i){d(e,s,i),$(s,o,i),d(t,s,i),r=!0},p(s,i){const f={};i&2&&(f.$$scope={dirty:i,ctx:s}),t.$set(f)},i(s){r||(l(e.$$.fragment,s),l(t.$$.fragment,s),r=!0)},o(s){u(e.$$.fragment,s),u(t.$$.fragment,s),r=!1},d(s){c(e,s),s&&m(o),c(t,s)}}}function S(a){let e,o;return e=new y({props:{title:"Rose",$$slots:{default:[F]},$$scope:{ctx:a}}}),{c(){n(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,r){d(e,t,r),o=!0},p(t,[r]){const s={};r&2&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){o||(l(e.$$.fragment,t),o=!0)},o(t){u(e.$$.fragment,t),o=!1},d(t){c(e,t)}}}function q(a){return[`<div class="beige f"></div>
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
`]}class A extends x{constructor(e){super(),h(this,e,q,S,g,{})}}export{A as component};
