import{s as h,b as $,j as b,k as c,i as g,t as v,h as _}from"../chunks/scheduler.Bz19wuGf.js";import{S as w,i as x,c as s,b as p,m as l,t as d,a as f,d as u}from"../chunks/index.D0WKZCG1.js";import{N as z}from"../chunks/Narigo.D4GIj-7X.js";import{P as y,a as k}from"../chunks/PuzzlePageLayout.CqohPXvw.js";function I(a){let t;return{c(){t=v(`Amy took over today and selected a random puzzle. It took me a few tries, but I finally got to
		100%. The ears were problematic for me. I tried rotating them, but only using clip-path seemed
		to work for 100% for me. I'm wondering whether that's the correct approach or whether I've just
		not found the right numbers for rotating the ears.`)},l(r){t=_(r,`Amy took over today and selected a random puzzle. It took me a few tries, but I finally got to
		100%. The ears were problematic for me. I tried rotating them, but only using clip-path seemed
		to work for 100% for me. I'm wondering whether that's the correct approach or whether I've just
		not found the right numbers for rotating the ears.`)},m(r,e){c(r,t,e)},d(r){r&&g(t)}}}function P(a){let t,r,e,n;return t=new k({props:{title:"Puzzle 175 solution",solution:a[0]}}),e=new z({props:{$$slots:{default:[I]},$$scope:{ctx:a}}}),{c(){s(t.$$.fragment),r=$(),s(e.$$.fragment)},l(o){p(t.$$.fragment,o),r=b(o),p(e.$$.fragment,o)},m(o,i){l(t,o,i),c(o,r,i),l(e,o,i),n=!0},p(o,i){const m={};i&2&&(m.$$scope={dirty:i,ctx:o}),e.$set(m)},i(o){n||(d(t.$$.fragment,o),d(e.$$.fragment,o),n=!0)},o(o){f(t.$$.fragment,o),f(e.$$.fragment,o),n=!1},d(o){o&&g(r),u(t,o),u(e,o)}}}function A(a){let t,r;return t=new y({props:{title:"Evil Cat",$$slots:{default:[P]},$$scope:{ctx:a}}}),{c(){s(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,n){l(t,e,n),r=!0},p(e,[n]){const o={};n&2&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){f(t.$$.fragment,e),r=!1},d(e){u(t,e)}}}function D(a){return[`<div h>
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
`]}class N extends w{constructor(t){super(),x(this,t,D,A,h,{})}}export{N as component};
