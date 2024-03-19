import{s as z,b as k,j as w,k as f,i as p,t as u,h as d}from"../chunks/scheduler.Bz19wuGf.js";import{S as y,i as C,c as $,b as m,m as c,t as g,a as h,d as _}from"../chunks/index.D0WKZCG1.js";import{C as v}from"../chunks/Code.DH1kOu0O.js";import{N as I}from"../chunks/Narigo.O5y70Dyt.js";import{P,a as A}from"../chunks/PuzzlePageLayout.DOpdV4b9.js";function j(s){let e;return{c(){e=u("z-index")},l(t){e=d(t,"z-index")},m(t,a){f(t,e,a)},d(t){t&&p(e)}}}function F(s){let e;return{c(){e=u("z-index")},l(t){e=d(t,"z-index")},m(t,a){f(t,e,a)},d(t){t&&p(e)}}}function N(s){let e,t,a,o,r,i;return t=new v({props:{$$slots:{default:[j]},$$scope:{ctx:s}}}),o=new v({props:{$$slots:{default:[F]},$$scope:{ctx:s}}}),{c(){e=u(`There is a small overlap of the shaft to the body part. I used negative margins here to make it
		appear bigger and had to use `),$(t.$$.fragment),a=u(` to put the body on top of it. I think reversing
		the order of the grid divs would have worked as well, but I didn't test it because `),$(o.$$.fragment),r=u(" seemed like a simple fix.")},l(n){e=d(n,`There is a small overlap of the shaft to the body part. I used negative margins here to make it
		appear bigger and had to use `),m(t.$$.fragment,n),a=d(n,` to put the body on top of it. I think reversing
		the order of the grid divs would have worked as well, but I didn't test it because `),m(o.$$.fragment,n),r=d(n," seemed like a simple fix.")},m(n,l){f(n,e,l),c(t,n,l),f(n,a,l),c(o,n,l),f(n,r,l),i=!0},p(n,l){const b={};l&2&&(b.$$scope={dirty:l,ctx:n}),t.$set(b);const x={};l&2&&(x.$$scope={dirty:l,ctx:n}),o.$set(x)},i(n){i||(g(t.$$.fragment,n),g(o.$$.fragment,n),i=!0)},o(n){h(t.$$.fragment,n),h(o.$$.fragment,n),i=!1},d(n){n&&(p(e),p(a),p(r)),_(t,n),_(o,n)}}}function S(s){let e,t,a,o;return e=new A({props:{title:"Puzzle 78 solution",solution:s[0]}}),a=new I({props:{$$slots:{default:[N]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment),t=k(),$(a.$$.fragment)},l(r){m(e.$$.fragment,r),t=w(r),m(a.$$.fragment,r)},m(r,i){c(e,r,i),f(r,t,i),c(a,r,i),o=!0},p(r,i){const n={};i&2&&(n.$$scope={dirty:i,ctx:r}),a.$set(n)},i(r){o||(g(e.$$.fragment,r),g(a.$$.fragment,r),o=!0)},o(r){h(e.$$.fragment,r),h(a.$$.fragment,r),o=!1},d(r){r&&p(t),_(e,r),_(a,r)}}}function T(s){let e,t;return e=new P({props:{title:"Ukulele",$$slots:{default:[S]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment)},l(a){m(e.$$.fragment,a)},m(a,o){c(e,a,o),t=!0},p(a,[o]){const r={};o&2&&(r.$$scope={dirty:o,ctx:a}),e.$set(r)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){h(e.$$.fragment,a),t=!1},d(a){_(e,a)}}}function q(s){return[`<div b></div>
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
`]}class G extends y{constructor(e){super(),C(this,e,q,T,z,{})}}export{G as component};
