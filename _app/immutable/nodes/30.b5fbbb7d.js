import{s as L,a as w,c as y,i as d,d as p,f as S,g as W,A as T,y as q,l as N,m as F}from"../chunks/scheduler.52b7490a.js";import{S as H,i as M,b as m,d as c,m as $,a as g,t as v,e as b}from"../chunks/index.644eb738.js";import{N as A}from"../chunks/Narigo.e24b860c.js";import{P as D,a as k}from"../chunks/PuzzlePageLayout.389c71ed.js";function O(r){let t,i=`This was a hard one! We initially created this solution with less divs, but this was always
			ending up in a 99.9% solution - even when the <code>Diff</code> view showed up almost completely
			black. Only when we zooming in the black diff-preview, we could see tiny discrepancies, but they
			weren&#39;t even solvable by incrementing by half-pixel values or similar.`,n,s,l=`Very frustrating experience - it looks like sometimes you need to find a special way how to
			solve it. We still don't get, why this solution would be different to the one hundred percent
			solution below.`;return{c(){t=S("p"),t.innerHTML=i,n=w(),s=S("p"),s.textContent=l},l(a){t=W(a,"P",{"data-svelte-h":!0}),T(t)!=="svelte-89v5uh"&&(t.innerHTML=i),n=y(a),s=W(a,"P",{"data-svelte-h":!0}),T(s)!=="svelte-1mc3q2f"&&(s.textContent=l)},m(a,u){d(a,t,u),d(a,n,u),d(a,s,u)},p:q,d(a){a&&(p(t),p(n),p(s))}}}function V(r){let t;return{c(){t=N(`With this solution, achieving the 100% were no problem. I think I would have gone for this in
		the first place, but solving everything with gradients almost seems to be cheating to me now.`)},l(i){t=F(i,`With this solution, achieving the 100% were no problem. I think I would have gone for this in
		the first place, but solving everything with gradients almost seems to be cheating to me now.`)},m(i,n){d(i,t,n)},d(i){i&&p(t)}}}function j(r){let t;return{c(){t=N(`There was another solution, which improved the character count a bit, by using a border on the
		body instead of the transparent linear-gradient. Not much has changed otherwise, but it's good
		to see that sometimes you can solve things differently. Still 100% with this approach. When
		zooming in, I can't really see a difference to the 99% solution. I believe the circles to the
		side somehow are calculated differently in the 99% solution then.`)},l(i){t=F(i,`There was another solution, which improved the character count a bit, by using a border on the
		body instead of the transparent linear-gradient. Not much has changed otherwise, but it's good
		to see that sometimes you can solve things differently. Still 100% with this approach. When
		zooming in, I can't really see a difference to the 99% solution. I believe the circles to the
		side somehow are calculated differently in the 99% solution then.`)},m(i,n){d(i,t,n)},d(i){i&&p(t)}}}function B(r){let t,i,n,s,l,a,u,_,h,z,f,x;return t=new k({props:{title:"Puzzle 44 solution 99.9%",solution:r[1]}}),n=new A({props:{$$slots:{default:[O]},$$scope:{ctx:r}}}),l=new k({props:{title:"Puzzle 44 solution 100%",solution:r[0]}}),u=new A({props:{$$slots:{default:[V]},$$scope:{ctx:r}}}),h=new k({props:{title:"Puzzle 44 improved",solution:r[2]}}),f=new A({props:{$$slots:{default:[j]},$$scope:{ctx:r}}}),{c(){m(t.$$.fragment),i=w(),m(n.$$.fragment),s=w(),m(l.$$.fragment),a=w(),m(u.$$.fragment),_=w(),m(h.$$.fragment),z=w(),m(f.$$.fragment)},l(e){c(t.$$.fragment,e),i=y(e),c(n.$$.fragment,e),s=y(e),c(l.$$.fragment,e),a=y(e),c(u.$$.fragment,e),_=y(e),c(h.$$.fragment,e),z=y(e),c(f.$$.fragment,e)},m(e,o){$(t,e,o),d(e,i,o),$(n,e,o),d(e,s,o),$(l,e,o),d(e,a,o),$(u,e,o),d(e,_,o),$(h,e,o),d(e,z,o),$(f,e,o),x=!0},p(e,o){const C={};o&8&&(C.$$scope={dirty:o,ctx:e}),n.$set(C);const P={};o&8&&(P.$$scope={dirty:o,ctx:e}),u.$set(P);const I={};o&8&&(I.$$scope={dirty:o,ctx:e}),f.$set(I)},i(e){x||(g(t.$$.fragment,e),g(n.$$.fragment,e),g(l.$$.fragment,e),g(u.$$.fragment,e),g(h.$$.fragment,e),g(f.$$.fragment,e),x=!0)},o(e){v(t.$$.fragment,e),v(n.$$.fragment,e),v(l.$$.fragment,e),v(u.$$.fragment,e),v(h.$$.fragment,e),v(f.$$.fragment,e),x=!1},d(e){e&&(p(i),p(s),p(a),p(_),p(z)),b(t,e),b(n,e),b(l,e),b(u,e),b(h,e),b(f,e)}}}function E(r){let t,i;return t=new D({props:{title:"Stripes",$$slots:{default:[B]},$$scope:{ctx:r}}}),{c(){m(t.$$.fragment)},l(n){c(t.$$.fragment,n)},m(n,s){$(t,n,s),i=!0},p(n,[s]){const l={};s&8&&(l.$$scope={dirty:s,ctx:n}),t.$set(l)},i(n){i||(g(t.$$.fragment,n),i=!0)},o(n){v(t.$$.fragment,n),i=!1},d(n){b(t,n)}}}function G(r){return[`<style>
  body {
    background: 
      radial-gradient(circle, #1A4341 50vh, transparent 0) -50vw,
      linear-gradient(#1A4341 0 60px, transparent 0 240px, #1A4341 0),
      repeating-linear-gradient(#1A4341 0 20px, #F3AC3C 0 40px)
    ;
  }
</style>`,`<div class="b">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<div class="l"></div>
<div class="r"></div>
<style>
  body {
    margin: 0;
    background: #1A4341;
    display: grid;
    place-items: center;
  }
  .b {
    width: 100%;
    height: 180px;
  }
  .b div {
    background: #F3AC3C;
    height: 20px;
  }
  .b div:nth-child(even) {
    background: #1A4341;
    height: 20px;
  }
  .l,.r {
    position: absolute;
    background: #1A4341;
    border-radius: 0 150px 150px 0;
    left: 0;
    height: 300px;
    width: 150px;
  }
  .r {
    border-radius: 150px 0 0 150px;
    left: unset;
    right: 0;
  }
</style>`,`<style>
  body {
    border: 52px solid #1A4341;
    background: 
      radial-gradient(circle,#1A4341 50vh,transparent 0) -50vw,
      repeating-linear-gradient(#1A4341 0 20px,#F3AC3C 0 40px)
    ;
  }
</style>`]}class U extends H{constructor(t){super(),M(this,t,G,E,L,{})}}export{U as component};
