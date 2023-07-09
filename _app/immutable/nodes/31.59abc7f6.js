import{S as x,i as b,s as w,y as u,z as c,A as f,g as m,d as $,B as g,a as _,c as z,b as l,h as r,q as d,k as y,r as p,l as v,m as k,G as I,H as A}from"../chunks/index.b1660a48.js";import{N as C}from"../chunks/Narigo.1c5e5246.js";import{P,a as F}from"../chunks/PuzzlePageLayout.fbe6c2ec.js";function j(i){let t,s,o,n;return{c(){t=d("Finally I had a puzzle where I could use "),s=y("code"),o=d("-webkit-box-reflect"),n=d(`. I now know that it
		doesn't span a size, so centering something is not as easy, if you want the reflection to be
		counted as well. I used selectors instead of classes and ids this time, just to not having to
		name the boxes.`)},l(e){t=p(e,"Finally I had a puzzle where I could use "),s=v(e,"CODE",{});var a=k(s);o=p(a,"-webkit-box-reflect"),a.forEach(r),n=p(e,`. I now know that it
		doesn't span a size, so centering something is not as easy, if you want the reflection to be
		counted as well. I used selectors instead of classes and ids this time, just to not having to
		name the boxes.`)},m(e,a){l(e,t,a),l(e,s,a),I(s,o),l(e,n,a)},p:A,d(e){e&&r(t),e&&r(s),e&&r(n)}}}function q(i){let t,s,o,n;return t=new F({props:{title:"Puzzle 45 solution",solution:i[0]}}),o=new C({props:{$$slots:{default:[j]},$$scope:{ctx:i}}}),{c(){u(t.$$.fragment),s=_(),u(o.$$.fragment)},l(e){c(t.$$.fragment,e),s=z(e),c(o.$$.fragment,e)},m(e,a){f(t,e,a),l(e,s,a),f(o,e,a),n=!0},p(e,a){const h={};a&2&&(h.$$scope={dirty:a,ctx:e}),o.$set(h)},i(e){n||(m(t.$$.fragment,e),m(o.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),$(o.$$.fragment,e),n=!1},d(e){g(t,e),e&&r(s),g(o,e)}}}function E(i){let t,s;return t=new P({props:{title:"Magical Tree",$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){u(t.$$.fragment)},l(o){c(t.$$.fragment,o)},m(o,n){f(t,o,n),s=!0},p(o,[n]){const e={};n&2&&(e.$$scope={dirty:n,ctx:o}),t.$set(e)},i(o){s||(m(t.$$.fragment,o),s=!0)},o(o){$(t.$$.fragment,o),s=!1},d(o){g(t,o)}}}function N(i){return[`<div>
  <div></div>
</div>
<dt></dt>
<style>
  body {
    background: #1A4341;
    box-sizing: border-box;
    border-left: 65px solid #1A4341;
    margin: 0;
  }
  body>div {
    border: 30px solid #F3AC3C;
    border-top-width: 0;
    border-right-width: 15px;
    display: flex;
    justify-content: flex-end;
    width: 90px;
    height: 180px;
    -webkit-box-reflect: right;
  }
  div>div {
    border-left: 30px solid #998235;
    border-bottom: 30px solid #998235;
    height: 120px;
    width: 30px;
  }
  dt {
    background: linear-gradient(#1A4341 30px, #998235 0 60px, #1A4341 30px);
    border-right: 15px solid #F3AC3C;
    height: 90px;
    width: 120px;
    -webkit-box-reflect: right;
  }
</style>
`]}class G extends x{constructor(t){super(),b(this,t,N,E,w,{})}}export{G as component};
