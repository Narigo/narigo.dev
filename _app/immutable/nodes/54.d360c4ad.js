import{s as g,a as _,c as x,i as $,d as m,l as b,m as z}from"../chunks/scheduler.58de62d3.js";import{S as h,i as y,b as i,d as l,m as u,a as f,t as p,e as c}from"../chunks/index.698fb7dd.js";import{N as w}from"../chunks/Narigo.08d9f4ea.js";import{P as v,a as I}from"../chunks/PuzzlePageLayout.9c2722f4.js";function P(r){let e;return{c(){e=b(`That was fast and fun to work on. I learned that I can use body::before to get rid of an extra
		z-index if I'd used a div::before...!`)},l(n){e=z(n,`That was fast and fun to work on. I learned that I can use body::before to get rid of an extra
		z-index if I'd used a div::before...!`)},m(n,t){$(n,e,t)},d(n){n&&m(e)}}}function k(r){let e,n,t,o;return e=new I({props:{title:"Puzzle 68 solution",solution:r[0]}}),t=new w({props:{$$slots:{default:[P]},$$scope:{ctx:r}}}),{c(){i(e.$$.fragment),n=_(),i(t.$$.fragment)},l(a){l(e.$$.fragment,a),n=x(a),l(t.$$.fragment,a)},m(a,s){u(e,a,s),$(a,n,s),u(t,a,s),o=!0},p(a,s){const d={};s&2&&(d.$$scope={dirty:s,ctx:a}),t.$set(d)},i(a){o||(f(e.$$.fragment,a),f(t.$$.fragment,a),o=!0)},o(a){p(e.$$.fragment,a),p(t.$$.fragment,a),o=!1},d(a){a&&m(n),c(e,a),c(t,a)}}}function B(r){let e,n;return e=new v({props:{title:"Bell",$$slots:{default:[k]},$$scope:{ctx:r}}}),{c(){i(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,o){u(e,t,o),n=!0},p(t,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){c(e,t)}}}function N(r){return[`<div></div>
<style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  div {
    position:relative;
    width: 120px;
    height: 120px;
    background: #E08027;
    border-radius: 50% 50% 10px 10px;
  }
  body::before {
    content:'';
    position:absolute;
    height:170px;
    width:50px;
    background: linear-gradient(#F2AD43 50%, #824B20 0);
    border-radius: 50px;
    top: 65px;
    left: 175px;
  }
</style>`]}class C extends h{constructor(e){super(),y(this,e,N,B,g,{})}}export{C as component};
