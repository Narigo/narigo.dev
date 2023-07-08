import{S as f,i as $,s as m,y as s,z as p,A as l,g as d,d as c,B as u,a as b,c as _,b as h,h as x,q as z,r as k}from"../chunks/index.b1660a48.js";import{N as T}from"../chunks/Narigo.1c5e5246.js";import{P as w,a as y}from"../chunks/PuzzlePageLayout.437a5001.js";function F(i){let t;return{c(){t=z(`That was "fun" using gradients for the teeth and nose. The linear-gradient creates the long
		parts of the teeth, using the background color and a transparent one in between. The background
		size and origin start it at the appropriate pixels. The radial-gradients sit on top of these
		teeth to create the rounded part of the teeth. The nose had to be split up and needed to be
		included in both parts: The upper skull and the jar.`)},l(n){t=k(n,`That was "fun" using gradients for the teeth and nose. The linear-gradient creates the long
		parts of the teeth, using the background color and a transparent one in between. The background
		size and origin start it at the appropriate pixels. The radial-gradients sit on top of these
		teeth to create the rounded part of the teeth. The nose had to be split up and needed to be
		included in both parts: The upper skull and the jar.`)},m(n,e){h(n,t,e)},d(n){n&&x(t)}}}function v(i){let t,n,e,r;return t=new y({props:{title:"Puzzle 56 solution",solution:i[0]}}),e=new T({props:{$$slots:{default:[F]},$$scope:{ctx:i}}}),{c(){s(t.$$.fragment),n=b(),s(e.$$.fragment)},l(a){p(t.$$.fragment,a),n=_(a),p(e.$$.fragment,a)},m(a,o){l(t,a,o),h(a,n,o),l(e,a,o),r=!0},p(a,o){const g={};o&2&&(g.$$scope={dirty:o,ctx:a}),e.$set(g)},i(a){r||(d(t.$$.fragment,a),d(e.$$.fragment,a),r=!0)},o(a){c(t.$$.fragment,a),c(e.$$.fragment,a),r=!1},d(a){u(t,a),a&&x(n),u(e,a)}}}function P(i){let t,n;return t=new w({props:{title:"Skull",$$slots:{default:[v]},$$scope:{ctx:i}}}),{c(){s(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,r){l(t,e,r),n=!0},p(e,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){u(t,e)}}}function S(i){return[`<div class=skull>
  <div class=top></div>
  <div class=bottom></div>
</div>
<style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  .skull {
    display: grid;
    place-items: center;
  }
  .skull>* {
    background: #4F77FF;
    height: 100px;
    width: 120px;
  }
  .top {
    border-radius: 60px 60px 10px 10px;
    background:
      radial-gradient(circle at 35px 73px, #191919 20px, #0000 0),
      radial-gradient(circle at 85px 73px, #191919 20px, #0000 0),
      radial-gradient(circle at 60px 101px, #191919 10px, #0000 0),
      #4F77FF
    ;
  }
  .bottom {
    width: 80px;
    height: 30px;
    border-radius: 0 0 20px 20px;
    background:
      linear-gradient(90deg, #191919 10px, #0000 0 15px, #191919 0 25px, #0000 0 30px, #191919 0) 20px 25px / 40px 5px no-repeat,
      radial-gradient(circle at 40px 1px, #191919 10px, #0000 0),
      radial-gradient(circle at 25px 25px, #191919 5px, #0000 0),
      radial-gradient(circle at 40px 25px, #191919 5px, #0000 0),
      radial-gradient(circle at 55px 25px, #191919 5px, #0000 0),
      #4F77FF
    ;
  }
</style>`]}class A extends f{constructor(t){super(),$(this,t,S,P,m,{})}}export{A as component};
