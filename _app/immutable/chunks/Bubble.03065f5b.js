import{S as W,i as X,s as j,C as V,k as p,l as y,m as N,h as c,n as E,T as k,b as g,D as S,E as T,F as A,g as h,d as b,N as U,R as z,e as D,v as H,f as J,L as Q,I as Y,o as Z,y as $,z as x,A as ee,B as te,a as le,c as se,p as C,G as M,K as ae,U as ne,V as oe,W as F,q,r as w}from"./index.b1660a48.js";import{w as ie}from"./index.5e1915b1.js";import{f as G}from"./index.4509fa86.js";const fe=s=>s&3,re=s=>({}),K=s=>({...s[1],class:s[0]?"shakeit":""});function ue(s){let e,a;const t=s[3].default,l=V(t,s,s[2],K);return{c(){e=p("div"),l&&l.c(),this.h()},l(n){e=y(n,"DIV",{class:!0});var o=N(e);l&&l.l(o),o.forEach(c),this.h()},h(){E(e,"class","svelte-17vayou"),k(e,"shakeit",s[0])},m(n,o){g(n,e,o),l&&l.m(e,null),a=!0},p(n,[o]){l&&l.p&&(!a||o&7)&&S(l,t,n,n[2],fe(o)||!a?T(n[2]):A(t,n[2],o,re),K),(!a||o&1)&&k(e,"shakeit",n[0])},i(n){a||(h(l,n),a=!0)},o(n){b(l,n),a=!1},d(n){n&&c(e),l&&l.d(n)}}}function _e(s,e,a){let{$$slots:t={},$$scope:l}=e,{shake:n=!0}=e;return s.$$set=o=>{a(1,e=U(U({},e),z(o))),"shake"in o&&a(0,n=o.shake),"$$scope"in o&&a(2,l=o.$$scope)},e=z(e),[n,e,l,t]}class ce extends W{constructor(e){super(),X(this,e,_e,ue,j,{shake:0})}}const de=s=>({mode:s&16}),L=s=>({mode:s[7][s[4]]});function O(s){let e,a;return e=new ce({props:{shake:s[7][s[4]]==="shout",$$slots:{default:[ge]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){ee(e,t,l),a=!0},p(t,l){const n={};l&16&&(n.shake=t[7][t[4]]==="shout"),l&4127&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){a||(h(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){te(e,t)}}}function R(s){let e,a,t,l;const n=s[11].default,o=V(n,s,s[12],null);return{c(){e=p("div"),a=p("div"),o&&o.c(),this.h()},l(i){e=y(i,"DIV",{class:!0});var _=N(e);a=y(_,"DIV",{class:!0});var m=N(a);o&&o.l(m),m.forEach(c),_.forEach(c),this.h()},h(){E(a,"class","content svelte-1l3simr"),E(e,"class","bubble svelte-1l3simr")},m(i,_){g(i,e,_),M(e,a),o&&o.m(a,null),l=!0},p(i,_){s=i,o&&o.p&&(!l||_&4096)&&S(o,n,s,s[12],l?A(n,s[12],_,null):T(s[12]),null)},i(i){l||(h(o,i),oe(()=>{l&&(t||(t=F(e,G,{x:(s[0]==="left"?-1:1)*50,duration:s[1]},!0)),t.run(1))}),l=!0)},o(i){b(o,i),t||(t=F(e,G,{x:(s[0]==="left"?-1:1)*50,duration:s[1]},!1)),t.run(0),l=!1},d(i){i&&c(e),o&&o.d(i),i&&t&&t.end()}}}function me(s){let e;return{c(){e=q("🤐")},l(a){e=w(a,"🤐")},m(a,t){g(a,e,t)},d(a){a&&c(e)}}}function he(s){let e;return{c(){e=q("😱")},l(a){e=w(a,"😱")},m(a,t){g(a,e,t)},d(a){a&&c(e)}}}function ke(s){let e;return{c(){e=q("🗣️")},l(a){e=w(a,"🗣️")},m(a,t){g(a,e,t)},d(a){a&&c(e)}}}function be(s){let e;function a(n,o){return n[7][n[4]]==="talk"?ke:n[7][n[4]]==="shout"?he:me}let t=a(s),l=t(s);return{c(){l.c(),e=D()},l(n){l.l(n),e=D()},m(n,o){l.m(n,o),g(n,e,o)},p(n,o){t!==(t=a(n))&&(l.d(1),l=t(n),l&&(l.c(),l.m(e.parentNode,e)))},d(n){l.d(n),n&&c(e)}}}function ge(s){let e,a,t,l,n,o,i=(s[7][s[4]]==="talk"||s[7][s[4]]==="shout")&&R(s);const _=s[11].avatar,m=V(_,s,s[12],L),u=m||be(s);return{c(){e=p("div"),i&&i.c(),a=le(),t=p("button"),u&&u.c(),this.h()},l(f){e=y(f,"DIV",{class:!0,style:!0});var r=N(e);i&&i.l(r),a=se(r),t=y(r,"BUTTON",{class:!0});var v=N(t);u&&u.l(v),v.forEach(c),r.forEach(c),this.h()},h(){E(t,"class","avatar svelte-1l3simr"),E(e,"class","wrap svelte-1l3simr"),C(e,"--angle",s[2]+"deg"),C(e,"--x",s[3]+"px"),k(e,"shutup",s[7][s[4]]==="shutup"),k(e,"left",s[0]==="left"),k(e,"right",s[0]==="right")},m(f,r){g(f,e,r),i&&i.m(e,null),M(e,a),M(e,t),u&&u.m(t,null),l=!0,n||(o=ae(t,"click",ne(s[8])),n=!0)},p(f,r){f[7][f[4]]==="talk"||f[7][f[4]]==="shout"?i?(i.p(f,r),r&16&&h(i,1)):(i=R(f),i.c(),h(i,1),i.m(e,a)):i&&(H(),b(i,1,1,()=>{i=null}),J()),m?m.p&&(!l||r&4112)&&S(m,_,f,f[12],l?A(_,f[12],r,de):T(f[12]),L):u&&u.p&&(!l||r&16)&&u.p(f,l?r:-1),(!l||r&4)&&C(e,"--angle",f[2]+"deg"),(!l||r&8)&&C(e,"--x",f[3]+"px"),(!l||r&144)&&k(e,"shutup",f[7][f[4]]==="shutup"),(!l||r&1)&&k(e,"left",f[0]==="left"),(!l||r&1)&&k(e,"right",f[0]==="right")},i(f){l||(h(i),h(u,f),l=!0)},o(f){b(i),b(u,f),l=!1},d(f){f&&c(e),i&&i.d(),u&&u.d(f),n=!1,o()}}}function ve(s){let e,a,t=s[5]&&O(s);return{c(){t&&t.c(),e=D()},l(l){t&&t.l(l),e=D()},m(l,n){t&&t.m(l,n),g(l,e,n),a=!0},p(l,[n]){l[5]?t?(t.p(l,n),n&32&&h(t,1)):(t=O(l),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(H(),b(t,1,1,()=>{t=null}),J())},i(l){a||(h(t),a=!0)},o(l){b(t),a=!1},d(l){t&&t.d(l),l&&c(e)}}}function pe(s,e,a){let t,{$$slots:l={},$$scope:n}=e,{side:o="left"}=e,{delay:i=0}=e,{duration:_=100}=e,{delayNext:m=0}=e;const u=Q("AnimationContext");let f=Math.random()*1.5-1.5/2,r=Math.random()*5-5/2;const v=ie(i===0&&u===void 0);Y(s,v,d=>a(5,t=d)),Z(()=>{u&&u.createAnimation(v,i,m)});const I=["talk","shutup","talk","shutup","talk","shout","talk","shutup"];let B=0;const P=()=>{a(4,B=(B+1)%I.length),I[B]==="talk"&&(a(2,f=Math.random()*1.5-1.5/2),a(3,r=Math.random()*5-5/2))};return s.$$set=d=>{"side"in d&&a(0,o=d.side),"delay"in d&&a(9,i=d.delay),"duration"in d&&a(1,_=d.duration),"delayNext"in d&&a(10,m=d.delayNext),"$$scope"in d&&a(12,n=d.$$scope)},[o,_,f,r,B,t,v,I,P,i,m,l,n]}class Be extends W{constructor(e){super(),X(this,e,pe,ve,j,{side:0,delay:9,duration:1,delayNext:10})}}export{Be as B};