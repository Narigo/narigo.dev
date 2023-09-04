import{s as W,a as I,c as N,i as h,d as m,f as F,l as f,g as L,h as E,m as $,A as q,j,x as g}from"../chunks/scheduler.58de62d3.js";import{S as J,i as B,b as _,d as b,m as x,a as w,t as k,e as v}from"../chunks/index.698fb7dd.js";import{C as A}from"../chunks/Code.f01f5db6.js";import{N as D}from"../chunks/Narigo.08d9f4ea.js";import{P as G,a as H}from"../chunks/PuzzlePageLayout.c6ce44ec.js";function K(l){let e;return{c(){e=f("-webkit-box-reflect")},l(a){e=$(a,"-webkit-box-reflect")},m(a,t){h(a,e,t)},d(a){a&&m(e)}}}function M(l){let e;return{c(){e=f("r")},l(a){e=$(a,"r")},m(a,t){h(a,e,t)},d(a){a&&m(e)}}}function O(l){let e,a,t,o,n,i="JSCraftCamp 2023",d,y,u,P,p,C,z;return t=new A({props:{$$slots:{default:[K]},$$scope:{ctx:l}}}),p=new A({props:{$$slots:{default:[M]},$$scope:{ctx:l}}}),{c(){e=F("p"),a=f("Lots of "),_(t.$$.fragment),o=f(` in here! We did this 100% solution at the
			`),n=F("a"),n.textContent=i,d=f(` in a group. Later, we started
			working on another solution with gradients. Somehow the numbers didn't really add up, so maybe
			other units like percentages or similar should have been used to cleanly get to 100%.`),y=I(),u=F("p"),P=f("Interestingly, using "),_(p.$$.fragment),C=f(` (or other non-assigned names) as an element name seems to work
			out as block elements!`),this.h()},l(s){e=L(s,"P",{});var r=E(e);a=$(r,"Lots of "),b(t.$$.fragment,r),o=$(r,` in here! We did this 100% solution at the
			`),n=L(r,"A",{href:!0,rel:!0,"data-svelte-h":!0}),q(n)!=="svelte-ixs3ed"&&(n.textContent=i),d=$(r,` in a group. Later, we started
			working on another solution with gradients. Somehow the numbers didn't really add up, so maybe
			other units like percentages or similar should have been used to cleanly get to 100%.`),r.forEach(m),y=N(s),u=L(s,"P",{});var c=E(u);P=$(c,"Interestingly, using "),b(p.$$.fragment,c),C=$(c,` (or other non-assigned names) as an element name seems to work
			out as block elements!`),c.forEach(m),this.h()},h(){j(n,"href","https://jscraftcamp.org"),j(n,"rel","external")},m(s,r){h(s,e,r),g(e,a),x(t,e,null),g(e,o),g(e,n),g(e,d),h(s,y,r),h(s,u,r),g(u,P),x(p,u,null),g(u,C),z=!0},p(s,r){const c={};r&2&&(c.$$scope={dirty:r,ctx:s}),t.$set(c);const S={};r&2&&(S.$$scope={dirty:r,ctx:s}),p.$set(S)},i(s){z||(w(t.$$.fragment,s),w(p.$$.fragment,s),z=!0)},o(s){k(t.$$.fragment,s),k(p.$$.fragment,s),z=!1},d(s){s&&(m(e),m(y),m(u)),v(t),v(p)}}}function Q(l){let e,a,t,o;return e=new H({props:{title:"Puzzle 57 solution",solution:l[0]}}),t=new D({props:{$$slots:{default:[O]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment),a=I(),_(t.$$.fragment)},l(n){b(e.$$.fragment,n),a=N(n),b(t.$$.fragment,n)},m(n,i){x(e,n,i),h(n,a,i),x(t,n,i),o=!0},p(n,i){const d={};i&2&&(d.$$scope={dirty:i,ctx:n}),t.$set(d)},i(n){o||(w(e.$$.fragment,n),w(t.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),k(t.$$.fragment,n),o=!1},d(n){n&&m(a),v(e,n),v(t,n)}}}function R(l){let e,a;return e=new G({props:{title:"Pillars",$$slots:{default:[Q]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,o){x(e,t,o),a=!0},p(t,[o]){const n={};o&2&&(n.$$scope={dirty:o,ctx:t}),e.$set(n)},i(t){a||(w(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){v(e,t)}}}function T(l){return[`<r>
  <div id=a>
  <div class=pillar>
    <div class=blue></div>
  </div>
  </div>
</r>
<style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  r {
    width: 110px;
    height: 110px;
    background: #4F77FF;
  }

  #a {
    -webkit-box-reflect: below 60px;
  }

  .pillar {
    background: #F9E492;
    border-radius: 50%;
    box-shadow: #191919 8px 8px 0px 7px;
    margin: -20px;
    height: 45px;
    width: 45px;
    -webkit-box-reflect: right 60px;
  }

  .blue {
    background: #4F77FF;
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }
</style>
`]}class ee extends J{constructor(e){super(),B(this,e,T,R,W,{})}}export{ee as component};
