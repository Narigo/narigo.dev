import{s as $,a as v,c as y,i as n,d as l,l as h,f as _,m as b,g as C,A as w,j as g,y as k}from"../chunks/scheduler.wxh4t93s.js";import{S as z,i as A,b as p,d as u,m as d,a as c,t as m,e as x}from"../chunks/index.qiVYbOcq.js";import{N as P}from"../chunks/Narigo.ix7PwJvb.js";import{P as F,a as S}from"../chunks/PuzzlePageLayout.PnCYphdm.js";function T(i){let e,a,s="the VirtualCoffee.io discussion thread for CSS Battle #50",o;return{c(){e=h(`Today we didn't really manage to create very short solutions for this. There is probably a
		better way how to solve this, but it seems like there should be a way to make this a lot
		shorter. Maybe I'll get back to it - or someone else has shared a better solution on `),a=_("a"),a.textContent=s,o=h("."),this.h()},l(t){e=b(t,`Today we didn't really manage to create very short solutions for this. There is probably a
		better way how to solve this, but it seems like there should be a way to make this a lot
		shorter. Maybe I'll get back to it - or someone else has shared a better solution on `),a=C(t,"A",{href:!0,rel:!0,"data-svelte-h":!0}),w(a)!=="svelte-7webx8"&&(a.textContent=s),o=b(t,"."),this.h()},h(){g(a,"href","https://github.com/orgs/Virtual-Coffee/discussions/891"),g(a,"rel","external")},m(t,r){n(t,e,r),n(t,a,r),n(t,o,r)},p:k,d(t){t&&(l(e),l(a),l(o))}}}function j(i){let e,a,s,o;return e=new S({props:{title:"Puzzle 50 solution",solution:i[0]}}),s=new P({props:{$$slots:{default:[T]},$$scope:{ctx:i}}}),{c(){p(e.$$.fragment),a=v(),p(s.$$.fragment)},l(t){u(e.$$.fragment,t),a=y(t),u(s.$$.fragment,t)},m(t,r){d(e,t,r),n(t,a,r),d(s,t,r),o=!0},p(t,r){const f={};r&2&&(f.$$scope={dirty:r,ctx:t}),s.$set(f)},i(t){o||(c(e.$$.fragment,t),c(s.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),m(s.$$.fragment,t),o=!1},d(t){t&&l(a),x(e,t),x(s,t)}}}function I(i){let e,a;return e=new F({props:{title:"Use Hand Sanitizer",$$slots:{default:[j]},$$scope:{ctx:i}}}),{c(){p(e.$$.fragment)},l(s){u(e.$$.fragment,s)},m(s,o){d(e,s,o),a=!0},p(s,[o]){const t={};o&2&&(t.$$scope={dirty:o,ctx:s}),e.$set(t)},i(s){a||(c(e.$$.fragment,s),a=!0)},o(s){m(e.$$.fragment,s),a=!1},d(s){x(e,s)}}}function M(i){return[`<div class="bottle">
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
</style>`]}class H extends z{constructor(e){super(),A(this,e,M,I,$,{})}}export{H as component};