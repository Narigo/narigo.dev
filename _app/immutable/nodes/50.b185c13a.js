import{s as d,a as x,c as _,i as g,d as m,l as z,m as h}from"../chunks/scheduler.58de62d3.js";import{S as b,i as v,b as s,d as p,m as l,a as c,t as u,e as f}from"../chunks/index.698fb7dd.js";import{N as y}from"../chunks/Narigo.08d9f4ea.js";import{P as w,a as A}from"../chunks/PuzzlePageLayout.b81087b6.js";function P(i){let t;return{c(){t=z("Again, having lots of fun with gradients!")},l(n){t=h(n,"Again, having lots of fun with gradients!")},m(n,e){g(n,t,e)},d(n){n&&m(t)}}}function k(i){let t,n,e,r;return t=new A({props:{title:"Puzzle 66 solution",solution:i[0]}}),e=new y({props:{$$slots:{default:[P]},$$scope:{ctx:i}}}),{c(){s(t.$$.fragment),n=x(),s(e.$$.fragment)},l(a){p(t.$$.fragment,a),n=_(a),p(e.$$.fragment,a)},m(a,o){l(t,a,o),g(a,n,o),l(e,a,o),r=!0},p(a,o){const $={};o&2&&($.$$scope={dirty:o,ctx:a}),e.$set($)},i(a){r||(c(t.$$.fragment,a),c(e.$$.fragment,a),r=!0)},o(a){u(t.$$.fragment,a),u(e.$$.fragment,a),r=!1},d(a){a&&m(n),f(t,a),f(e,a)}}}function D(i){let t,n;return t=new w({props:{title:"Batmicky",$$slots:{default:[k]},$$scope:{ctx:i}}}),{c(){s(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,r){l(t,e,r),n=!0},p(e,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){f(t,e)}}}function F(i){return[`<div></div>
<style>
  body {background: #191919;display:grid;place-items:center}
  div {
    width: 250px;
    height: 100px;
    position:relative;
    background:
      radial-gradient(circle at 66px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 185px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 100% 50px, #191919 50px, #0000 0),
      radial-gradient(circle at 0px 50px, #191919 50px, #0000 0),
      #F2AD43;
  }
  div::before {
    position:absolute;
    inset: 0 85px 70px;
    content: '';
    background: 
      radial-gradient(circle at 30px 10px, #F2AD43 5px, #0000 0),
      radial-gradient(circle at 50px 10px, #F2AD43 5px, #0000 0),
      linear-gradient(#191919 10px, #0000 0),
      linear-gradient(to right,#191919 30px, #F2AD43 0 50px, #191919 0),
      #191919;
    border-radius: 0 0 10px 10px;
  }
</style>
`]}class C extends b{constructor(t){super(),v(this,t,F,D,d,{})}}export{C as component};
