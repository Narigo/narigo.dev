import{s as g,a as b,c as h,i as f,d as $,l as x,m as k}from"../chunks/scheduler.750b9d5e.js";import{S as w,i as _,b as n,d as l,m as p,a as d,t as u,e as m}from"../chunks/index.369e6c44.js";import{N as y}from"../chunks/Narigo.2253bd05.js";import{P as z,a as v}from"../chunks/PuzzlePageLayout.50f89189.js";function I(s){let t;return{c(){t=x(`I missed it today due to work, but I finally came around with a solution to this. It was quite
		tricky, but I got 100% even though it doesn't look like my solution looks like a complete match
		to me. I used the "three transparent borders make a triangle" trick to get the ships deck.`)},l(r){t=k(r,`I missed it today due to work, but I finally came around with a solution to this. It was quite
		tricky, but I got 100% even though it doesn't look like my solution looks like a complete match
		to me. I used the "three transparent borders make a triangle" trick to get the ships deck.`)},m(r,e){f(r,t,e)},d(r){r&&$(t)}}}function P(s){let t,r,e,i;return t=new v({props:{title:"Puzzle 61 solution",solution:s[0]}}),e=new y({props:{$$slots:{default:[I]},$$scope:{ctx:s}}}),{c(){n(t.$$.fragment),r=b(),n(e.$$.fragment)},l(o){l(t.$$.fragment,o),r=h(o),l(e.$$.fragment,o)},m(o,a){p(t,o,a),f(o,r,a),p(e,o,a),i=!0},p(o,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:o}),e.$set(c)},i(o){i||(d(t.$$.fragment,o),d(e.$$.fragment,o),i=!0)},o(o){u(t.$$.fragment,o),u(e.$$.fragment,o),i=!1},d(o){o&&$(r),m(t,o),m(e,o)}}}function C(s){let t,r;return t=new z({props:{title:"ImprovMX",$$slots:{default:[P]},$$scope:{ctx:s}}}),{c(){n(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,i){p(t,e,i),r=!0},p(e,[i]){const o={};i&2&&(o.$$scope={dirty:i,ctx:e}),t.$set(o)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){u(t.$$.fragment,e),r=!1},d(e){m(t,e)}}}function q(s){return[`<r>
  <div t></div>
  <div b></div>
  <div d></div>
</r>
<p w1></p>
<p w2></p>
<style>
  body{
    background: #191919;
    margin: 76 0;
  }
  r{
    display: grid;
    place-items: center;
  }
  div {
    box-sizing:border-box;
    border: 10px solid #5DBCF9;
    margin-top: -10px;
  }
  [t] {
    height: 40px;
    width: 50px;
  }
  [b] {
    height: 70px;
    width: 100px;
  }
  [d]{
    border:0;
    display: flex;
    position:relative;
    -webkit-box-reflect: right;
  }
  [d]::before,[d]::after {
    position: absolute;
    content:'';
    box-sizing:border-box;
    border: 0;
    border-top:45px solid #0000;
    border-bottom:135px solid #0000;
    border-right: 78px solid #5DBCF9;
    left:-78;
    top:-35;
  }
  [d]::after {
    left:-65;
    top:-21;
    border-top:35px solid #0000;
    border-bottom:106px solid #0000;
    border-right: 60px solid #191919;
  }
  [r]{
    transform:scaleX(-1);
  }
  [w1],[w2] {
    position: absolute;
    border: 10px solid #191919;
    background: #5DBCF9;
    width: 200px;
    height: 10px;
    translate: 90px 12px;
  }
  [w2] {
    width: 110px;
    translate: 135px 32px;
    border-bottom-width: 100;
  }
</style>`]}class S extends w{constructor(t){super(),_(this,t,q,C,g,{})}}export{S as component};
