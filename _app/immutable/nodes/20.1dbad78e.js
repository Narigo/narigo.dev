import{s as P,a as _,c as h,i as p,d as u,f as x,g as b,A as v,y as k,l as w,m as z,j as y}from"../chunks/scheduler.52b7490a.js";import{S,i as q,b as c,d,m as f,a as $,t as m,e as g}from"../chunks/index.644eb738.js";import{B}from"../chunks/Bubble.54fd1161.js";import{N as M}from"../chunks/Narigo.e24b860c.js";import{P as N,a as j}from"../chunks/PuzzlePageLayout.389c71ed.js";function A(l){let t,r=`While we can do the popsicle and the stick with border radius, the presented solution shows
			another way, how to solve this. By using multiple backgrounds, stacked on top of each other,
			it's possible to create the same effect with gradients.`,a,s,n=`The <code>&lt;div id=&quot;r&quot;&gt;</code> shows the <code>border-radius</code> approach and the
			<code>&lt;div id=&quot;y&quot;&gt;</code> is all about using gradients to draw.`;return{c(){t=x("p"),t.textContent=r,a=_(),s=x("p"),s.innerHTML=n},l(o){t=b(o,"P",{"data-svelte-h":!0}),v(t)!=="svelte-15u5tam"&&(t.textContent=r),a=h(o),s=b(o,"P",{"data-svelte-h":!0}),v(s)!=="svelte-1j4417p"&&(s.innerHTML=n)},m(o,e){p(o,t,e),p(o,a,e),p(o,s,e)},p:k,d(o){o&&(u(t),u(a),u(s))}}}function L(l){let t,r,a="explanation for using multiple backgrounds",s;return{c(){t=w("MDN has a great "),r=x("a"),r.textContent=a,s=w("."),this.h()},l(n){t=z(n,"MDN has a great "),r=b(n,"A",{href:!0,rel:!0,"data-svelte-h":!0}),v(r)!=="svelte-v9f2c7"&&(r.textContent=a),s=z(n,"."),this.h()},h(){y(r,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"),y(r,"rel","external")},m(n,o){p(n,t,o),p(n,r,o),p(n,s,o)},p:k,d(n){n&&(u(t),u(r),u(s))}}}function T(l){let t,r,a,s,n,o;return t=new j({props:{title:"Puzzle 35 solution",solution:l[0]}}),a=new M({props:{$$slots:{default:[A]},$$scope:{ctx:l}}}),n=new B({props:{side:"right",$$slots:{default:[L]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment),r=_(),c(a.$$.fragment),s=_(),c(n.$$.fragment)},l(e){d(t.$$.fragment,e),r=h(e),d(a.$$.fragment,e),s=h(e),d(n.$$.fragment,e)},m(e,i){f(t,e,i),p(e,r,i),f(a,e,i),p(e,s,i),f(n,e,i),o=!0},p(e,i){const F={};i&2&&(F.$$scope={dirty:i,ctx:e}),a.$set(F);const C={};i&2&&(C.$$scope={dirty:i,ctx:e}),n.$set(C)},i(e){o||($(t.$$.fragment,e),$(a.$$.fragment,e),$(n.$$.fragment,e),o=!0)},o(e){m(t.$$.fragment,e),m(a.$$.fragment,e),m(n.$$.fragment,e),o=!1},d(e){e&&(u(r),u(s)),g(t,e),g(a,e),g(n,e)}}}function D(l){let t,r;return t=new N({props:{title:"Ice Cream",$$slots:{default:[T]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(a){d(t.$$.fragment,a)},m(a,s){f(t,a,s),r=!0},p(a,[s]){const n={};s&2&&(n.$$scope={dirty:s,ctx:a}),t.$set(n)},i(a){r||($(t.$$.fragment,a),r=!0)},o(a){m(t.$$.fragment,a),r=!1},d(a){g(t,a)}}}function H(l){return[`<div id="y"></div>
<div id="r"></div>
<style>
  body {
    background: #293462;
    display: grid;
    justify-items: center;
    place-content: center;
  }
  #y {
    width: 100px;
    height: 150px;
    background:
      radial-gradient(circle at 50% 50px, #FFF1C1 50px, transparent 0),
      radial-gradient(circle at 20% 130px, #FFF1C1 20px, transparent 0),
      radial-gradient(circle at 80% 130px, #FFF1C1 20px, transparent 0),
      linear-gradient(#293462 50px, #FFF1C1 0 130px, transparent 0),
      linear-gradient(90deg, transparent 20px, #FFF1C1 0 80px, transparent 0)
    ;
  }
  #r {
    width: 30%;
    height: 50px;
    background: linear-gradient(#A64942 10px, #FE5F55 0);
    border-radius: 0 0 10px 10px;
  }
</style>`]}class J extends S{constructor(t){super(),q(this,t,H,D,P,{})}}export{J as component};
