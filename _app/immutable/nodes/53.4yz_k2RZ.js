import{s as w,a as x,c as v,i as l,d as u,f as g,g as h,A as _,y as b}from"../chunks/scheduler.Po0zCuFf.js";import{S as y,i as z,b as p,d as m,m as f,a as c,t as $,e as d}from"../chunks/index.WEWm72Kh.js";import{N as k}from"../chunks/Narigo.oADfMIXw.js";import{P as I,a as C}from"../chunks/PuzzlePageLayout.w_nYoieu.js";function P(i){let t,n=`This time it was Satoshi and me, but I had a little blocker on my arm, so I had to solve it a
			day later on my own. I like <code>-webkit-box-reflect</code>, but I&#39;m always a bit surprised
			how it works - especially when using absolute or fixed positioning and pseudo-elements. I
			think, I need to look into this more!`,e,s,o=`I wanted to try solving it using the Unicode character "⌘" as the CSSBattle discussions
			sometimes say that people are using UTF-8 characters to solve puzzles. I can't make it over
			92.1% with this char, so I'm unsure how that works for others.`;return{c(){t=g("p"),t.innerHTML=n,e=x(),s=g("p"),s.textContent=o},l(a){t=h(a,"P",{"data-svelte-h":!0}),_(t)!=="svelte-1vxr31i"&&(t.innerHTML=n),e=v(a),s=h(a,"P",{"data-svelte-h":!0}),_(s)!=="svelte-xar84y"&&(s.textContent=o)},m(a,r){l(a,t,r),l(a,e,r),l(a,s,r)},p:b,d(a){a&&(u(t),u(e),u(s))}}}function S(i){let t,n,e,s;return t=new C({props:{title:"Puzzle 63 solution",solution:i[0]}}),e=new k({props:{$$slots:{default:[P]},$$scope:{ctx:i}}}),{c(){p(t.$$.fragment),n=x(),p(e.$$.fragment)},l(o){m(t.$$.fragment,o),n=v(o),m(e.$$.fragment,o)},m(o,a){f(t,o,a),l(o,n,a),f(e,o,a),s=!0},p(o,a){const r={};a&2&&(r.$$scope={dirty:a,ctx:o}),e.$set(r)},i(o){s||(c(t.$$.fragment,o),c(e.$$.fragment,o),s=!0)},o(o){$(t.$$.fragment,o),$(e.$$.fragment,o),s=!1},d(o){o&&u(n),d(t,o),d(e,o)}}}function T(i){let t,n;return t=new I({props:{title:"Command Key",$$slots:{default:[S]},$$scope:{ctx:i}}}),{c(){p(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){f(t,e,s),n=!0},p(e,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}function L(i){return[`<div></div>
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
</style>`]}class N extends y{constructor(t){super(),z(this,t,L,T,w,{})}}export{N as component};
