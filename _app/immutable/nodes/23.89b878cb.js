import{s as F,a as b,c as z,i as d,d as g,l as S,m as C}from"../chunks/scheduler.750b9d5e.js";import{S as k,i as P,b as l,d as u,m,a as p,t as f,e as c}from"../chunks/index.369e6c44.js";import{N as w}from"../chunks/Narigo.2253bd05.js";import{P as E,a as x}from"../chunks/PuzzlePageLayout.b66f79f7.js";function A(n){let t;return{c(){t=S("Using pseudo elements here to check the stacking seemed to be a good way to solve this.")},l(s){t=C(s,"Using pseudo elements here to check the stacking seemed to be a good way to solve this.")},m(s,o){d(s,t,o)},d(s){s&&g(t)}}}function D(n){let t;return{c(){t=S("Saturday CSS battle made me redo this with a gradient!")},l(s){t=C(s,"Saturday CSS battle made me redo this with a gradient!")},m(s,o){d(s,t,o)},d(s){s&&g(t)}}}function N(n){let t,s,o,i,r,_,$,v;return t=new x({props:{title:"Puzzle 34 solution",solution:n[0]}}),o=new w({props:{$$slots:{default:[A]},$$scope:{ctx:n}}}),r=new x({props:{title:"Puzzle 34 solution",solution:n[1]}}),$=new w({props:{$$slots:{default:[D]},$$scope:{ctx:n}}}),{c(){l(t.$$.fragment),s=b(),l(o.$$.fragment),i=b(),l(r.$$.fragment),_=b(),l($.$$.fragment)},l(e){u(t.$$.fragment,e),s=z(e),u(o.$$.fragment,e),i=z(e),u(r.$$.fragment,e),_=z(e),u($.$$.fragment,e)},m(e,a){m(t,e,a),d(e,s,a),m(o,e,a),d(e,i,a),m(r,e,a),d(e,_,a),m($,e,a),v=!0},p(e,a){const h={};a&4&&(h.$$scope={dirty:a,ctx:e}),o.$set(h);const y={};a&4&&(y.$$scope={dirty:a,ctx:e}),$.$set(y)},i(e){v||(p(t.$$.fragment,e),p(o.$$.fragment,e),p(r.$$.fragment,e),p($.$$.fragment,e),v=!0)},o(e){f(t.$$.fragment,e),f(o.$$.fragment,e),f(r.$$.fragment,e),f($.$$.fragment,e),v=!1},d(e){e&&(g(s),g(i),g(_)),c(t,e),c(o,e),c(r,e),c($,e)}}}function U(n){let t,s;return t=new E({props:{title:"Christmas Tree",$$slots:{default:[N]},$$scope:{ctx:n}}}),{c(){l(t.$$.fragment)},l(o){u(t.$$.fragment,o)},m(o,i){m(t,o,i),s=!0},p(o,[i]){const r={};i&4&&(r.$$scope={dirty:i,ctx:o}),t.$set(r)},i(o){s||(p(t.$$.fragment,o),s=!0)},o(o){f(t.$$.fragment,o),s=!1},d(o){c(t,o)}}}function q(n){return[`<div></div>
<style>
  body {
    background: #007065;
    --c: #00A79D;
  }
  div {
    inset: 25px 75px;
  }
  div::after {
    inset: -225px -125px;
    --c: #FFEECF;
  }
  div::before {
    inset: -175px -125px;
    --c: #F5C181;
  }
  div,div:after,div:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0;
    border: 125px solid transparent;
    border-bottom: 100px solid var(--c);
  }
</style>
`,`<div c></div>
<div b></div>
<div a></div>
<style>
  body {background:#007065}
  div {
    position: fixed;
    left: 75;
    width: 250;
    height:100;
    background: conic-gradient(at 50% 0, #0000 128.66deg, var(--c) 0 231.34deg, #0000 0);
  }
  [a] {
    --c:#FFEECF;
    top: 50;
  }
  [b] {
    --c: #F5C181;
    top: 100;
  }
  [c] {
    --c:#00A79D;
    top: 150;
  }
</style>
`]}class G extends k{constructor(t){super(),P(this,t,q,U,F,{})}}export{G as component};
