import{s as E,b as y,j as P,k as c,i as u,e as S,t as d,d as B,p as D,f as M,h as m,l as F,q as A,n as T}from"../chunks/scheduler.Ct-hQNXS.js";import{S as U,i as W,c as g,b as _,m as h,t as b,a as x,d as w}from"../chunks/index.DAUMTxUj.js";import{C as k}from"../chunks/Code.x-nWcPNg.js";import{B as I}from"../chunks/Bubble.DSJy4Wbk.js";import{N as L}from"../chunks/Narigo.BkWV0FXI.js";import{P as G,a as H}from"../chunks/PuzzlePageLayout.CYBvy01F.js";function J(p){let t;return{c(){t=d('<div id="r">')},l(e){t=m(e,'<div id="r">')},m(e,a){c(e,t,a)},d(e){e&&u(t)}}}function K(p){let t;return{c(){t=d("border-radius")},l(e){t=m(e,"border-radius")},m(e,a){c(e,t,a)},d(e){e&&u(t)}}}function O(p){let t;return{c(){t=d('<div id="y">')},l(e){t=m(e,'<div id="y">')},m(e,a){c(e,t,a)},d(e){e&&u(t)}}}function Q(p){let t,e=`While we can do the popsicle and the stick with border radius, the presented solution shows
			another way, how to solve this. By using multiple backgrounds, stacked on top of each other,
			it's possible to create the same effect with gradients.`,a,r,s,$,n,l,v,f,z,C;return $=new k({props:{$$slots:{default:[J]},$$scope:{ctx:p}}}),l=new k({props:{$$slots:{default:[K]},$$scope:{ctx:p}}}),f=new k({props:{$$slots:{default:[O]},$$scope:{ctx:p}}}),{c(){t=S("p"),t.textContent=e,a=y(),r=S("p"),s=d("The "),g($.$$.fragment),n=d(" shows the "),g(l.$$.fragment),v=d(` approach and the
			`),g(f.$$.fragment),z=d(" is all about using gradients to draw.")},l(o){t=B(o,"P",{"data-svelte-h":!0}),D(t)!=="svelte-15u5tam"&&(t.textContent=e),a=P(o),r=B(o,"P",{});var i=M(r);s=m(i,"The "),_($.$$.fragment,i),n=m(i," shows the "),_(l.$$.fragment,i),v=m(i,` approach and the
			`),_(f.$$.fragment,i),z=m(i," is all about using gradients to draw."),i.forEach(u)},m(o,i){c(o,t,i),c(o,a,i),c(o,r,i),F(r,s),h($,r,null),F(r,n),h(l,r,null),F(r,v),h(f,r,null),F(r,z),C=!0},p(o,i){const N={};i&2&&(N.$$scope={dirty:i,ctx:o}),$.$set(N);const j={};i&2&&(j.$$scope={dirty:i,ctx:o}),l.$set(j);const q={};i&2&&(q.$$scope={dirty:i,ctx:o}),f.$set(q)},i(o){C||(b($.$$.fragment,o),b(l.$$.fragment,o),b(f.$$.fragment,o),C=!0)},o(o){x($.$$.fragment,o),x(l.$$.fragment,o),x(f.$$.fragment,o),C=!1},d(o){o&&(u(t),u(a),u(r)),w($),w(l),w(f)}}}function R(p){let t,e,a="explanation for using multiple backgrounds",r;return{c(){t=d("MDN has a great "),e=S("a"),e.textContent=a,r=d("."),this.h()},l(s){t=m(s,"MDN has a great "),e=B(s,"A",{href:!0,rel:!0,"data-svelte-h":!0}),D(e)!=="svelte-v9f2c7"&&(e.textContent=a),r=m(s,"."),this.h()},h(){A(e,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"),A(e,"rel","external")},m(s,$){c(s,t,$),c(s,e,$),c(s,r,$)},p:T,d(s){s&&(u(t),u(e),u(r))}}}function V(p){let t,e,a,r,s,$;return t=new H({props:{title:"Puzzle 35 solution",solution:p[0]}}),a=new L({props:{$$slots:{default:[Q]},$$scope:{ctx:p}}}),s=new I({props:{side:"right",$$slots:{default:[R]},$$scope:{ctx:p}}}),{c(){g(t.$$.fragment),e=y(),g(a.$$.fragment),r=y(),g(s.$$.fragment)},l(n){_(t.$$.fragment,n),e=P(n),_(a.$$.fragment,n),r=P(n),_(s.$$.fragment,n)},m(n,l){h(t,n,l),c(n,e,l),h(a,n,l),c(n,r,l),h(s,n,l),$=!0},p(n,l){const v={};l&2&&(v.$$scope={dirty:l,ctx:n}),a.$set(v);const f={};l&2&&(f.$$scope={dirty:l,ctx:n}),s.$set(f)},i(n){$||(b(t.$$.fragment,n),b(a.$$.fragment,n),b(s.$$.fragment,n),$=!0)},o(n){x(t.$$.fragment,n),x(a.$$.fragment,n),x(s.$$.fragment,n),$=!1},d(n){n&&(u(e),u(r)),w(t,n),w(a,n),w(s,n)}}}function X(p){let t,e;return t=new G({props:{title:"Ice Cream",$$slots:{default:[V]},$$scope:{ctx:p}}}),{c(){g(t.$$.fragment)},l(a){_(t.$$.fragment,a)},m(a,r){h(t,a,r),e=!0},p(a,[r]){const s={};r&2&&(s.$$scope={dirty:r,ctx:a}),t.$set(s)},i(a){e||(b(t.$$.fragment,a),e=!0)},o(a){x(t.$$.fragment,a),e=!1},d(a){w(t,a)}}}function Y(p){return[`<div id="y"></div>
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
</style>`]}class st extends U{constructor(t){super(),W(this,t,Y,X,E,{})}}export{st as component};
