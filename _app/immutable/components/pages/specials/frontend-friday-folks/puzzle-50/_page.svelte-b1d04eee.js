import{S as f,i as m,s as g,w as n,x as p,y as l,f as d,t as u,z as c,a as h,c as y,b,h as $,q as v,r as _}from"../../../../../chunks/index-ed5c000a.js";import{N as w}from"../../../../../chunks/Narigo-406ea8d0.js";import{P as z,a as k}from"../../../../../chunks/PuzzlePageLayout-93dc3336.js";function C(o){let t;return{c(){t=v(`Today we didn't really manage to create very short solutions for this. There is probably a
		better way how to solve this, but it seems like there should be a way to make this a lot
		shorter. Maybe we get back to it!`)},l(s){t=_(s,`Today we didn't really manage to create very short solutions for this. There is probably a
		better way how to solve this, but it seems like there should be a way to make this a lot
		shorter. Maybe we get back to it!`)},m(s,e){b(s,t,e)},d(s){s&&$(t)}}}function A(o){let t,s,e,r;return t=new k({props:{title:"Puzzle 50 solution",solution:o[0]}}),e=new w({props:{$$slots:{default:[C]},$$scope:{ctx:o}}}),{c(){n(t.$$.fragment),s=h(),n(e.$$.fragment)},l(a){p(t.$$.fragment,a),s=y(a),p(e.$$.fragment,a)},m(a,i){l(t,a,i),b(a,s,i),l(e,a,i),r=!0},p(a,i){const x={};i&2&&(x.$$scope={dirty:i,ctx:a}),e.$set(x)},i(a){r||(d(t.$$.fragment,a),d(e.$$.fragment,a),r=!0)},o(a){u(t.$$.fragment,a),u(e.$$.fragment,a),r=!1},d(a){c(t,a),a&&$(s),c(e,a)}}}function P(o){let t,s;return t=new z({props:{title:"Use Hand Sanitizer",$$slots:{default:[A]},$$scope:{ctx:o}}}),{c(){n(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,r){l(t,e,r),s=!0},p(e,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){u(t.$$.fragment,e),s=!1},d(e){c(t,e)}}}function F(o){return[`<div class="bottle">
  <div class="neck"></div>
  <div class="upper"></div>
  <div class="container"></div>
</div>
<div class="push"></div>
<div class="tip"></div>
<div class="dropa"></div>
<div class="dropb"></div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    background: #1A4341;
    margin: 0;
  }
  .bottle {
    position: absolute;
    display: grid;
    justify-items: center;
    inset: 70px 150px;
  }
  .tip {
    background: #F3AC3C;
    border-radius: 0 0 10px 10px;
    position: absolute;
    inset: 70px 100px 210px 280px;
  }
  .dropa,.dropb {
    background: #998235;
    border-radius: 10px;
    position: absolute;
    inset: 100px 100px 180px 280px;
  }
  .dropb {
    inset: 130px 100px 150px 280px;
  }
  .push {
    background: #F3AC3C;
    border-radius: 10px 10px 0;
    position: absolute;
    inset: 50px 150px;
    width: 150px;
    height: 20px;
  }
  .bottle > * {
    background: #F3AC3C;
  }
  .neck {
    height: 20px;
    width: 20px;
  }
  .upper {
    border-radius: 10px 10px 0 0;
    height: 20px;
    width: 50px;
  }
  .container {
    background: radial-gradient(circle at 25px 55px, #998235 25px, transparent 0),
      radial-gradient(circle at 75px 55px, #F3AC3C 25px, transparent 0),
      linear-gradient(#F3AC3C 55px, #998235 0);
    border-radius: 20px;
    height: 140px;
    width: 100px;
  }
</style>`]}class M extends f{constructor(t){super(),m(this,t,F,P,g,{})}}export{M as default};
