import{S as g,i as h,s as _,w as i,x as l,y as u,f,t as d,z as m,a as v,c as y,b as c,h as $,q as z,r as x}from"../../../../../chunks/index-ed5c000a.js";import{N as w}from"../../../../../chunks/Narigo-406ea8d0.js";import{P as b,a as P}from"../../../../../chunks/PuzzlePageLayout-93dc3336.js";function k(o){let e;return{c(){e=z(`Pretty much the same idea like Sadie: Hide overflows, nest the divs. One of the divs is moved
		away from the other. By rotating the div (and therefore its children), the mountains appear.`)},l(s){e=x(s,`Pretty much the same idea like Sadie: Hide overflows, nest the divs. One of the divs is moved
		away from the other. By rotating the div (and therefore its children), the mountains appear.`)},m(s,t){c(s,e,t)},d(s){s&&$(e)}}}function F(o){let e,s,t,n;return e=new P({props:{title:"Puzzle 46 solution",solution:o[0]}}),t=new w({props:{$$slots:{default:[k]},$$scope:{ctx:o}}}),{c(){i(e.$$.fragment),s=v(),i(t.$$.fragment)},l(a){l(e.$$.fragment,a),s=y(a),l(t.$$.fragment,a)},m(a,r){u(e,a,r),c(a,s,r),u(t,a,r),n=!0},p(a,r){const p={};r&2&&(p.$$scope={dirty:r,ctx:a}),t.$set(p)},i(a){n||(f(e.$$.fragment,a),f(t.$$.fragment,a),n=!0)},o(a){d(e.$$.fragment,a),d(t.$$.fragment,a),n=!1},d(a){m(e,a),a&&$(s),m(t,a)}}}function S(o){let e,s;return e=new b({props:{title:"Mountains",$$slots:{default:[F]},$$scope:{ctx:o}}}),{c(){i(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,n){u(e,t,n),s=!0},p(t,[n]){const a={};n&2&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){m(e,t)}}}function q(o){return[`<div class="root">
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
</style>`]}class N extends g{constructor(e){super(),h(this,e,q,S,_,{})}}export{N as default};
