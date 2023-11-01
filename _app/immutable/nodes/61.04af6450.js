import{s as $,a as x,c as h,i as f,d as m,l as _,m as b}from"../chunks/scheduler.750b9d5e.js";import{S as z,i as v,b as s,d as p,m as c,a as l,t as u,e as d}from"../chunks/index.369e6c44.js";import{N as y}from"../chunks/Narigo.2253bd05.js";import{P as k,a as A}from"../chunks/PuzzlePageLayout.50f89189.js";function w(r){let t;return{c(){t=_(`Lots of gradients! 100% again! Finally! Yes! This time, using background positioning and
		background sizes to get the correct result.`)},l(n){t=b(n,`Lots of gradients! 100% again! Finally! Yes! This time, using background positioning and
		background sizes to get the correct result.`)},m(n,e){f(n,t,e)},d(n){n&&m(t)}}}function P(r){let t,n,e,i;return t=new A({props:{title:"Puzzle 73 solution",solution:r[0]}}),e=new y({props:{$$slots:{default:[w]},$$scope:{ctx:r}}}),{c(){s(t.$$.fragment),n=x(),s(e.$$.fragment)},l(a){p(t.$$.fragment,a),n=h(a),p(e.$$.fragment,a)},m(a,o){c(t,a,o),f(a,n,o),c(e,a,o),i=!0},p(a,o){const g={};o&2&&(g.$$scope={dirty:o,ctx:a}),e.$set(g)},i(a){i||(l(t.$$.fragment,a),l(e.$$.fragment,a),i=!0)},o(a){u(t.$$.fragment,a),u(e.$$.fragment,a),i=!1},d(a){a&&m(n),d(t,a),d(e,a)}}}function C(r){let t,n;return t=new k({props:{title:"Happy Tiger",$$slots:{default:[P]},$$scope:{ctx:r}}}),{c(){s(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,i){c(t,e,i),n=!0},p(e,[i]){const a={};i&2&&(a.$$scope={dirty:i,ctx:e}),t.$set(a)},i(e){n||(l(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}function F(r){return[`<div e></div><div h></div><div m></div><div n></div>
<style>
  body {
    background: #F3AC3C;
    display:grid;
    place-items:center;
  }
  div {
    position:absolute;
  }
  [e] {
    top:65;
    background:
      radial-gradient(circle at 30px 50%,#1A4341 20px,#998235 0 30px,#0000 0) 0 0 / 110px;
    width:170;
    height:60;
  }
  [h] {
    background:
      radial-gradient(circle at 35px 70px, #1A4341 10px, #0000 0),
      radial-gradient(circle at 115px 70px, #1A4341 10px, #0000 0),
      conic-gradient(from -45deg at 50% 25px, #1A4341 90deg, #998235 0);
    border-radius: 75px 75px 60px 60px;
    width:150;
    height:150;
  }
  [m] {
    top:170;
    width:100;
    height:40;
    border-radius:25px 25px 60px 60px;
    background:
      radial-gradient(circle at 50% 0, #fff 10px, #1A4341 0 20px, #0000 0) -5px 10px / 80% 50% no-repeat,
      radial-gradient(circle at 50% 0, #fff 10px, #1A4341 0 20px, #0000 0) 25px 10px / 80% 50% no-repeat,
      #fff;
  }
  [n] {
    width:10;
    height:20;
    background:#1A4341;
    top:160;
  }
</style>`]}class Y extends z{constructor(t){super(),v(this,t,F,C,$,{})}}export{Y as component};
