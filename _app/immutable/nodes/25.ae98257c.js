import{s as y,a as x,c as w,i as $,d as f,l as u,m as c}from"../chunks/scheduler.8784edd5.js";import{S as k,i as P,b as p,d as m,m as d,a as g,t as _,e as h}from"../chunks/index.32600fc5.js";import{C as z}from"../chunks/Code.f3cde525.js";import{N as C}from"../chunks/Narigo.46b84240.js";import{P as B,a as D}from"../chunks/PuzzlePageLayout.df6f0bec.js";function F(r){let t;return{c(){t=u("::before")},l(e){t=c(e,"::before")},m(e,n){$(e,t,n)},d(e){e&&f(t)}}}function I(r){let t;return{c(){t=u("::after")},l(e){t=c(e,"::after")},m(e,n){$(e,t,n)},d(e){e&&f(t)}}}function N(r){let t,e,n,s,o,i;return e=new z({props:{$$slots:{default:[F]},$$scope:{ctx:r}}}),s=new z({props:{$$slots:{default:[I]},$$scope:{ctx:r}}}),{c(){t=u("Ok, I initially thought that "),p(e.$$.fragment),n=u(" and "),p(s.$$.fragment),o=u(` could be used for nesting.
		But that's not really the case, so the rotation after rotating is not possible easily.`)},l(a){t=c(a,"Ok, I initially thought that "),m(e.$$.fragment,a),n=c(a," and "),m(s.$$.fragment,a),o=c(a,` could be used for nesting.
		But that's not really the case, so the rotation after rotating is not possible easily.`)},m(a,l){$(a,t,l),d(e,a,l),$(a,n,l),d(s,a,l),$(a,o,l),i=!0},p(a,l){const v={};l&2&&(v.$$scope={dirty:l,ctx:a}),e.$set(v);const b={};l&2&&(b.$$scope={dirty:l,ctx:a}),s.$set(b)},i(a){i||(g(e.$$.fragment,a),g(s.$$.fragment,a),i=!0)},o(a){_(e.$$.fragment,a),_(s.$$.fragment,a),i=!1},d(a){a&&(f(t),f(n),f(o)),h(e,a),h(s,a)}}}function O(r){let t,e,n,s;return t=new D({props:{title:"Puzzle 37 solution",solution:r[0]}}),n=new C({props:{$$slots:{default:[N]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment),e=x(),p(n.$$.fragment)},l(o){m(t.$$.fragment,o),e=w(o),m(n.$$.fragment,o)},m(o,i){d(t,o,i),$(o,e,i),d(n,o,i),s=!0},p(o,i){const a={};i&2&&(a.$$scope={dirty:i,ctx:o}),n.$set(a)},i(o){s||(g(t.$$.fragment,o),g(n.$$.fragment,o),s=!0)},o(o){_(t.$$.fragment,o),_(n.$$.fragment,o),s=!1},d(o){o&&f(e),h(t,o),h(n,o)}}}function S(r){let t,e;return t=new B({props:{title:"Tunnel",$$slots:{default:[O]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(n){m(t.$$.fragment,n)},m(n,s){d(t,n,s),e=!0},p(n,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:n}),t.$set(o)},i(n){e||(g(t.$$.fragment,n),e=!0)},o(n){_(t.$$.fragment,n),e=!1},d(n){h(t,n)}}}function q(r){return[`<div><div><div></div></div></div>
<style>
  body,div {
    background: #6592CF;
    display: grid;
    place-items: center;
    rotate: -15deg;
  }
  div {
    background: #243D83;
    height: 250px;
    width: 250px;
    rotate: 15deg;
  }
  div > div {
    background: #6592CF;
    height: 150px;
    width: 150px;
  }
  div > div > div {
    background: #243D83;
    height: 75px;
    width: 75px;
  }
</style>
`]}class G extends k{constructor(t){super(),P(this,t,q,S,y,{})}}export{G as component};
