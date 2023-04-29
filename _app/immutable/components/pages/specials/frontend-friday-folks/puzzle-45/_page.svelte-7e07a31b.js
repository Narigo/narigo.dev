import{S as x,i as b,s as w,w as f,x as p,y as c,f as m,t as $,z as g,a as _,c as z,b as l,h as r,q as d,k as y,r as u,l as v,m as k,G as I,B as A}from"../../../../../chunks/index-ed5c000a.js";import{N as C}from"../../../../../chunks/Narigo-406ea8d0.js";import{P,a as F}from"../../../../../chunks/PuzzlePageLayout-93dc3336.js";function j(i){let e,s,o,n;return{c(){e=d("Finally I had a puzzle where I could use "),s=y("code"),o=d("-webkit-box-reflect"),n=d(`. I now know that it
		doesn't span a size, so centering something is not as easy, if you want the reflection to be
		counted as well. I used selectors instead of classes and ids this time, just to not having to
		name the boxes.`)},l(t){e=u(t,"Finally I had a puzzle where I could use "),s=v(t,"CODE",{});var a=k(s);o=u(a,"-webkit-box-reflect"),a.forEach(r),n=u(t,`. I now know that it
		doesn't span a size, so centering something is not as easy, if you want the reflection to be
		counted as well. I used selectors instead of classes and ids this time, just to not having to
		name the boxes.`)},m(t,a){l(t,e,a),l(t,s,a),I(s,o),l(t,n,a)},p:A,d(t){t&&r(e),t&&r(s),t&&r(n)}}}function q(i){let e,s,o,n;return e=new F({props:{title:"Puzzle 45 solution",solution:i[0]}}),o=new C({props:{$$slots:{default:[j]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment),s=_(),f(o.$$.fragment)},l(t){p(e.$$.fragment,t),s=z(t),p(o.$$.fragment,t)},m(t,a){c(e,t,a),l(t,s,a),c(o,t,a),n=!0},p(t,a){const h={};a&2&&(h.$$scope={dirty:a,ctx:t}),o.$set(h)},i(t){n||(m(e.$$.fragment,t),m(o.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),$(o.$$.fragment,t),n=!1},d(t){g(e,t),t&&r(s),g(o,t)}}}function E(i){let e,s;return e=new P({props:{title:"Magical Tree",$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment)},l(o){p(e.$$.fragment,o)},m(o,n){c(e,o,n),s=!0},p(o,[n]){const t={};n&2&&(t.$$scope={dirty:n,ctx:o}),e.$set(t)},i(o){s||(m(e.$$.fragment,o),s=!0)},o(o){$(e.$$.fragment,o),s=!1},d(o){g(e,o)}}}function N(i){return[`<div>
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
`]}class G extends x{constructor(e){super(),b(this,e,N,E,w,{})}}export{G as default};
