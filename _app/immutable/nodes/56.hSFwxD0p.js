import{s as P,b as w,j as _,k as $,i as g,t as F,h as v}from"../chunks/scheduler.Bz19wuGf.js";import{S,i as A,c as d,b as l,m as c,t as u,a as f,d as m}from"../chunks/index.D0WKZCG1.js";import{N as z}from"../chunks/Narigo.O5y70Dyt.js";import{P as q,a as k}from"../chunks/PuzzlePageLayout.DOpdV4b9.js";function E(r){let t;return{c(){t=F(`Ari, Satoshi and I were doing this together today. This was a nice puzzle to do with radial
		gradients again!`)},l(n){t=v(n,`Ari, Satoshi and I were doing this together today. This was a nice puzzle to do with radial
		gradients again!`)},m(n,a){$(n,t,a)},d(n){n&&g(t)}}}function I(r){let t;return{c(){t=F(`Since we were done pretty quickly, we played around with different gradients, came up with some
		kind of psychedelic effect and added some animation to the mix.`)},l(n){t=v(n,`Since we were done pretty quickly, we played around with different gradients, came up with some
		kind of psychedelic effect and added some animation to the mix.`)},m(n,a){$(n,t,a)},d(n){n&&g(t)}}}function N(r){let t,n,a,s,o,x,p,y;return t=new k({props:{title:"Puzzle 62 solution",solution:r[0]}}),a=new z({props:{$$slots:{default:[E]},$$scope:{ctx:r}}}),o=new k({props:{title:"Extra: Psychedelic animation",solution:r[1]}}),p=new z({props:{$$slots:{default:[I]},$$scope:{ctx:r}}}),{c(){d(t.$$.fragment),n=w(),d(a.$$.fragment),s=w(),d(o.$$.fragment),x=w(),d(p.$$.fragment)},l(e){l(t.$$.fragment,e),n=_(e),l(a.$$.fragment,e),s=_(e),l(o.$$.fragment,e),x=_(e),l(p.$$.fragment,e)},m(e,i){c(t,e,i),$(e,n,i),c(a,e,i),$(e,s,i),c(o,e,i),$(e,x,i),c(p,e,i),y=!0},p(e,i){const h={};i&4&&(h.$$scope={dirty:i,ctx:e}),a.$set(h);const b={};i&4&&(b.$$scope={dirty:i,ctx:e}),p.$set(b)},i(e){y||(u(t.$$.fragment,e),u(a.$$.fragment,e),u(o.$$.fragment,e),u(p.$$.fragment,e),y=!0)},o(e){f(t.$$.fragment,e),f(a.$$.fragment,e),f(o.$$.fragment,e),f(p.$$.fragment,e),y=!1},d(e){e&&(g(n),g(s),g(x)),m(t,e),m(a,e),m(o,e),m(p,e)}}}function T(r){let t,n;return t=new q({props:{title:"Sunset",$$slots:{default:[N]},$$scope:{ctx:r}}}),{c(){d(t.$$.fragment)},l(a){l(t.$$.fragment,a)},m(a,s){c(t,a,s),n=!0},p(a,[s]){const o={};s&4&&(o.$$scope={dirty:s,ctx:a}),t.$set(o)},i(a){n||(u(t.$$.fragment,a),n=!0)},o(a){f(t.$$.fragment,a),n=!1},d(a){m(t,a)}}}function j(r){return[`<div></div>
<style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  div {
    background: 
      radial-gradient(circle at 100% 100%, #824B20 100px, #0000 0),
      radial-gradient(circle at 0 100%, #E08027 100px, #0000 0),
      radial-gradient(circle, #FFF58F 30px, #0000 0) 0 20px,
      #F2AD43;
    width: 150px;
    height: 200px;
    border-radius: 75px 75px 20px 20px;
  }
</style>
`,`<div></div>
<style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  div {
    background:
      radial-gradient(circle at 100% 100%, #999 90px, #bbb 100px, transparent 0) no-repeat,
      radial-gradient(circle at 0 100%, #666 90px, #999 100px, transparent 0) no-repeat,
      radial-gradient(circle at 50% 120px, #FFF58F 30px, #f30 0 50px, #f60 60px, #f90 70px, transparent 100px) no-repeat,
      deepskyblue;
    width: 150px;
    height: 200px;
    border-radius: 75px 75px 20px 20px;
    animation: anim 2s infinite ease-in-out;
  }

  @keyframes anim {
    0% {
      rotate: -15deg;
      background-position-y: 0, 0, -50px, 0;
    }
    50% {
      rotate: 15deg;
      background-position-y: 0, 0, 50px, 0;
      background-position-x: 50px, -50px, 0, 0;
    }
    100% {
      rotate: -15deg;
      background-position-y: 0, 0, -50px, 0;
    }
  }
</style>`]}class G extends S{constructor(t){super(),A(this,t,j,T,P,{})}}export{G as component};
