import{s as g,a as h,c as _,i as c,d as $,l as v,m as y}from"../chunks/scheduler.oS2FPi-b.js";import{S as z,i as x,b as i,d as l,m,a as u,t as d,e as p}from"../chunks/index.ICQ99_FX.js";import{N as w}from"../chunks/Narigo.cTuC28Fb.js";import{P as b,a as P}from"../chunks/PuzzlePageLayout.lROKBBjt.js";function k(s){let e;return{c(){e=v(`Pretty much the same idea like Sadie: Hide overflows, nest the divs. One of the divs is moved
		away from the other. By rotating the div (and therefore its children), the mountains appear.`)},l(o){e=y(o,`Pretty much the same idea like Sadie: Hide overflows, nest the divs. One of the divs is moved
		away from the other. By rotating the div (and therefore its children), the mountains appear.`)},m(o,t){c(o,e,t)},d(o){o&&$(e)}}}function F(s){let e,o,t,n;return e=new P({props:{title:"Puzzle 46 solution",solution:s[0]}}),t=new w({props:{$$slots:{default:[k]},$$scope:{ctx:s}}}),{c(){i(e.$$.fragment),o=h(),i(t.$$.fragment)},l(a){l(e.$$.fragment,a),o=_(a),l(t.$$.fragment,a)},m(a,r){m(e,a,r),c(a,o,r),m(t,a,r),n=!0},p(a,r){const f={};r&2&&(f.$$scope={dirty:r,ctx:a}),t.$set(f)},i(a){n||(u(e.$$.fragment,a),u(t.$$.fragment,a),n=!0)},o(a){d(e.$$.fragment,a),d(t.$$.fragment,a),n=!1},d(a){a&&$(o),p(e,a),p(t,a)}}}function S(s){let e,o;return e=new b({props:{title:"Mountains",$$slots:{default:[F]},$$scope:{ctx:s}}}),{c(){i(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,n){m(e,t,n),o=!0},p(t,[n]){const a={};n&2&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){d(e.$$.fragment,t),o=!1},d(t){p(e,t)}}}function B(s){return[`<div class="root">
<div class="a"></div>  
<div class="b"></div>  
</div>
<style>
  body {
    display: grid;
    place-items: center;
    background: #293462;
  }
  .root {
    background: #FFF1C1;
    display: grid;
    border-radius: 50%;
    overflow: hidden;
    height: 200px;
    width: 200px;
    rotate: 225deg;
  }
  .a,.b {
    background: #FE5F55;
    height: 30px;
    width: 130px;
  }
  .b {
    height: 140px;
    margin-left: -30px;
    margin-top: -55px;
  }
</style>`]}class q extends z{constructor(e){super(),x(this,e,B,S,g,{})}}export{q as component};
