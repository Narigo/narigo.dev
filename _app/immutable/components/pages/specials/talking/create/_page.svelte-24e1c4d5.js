import{S as Q,i as V,s as W,w as X,x as Y,y as x,f as ee,t as te,z as le,H as D,k as y,q as E,a as P,e as G,l as $,m as C,r as T,h as _,c as A,n as d,b as g,G as m,P as R,Z as ne,a3 as ae,a0 as S,a2 as J,u as se}from"../../../../../chunks/index-543a8e9c.js";import{b as re}from"../../../../../chunks/paths-b4419565.js";import{P as oe}from"../../../../../chunks/PageLayout-506349f6.js";import{w as M}from"../../../../../chunks/index-ebfb4040.js";function Z(a,t,u){const l=a.slice();return l[8]=t[u],l[9]=t,l[10]=u,l}function j(a){let t,u,l=a[10]%2===0?"A":"B",e,s,r,c,k,v;function U(){a[5].call(c,a[9],a[10])}return{c(){t=y("label"),u=E("Character "),e=E(l),s=E(":"),r=P(),c=y("input"),this.h()},l(o){t=$(o,"LABEL",{for:!0});var f=C(t);u=T(f,"Character "),e=T(f,l),s=T(f,":"),f.forEach(_),r=A(o),c=$(o,"INPUT",{id:!0,type:!0,class:!0}),this.h()},h(){d(t,"for","talking-create-line-"+a[10]),d(c,"id","talking-create-line-"+a[10]),d(c,"type","text"),d(c,"class","svelte-tnth7f")},m(o,f){g(o,t,f),m(t,u),m(t,e),m(t,s),g(o,r,f),g(o,c,f),J(c,a[8]),k||(v=R(c,"input",U),k=!0)},p(o,f){a=o,f&2&&c.value!==a[8]&&J(c,a[8])},d(o){o&&_(t),o&&_(r),o&&_(c),k=!1,v()}}}function K(a){let t,u,l,e;return{c(){t=y("p"),u=E("Here is your link: "),l=y("a"),e=E(a[0]),this.h()},l(s){t=$(s,"P",{});var r=C(t);u=T(r,"Here is your link: "),l=$(r,"A",{href:!0,rel:!0});var c=C(l);e=T(c,a[0]),c.forEach(_),r.forEach(_),this.h()},h(){d(l,"href",a[0]),d(l,"rel","external")},m(s,r){g(s,t,r),m(t,u),m(t,l),m(l,e)},p(s,r){r&1&&se(e,s[0]),r&1&&d(l,"href",s[0])},d(s){s&&_(t)}}}function ie(a){let t,u,l,e,s,r,c,k,v,U,o,f,H,O,w,I,q,N=a[1],p=[];for(let n=0;n<N.length;n+=1)p[n]=j(Z(a,N,n));let h=a[0]&&K(a);return{c(){t=y("h2"),u=E("Talking"),l=P(),e=y("form");for(let n=0;n<p.length;n+=1)p[n].c();s=P(),r=y("button"),c=E("Remove last line"),k=P(),v=y("button"),U=E("Add a line"),o=P(),f=y("button"),H=E("Create a link"),O=P(),h&&h.c(),w=G(),this.h()},l(n){t=$(n,"H2",{});var b=C(t);u=T(b,"Talking"),b.forEach(_),l=A(n),e=$(n,"FORM",{class:!0});var i=C(e);for(let L=0;L<p.length;L+=1)p[L].l(i);s=A(i),r=$(i,"BUTTON",{type:!0,class:!0});var B=C(r);c=T(B,"Remove last line"),B.forEach(_),k=A(i),v=$(i,"BUTTON",{type:!0,class:!0});var F=C(v);U=T(F,"Add a line"),F.forEach(_),o=A(i),f=$(i,"BUTTON",{type:!0,class:!0});var z=C(f);H=T(z,"Create a link"),z.forEach(_),i.forEach(_),O=A(n),h&&h.l(n),w=G(),this.h()},h(){d(r,"type","button"),d(r,"class","svelte-tnth7f"),d(v,"type","button"),d(v,"class","svelte-tnth7f"),d(f,"type","submit"),d(f,"class","svelte-tnth7f"),d(e,"class","svelte-tnth7f")},m(n,b){g(n,t,b),m(t,u),g(n,l,b),g(n,e,b);for(let i=0;i<p.length;i+=1)p[i].m(e,null);m(e,s),m(e,r),m(r,c),m(e,k),m(e,v),m(v,U),m(e,o),m(e,f),m(f,H),g(n,O,b),h&&h.m(n,b),g(n,w,b),I||(q=[R(r,"click",a[6]),R(v,"click",a[7]),R(e,"submit",a[4])],I=!0)},p(n,b){if(b&2){N=n[1];let i;for(i=0;i<N.length;i+=1){const B=Z(n,N,i);p[i]?p[i].p(B,b):(p[i]=j(B),p[i].c(),p[i].m(e,s))}for(;i<p.length;i+=1)p[i].d(1);p.length=N.length}n[0]?h?h.p(n,b):(h=K(n),h.c(),h.m(w.parentNode,w)):h&&(h.d(1),h=null)},d(n){n&&_(t),n&&_(l),n&&_(e),ne(p,n),n&&_(O),h&&h.d(n),n&&_(w),I=!1,ae(q)}}}function ue(a){let t,u;return t=new oe({props:{$$slots:{default:[ie]},$$scope:{ctx:a}}}),{c(){X(t.$$.fragment)},l(l){Y(t.$$.fragment,l)},m(l,e){x(t,l,e),u=!0},p(l,[e]){const s={};e&2051&&(s.$$scope={dirty:e,ctx:l}),t.$set(s)},i(l){u||(ee(t.$$.fragment,l),u=!0)},o(l){te(t.$$.fragment,l),u=!1},d(l){le(t,l)}}}function fe(a){return window.btoa(encodeURIComponent(a))}function ce(a,t,u){let l,e,s=M([""]);D(a,s,o=>u(1,e=o));let r=M("");D(a,r,o=>u(0,l=o));function c(o){o.preventDefault();const f=fe(JSON.stringify(e));S(r,l=`${re}/specials/talking/?e=${encodeURIComponent(f)}`,l)}function k(o,f){o[f]=this.value,s.set(e)}return[l,e,s,r,c,k,()=>S(s,e=e.slice(0,-1),e),()=>S(s,e=[...e,""],e)]}class de extends Q{constructor(t){super(),V(this,t,ce,ue,W,{})}}export{de as default};