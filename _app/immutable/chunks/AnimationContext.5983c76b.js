import{S as v,i as A,s as T,C as x,D as p,E,F as k,g as C,d as D,a2 as L,o as b,a3 as y}from"./index.0bb61340.js";import{h as N}from"./singletons.333bbdfa.js";import{w as S}from"./index.b093ad20.js";const q=N("before_navigate");function w(s){let i;const r=s[2].default,e=x(r,s,s[1],null);return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,a){e&&e.m(n,a),i=!0},p(n,[a]){e&&e.p&&(!i||a&2)&&p(e,r,n,n[1],i?k(r,n[1],a,null):E(n[1]),null)},i(n){i||(C(e,n),i=!0)},o(n){D(e,n),i=!1},d(n){e&&e.d(n)}}}let c={};function F(s,i,r){let{$$slots:e={},$$scope:n}=i,{name:a}=i;c[a]={current:0,started:!1,nextTimer:null,animations:[]};const t=c[a],f=S(!1),l=()=>{t.current<t.animations.length&&t.animations[t.current].animation(),t.current===t.animations.length&&document.removeEventListener("click",l)};return L("AnimationContext",{animationsDone:f,createAnimation:(o,m,g)=>{let h=t.animations.length;const d=()=>{if(t){if(h<=t.current){const{nextTimer:_}=t;_!==null&&(clearTimeout(_),t.nextTimer=null),o.set(!0),t.current+=1;const u=t.current<t.animations.length?t.animations[t.current]:void 0;u?t.nextTimer=setTimeout(u.animation,u.delayNext):(f.set(!0),document.removeEventListener("click",l))}}else o.set(!0)};t.animations.push({delayNext:g,animation:d}),t.started||(t.started=!0,t.nextTimer=setTimeout(d,m))},finishAllAnimations:()=>{t.animations.slice(t.current).forEach(o=>{o.animation()})}}),q(()=>{if(l!==null&&document.removeEventListener("click",l),a){const o=c[a],{nextTimer:m}=o;m!==null&&clearTimeout(m)}c={}}),b(()=>{document.addEventListener("click",l)}),y(()=>{document.removeEventListener("click",l)}),s.$$set=o=>{"name"in o&&r(0,a=o.name),"$$scope"in o&&r(1,n=o.$$scope)},[a,n,e]}class B extends v{constructor(i){super(),A(this,i,F,w,T,{name:0})}}export{B as A};