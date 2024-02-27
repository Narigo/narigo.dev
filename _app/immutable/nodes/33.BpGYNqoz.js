import{s as d,b as _,j as h,k as f,i as g,t as x,h as z}from"../chunks/scheduler.Bz19wuGf.js";import{S as b,i as y,c as i,b as p,m as l,t as c,a as u,d as $}from"../chunks/index.D0WKZCG1.js";import{N as C}from"../chunks/Narigo.DQgr8xcz.js";import{P as v,a as P}from"../chunks/PuzzlePageLayout.g9n0UzY0.js";function w(s){let t;return{c(){t=x("The repeating-linear-gradient is one character less than adding the color again.")},l(n){t=z(n,"The repeating-linear-gradient is one character less than adding the color again.")},m(n,e){f(n,t,e)},d(n){n&&g(t)}}}function k(s){let t,n,e,r;return t=new P({props:{title:"Puzzle 39 solution",solution:s[0]}}),e=new C({props:{$$slots:{default:[w]},$$scope:{ctx:s}}}),{c(){i(t.$$.fragment),n=_(),i(e.$$.fragment)},l(a){p(t.$$.fragment,a),n=h(a),p(e.$$.fragment,a)},m(a,o){l(t,a,o),f(a,n,o),l(e,a,o),r=!0},p(a,o){const m={};o&2&&(m.$$scope={dirty:o,ctx:a}),e.$set(m)},i(a){r||(c(t.$$.fragment,a),c(e.$$.fragment,a),r=!0)},o(a){u(t.$$.fragment,a),u(e.$$.fragment,a),r=!1},d(a){a&&g(n),$(t,a),$(e,a)}}}function A(s){let t,n;return t=new v({props:{title:"Sunset",$$slots:{default:[k]},$$scope:{ctx:s}}}),{c(){i(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,r){l(t,e,r),n=!0},p(e,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function F(s){return[`<div class="b"></div>
<div class="s"></div>
<style>
  body {
    background: #1A4341;
    display: grid;
    place-items: center;
  }
  div {
    background: linear-gradient(transparent 75px, #F3AC3C 0 95px, transparent 0 115px, #F3AC3C 0 135px, transparent 0 155px, #F3AC3C 0 175px, transparent 0);
    border-radius: 50%;
    position: absolute;
    width: 250px;
    height: 250px;
  }
  .s {
    background: repeating-linear-gradient(#998235 0 30px, transparent 0 calc(100% - 30px));
    width: 200px;
    height: 200px;
  }
</style>
`]}class q extends b{constructor(t){super(),y(this,t,F,A,d,{})}}export{q as component};
