import{s as $,a as h,c as x,i as m,d as f,l as v,m as _}from"../chunks/scheduler.Po0zCuFf.js";import{S as w,i as y,b as s,d as l,m as p,a as c,t as d,e as u}from"../chunks/index.WEWm72Kh.js";import{N as z}from"../chunks/Narigo.ngQPToX2.js";import{P as b,a as k}from"../chunks/PuzzlePageLayout.5zDzC0Ep.js";function C(n){let e;return{c(){e=v(`This one is again something I only got 99.9% for. David has seen this as two divs with one
		rotated 45 degrees. I thought of having eight circles on the outside but when looking at it more
		closely, it seems like circles wouldn't fit.`)},l(i){e=_(i,`This one is again something I only got 99.9% for. David has seen this as two divs with one
		rotated 45 degrees. I thought of having eight circles on the outside but when looking at it more
		closely, it seems like circles wouldn't fit.`)},m(i,t){m(i,e,t)},d(i){i&&f(e)}}}function F(n){let e,i,t,o;return e=new k({props:{title:"Puzzle 72 solution",solution:n[0]}}),t=new z({props:{$$slots:{default:[C]},$$scope:{ctx:n}}}),{c(){s(e.$$.fragment),i=h(),s(t.$$.fragment)},l(a){l(e.$$.fragment,a),i=x(a),l(t.$$.fragment,a)},m(a,r){p(e,a,r),m(a,i,r),p(t,a,r),o=!0},p(a,r){const g={};r&2&&(g.$$scope={dirty:r,ctx:a}),t.$set(g)},i(a){o||(c(e.$$.fragment,a),c(t.$$.fragment,a),o=!0)},o(a){d(e.$$.fragment,a),d(t.$$.fragment,a),o=!1},d(a){a&&f(i),u(e,a),u(t,a)}}}function P(n){let e,i;return e=new b({props:{title:"Sheep",$$slots:{default:[F]},$$scope:{ctx:n}}}),{c(){s(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,o){p(e,t,o),i=!0},p(t,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){i||(c(e.$$.fragment,t),i=!0)},o(t){d(e.$$.fragment,t),i=!1},d(t){u(e,t)}}}function D(n){return[`<div>
<div>
<div></div>
</div>
</div>
<style>
  body {
    display:grid;place-items:center;background:#243D83
  }
  div {
    width: 140px;
    height: 140px;
    background: #6592CF;
    border-radius:35px;
    rotate:45deg;
  }
  body>div>div {
    scale: 0.96;
    width: 140px;
    height: 140px;
  }
  body>div>div>div {
    rotate:-90deg;
    background:
      radial-gradient(circle at 60px 55px,#6592CF 5px,#0000 0) 0 0 no-repeat,
      radial-gradient(circle at 80px 55px,#6592CF 5px,#0000 0) 0 0 no-repeat,
      radial-gradient(circle at 30px 30px,#6592CF 25px,#0000 0) 0 0 no-repeat,
      radial-gradient(circle at 110px 30px,#6592CF 25px,#0000 0) 0 0 no-repeat,
      radial-gradient(circle at 70px 10px,#6592CF 25px,#0000 0) 0 0 no-repeat,
      radial-gradient(circle at 70px 65px,#243D83 31px,#0000 0) 0 0 no-repeat,
      linear-gradient(to bottom,#243D83 50px,#0000 0) 50% 10px / 60px no-repeat
    ;
  }
</style>
`]}class q extends w{constructor(e){super(),y(this,e,D,P,$,{})}}export{q as component};
