function x(){}const W=t=>t;function gt(t,e){for(const n in e)t[n]=e[n];return t}function yt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function rt(t){return t()}function tt(){return Object.create(null)}function E(t){t.forEach(rt)}function P(t){return typeof t=="function"}function Ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let H;function Vt(t,e){return H||(H=document.createElement("a")),H.href=e,t===H.href}function bt(t){return Object.keys(t).length===0}function xt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Xt(t,e,n){t.$$.on_destroy.push(xt(e,n))}function Yt(t,e,n,i){if(t){const s=ct(t,e,n,i);return t[0](s)}}function ct(t,e,n,i){return t[1]&&i?gt(n.ctx.slice(),t[1](i(e))):n.ctx}function Zt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function te(t,e,n,i,s,c){if(s){const r=ct(e,n,i,c);t.p(r,s)}}function ee(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ne(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ie(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function se(t,e,n){return t.set(n),e}function re(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const ot=typeof window<"u";let J=ot?()=>window.performance.now():()=>Date.now(),K=ot?t=>requestAnimationFrame(t):x;const A=new Set;function lt(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&K(lt)}function Q(t){let e;return A.size===0&&K(lt),{promise:new Promise(n=>{A.add(e={c:t,f:n})}),abort(){A.delete(e)}}}let F=!1;function $t(){F=!0}function vt(){F=!1}function wt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:wt(1,s,d=>e[n[d]].claim_order,u))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,s=Math.max(a,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<r.length;l++){for(;u<c.length&&r[l].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(r[l],f)}}function kt(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=U("style");return Tt(ut(t),e),e.sheet}function Tt(t,e){return kt(t.head||t,e),e.sheet}function At(t,e){if(F){for(Et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ct(t,e,n){t.insertBefore(e,n||null)}function St(t,e,n){F&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function D(t){t.parentNode&&t.parentNode.removeChild(t)}function ce(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function Mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function oe(){return V(" ")}function le(){return V("")}function ue(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ae(t){return function(e){return e.preventDefault(),t.call(this,e)}}function jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Dt=["width","height"];function fe(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Dt.indexOf(i)===-1?t[i]=e[i]:jt(t,i,e[i])}function Lt(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ft(t,e,n,i,s=!1){at(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Pt(t,e,n,i){return ft(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function _e(t,e,n){return Pt(t,e,n,U)}function Ht(t,e){return ft(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>V(e),!0)}function de(t){return Ht(t," ")}function et(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function he(t,e){const n=et(t,"HTML_TAG_START",0),i=et(t,"HTML_TAG_END",n);if(n===i)return new nt(void 0,e);at(t);const s=t.splice(n,i-n+1);D(s[0]),D(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new nt(c,e)}function me(t,e){e=""+e,t.data!==e&&(t.data=e)}function pe(t,e){t.value=e??""}function ge(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ye(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function be(t){const e=t.querySelector(":checked");return e&&e.__value}function xe(t,e,n){t.classList[n?"add":"remove"](e)}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function $e(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Ot{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Mt(n.nodeName):this.e=U(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ct(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(D)}}class nt extends Ot{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)St(this.t,this.n[n],e)}}function ve(t,e){return new t(e)}const R=new Map;let q=0;function Rt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t,e){const n={stylesheet:Nt(e),rules:{}};return R.set(t,n),n}function B(t,e,n,i,s,c,r,o=0){const l=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*c(p);u+=p*100+`%{${r(g,1-g)}}
`}const f=u+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Rt(f)}_${o}`,d=ut(t),{stylesheet:_,rules:h}=R.get(d)||qt(d,t);h[a]||(h[a]=!0,_.insertRule(`@keyframes ${a} ${f}`,_.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${s}ms 1 both`,q+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),q-=s,q||Bt())}function Bt(){K(()=>{q||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&D(e)}),R.clear())})}let L;function b(t){L=t}function k(){if(!L)throw new Error("Function called outside component initialization");return L}function we(t){k().$$.on_mount.push(t)}function Ee(t){k().$$.after_update.push(t)}function ke(t){k().$$.on_destroy.push(t)}function Ne(){const t=k();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=_t(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Te(t,e){return k().$$.context.set(t,e),e}function Ae(t){return k().$$.context.get(t)}const T=[],it=[];let C=[];const st=[],dt=Promise.resolve();let I=!1;function ht(){I||(I=!0,dt.then(X))}function Ce(){return ht(),dt}function S(t){C.push(t)}const G=new Set;let N=0;function X(){if(N!==0)return;const t=L;do{try{for(;N<T.length;){const e=T[N];N++,b(e),zt(e.$$)}}catch(e){throw T.length=0,N=0,e}for(b(null),T.length=0,N=0;it.length;)it.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];G.has(n)||(G.add(n),n())}C.length=0}while(T.length);for(;st.length;)st.pop()();I=!1,G.clear(),b(t)}function zt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function Ft(t){const e=[],n=[];C.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),C=e}let j;function Y(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function w(t,e,n){t.dispatchEvent(_t(`${e?"intro":"outro"}${n}`))}const O=new Set;let y;function Gt(){y={r:0,c:[],p:y}}function It(){y.r||E(y.c),y=y.p}function mt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function Wt(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),y.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Z={duration:0};function Se(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,o,l=0;function u(){r&&z(t,r)}function f(){const{delay:d=0,duration:_=300,easing:h=W,tick:m=x,css:p}=s||Z;p&&(r=B(t,0,1,_,d,h,p,l++)),m(0,1);const g=J()+d,M=g+_;o&&o.abort(),c=!0,S(()=>w(t,!0,"start")),o=Q($=>{if(c){if($>=M)return m(1,0),w(t,!0,"end"),u(),c=!1;if($>=g){const v=h(($-g)/_);m(v,1-v)}}return c})}let a=!1;return{start(){a||(a=!0,z(t),P(s)?(s=s(i),Y().then(f)):f())},invalidate(){a=!1},end(){c&&(u(),c=!1)}}}function Me(t,e,n){const i={direction:"out"};let s=e(t,n,i),c=!0,r;const o=y;o.r+=1;function l(){const{delay:u=0,duration:f=300,easing:a=W,tick:d=x,css:_}=s||Z;_&&(r=B(t,1,0,f,u,a,_));const h=J()+u,m=h+f;S(()=>w(t,!1,"start")),Q(p=>{if(c){if(p>=m)return d(0,1),w(t,!1,"end"),--o.r||E(o.c),!1;if(p>=h){const g=a((p-h)/f);d(1-g,g)}}return c})}return P(s)?Y().then(()=>{s=s(i),l()}):l(),{end(u){u&&s.tick&&s.tick(1,0),c&&(r&&z(t,r),c=!1)}}}function je(t,e,n,i){const s={direction:"both"};let c=e(t,n,s),r=i?0:1,o=null,l=null,u=null;function f(){u&&z(t,u)}function a(_,h){const m=_.b-r;return h*=Math.abs(m),{a:r,b:_.b,d:m,duration:h,start:_.start,end:_.start+h,group:_.group}}function d(_){const{delay:h=0,duration:m=300,easing:p=W,tick:g=x,css:M}=c||Z,$={start:J()+h,b:_};_||($.group=y,y.r+=1),o||l?l=$:(M&&(f(),u=B(t,r,_,m,h,p,M)),_&&g(0,1),o=a($,m),S(()=>w(t,_,"start")),Q(v=>{if(l&&v>l.start&&(o=a(l,m),l=null,w(t,o.b,"start"),M&&(f(),u=B(t,r,o.b,o.duration,0,p,c.css))),o){if(v>=o.end)g(r=o.b,1-r),w(t,o.b,"end"),l||(o.b?f():--o.group.r||E(o.group.c)),o=null;else if(v>=o.start){const pt=v-o.start;r=o.a+o.d*p(pt/o.duration),g(r,1-r)}}return!!(o||l)}))}return{run(_){P(c)?Y().then(()=>{c=c(s),d(_)}):d(_)},end(){f(),o=l=null}}}function De(t,e){const n=e.token={};function i(s,c,r,o){if(e.token!==n)return;e.resolved=o;let l=e.ctx;r!==void 0&&(l=l.slice(),l[r]=o);const u=s&&(e.current=s)(l);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==c&&a&&(Gt(),Wt(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),It())}):e.block.d(1),u.c(),mt(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[c]=u),f&&X()}if(yt(t)){const s=k();if(t.then(c=>{b(s),i(e.then,1,e.value,c),b(null)},c=>{if(b(s),i(e.catch,2,e.error,c),b(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Le(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function Pe(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],o=e[c];if(o){for(const l in r)l in o||(i[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[c]=o}else for(const l in r)s[l]=1}for(const r in i)r in n||(n[r]=void 0);return n}function He(t){return typeof t=="object"&&t!==null?t:{}}function Oe(t){t&&t.c()}function Re(t,e){t&&t.l(e)}function Jt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||S(()=>{const r=t.$$.on_mount.map(rt).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),c.forEach(S)}function Kt(t,e){const n=t.$$;n.fragment!==null&&(Ft(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qt(t,e){t.$$.dirty[0]===-1&&(T.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qe(t,e,n,i,s,c,r,o=[-1]){const l=L;b(t);const u=t.$$={fragment:null,ctx:[],props:c,update:x,not_equal:s,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:tt(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,d,..._)=>{const h=_.length?_[0]:d;return u.ctx&&s(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&Qt(t,a)),d}):[],u.update(),f=!0,E(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){$t();const a=Lt(e.target);u.fragment&&u.fragment.l(a),a.forEach(D)}else u.fragment&&u.fragment.c();e.intro&&mt(t.$$.fragment),Jt(t,e.target,e.anchor,e.customElement),vt(),X()}b(l)}class Be{$destroy(){Kt(this,1),this.$destroy=x}$on(e,n){if(!P(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{he as $,Jt as A,Kt as B,Yt as C,te as D,ee as E,Zt as F,At as G,x as H,Xt as I,Vt as J,ue as K,Ae as L,ce as M,gt as N,Pe as O,He as P,ie as Q,ne as R,Be as S,xe as T,ae as U,S as V,je as W,re as X,W as Y,fe as Z,nt as _,oe as a,Ne as a0,$e as a1,Te as a2,ke as a3,se as a4,Se as a5,pe as a6,E as a7,ye as a8,be as a9,De as aa,Le as ab,Me as ac,St as b,de as c,Wt as d,le as e,It as f,mt as g,D as h,qe as i,Ee as j,U as k,_e as l,Lt as m,jt as n,we as o,ge as p,V as q,Ht as r,Ut as s,Ce as t,me as u,Gt as v,it as w,ve as x,Oe as y,Re as z};