import{s as P,a as k,c as D,i as a,d as r,l as c,f as h,m as $,g,A as _,y as T}from"../chunks/scheduler.52b7490a.js";import{S as E,i as O,b as w,d as x,m as v,a as C,t as b,e as y}from"../chunks/index.644eb738.js";import{N as I}from"../chunks/Narigo.e24b860c.js";import{P as N,a as S}from"../chunks/PuzzlePageLayout.389c71ed.js";function U(u){let e,s,n="0",l,t,i="5",p,f,z="px",d;return{c(){e=c(`That was tricky! The numbers don't really line up well and it feels like there is something off
		now. Usually, the numbers end with a `),s=h("code"),s.textContent=n,l=c(" or at least "),t=h("code"),t.textContent=i,p=c(` when using
		`),f=h("code"),f.textContent=z,d=c(` values. I didn't want to deep dive into using other units to see whether ther is
		something else suited better for this.`)},l(o){e=$(o,`That was tricky! The numbers don't really line up well and it feels like there is something off
		now. Usually, the numbers end with a `),s=g(o,"CODE",{"data-svelte-h":!0}),_(s)!=="svelte-1dewtgu"&&(s.textContent=n),l=$(o," or at least "),t=g(o,"CODE",{"data-svelte-h":!0}),_(t)!=="svelte-1in232v"&&(t.textContent=i),p=$(o,` when using
		`),f=g(o,"CODE",{"data-svelte-h":!0}),_(f)!=="svelte-wl9nl8"&&(f.textContent=z),d=$(o,` values. I didn't want to deep dive into using other units to see whether ther is
		something else suited better for this.`)},m(o,m){a(o,e,m),a(o,s,m),a(o,l,m),a(o,t,m),a(o,p,m),a(o,f,m),a(o,d,m)},p:T,d(o){o&&(r(e),r(s),r(l),r(t),r(p),r(f),r(d))}}}function q(u){let e,s,n,l;return e=new S({props:{title:"Puzzle 43 solution",solution:u[0]}}),n=new I({props:{$$slots:{default:[U]},$$scope:{ctx:u}}}),{c(){w(e.$$.fragment),s=k(),w(n.$$.fragment)},l(t){x(e.$$.fragment,t),s=D(t),x(n.$$.fragment,t)},m(t,i){v(e,t,i),a(t,s,i),v(n,t,i),l=!0},p(t,i){const p={};i&2&&(p.$$scope={dirty:i,ctx:t}),n.$set(p)},i(t){l||(C(e.$$.fragment,t),C(n.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),l=!1},d(t){t&&r(s),y(e,t),y(n,t)}}}function A(u){let e,s;return e=new N({props:{title:"Wrench",$$slots:{default:[q]},$$scope:{ctx:u}}}),{c(){w(e.$$.fragment)},l(n){x(e.$$.fragment,n)},m(n,l){v(e,n,l),s=!0},p(n,[l]){const t={};l&2&&(t.$$scope={dirty:l,ctx:n}),e.$set(t)},i(n){s||(C(e.$$.fragment,n),s=!0)},o(n){b(e.$$.fragment,n),s=!1},d(n){y(e,n)}}}function F(u){return[`<div class="wrap">
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
</style>`]}class G extends E{constructor(e){super(),O(this,e,F,A,P,{})}}export{G as component};
