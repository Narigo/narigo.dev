import{s as $,a as h,c as x,i as g,d as f,l as _,m as b}from"../chunks/scheduler.8784edd5.js";import{S as y,i as F,b as s,d as l,m as p,a as c,t as u,e as d}from"../chunks/index.32600fc5.js";import{N as w}from"../chunks/Narigo.46b84240.js";import{P as z,a as v}from"../chunks/PuzzlePageLayout.df6f0bec.js";function P(n){let t;return{c(){t=_(`First time that David joined and he actually managed to get it done on time! My solution here
		uses radial gradients again, but it's always hard for me to get the right values where the
		circles need to be put in order to get this half circle shape. Especially when you have to take
		rotation into account as well...!`)},l(o){t=b(o,`First time that David joined and he actually managed to get it done on time! My solution here
		uses radial gradients again, but it's always hard for me to get the right values where the
		circles need to be put in order to get this half circle shape. Especially when you have to take
		rotation into account as well...!`)},m(o,e){g(o,t,e)},d(o){o&&f(t)}}}function k(n){let t,o,e,r;return t=new v({props:{title:"Puzzle 64 solution",solution:n[0]}}),e=new w({props:{$$slots:{default:[P]},$$scope:{ctx:n}}}),{c(){s(t.$$.fragment),o=h(),s(e.$$.fragment)},l(a){l(t.$$.fragment,a),o=x(a),l(e.$$.fragment,a)},m(a,i){p(t,a,i),g(a,o,i),p(e,a,i),r=!0},p(a,i){const m={};i&2&&(m.$$scope={dirty:i,ctx:a}),e.$set(m)},i(a){r||(c(t.$$.fragment,a),c(e.$$.fragment,a),r=!0)},o(a){u(t.$$.fragment,a),u(e.$$.fragment,a),r=!1},d(a){a&&f(o),d(t,a),d(e,a)}}}function D(n){let t,o;return t=new z({props:{title:"Door Knob",$$slots:{default:[k]},$$scope:{ctx:n}}}),{c(){s(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,r){p(t,e,r),o=!0},p(e,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){o||(c(t.$$.fragment,e),o=!0)},o(e){u(t.$$.fragment,e),o=!1},d(e){d(t,e)}}}function E(n){return[`<div></div>
<style>
  body {
    background: #191919;
    display: grid;
    place-items:center;
  }
  div {
    background: #E08027;
    border:30px solid #824B20;
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  div:after {
    content: '';
    position: absolute;
    margin: -10px;
    height: 80px;
    width: 80px;
    border: 20px solid #FFF58F;
    border-top-color: transparent;
    border-left-color: transparent;
    border-radius: 50%;
    background:
      radial-gradient(circle at 80px 80px, #FFF58F 10px, #0000 0) -5px -75px / 200% 200% no-repeat,
      radial-gradient(circle at 80px 80px, #FFF58F 10px, #0000 0) -75px -5px / 200% 200% no-repeat
    ;
    rotate: 45deg;
  }
</style>
`]}class q extends y{constructor(t){super(),F(this,t,E,D,$,{})}}export{q as component};
