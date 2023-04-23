import{S as T,i as U,s as j,w as F,x as y,y as k,f as z,t as C,z as E,a as D,c as N,b as m,h as l,k as b,q as u,l as w,m as x,r as c,G as p,B as M,n as A}from"../../../../../chunks/index-ed5c000a.js";import{B as G}from"../../../../../chunks/Bubble-111f0336.js";import{N as I}from"../../../../../chunks/Narigo-406ea8d0.js";import{P as L,a as H}from"../../../../../chunks/PuzzlePageLayout-93dc3336.js";function J(f){let t,n,a,r,s,o,e,i,$,g,P,v,B,S;return{c(){t=b("p"),n=u(`While we can do the popsicle and the stick with border radius, the presented solution shows
			another way, how to solve this. By using multiple backgrounds, stacked on top of each other,
			it's possible to create the same effect with gradients.`),a=D(),r=b("p"),s=u("The "),o=b("code"),e=u('<div id="r">'),i=u(" shows the "),$=b("code"),g=u("border-radius"),P=u(` approach and the
			`),v=b("code"),B=u('<div id="y">'),S=u(" is all about using gradients to draw.")},l(d){t=w(d,"P",{});var _=x(t);n=c(_,`While we can do the popsicle and the stick with border radius, the presented solution shows
			another way, how to solve this. By using multiple backgrounds, stacked on top of each other,
			it's possible to create the same effect with gradients.`),_.forEach(l),a=N(d),r=w(d,"P",{});var h=x(r);s=c(h,"The "),o=w(h,"CODE",{});var O=x(o);e=c(O,'<div id="r">'),O.forEach(l),i=c(h," shows the "),$=w(h,"CODE",{});var W=x($);g=c(W,"border-radius"),W.forEach(l),P=c(h,` approach and the
			`),v=w(h,"CODE",{});var q=x(v);B=c(q,'<div id="y">'),q.forEach(l),S=c(h," is all about using gradients to draw."),h.forEach(l)},m(d,_){m(d,t,_),p(t,n),m(d,a,_),m(d,r,_),p(r,s),p(r,o),p(o,e),p(r,i),p(r,$),p($,g),p(r,P),p(r,v),p(v,B),p(r,S)},p:M,d(d){d&&l(t),d&&l(a),d&&l(r)}}}function K(f){let t,n,a,r;return{c(){t=u("MDN has a great "),n=b("a"),a=u("explanation for using multiple backgrounds"),r=u("."),this.h()},l(s){t=c(s,"MDN has a great "),n=w(s,"A",{href:!0,rel:!0});var o=x(n);a=c(o,"explanation for using multiple backgrounds"),o.forEach(l),r=c(s,"."),this.h()},h(){A(n,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"),A(n,"rel","external")},m(s,o){m(s,t,o),m(s,n,o),p(n,a),m(s,r,o)},p:M,d(s){s&&l(t),s&&l(n),s&&l(r)}}}function Q(f){let t,n,a,r,s,o;return t=new H({props:{title:"Puzzle 35 solution",solution:f[0]}}),a=new I({props:{$$slots:{default:[J]},$$scope:{ctx:f}}}),s=new G({props:{side:"right",$$slots:{default:[K]},$$scope:{ctx:f}}}),{c(){F(t.$$.fragment),n=D(),F(a.$$.fragment),r=D(),F(s.$$.fragment)},l(e){y(t.$$.fragment,e),n=N(e),y(a.$$.fragment,e),r=N(e),y(s.$$.fragment,e)},m(e,i){k(t,e,i),m(e,n,i),k(a,e,i),m(e,r,i),k(s,e,i),o=!0},p(e,i){const $={};i&2&&($.$$scope={dirty:i,ctx:e}),a.$set($);const g={};i&2&&(g.$$scope={dirty:i,ctx:e}),s.$set(g)},i(e){o||(z(t.$$.fragment,e),z(a.$$.fragment,e),z(s.$$.fragment,e),o=!0)},o(e){C(t.$$.fragment,e),C(a.$$.fragment,e),C(s.$$.fragment,e),o=!1},d(e){E(t,e),e&&l(n),E(a,e),e&&l(r),E(s,e)}}}function R(f){let t,n;return t=new L({props:{title:"Ice Cream",$$slots:{default:[Q]},$$scope:{ctx:f}}}),{c(){F(t.$$.fragment)},l(a){y(t.$$.fragment,a)},m(a,r){k(t,a,r),n=!0},p(a,[r]){const s={};r&2&&(s.$$scope={dirty:r,ctx:a}),t.$set(s)},i(a){n||(z(t.$$.fragment,a),n=!0)},o(a){C(t.$$.fragment,a),n=!1},d(a){E(t,a)}}}function V(f){return[`<div id="y"></div>
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
</style>`]}class te extends T{constructor(t){super(),U(this,t,V,R,j,{})}}export{te as default};
