import{S as W,i as q,s as H,w as A,x as I,y as L,f as B,t as N,z as M,C as T,k as y,a as D,q as p,l as w,m as x,h as d,c as S,r as h,n as z,p as C,b as m,G as c,D as U,E as V,F as j,B as R}from"../../../../../chunks/index-71762e76.js";import{B as G}from"../../../../../chunks/Bubble-6e52e72e.js";import{N as J}from"../../../../../chunks/Narigo-97af1811.js";import{P as K}from"../../../../../chunks/PageLayout-a8cc42eb.js";function Q(n){let e,a,s,r,t,o=n[1].length+"",_,f,g,b,F,v,$;const E=n[3].default,i=T(E,n,n[4],null);return{c(){e=y("div"),a=y("iframe"),s=D(),r=y("div"),t=p("Highlighted solution ("),_=p(o),f=p(" characters)"),g=D(),b=y("pre"),F=p(n[1]),v=D(),i&&i.c(),this.h()},l(l){e=w(l,"DIV",{class:!0});var u=x(e);a=w(u,"IFRAME",{title:!0,style:!0,srcdoc:!0,class:!0}),x(a).forEach(d),u.forEach(d),s=S(l),r=w(l,"DIV",{});var k=x(r);t=h(k,"Highlighted solution ("),_=h(k,o),f=h(k," characters)"),k.forEach(d),g=S(l),b=w(l,"PRE",{});var P=x(b);F=h(P,n[1]),P.forEach(d),v=S(l),i&&i.l(l),this.h()},h(){z(a,"title",n[0]),C(a,"background","white"),C(a,"width","400px"),C(a,"height","300px"),C(a,"border","0px"),C(a,"outline","0px"),C(a,"box-sizing","border-box"),z(a,"srcdoc",`<html><head><style>body{overflow:hidden;}</style></head><body>${n[1]}</body></html>`),z(a,"class","svelte-16daxt3"),z(e,"class","iframe-container svelte-16daxt3")},m(l,u){m(l,e,u),c(e,a),m(l,s,u),m(l,r,u),c(r,t),c(r,_),c(r,f),m(l,g,u),m(l,b,u),c(b,F),m(l,v,u),i&&i.m(l,u),$=!0},p(l,u){(!$||u&1)&&z(a,"title",l[0]),i&&i.p&&(!$||u&16)&&U(i,E,l,l[4],$?j(E,l[4],u,null):V(l[4]),null)},i(l){$||(B(i,l),$=!0)},o(l){N(i,l),$=!1},d(l){l&&d(e),l&&d(s),l&&d(r),l&&d(g),l&&d(b),l&&d(v),i&&i.d(l)}}}function X(n){let e,a;return e=new K({props:{$$slots:{default:[Q]},$$scope:{ctx:n}}}),{c(){A(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,r){L(e,s,r),a=!0},p(s,[r]){const t={};r&17&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){a||(B(e.$$.fragment,s),a=!0)},o(s){N(e.$$.fragment,s),a=!1},d(s){M(e,s)}}}function Y(n,e,a){let{$$slots:s={},$$scope:r}=e,{solution:t}=e,{title:o}=e;const _=t.trim();return n.$$set=f=>{"solution"in f&&a(2,t=f.solution),"title"in f&&a(0,o=f.title),"$$scope"in f&&a(4,r=f.$$scope)},[o,_,t,s,r]}class Z extends W{constructor(e){super(),q(this,e,Y,X,H,{solution:2,title:0})}}function ee(n){let e,a,s,r,t,o,_,f,g,b,F,v,$,E;return{c(){e=y("p"),a=p(`While we can do the popsicle and the stick with border radius, the presented solution shows
			another way, how to solve this. By using multiple backgrounds, stacked on top of each other,
			it's possible to create the same effect with gradients.`),s=D(),r=y("p"),t=p("The "),o=y("code"),_=p('<div id="r">'),f=p(" shows the "),g=y("code"),b=p("border-radius"),F=p(` approach and the
			`),v=y("code"),$=p('<div id="y">'),E=p(" is all about using gradients to draw.")},l(i){e=w(i,"P",{});var l=x(e);a=h(l,`While we can do the popsicle and the stick with border radius, the presented solution shows
			another way, how to solve this. By using multiple backgrounds, stacked on top of each other,
			it's possible to create the same effect with gradients.`),l.forEach(d),s=S(i),r=w(i,"P",{});var u=x(r);t=h(u,"The "),o=w(u,"CODE",{});var k=x(o);_=h(k,'<div id="r">'),k.forEach(d),f=h(u," shows the "),g=w(u,"CODE",{});var P=x(g);b=h(P,"border-radius"),P.forEach(d),F=h(u,` approach and the
			`),v=w(u,"CODE",{});var O=x(v);$=h(O,'<div id="y">'),O.forEach(d),E=h(u," is all about using gradients to draw."),u.forEach(d)},m(i,l){m(i,e,l),c(e,a),m(i,s,l),m(i,r,l),c(r,t),c(r,o),c(o,_),c(r,f),c(r,g),c(g,b),c(r,F),c(r,v),c(v,$),c(r,E)},p:R,d(i){i&&d(e),i&&d(s),i&&d(r)}}}function te(n){let e,a,s,r;return{c(){e=p("MDN has a great "),a=y("a"),s=p("explanation for using multiple backgrounds"),r=p("."),this.h()},l(t){e=h(t,"MDN has a great "),a=w(t,"A",{href:!0,rel:!0});var o=x(a);s=h(o,"explanation for using multiple backgrounds"),o.forEach(d),r=h(t,"."),this.h()},h(){z(a,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"),z(a,"rel","external")},m(t,o){m(t,e,o),m(t,a,o),c(a,s),m(t,r,o)},p:R,d(t){t&&d(e),t&&d(a),t&&d(r)}}}function se(n){let e,a,s,r;return e=new J({props:{$$slots:{default:[ee]},$$scope:{ctx:n}}}),s=new G({props:{side:"right",$$slots:{default:[te]},$$scope:{ctx:n}}}),{c(){A(e.$$.fragment),a=D(),A(s.$$.fragment)},l(t){I(e.$$.fragment,t),a=S(t),I(s.$$.fragment,t)},m(t,o){L(e,t,o),m(t,a,o),L(s,t,o),r=!0},p(t,o){const _={};o&2&&(_.$$scope={dirty:o,ctx:t}),e.$set(_);const f={};o&2&&(f.$$scope={dirty:o,ctx:t}),s.$set(f)},i(t){r||(B(e.$$.fragment,t),B(s.$$.fragment,t),r=!0)},o(t){N(e.$$.fragment,t),N(s.$$.fragment,t),r=!1},d(t){M(e,t),t&&d(a),M(s,t)}}}function ae(n){let e,a;return e=new Z({props:{title:"Puzzle 35 solution",solution:n[0],$$slots:{default:[se]},$$scope:{ctx:n}}}),{c(){A(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,r){L(e,s,r),a=!0},p(s,[r]){const t={};r&2&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){a||(B(e.$$.fragment,s),a=!0)},o(s){N(e.$$.fragment,s),a=!1},d(s){M(e,s)}}}function re(n){return[`<div id="y"></div>
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
</style>`]}class ue extends W{constructor(e){super(),q(this,e,re,ae,H,{})}}export{ue as default};
