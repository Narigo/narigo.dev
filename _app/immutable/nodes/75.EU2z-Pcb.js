import{_ as be}from"../chunks/preload-helper.0HuHagjb.js";import{ae as ge,af as $e,S as q,O as ke,s as ce,f as P,l as k,a as S,e as D,g as y,h as T,m as w,d as f,c as x,j as A,i as p,x as E,H as fe,z as J,n as V,A as B,y as L,aa as F,ab as ne,D as X,a3 as we,G as ve,b as Ce}from"../chunks/scheduler.wxh4t93s.js";import{g as ee,t as O,c as te,a as N,S as _e,i as he,b as R,d as U,m as Y,e as j}from"../chunks/index.qiVYbOcq.js";import{p as Pe}from"../chunks/stores.960rCSUc.js";import{e as K,P as ye}from"../chunks/PageLayout.0y2_5qtp.js";import{b as pe}from"../chunks/paths.MRUJbAuf.js";import{B as Q}from"../chunks/Bubble.1WAnJYwB.js";import{w as Z}from"../chunks/index.M6C1OJ43.js";function Ee(s,e){const r=e.token={};function t(l,n,o,a){if(e.token!==r)return;e.resolved=a;let i=e.ctx;o!==void 0&&(i=i.slice(),i[o]=a);const u=l&&(e.current=l)(i);let _=!1;e.block&&(e.blocks?e.blocks.forEach((h,v)=>{v!==n&&h&&(ee(),O(h,1,1,()=>{e.blocks[v]===h&&(e.blocks[v]=null)}),te())}):e.block.d(1),u.c(),N(u,1),u.m(e.mount(),e.anchor),_=!0),e.block=u,e.blocks&&(e.blocks[n]=u),_&&ke()}if(ge(s)){const l=$e();if(s.then(n=>{q(l),t(e.then,1,e.value,n),q(null)},n=>{if(q(l),t(e.catch,2,e.error,n),q(null),!e.hasCatch)throw n}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,s),!0;e.resolved=s}}function Ie(s,e,r){const t=e.slice(),{resolved:l}=s;s.current===s.then&&(t[s.value]=l),s.current===s.catch&&(t[s.error]=l),s.block.p(t,r)}function re(s,e,r){const t=s.slice();return t[9]=e[r],t}function se(s,e,r){const t=s.slice();return t[13]=e[r],t}function oe(s){let e,r;return{c(){e=k("Another hint: "),r=k(s[1])},l(t){e=w(t,"Another hint: "),r=w(t,s[1])},m(t,l){p(t,e,l),p(t,r,l)},p(t,l){l&2&&V(r,t[1])},d(t){t&&(f(e),f(r))}}}function ae(s){let e,r="Nothing guessed yet!";return{c(){e=P("p"),e.textContent=r},l(t){e=y(t,"P",{"data-svelte-h":!0}),B(e)!=="svelte-9r6yty"&&(e.textContent=r)},m(t,l){p(t,e,l)},p:L,d(t){t&&f(e)}}}function ue(s){let e,r=s[13].letter+"",t,l;return{c(){e=P("span"),t=k(r),this.h()},l(n){e=y(n,"SPAN",{class:!0});var o=T(e);t=w(o,r),o.forEach(f),this.h()},h(){A(e,"class",l="letter "+s[13].correctnessInGuess+" svelte-1wxtodb")},m(n,o){p(n,e,o),E(e,t)},p(n,o){o&8&&r!==(r=n[13].letter+"")&&V(t,r),o&8&&l!==(l="letter "+n[13].correctnessInGuess+" svelte-1wxtodb")&&A(e,"class",l)},d(n){n&&f(e)}}}function ie(s){let e,r,t=K(s[9]),l=[];for(let n=0;n<t.length;n+=1)l[n]=ue(se(s,t,n));return{c(){e=P("div");for(let n=0;n<l.length;n+=1)l[n].c();r=S(),this.h()},l(n){e=y(n,"DIV",{class:!0});var o=T(e);for(let a=0;a<l.length;a+=1)l[a].l(o);r=x(o),o.forEach(f),this.h()},h(){A(e,"class","guess svelte-1wxtodb")},m(n,o){p(n,e,o);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null);E(e,r)},p(n,o){if(o&8){t=K(n[9]);let a;for(a=0;a<t.length;a+=1){const i=se(n,t,a);l[a]?l[a].p(i,o):(l[a]=ue(i),l[a].c(),l[a].m(e,r))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},d(n){n&&f(e),fe(l,n)}}}function Ge(s){let e,r,t,l;return e=new Q({props:{$$slots:{default:[Oe]},$$scope:{ctx:s}}}),t=new Q({props:{side:"right",$$slots:{default:[Ne]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),r=S(),R(t.$$.fragment)},l(n){U(e.$$.fragment,n),r=x(n),U(t.$$.fragment,n)},m(n,o){Y(e,n,o),p(n,r,o),Y(t,n,o),l=!0},p(n,o){const a={};o&65537&&(a.$$scope={dirty:o,ctx:n}),e.$set(a);const i={};o&65536&&(i.$$scope={dirty:o,ctx:n}),t.$set(i)},i(n){l||(N(e.$$.fragment,n),N(t.$$.fragment,n),l=!0)},o(n){O(e.$$.fragment,n),O(t.$$.fragment,n),l=!1},d(n){n&&f(r),j(e,n),j(t,n)}}}function Le(s){let e,r,t,l;return e=new Q({props:{$$slots:{default:[Se]},$$scope:{ctx:s}}}),t=new Q({props:{side:"right",$$slots:{default:[Te]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment),r=S(),R(t.$$.fragment)},l(n){U(e.$$.fragment,n),r=x(n),U(t.$$.fragment,n)},m(n,o){Y(e,n,o),p(n,r,o),Y(t,n,o),l=!0},p(n,o){const a={};o&65537&&(a.$$scope={dirty:o,ctx:n}),e.$set(a);const i={};o&65536&&(i.$$scope={dirty:o,ctx:n}),t.$set(i)},i(n){l||(N(e.$$.fragment,n),N(t.$$.fragment,n),l=!0)},o(n){O(e.$$.fragment,n),O(t.$$.fragment,n),l=!1},d(n){n&&f(r),j(e,n),j(t,n)}}}function Ae(s){let e,r,t,l,n,o,a,i;return{c(){e=P("form"),r=P("input"),t=S(),l=P("button"),n=k("Guess"),this.h()},l(u){e=y(u,"FORM",{class:!0});var _=T(e);r=y(_,"INPUT",{minlength:!0,maxlength:!0,class:!0}),t=x(_),l=y(_,"BUTTON",{});var h=T(l);n=w(h,"Guess"),h.forEach(f),_.forEach(f),this.h()},h(){A(r,"minlength",s[5].length),A(r,"maxlength",s[5].length),A(r,"class","svelte-1wxtodb"),l.disabled=o=s[4].length!==s[5].length,A(e,"class","svelte-1wxtodb")},m(u,_){p(u,e,_),E(e,r),ne(r,s[4]),E(e,t),E(e,l),E(l,n),a||(i=[X(r,"input",s[10]),X(l,"click",we(s[9])),X(e,"submit",s[9])],a=!0)},p(u,_){_&16&&r.value!==u[4]&&ne(r,u[4]),_&16&&o!==(o=u[4].length!==u[5].length)&&(l.disabled=o)},i:L,o:L,d(u){u&&f(e),a=!1,ve(i)}}}function Oe(s){let e,r,t;return{c(){e=k("You found it! It was "),r=k(s[0]),t=k("!")},l(l){e=w(l,"You found it! It was "),r=w(l,s[0]),t=w(l,"!")},m(l,n){p(l,e,n),p(l,r,n),p(l,t,n)},p(l,n){n&1&&V(r,l[0])},d(l){l&&(f(e),f(r),f(t))}}}function Ne(s){let e,r="Play another round",t;return{c(){e=P("a"),e.textContent=r,t=k("?"),this.h()},l(l){e=y(l,"A",{href:!0,"data-svelte-h":!0}),B(e)!=="svelte-sthenr"&&(e.textContent=r),t=w(l,"?"),this.h()},h(){A(e,"href",pe+"/specials/weirdle/play")},m(l,n){p(l,e,n),p(l,t,n)},p:L,d(l){l&&(f(e),f(t))}}}function Se(s){let e,r;return{c(){e=k("Better luck next time, the word to be found was: "),r=k(s[0])},l(t){e=w(t,"Better luck next time, the word to be found was: "),r=w(t,s[0])},m(t,l){p(t,e,l),p(t,r,l)},p(t,l){l&1&&V(r,t[0])},d(t){t&&(f(e),f(r))}}}function Te(s){let e,r="Play another round",t;return{c(){e=P("a"),e.textContent=r,t=k("?"),this.h()},l(l){e=y(l,"A",{href:!0,"data-svelte-h":!0}),B(e)!=="svelte-sthenr"&&(e.textContent=r),t=w(l,"?"),this.h()},h(){A(e,"href",pe+"/specials/weirdle/play")},m(l,n){p(l,e,n),p(l,t,n)},p:L,d(l){l&&(f(e),f(t))}}}function xe(s){let e,r,t=s[5].length+"",l,n,o,a,i,u,_,h,v,d=s[1]&&oe(s),m=K(s[3]),g=[];for(let c=0;c<m.length;c+=1)g[c]=ie(re(s,m,c));let $=null;m.length||($=ae());const W=[Ae,Le,Ge],I=[];function z(c,b){return c[3].length<6&&c[2]==="playing"?0:c[2]==="lost"?1:c[2]==="won"?2:-1}return~(u=z(s))&&(_=I[u]=W[u](s)),{c(){e=P("p"),r=k("You are searching a "),l=k(t),n=k(" letter word. "),d&&d.c(),o=S(),a=P("div");for(let c=0;c<g.length;c+=1)g[c].c();$&&$.c(),i=S(),_&&_.c(),h=D(),this.h()},l(c){e=y(c,"P",{});var b=T(e);r=w(b,"You are searching a "),l=w(b,t),n=w(b," letter word. "),d&&d.l(b),b.forEach(f),o=x(c),a=y(c,"DIV",{class:!0});var G=T(a);for(let C=0;C<g.length;C+=1)g[C].l(G);$&&$.l(G),G.forEach(f),i=x(c),_&&_.l(c),h=D(),this.h()},h(){A(a,"class","board svelte-1wxtodb")},m(c,b){p(c,e,b),E(e,r),E(e,l),E(e,n),d&&d.m(e,null),p(c,o,b),p(c,a,b);for(let G=0;G<g.length;G+=1)g[G]&&g[G].m(a,null);$&&$.m(a,null),p(c,i,b),~u&&I[u].m(c,b),p(c,h,b),v=!0},p(c,[b]){if(c[1]?d?d.p(c,b):(d=oe(c),d.c(),d.m(e,null)):d&&(d.d(1),d=null),b&8){m=K(c[3]);let C;for(C=0;C<m.length;C+=1){const H=re(c,m,C);g[C]?g[C].p(H,b):(g[C]=ie(H),g[C].c(),g[C].m(a,null))}for(;C<g.length;C+=1)g[C].d(1);g.length=m.length,!m.length&&$?$.p(c,b):m.length?$&&($.d(1),$=null):($=ae(),$.c(),$.m(a,null))}let G=u;u=z(c),u===G?~u&&I[u].p(c,b):(_&&(ee(),O(I[G],1,1,()=>{I[G]=null}),te()),~u?(_=I[u],_?_.p(c,b):(_=I[u]=W[u](c),_.c()),N(_,1),_.m(h.parentNode,h)):_=null)},i(c){v||(N(_),v=!0)},o(c){O(_),v=!1},d(c){c&&(f(e),f(o),f(a),f(i),f(h)),d&&d.d(),fe(g,c),$&&$.d(),~u&&I[u].d(c)}}}function De(s,e,r){let t,l,n,{word:o}=e,{hint:a}=e,i=o.split("").map(m=>m.toLocaleLowerCase()),u=Z("playing");J(s,u,m=>r(2,t=m));let _=Z([]);J(s,_,m=>r(3,l=m));let h=Z("");J(s,h,m=>r(4,n=m));function v(m){if(m.preventDefault(),n.length!==i.length)return;const g=n.toLocaleLowerCase().split(""),$=g.reduce((W,I,z)=>{const c=i[z]===I,b=g.reduce((M,le,de)=>M+(le===I&&i[de]===le?1:0),0),G=W.filter(M=>M.letter===I).length,C=i.filter(M=>M===I).length,H=G+b<C,me={letter:I,correctnessInGuess:c?"green":H?"yellow":"black"};return[...W,me]},[]);F(_,l=[...l,$],l),F(h,n="",n),$.every(({correctnessInGuess:W})=>W==="green")?F(u,t="won",t):l.length===6&&F(u,t="lost",t)}function d(){n=this.value,h.set(n)}return s.$$set=m=>{"word"in m&&r(0,o=m.word),"hint"in m&&r(1,a=m.hint)},[o,a,t,l,n,i,u,_,h,v,d]}class Be extends _e{constructor(e){super(),he(this,e,De,xe,ce,{word:0,hint:1})}}function We(s){let e,r;return e=new Be({props:{word:window.atob(s[0]),hint:s[1]?window.atob(s[1]):void 0}}),{c(){R(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){Y(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.word=window.atob(t[0])),l&2&&(n.hint=t[1]?window.atob(t[1]):void 0),e.$set(n)},i(t){r||(N(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function Re(s){let e,r="This game needs to be played in a browser with JavaScript enabled.";return{c(){e=P("p"),e.textContent=r},l(t){e=y(t,"P",{"data-svelte-h":!0}),B(e)!=="svelte-j2y4ak"&&(e.textContent=r)},m(t,l){p(t,e,l)},p:L,i:L,o:L,d(t){t&&f(e)}}}function Ue(s){let e,r="Please use a proper link with an 'enc' parameter attached to it!",t,l,n=Ye(s);return{c(){e=P("p"),e.textContent=r,t=S(),n&&n.c(),l=D()},l(o){e=y(o,"P",{"data-svelte-h":!0}),B(e)!=="svelte-rjg1zf"&&(e.textContent=r),t=x(o),n&&n.l(o),l=D()},m(o,a){p(o,e,a),p(o,t,a),n&&n.m(o,a),p(o,l,a)},p(o,a){n.p(o,a)},i:L,o:L,d(o){o&&(f(e),f(t),f(l)),n&&n.d(o)}}}function Ye(s){let e,r={ctx:s,current:null,token:null,hasCatch:!0,pending:Ve,then:Me,catch:je,value:5,error:6};return Ee(s[3](),r),{c(){e=D(),r.block.c()},l(t){e=D(),r.block.l(t)},m(t,l){p(t,e,l),r.block.m(t,r.anchor=l),r.mount=()=>e.parentNode,r.anchor=e},p(t,l){s=t,Ie(r,s,l)},d(t){t&&f(e),r.block.d(t),r.token=null,r=null}}}function je(s){let e,r="Got an error:",t,l,n=s[6]+"",o;return{c(){e=P("p"),e.textContent=r,t=S(),l=P("pre"),o=k(n)},l(a){e=y(a,"P",{"data-svelte-h":!0}),B(e)!=="svelte-2wilnr"&&(e.textContent=r),t=x(a),l=y(a,"PRE",{});var i=T(l);o=w(i,n),i.forEach(f)},m(a,i){p(a,e,i),p(a,t,i),p(a,l,i),E(l,o)},p:L,d(a){a&&(f(e),f(t),f(l))}}}function Me(s){let e,r,t,l,n,o,a;return{c(){e=P("p"),r=k("Or do you want to play "),t=P("a"),l=k("a randomly selected word"),n=k("? (generated in "),o=k(s[2]),a=k("ms)"),this.h()},l(i){e=y(i,"P",{});var u=T(e);r=w(u,"Or do you want to play "),t=y(u,"A",{href:!0});var _=T(t);l=w(_,"a randomly selected word"),_.forEach(f),n=w(u,"? (generated in "),o=w(u,s[2]),a=w(u,"ms)"),u.forEach(f),this.h()},h(){A(t,"href","?enc="+encodeURIComponent(window.btoa(s[5])))},m(i,u){p(i,e,u),E(e,r),E(e,t),E(t,l),E(e,n),E(e,o),E(e,a)},p(i,u){u&4&&V(o,i[2])},d(i){i&&f(e)}}}function Ve(s){let e,r="Loading a random word...";return{c(){e=P("p"),e.textContent=r},l(t){e=y(t,"P",{"data-svelte-h":!0}),B(e)!=="svelte-1t7o9v8"&&(e.textContent=r)},m(t,l){p(t,e,l)},p:L,d(t){t&&f(e)}}}function ze(s){let e,r="Weirdle",t,l,n,o,a;const i=[Ue,Re,We],u=[];function _(h,v){return h[0]?2:0}return l=_(s),n=u[l]=i[l](s),{c(){e=P("h2"),e.textContent=r,t=S(),n.c(),o=D()},l(h){e=y(h,"H2",{"data-svelte-h":!0}),B(e)!=="svelte-1r7hk10"&&(e.textContent=r),t=x(h),n.l(h),o=D()},m(h,v){p(h,e,v),p(h,t,v),u[l].m(h,v),p(h,o,v),a=!0},p(h,v){let d=l;l=_(h),l===d?u[l].p(h,v):(ee(),O(u[d],1,1,()=>{u[d]=null}),te(),n=u[l],n?n.p(h,v):(n=u[l]=i[l](h),n.c()),N(n,1),n.m(o.parentNode,o))},i(h){a||(N(n),a=!0)},o(h){O(n),a=!1},d(h){h&&(f(e),f(t),f(o)),u[l].d(h)}}}function He(s){let e,r;return e=new ye({props:{$$slots:{default:[ze]},$$scope:{ctx:s}}}),{c(){R(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){Y(e,t,l),r=!0},p(t,[l]){const n={};l&135&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(N(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function qe(s,e,r){let t;J(s,Pe,i=>r(4,t=i));let l,n,o=0;Ce(()=>{r(0,l=t.url.searchParams.get("enc")),r(1,n=t.url.searchParams.get("hint"))});async function a(){r(2,o=Date.now());const{possibleWords:i}=await be(()=>import("../chunks/words2.w5M0zGoA.js"),__vite__mapDeps([]),import.meta.url),u=i[Math.floor(Math.random()*i.length)];return r(2,o=Date.now()-o),u}return[l,n,o,a]}class lt extends _e{constructor(e){super(),he(this,e,qe,He,ce,{})}}export{lt as component};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}