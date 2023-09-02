import{s as I,a as v,c as _,i as c,d,l as D,m as F}from"../chunks/scheduler.58de62d3.js";import{S as N,i as T,b as u,d as $,m as x,a as f,t as m,e as b}from"../chunks/index.698fb7dd.js";import{N as y}from"../chunks/Narigo.08d9f4ea.js";import{P as q,a as A}from"../chunks/PuzzlePageLayout.fc166366.js";function C(r){let e;return{c(){e=D("Again, having lots of fun with gradients!")},l(i){e=F(i,"Again, having lots of fun with gradients!")},m(i,a){c(i,e,a)},d(i){i&&d(e)}}}function L(r){let e;return{c(){e=D(`There is a minor improvement with this, by moving the background position down by 10px using
		no-repeat.`)},l(i){e=F(i,`There is a minor improvement with this, by moving the background position down by 10px using
		no-repeat.`)},m(i,a){c(i,e,a)},d(i){i&&d(e)}}}function j(r){let e;return{c(){e=D(`If using background size, it will let us save a few more characters. Still, it needs some kind
		of gradient to create an image first that can be set with background size. conic-gradient saves
		another char vs radial and linear.`)},l(i){e=F(i,`If using background size, it will let us save a few more characters. Still, it needs some kind
		of gradient to create an image first that can be set with background size. conic-gradient saves
		another char vs radial and linear.`)},m(i,a){c(i,e,a)},d(i){i&&d(e)}}}function E(r){let e,i,a,s,o,z,p,h,g,k,l,w;return e=new A({props:{title:"Puzzle 66 solution",solution:r[0]}}),a=new y({props:{$$slots:{default:[C]},$$scope:{ctx:r}}}),o=new A({props:{title:"Puzzle 66 solution",solution:r[1]}}),p=new y({props:{$$slots:{default:[L]},$$scope:{ctx:r}}}),g=new A({props:{title:"Puzzle 66 solution",solution:r[2]}}),l=new y({props:{$$slots:{default:[j]},$$scope:{ctx:r}}}),{c(){u(e.$$.fragment),i=v(),u(a.$$.fragment),s=v(),u(o.$$.fragment),z=v(),u(p.$$.fragment),h=v(),u(g.$$.fragment),k=v(),u(l.$$.fragment)},l(t){$(e.$$.fragment,t),i=_(t),$(a.$$.fragment,t),s=_(t),$(o.$$.fragment,t),z=_(t),$(p.$$.fragment,t),h=_(t),$(g.$$.fragment,t),k=_(t),$(l.$$.fragment,t)},m(t,n){x(e,t,n),c(t,i,n),x(a,t,n),c(t,s,n),x(o,t,n),c(t,z,n),x(p,t,n),c(t,h,n),x(g,t,n),c(t,k,n),x(l,t,n),w=!0},p(t,n){const P={};n&8&&(P.$$scope={dirty:n,ctx:t}),a.$set(P);const S={};n&8&&(S.$$scope={dirty:n,ctx:t}),p.$set(S);const B={};n&8&&(B.$$scope={dirty:n,ctx:t}),l.$set(B)},i(t){w||(f(e.$$.fragment,t),f(a.$$.fragment,t),f(o.$$.fragment,t),f(p.$$.fragment,t),f(g.$$.fragment,t),f(l.$$.fragment,t),w=!0)},o(t){m(e.$$.fragment,t),m(a.$$.fragment,t),m(o.$$.fragment,t),m(p.$$.fragment,t),m(g.$$.fragment,t),m(l.$$.fragment,t),w=!1},d(t){t&&(d(i),d(s),d(z),d(h),d(k)),b(e,t),b(a,t),b(o,t),b(p,t),b(g,t),b(l,t)}}}function G(r){let e,i;return e=new q({props:{title:"Batmicky",$$slots:{default:[E]},$$scope:{ctx:r}}}),{c(){u(e.$$.fragment)},l(a){$(e.$$.fragment,a)},m(a,s){x(e,a,s),i=!0},p(a,[s]){const o={};s&8&&(o.$$scope={dirty:s,ctx:a}),e.$set(o)},i(a){i||(f(e.$$.fragment,a),i=!0)},o(a){m(e.$$.fragment,a),i=!1},d(a){b(e,a)}}}function H(r){return[`<div></div>
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
`]}class Q extends N{constructor(e){super(),T(this,e,H,G,I,{})}}export{Q as component};
