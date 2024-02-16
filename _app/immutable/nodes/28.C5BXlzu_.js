import{s as D,b as v,j as z,k as u,i as f,t as x,h as C}from"../chunks/scheduler.C0BfHF-J.js";import{S as N,i as U,c as p,b as c,m as d,t as g,a as _,d as b}from"../chunks/index.LRqrGZ80.js";import{N as F}from"../chunks/Narigo.DFshNKlD.js";import{P as j,a as S}from"../chunks/PuzzlePageLayout.DY1QgVke.js";function q(s){let e;return{c(){e=x("Using pseudo elements here to check the stacking seemed to be a good way to solve this.")},l(o){e=C(o,"Using pseudo elements here to check the stacking seemed to be a good way to solve this.")},m(o,a){u(o,e,a)},d(o){o&&f(e)}}}function L(s){let e;return{c(){e=x("Saturday CSS battle made me redo this with a gradient!")},l(o){e=C(o,"Saturday CSS battle made me redo this with a gradient!")},m(o,a){u(o,e,a)},d(o){o&&f(e)}}}function T(s){let e;return{c(){e=x("...and make it very small!")},l(o){e=C(o,"...and make it very small!")},m(o,a){u(o,e,a)},d(o){o&&f(e)}}}function B(s){let e,o,a,r,i,y,$,h,m,w,l,k;return e=new S({props:{title:"Puzzle 34 solution",solution:s[0]}}),a=new F({props:{$$slots:{default:[q]},$$scope:{ctx:s}}}),i=new S({props:{title:"Puzzle 34 solution",solution:s[1]}}),$=new F({props:{$$slots:{default:[L]},$$scope:{ctx:s}}}),m=new S({props:{title:"Puzzle 34 solution",solution:s[2]}}),l=new F({props:{$$slots:{default:[T]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),o=v(),p(a.$$.fragment),r=v(),p(i.$$.fragment),y=v(),p($.$$.fragment),h=v(),p(m.$$.fragment),w=v(),p(l.$$.fragment)},l(t){c(e.$$.fragment,t),o=z(t),c(a.$$.fragment,t),r=z(t),c(i.$$.fragment,t),y=z(t),c($.$$.fragment,t),h=z(t),c(m.$$.fragment,t),w=z(t),c(l.$$.fragment,t)},m(t,n){d(e,t,n),u(t,o,n),d(a,t,n),u(t,r,n),d(i,t,n),u(t,y,n),d($,t,n),u(t,h,n),d(m,t,n),u(t,w,n),d(l,t,n),k=!0},p(t,n){const P={};n&8&&(P.$$scope={dirty:n,ctx:t}),a.$set(P);const E={};n&8&&(E.$$scope={dirty:n,ctx:t}),$.$set(E);const A={};n&8&&(A.$$scope={dirty:n,ctx:t}),l.$set(A)},i(t){k||(g(e.$$.fragment,t),g(a.$$.fragment,t),g(i.$$.fragment,t),g($.$$.fragment,t),g(m.$$.fragment,t),g(l.$$.fragment,t),k=!0)},o(t){_(e.$$.fragment,t),_(a.$$.fragment,t),_(i.$$.fragment,t),_($.$$.fragment,t),_(m.$$.fragment,t),_(l.$$.fragment,t),k=!1},d(t){t&&(f(o),f(r),f(y),f(h),f(w)),b(e,t),b(a,t),b(i,t),b($,t),b(m,t),b(l,t)}}}function G(s){let e,o;return e=new j({props:{title:"Christmas Tree",$$slots:{default:[B]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(a){c(e.$$.fragment,a)},m(a,r){d(e,a,r),o=!0},p(a,[r]){const i={};r&8&&(i.$$scope={dirty:r,ctx:a}),e.$set(i)},i(a){o||(g(e.$$.fragment,a),o=!0)},o(a){_(e.$$.fragment,a),o=!1},d(a){b(e,a)}}}function H(s){return[`<div></div>
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
`,"<c><b><a><style>*{background:#007065}a,b,c{position:fixed;left:75;width:250;height:100;background:conic-gradient(at 50%0,#0000 128.66deg,var(--c)0 231.34deg,#0000 0)}a{--c:#FFEECF;top:50}b{--c:#F5C181;top:100}c{--c:#00A79D;top:150"]}class O extends N{constructor(e){super(),U(this,e,H,G,D,{})}}export{O as component};
