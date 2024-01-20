import{s as $,a as h,c as b,i as m,d as g,l as x,m as _}from"../chunks/scheduler.Po0zCuFf.js";import{S as v,i as z,b as s,d as l,m as d,a as p,t as u,e as c}from"../chunks/index.WEWm72Kh.js";import{N as k}from"../chunks/Narigo.ngQPToX2.js";import{P as y,a as w}from"../chunks/PuzzlePageLayout.5zDzC0Ep.js";function I(i){let e;return{c(){e=x(`There is a small overlap of the shaft to the body part. I used negative margins here to make it
		appear bigger and had to use z-index to put the body on top of it. I think reversing the order
		of the grid divs would have worked as well, but I didn't test it because z-index seemed like a
		simple fix.`)},l(r){e=_(r,`There is a small overlap of the shaft to the body part. I used negative margins here to make it
		appear bigger and had to use z-index to put the body on top of it. I think reversing the order
		of the grid divs would have worked as well, but I didn't test it because z-index seemed like a
		simple fix.`)},m(r,t){m(r,e,t)},d(r){r&&g(e)}}}function P(i){let e,r,t,n;return e=new w({props:{title:"Puzzle 78 solution",solution:i[0]}}),t=new k({props:{$$slots:{default:[I]},$$scope:{ctx:i}}}),{c(){s(e.$$.fragment),r=h(),s(t.$$.fragment)},l(a){l(e.$$.fragment,a),r=b(a),l(t.$$.fragment,a)},m(a,o){d(e,a,o),m(a,r,o),d(t,a,o),n=!0},p(a,o){const f={};o&2&&(f.$$scope={dirty:o,ctx:a}),t.$set(f)},i(a){n||(p(e.$$.fragment,a),p(t.$$.fragment,a),n=!0)},o(a){u(e.$$.fragment,a),u(t.$$.fragment,a),n=!1},d(a){a&&g(r),c(e,a),c(t,a)}}}function A(i){let e,r;return e=new y({props:{title:"Ukulele",$$slots:{default:[P]},$$scope:{ctx:i}}}),{c(){s(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,n){d(e,t,n),r=!0},p(t,[n]){const a={};n&2&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){u(e.$$.fragment,t),r=!1},d(t){c(e,t)}}}function C(i){return[`<div b></div>
<div s></div>
<div h></div>
<style>
  body {
    background:#F3AC3C;
    display:grid;
    align-items:center;
    justify-content:center;
    grid-template-columns:170px 100px 40px;
  }
  [b] {
    display:grid;
    place-items:center left;
    height:120;
    background:
      radial-gradient(circle at 120px 50%,#1A4341 20px,#F3AC3C 0 25px,#998235 0 50px,#0000 0),
      radial-gradient(circle at 60px 50%,#998235 60px,#0000 0);
    z-index:1;
  }
  [s] {
    margin:-5;
    height:20;
    background: #1A4341;
  }
  [h] {
    display:grid;
    place-items:center;
    border-radius:10px;
    height:20;
    padding:5;
    background: #998235;
  }
  *::before,*::after {
    border-radius: 5px;
    background:#1A4341;
  }
  [b]::before {
    content:'';
    margin-left:40;
    width:10;
    height:40;
  }
  [h]::before,[h]::after {
    content:'';
    width:20;
    height:4;
  }
</style>
`]}class j extends v{constructor(e){super(),z(this,e,C,A,$,{})}}export{j as component};
