import{S as O,i as W,s as j,y as E,z as P,A as C,g as F,d as S,B as L,a as J,c as N,b as w,h as u,k as g,q as c,l as $,m as b,r as d,n as I,G as l,H as B}from"../chunks/index.b1660a48.js";import{N as G}from"../chunks/Narigo.1c5e5246.js";import{P as H,a as K}from"../chunks/PuzzlePageLayout.fbe6c2ec.js";function M(m){let e,n,t,r,a,o,f,k,_,p,y,h,v,z;return{c(){e=g("p"),n=c("Lots of "),t=g("code"),r=c("-webkit-box-reflect"),a=c(` in here! We did this 100% solution at the
			`),o=g("a"),f=c("JSCraftCamp 2023"),k=c(` in a group. Later, we started
			working on another solution with gradients. Somehow the numbers didn't really add up, so maybe
			other units like percentages or similar should have been used to cleanly get to 100%.`),_=J(),p=g("p"),y=c("Interestingly, using "),h=g("code"),v=c("r"),z=c(` (or other non-assigned names) as an element name seems to work
			out as block elements!`),this.h()},l(s){e=$(s,"P",{});var i=b(e);n=d(i,"Lots of "),t=$(i,"CODE",{});var q=b(t);r=d(q,"-webkit-box-reflect"),q.forEach(u),a=d(i,` in here! We did this 100% solution at the
			`),o=$(i,"A",{href:!0,rel:!0});var A=b(o);f=d(A,"JSCraftCamp 2023"),A.forEach(u),k=d(i,` in a group. Later, we started
			working on another solution with gradients. Somehow the numbers didn't really add up, so maybe
			other units like percentages or similar should have been used to cleanly get to 100%.`),i.forEach(u),_=N(s),p=$(s,"P",{});var x=b(p);y=d(x,"Interestingly, using "),h=$(x,"CODE",{});var D=b(h);v=d(D,"r"),D.forEach(u),z=d(x,` (or other non-assigned names) as an element name seems to work
			out as block elements!`),x.forEach(u),this.h()},h(){I(o,"href","https://jscraftcamp.org"),I(o,"rel","external")},m(s,i){w(s,e,i),l(e,n),l(e,t),l(t,r),l(e,a),l(e,o),l(o,f),l(e,k),w(s,_,i),w(s,p,i),l(p,y),l(p,h),l(h,v),l(p,z)},p:B,d(s){s&&u(e),s&&u(_),s&&u(p)}}}function Q(m){let e,n,t,r;return e=new K({props:{title:"Puzzle 57 solution",solution:m[0]}}),t=new G({props:{$$slots:{default:[M]},$$scope:{ctx:m}}}),{c(){E(e.$$.fragment),n=J(),E(t.$$.fragment)},l(a){P(e.$$.fragment,a),n=N(a),P(t.$$.fragment,a)},m(a,o){C(e,a,o),w(a,n,o),C(t,a,o),r=!0},p(a,o){const f={};o&2&&(f.$$scope={dirty:o,ctx:a}),t.$set(f)},i(a){r||(F(e.$$.fragment,a),F(t.$$.fragment,a),r=!0)},o(a){S(e.$$.fragment,a),S(t.$$.fragment,a),r=!1},d(a){L(e,a),a&&u(n),L(t,a)}}}function R(m){let e,n;return e=new H({props:{title:"Skull",$$slots:{default:[Q]},$$scope:{ctx:m}}}),{c(){E(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){C(e,t,r),n=!0},p(t,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function T(m){return[`<r>
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
`]}class Y extends O{constructor(e){super(),W(this,e,T,R,j,{})}}export{Y as component};
