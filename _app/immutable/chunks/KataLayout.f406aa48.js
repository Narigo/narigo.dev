import{S as F,i as G,s as U,k as w,q as b,a as B,y as N,l as C,m as E,r as g,h as _,c as D,z as S,n as I,b as $,G as k,A as z,u as M,v as L,d,f as T,g as m,B as W,K as Q,H as A,C as j,D as q,E as H,F as O}from"./index.0bb61340.js";import{b as R}from"./paths.66e65ab6.js";import{N as J}from"./Narigo.7389b9d0.js";import{P as X}from"./PageLayout.ae4294c8.js";import{C as Y}from"./CodeBlock.f5da237b.js";function Z(a){let t,l,e,o,s;return{c(){t=b("If you want to learn more about the puzzle first, check out the "),l=w("a"),e=b("Kata on CodeWars"),s=b("."),this.h()},l(n){t=g(n,"If you want to learn more about the puzzle first, check out the "),l=C(n,"A",{href:!0});var f=E(l);e=g(f,"Kata on CodeWars"),f.forEach(_),s=g(n,"."),this.h()},h(){I(l,"href",o="https://www.codewars.com/kata/"+a[0])},m(n,f){$(n,t,f),$(n,l,f),k(l,e),$(n,s,f)},p(n,f){f&1&&o!==(o="https://www.codewars.com/kata/"+n[0])&&I(l,"href",o)},d(n){n&&_(t),n&&_(l),n&&_(s)}}}function x(a){let t,l,e,o;return{c(){t=w("button"),l=b("Show solutions"),this.h()},l(s){t=C(s,"BUTTON",{class:!0});var n=E(t);l=g(n,"Show solutions"),n.forEach(_),this.h()},h(){I(t,"class","svelte-1tsakjf")},m(s,n){$(s,t,n),k(t,l),e||(o=Q(t,"click",a[5]),e=!0)},p:A,i:A,o:A,d(s){s&&_(t),e=!1,o()}}}function ee(a){let t,l,e=a[2]&&V(a);const o=a[4].default,s=j(o,a,a[6],null);return{c(){e&&e.c(),t=B(),s&&s.c()},l(n){e&&e.l(n),t=D(n),s&&s.l(n)},m(n,f){e&&e.m(n,f),$(n,t,f),s&&s.m(n,f),l=!0},p(n,f){n[2]?e?(e.p(n,f),f&4&&m(e,1)):(e=V(n),e.c(),m(e,1),e.m(t.parentNode,t)):e&&(L(),d(e,1,1,()=>{e=null}),T()),s&&s.p&&(!l||f&64)&&q(s,o,n,n[6],l?O(o,n[6],f,null):H(n[6]),null)},i(n){l||(m(e),m(s,n),l=!0)},o(n){d(e),d(s,n),l=!1},d(n){e&&e.d(n),n&&_(t),s&&s.d(n)}}}function V(a){let t,l;return t=new Y({props:{code:a[2]}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,o){z(t,e,o),l=!0},p(e,o){const s={};o&4&&(s.code=e[2]),t.$set(s)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){d(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function te(a){let t,l,e,o,s,n,f,u,r,i;n=new J({props:{$$slots:{default:[Z]},$$scope:{ctx:a}}});const y=[ee,x],p=[];function P(c,h){return c[3]?0:1}return u=P(a),r=p[u]=y[u](a),{c(){t=w("div"),l=w("section"),e=w("h3"),o=b(a[1]),s=B(),N(n.$$.fragment),f=B(),r.c(),this.h()},l(c){t=C(c,"DIV",{class:!0});var h=E(t);l=C(h,"SECTION",{});var v=E(l);e=C(v,"H3",{});var K=E(e);o=g(K,a[1]),K.forEach(_),s=D(v),S(n.$$.fragment,v),v.forEach(_),f=D(h),r.l(h),h.forEach(_),this.h()},h(){I(t,"class","svelte-1tsakjf")},m(c,h){$(c,t,h),k(t,l),k(l,e),k(e,o),k(l,s),z(n,l,null),k(t,f),p[u].m(t,null),i=!0},p(c,[h]){(!i||h&2)&&M(o,c[1]);const v={};h&65&&(v.$$scope={dirty:h,ctx:c}),n.$set(v);let K=u;u=P(c),u===K?p[u].p(c,h):(L(),d(p[K],1,1,()=>{p[K]=null}),T(),r=p[u],r?r.p(c,h):(r=p[u]=y[u](c),r.c()),m(r,1),r.m(t,null))},i(c){i||(m(n.$$.fragment,c),m(r),i=!0)},o(c){d(n.$$.fragment,c),d(r),i=!1},d(c){c&&_(t),W(n),p[u].d()}}}function le(a,t,l){let{$$slots:e={},$$scope:o}=t,{id:s}=t,{name:n}=t,{solution:f=void 0}=t,u=!1;const r=()=>l(3,u=!0);return a.$$set=i=>{"id"in i&&l(0,s=i.id),"name"in i&&l(1,n=i.name),"solution"in i&&l(2,f=i.solution),"$$scope"in i&&l(6,o=i.$$scope)},[s,n,f,u,e,r,o]}class se extends F{constructor(t){super(),G(this,t,le,te,U,{id:0,name:1,solution:2})}}function oe(a){let t,l;const e=a[2].default,o=j(e,a,a[3],null);return{c(){t=w("div"),o&&o.c(),this.h()},l(s){t=C(s,"DIV",{class:!0});var n=E(t);o&&o.l(n),n.forEach(_),this.h()},h(){I(t,"class","svelte-arwiiu")},m(s,n){$(s,t,n),o&&o.m(t,null),l=!0},p(s,n){o&&o.p&&(!l||n&8)&&q(o,e,s,s[3],l?O(e,s[3],n,null):H(s[3]),null)},i(s){l||(m(o,s),l=!0)},o(s){d(o,s),l=!1},d(s){s&&_(t),o&&o.d(s)}}}function ne(a){let t,l;return t=new se({props:{id:a[0],name:a[1],$$slots:{default:[ae]},$$scope:{ctx:a}}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,o){z(t,e,o),l=!0},p(e,o){const s={};o&1&&(s.id=e[0]),o&2&&(s.name=e[1]),o&8&&(s.$$scope={dirty:o,ctx:e}),t.$set(s)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){d(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function ae(a){let t;const l=a[2].default,e=j(l,a,a[3],null);return{c(){e&&e.c()},l(o){e&&e.l(o)},m(o,s){e&&e.m(o,s),t=!0},p(o,s){e&&e.p&&(!t||s&8)&&q(e,l,o,o[3],t?O(l,o[3],s,null):H(o[3]),null)},i(o){t||(m(e,o),t=!0)},o(o){d(e,o),t=!1},d(o){e&&e.d(o)}}}function fe(a){let t,l,e,o;return{c(){t=b(`If you want to check out other katas we did, look at
		`),l=w("a"),e=b("the list of Crafters vs CodeWars events"),o=b("."),this.h()},l(s){t=g(s,`If you want to check out other katas we did, look at
		`),l=C(s,"A",{href:!0});var n=E(l);e=g(n,"the list of Crafters vs CodeWars events"),n.forEach(_),o=g(s,"."),this.h()},h(){I(l,"href",R+"/specials/crafters-vs-codewars/")},m(s,n){$(s,t,n),$(s,l,n),k(l,e),$(s,o,n)},p:A,d(s){s&&_(t),s&&_(l),s&&_(o)}}}function re(a){let t,l,e,o,s;const n=[ne,oe],f=[];function u(r,i){return r[0]&&r[1]?0:1}return t=u(a),l=f[t]=n[t](a),o=new J({props:{$$slots:{default:[fe]},$$scope:{ctx:a}}}),{c(){l.c(),e=B(),N(o.$$.fragment)},l(r){l.l(r),e=D(r),S(o.$$.fragment,r)},m(r,i){f[t].m(r,i),$(r,e,i),z(o,r,i),s=!0},p(r,i){let y=t;t=u(r),t===y?f[t].p(r,i):(L(),d(f[y],1,1,()=>{f[y]=null}),T(),l=f[t],l?l.p(r,i):(l=f[t]=n[t](r),l.c()),m(l,1),l.m(e.parentNode,e));const p={};i&8&&(p.$$scope={dirty:i,ctx:r}),o.$set(p)},i(r){s||(m(l),m(o.$$.fragment,r),s=!0)},o(r){d(l),d(o.$$.fragment,r),s=!1},d(r){f[t].d(r),r&&_(e),W(o,r)}}}function ie(a){let t,l;return t=new X({props:{$$slots:{default:[re]},$$scope:{ctx:a}}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,o){z(t,e,o),l=!0},p(e,[o]){const s={};o&11&&(s.$$scope={dirty:o,ctx:e}),t.$set(s)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){d(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function ue(a,t,l){let{$$slots:e={},$$scope:o}=t,{id:s=void 0}=t,{name:n=void 0}=t;return a.$$set=f=>{"id"in f&&l(0,s=f.id),"name"in f&&l(1,n=f.name),"$$scope"in f&&l(3,o=f.$$scope)},[s,n,e,o]}class pe extends F{constructor(t){super(),G(this,t,ue,ie,U,{id:0,name:1})}}export{pe as K,se as a};