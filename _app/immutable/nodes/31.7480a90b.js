import{S as g,i as h,s as _,y as i,z as l,A as u,g as d,d as m,B as p,a as v,c as y,b as f,h as $,q as z,r as x}from"../chunks/index.3d7f15fc.js";import{N as w}from"../chunks/Narigo.f2af5427.js";import{P as b,a as P}from"../chunks/PuzzlePageLayout.f1cc1108.js";function k(s){let e;return{c(){e=z(`Pretty much the same idea like Sadie: Hide overflows, nest the divs. One of the divs is moved
		away from the other. By rotating the div (and therefore its children), the mountains appear.`)},l(n){e=x(n,`Pretty much the same idea like Sadie: Hide overflows, nest the divs. One of the divs is moved
		away from the other. By rotating the div (and therefore its children), the mountains appear.`)},m(n,t){f(n,e,t)},d(n){n&&$(e)}}}function F(s){let e,n,t,o;return e=new P({props:{title:"Puzzle 46 solution",solution:s[0]}}),t=new w({props:{$$slots:{default:[k]},$$scope:{ctx:s}}}),{c(){i(e.$$.fragment),n=v(),i(t.$$.fragment)},l(a){l(e.$$.fragment,a),n=y(a),l(t.$$.fragment,a)},m(a,r){u(e,a,r),f(a,n,r),u(t,a,r),o=!0},p(a,r){const c={};r&2&&(c.$$scope={dirty:r,ctx:a}),t.$set(c)},i(a){o||(d(e.$$.fragment,a),d(t.$$.fragment,a),o=!0)},o(a){m(e.$$.fragment,a),m(t.$$.fragment,a),o=!1},d(a){p(e,a),a&&$(n),p(t,a)}}}function S(s){let e,n;return e=new b({props:{title:"Mountains",$$slots:{default:[F]},$$scope:{ctx:s}}}),{c(){i(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,o){u(e,t,o),n=!0},p(t,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}function B(s){return[`<div class="root">
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
</style>`]}class N extends g{constructor(e){super(),h(this,e,B,S,_,{})}}export{N as component};
