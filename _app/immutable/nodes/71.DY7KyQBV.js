import{s as _,b as v,j as h,k as l,i as u,t as g,h as b}from"../chunks/scheduler.Ct-hQNXS.js";import{S as w,i as x,c as p,b as d,m as f,t as $,a as c,d as m}from"../chunks/index.DAUMTxUj.js";import{C as y}from"../chunks/Code.x-nWcPNg.js";import{N as k}from"../chunks/Narigo.DCh2BCzZ.js";import{P as z,a as P}from"../chunks/PuzzlePageLayout.DzOxJxqk.js";function F(i){let e;return{c(){e=g("-webkit-box-reflect")},l(r){e=b(r,"-webkit-box-reflect")},m(r,o){l(r,e,o)},d(r){r&&u(e)}}}function I(i){let e,r,o,n;return r=new y({props:{$$slots:{default:[F]},$$scope:{ctx:i}}}),{c(){e=g("I've tried using "),p(r.$$.fragment),o=g(`, but it doesn't seem to work out with absolute
		positioning...? Anyways, I think the main idea here is using border radius in pixels and
		percentages to get to 100%.`)},l(t){e=b(t,"I've tried using "),d(r.$$.fragment,t),o=b(t,`, but it doesn't seem to work out with absolute
		positioning...? Anyways, I think the main idea here is using border radius in pixels and
		percentages to get to 100%.`)},m(t,s){l(t,e,s),f(r,t,s),l(t,o,s),n=!0},p(t,s){const a={};s&2&&(a.$$scope={dirty:s,ctx:t}),r.$set(a)},i(t){n||($(r.$$.fragment,t),n=!0)},o(t){c(r.$$.fragment,t),n=!1},d(t){t&&(u(e),u(o)),m(r,t)}}}function A(i){let e,r,o,n;return e=new P({props:{title:"Puzzle 75 solution",solution:i[0]}}),o=new k({props:{$$slots:{default:[I]},$$scope:{ctx:i}}}),{c(){p(e.$$.fragment),r=v(),p(o.$$.fragment)},l(t){d(e.$$.fragment,t),r=h(t),d(o.$$.fragment,t)},m(t,s){f(e,t,s),l(t,r,s),f(o,t,s),n=!0},p(t,s){const a={};s&2&&(a.$$scope={dirty:s,ctx:t}),o.$set(a)},i(t){n||($(e.$$.fragment,t),$(o.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),c(o.$$.fragment,t),n=!1},d(t){t&&u(r),m(e,t),m(o,t)}}}function C(i){let e,r;return e=new z({props:{title:"Hippo",$$slots:{default:[A]},$$scope:{ctx:i}}}),{c(){p(e.$$.fragment)},l(o){d(e.$$.fragment,o)},m(o,n){f(e,o,n),r=!0},p(o,[n]){const t={};n&2&&(t.$$scope={dirty:n,ctx:o}),e.$set(t)},i(o){r||($(e.$$.fragment,o),r=!0)},o(o){c(e.$$.fragment,o),r=!1},d(o){m(e,o)}}}function E(i){return[`<div l></div>
<div l r></div>
<div h></div>
<div y></div>
<div y r></div>
<div s></div>
<div l n></div>
<div l n r></div>
<style>
  body{background:#191919}
  div {
    position:absolute;
    background: #FE5F55;
    height: var(--h);
    width: var(--w);
  }
  [h] {
    top:75;
    left:135;
    border-radius:60px;
    --h:150px;
    --w:130px;
  }
  [s] {
    background:#A64942;
    top:145;
    left:125;
    border-radius:70px 70px 55px 55px;
    --h:100;
    --w:150;
  }
  [y] {
    top:125;
    left:160;
    background:#000;
    border-radius:50%;
    --h:10;
    --w:10;
  }
  [l] {
    background:#000;
    top:75;
    left:145;
    border-radius:50%;
    border: 5px solid #FE5F55;
    rotate:45deg;
    --h:10;
    --w:20;
  }
  [n] {
    border-color: #0000;
    top:170;
    rotate:-45deg
  }
  [r] {
    left:225;
    transform:rotate(90deg);
  }
  [y]+[r] {
    left:230;
  }
</style>
`]}class L extends w{constructor(e){super(),x(this,e,E,C,_,{})}}export{L as component};
