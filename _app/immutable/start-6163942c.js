import{S as at,i as nt,s as rt,a as ot,e as F,c as it,b as z,g as pe,t as B,d as de,f as M,h as G,j as st,o as Ie,k as lt,l as ct,m as ft,n as ve,p as q,q as ut,r as pt,u as dt,v as W,w as Y,x as Te,y as X,z as Z,A as ce}from"./chunks/index-60b9a2c1.js";import{S as et,I as C,g as ze,f as He,a as Ee,b as fe,s as K,i as We,c as ue,P as Ye,d as ht,e as mt}from"./chunks/singletons-98f77bf6.js";import{_ as j}from"./chunks/preload-helper-41c905a7.js";import{s as _t}from"./chunks/paths-b4419565.js";function gt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function yt(n){return n.split("%25").map(decodeURI).join("%25")}function wt(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const bt=["href","pathname","search","searchParams","toString","toJSON"];function vt(n,e){const a=new URL(n);for(const s of bt){let i=a[s];Object.defineProperty(a,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return Et(a),a}function Et(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function Rt(n){return n.replace(/\/$/,"")+kt}function Lt(n){let e=5381;if(typeof n=="string"){let a=n.length;for(;a;)e=e*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let s=a.length;for(;s;)e=e*33^a[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(n,e)=>((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(De(n)),he(n,e));const te=new Map;function Ot(n,e){const a=De(n,e),s=document.querySelector(a);if(s!=null&&s.textContent){const{body:i,...m}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&te.set(a,{body:i,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,m))}return he(n,e)}function It(n,e,a){if(te.size>0){const s=De(n,a),i=te.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(a==null?void 0:a.cache))return new Response(i.body,i.init);te.delete(s)}}return he(e,a)}function De(n,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Lt(e.body)}"]`),s}const St=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(n){const e=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${Tt(n).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const m=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(m)return e.push({name:m[1],matcher:m[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((h,_)=>{if(_%2){if(h.startsWith("x+"))return ke(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return ke(String.fromCharCode(...h.slice(2).split("-").map(P=>parseInt(P,16))));const y=St.exec(h);if(!y)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,R,U,$]=y;return e.push({name:U,matcher:$,optional:!!v,rest:!!R,chained:R?_===1&&t[0]==="":!1}),R?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return ke(h)}).join("")}).join("")}/?$`),params:e}}function Pt(n){return!/^\([^)]+\)$/.test(n)}function Tt(n){return n.slice(1).split("/").filter(Pt)}function Dt(n,e,a){const s={},i=n.slice(1);let m="";for(let t=0;t<e.length;t+=1){const f=e[t];let h=i[t];if(f.chained&&f.rest&&m&&(h=h?m+"/"+h:m),m="",h===void 0)f.rest&&(s[f.name]="");else{if(f.matcher&&!a[f.matcher](h)){if(f.optional&&f.chained){let _=i.indexOf(void 0,t);if(_===-1){const y=e[t+1];if(y!=null&&y.rest&&y.chained)m=h;else return}for(;_>=t;)i[_]=i[_-1],_-=1;continue}return}s[f.name]=h}}if(!m)return s}function ke(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(n,e,a,s){const i=new Set(e);return Object.entries(a).map(([f,[h,_,y]])=>{const{pattern:v,params:R}=At(f),U={id:f,exec:$=>{const P=v.exec($);if(P)return Dt(P,R,s)},errors:[1,...y||[]].map($=>n[$]),layouts:[0,..._||[]].map(t),leaf:m(h)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function m(f){const h=f<0;return h&&(f=~f),[h,n[f]]}function t(f){return f===void 0?f:[i.has(f),n[f]]}}function Nt(n){let e,a,s;var i=n[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return i&&(e=W(i,m(n))),{c(){e&&Y(e.$$.fragment),a=F()},l(t){e&&Te(e.$$.fragment,t),a=F()},m(t,f){e&&X(e,t,f),z(t,a,f),s=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&2&&(h.form=t[1]),i!==(i=t[0][0])){if(e){pe();const _=e;B(_.$$.fragment,1,0,()=>{Z(_,1)}),de()}i?(e=W(i,m(t)),Y(e.$$.fragment),M(e.$$.fragment,1),X(e,a.parentNode,a)):e=null}else i&&e.$set(h)},i(t){s||(e&&M(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&G(a),e&&Z(e,t)}}}function Ut(n){let e,a,s;var i=n[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[$t]},$$scope:{ctx:t}}}}return i&&(e=W(i,m(n))),{c(){e&&Y(e.$$.fragment),a=F()},l(t){e&&Te(e.$$.fragment,t),a=F()},m(t,f){e&&X(e,t,f),z(t,a,f),s=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&523&&(h.$$scope={dirty:f,ctx:t}),i!==(i=t[0][0])){if(e){pe();const _=e;B(_.$$.fragment,1,0,()=>{Z(_,1)}),de()}i?(e=W(i,m(t)),Y(e.$$.fragment),M(e.$$.fragment,1),X(e,a.parentNode,a)):e=null}else i&&e.$set(h)},i(t){s||(e&&M(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&G(a),e&&Z(e,t)}}}function $t(n){let e,a,s;var i=n[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return i&&(e=W(i,m(n))),{c(){e&&Y(e.$$.fragment),a=F()},l(t){e&&Te(e.$$.fragment,t),a=F()},m(t,f){e&&X(e,t,f),z(t,a,f),s=!0},p(t,f){const h={};if(f&8&&(h.data=t[3]),f&2&&(h.form=t[1]),i!==(i=t[0][1])){if(e){pe();const _=e;B(_.$$.fragment,1,0,()=>{Z(_,1)}),de()}i?(e=W(i,m(t)),Y(e.$$.fragment),M(e.$$.fragment,1),X(e,a.parentNode,a)):e=null}else i&&e.$set(h)},i(t){s||(e&&M(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&G(a),e&&Z(e,t)}}}function Xe(n){let e,a=n[5]&&Ze(n);return{c(){e=lt("div"),a&&a.c(),this.h()},l(s){e=ct(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=ft(e);a&&a.l(i),i.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(s,i){z(s,e,i),a&&a.m(e,null)},p(s,i){s[5]?a?a.p(s,i):(a=Ze(s),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(s){s&&G(e),a&&a.d()}}}function Ze(n){let e;return{c(){e=ut(n[6])},l(a){e=pt(a,n[6])},m(a,s){z(a,e,s)},p(a,s){s&64&&dt(e,a[6])},d(a){a&&G(e)}}}function Vt(n){let e,a,s,i,m;const t=[Ut,Nt],f=[];function h(y,v){return y[0][1]?0:1}e=h(n),a=f[e]=t[e](n);let _=n[4]&&Xe(n);return{c(){a.c(),s=ot(),_&&_.c(),i=F()},l(y){a.l(y),s=it(y),_&&_.l(y),i=F()},m(y,v){f[e].m(y,v),z(y,s,v),_&&_.m(y,v),z(y,i,v),m=!0},p(y,[v]){let R=e;e=h(y),e===R?f[e].p(y,v):(pe(),B(f[R],1,1,()=>{f[R]=null}),de(),a=f[e],a?a.p(y,v):(a=f[e]=t[e](y),a.c()),M(a,1),a.m(s.parentNode,s)),y[4]?_?_.p(y,v):(_=Xe(y),_.c(),_.m(i.parentNode,i)):_&&(_.d(1),_=null)},i(y){m||(M(a),m=!0)},o(y){B(a),m=!1},d(y){f[e].d(y),y&&G(s),_&&_.d(y),y&&G(i)}}}function qt(n,e,a){let{stores:s}=e,{page:i}=e,{components:m}=e,{form:t}=e,{data_0:f=null}=e,{data_1:h=null}=e;st(s.page.notify);let _=!1,y=!1,v=null;return Ie(()=>{const R=s.page.subscribe(()=>{_&&(a(5,y=!0),a(6,v=document.title||"untitled page"))});return a(4,_=!0),R}),n.$$set=R=>{"stores"in R&&a(7,s=R.stores),"page"in R&&a(8,i=R.page),"components"in R&&a(0,m=R.components),"form"in R&&a(1,t=R.form),"data_0"in R&&a(2,f=R.data_0),"data_1"in R&&a(3,h=R.data_1)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(i)},[m,t,f,h,_,y,v,s,i]}class Ct extends at{constructor(e){super(),nt(this,e,qt,Vt,rt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft={},me=[()=>j(()=>import("./chunks/0-673aafc4.js"),["./chunks/0-673aafc4.js","./components/pages/_layout.svelte-0c631888.js","./chunks/index-60b9a2c1.js","./assets/_layout-56287999.css"],import.meta.url),()=>j(()=>import("./chunks/1-adfbbda5.js"),["./chunks/1-adfbbda5.js","./components/error.svelte-7511de7f.js","./chunks/index-60b9a2c1.js","./chunks/stores-7087b65e.js","./chunks/singletons-98f77bf6.js","./chunks/index-a00159d3.js","./chunks/paths-b4419565.js"],import.meta.url),()=>j(()=>import("./chunks/2-81e1b396.js"),["./chunks/2-81e1b396.js","./components/pages/_page.svelte-83d0ca0a.js","./chunks/index-60b9a2c1.js","./chunks/Bubble-e1670973.js","./chunks/Bubble.svelte_svelte_type_style_lang-9587b5e1.js","./chunks/singletons-98f77bf6.js","./chunks/index-a00159d3.js","./chunks/paths-b4419565.js","./assets/Bubble-950d7dbd.css","./chunks/index-9c57a1fd.js","./chunks/PageLayout-3f67d0e3.js","./assets/PageLayout-e8cc6741.css"],import.meta.url),()=>j(()=>import("./chunks/3-074873e8.js"),["./chunks/3-074873e8.js","./components/pages/contact/_page.svelte-707859bd.js","./chunks/index-60b9a2c1.js","./chunks/PageLayout-3f67d0e3.js","./chunks/paths-b4419565.js","./assets/PageLayout-e8cc6741.css"],import.meta.url),()=>j(()=>import("./chunks/4-26efb118.js"),["./chunks/4-26efb118.js","./components/pages/imprint/_page.svelte-69ba6a61.js","./chunks/index-60b9a2c1.js","./chunks/Bubble-e1670973.js","./chunks/Bubble.svelte_svelte_type_style_lang-9587b5e1.js","./chunks/singletons-98f77bf6.js","./chunks/index-a00159d3.js","./chunks/paths-b4419565.js","./assets/Bubble-950d7dbd.css","./chunks/index-9c57a1fd.js","./chunks/PageLayout-3f67d0e3.js","./assets/PageLayout-e8cc6741.css"],import.meta.url),()=>j(()=>import("./chunks/5-f5bcfdd3.js"),["./chunks/5-f5bcfdd3.js","./components/pages/specials/_page.svelte-f2a6b36a.js","./chunks/index-60b9a2c1.js","./chunks/paths-b4419565.js","./chunks/Bubble-e1670973.js","./chunks/Bubble.svelte_svelte_type_style_lang-9587b5e1.js","./chunks/singletons-98f77bf6.js","./chunks/index-a00159d3.js","./assets/Bubble-950d7dbd.css","./chunks/index-9c57a1fd.js","./chunks/PageLayout-3f67d0e3.js","./assets/PageLayout-e8cc6741.css"],import.meta.url),()=>j(()=>import("./chunks/6-41b8de01.js"),["./chunks/6-41b8de01.js","./components/pages/specials/recharge/_page.svelte-5210702e.js","./chunks/index-60b9a2c1.js","./chunks/paths-b4419565.js","./chunks/stores-7087b65e.js","./chunks/singletons-98f77bf6.js","./chunks/index-a00159d3.js","./chunks/PageLayout-3f67d0e3.js","./assets/PageLayout-e8cc6741.css","./chunks/Bubble-e1670973.js","./chunks/Bubble.svelte_svelte_type_style_lang-9587b5e1.js","./assets/Bubble-950d7dbd.css","./chunks/index-9c57a1fd.js","./assets/_page-d084f67e.css"],import.meta.url),()=>j(()=>import("./chunks/7-8b4f968d.js"),["./chunks/7-8b4f968d.js","./components/pages/specials/recharge/create/_page.svelte-34954013.js","./chunks/index-60b9a2c1.js","./chunks/paths-b4419565.js","./chunks/PageLayout-3f67d0e3.js","./assets/PageLayout-e8cc6741.css","./chunks/index-a00159d3.js","./assets/_page-8e43047b.css"],import.meta.url),()=>j(()=>import("./chunks/8-539e2438.js"),["./chunks/8-539e2438.js","./components/pages/specials/talking/_page.svelte-754f6f8f.js","./chunks/index-60b9a2c1.js","./chunks/paths-b4419565.js","./chunks/stores-7087b65e.js","./chunks/singletons-98f77bf6.js","./chunks/index-a00159d3.js","./chunks/PageLayout-3f67d0e3.js","./assets/PageLayout-e8cc6741.css","./chunks/Bubble-e1670973.js","./chunks/Bubble.svelte_svelte_type_style_lang-9587b5e1.js","./assets/Bubble-950d7dbd.css","./chunks/index-9c57a1fd.js"],import.meta.url),()=>j(()=>import("./chunks/9-a399e048.js"),["./chunks/9-a399e048.js","./components/pages/specials/talking/create/_page.svelte-fc54f371.js","./chunks/index-60b9a2c1.js","./chunks/paths-b4419565.js","./chunks/Bubble.svelte_svelte_type_style_lang-9587b5e1.js","./chunks/singletons-98f77bf6.js","./chunks/index-a00159d3.js","./assets/Bubble-950d7dbd.css","./chunks/PageLayout-3f67d0e3.js","./assets/PageLayout-e8cc6741.css","./assets/_page-8e43047b.css"],import.meta.url),()=>j(()=>import("./chunks/10-02ce1e4c.js"),["./chunks/10-02ce1e4c.js","./components/pages/specials/weirdle/_page.svelte-c931202d.js","./chunks/index-60b9a2c1.js","./chunks/paths-b4419565.js","./chunks/PageLayout-3f67d0e3.js","./assets/PageLayout-e8cc6741.css"],import.meta.url),()=>j(()=>import("./chunks/11-98fac918.js"),["./chunks/11-98fac918.js","./components/pages/specials/weirdle/create/_page.svelte-439c1723.js","./chunks/index-60b9a2c1.js","./chunks/paths-b4419565.js","./chunks/Bubble-e1670973.js","./chunks/Bubble.svelte_svelte_type_style_lang-9587b5e1.js","./chunks/singletons-98f77bf6.js","./chunks/index-a00159d3.js","./assets/Bubble-950d7dbd.css","./chunks/index-9c57a1fd.js","./chunks/PageLayout-3f67d0e3.js","./assets/PageLayout-e8cc6741.css","./assets/_page-8c52d032.css"],import.meta.url),()=>j(()=>import("./chunks/12-a692dfbf.js"),["./chunks/12-a692dfbf.js","./components/pages/specials/weirdle/play/_page.svelte-561433ea.js","./chunks/index-60b9a2c1.js","./chunks/stores-7087b65e.js","./chunks/singletons-98f77bf6.js","./chunks/index-a00159d3.js","./chunks/paths-b4419565.js","./chunks/PageLayout-3f67d0e3.js","./assets/PageLayout-e8cc6741.css","./chunks/Bubble-e1670973.js","./chunks/Bubble.svelte_svelte_type_style_lang-9587b5e1.js","./assets/Bubble-950d7dbd.css","./chunks/index-9c57a1fd.js","./assets/_page-c1b97d90.css"],import.meta.url),()=>j(()=>import("./chunks/13-150304f5.js"),["./chunks/13-150304f5.js","./components/pages/talks/_page.svelte-c898e1fc.js","./chunks/index-60b9a2c1.js","./chunks/paths-b4419565.js","./chunks/PageLayout-3f67d0e3.js","./assets/PageLayout-e8cc6741.css"],import.meta.url),()=>j(()=>import("./chunks/14-49769dde.js"),["./chunks/14-49769dde.js","./components/pages/talks/static-pages-with-dynamic-content/_page.svelte-ff6eb7f1.js","./chunks/index-60b9a2c1.js","./chunks/preload-helper-41c905a7.js","./chunks/index-9c57a1fd.js","./assets/_page-91122d03.css"],import.meta.url)],Bt=[0],Mt={"/":[2],"/contact":[3],"/imprint":[4],"/specials":[5],"/specials/recharge":[6],"/specials/recharge/create":[7],"/specials/talking":[8],"/specials/talking/create":[9],"/specials/weirdle":[10],"/specials/weirdle/create":[11],"/specials/weirdle/play":[12],"/talks":[13],"/talks/static-pages-with-dynamic-content":[14]},Gt={handleError:({error:n})=>{console.error(n)}};class Se{constructor(e,a){this.status=e,typeof a=="string"?this.body={message:a}:a?this.body=a:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Qe{constructor(e,a){this.status=e,this.location=a}}async function Jt(n){var e;for(const a in n)if(typeof((e=n[a])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([s,i])=>[s,await i])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Kt=-1,zt=-2,Ht=-3,Wt=-4,Yt=-5,Xt=-6;function Zt(n){if(typeof n=="number")return s(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,a=Array(e.length);function s(i,m=!1){if(i===Kt)return;if(i===Ht)return NaN;if(i===Wt)return 1/0;if(i===Yt)return-1/0;if(i===Xt)return-0;if(m)throw new Error("Invalid input");if(i in a)return a[i];const t=e[i];if(!t||typeof t!="object")a[i]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":a[i]=new Date(t[1]);break;case"Set":const h=new Set;a[i]=h;for(let v=1;v<t.length;v+=1)h.add(s(t[v]));break;case"Map":const _=new Map;a[i]=_;for(let v=1;v<t.length;v+=2)_.set(s(t[v]),s(t[v+1]));break;case"RegExp":a[i]=new RegExp(t[1],t[2]);break;case"Object":a[i]=Object(t[1]);break;case"BigInt":a[i]=BigInt(t[1]);break;case"null":const y=Object.create(null);a[i]=y;for(let v=1;v<t.length;v+=2)y[t[v]]=s(t[v+1]);break}else{const f=new Array(t.length);a[i]=f;for(let h=0;h<t.length;h+=1){const _=t[h];_!==zt&&(f[h]=s(_))}}else{const f={};a[i]=f;for(const h in t){const _=t[h];f[h]=s(_)}}return a[i]}return s(0)}const Re=jt(me,Bt,Mt,Ft),Ae=me[0],Pe=me[1];Ae();Pe();let ae={};try{ae=JSON.parse(sessionStorage[et])}catch{}function Le(n){ae[n]=ue()}function Qt({target:n,base:e}){var Ge;const a=document.documentElement,s=[];let i=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,h=!1,_=!0,y=!1,v=!1,R=!1,U=!1,$,P=(Ge=history.state)==null?void 0:Ge[C];P||(P=Date.now(),history.replaceState({...history.state,[C]:P},"",location.href));const _e=ae[P];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let J,je,ne;async function Ne(){ne=ne||Promise.resolve(),await ne,ne=null;const r=new URL(location.href),o=ie(r,!0);i=null,await $e(o,r,[])}async function ge(r,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:u={},invalidateAll:p=!1},d,b){return typeof r=="string"&&(r=new URL(r,ze(document))),se({url:r,scroll:o?ue():null,keepfocus:l,redirect_chain:d,details:{state:u,replaceState:c},nav_token:b,accepted:()=>{p&&(U=!0)},blocked:()=>{},type:"goto"})}async function Ue(r){const o=ie(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return i={id:o.id,promise:Ce(o).then(c=>(c.type==="loaded"&&c.state.error&&(i=null),c))},i.promise}async function re(...r){const c=Re.filter(l=>r.some(u=>l.exec(u))).map(l=>Promise.all([...l.layouts,l.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(c)}async function $e(r,o,c,l,u={},p){var b,w;je=u;let d=r&&await Ce(r);if(d||(d=await Me(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,je!==u)return!1;if(d.type==="redirect")if(c.length>10||c.includes(o.pathname))d=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(d.location,o).href,{},[...c,o.pathname],u),!1;else((w=(b=d.props)==null?void 0:b.page)==null?void 0:w.status)>=400&&await K.updated.check()&&await le(o);if(s.length=0,U=!1,y=!0,l&&l.details){const{details:g}=l,L=g.replaceState?0:1;g.state[C]=P+=L,history[g.replaceState?"replaceState":"pushState"](g.state,"",o)}if(i=null,h?(t=d.state,d.props.page&&(d.props.page.url=o),$.$set(d.props)):Ve(d),l){const{scroll:g,keepfocus:L}=l;if(L||Oe(),await ce(),_){const O=o.hash&&document.getElementById(o.hash.slice(1));g?scrollTo(g.x,g.y):O?O.scrollIntoView():scrollTo(0,0)}}else await ce();_=!0,d.props.page&&(J=d.props.page),p&&p(),y=!1}function Ve(r){var l;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),J=r.props.page,$=new Ct({target:n,props:{...r.props,stores:K},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};m.after_navigate.forEach(u=>u(c)),h=!0}async function Q({url:r,params:o,branch:c,status:l,error:u,route:p,form:d}){const b=c.filter(Boolean);let w="never";for(const I of c)(I==null?void 0:I.slash)!==void 0&&(w=I.slash);r.pathname=gt(r.pathname,w),r.search=r.search;const g={type:"loaded",state:{url:r,params:o,branch:c,error:u,route:p},props:{components:b.map(I=>I.node.component)}};d!==void 0&&(g.props.form=d);let L={},O=!J;for(let I=0;I<b.length;I+=1){const E=b[I];L={...L,...E.data},(O||!t.branch.some(D=>D===E))&&(g.props[`data_${I}`]=L,O=O||Object.keys(E.data??{}).length>0)}return O||(O=Object.keys(J.data).length!==Object.keys(L).length),(!t.url||r.href!==t.url.href||t.error!==u||d!==void 0||O)&&(g.props.page={error:u,params:o,route:p,status:l,url:new URL(r),form:d??null,data:O?L:J.data}),g}async function ye({loader:r,parent:o,url:c,params:l,route:u,server_data_node:p}){var g,L,O;let d=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},w=await r();if((g=w.universal)!=null&&g.load){let V=function(...E){for(const D of E){const{href:N}=new URL(D,c);b.dependencies.add(N)}};const I={route:{get id(){return b.route=!0,u.id}},params:new Proxy(l,{get:(E,D)=>(b.params.add(D),E[D])}),data:(p==null?void 0:p.data)??null,url:vt(c,()=>{b.url=!0}),async fetch(E,D){let N;E instanceof Request?(N=E.url,D={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...D}):N=E;const k=new URL(N,c).href;return V(k),h?It(N,k,D):Ot(N,D)},setHeaders:()=>{},depends:V,parent(){return b.parent=!0,o()}};d=await w.universal.load.call(null,I)??null,d=d?await Jt(d):null}return{node:w,loader:r,server:p,universal:(L=w.universal)!=null&&L.load?{type:"data",data:d,uses:b}:null,data:d??(p==null?void 0:p.data)??null,slash:((O=w.universal)==null?void 0:O.trailingSlash)??(p==null?void 0:p.slash)}}function qe(r,o,c,l,u){if(U)return!0;if(!l)return!1;if(l.parent&&r||l.route&&o||l.url&&c)return!0;for(const p of l.params)if(u[p]!==t.params[p])return!0;for(const p of l.dependencies)if(s.some(d=>d(new URL(p))))return!0;return!1}function we(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Ce({id:r,invalidating:o,url:c,params:l,route:u}){if((i==null?void 0:i.id)===r)return i.promise;const{errors:p,layouts:d,leaf:b}=u,w=[...d,b];p.forEach(k=>k==null?void 0:k().catch(()=>{})),w.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let g=null;const L=t.url?r!==t.url.pathname+t.url.search:!1,O=t.route?r!==t.route.id:!1,V=w.reduce((k,A,T)=>{var x;const S=t.branch[T],H=!!(A!=null&&A[0])&&((S==null?void 0:S.loader)!==A[1]||qe(k.some(Boolean),O,L,(x=S.server)==null?void 0:x.uses,l));return k.push(H),k},[]);if(V.some(Boolean)){try{g=await xe(c,V)}catch(k){return oe({status:500,error:await ee(k,{url:c,params:l,route:{id:u.id}}),url:c,route:u})}if(g.type==="redirect")return g}const I=g==null?void 0:g.nodes;let E=!1;const D=w.map(async(k,A)=>{var x;if(!k)return;const T=t.branch[A],S=I==null?void 0:I[A];if((!S||S.type==="skip")&&k[1]===(T==null?void 0:T.loader)&&!qe(E,O,L,(x=T.universal)==null?void 0:x.uses,l))return T;if(E=!0,(S==null?void 0:S.type)==="error")throw S;return ye({loader:k[1],url:c,params:l,route:u,parent:async()=>{var Ke;const Je={};for(let be=0;be<A;be+=1)Object.assign(Je,(Ke=await D[be])==null?void 0:Ke.data);return Je},server_data_node:we(S===void 0&&k[0]?{type:"skip"}:S??null,T==null?void 0:T.server)})});for(const k of D)k.catch(()=>{});const N=[];for(let k=0;k<w.length;k+=1)if(w[k])try{N.push(await D[k])}catch(A){if(A instanceof Qe)return{type:"redirect",location:A.location};let T=500,S;I!=null&&I.includes(A)?(T=A.status??T,S=A.error):A instanceof Se?(T=A.status,S=A.body):S=await ee(A,{params:l,url:c,route:{id:u.id}});const H=await Fe(k,N,p);return H?await Q({url:c,params:l,branch:N.slice(0,H.idx).concat(H.node),status:T,error:S,route:u}):await Me(c,{id:u.id},S,T)}else N.push(void 0);return await Q({url:c,params:l,branch:N,status:200,error:null,route:u,form:o?void 0:null})}async function Fe(r,o,c){for(;r--;)if(c[r]){let l=r;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:r,error:o,url:c,route:l}){const u={},p=await Ae();let d=null;if(p.server)try{const g=await xe(c,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;d=g.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await le(c)}const b=await ye({loader:Ae,url:c,params:u,route:l,parent:()=>Promise.resolve({}),server_data_node:we(d)}),w={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Q({url:c,params:u,branch:[b,w],status:r,error:o,route:null})}function ie(r,o){if(We(r,e))return;const c=yt(r.pathname.slice(e.length)||"/");for(const l of Re){const u=l.exec(c);if(u)return{id:r.pathname+r.search,invalidating:o,route:l,params:wt(u),url:r}}}function Be({url:r,type:o,intent:c,delta:l}){var b,w;let u=!1;const p={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((w=c==null?void 0:c.route)==null?void 0:w.id)??null},url:r},willUnload:!c,type:o};l!==void 0&&(p.delta=l);const d={...p,cancel:()=>{u=!0}};return v||m.before_navigate.forEach(g=>g(d)),u?null:p}async function se({url:r,scroll:o,keepfocus:c,redirect_chain:l,details:u,type:p,delta:d,nav_token:b,accepted:w,blocked:g}){const L=ie(r,!1),O=Be({url:r,type:p,delta:d,intent:L});if(!O){g();return}Le(P),w(),v=!0,h&&K.navigating.set(O),await $e(L,r,l,{scroll:o,keepfocus:c,details:u},b,()=>{v=!1,m.after_navigate.forEach(V=>V(O)),K.navigating.set(null)})}async function Me(r,o,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await oe({status:l,error:c,url:r,route:o}):await le(r)}function le(r){return location.href=r.href,new Promise(()=>{})}function tt(){let r;a.addEventListener("mousemove",p=>{const d=p.target;clearTimeout(r),r=setTimeout(()=>{l(d,2)},20)});function o(p){l(p.composedPath()[0],1)}a.addEventListener("mousedown",o),a.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(p=>{for(const d of p)d.isIntersecting&&(re(new URL(d.target.href).pathname),c.unobserve(d.target))},{threshold:0});function l(p,d){const b=He(p,a);if(!b)return;const{url:w,external:g}=Ee(b,e);if(g)return;const L=fe(b);L.reload||(d<=L.preload_data?Ue(w):d<=L.preload_code&&re(w.pathname))}function u(){c.disconnect();for(const p of a.querySelectorAll("a")){const{url:d,external:b}=Ee(p,e);if(b)continue;const w=fe(p);w.reload||(w.preload_code===Ye.viewport&&c.observe(p),w.preload_code===Ye.eager&&re(d.pathname))}}m.after_navigate.push(u),u()}return{after_navigate:r=>{Ie(()=>(m.after_navigate.push(r),()=>{const o=m.after_navigate.indexOf(r);m.after_navigate.splice(o,1)}))},before_navigate:r=>{Ie(()=>(m.before_navigate.push(r),()=>{const o=m.before_navigate.indexOf(r);m.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(y||!h)&&(_=!1)},goto:(r,o={})=>ge(r,o,[]),invalidate:r=>{if(typeof r=="function")s.push(r);else{const{href:o}=new URL(r,location.href);s.push(c=>c.href===o)}return Ne()},invalidateAll:()=>(U=!0,Ne()),preload_data:async r=>{const o=new URL(r,ze(document));await Ue(o)},preload_code:re,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const u=await Fe(t.branch.length,c,l.errors);if(u){const p=await Q({url:o,params:t.params,branch:c.slice(0,u.idx).concat(u.node),status:r.status??500,error:r.error,route:l});t=p.state,$.$set(p.props),ce().then(Oe)}}else if(r.type==="redirect")ge(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...J,form:r.data,status:r.status}};$.$set(o),r.type==="success"&&ce().then(Oe)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!v){const u={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};m.before_navigate.forEach(p=>p(u))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(P);try{sessionStorage[et]=JSON.stringify(ae)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||tt(),a.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=He(o.composedPath()[0],a);if(!c)return;const{url:l,external:u,has:p}=Ee(c,e),d=fe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||p.download)return;if(u||d.reload){Be({url:l,type:"link"})||o.preventDefault(),v=!0;return}const[w,g]=l.href.split("#");if(g!==void 0&&w===location.href.split("#")[0]){R=!0,Le(P),t.url=l,K.page.set({...J,url:l}),K.page.notify();return}se({url:l,scroll:d.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),a.addEventListener("submit",o=>{var w;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const p=new URL(((w=o.submitter)==null?void 0:w.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(p,e))return;const{noscroll:d,reload:b}=fe(o.target);b||(o.preventDefault(),o.stopPropagation(),p.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:p,scroll:d?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[C]){if(o.state[C]===P)return;const l=o.state[C]-P;se({url:new URL(location.href),scroll:ae[o.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=o.state[C]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[C]:++P},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&K.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:c,params:l,route:u,data:p,form:d})=>{f=!0;const b=new URL(location.href);({params:l={},route:u={id:null}}=ie(b,!1)||{});let w;try{const g=c.map(async(L,O)=>{const V=p[O];return ye({loader:me[L],url:b,params:l,route:u,parent:async()=>{const I={};for(let E=0;E<O;E+=1)Object.assign(I,(await g[E]).data);return I},server_data_node:we(V)})});w=await Q({url:b,params:l,branch:await Promise.all(g),status:r,error:o,form:d,route:Re.find(({id:L})=>L===u.id)??null})}catch(g){if(g instanceof Qe){await le(new URL(g.location,location.href));return}w=await oe({status:g instanceof Se?g.status:500,error:await ee(g,{url:b,params:l,route:u}),url:b,route:u})}Ve(w)}}}async function xe(n,e){var m;const a=new URL(n);a.pathname=Rt(n.pathname),a.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await he(a.href),i=await s.json();if(!s.ok)throw new Error(i);return(m=i.nodes)==null||m.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=Zt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function ee(n,e){return n instanceof Se?n.body:Gt.handleError({error:n,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Oe(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,a=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),a!==null?e.setAttribute("tabindex",a):e.removeAttribute("tabindex")}}async function na({env:n,hydrate:e,paths:a,target:s,version:i}){_t(a),mt(i);const m=Qt({target:s,base:a.base});ht({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{na as start};