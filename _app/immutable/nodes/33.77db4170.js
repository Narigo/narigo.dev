import{s as P,a as k,c as C,i as $,d as u,l as p,m}from"../chunks/scheduler.750b9d5e.js";import{S as T,i as I,b as c,d,m as g,a as _,t as h,e as w}from"../chunks/index.369e6c44.js";import{C as v}from"../chunks/Code.f3febe66.js";import{N}from"../chunks/Narigo.2253bd05.js";import{P as S,a as U}from"../chunks/PuzzlePageLayout.50f89189.js";function q(l){let e;return{c(){e=p("0")},l(t){e=m(t,"0")},m(t,n){$(t,e,n)},d(t){t&&u(e)}}}function D(l){let e;return{c(){e=p("5")},l(t){e=m(t,"5")},m(t,n){$(t,e,n)},d(t){t&&u(e)}}}function F(l){let e;return{c(){e=p("px")},l(t){e=m(t,"px")},m(t,n){$(t,e,n)},d(t){t&&u(e)}}}function L(l){let e,t,n,r,o,a,f,b;return t=new v({props:{$$slots:{default:[q]},$$scope:{ctx:l}}}),r=new v({props:{$$slots:{default:[D]},$$scope:{ctx:l}}}),a=new v({props:{$$slots:{default:[F]},$$scope:{ctx:l}}}),{c(){e=p(`That was tricky! The numbers don't really line up well and it feels like there is something off
		now. Usually, the numbers end with a `),c(t.$$.fragment),n=p(" or at least "),c(r.$$.fragment),o=p(` when using
		`),c(a.$$.fragment),f=p(` values. I didn't want to deep dive into using other units to see whether ther is
		something else suited better for this.`)},l(s){e=m(s,`That was tricky! The numbers don't really line up well and it feels like there is something off
		now. Usually, the numbers end with a `),d(t.$$.fragment,s),n=m(s," or at least "),d(r.$$.fragment,s),o=m(s,` when using
		`),d(a.$$.fragment,s),f=m(s,` values. I didn't want to deep dive into using other units to see whether ther is
		something else suited better for this.`)},m(s,i){$(s,e,i),g(t,s,i),$(s,n,i),g(r,s,i),$(s,o,i),g(a,s,i),$(s,f,i),b=!0},p(s,i){const x={};i&2&&(x.$$scope={dirty:i,ctx:s}),t.$set(x);const z={};i&2&&(z.$$scope={dirty:i,ctx:s}),r.$set(z);const y={};i&2&&(y.$$scope={dirty:i,ctx:s}),a.$set(y)},i(s){b||(_(t.$$.fragment,s),_(r.$$.fragment,s),_(a.$$.fragment,s),b=!0)},o(s){h(t.$$.fragment,s),h(r.$$.fragment,s),h(a.$$.fragment,s),b=!1},d(s){s&&(u(e),u(n),u(o),u(f)),w(t,s),w(r,s),w(a,s)}}}function W(l){let e,t,n,r;return e=new U({props:{title:"Puzzle 43 solution",solution:l[0]}}),n=new N({props:{$$slots:{default:[L]},$$scope:{ctx:l}}}),{c(){c(e.$$.fragment),t=k(),c(n.$$.fragment)},l(o){d(e.$$.fragment,o),t=C(o),d(n.$$.fragment,o)},m(o,a){g(e,o,a),$(o,t,a),g(n,o,a),r=!0},p(o,a){const f={};a&2&&(f.$$scope={dirty:a,ctx:o}),n.$set(f)},i(o){r||(_(e.$$.fragment,o),_(n.$$.fragment,o),r=!0)},o(o){h(e.$$.fragment,o),h(n.$$.fragment,o),r=!1},d(o){o&&u(t),w(e,o),w(n,o)}}}function j(l){let e,t;return e=new S({props:{title:"Wrench",$$slots:{default:[W]},$$scope:{ctx:l}}}),{c(){c(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,r){g(e,n,r),t=!0},p(n,[r]){const o={};r&2&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){h(e.$$.fragment,n),t=!1},d(n){w(e,n)}}}function A(l){return[`<div class="wrap">
  <div class="l"></div>
  <div class="r"></div>
</div>
<style>
  body {
    background: #6592CF;
    margin: 0;
  }
  .wrap {
    inset: 30px 145px 28px;
    overflow: hidden;
    position: absolute;
  }
  .l,.r {
    border: 30px solid #243D83;
    border-radius: 70px;
    right: 40px;
    position: absolute;
    height: 182px;
    width: 90%;
  }
  .r {
    left: 40px;
  }
</style>`]}class K extends T{constructor(e){super(),I(this,e,A,j,P,{})}}export{K as component};
