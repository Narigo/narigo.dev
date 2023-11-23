import{s as C,a as P,c as S,i as u,d as $,l as m,f as k,m as f,g as A,A as N,j as b}from"../chunks/scheduler.oS2FPi-b.js";import{S as D,i as I,b as p,d,m as g,a as _,t as h,e as z}from"../chunks/index.ICQ99_FX.js";import{C as y}from"../chunks/Code.NieIvAYp.js";import{N as L}from"../chunks/Narigo.cTuC28Fb.js";import{P as T,a as j}from"../chunks/PuzzlePageLayout.FY16PZR5.js";function q(l){let t;return{c(){t=m("isolation: isolate")},l(e){t=f(e,"isolation: isolate")},m(e,o){u(e,t,o)},d(e){e&&$(t)}}}function E(l){let t;return{c(){t=m("position: absolute")},l(e){t=f(e,"position: absolute")},m(e,o){u(e,t,o)},d(e){e&&$(t)}}}function M(l){let t,e,o,a,s,i,c="MDN for more information about isolation",x,v;return e=new y({props:{$$slots:{default:[q]},$$scope:{ctx:l}}}),a=new y({props:{$$slots:{default:[E]},$$scope:{ctx:l}}}),{c(){t=m("This is the first time I used "),p(e.$$.fragment),o=m(`! From my understanding, it creates
		a new z-index stack and it allows me to put regular elements on top of each other, without
		having to `),p(a.$$.fragment),s=m(` them. See
		`),i=k("a"),i.textContent=c,x=m("."),this.h()},l(n){t=f(n,"This is the first time I used "),d(e.$$.fragment,n),o=f(n,`! From my understanding, it creates
		a new z-index stack and it allows me to put regular elements on top of each other, without
		having to `),d(a.$$.fragment,n),s=f(n,` them. See
		`),i=A(n,"A",{href:!0,rel:!0,"data-svelte-h":!0}),N(i)!=="svelte-1el6ygg"&&(i.textContent=c),x=f(n,"."),this.h()},h(){b(i,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/isolation"),b(i,"rel","external")},m(n,r){u(n,t,r),g(e,n,r),u(n,o,r),g(a,n,r),u(n,s,r),u(n,i,r),u(n,x,r),v=!0},p(n,r){const w={};r&2&&(w.$$scope={dirty:r,ctx:n}),e.$set(w);const F={};r&2&&(F.$$scope={dirty:r,ctx:n}),a.$set(F)},i(n){v||(_(e.$$.fragment,n),_(a.$$.fragment,n),v=!0)},o(n){h(e.$$.fragment,n),h(a.$$.fragment,n),v=!1},d(n){n&&($(t),$(o),$(s),$(i),$(x)),z(e,n),z(a,n)}}}function U(l){let t,e,o,a;return t=new j({props:{title:"Puzzle 53 solution",solution:l[0]}}),o=new L({props:{$$slots:{default:[M]},$$scope:{ctx:l}}}),{c(){p(t.$$.fragment),e=P(),p(o.$$.fragment)},l(s){d(t.$$.fragment,s),e=S(s),d(o.$$.fragment,s)},m(s,i){g(t,s,i),u(s,e,i),g(o,s,i),a=!0},p(s,i){const c={};i&2&&(c.$$scope={dirty:i,ctx:s}),o.$set(c)},i(s){a||(_(t.$$.fragment,s),_(o.$$.fragment,s),a=!0)},o(s){h(t.$$.fragment,s),h(o.$$.fragment,s),a=!1},d(s){s&&$(e),z(t,s),z(o,s)}}}function W(l){let t,e;return t=new T({props:{title:"Pastel Logo",$$slots:{default:[U]},$$scope:{ctx:l}}}),{c(){p(t.$$.fragment)},l(o){d(t.$$.fragment,o)},m(o,a){g(t,o,a),e=!0},p(o,[a]){const s={};a&2&&(s.$$scope={dirty:a,ctx:o}),t.$set(s)},i(o){e||(_(t.$$.fragment,o),e=!0)},o(o){h(t.$$.fragment,o),e=!1},d(o){z(t,o)}}}function B(l){return[`<div>
<div id=c></div>
<div id=r></div>
</div>
<style>
  body {
    display: grid;
    place-items: center;
    background: #19191A;
  }
  #c {
    isolation: isolate;
    background: conic-gradient(#4F77FF 50%, #9AD5FF 0 75%, #4F77FF 0);
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  #r {
    margin-top: -75px;
    width: 75px;
    height: 125px;
    background: #F9E492;
  }
</style>`]}class Q extends D{constructor(t){super(),I(this,t,B,W,C,{})}}export{Q as component};
