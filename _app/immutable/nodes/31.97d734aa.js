import{s as x,a as b,c as _,i as r,d as l,l as g,f as w,m as h,g as z,A as y,y as v}from"../chunks/scheduler.52b7490a.js";import{S as C,i as I,b as d,d as u,m as p,a as c,t as f,e as m}from"../chunks/index.644eb738.js";import{N as k}from"../chunks/Narigo.e24b860c.js";import{P as A,a as P}from"../chunks/PuzzlePageLayout.389c71ed.js";function F(i){let e,n,o="-webkit-box-reflect",s;return{c(){e=g("Finally I had a puzzle where I could use "),n=w("code"),n.textContent=o,s=g(`. I now know that it
		doesn't span a size, so centering something is not as easy, if you want the reflection to be
		counted as well. I used selectors instead of classes and ids this time, just to not having to
		name the boxes.`)},l(t){e=h(t,"Finally I had a puzzle where I could use "),n=z(t,"CODE",{"data-svelte-h":!0}),y(n)!=="svelte-1g0pt19"&&(n.textContent=o),s=h(t,`. I now know that it
		doesn't span a size, so centering something is not as easy, if you want the reflection to be
		counted as well. I used selectors instead of classes and ids this time, just to not having to
		name the boxes.`)},m(t,a){r(t,e,a),r(t,n,a),r(t,s,a)},p:v,d(t){t&&(l(e),l(n),l(s))}}}function j(i){let e,n,o,s;return e=new P({props:{title:"Puzzle 45 solution",solution:i[0]}}),o=new k({props:{$$slots:{default:[F]},$$scope:{ctx:i}}}),{c(){d(e.$$.fragment),n=b(),d(o.$$.fragment)},l(t){u(e.$$.fragment,t),n=_(t),u(o.$$.fragment,t)},m(t,a){p(e,t,a),r(t,n,a),p(o,t,a),s=!0},p(t,a){const $={};a&2&&($.$$scope={dirty:a,ctx:t}),o.$set($)},i(t){s||(c(e.$$.fragment,t),c(o.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),f(o.$$.fragment,t),s=!1},d(t){t&&l(n),m(e,t),m(o,t)}}}function N(i){let e,n;return e=new A({props:{title:"Magical Tree",$$slots:{default:[j]},$$scope:{ctx:i}}}),{c(){d(e.$$.fragment)},l(o){u(e.$$.fragment,o)},m(o,s){p(e,o,s),n=!0},p(o,[s]){const t={};s&2&&(t.$$scope={dirty:s,ctx:o}),e.$set(t)},i(o){n||(c(e.$$.fragment,o),n=!0)},o(o){f(e.$$.fragment,o),n=!1},d(o){m(e,o)}}}function S(i){return[`<div>
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
`]}class M extends C{constructor(e){super(),I(this,e,S,N,x,{})}}export{M as component};
