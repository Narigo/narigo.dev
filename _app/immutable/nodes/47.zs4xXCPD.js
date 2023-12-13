import{s as g,a as h,c as _,i as l,d as p,l as b,m as x}from"../chunks/scheduler.FpTo3f1Q.js";import{S as v,i as w,b as d,d as u,m as f,a as c,t as $,e as m}from"../chunks/index.Fxw16eHx.js";import{C as z}from"../chunks/Code.HXiWHTHH.js";import{N as y}from"../chunks/Narigo.4vFYHBHa.js";import{P as k,a as I}from"../chunks/PuzzlePageLayout.5HoZM6YW.js";function P(n){let t;return{c(){t=b("border-radius")},l(o){t=x(o,"border-radius")},m(o,s){l(o,t,s)},d(o){o&&p(t)}}}function F(n){let t,o,s,a;return o=new z({props:{$$slots:{default:[P]},$$scope:{ctx:n}}}),{c(){t=b("Thanks to Dan Ott, I learned something new about "),d(o.$$.fragment),s=b(` this time! The border
		itself counts towards the border-radius. So to see any radius, it needs to be at least as thick as
		the border itself to be visible. It may also lead to different "angles" of the border, but I need
		to research that at some point...`)},l(e){t=x(e,"Thanks to Dan Ott, I learned something new about "),u(o.$$.fragment,e),s=x(e,` this time! The border
		itself counts towards the border-radius. So to see any radius, it needs to be at least as thick as
		the border itself to be visible. It may also lead to different "angles" of the border, but I need
		to research that at some point...`)},m(e,r){l(e,t,r),f(o,e,r),l(e,s,r),a=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),o.$set(i)},i(e){a||(c(o.$$.fragment,e),a=!0)},o(e){$(o.$$.fragment,e),a=!1},d(e){e&&(p(t),p(s)),m(o,e)}}}function S(n){let t,o,s,a;return t=new I({props:{title:"Puzzle 58 solution",solution:n[0]}}),s=new y({props:{$$slots:{default:[F]},$$scope:{ctx:n}}}),{c(){d(t.$$.fragment),o=h(),d(s.$$.fragment)},l(e){u(t.$$.fragment,e),o=_(e),u(s.$$.fragment,e)},m(e,r){f(t,e,r),l(e,o,r),f(s,e,r),a=!0},p(e,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:e}),s.$set(i)},i(e){a||(c(t.$$.fragment,e),c(s.$$.fragment,e),a=!0)},o(e){$(t.$$.fragment,e),$(s.$$.fragment,e),a=!1},d(e){e&&p(o),m(t,e),m(s,e)}}}function T(n){let t,o;return t=new k({props:{title:"Rose",$$slots:{default:[S]},$$scope:{ctx:n}}}),{c(){d(t.$$.fragment)},l(s){u(t.$$.fragment,s)},m(s,a){f(t,s,a),o=!0},p(s,[a]){const e={};a&2&&(e.$$scope={dirty:a,ctx:s}),t.$set(e)},i(s){o||(c(t.$$.fragment,s),o=!0)},o(s){$(t.$$.fragment,s),o=!1},d(s){m(t,s)}}}function C(n){return[`<div class="beige f"></div>
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
`]}class L extends v{constructor(t){super(),w(this,t,C,T,g,{})}}export{L as component};
