import{S as V,i as W,s as q,w as N,x as A,y as I,f as B,t as M,z as L,o as R,C as T,k as y,a as P,q as h,l as F,m as E,h as f,c as S,r as m,n as k,p as D,b,G as d,D as U,E as j,F as G,V as J,B as H}from"../../../../../chunks/index-87c0e17b.js";import{B as K}from"../../../../../chunks/Bubble-a24ce691.js";import{N as Q}from"../../../../../chunks/Narigo-77b73723.js";import{P as X}from"../../../../../chunks/PageLayout-57ec18b8.js";function Y(i){let e,a,s,l,t,r=i[2].length+"",g,p,v,u,w,$,_;const x=i[4].default,n=T(x,i,i[6],null);return{c(){e=y("div"),a=y("iframe"),s=P(),l=y("div"),t=h("Highlighted solution ("),g=h(r),p=h(" characters)"),v=P(),u=y("pre"),w=h(i[2]),$=P(),n&&n.c(),this.h()},l(o){e=F(o,"DIV",{class:!0});var c=E(e);a=F(c,"IFRAME",{title:!0,style:!0,class:!0}),E(a).forEach(f),c.forEach(f),s=S(o),l=F(o,"DIV",{class:!0});var C=E(l);t=m(C,"Highlighted solution ("),g=m(C,r),p=m(C," characters)"),C.forEach(f),v=S(o),u=F(o,"PRE",{class:!0});var z=E(u);w=m(z,i[2]),z.forEach(f),$=S(o),n&&n.l(o),this.h()},h(){k(a,"title",i[0]),D(a,"background","white"),D(a,"width","400px"),D(a,"height","300px"),D(a,"border","0px"),D(a,"outline","0px"),k(a,"class","svelte-6uac30"),k(e,"class","iframe-container svelte-6uac30"),k(l,"class","svelte-6uac30"),k(u,"class","svelte-6uac30")},m(o,c){b(o,e,c),d(e,a),i[5](a),b(o,s,c),b(o,l,c),d(l,t),d(l,g),d(l,p),b(o,v,c),b(o,u,c),d(u,w),b(o,$,c),n&&n.m(o,c),_=!0},p(o,c){(!_||c&1)&&k(a,"title",o[0]),n&&n.p&&(!_||c&64)&&U(n,x,o,o[6],_?G(x,o[6],c,null):j(o[6]),null)},i(o){_||(B(n,o),_=!0)},o(o){M(n,o),_=!1},d(o){o&&f(e),i[5](null),o&&f(s),o&&f(l),o&&f(v),o&&f(u),o&&f($),n&&n.d(o)}}}function Z(i){let e,a;return e=new X({props:{$$slots:{default:[Y]},$$scope:{ctx:i}}}),{c(){N(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,l){I(e,s,l),a=!0},p(s,[l]){const t={};l&67&&(t.$$scope={dirty:l,ctx:s}),e.$set(t)},i(s){a||(B(e.$$.fragment,s),a=!0)},o(s){M(e.$$.fragment,s),a=!1},d(s){L(e,s)}}}function ee(i,e,a){let{$$slots:s={},$$scope:l}=e,{solution:t}=e,{title:r}=e;const g=t.trim();let p;R(()=>{var w,$,_;const u=`<style>body{overflow:hidden}</style>${g}`;(w=p.contentDocument)==null||w.open(),($=p.contentDocument)==null||$.write(u),(_=p.contentDocument)==null||_.close()});function v(u){J[u?"unshift":"push"](()=>{p=u,a(1,p)})}return i.$$set=u=>{"solution"in u&&a(3,t=u.solution),"title"in u&&a(0,r=u.title),"$$scope"in u&&a(6,l=u.$$scope)},[r,p,g,t,s,v,l]}class te extends V{constructor(e){super(),W(this,e,ee,Z,q,{solution:3,title:0})}}function se(i){let e,a,s,l,t,r,g,p,v,u,w,$,_,x;return{c(){e=y("p"),a=h(`While we can do the popsicle and the stick with border radius, the presented solution shows
			another way, how to solve this. By using multiple backgrounds, stacked on top of each other,
			it's possible to create the same effect with gradients.`),s=P(),l=y("p"),t=h("The "),r=y("code"),g=h('<div id="r">'),p=h(" shows the "),v=y("code"),u=h("border-radius"),w=h(` approach and the
			`),$=y("code"),_=h('<div id="y">'),x=h(" is all about using gradients to draw.")},l(n){e=F(n,"P",{});var o=E(e);a=m(o,`While we can do the popsicle and the stick with border radius, the presented solution shows
			another way, how to solve this. By using multiple backgrounds, stacked on top of each other,
			it's possible to create the same effect with gradients.`),o.forEach(f),s=S(n),l=F(n,"P",{});var c=E(l);t=m(c,"The "),r=F(c,"CODE",{});var C=E(r);g=m(C,'<div id="r">'),C.forEach(f),p=m(c," shows the "),v=F(c,"CODE",{});var z=E(v);u=m(z,"border-radius"),z.forEach(f),w=m(c,` approach and the
			`),$=F(c,"CODE",{});var O=E($);_=m(O,'<div id="y">'),O.forEach(f),x=m(c," is all about using gradients to draw."),c.forEach(f)},m(n,o){b(n,e,o),d(e,a),b(n,s,o),b(n,l,o),d(l,t),d(l,r),d(r,g),d(l,p),d(l,v),d(v,u),d(l,w),d(l,$),d($,_),d(l,x)},p:H,d(n){n&&f(e),n&&f(s),n&&f(l)}}}function ae(i){let e,a,s,l;return{c(){e=h("MDN has a great "),a=y("a"),s=h("explanation for using multiple backgrounds"),l=h("."),this.h()},l(t){e=m(t,"MDN has a great "),a=F(t,"A",{href:!0,rel:!0});var r=E(a);s=m(r,"explanation for using multiple backgrounds"),r.forEach(f),l=m(t,"."),this.h()},h(){k(a,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"),k(a,"rel","external")},m(t,r){b(t,e,r),b(t,a,r),d(a,s),b(t,l,r)},p:H,d(t){t&&f(e),t&&f(a),t&&f(l)}}}function le(i){let e,a,s,l;return e=new Q({props:{$$slots:{default:[se]},$$scope:{ctx:i}}}),s=new K({props:{side:"right",$$slots:{default:[ae]},$$scope:{ctx:i}}}),{c(){N(e.$$.fragment),a=P(),N(s.$$.fragment)},l(t){A(e.$$.fragment,t),a=S(t),A(s.$$.fragment,t)},m(t,r){I(e,t,r),b(t,a,r),I(s,t,r),l=!0},p(t,r){const g={};r&2&&(g.$$scope={dirty:r,ctx:t}),e.$set(g);const p={};r&2&&(p.$$scope={dirty:r,ctx:t}),s.$set(p)},i(t){l||(B(e.$$.fragment,t),B(s.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),M(s.$$.fragment,t),l=!1},d(t){L(e,t),t&&f(a),L(s,t)}}}function oe(i){let e,a;return e=new te({props:{title:"Puzzle 35 solution",solution:i[0],$$slots:{default:[le]},$$scope:{ctx:i}}}),{c(){N(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,l){I(e,s,l),a=!0},p(s,[l]){const t={};l&2&&(t.$$scope={dirty:l,ctx:s}),e.$set(t)},i(s){a||(B(e.$$.fragment,s),a=!0)},o(s){M(e.$$.fragment,s),a=!1},d(s){L(e,s)}}}function re(i){return[`<div id="y"></div>
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
</style>`]}class fe extends V{constructor(e){super(),W(this,e,re,oe,q,{})}}export{fe as default};
