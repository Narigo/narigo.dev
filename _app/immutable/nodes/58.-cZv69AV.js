import{s as g,a as h,c as b,i as c,d as $,l as x,m as _}from"../chunks/scheduler.FpTo3f1Q.js";import{S as v,i as z,b as n,d as l,m as p,a as u,t as d,e as f}from"../chunks/index.Fxw16eHx.js";import{N as w}from"../chunks/Narigo.4vFYHBHa.js";import{P as y,a as I}from"../chunks/PuzzlePageLayout.5HoZM6YW.js";function k(a){let t;return{c(){t=x(`I missed doing this puzzle with VirtualCoffee, so I had to do this on my own. After lots of
		tinkering with the pixel values, I got a 100% solution. I have to admit I don't like having
		pixel values like this. There is probably a better way to solve this!`)},l(i){t=_(i,`I missed doing this puzzle with VirtualCoffee, so I had to do this on my own. After lots of
		tinkering with the pixel values, I got a 100% solution. I have to admit I don't like having
		pixel values like this. There is probably a better way to solve this!`)},m(i,e){c(i,t,e)},d(i){i&&$(t)}}}function P(a){let t,i,e,s;return t=new I({props:{title:"Puzzle 69 solution",solution:a[0]}}),e=new w({props:{$$slots:{default:[k]},$$scope:{ctx:a}}}),{c(){n(t.$$.fragment),i=h(),n(e.$$.fragment)},l(o){l(t.$$.fragment,o),i=b(o),l(e.$$.fragment,o)},m(o,r){p(t,o,r),c(o,i,r),p(e,o,r),s=!0},p(o,r){const m={};r&2&&(m.$$scope={dirty:r,ctx:o}),e.$set(m)},i(o){s||(u(t.$$.fragment,o),u(e.$$.fragment,o),s=!0)},o(o){d(t.$$.fragment,o),d(e.$$.fragment,o),s=!1},d(o){o&&$(i),f(t,o),f(e,o)}}}function C(a){let t,i;return t=new y({props:{title:"PushOwl",$$slots:{default:[P]},$$scope:{ctx:a}}}),{c(){n(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,s){p(t,e,s),i=!0},p(e,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){i||(u(t.$$.fragment,e),i=!0)},o(e){d(t.$$.fragment,e),i=!1},d(e){f(t,e)}}}function E(a){return[`<r>
  <div l></div>
  <p></p>
  <div r></div>
</r>
<style>
  body {
    background:#191919;
    display: grid;
    place-items:center;
  }
  r {
    width:242px;
    height:166px;
    position:relative;
  }
  p{
    position:absolute;
    background: #E08027;
    bottom:5px;
    left:95px;
    rotate:45deg;
    height:50px;
    width:50px;
  }
  div {
    position:absolute;
    box-sizing:border-box;
    width: 134px;
    height: 134px;
    background:
      radial-gradient(#191919 45px, #E08027 0),
      #dd6b4d;
    border:10px solid #191919;
    border-radius: 0 50% 50%;
  }
  div::after {
    content: '';
    position:absolute;
    inset: 48px 41px;
    height: 10px;
    width: 12px;
    border: 10px solid #E08027;
    border-radius:50%;
    border-top-color: #0000;
    border-left-color: #0000;
    rotate:225deg
  }
  [r]{
    right:0;
    transform:scale(-1, 1);
  }
</style>`]}class V extends v{constructor(t){super(),z(this,t,E,C,g,{})}}export{V as component};
