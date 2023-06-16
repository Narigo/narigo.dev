import{S as D,i as A,s as C,y as x,z as b,A as w,g as y,d as F,B as P,a as N,c as q,b as m,h as n,q as c,k as g,r as $,l as h,m as z,n as E,G as v,H as I}from"../chunks/index.3d7f15fc.js";import{N as L}from"../chunks/Narigo.f2af5427.js";import{P as M,a as O}from"../chunks/PuzzlePageLayout.5cca13de.js";function T(f){let e,i,o,s,t,r,p,u,_,d;return{c(){e=c("This is the first time I used "),i=g("code"),o=c("isolation: isolate"),s=c(`! From my understanding, it creates
		a new z-index stack and it allows me to put regular elements on top of each other, without
		having to `),t=g("code"),r=c("position: absolute"),p=c(` them. See
		`),u=g("a"),_=c("MDN for more information about isolation"),d=c("."),this.h()},l(a){e=$(a,"This is the first time I used "),i=h(a,"CODE",{});var l=z(i);o=$(l,"isolation: isolate"),l.forEach(n),s=$(a,`! From my understanding, it creates
		a new z-index stack and it allows me to put regular elements on top of each other, without
		having to `),t=h(a,"CODE",{});var S=z(t);r=$(S,"position: absolute"),S.forEach(n),p=$(a,` them. See
		`),u=h(a,"A",{href:!0,rel:!0});var k=z(u);_=$(k,"MDN for more information about isolation"),k.forEach(n),d=$(a,"."),this.h()},h(){E(u,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/isolation"),E(u,"rel","external")},m(a,l){m(a,e,l),m(a,i,l),v(i,o),m(a,s,l),m(a,t,l),v(t,r),m(a,p,l),m(a,u,l),v(u,_),m(a,d,l)},p:I,d(a){a&&n(e),a&&n(i),a&&n(s),a&&n(t),a&&n(p),a&&n(u),a&&n(d)}}}function B(f){let e,i,o,s;return e=new O({props:{title:"Puzzle 53 solution",solution:f[0]}}),o=new L({props:{$$slots:{default:[T]},$$scope:{ctx:f}}}),{c(){x(e.$$.fragment),i=N(),x(o.$$.fragment)},l(t){b(e.$$.fragment,t),i=q(t),b(o.$$.fragment,t)},m(t,r){w(e,t,r),m(t,i,r),w(o,t,r),s=!0},p(t,r){const p={};r&2&&(p.$$scope={dirty:r,ctx:t}),o.$set(p)},i(t){s||(y(e.$$.fragment,t),y(o.$$.fragment,t),s=!0)},o(t){F(e.$$.fragment,t),F(o.$$.fragment,t),s=!1},d(t){P(e,t),t&&n(i),P(o,t)}}}function G(f){let e,i;return e=new M({props:{title:"Pastel Logo",$$slots:{default:[B]},$$scope:{ctx:f}}}),{c(){x(e.$$.fragment)},l(o){b(e.$$.fragment,o)},m(o,s){w(e,o,s),i=!0},p(o,[s]){const t={};s&2&&(t.$$scope={dirty:s,ctx:o}),e.$set(t)},i(o){i||(y(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){P(e,o)}}}function H(f){return[`<div>
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
</style>`]}class J extends D{constructor(e){super(),A(this,e,H,G,C,{})}}export{J as component};
