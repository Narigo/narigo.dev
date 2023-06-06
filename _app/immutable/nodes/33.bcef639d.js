import{S as g,i as y,s as v,y as d,z as c,A as f,g as h,d as m,B as x,a as _,c as C,b as l,h as n,q as p,k,r as u,l as w,m as z,n as $,G as A,H as S}from"../chunks/index.0bb61340.js";import{N as P}from"../chunks/Narigo.7389b9d0.js";import{P as F,a as T}from"../chunks/PuzzlePageLayout.8fbea99b.js";function B(i){let e,s,a,o;return{c(){e=p(`Today we didn't really manage to create very short solutions for this. There is probably a
		better way how to solve this, but it seems like there should be a way to make this a lot
		shorter. Maybe I'll get back to it - or someone else has shared a better solution on `),s=k("a"),a=p("the VirtualCoffee.io discussion thread for CSS Battle #50"),o=p("."),this.h()},l(t){e=u(t,`Today we didn't really manage to create very short solutions for this. There is probably a
		better way how to solve this, but it seems like there should be a way to make this a lot
		shorter. Maybe I'll get back to it - or someone else has shared a better solution on `),s=w(t,"A",{href:!0,rel:!0});var r=z(s);a=u(r,"the VirtualCoffee.io discussion thread for CSS Battle #50"),r.forEach(n),o=u(t,"."),this.h()},h(){$(s,"href","https://github.com/orgs/Virtual-Coffee/discussions/891"),$(s,"rel","external")},m(t,r){l(t,e,r),l(t,s,r),A(s,a),l(t,o,r)},p:S,d(t){t&&n(e),t&&n(s),t&&n(o)}}}function V(i){let e,s,a,o;return e=new T({props:{title:"Puzzle 50 solution",solution:i[0]}}),a=new P({props:{$$slots:{default:[B]},$$scope:{ctx:i}}}),{c(){d(e.$$.fragment),s=_(),d(a.$$.fragment)},l(t){c(e.$$.fragment,t),s=C(t),c(a.$$.fragment,t)},m(t,r){f(e,t,r),l(t,s,r),f(a,t,r),o=!0},p(t,r){const b={};r&2&&(b.$$scope={dirty:r,ctx:t}),a.$set(b)},i(t){o||(h(e.$$.fragment,t),h(a.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),m(a.$$.fragment,t),o=!1},d(t){x(e,t),t&&n(s),x(a,t)}}}function q(i){let e,s;return e=new F({props:{title:"Use Hand Sanitizer",$$slots:{default:[V]},$$scope:{ctx:i}}}),{c(){d(e.$$.fragment)},l(a){c(e.$$.fragment,a)},m(a,o){f(e,a,o),s=!0},p(a,[o]){const t={};o&2&&(t.$$scope={dirty:o,ctx:a}),e.$set(t)},i(a){s||(h(e.$$.fragment,a),s=!0)},o(a){m(e.$$.fragment,a),s=!1},d(a){x(e,a)}}}function H(i){return[`<div class="bottle">
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
</style>`]}class j extends g{constructor(e){super(),y(this,e,H,q,v,{})}}export{j as component};
