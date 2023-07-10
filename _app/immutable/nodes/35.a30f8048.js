import{s as P,a as S,c as k,i as r,d as u,l as d,f as g,m as $,g as h,A as _,j as b,y as A}from"../chunks/scheduler.52b7490a.js";import{S as D,i as E,b as x,d as v,m as z,a as C,t as y,e as w}from"../chunks/index.644eb738.js";import{N}from"../chunks/Narigo.e24b860c.js";import{P as I,a as L}from"../chunks/PuzzlePageLayout.389c71ed.js";function O(m){let e,o,n="isolation: isolate",s,t,i="position: absolute",c,l,F="MDN for more information about isolation",p;return{c(){e=d("This is the first time I used "),o=g("code"),o.textContent=n,s=d(`! From my understanding, it creates
		a new z-index stack and it allows me to put regular elements on top of each other, without
		having to `),t=g("code"),t.textContent=i,c=d(` them. See
		`),l=g("a"),l.textContent=F,p=d("."),this.h()},l(a){e=$(a,"This is the first time I used "),o=h(a,"CODE",{"data-svelte-h":!0}),_(o)!=="svelte-hayatv"&&(o.textContent=n),s=$(a,`! From my understanding, it creates
		a new z-index stack and it allows me to put regular elements on top of each other, without
		having to `),t=h(a,"CODE",{"data-svelte-h":!0}),_(t)!=="svelte-9lfeoc"&&(t.textContent=i),c=$(a,` them. See
		`),l=h(a,"A",{href:!0,rel:!0,"data-svelte-h":!0}),_(l)!=="svelte-1el6ygg"&&(l.textContent=F),p=$(a,"."),this.h()},h(){b(l,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/isolation"),b(l,"rel","external")},m(a,f){r(a,e,f),r(a,o,f),r(a,s,f),r(a,t,f),r(a,c,f),r(a,l,f),r(a,p,f)},p:A,d(a){a&&(u(e),u(o),u(s),u(t),u(c),u(l),u(p))}}}function T(m){let e,o,n,s;return e=new L({props:{title:"Puzzle 53 solution",solution:m[0]}}),n=new N({props:{$$slots:{default:[O]},$$scope:{ctx:m}}}),{c(){x(e.$$.fragment),o=S(),x(n.$$.fragment)},l(t){v(e.$$.fragment,t),o=k(t),v(n.$$.fragment,t)},m(t,i){z(e,t,i),r(t,o,i),z(n,t,i),s=!0},p(t,i){const c={};i&2&&(c.$$scope={dirty:i,ctx:t}),n.$set(c)},i(t){s||(C(e.$$.fragment,t),C(n.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),y(n.$$.fragment,t),s=!1},d(t){t&&u(o),w(e,t),w(n,t)}}}function j(m){let e,o;return e=new I({props:{title:"Pastel Logo",$$slots:{default:[T]},$$scope:{ctx:m}}}),{c(){x(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,s){z(e,n,s),o=!0},p(n,[s]){const t={};s&2&&(t.$$scope={dirty:s,ctx:n}),e.$set(t)},i(n){o||(C(e.$$.fragment,n),o=!0)},o(n){y(e.$$.fragment,n),o=!1},d(n){w(e,n)}}}function q(m){return[`<div>
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
</style>`]}class G extends D{constructor(e){super(),E(this,e,q,j,P,{})}}export{G as component};
