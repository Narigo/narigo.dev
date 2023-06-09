import{S as $,i as h,s as x,y as n,z as l,A as p,g as d,d as f,B as u,a as v,c as _,b as c,h as m,q as z,r as b}from"../chunks/index.0bb61340.js";import{N as y}from"../chunks/Narigo.7389b9d0.js";import{P as w,a as P}from"../chunks/PuzzlePageLayout.add04823.js";function k(r){let e;return{c(){e=z('Ok, interesting use of grid here. In the end, we got 100%, so "good enough".')},l(a){e=b(a,'Ok, interesting use of grid here. In the end, we got 100%, so "good enough".')},m(a,t){c(a,e,t)},d(a){a&&m(e)}}}function q(r){let e,a,t,i;return e=new P({props:{title:"Puzzle 54 solution",solution:r[0]}}),t=new y({props:{$$slots:{default:[k]},$$scope:{ctx:r}}}),{c(){n(e.$$.fragment),a=v(),n(t.$$.fragment)},l(s){l(e.$$.fragment,s),a=_(s),l(t.$$.fragment,s)},m(s,o){p(e,s,o),c(s,a,o),p(t,s,o),i=!0},p(s,o){const g={};o&2&&(g.$$scope={dirty:o,ctx:s}),t.$set(g)},i(s){i||(d(e.$$.fragment,s),d(t.$$.fragment,s),i=!0)},o(s){f(e.$$.fragment,s),f(t.$$.fragment,s),i=!1},d(s){u(e,s),s&&m(a),u(t,s)}}}function B(r){let e,a;return e=new w({props:{title:"Black Lives Matter",$$slots:{default:[q]},$$scope:{ctx:r}}}),{c(){n(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,i){p(e,t,i),a=!0},p(t,[i]){const s={};i&2&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){f(e.$$.fragment,t),a=!1},d(t){u(e,t)}}}function E(r){return[`<div class="w">
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
</style>`]}class N extends ${constructor(e){super(),h(this,e,E,B,x,{})}}export{N as component};
