import{s as C,a as _,c as h,i as c,d as g,l as w,m as x}from"../chunks/scheduler.oS2FPi-b.js";import{S as I,i as P,b as u,d,m as f,a as $,t as m,e as p}from"../chunks/index.ICQ99_FX.js";/* empty css                                                   */import{N as S}from"../chunks/Narigo.cTuC28Fb.js";import{P as A,a as k}from"../chunks/PuzzlePageLayout.FY16PZR5.js";function B(a){let e;return{c(){e=w(`It looks like I've done this puzzle multiple times. This is the first solution available to me
		in CSSBattle.dev.`)},l(i){e=x(i,`It looks like I've done this puzzle multiple times. This is the first solution available to me
		in CSSBattle.dev.`)},m(i,o){c(i,e,o)},d(i){i&&g(e)}}}function T(a){let e;return{c(){e=w(`This is the second solution, half a year later. Is it better or worse now...? Since it's been
		half a year already, I should maybe do it a third time...`)},l(i){e=x(i,`This is the second solution, half a year later. Is it better or worse now...? Since it's been
		half a year already, I should maybe do it a third time...`)},m(i,o){c(i,e,o)},d(i){i&&g(e)}}}function F(a){let e,i,o,r,n,b,l,v;return e=new k({props:{title:"Puzzle 5 solution",solution:a[0]}}),o=new S({props:{$$slots:{default:[B]},$$scope:{ctx:a}}}),n=new k({props:{title:"Second solution for puzzle 5",solution:a[1]}}),l=new S({props:{$$slots:{default:[T]},$$scope:{ctx:a}}}),{c(){u(e.$$.fragment),i=_(),u(o.$$.fragment),r=_(),u(n.$$.fragment),b=_(),u(l.$$.fragment)},l(t){d(e.$$.fragment,t),i=h(t),d(o.$$.fragment,t),r=h(t),d(n.$$.fragment,t),b=h(t),d(l.$$.fragment,t)},m(t,s){f(e,t,s),c(t,i,s),f(o,t,s),c(t,r,s),f(n,t,s),c(t,b,s),f(l,t,s),v=!0},p(t,s){const z={};s&4&&(z.$$scope={dirty:s,ctx:t}),o.$set(z);const y={};s&4&&(y.$$scope={dirty:s,ctx:t}),l.$set(y)},i(t){v||($(e.$$.fragment,t),$(o.$$.fragment,t),$(n.$$.fragment,t),$(l.$$.fragment,t),v=!0)},o(t){m(e.$$.fragment,t),m(o.$$.fragment,t),m(n.$$.fragment,t),m(l.$$.fragment,t),v=!1},d(t){t&&(g(i),g(r),g(b)),p(e,t),p(o,t),p(n,t),p(l,t)}}}function N(a){let e,i;return e=new A({props:{title:"Acid Rain",$$slots:{default:[F]},$$scope:{ctx:a}}}),{c(){u(e.$$.fragment)},l(o){d(e.$$.fragment,o)},m(o,r){f(e,o,r),i=!0},p(o,[r]){const n={};r&4&&(n.$$scope={dirty:r,ctx:o}),e.$set(n)},i(o){i||($(e.$$.fragment,o),i=!0)},o(o){m(e.$$.fragment,o),i=!1},d(o){p(e,o)}}}function q(a){return[`<div class="c r"></div>
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
`]}class G extends I{constructor(e){super(),P(this,e,q,N,C,{})}}export{G as component};
