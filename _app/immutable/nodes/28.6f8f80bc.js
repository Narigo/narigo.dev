import{S as D,i as T,s as O,y as x,z as y,A as b,g as z,d as k,B as E,a as q,c as I,b as u,h as a,q as m,k as _,r as c,l as w,m as g,G as v,H as N}from"../chunks/index.3d7f15fc.js";import{N as S}from"../chunks/Narigo.f2af5427.js";import{P as U,a as A}from"../chunks/PuzzlePageLayout.5cca13de.js";function B(f){let t,o,s,i,e,l,p,d,h,$;return{c(){t=m(`That was tricky! The numbers don't really line up well and it feels like there is something off
		now. Usually, the numbers end with a `),o=_("code"),s=m("0"),i=m(" or at least "),e=_("code"),l=m("5"),p=m(` when using
		`),d=_("code"),h=m("px"),$=m(` values. I didn't want to deep dive into using other units to see whether ther is
		something else suited better for this.`)},l(n){t=c(n,`That was tricky! The numbers don't really line up well and it feels like there is something off
		now. Usually, the numbers end with a `),o=w(n,"CODE",{});var r=g(o);s=c(r,"0"),r.forEach(a),i=c(n," or at least "),e=w(n,"CODE",{});var P=g(e);l=c(P,"5"),P.forEach(a),p=c(n,` when using
		`),d=w(n,"CODE",{});var C=g(d);h=c(C,"px"),C.forEach(a),$=c(n,` values. I didn't want to deep dive into using other units to see whether ther is
		something else suited better for this.`)},m(n,r){u(n,t,r),u(n,o,r),v(o,s),u(n,i,r),u(n,e,r),v(e,l),u(n,p,r),u(n,d,r),v(d,h),u(n,$,r)},p:N,d(n){n&&a(t),n&&a(o),n&&a(i),n&&a(e),n&&a(p),n&&a(d),n&&a($)}}}function F(f){let t,o,s,i;return t=new A({props:{title:"Puzzle 43 solution",solution:f[0]}}),s=new S({props:{$$slots:{default:[B]},$$scope:{ctx:f}}}),{c(){x(t.$$.fragment),o=q(),x(s.$$.fragment)},l(e){y(t.$$.fragment,e),o=I(e),y(s.$$.fragment,e)},m(e,l){b(t,e,l),u(e,o,l),b(s,e,l),i=!0},p(e,l){const p={};l&2&&(p.$$scope={dirty:l,ctx:e}),s.$set(p)},i(e){i||(z(t.$$.fragment,e),z(s.$$.fragment,e),i=!0)},o(e){k(t.$$.fragment,e),k(s.$$.fragment,e),i=!1},d(e){E(t,e),e&&a(o),E(s,e)}}}function G(f){let t,o;return t=new U({props:{title:"Wrench",$$slots:{default:[F]},$$scope:{ctx:f}}}),{c(){x(t.$$.fragment)},l(s){y(t.$$.fragment,s)},m(s,i){b(t,s,i),o=!0},p(s,[i]){const e={};i&2&&(e.$$scope={dirty:i,ctx:s}),t.$set(e)},i(s){o||(z(t.$$.fragment,s),o=!0)},o(s){k(t.$$.fragment,s),o=!1},d(s){E(t,s)}}}function H(f){return[`<div class="wrap">
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
</style>`]}class J extends D{constructor(t){super(),T(this,t,H,G,O,{})}}export{J as component};
