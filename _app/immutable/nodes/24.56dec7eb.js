import{S as A,i as E,s as B,y as c,z as b,A as g,g as h,d as _,B as v,a as w,c as k,b as f,h as u,q as p,r as $,k as y,l as I,m as C,G as P,H as D}from"../chunks/index.0bb61340.js";import{N as F}from"../chunks/Narigo.7389b9d0.js";import{P as q,a as S}from"../chunks/PuzzlePageLayout.add04823.js";function N(d){let e;return{c(){e=p(`In my first solution I used regular positioning and thought the left-bottom and middle one were
		of similar shape.`)},l(s){e=$(s,`In my first solution I used regular positioning and thought the left-bottom and middle one were
		of similar shape.`)},m(s,o){f(s,e,o)},d(s){s&&u(e)}}}function O(d){let e,s,o,a,n,m,l;return{c(){e=p("The second time I solved this, I was looking into ways how to mirror this. I wanted to use "),s=y("code"),o=p("-webkit-box-reflect"),a=p(`
		but it looks like it can only mirror on the X or the Y axis - not both at the same time. So I resorted
		to the `),n=y("code"),m=p("scale(-1)"),l=p(" trick. For this to work, the boxes needed to be duplicated.")},l(i){e=$(i,"The second time I solved this, I was looking into ways how to mirror this. I wanted to use "),s=I(i,"CODE",{});var t=C(s);o=$(t,"-webkit-box-reflect"),t.forEach(u),a=$(i,`
		but it looks like it can only mirror on the X or the Y axis - not both at the same time. So I resorted
		to the `),n=I(i,"CODE",{});var r=C(n);m=$(r,"scale(-1)"),r.forEach(u),l=$(i," trick. For this to work, the boxes needed to be duplicated.")},m(i,t){f(i,e,t),f(i,s,t),P(s,o),f(i,a,t),f(i,n,t),P(n,m),f(i,l,t)},p:D,d(i){i&&u(e),i&&u(s),i&&u(a),i&&u(n),i&&u(l)}}}function T(d){let e,s,o,a,n,m,l,i;return e=new S({props:{title:"Puzzle 4 solution",solution:d[0]}}),o=new F({props:{$$slots:{default:[N]},$$scope:{ctx:d}}}),n=new S({props:{title:"Second solution for puzzle 4",solution:d[1]}}),l=new F({props:{$$slots:{default:[O]},$$scope:{ctx:d}}}),{c(){c(e.$$.fragment),s=w(),c(o.$$.fragment),a=w(),c(n.$$.fragment),m=w(),c(l.$$.fragment)},l(t){b(e.$$.fragment,t),s=k(t),b(o.$$.fragment,t),a=k(t),b(n.$$.fragment,t),m=k(t),b(l.$$.fragment,t)},m(t,r){g(e,t,r),f(t,s,r),g(o,t,r),f(t,a,r),g(n,t,r),f(t,m,r),g(l,t,r),i=!0},p(t,r){const z={};r&4&&(z.$$scope={dirty:r,ctx:t}),o.$set(z);const x={};r&4&&(x.$$scope={dirty:r,ctx:t}),l.$set(x)},i(t){i||(h(e.$$.fragment,t),h(o.$$.fragment,t),h(n.$$.fragment,t),h(l.$$.fragment,t),i=!0)},o(t){_(e.$$.fragment,t),_(o.$$.fragment,t),_(n.$$.fragment,t),_(l.$$.fragment,t),i=!1},d(t){v(e,t),t&&u(s),v(o,t),t&&u(a),v(n,t),t&&u(m),v(l,t)}}}function X(d){let e,s;return e=new q({props:{title:"Ups n Downs",$$slots:{default:[T]},$$scope:{ctx:d}}}),{c(){c(e.$$.fragment)},l(o){b(e.$$.fragment,o)},m(o,a){g(e,o,a),s=!0},p(o,[a]){const n={};a&4&&(n.$$scope={dirty:a,ctx:o}),e.$set(n)},i(o){s||(h(e.$$.fragment,o),s=!0)},o(o){_(e.$$.fragment,o),s=!1},d(o){v(e,o)}}}function Y(d){return[`<div class="c r"></div>
<div class="d m"></div>
<div class="d l"></div>
<style>
  body {margin:0;background:#0B2429;}
  div {
    position: absolute;
    width: 120px;
    height: 120px;
    background: #F3AC3C;
    border-radius: 50%;
  }
  .m {
    background: #998235;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }
  .c {
    bottom: 50%;
    left: 50%;
  }
  .d {
    border-top-right-radius: 0;
  }
  .l {
    top: 50%;
    right: 50%;
  }
</style>
`,`<div></div>
<div id=b></div>
<style>
  body {background: #0B2429;display: grid;place-items:center;}
  #b {
    position: absolute;
    transform: scale(-1);
    z-index: -1;
  }
  div {
    background: #F3AC3C;
    border-radius: 50% 0 50% 50%;
    position: relative;
    height: 120px;
    width: 120px;
  }
  div:before,div:after {
    border-radius: 50% 0;
    content: '';
    inset: 0;
    position: absolute;
  }
  div:before {
    background: #998235;
  }
  div:after {
    background: #F3AC3C;
    inset: 60px 60px -60px -60px;
    border-radius: 50% 0 50% 50%;
  }
</style>
`]}class U extends A{constructor(e){super(),E(this,e,Y,X,B,{})}}export{U as component};
