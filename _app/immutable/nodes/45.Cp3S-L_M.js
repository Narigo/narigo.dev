import{s as C,b as h,j as _,k as c,i as g,t as w,h as x}from"../chunks/scheduler.Bz19wuGf.js";import{S as I,i as P,c as u,b as f,m as d,t as $,a as m,d as p}from"../chunks/index.D0WKZCG1.js";import{N as S}from"../chunks/Narigo.CFWsiWya.js";import{P as A,a as k}from"../chunks/PuzzlePageLayout.DpbzXGiT.js";function B(a){let e;return{c(){e=w(`It looks like I've done this puzzle multiple times. This is the first solution available to me
		in CSSBattle.dev.`)},l(i){e=x(i,`It looks like I've done this puzzle multiple times. This is the first solution available to me
		in CSSBattle.dev.`)},m(i,o){c(i,e,o)},d(i){i&&g(e)}}}function T(a){let e;return{c(){e=w(`This is the second solution, half a year later. Is it better or worse now...? Since it's been
		half a year already, I should maybe do it a third time...`)},l(i){e=x(i,`This is the second solution, half a year later. Is it better or worse now...? Since it's been
		half a year already, I should maybe do it a third time...`)},m(i,o){c(i,e,o)},d(i){i&&g(e)}}}function F(a){let e,i,o,r,n,b,l,v;return e=new k({props:{title:"Puzzle 5 solution",solution:a[0]}}),o=new S({props:{$$slots:{default:[B]},$$scope:{ctx:a}}}),n=new k({props:{title:"Second solution for puzzle 5",solution:a[1]}}),l=new S({props:{$$slots:{default:[T]},$$scope:{ctx:a}}}),{c(){u(e.$$.fragment),i=h(),u(o.$$.fragment),r=h(),u(n.$$.fragment),b=h(),u(l.$$.fragment)},l(t){f(e.$$.fragment,t),i=_(t),f(o.$$.fragment,t),r=_(t),f(n.$$.fragment,t),b=_(t),f(l.$$.fragment,t)},m(t,s){d(e,t,s),c(t,i,s),d(o,t,s),c(t,r,s),d(n,t,s),c(t,b,s),d(l,t,s),v=!0},p(t,s){const z={};s&4&&(z.$$scope={dirty:s,ctx:t}),o.$set(z);const y={};s&4&&(y.$$scope={dirty:s,ctx:t}),l.$set(y)},i(t){v||($(e.$$.fragment,t),$(o.$$.fragment,t),$(n.$$.fragment,t),$(l.$$.fragment,t),v=!0)},o(t){m(e.$$.fragment,t),m(o.$$.fragment,t),m(n.$$.fragment,t),m(l.$$.fragment,t),v=!1},d(t){t&&(g(i),g(r),g(b)),p(e,t),p(o,t),p(n,t),p(l,t)}}}function N(a){let e,i;return e=new A({props:{title:"Acid Rain",$$slots:{default:[F]},$$scope:{ctx:a}}}),{c(){u(e.$$.fragment)},l(o){f(e.$$.fragment,o)},m(o,r){d(e,o,r),i=!0},p(o,[r]){const n={};r&4&&(n.$$scope={dirty:r,ctx:o}),e.$set(n)},i(o){i||($(e.$$.fragment,o),i=!0)},o(o){m(e.$$.fragment,o),i=!1},d(o){p(e,o)}}}function j(a){return[`<div class="c r"></div>
<div class="d m"></div>
<div class="d l"></div>
<style>
  body {margin:0;background:#0B2429;}
  div {
    position: absolute;
    width: 120px;
    height: 120px;
    background: #F3AC3C;
    border-radius: 50%;
  }
  .m {
    background: #998235;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }
  .c {
    bottom: 50%;
    left: 50%;
  }
  .d {
    border-top-right-radius: 0;
  }
  .l {
    top: 50%;
    right: 50%;
  }
</style>
`,`<div></div>
<div id=b></div>
<style>
  body {background: #0B2429;display: grid;place-items:center;}
  #b {
    position: absolute;
    transform: scale(-1);
    z-index: -1;
  }
  div {
    background: #F3AC3C;
    border-radius: 50% 0 50% 50%;
    position: relative;
    height: 120px;
    width: 120px;
  }
  div:before,div:after {
    border-radius: 50% 0;
    content: '';
    inset: 0;
    position: absolute;
  }
  div:before {
    background: #998235;
  }
  div:after {
    background: #F3AC3C;
    inset: 60px 60px -60px -60px;
    border-radius: 50% 0 50% 50%;
  }
</style>
`]}class E extends I{constructor(e){super(),P(this,e,j,N,C,{})}}export{E as component};
