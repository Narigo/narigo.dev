import{s as g,a as h,c as b,i as f,d as $,l as x,m as y}from"../chunks/scheduler.wxh4t93s.js";import{S as _,i as z,b as n,d as l,m as u,a as p,t as c,e as d}from"../chunks/index.qiVYbOcq.js";import{N as w}from"../chunks/Narigo.ix7PwJvb.js";import{P as k,a as v}from"../chunks/PuzzlePageLayout.PnCYphdm.js";function C(s){let e;return{c(){e=x(`The idea used here yielded 100%, but I'm pretty sure if you want to really get the same picture,
		you'd do it differently. On the image, the left side of the speaker looks circular, but when
		solving it like we did, it becomes more like an ellipse. To get it to a circular shape, the
		border sizes would have to match. It seems that this isn't the case here.`)},l(r){e=y(r,`The idea used here yielded 100%, but I'm pretty sure if you want to really get the same picture,
		you'd do it differently. On the image, the left side of the speaker looks circular, but when
		solving it like we did, it becomes more like an ellipse. To get it to a circular shape, the
		border sizes would have to match. It seems that this isn't the case here.`)},m(r,t){f(r,e,t)},d(r){r&&$(e)}}}function P(s){let e,r,t,o;return e=new v({props:{title:"Puzzle 65 solution",solution:s[0]}}),t=new w({props:{$$slots:{default:[C]},$$scope:{ctx:s}}}),{c(){n(e.$$.fragment),r=h(),n(t.$$.fragment)},l(a){l(e.$$.fragment,a),r=b(a),l(t.$$.fragment,a)},m(a,i){u(e,a,i),f(a,r,i),u(t,a,i),o=!0},p(a,i){const m={};i&2&&(m.$$scope={dirty:i,ctx:a}),t.$set(m)},i(a){o||(p(e.$$.fragment,a),p(t.$$.fragment,a),o=!0)},o(a){c(e.$$.fragment,a),c(t.$$.fragment,a),o=!1},d(a){a&&$(r),d(e,a),d(t,a)}}}function B(s){let e,r;return e=new k({props:{title:"Max Volume",$$slots:{default:[P]},$$scope:{ctx:s}}}),{c(){n(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,o){u(e,t,o),r=!0},p(t,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){c(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function D(s){return[`<div a></div>
<div b></div>
<style>
  body {
    background: #191919;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    gap: 25px;
  }
  div {
    height: 200px;
  }
  [a] {
    box-sizing: border-box;
    background: #5DBCF9;
    border: 75px solid #191919;
    border-left-width: 67px;
    border-right-color: #5DBCF9;
    border-radius: 80px 0 0 80px;
  }
  [b] {
    width: 100px;
    background: radial-gradient(
      circle at 0 50%, #0000 40px, #5DBCF9 0 50px, #0000 0 65px, #5DBCF9 0 75px, #0000 0 90px, #5DBCF9 0 100px, #0000 0
    );
  }
</style>
`]}class O extends _{constructor(e){super(),z(this,e,D,B,g,{})}}export{O as component};