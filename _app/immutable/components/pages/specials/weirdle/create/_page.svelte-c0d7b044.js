import{S as ke,i as ze,s as Ue,w as J,x as K,y as Q,f as X,t as Y,z as Z,H as Oe,k as _,q as m,a as g,e as Ne,l as d,m as h,r as b,h as n,c as E,n as $,R as Ce,b as I,G as o,a2 as le,a4 as Le,P as ae,a3 as Be,a0 as He,a5 as We,u as Ge}from"../../../../../chunks/index-543a8e9c.js";import{b as Re}from"../../../../../chunks/paths-b4419565.js";import{B as se}from"../../../../../chunks/Bubble-4e6bc313.js";import{P as Ae}from"../../../../../chunks/PageLayout-506349f6.js";import{w as De}from"../../../../../chunks/index-ebfb4040.js";function Se(r){let t;return{c(){t=m("Please configure your game!")},l(l){t=b(l,"Please configure your game!")},m(l,s){I(l,t,s)},d(l){l&&n(t)}}}function Ve(r){let t;return{c(){t=m("The word that is the solution to the puzzle.")},l(l){t=b(l,"The word that is the solution to the puzzle.")},m(l,s){I(l,t,s)},d(l){l&&n(t)}}}function qe(r){let t;return{c(){t=m("Give a hint to the player, if you have and want to give one.")},l(l){t=b(l,"Give a hint to the player, if you have and want to give one.")},m(l,s){I(l,t,s)},d(l){l&&n(t)}}}function Fe(r){let t;return{c(){t=m("If you want to limit the player to a word list, please select it here. (Not available yet)")},l(l){t=b(l,"If you want to limit the player to a word list, please select it here. (Not available yet)")},m(l,s){I(l,t,s)},d(l){l&&n(t)}}}function Te(r){let t,l,s,u;return{c(){t=_("p"),l=m("Here is your puzzle: "),s=_("a"),u=m(r[3]),this.h()},l(p){t=d(p,"P",{});var a=h(t);l=b(a,"Here is your puzzle: "),s=d(a,"A",{href:!0,rel:!0});var v=h(s);u=b(v,r[3]),v.forEach(n),a.forEach(n),this.h()},h(){$(s,"href",r[3]),$(s,"rel","external")},m(p,a){I(p,t,a),o(t,l),o(t,s),o(s,u)},p(p,a){a&8&&Ge(u,p[3]),a&8&&$(s,"href",p[3])},d(p){p&&n(t)}}}function Me(r){let t,l,s,u,p,a,v,P,D,L,S,H,y,V,T,k,oe,W,re,ne,N,ie,G,z,ue,R,fe,pe,w,U,_e,O,de,C,ce,$e,B,he,x,ee,A,q,me,be;u=new se({props:{$$slots:{default:[Se]},$$scope:{ctx:r}}}),P=new se({props:{side:"right",$$slots:{default:[Ve]},$$scope:{ctx:r}}}),k=new se({props:{side:"right",$$slots:{default:[qe]},$$scope:{ctx:r}}}),z=new se({props:{side:"right",$$slots:{default:[Fe]},$$scope:{ctx:r}}});let c=r[3]&&Te(r);return{c(){t=_("h2"),l=m("Weirdle"),s=g(),J(u.$$.fragment),p=g(),a=_("form"),v=_("div"),J(P.$$.fragment),D=g(),L=_("label"),S=m("Word:"),H=g(),y=_("input"),V=g(),T=_("div"),J(k.$$.fragment),oe=g(),W=_("label"),re=m("Hint:"),ne=g(),N=_("input"),ie=g(),G=_("div"),J(z.$$.fragment),ue=g(),R=_("label"),fe=m("Word list?"),pe=g(),w=_("select"),U=_("option"),_e=m("No word list"),O=_("option"),de=m("German word list"),C=_("option"),ce=m("English word list"),$e=g(),B=_("button"),he=m("Create a link"),ee=g(),c&&c.c(),A=Ne(),this.h()},l(e){t=d(e,"H2",{});var i=h(t);l=b(i,"Weirdle"),i.forEach(n),s=E(e),K(u.$$.fragment,e),p=E(e),a=d(e,"FORM",{class:!0});var f=h(a);v=d(f,"DIV",{class:!0});var F=h(v);K(P.$$.fragment,F),F.forEach(n),D=E(f),L=d(f,"LABEL",{for:!0});var M=h(L);S=b(M,"Word:"),M.forEach(n),H=E(f),y=d(f,"INPUT",{id:!0,type:!0}),V=E(f),T=d(f,"DIV",{class:!0});var j=h(T);K(k.$$.fragment,j),j.forEach(n),oe=E(f),W=d(f,"LABEL",{for:!0});var ve=h(W);re=b(ve,"Hint:"),ve.forEach(n),ne=E(f),N=d(f,"INPUT",{id:!0,type:!0}),ie=E(f),G=d(f,"DIV",{class:!0});var we=h(G);K(z.$$.fragment,we),we.forEach(n),ue=E(f),R=d(f,"LABEL",{for:!0});var ge=h(R);fe=b(ge,"Word list?"),ge.forEach(n),pe=E(f),w=d(f,"SELECT",{id:!0});var te=h(w);U=d(te,"OPTION",{});var Ee=h(U);_e=b(Ee,"No word list"),Ee.forEach(n),O=d(te,"OPTION",{});var ye=h(O);de=b(ye,"German word list"),ye.forEach(n),C=d(te,"OPTION",{});var Ie=h(C);ce=b(Ie,"English word list"),Ie.forEach(n),te.forEach(n),$e=E(f),B=d(f,"BUTTON",{class:!0});var Pe=h(B);he=b(Pe,"Create a link"),Pe.forEach(n),f.forEach(n),ee=E(e),c&&c.l(e),A=Ne(),this.h()},h(){$(v,"class","svelte-1nx32ht"),$(L,"for","weirdle-create-word"),$(y,"id","weirdle-create-word"),$(y,"type","text"),$(T,"class","svelte-1nx32ht"),$(W,"for","weirdle-create-hint"),$(N,"id","weirdle-create-hint"),$(N,"type","text"),$(G,"class","svelte-1nx32ht"),$(R,"for","weirdle-create-select-word-list"),U.__value="",U.value=U.__value,O.__value="de",O.value=O.__value,C.__value="en",C.value=C.__value,$(w,"id","weirdle-create-select-word-list"),w.disabled=!0,r[2]===void 0&&Ce(()=>r[8].call(w)),B.disabled=x=r[0].length<=1,$(B,"class","svelte-1nx32ht"),$(a,"class","svelte-1nx32ht")},m(e,i){I(e,t,i),o(t,l),I(e,s,i),Q(u,e,i),I(e,p,i),I(e,a,i),o(a,v),Q(P,v,null),o(a,D),o(a,L),o(L,S),o(a,H),o(a,y),le(y,r[0]),o(a,V),o(a,T),Q(k,T,null),o(a,oe),o(a,W),o(W,re),o(a,ne),o(a,N),le(N,r[1]),o(a,ie),o(a,G),Q(z,G,null),o(a,ue),o(a,R),o(R,fe),o(a,pe),o(a,w),o(w,U),o(U,_e),o(w,O),o(O,de),o(w,C),o(C,ce),Le(w,r[2]),o(a,$e),o(a,B),o(B,he),I(e,ee,i),c&&c.m(e,i),I(e,A,i),q=!0,me||(be=[ae(y,"input",r[6]),ae(N,"input",r[7]),ae(w,"change",r[8]),ae(a,"submit",r[5])],me=!0)},p(e,i){const f={};i&512&&(f.$$scope={dirty:i,ctx:e}),u.$set(f);const F={};i&512&&(F.$$scope={dirty:i,ctx:e}),P.$set(F),i&1&&y.value!==e[0]&&le(y,e[0]);const M={};i&512&&(M.$$scope={dirty:i,ctx:e}),k.$set(M),i&2&&N.value!==e[1]&&le(N,e[1]);const j={};i&512&&(j.$$scope={dirty:i,ctx:e}),z.$set(j),i&4&&Le(w,e[2]),(!q||i&1&&x!==(x=e[0].length<=1))&&(B.disabled=x),e[3]?c?c.p(e,i):(c=Te(e),c.c(),c.m(A.parentNode,A)):c&&(c.d(1),c=null)},i(e){q||(X(u.$$.fragment,e),X(P.$$.fragment,e),X(k.$$.fragment,e),X(z.$$.fragment,e),q=!0)},o(e){Y(u.$$.fragment,e),Y(P.$$.fragment,e),Y(k.$$.fragment,e),Y(z.$$.fragment,e),q=!1},d(e){e&&n(t),e&&n(s),Z(u,e),e&&n(p),e&&n(a),Z(P),Z(k),Z(z),e&&n(ee),c&&c.d(e),e&&n(A),me=!1,Be(be)}}}function je(r){let t,l;return t=new Ae({props:{$$slots:{default:[Me]},$$scope:{ctx:r}}}),{c(){J(t.$$.fragment)},l(s){K(t.$$.fragment,s)},m(s,u){Q(t,s,u),l=!0},p(s,[u]){const p={};u&527&&(p.$$scope={dirty:u,ctx:s}),t.$set(p)},i(s){l||(X(t.$$.fragment,s),l=!0)},o(s){Y(t.$$.fragment,s),l=!1},d(s){Z(t,s)}}}function Je(r,t,l){let s,u="",p="",a="",v=De("");Oe(r,v,H=>l(3,s=H));function P(H){H.preventDefault();const y=encodeURIComponent(window.btoa(u)),V=p.trim()!==""?`&hint=${encodeURIComponent(window.btoa(p))}`:"",T=a!==""?`&wl=${encodeURIComponent(a)}`:"";He(v,s=`${Re}/specials/weirdle/play?enc=${y}${V}${T}`,s)}function D(){u=this.value,l(0,u)}function L(){p=this.value,l(1,p)}function S(){a=We(this),l(2,a)}return[u,p,a,s,v,P,D,L,S]}class xe extends ke{constructor(t){super(),ze(this,t,Je,je,Ue,{})}}export{xe as default};