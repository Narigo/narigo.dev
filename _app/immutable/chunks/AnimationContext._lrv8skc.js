import{s as x,r as b,u as k,v as y,w as E,z as L,a8 as p,o as C,a9 as w}from"./scheduler.wxh4t93s.js";import{S as N,i as S,a as j,t as q}from"./index.qiVYbOcq.js";import{j as z}from"./singletons.pjnZaGwK.js";import{w as F}from"./index.M6C1OJ43.js";const H=z("before_navigate"),I=a=>({isDone:a&1}),h=a=>({isDone:a[0],fastForwardNextAnimation:a[2],stopAllAnimations:a[3]});function M(a){let o;const s=a[7].default,e=b(s,a,a[6],h);return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,r){e&&e.m(n,r),o=!0},p(n,[r]){e&&e.p&&(!o||r&65)&&k(e,s,n,n[6],o?E(s,n[6],r,I):y(n[6]),h)},i(n){o||(j(e,n),o=!0)},o(n){q(e,n),o=!1},d(n){e&&e.d(n)}}}let d={};function B(a,o,s){let e,{$$slots:n={},$$scope:r}=o,{name:m}=o,{defaultDelay:u=0}=o;d[m]={current:0,started:!1,nextTimer:null,animations:[]};const t=d[m],f=F(!1);L(a,f,i=>s(0,e=i));const l=()=>{t.current<t.animations.length&&t.animations[t.current].animation(),t.current===t.animations.length&&document.removeEventListener("click",l)},v=(i,c=u)=>{let T=t.animations.length;const A=()=>{if(t){if(T<=t.current){const{nextTimer:D}=t;D!==null&&(clearTimeout(D),t.nextTimer=null),i.set(!0),t.current+=1;const _=t.current<t.animations.length?t.animations[t.current]:void 0;_?t.nextTimer=setTimeout(_.animation,_.delay??u):(f.set(!0),document.removeEventListener("click",l))}}else i.set(!0)};t.animations.push({delay:c,animation:A}),t.started||(t.started=!0,t.nextTimer=setTimeout(A,c))},g=()=>{t.animations.slice(t.current).forEach(i=>{i.animation()})};return p("AnimationContext",{animationsDone:f,createAnimation:v,finishAllAnimations:g}),H(()=>{if(l!==null&&document.removeEventListener("click",l),m){const i=d[m],{nextTimer:c}=i;c!==null&&clearTimeout(c)}d={}}),C(()=>{document.addEventListener("click",l)}),w(()=>{document.removeEventListener("click",l)}),a.$$set=i=>{"name"in i&&s(4,m=i.name),"defaultDelay"in i&&s(5,u=i.defaultDelay),"$$scope"in i&&s(6,r=i.$$scope)},[e,f,l,g,m,u,r,n]}class P extends N{constructor(o){super(),S(this,o,B,M,x,{name:4,defaultDelay:5})}}export{P as A};