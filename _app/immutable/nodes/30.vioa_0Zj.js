import{s as I,a as w,c as x,i as $,d,l as _,m as v,f as P,g as F,A as S}from"../chunks/scheduler.FpTo3f1Q.js";import{S as A,i as B,b as f,d as p,m as c,a as g,t as b,e as h}from"../chunks/index.Fxw16eHx.js";import{C as D}from"../chunks/Code.HXiWHTHH.js";import{N as y}from"../chunks/Narigo.4vFYHBHa.js";import{P as N,a as C}from"../chunks/PuzzlePageLayout.5HoZM6YW.js";function T(u){let e;return{c(){e=_(`In my first solution I used regular positioning and thought the left-bottom and middle one were
		of similar shape.`)},l(o){e=v(o,`In my first solution I used regular positioning and thought the left-bottom and middle one were
		of similar shape.`)},m(o,s){$(o,e,s)},d(o){o&&d(e)}}}function X(u){let e;return{c(){e=_("scale(-1)")},l(o){e=v(o,"scale(-1)")},m(o,s){$(o,e,s)},d(o){o&&d(e)}}}function Y(u){let e,o,s="-webkit-box-reflect",a,i,m,l;return i=new D({props:{$$slots:{default:[X]},$$scope:{ctx:u}}}),{c(){e=_("The second time I solved this, I was looking into ways how to mirror this. I wanted to use "),o=P("code"),o.textContent=s,a=_(`
		but it looks like it can only mirror on the X or the Y axis - not both at the same time. So I resorted
		to the `),f(i.$$.fragment),m=_(" trick. For this to work, the boxes needed to be duplicated.")},l(n){e=v(n,"The second time I solved this, I was looking into ways how to mirror this. I wanted to use "),o=F(n,"CODE",{"data-svelte-h":!0}),S(o)!=="svelte-zmhji"&&(o.textContent=s),a=v(n,`
		but it looks like it can only mirror on the X or the Y axis - not both at the same time. So I resorted
		to the `),p(i.$$.fragment,n),m=v(n," trick. For this to work, the boxes needed to be duplicated.")},m(n,t){$(n,e,t),$(n,o,t),$(n,a,t),c(i,n,t),$(n,m,t),l=!0},p(n,t){const r={};t&4&&(r.$$scope={dirty:t,ctx:n}),i.$set(r)},i(n){l||(g(i.$$.fragment,n),l=!0)},o(n){b(i.$$.fragment,n),l=!1},d(n){n&&(d(e),d(o),d(a),d(m)),h(i,n)}}}function j(u){let e,o,s,a,i,m,l,n;return e=new C({props:{title:"Puzzle 4 solution",solution:u[0]}}),s=new y({props:{$$slots:{default:[T]},$$scope:{ctx:u}}}),i=new C({props:{title:"Second solution for puzzle 4",solution:u[1]}}),l=new y({props:{$$slots:{default:[Y]},$$scope:{ctx:u}}}),{c(){f(e.$$.fragment),o=w(),f(s.$$.fragment),a=w(),f(i.$$.fragment),m=w(),f(l.$$.fragment)},l(t){p(e.$$.fragment,t),o=x(t),p(s.$$.fragment,t),a=x(t),p(i.$$.fragment,t),m=x(t),p(l.$$.fragment,t)},m(t,r){c(e,t,r),$(t,o,r),c(s,t,r),$(t,a,r),c(i,t,r),$(t,m,r),c(l,t,r),n=!0},p(t,r){const k={};r&4&&(k.$$scope={dirty:r,ctx:t}),s.$set(k);const z={};r&4&&(z.$$scope={dirty:r,ctx:t}),l.$set(z)},i(t){n||(g(e.$$.fragment,t),g(s.$$.fragment,t),g(i.$$.fragment,t),g(l.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),b(s.$$.fragment,t),b(i.$$.fragment,t),b(l.$$.fragment,t),n=!1},d(t){t&&(d(o),d(a),d(m)),h(e,t),h(s,t),h(i,t),h(l,t)}}}function q(u){let e,o;return e=new N({props:{title:"Ups n Downs",$$slots:{default:[j]},$$scope:{ctx:u}}}),{c(){f(e.$$.fragment)},l(s){p(e.$$.fragment,s)},m(s,a){c(e,s,a),o=!0},p(s,[a]){const i={};a&4&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){b(e.$$.fragment,s),o=!1},d(s){h(e,s)}}}function E(u){return[`<div class="c r"></div>
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
`]}class J extends A{constructor(e){super(),B(this,e,E,q,I,{})}}export{J as component};
