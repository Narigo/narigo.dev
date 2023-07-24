import{s as q,a as _,c as z,i as c,d as f,f as N,l as x,g as T,h as D,m as k,A as O,x as F}from"../chunks/scheduler.7b4a0948.js";import{S as E,i as L,b as m,d as g,m as v,a as w,t as b,e as y}from"../chunks/index.38f4d462.js";import{C as V}from"../chunks/Code.81306a52.js";import{N as C}from"../chunks/Narigo.3993b19b.js";import{P as j,a as P}from"../chunks/PuzzlePageLayout.d810c518.js";function B(r){let t;return{c(){t=x("Diff")},l(i){t=k(i,"Diff")},m(i,n){c(i,t,n)},d(i){i&&f(t)}}}function G(r){let t,i,n,u,l,d,p=`Very frustrating experience - it looks like sometimes you need to find a special way how to
			solve it. We still don't get, why this solution would be different to the one hundred percent
			solution below.`,$;return n=new V({props:{$$slots:{default:[B]},$$scope:{ctx:r}}}),{c(){t=N("p"),i=x(`This was a hard one! We initially created this solution with less divs, but this was always
			ending up in a 99.9% solution - even when the `),m(n.$$.fragment),u=x(` view showed up almost completely
			black. Only when we zooming in the black diff-preview, we could see tiny discrepancies, but they
			weren't even solvable by incrementing by half-pixel values or similar.`),l=_(),d=N("p"),d.textContent=p},l(o){t=T(o,"P",{});var a=D(t);i=k(a,`This was a hard one! We initially created this solution with less divs, but this was always
			ending up in a 99.9% solution - even when the `),g(n.$$.fragment,a),u=k(a,` view showed up almost completely
			black. Only when we zooming in the black diff-preview, we could see tiny discrepancies, but they
			weren't even solvable by incrementing by half-pixel values or similar.`),a.forEach(f),l=z(o),d=T(o,"P",{"data-svelte-h":!0}),O(d)!=="svelte-1mc3q2f"&&(d.textContent=p)},m(o,a){c(o,t,a),F(t,i),v(n,t,null),F(t,u),c(o,l,a),c(o,d,a),$=!0},p(o,a){const h={};a&8&&(h.$$scope={dirty:a,ctx:o}),n.$set(h)},i(o){$||(w(n.$$.fragment,o),$=!0)},o(o){b(n.$$.fragment,o),$=!1},d(o){o&&(f(t),f(l),f(d)),y(n)}}}function H(r){let t;return{c(){t=x(`With this solution, achieving the 100% were no problem. I think I would have gone for this in
		the first place, but solving everything with gradients almost seems to be cheating to me now.`)},l(i){t=k(i,`With this solution, achieving the 100% were no problem. I think I would have gone for this in
		the first place, but solving everything with gradients almost seems to be cheating to me now.`)},m(i,n){c(i,t,n)},d(i){i&&f(t)}}}function J(r){let t;return{c(){t=x(`There was another solution, which improved the character count a bit, by using a border on the
		body instead of the transparent linear-gradient. Not much has changed otherwise, but it's good
		to see that sometimes you can solve things differently. Still 100% with this approach. When
		zooming in, I can't really see a difference to the 99% solution. I believe the circles to the
		side somehow are calculated differently in the 99% solution then.`)},l(i){t=k(i,`There was another solution, which improved the character count a bit, by using a border on the
		body instead of the transparent linear-gradient. Not much has changed otherwise, but it's good
		to see that sometimes you can solve things differently. Still 100% with this approach. When
		zooming in, I can't really see a difference to the 99% solution. I believe the circles to the
		side somehow are calculated differently in the 99% solution then.`)},m(i,n){c(i,t,n)},d(i){i&&f(t)}}}function K(r){let t,i,n,u,l,d,p,$,o,a,h,A;return t=new P({props:{title:"Puzzle 44 solution 99.9%",solution:r[1]}}),n=new C({props:{$$slots:{default:[G]},$$scope:{ctx:r}}}),l=new P({props:{title:"Puzzle 44 solution 100%",solution:r[0]}}),p=new C({props:{$$slots:{default:[H]},$$scope:{ctx:r}}}),o=new P({props:{title:"Puzzle 44 improved",solution:r[2]}}),h=new C({props:{$$slots:{default:[J]},$$scope:{ctx:r}}}),{c(){m(t.$$.fragment),i=_(),m(n.$$.fragment),u=_(),m(l.$$.fragment),d=_(),m(p.$$.fragment),$=_(),m(o.$$.fragment),a=_(),m(h.$$.fragment)},l(e){g(t.$$.fragment,e),i=z(e),g(n.$$.fragment,e),u=z(e),g(l.$$.fragment,e),d=z(e),g(p.$$.fragment,e),$=z(e),g(o.$$.fragment,e),a=z(e),g(h.$$.fragment,e)},m(e,s){v(t,e,s),c(e,i,s),v(n,e,s),c(e,u,s),v(l,e,s),c(e,d,s),v(p,e,s),c(e,$,s),v(o,e,s),c(e,a,s),v(h,e,s),A=!0},p(e,s){const I={};s&8&&(I.$$scope={dirty:s,ctx:e}),n.$set(I);const S={};s&8&&(S.$$scope={dirty:s,ctx:e}),p.$set(S);const W={};s&8&&(W.$$scope={dirty:s,ctx:e}),h.$set(W)},i(e){A||(w(t.$$.fragment,e),w(n.$$.fragment,e),w(l.$$.fragment,e),w(p.$$.fragment,e),w(o.$$.fragment,e),w(h.$$.fragment,e),A=!0)},o(e){b(t.$$.fragment,e),b(n.$$.fragment,e),b(l.$$.fragment,e),b(p.$$.fragment,e),b(o.$$.fragment,e),b(h.$$.fragment,e),A=!1},d(e){e&&(f(i),f(u),f(d),f($),f(a)),y(t,e),y(n,e),y(l,e),y(p,e),y(o,e),y(h,e)}}}function M(r){let t,i;return t=new j({props:{title:"Stripes",$$slots:{default:[K]},$$scope:{ctx:r}}}),{c(){m(t.$$.fragment)},l(n){g(t.$$.fragment,n)},m(n,u){v(t,n,u),i=!0},p(n,[u]){const l={};u&8&&(l.$$scope={dirty:u,ctx:n}),t.$set(l)},i(n){i||(w(t.$$.fragment,n),i=!0)},o(n){b(t.$$.fragment,n),i=!1},d(n){y(t,n)}}}function Q(r){return[`<style>
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
</style>`]}class ee extends E{constructor(t){super(),L(this,t,Q,M,q,{})}}export{ee as component};
