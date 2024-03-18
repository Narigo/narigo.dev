import{s as q,b as w,j as k,k as c,i as d,t as h,h as z,e as D,d as A,p as F,n as T}from"../chunks/scheduler.Bz19wuGf.js";import{S as j,i as I,c as f,b as $,m,t as b,a as v,d as _}from"../chunks/index.D0WKZCG1.js";import{N as P}from"../chunks/Narigo.D4GIj-7X.js";import{P as N,a as S}from"../chunks/PuzzlePageLayout.CqohPXvw.js";function L(u){let e;return{c(){e=h("Again, having lots of fun with gradients!")},l(i){e=z(i,"Again, having lots of fun with gradients!")},m(i,n){c(i,e,n)},d(i){i&&d(e)}}}function G(u){let e,i,n="10px",o,r,g="no-repeat",l;return{c(){e=h("There is a minor improvement with this, by moving the background position down by "),i=D("code"),i.textContent=n,o=h(`
		using
		`),r=D("code"),r.textContent=g,l=h(".")},l(a){e=z(a,"There is a minor improvement with this, by moving the background position down by "),i=A(a,"CODE",{"data-svelte-h":!0}),F(i)!=="svelte-r6l2ta"&&(i.textContent=n),o=z(a,`
		using
		`),r=A(a,"CODE",{"data-svelte-h":!0}),F(r)!=="svelte-mozcf9"&&(r.textContent=g),l=z(a,".")},m(a,s){c(a,e,s),c(a,i,s),c(a,o,s),c(a,r,s),c(a,l,s)},p:T,d(a){a&&(d(e),d(i),d(o),d(r),d(l))}}}function H(u){let e,i,n="conic-gradient",o,r,g="no-repeat",l;return{c(){e=h(`If using background size, it will let us save a few more characters. Still, it needs some kind
		of gradient to create an image first that can be set with background size.
		`),i=D("code"),i.textContent=n,o=h(" saves another char vs radial and linear. The "),r=D("code"),r.textContent=g,l=h(` is
		still necessary, to ensure the square won't fill the whole background again by repeating itself.`)},l(a){e=z(a,`If using background size, it will let us save a few more characters. Still, it needs some kind
		of gradient to create an image first that can be set with background size.
		`),i=A(a,"CODE",{"data-svelte-h":!0}),F(i)!=="svelte-1py0boj"&&(i.textContent=n),o=z(a," saves another char vs radial and linear. The "),r=A(a,"CODE",{"data-svelte-h":!0}),F(r)!=="svelte-mozcf9"&&(r.textContent=g),l=z(a,` is
		still necessary, to ensure the square won't fill the whole background again by repeating itself.`)},m(a,s){c(a,e,s),c(a,i,s),c(a,o,s),c(a,r,s),c(a,l,s)},p:T,d(a){a&&(d(e),d(i),d(o),d(r),d(l))}}}function J(u){let e,i,n,o,r,g,l,a,s,y,x,C;return e=new S({props:{title:"Puzzle 66 solution",solution:u[0]}}),n=new P({props:{$$slots:{default:[L]},$$scope:{ctx:u}}}),r=new S({props:{title:"Puzzle 66 solution",solution:u[1]}}),l=new P({props:{$$slots:{default:[G]},$$scope:{ctx:u}}}),s=new S({props:{title:"Puzzle 66 solution",solution:u[2]}}),x=new P({props:{$$slots:{default:[H]},$$scope:{ctx:u}}}),{c(){f(e.$$.fragment),i=w(),f(n.$$.fragment),o=w(),f(r.$$.fragment),g=w(),f(l.$$.fragment),a=w(),f(s.$$.fragment),y=w(),f(x.$$.fragment)},l(t){$(e.$$.fragment,t),i=k(t),$(n.$$.fragment,t),o=k(t),$(r.$$.fragment,t),g=k(t),$(l.$$.fragment,t),a=k(t),$(s.$$.fragment,t),y=k(t),$(x.$$.fragment,t)},m(t,p){m(e,t,p),c(t,i,p),m(n,t,p),c(t,o,p),m(r,t,p),c(t,g,p),m(l,t,p),c(t,a,p),m(s,t,p),c(t,y,p),m(x,t,p),C=!0},p(t,p){const B={};p&8&&(B.$$scope={dirty:p,ctx:t}),n.$set(B);const E={};p&8&&(E.$$scope={dirty:p,ctx:t}),l.$set(E);const O={};p&8&&(O.$$scope={dirty:p,ctx:t}),x.$set(O)},i(t){C||(b(e.$$.fragment,t),b(n.$$.fragment,t),b(r.$$.fragment,t),b(l.$$.fragment,t),b(s.$$.fragment,t),b(x.$$.fragment,t),C=!0)},o(t){v(e.$$.fragment,t),v(n.$$.fragment,t),v(r.$$.fragment,t),v(l.$$.fragment,t),v(s.$$.fragment,t),v(x.$$.fragment,t),C=!1},d(t){t&&(d(i),d(o),d(g),d(a),d(y)),_(e,t),_(n,t),_(r,t),_(l,t),_(s,t),_(x,t)}}}function K(u){let e,i;return e=new N({props:{title:"Batmicky",$$slots:{default:[J]},$$scope:{ctx:u}}}),{c(){f(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,o){m(e,n,o),i=!0},p(n,[o]){const r={};o&8&&(r.$$scope={dirty:o,ctx:n}),e.$set(r)},i(n){i||(b(e.$$.fragment,n),i=!0)},o(n){v(e.$$.fragment,n),i=!1},d(n){_(e,n)}}}function M(u){return[`<div></div>
<style>
  body {background: #191919;display:grid;place-items:center}
  div {
    width: 250px;
    height: 100px;
    position:relative;
    background:
      radial-gradient(circle at 66px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 185px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 100% 50px, #191919 50px, #0000 0),
      radial-gradient(circle at 0px 50px, #191919 50px, #0000 0),
      #F2AD43;
  }
  div::before {
    position:absolute;
    inset: 0 85px 70px;
    content: '';
    background: 
      radial-gradient(circle at 30px 10px, #F2AD43 5px, #0000 0),
      radial-gradient(circle at 50px 10px, #F2AD43 5px, #0000 0),
      linear-gradient(#191919 10px, #0000 0),
      linear-gradient(to right,#191919 30px, #F2AD43 0 50px, #191919 0),
      #191919;
    border-radius: 0 0 10px 10px;
  }
</style>
`,`<div></div>
<style>
  body {background: #191919;display:grid;place-items:center}
  div {
    width: 250px;
    height: 100px;
    position:relative;
    background:
      radial-gradient(circle at 66px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 185px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 100% 50px, #191919 50px, #0000 0),
      radial-gradient(circle at 0px 50px, #191919 50px, #0000 0),
      #F2AD43;
  }
  div::before {
    position:absolute;
    inset: 0 85px 70px;
    content: '';
    background: 
      radial-gradient(circle at 30px 10px, #F2AD43 5px, #0000 0),
      radial-gradient(circle at 50px 10px, #F2AD43 5px, #0000 0),
      linear-gradient(to right,#191919 30px, #F2AD43 0 50px, #191919 0) 0 10px no-repeat,
      #191919;
    border-radius: 0 0 10px 10px;
  }
</style>
`,`<div></div>
<style>
  body {background: #191919;display:grid;place-items:center}
  div {
    width: 250px;
    height: 100px;
    position:relative;
    background:
      radial-gradient(circle at 66px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 185px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 100% 50px, #191919 50px, #0000 0),
      radial-gradient(circle at 0px 50px, #191919 50px, #0000 0),
      #F2AD43;
  }
  div::before {
    position:absolute;
    inset: 0 85px 70px;
    content: '';
    background: 
      radial-gradient(circle at 30px 10px, #F2AD43 5px, #0000 0),
      radial-gradient(circle at 50px 10px, #F2AD43 5px, #0000 0),
      conic-gradient(#F2AD43,#F2AD43) 30px 10px / 20px 20px no-repeat,
      #191919;
    border-radius: 0 0 10px 10px;
  }
</style>
`]}class W extends j{constructor(e){super(),I(this,e,M,K,q,{})}}export{W as component};
