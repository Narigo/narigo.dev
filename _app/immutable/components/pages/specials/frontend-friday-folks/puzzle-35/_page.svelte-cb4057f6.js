import{S as W,i as q,s as H,w as B,x as D,y as N,f as z,t as E,z as A,C as T,k as b,a as F,q as m,l as y,m as v,h as n,c as k,r as h,n as g,p as x,b as d,G as _,D as U,E as V,F as j,B as R}from"../../../../../chunks/index-71762e76.js";import{B as G}from"../../../../../chunks/Bubble-6e52e72e.js";import{N as J}from"../../../../../chunks/Narigo-97af1811.js";import{P as K}from"../../../../../chunks/PageLayout-a8cc42eb.js";function O(i){let e,a,s,l,t,r=i[1].length+"",f,u,P,w,I,C,$;const L=i[3].default,c=T(L,i,i[4],null);return{c(){e=b("div"),a=b("iframe"),s=F(),l=b("div"),t=m("Highlighted solution ("),f=m(r),u=m(" characters)"),P=F(),w=b("pre"),I=m(i[1]),C=F(),c&&c.c(),this.h()},l(o){e=y(o,"DIV",{class:!0});var p=v(e);a=y(p,"IFRAME",{title:!0,style:!0,srcdoc:!0,class:!0}),v(a).forEach(n),p.forEach(n),s=k(o),l=y(o,"DIV",{});var S=v(l);t=h(S,"Highlighted solution ("),f=h(S,r),u=h(S," characters)"),S.forEach(n),P=k(o),w=y(o,"PRE",{});var M=v(w);I=h(M,i[1]),M.forEach(n),C=k(o),c&&c.l(o),this.h()},h(){g(a,"title",i[0]),x(a,"background","white"),x(a,"width","400px"),x(a,"height","300px"),x(a,"border","0px"),x(a,"outline","0px"),x(a,"box-sizing","border-box"),g(a,"srcdoc",`<html><head><style>body{overflow:hidden;}</style></head><body>${i[1]}</body></html>`),g(a,"class","svelte-16daxt3"),g(e,"class","iframe-container svelte-16daxt3")},m(o,p){d(o,e,p),_(e,a),d(o,s,p),d(o,l,p),_(l,t),_(l,f),_(l,u),d(o,P,p),d(o,w,p),_(w,I),d(o,C,p),c&&c.m(o,p),$=!0},p(o,p){(!$||p&1)&&g(a,"title",o[0]),c&&c.p&&(!$||p&16)&&U(c,L,o,o[4],$?j(L,o[4],p,null):V(o[4]),null)},i(o){$||(z(c,o),$=!0)},o(o){E(c,o),$=!1},d(o){o&&n(e),o&&n(s),o&&n(l),o&&n(P),o&&n(w),o&&n(C),c&&c.d(o)}}}function Q(i){let e,a;return e=new K({props:{$$slots:{default:[O]},$$scope:{ctx:i}}}),{c(){B(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,l){N(e,s,l),a=!0},p(s,[l]){const t={};l&17&&(t.$$scope={dirty:l,ctx:s}),e.$set(t)},i(s){a||(z(e.$$.fragment,s),a=!0)},o(s){E(e.$$.fragment,s),a=!1},d(s){A(e,s)}}}function X(i,e,a){let{$$slots:s={},$$scope:l}=e,{solution:t}=e,{title:r}=e;const f=t.trim();return i.$$set=u=>{"solution"in u&&a(2,t=u.solution),"title"in u&&a(0,r=u.title),"$$scope"in u&&a(4,l=u.$$scope)},[r,f,t,s,l]}class Y extends W{constructor(e){super(),q(this,e,X,Q,H,{solution:2,title:0})}}function Z(i){let e,a,s,l,t;return{c(){e=b("p"),a=m(`While we can do the popsicle and the stick with border radius, the presented solution shows
			another way, how to solve this. By using multiple backgrounds, stacked on top of each other,
			it's possible to create the same effect with gradients.`),s=F(),l=b("p"),t=m("The solution shows")},l(r){e=y(r,"P",{});var f=v(e);a=h(f,`While we can do the popsicle and the stick with border radius, the presented solution shows
			another way, how to solve this. By using multiple backgrounds, stacked on top of each other,
			it's possible to create the same effect with gradients.`),f.forEach(n),s=k(r),l=y(r,"P",{});var u=v(l);t=h(u,"The solution shows"),u.forEach(n)},m(r,f){d(r,e,f),_(e,a),d(r,s,f),d(r,l,f),_(l,t)},p:R,d(r){r&&n(e),r&&n(s),r&&n(l)}}}function ee(i){let e,a,s,l;return{c(){e=m("MDN has a great "),a=b("a"),s=m("explanation for using multiple backgrounds"),l=m("."),this.h()},l(t){e=h(t,"MDN has a great "),a=y(t,"A",{href:!0,rel:!0});var r=v(a);s=h(r,"explanation for using multiple backgrounds"),r.forEach(n),l=h(t,"."),this.h()},h(){g(a,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"),g(a,"rel","external")},m(t,r){d(t,e,r),d(t,a,r),_(a,s),d(t,l,r)},p:R,d(t){t&&n(e),t&&n(a),t&&n(l)}}}function te(i){let e,a,s,l;return e=new J({props:{$$slots:{default:[Z]},$$scope:{ctx:i}}}),s=new G({props:{side:"right",$$slots:{default:[ee]},$$scope:{ctx:i}}}),{c(){B(e.$$.fragment),a=F(),B(s.$$.fragment)},l(t){D(e.$$.fragment,t),a=k(t),D(s.$$.fragment,t)},m(t,r){N(e,t,r),d(t,a,r),N(s,t,r),l=!0},p(t,r){const f={};r&2&&(f.$$scope={dirty:r,ctx:t}),e.$set(f);const u={};r&2&&(u.$$scope={dirty:r,ctx:t}),s.$set(u)},i(t){l||(z(e.$$.fragment,t),z(s.$$.fragment,t),l=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),l=!1},d(t){A(e,t),t&&n(a),A(s,t)}}}function se(i){let e,a;return e=new Y({props:{title:"Puzzle 35 solution",solution:i[0],$$slots:{default:[te]},$$scope:{ctx:i}}}),{c(){B(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,l){N(e,s,l),a=!0},p(s,[l]){const t={};l&2&&(t.$$scope={dirty:l,ctx:s}),e.$set(t)},i(s){a||(z(e.$$.fragment,s),a=!0)},o(s){E(e.$$.fragment,s),a=!1},d(s){A(e,s)}}}function ae(i){return[`<div id="y"></div>
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
</style>`]}class ne extends W{constructor(e){super(),q(this,e,ae,se,H,{})}}export{ne as default};
