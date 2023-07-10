import{s as S,a as x,c as w,i as d,d as m,l as _,m as v,f as y,g as C,A as I,y as A}from"../chunks/scheduler.52b7490a.js";import{S as D,i as q,b as p,d as $,m as c,a as g,t as b,e as h}from"../chunks/index.644eb738.js";import{N as P}from"../chunks/Narigo.e24b860c.js";import{P as B,a as F}from"../chunks/PuzzlePageLayout.389c71ed.js";function E(u){let e;return{c(){e=_(`In my first solution I used regular positioning and thought the left-bottom and middle one were
		of similar shape.`)},l(s){e=v(s,`In my first solution I used regular positioning and thought the left-bottom and middle one were
		of similar shape.`)},m(s,o){d(s,e,o)},d(s){s&&m(e)}}}function N(u){let e,s,o="-webkit-box-reflect",r,n,f="scale(-1)",a;return{c(){e=_("The second time I solved this, I was looking into ways how to mirror this. I wanted to use "),s=y("code"),s.textContent=o,r=_(`
		but it looks like it can only mirror on the X or the Y axis - not both at the same time. So I resorted
		to the `),n=y("code"),n.textContent=f,a=_(" trick. For this to work, the boxes needed to be duplicated.")},l(i){e=v(i,"The second time I solved this, I was looking into ways how to mirror this. I wanted to use "),s=C(i,"CODE",{"data-svelte-h":!0}),I(s)!=="svelte-zmhji"&&(s.textContent=o),r=v(i,`
		but it looks like it can only mirror on the X or the Y axis - not both at the same time. So I resorted
		to the `),n=C(i,"CODE",{"data-svelte-h":!0}),I(n)!=="svelte-1qud5fv"&&(n.textContent=f),a=v(i," trick. For this to work, the boxes needed to be duplicated.")},m(i,t){d(i,e,t),d(i,s,t),d(i,r,t),d(i,n,t),d(i,a,t)},p:A,d(i){i&&(m(e),m(s),m(r),m(n),m(a))}}}function O(u){let e,s,o,r,n,f,a,i;return e=new F({props:{title:"Puzzle 4 solution",solution:u[0]}}),o=new P({props:{$$slots:{default:[E]},$$scope:{ctx:u}}}),n=new F({props:{title:"Second solution for puzzle 4",solution:u[1]}}),a=new P({props:{$$slots:{default:[N]},$$scope:{ctx:u}}}),{c(){p(e.$$.fragment),s=x(),p(o.$$.fragment),r=x(),p(n.$$.fragment),f=x(),p(a.$$.fragment)},l(t){$(e.$$.fragment,t),s=w(t),$(o.$$.fragment,t),r=w(t),$(n.$$.fragment,t),f=w(t),$(a.$$.fragment,t)},m(t,l){c(e,t,l),d(t,s,l),c(o,t,l),d(t,r,l),c(n,t,l),d(t,f,l),c(a,t,l),i=!0},p(t,l){const k={};l&4&&(k.$$scope={dirty:l,ctx:t}),o.$set(k);const z={};l&4&&(z.$$scope={dirty:l,ctx:t}),a.$set(z)},i(t){i||(g(e.$$.fragment,t),g(o.$$.fragment,t),g(n.$$.fragment,t),g(a.$$.fragment,t),i=!0)},o(t){b(e.$$.fragment,t),b(o.$$.fragment,t),b(n.$$.fragment,t),b(a.$$.fragment,t),i=!1},d(t){t&&(m(s),m(r),m(f)),h(e,t),h(o,t),h(n,t),h(a,t)}}}function T(u){let e,s;return e=new B({props:{title:"Ups n Downs",$$slots:{default:[O]},$$scope:{ctx:u}}}),{c(){p(e.$$.fragment)},l(o){$(e.$$.fragment,o)},m(o,r){c(e,o,r),s=!0},p(o,[r]){const n={};r&4&&(n.$$scope={dirty:r,ctx:o}),e.$set(n)},i(o){s||(g(e.$$.fragment,o),s=!0)},o(o){b(e.$$.fragment,o),s=!1},d(o){h(e,o)}}}function X(u){return[`<div class="c r"></div>
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
`]}class G extends D{constructor(e){super(),q(this,e,X,T,S,{})}}export{G as component};
