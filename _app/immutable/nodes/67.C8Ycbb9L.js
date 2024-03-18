import{s as $,b as h,j as x,k as m,i as f,t as v,h as _}from"../chunks/scheduler.Bz19wuGf.js";import{S as w,i as y,c as s,b as l,m as p,t as c,a as d,d as u}from"../chunks/index.D0WKZCG1.js";import{N as b}from"../chunks/Narigo.D4GIj-7X.js";import{P as z,a as k}from"../chunks/PuzzlePageLayout.CqohPXvw.js";function C(n){let t;return{c(){t=v(`This one is again something I only got 99.9% for. David has seen this as two divs with one
		rotated 45 degrees. I thought of having eight circles on the outside but when looking at it more
		closely, it seems like circles wouldn't fit.`)},l(i){t=_(i,`This one is again something I only got 99.9% for. David has seen this as two divs with one
		rotated 45 degrees. I thought of having eight circles on the outside but when looking at it more
		closely, it seems like circles wouldn't fit.`)},m(i,e){m(i,t,e)},d(i){i&&f(t)}}}function F(n){let t,i,e,o;return t=new k({props:{title:"Puzzle 72 solution",solution:n[0]}}),e=new b({props:{$$slots:{default:[C]},$$scope:{ctx:n}}}),{c(){s(t.$$.fragment),i=h(),s(e.$$.fragment)},l(a){l(t.$$.fragment,a),i=x(a),l(e.$$.fragment,a)},m(a,r){p(t,a,r),m(a,i,r),p(e,a,r),o=!0},p(a,r){const g={};r&2&&(g.$$scope={dirty:r,ctx:a}),e.$set(g)},i(a){o||(c(t.$$.fragment,a),c(e.$$.fragment,a),o=!0)},o(a){d(t.$$.fragment,a),d(e.$$.fragment,a),o=!1},d(a){a&&f(i),u(t,a),u(e,a)}}}function P(n){let t,i;return t=new z({props:{title:"Sheep",$$slots:{default:[F]},$$scope:{ctx:n}}}),{c(){s(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,o){p(t,e,o),i=!0},p(e,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:e}),t.$set(a)},i(e){i||(c(t.$$.fragment,e),i=!0)},o(e){d(t.$$.fragment,e),i=!1},d(e){u(t,e)}}}function D(n){return[`<div>
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
`]}class j extends w{constructor(t){super(),y(this,t,D,P,$,{})}}export{j as component};
