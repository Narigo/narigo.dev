import{s as _,a as z,c as b,i as r,d as l,l as $,f as h,m as v,g as x,A as w,y}from"../chunks/scheduler.oS2FPi-b.js";import{S as k,i as P,b as d,d as p,m as c,a as u,t as m,e as f}from"../chunks/index.ICQ99_FX.js";import{N as C}from"../chunks/Narigo.cTuC28Fb.js";import{P as S,a as q}from"../chunks/PuzzlePageLayout.FY16PZR5.js";function F(s){let e,n,a="grid",i;return{c(){e=$(`Satoshi had the great idea to add a background and draw black zig-zag lines on top. I've done
		that with `),n=h("code"),n.textContent=a,i=$(" today and it felt quite nice 😅")},l(t){e=v(t,`Satoshi had the great idea to add a background and draw black zig-zag lines on top. I've done
		that with `),n=x(t,"CODE",{"data-svelte-h":!0}),w(n)!=="svelte-lwg1k8"&&(n.textContent=a),i=v(t," today and it felt quite nice 😅")},m(t,o){r(t,e,o),r(t,n,o),r(t,i,o)},p:y,d(t){t&&(l(e),l(n),l(i))}}}function E(s){let e,n,a,i;return e=new q({props:{title:"Puzzle 60 solution",solution:s[0]}}),a=new C({props:{$$slots:{default:[F]},$$scope:{ctx:s}}}),{c(){d(e.$$.fragment),n=z(),d(a.$$.fragment)},l(t){p(e.$$.fragment,t),n=b(t),p(a.$$.fragment,t)},m(t,o){c(e,t,o),r(t,n,o),c(a,t,o),i=!0},p(t,o){const g={};o&2&&(g.$$scope={dirty:o,ctx:t}),a.$set(g)},i(t){i||(u(e.$$.fragment,t),u(a.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),m(a.$$.fragment,t),i=!1},d(t){t&&l(n),f(e,t),f(a,t)}}}function I(s){let e,n;return e=new S({props:{title:"Evil Triangles",$$slots:{default:[E]},$$scope:{ctx:s}}}),{c(){d(e.$$.fragment)},l(a){p(e.$$.fragment,a)},m(a,i){c(e,a,i),n=!0},p(a,[i]){const t={};i&2&&(t.$$scope={dirty:i,ctx:a}),e.$set(t)},i(a){n||(u(e.$$.fragment,a),n=!0)},o(a){m(e.$$.fragment,a),n=!1},d(a){f(e,a)}}}function N(s){return[`<r>
<div a></div>
<div b></div>
<div a></div>
<div b></div>
<div a></div>
<div b></div>
<div a></div>
<div b></div>
</r>
<style>
  body {
    background:#191919;
    display: grid;
    place-items:center;
  }
  r{
    display: grid;
    place-items:center;
    background: #4F77FF;
    row-gap:50px;
    padding-top:25px;
    grid-template-columns: repeat(4, 50px);
    height: 125px;
  }
  [a],[b] {
    background: #191919;
    height:50px;
    width:50px;
    transform: skewY(45deg);
  }
  [b] {
    transform: skewY(-45deg);
  }
</style>`]}class O extends k{constructor(e){super(),P(this,e,N,I,_,{})}}export{O as component};
