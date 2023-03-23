import{S as T,i as U,s as j,w as C,x as z,y as E,f as B,t as P,z as S,a as q,c as A,b as f,h as n,k as g,q as p,l as _,m as b,r as d,G as i,B as M,n as W}from"../../../../../chunks/index-543a8e9c.js";import{B as G}from"../../../../../chunks/Bubble-4e6bc313.js";import{N as L}from"../../../../../chunks/Narigo-aec83592.js";import{P as H}from"../../../../../chunks/PuzzlePageLayout-913b8df1.js";function I(c){let e,s,a,r,t,o,h,m,x,v,F,w,y,k;return{c(){e=g("p"),s=p(`While we can do the popsicle and the stick with border radius, the presented solution shows
			another way, how to solve this. By using multiple backgrounds, stacked on top of each other,
			it's possible to create the same effect with gradients.`),a=q(),r=g("p"),t=p("The "),o=g("code"),h=p('<div id="r">'),m=p(" shows the "),x=g("code"),v=p("border-radius"),F=p(` approach and the
			`),w=g("code"),y=p('<div id="y">'),k=p(" is all about using gradients to draw.")},l(l){e=_(l,"P",{});var $=b(e);s=d($,`While we can do the popsicle and the stick with border radius, the presented solution shows
			another way, how to solve this. By using multiple backgrounds, stacked on top of each other,
			it's possible to create the same effect with gradients.`),$.forEach(n),a=A(l),r=_(l,"P",{});var u=b(r);t=d(u,"The "),o=_(u,"CODE",{});var D=b(o);h=d(D,'<div id="r">'),D.forEach(n),m=d(u," shows the "),x=_(u,"CODE",{});var N=b(x);v=d(N,"border-radius"),N.forEach(n),F=d(u,` approach and the
			`),w=_(u,"CODE",{});var O=b(w);y=d(O,'<div id="y">'),O.forEach(n),k=d(u," is all about using gradients to draw."),u.forEach(n)},m(l,$){f(l,e,$),i(e,s),f(l,a,$),f(l,r,$),i(r,t),i(r,o),i(o,h),i(r,m),i(r,x),i(x,v),i(r,F),i(r,w),i(w,y),i(r,k)},p:M,d(l){l&&n(e),l&&n(a),l&&n(r)}}}function J(c){let e,s,a,r;return{c(){e=p("MDN has a great "),s=g("a"),a=p("explanation for using multiple backgrounds"),r=p("."),this.h()},l(t){e=d(t,"MDN has a great "),s=_(t,"A",{href:!0,rel:!0});var o=b(s);a=d(o,"explanation for using multiple backgrounds"),o.forEach(n),r=d(t,"."),this.h()},h(){W(s,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"),W(s,"rel","external")},m(t,o){f(t,e,o),f(t,s,o),i(s,a),f(t,r,o)},p:M,d(t){t&&n(e),t&&n(s),t&&n(r)}}}function K(c){let e,s,a,r;return e=new L({props:{$$slots:{default:[I]},$$scope:{ctx:c}}}),a=new G({props:{side:"right",$$slots:{default:[J]},$$scope:{ctx:c}}}),{c(){C(e.$$.fragment),s=q(),C(a.$$.fragment)},l(t){z(e.$$.fragment,t),s=A(t),z(a.$$.fragment,t)},m(t,o){E(e,t,o),f(t,s,o),E(a,t,o),r=!0},p(t,o){const h={};o&2&&(h.$$scope={dirty:o,ctx:t}),e.$set(h);const m={};o&2&&(m.$$scope={dirty:o,ctx:t}),a.$set(m)},i(t){r||(B(e.$$.fragment,t),B(a.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),P(a.$$.fragment,t),r=!1},d(t){S(e,t),t&&n(s),S(a,t)}}}function Q(c){let e,s;return e=new H({props:{title:"Puzzle 35 solution",solution:c[0],$$slots:{default:[K]},$$scope:{ctx:c}}}),{c(){C(e.$$.fragment)},l(a){z(e.$$.fragment,a)},m(a,r){E(e,a,r),s=!0},p(a,[r]){const t={};r&2&&(t.$$scope={dirty:r,ctx:a}),e.$set(t)},i(a){s||(B(e.$$.fragment,a),s=!0)},o(a){P(e.$$.fragment,a),s=!1},d(a){S(e,a)}}}function R(c){return[`<div id="y"></div>
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
</style>`]}class tt extends T{constructor(e){super(),U(this,e,R,Q,j,{})}}export{tt as default};
