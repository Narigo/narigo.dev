import{S as h,i as $,s as x,y as n,z as l,A as p,g as u,d as m,B as d,a as b,c as v,b as f,h as c,q as _,r as z}from"../chunks/index.b1660a48.js";import{N as w}from"../chunks/Narigo.1c5e5246.js";import{P as y,a as P}from"../chunks/PuzzlePageLayout.b12dd494.js";function k(a){let t;return{c(){t=_(`It was interesting to use grid here. The solution needed multiple wrappers, to get it done, but
		there may be some possibilties to optimize it. No real code golf ideas to make the solution
		smaller, but we got to 100% with this. So for us, 100% is "good enough". 😅`)},l(i){t=z(i,`It was interesting to use grid here. The solution needed multiple wrappers, to get it done, but
		there may be some possibilties to optimize it. No real code golf ideas to make the solution
		smaller, but we got to 100% with this. So for us, 100% is "good enough". 😅`)},m(i,e){f(i,t,e)},d(i){i&&c(t)}}}function N(a){let t,i,e,o;return t=new P({props:{title:"Puzzle 54 solution",solution:a[0]}}),e=new w({props:{$$slots:{default:[k]},$$scope:{ctx:a}}}),{c(){n(t.$$.fragment),i=b(),n(e.$$.fragment)},l(s){l(t.$$.fragment,s),i=v(s),l(e.$$.fragment,s)},m(s,r){p(t,s,r),f(s,i,r),p(e,s,r),o=!0},p(s,r){const g={};r&2&&(g.$$scope={dirty:r,ctx:s}),e.$set(g)},i(s){o||(u(t.$$.fragment,s),u(e.$$.fragment,s),o=!0)},o(s){m(t.$$.fragment,s),m(e.$$.fragment,s),o=!1},d(s){d(t,s),s&&c(i),d(e,s)}}}function S(a){let t,i;return t=new y({props:{title:"Black Lives Matter",$$slots:{default:[N]},$$scope:{ctx:a}}}),{c(){n(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,o){p(t,e,o),i=!0},p(e,[o]){const s={};o&2&&(s.$$scope={dirty:o,ctx:e}),t.$set(s)},i(e){i||(u(t.$$.fragment,e),i=!0)},o(e){m(t.$$.fragment,e),i=!1},d(e){d(t,e)}}}function q(a){return[`<div class="w">
  <div class="fs">
    <div class="h f f1"></div>
    <div class="h f f2"></div>
    <div class="h f f3"></div>
    <div class="h f f4"></div>
  </div>
  <div class="h x palm"></div>
  <div class="h x arm"></div>
  <div class="h f thumb"></div>
</div>
<style>
  body {
    background: #F9E492;
    display: grid;
    place-items: center;
    margin: 0;
  }
  .w {
    display: grid;
    position: relative;
    grid-template-columns: repeat(4, 1fr);
    margin-top: -10px;
  }
  .fs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column: 1 / 5;
    height: 70px;
    place-items: end;
  }
  .h {
    background: #191919;
  }
  .f {
    box-sizing: border-box;
    border-radius: 20px;
    border: 5px solid #F9E492;
    margin-right: -5px;
    height: 45px;
    width: 30px;
  }
  .f1 {
    height: 55px;
  }
  .f2 {
    height: 65px;
  }
  .f3 {
    height: 55px;
  }
  .x {
    border-radius: 0 0 10px 10px;
  }
  .palm {
    grid-column: 1 / 5;
    height: 40px;
  }
  .arm {
    grid-column: 2 / 4;
    height: 45px;
  }
  .thumb {
    position: absolute;
    height: 75px;
    transform: translate(2px, 36.5px) rotate(60deg);
  }
</style>`]}class I extends h{constructor(t){super(),$(this,t,q,S,x,{})}}export{I as component};