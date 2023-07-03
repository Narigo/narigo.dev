import{S as F,i as S,s as C,y as d,z as $,A as h,g,d as b,B as x,a as P,c as L,b as f,h as l,q as c,k as w,r as m,l as y,m as k,n as z,G as v,H as E}from"../chunks/index.b1660a48.js";import{N as q}from"../chunks/Narigo.1c5e5246.js";import{P as A,a as J}from"../chunks/PuzzlePageLayout.97ef4086.js";function N(u){let t,o,a,s,e,n,p;return{c(){t=c("Lots of "),o=w("code"),a=c("-webkit-box-reflect"),s=c(` in here! We did this 100% solution at the
		`),e=w("a"),n=c("JSCraftCamp 2023"),p=c(` in a group. Later, we started
		working on another solution with gradients. Somehow the numbers didn't really add up, so maybe other
		units like percentages or similar should have been used to cleanly get to 100%.`),this.h()},l(r){t=m(r,"Lots of "),o=y(r,"CODE",{});var i=k(o);a=m(i,"-webkit-box-reflect"),i.forEach(l),s=m(r,` in here! We did this 100% solution at the
		`),e=y(r,"A",{href:!0,rel:!0});var _=k(e);n=m(_,"JSCraftCamp 2023"),_.forEach(l),p=m(r,` in a group. Later, we started
		working on another solution with gradients. Somehow the numbers didn't really add up, so maybe other
		units like percentages or similar should have been used to cleanly get to 100%.`),this.h()},h(){z(e,"href","https://jscraftcamp.org"),z(e,"rel","external")},m(r,i){f(r,t,i),f(r,o,i),v(o,a),f(r,s,i),f(r,e,i),v(e,n),f(r,p,i)},p:E,d(r){r&&l(t),r&&l(o),r&&l(s),r&&l(e),r&&l(p)}}}function W(u){let t,o,a,s;return t=new J({props:{title:"Puzzle 57 solution",solution:u[0]}}),a=new q({props:{$$slots:{default:[N]},$$scope:{ctx:u}}}),{c(){d(t.$$.fragment),o=P(),d(a.$$.fragment)},l(e){$(t.$$.fragment,e),o=L(e),$(a.$$.fragment,e)},m(e,n){h(t,e,n),f(e,o,n),h(a,e,n),s=!0},p(e,n){const p={};n&2&&(p.$$scope={dirty:n,ctx:e}),a.$set(p)},i(e){s||(g(t.$$.fragment,e),g(a.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),b(a.$$.fragment,e),s=!1},d(e){x(t,e),e&&l(o),x(a,e)}}}function j(u){let t,o;return t=new A({props:{title:"Skull",$$slots:{default:[W]},$$scope:{ctx:u}}}),{c(){d(t.$$.fragment)},l(a){$(t.$$.fragment,a)},m(a,s){h(t,a,s),o=!0},p(a,[s]){const e={};s&2&&(e.$$scope={dirty:s,ctx:a}),t.$set(e)},i(a){o||(g(t.$$.fragment,a),o=!0)},o(a){b(t.$$.fragment,a),o=!1},d(a){x(t,a)}}}function B(u){return[`<r>
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
`]}class O extends F{constructor(t){super(),S(this,t,B,j,C,{})}}export{O as component};
