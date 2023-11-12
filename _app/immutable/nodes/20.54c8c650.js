import{s as g,a as _,c as v,i as c,d as $,l as x,m as z}from"../chunks/scheduler.750b9d5e.js";import{S as b,i as h,b as s,d as l,m as p,a as d,t as f,e as u}from"../chunks/index.369e6c44.js";import{N as y}from"../chunks/Narigo.2253bd05.js";import{P as k,a as w}from"../chunks/PuzzlePageLayout.239b74f5.js";function P(n){let t;return{c(){t=x(`Amy took over today and selected a random puzzle. It took me a few tries, but I finally got to
		100%.`)},l(a){t=z(a,`Amy took over today and selected a random puzzle. It took me a few tries, but I finally got to
		100%.`)},m(a,e){c(a,t,e)},d(a){a&&$(t)}}}function A(n){let t,a,e,r;return t=new w({props:{title:"Puzzle 175 solution",solution:n[0]}}),e=new y({props:{$$slots:{default:[P]},$$scope:{ctx:n}}}),{c(){s(t.$$.fragment),a=_(),s(e.$$.fragment)},l(o){l(t.$$.fragment,o),a=v(o),l(e.$$.fragment,o)},m(o,i){p(t,o,i),c(o,a,i),p(e,o,i),r=!0},p(o,i){const m={};i&2&&(m.$$scope={dirty:i,ctx:o}),e.$set(m)},i(o){r||(d(t.$$.fragment,o),d(e.$$.fragment,o),r=!0)},o(o){f(t.$$.fragment,o),f(e.$$.fragment,o),r=!1},d(o){o&&$(a),u(t,o),u(e,o)}}}function D(n){let t,a;return t=new k({props:{title:"Evil Cat",$$slots:{default:[A]},$$scope:{ctx:n}}}),{c(){s(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,r){p(t,e,r),a=!0},p(e,[r]){const o={};r&2&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){a||(d(t.$$.fragment,e),a=!0)},o(e){f(t.$$.fragment,e),a=!1},d(e){u(t,e)}}}function I(n){return[`<div h>
<div o></div>
<div n></div>
<div el>
  <div p></div>
</div>
<div er>
    <div p></div>
</div>
</div>
<style>
  body {
    background:#ED6A9D;
  }  
  [h] {
    width: 180px;
    height: 150px;
    background: #050044;
    position: fixed;
    top: 90;
    left:110;
    border-radius:50%
  }
  [el],[er] {
    background: #FFC100;
    position:fixed;
    top:130;
    left: 145;
    width: 40;
    height: 40;
    rotate:-45deg;
    border-radius: 0 50%;
  }
  [er] {
    left: 215;
  }
  [p] {
    height:30;
    width:10;
    background:#050044;
    border-radius: 50%;
    transform: rotate(45deg) translate(14px,-7px);
    position:fixed;
  }
  [n] {
    border:15px solid #0000;
    border-top-color:#ED6A9D;
    position:fixed;
    top:185;
    left:185;
  }
  [o] {
    position:fixed;
    top:65;
    left:120;
    right:120;
    bottom:100;
    background:#050044;
    clip-path: polygon(0 0, 80px 50px, 100% 0, 152px 100%, 8px 100%);
  }
</style>
`]}class S extends b{constructor(t){super(),h(this,t,I,D,g,{})}}export{S as component};
