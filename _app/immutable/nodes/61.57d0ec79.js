import{s as x,a as _,c as v,i as n,d as l,l as g,f as z,m as h,g as k,A as w,j as b,y}from"../chunks/scheduler.8a7a49fc.js";import{S as A,i as P,b as d,d as p,m as c,a as u,t as f,e as m}from"../chunks/index.6f578239.js";import{N as C}from"../chunks/Narigo.70679acd.js";import{P as B,a as I}from"../chunks/PuzzlePageLayout.e3818f65.js";function j(i){let t,o,a="solution for this puzzle",s;return{c(){t=g("I couldn't make it this week. Thanks to David, it still happened and a "),o=z("a"),o.textContent=a,s=g(" has been posted. I only got 99.9% this time."),this.h()},l(e){t=h(e,"I couldn't make it this week. Thanks to David, it still happened and a "),o=k(e,"A",{href:!0,rel:!0,"data-svelte-h":!0}),w(o)!=="svelte-12jgyca"&&(o.textContent=a),s=h(e," has been posted. I only got 99.9% this time."),this.h()},h(){b(o,"href","https://github.com/orgs/Virtual-Coffee/discussions/1043"),b(o,"rel","external")},m(e,r){n(e,t,r),n(e,o,r),n(e,s,r)},p:y,d(e){e&&(l(t),l(o),l(s))}}}function D(i){let t,o,a,s;return t=new I({props:{title:"Puzzle 71 solution",solution:i[0]}}),a=new C({props:{$$slots:{default:[j]},$$scope:{ctx:i}}}),{c(){d(t.$$.fragment),o=_(),d(a.$$.fragment)},l(e){p(t.$$.fragment,e),o=v(e),p(a.$$.fragment,e)},m(e,r){c(t,e,r),n(e,o,r),c(a,e,r),s=!0},p(e,r){const $={};r&2&&($.$$scope={dirty:r,ctx:e}),a.$set($)},i(e){s||(u(t.$$.fragment,e),u(a.$$.fragment,e),s=!0)},o(e){f(t.$$.fragment,e),f(a.$$.fragment,e),s=!1},d(e){e&&l(o),m(t,e),m(a,e)}}}function N(i){let t,o;return t=new B({props:{title:"Elephant",$$slots:{default:[D]},$$scope:{ctx:i}}}),{c(){d(t.$$.fragment)},l(a){p(t.$$.fragment,a)},m(a,s){c(t,a,s),o=!0},p(a,[s]){const e={};s&2&&(e.$$scope={dirty:s,ctx:a}),t.$set(e)},i(a){o||(u(t.$$.fragment,a),o=!0)},o(a){f(t.$$.fragment,a),o=!1},d(a){m(t,a)}}}function S(i){return[`<div class=head>
<div class=teeth></div>
<div class=nose></div>
<div class="ear l"></div>
<div class="ear r"></div>
<div class=face></div>
</div>
<style>
  body {
    display: grid;
    place-items:center;
    background:#998235;
  }
  .head {
    position:relative;
  }
  .nose {
    position: absolute;
    bottom:-99;
    border-radius:20px;
    left:70;
    top:120;
    width:40;
    background:#0B2429;
  }
  .teeth {
    content:'';
    position:absolute;
    border-radius: 50%;
    border: 20px solid #fff;
    border-top-color: #0000;
    border-left-color: #0000;
    rotate:225deg;
    top:130;
    left:30;
    height:80;
    width:80;
  }
  .face,.ear {
    border-radius: 50%;
    width: 180px;
    height: 180px;
    background: #1A4341;
  }
  .face {
    background:
      linear-gradient(#1A4341 50%, #0000 0),
      radial-gradient(circle at 60px 50%, #0B2429 10px, #998235 0 20px, #0000 0),
      radial-gradient(circle at 120px 50%, #0B2429 10px, #998235 0 20px, #0000 0),
      #1A4341;
  }
  .ear {
    position:absolute;
    background:#1A4341;
    content:'';
    overflow:hidden;
    width: 80px;
    z-index:-1;
  }
  .ear::before {
    position: absolute;
    background: #0B2429;
    border-radius: 50%;
    content: '';
    height: 100%;
    width: 100%;
  }
  .ear.l {
    left:-60px;
  }
  .ear.l::before {
    left:15px;
  }
  .ear.r::before {
    right:16px;
  }
  .ear.r {
    right:-60px;
  }
</style>`]}class V extends A{constructor(t){super(),P(this,t,S,N,x,{})}}export{V as component};
