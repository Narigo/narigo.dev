import{S as d,i as _,s as h,y as i,z as l,A as p,g as c,d as u,B as $,a as x,c as z,b as f,h as m,q as b,r as y}from"../chunks/index.b1660a48.js";import{N as C}from"../chunks/Narigo.1c5e5246.js";import{P as v,a as P}from"../chunks/PuzzlePageLayout.97ef4086.js";function w(s){let e;return{c(){e=b("The repeating-linear-gradient is one character less than adding the color again.")},l(n){e=y(n,"The repeating-linear-gradient is one character less than adding the color again.")},m(n,t){f(n,e,t)},d(n){n&&m(e)}}}function A(s){let e,n,t,r;return e=new P({props:{title:"Puzzle 39 solution",solution:s[0]}}),t=new C({props:{$$slots:{default:[w]},$$scope:{ctx:s}}}),{c(){i(e.$$.fragment),n=x(),i(t.$$.fragment)},l(a){l(e.$$.fragment,a),n=z(a),l(t.$$.fragment,a)},m(a,o){p(e,a,o),f(a,n,o),p(t,a,o),r=!0},p(a,o){const g={};o&2&&(g.$$scope={dirty:o,ctx:a}),t.$set(g)},i(a){r||(c(e.$$.fragment,a),c(t.$$.fragment,a),r=!0)},o(a){u(e.$$.fragment,a),u(t.$$.fragment,a),r=!1},d(a){$(e,a),a&&m(n),$(t,a)}}}function k(s){let e,n;return e=new v({props:{title:"Sunset",$$slots:{default:[A]},$$scope:{ctx:s}}}),{c(){i(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,r){p(e,t,r),n=!0},p(t,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function F(s){return[`<div class="b"></div>
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
`]}class T extends d{constructor(e){super(),_(this,e,F,k,h,{})}}export{T as component};
