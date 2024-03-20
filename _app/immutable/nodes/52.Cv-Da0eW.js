import{s as g,b as h,j as _,k as l,i as p,t as b,h as x}from"../chunks/scheduler.Bz19wuGf.js";import{S as v,i as w,c as d,b as u,m as f,t as c,a as $,d as m}from"../chunks/index.D0WKZCG1.js";import{C as z}from"../chunks/Code.DH1kOu0O.js";import{N as y}from"../chunks/Narigo.KOWV6Nbp.js";import{P as k,a as I}from"../chunks/PuzzlePageLayout.D4vM-8YV.js";function P(n){let e;return{c(){e=b("border-radius")},l(o){e=x(o,"border-radius")},m(o,s){l(o,e,s)},d(o){o&&p(e)}}}function F(n){let e,o,s,r;return o=new z({props:{$$slots:{default:[P]},$$scope:{ctx:n}}}),{c(){e=b("Thanks to Dan Ott, I learned something new about "),d(o.$$.fragment),s=b(` this time! The border
		itself counts towards the border-radius. So to see any radius, it needs to be at least as thick as
		the border itself to be visible. It may also lead to different "angles" of the border, but I need
		to research that at some point...`)},l(t){e=x(t,"Thanks to Dan Ott, I learned something new about "),u(o.$$.fragment,t),s=x(t,` this time! The border
		itself counts towards the border-radius. So to see any radius, it needs to be at least as thick as
		the border itself to be visible. It may also lead to different "angles" of the border, but I need
		to research that at some point...`)},m(t,a){l(t,e,a),f(o,t,a),l(t,s,a),r=!0},p(t,a){const i={};a&2&&(i.$$scope={dirty:a,ctx:t}),o.$set(i)},i(t){r||(c(o.$$.fragment,t),r=!0)},o(t){$(o.$$.fragment,t),r=!1},d(t){t&&(p(e),p(s)),m(o,t)}}}function S(n){let e,o,s,r;return e=new I({props:{title:"Puzzle 58 solution",solution:n[0]}}),s=new y({props:{$$slots:{default:[F]},$$scope:{ctx:n}}}),{c(){d(e.$$.fragment),o=h(),d(s.$$.fragment)},l(t){u(e.$$.fragment,t),o=_(t),u(s.$$.fragment,t)},m(t,a){f(e,t,a),l(t,o,a),f(s,t,a),r=!0},p(t,a){const i={};a&2&&(i.$$scope={dirty:a,ctx:t}),s.$set(i)},i(t){r||(c(e.$$.fragment,t),c(s.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),$(s.$$.fragment,t),r=!1},d(t){t&&p(o),m(e,t),m(s,t)}}}function T(n){let e,o;return e=new k({props:{title:"Rose",$$slots:{default:[S]},$$scope:{ctx:n}}}),{c(){d(e.$$.fragment)},l(s){u(e.$$.fragment,s)},m(s,r){f(e,s,r),o=!0},p(s,[r]){const t={};r&2&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){o||(c(e.$$.fragment,s),o=!0)},o(s){$(e.$$.fragment,s),o=!1},d(s){m(e,s)}}}function C(n){return[`<div class="beige f"></div>
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
`]}class E extends v{constructor(e){super(),w(this,e,C,T,g,{})}}export{E as component};
