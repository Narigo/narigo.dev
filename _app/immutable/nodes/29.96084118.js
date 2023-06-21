import{S as F,i as O,s as q,y as g,z as v,A as w,g as b,d as y,B as _,a as z,c as x,b as f,h as p,k as C,q as k,l as I,m as W,r as A,G as P,H as V}from"../chunks/index.3d7f15fc.js";import{N as S}from"../chunks/Narigo.f2af5427.js";import{P as B,a as E}from"../chunks/PuzzlePageLayout.6bbbe7e4.js";function G(l){let t,n,i,u,r,c,a,m;return{c(){t=C("p"),n=k(`This was a hard one! We initially created this solution with less divs, but this was always
			ending up in a 99.9% solution - even when the `),i=C("code"),u=k("Diff"),r=k(` view showed up almost completely
			black. Only when we zooming in the black diff-preview, we could see tiny discrepancies, but they
			weren't even solvable by incrementing by half-pixel values or similar.`),c=z(),a=C("p"),m=k(`Very frustrating experience - it looks like sometimes you need to find a special way how to
			solve it. We still don't get, why this solution would be different to the one hundred percent
			solution below.`)},l(o){t=I(o,"P",{});var d=W(t);n=A(d,`This was a hard one! We initially created this solution with less divs, but this was always
			ending up in a 99.9% solution - even when the `),i=I(d,"CODE",{});var h=W(i);u=A(h,"Diff"),h.forEach(p),r=A(d,` view showed up almost completely
			black. Only when we zooming in the black diff-preview, we could see tiny discrepancies, but they
			weren't even solvable by incrementing by half-pixel values or similar.`),d.forEach(p),c=x(o),a=I(o,"P",{});var $=W(a);m=A($,`Very frustrating experience - it looks like sometimes you need to find a special way how to
			solve it. We still don't get, why this solution would be different to the one hundred percent
			solution below.`),$.forEach(p)},m(o,d){f(o,t,d),P(t,n),P(t,i),P(i,u),P(t,r),f(o,c,d),f(o,a,d),P(a,m)},p:V,d(o){o&&p(t),o&&p(c),o&&p(a)}}}function H(l){let t;return{c(){t=k(`With this solution, achieving the 100% were no problem. I think I would have gone for this in
		the first place, but solving everything with gradients almost seems to be cheating to me now.`)},l(n){t=A(n,`With this solution, achieving the 100% were no problem. I think I would have gone for this in
		the first place, but solving everything with gradients almost seems to be cheating to me now.`)},m(n,i){f(n,t,i)},d(n){n&&p(t)}}}function L(l){let t;return{c(){t=k(`There was another solution, which improved the character count a bit, by using a border on the
		body instead of the transparent linear-gradient. Not much has changed otherwise, but it's good
		to see that sometimes you can solve things differently. Still 100% with this approach. When
		zooming in, I can't really see a difference to the 99% solution. I believe the circles to the
		side somehow are calculated differently in the 99% solution then.`)},l(n){t=A(n,`There was another solution, which improved the character count a bit, by using a border on the
		body instead of the transparent linear-gradient. Not much has changed otherwise, but it's good
		to see that sometimes you can solve things differently. Still 100% with this approach. When
		zooming in, I can't really see a difference to the 99% solution. I believe the circles to the
		side somehow are calculated differently in the 99% solution then.`)},m(n,i){f(n,t,i)},d(n){n&&p(t)}}}function j(l){let t,n,i,u,r,c,a,m,o,d,h,$;return t=new E({props:{title:"Puzzle 44 solution 99.9%",solution:l[1]}}),i=new S({props:{$$slots:{default:[G]},$$scope:{ctx:l}}}),r=new E({props:{title:"Puzzle 44 solution 100%",solution:l[0]}}),a=new S({props:{$$slots:{default:[H]},$$scope:{ctx:l}}}),o=new E({props:{title:"Puzzle 44 improved",solution:l[2]}}),h=new S({props:{$$slots:{default:[L]},$$scope:{ctx:l}}}),{c(){g(t.$$.fragment),n=z(),g(i.$$.fragment),u=z(),g(r.$$.fragment),c=z(),g(a.$$.fragment),m=z(),g(o.$$.fragment),d=z(),g(h.$$.fragment)},l(e){v(t.$$.fragment,e),n=x(e),v(i.$$.fragment,e),u=x(e),v(r.$$.fragment,e),c=x(e),v(a.$$.fragment,e),m=x(e),v(o.$$.fragment,e),d=x(e),v(h.$$.fragment,e)},m(e,s){w(t,e,s),f(e,n,s),w(i,e,s),f(e,u,s),w(r,e,s),f(e,c,s),w(a,e,s),f(e,m,s),w(o,e,s),f(e,d,s),w(h,e,s),$=!0},p(e,s){const N={};s&8&&(N.$$scope={dirty:s,ctx:e}),i.$set(N);const T={};s&8&&(T.$$scope={dirty:s,ctx:e}),a.$set(T);const D={};s&8&&(D.$$scope={dirty:s,ctx:e}),h.$set(D)},i(e){$||(b(t.$$.fragment,e),b(i.$$.fragment,e),b(r.$$.fragment,e),b(a.$$.fragment,e),b(o.$$.fragment,e),b(h.$$.fragment,e),$=!0)},o(e){y(t.$$.fragment,e),y(i.$$.fragment,e),y(r.$$.fragment,e),y(a.$$.fragment,e),y(o.$$.fragment,e),y(h.$$.fragment,e),$=!1},d(e){_(t,e),e&&p(n),_(i,e),e&&p(u),_(r,e),e&&p(c),_(a,e),e&&p(m),_(o,e),e&&p(d),_(h,e)}}}function J(l){let t,n;return t=new B({props:{title:"Stripes",$$slots:{default:[j]},$$scope:{ctx:l}}}),{c(){g(t.$$.fragment)},l(i){v(t.$$.fragment,i)},m(i,u){w(t,i,u),n=!0},p(i,[u]){const r={};u&8&&(r.$$scope={dirty:u,ctx:i}),t.$set(r)},i(i){n||(b(t.$$.fragment,i),n=!0)},o(i){y(t.$$.fragment,i),n=!1},d(i){_(t,i)}}}function K(l){return[`<style>
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
</style>`]}class U extends F{constructor(t){super(),O(this,t,K,J,q,{})}}export{U as component};
