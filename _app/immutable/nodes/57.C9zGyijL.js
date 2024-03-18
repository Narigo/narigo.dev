import{s as v,b as x,j as b,k as l,i as p,e as g,d as h,p as _,n as w}from"../chunks/scheduler.Bz19wuGf.js";import{S as y,i as z,c as u,b as m,m as c,t as f,a as $,d}from"../chunks/index.D0WKZCG1.js";import{N as k}from"../chunks/Narigo.D4GIj-7X.js";import{P as I,a as C}from"../chunks/PuzzlePageLayout.CqohPXvw.js";function P(i){let t,a=`This time it was Satoshi and me, but I had a little blocker on my arm, so I had to solve it a
			day later on my own. I like <code>-webkit-box-reflect</code>, but I&#39;m always a bit surprised
			how it works - especially when using absolute or fixed positioning and pseudo-elements. I
			think, I need to look into this more!`,e,s,o=`I wanted to try solving it using the Unicode character "⌘" as the CSSBattle discussions
			sometimes say that people are using UTF-8 characters to solve puzzles. I can't make it over
			92.1% with this char, so I'm unsure how that works for others.`;return{c(){t=g("p"),t.innerHTML=a,e=x(),s=g("p"),s.textContent=o},l(n){t=h(n,"P",{"data-svelte-h":!0}),_(t)!=="svelte-1vxr31i"&&(t.innerHTML=a),e=b(n),s=h(n,"P",{"data-svelte-h":!0}),_(s)!=="svelte-xar84y"&&(s.textContent=o)},m(n,r){l(n,t,r),l(n,e,r),l(n,s,r)},p:w,d(n){n&&(p(t),p(e),p(s))}}}function S(i){let t,a,e,s;return t=new C({props:{title:"Puzzle 63 solution",solution:i[0]}}),e=new k({props:{$$slots:{default:[P]},$$scope:{ctx:i}}}),{c(){u(t.$$.fragment),a=x(),u(e.$$.fragment)},l(o){m(t.$$.fragment,o),a=b(o),m(e.$$.fragment,o)},m(o,n){c(t,o,n),l(o,a,n),c(e,o,n),s=!0},p(o,n){const r={};n&2&&(r.$$scope={dirty:n,ctx:o}),e.$set(r)},i(o){s||(f(t.$$.fragment,o),f(e.$$.fragment,o),s=!0)},o(o){$(t.$$.fragment,o),$(e.$$.fragment,o),s=!1},d(o){o&&p(a),d(t,o),d(e,o)}}}function T(i){let t,a;return t=new I({props:{title:"Command Key",$$slots:{default:[S]},$$scope:{ctx:i}}}),{c(){u(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){c(t,e,s),a=!0},p(e,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){$(t.$$.fragment,e),a=!1},d(e){d(t,e)}}}function L(i){return[`<div></div>
<style>
  *{background:#191919;overflow:visible;}
  div,div:before,div:after {
    content:'';
    position:fixed;
    inset: 38% 166px;
    width: 50px;
    height: 50px;
    border: 10px solid #5DBCF9;
    -webkit-box-reflect: right -70px;
  }
  div:after {
    border-radius:50% 50% 0;
    translate:-60px -60px;
    -webkit-box-reflect: below 50px;
  }
</style>`]}class N extends y{constructor(t){super(),z(this,t,L,T,v,{})}}export{N as component};
