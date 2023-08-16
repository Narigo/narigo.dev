import{s as P,a as v,c as x,i as f,d,l as _,m as w}from"../chunks/scheduler.2899a8c8.js";import{S,i as I,b as p,d as m,m as g,a as c,t as b,e as h}from"../chunks/index.bbb9ebb1.js";import{C as y}from"../chunks/Code.827df3d4.js";import{N as F}from"../chunks/Narigo.9a112aa6.js";import{P as E,a as C}from"../chunks/PuzzlePageLayout.eb53f717.js";function G($){let t;return{c(){t=_("::before")},l(e){t=w(e,"::before")},m(e,s){f(e,t,s)},d(e){e&&d(t)}}}function B($){let t;return{c(){t=_("::after")},l(e){t=w(e,"::after")},m(e,s){f(e,t,s)},d(e){e&&d(t)}}}function D($){let t,e,s,i,a,u;return e=new y({props:{$$slots:{default:[G]},$$scope:{ctx:$}}}),i=new y({props:{$$slots:{default:[B]},$$scope:{ctx:$}}}),{c(){t=_(`My first solution when we started playing these CSS battles. Instead of using two inner divs,
		this could have been done with `),p(e.$$.fragment),s=_(" and "),p(i.$$.fragment),a=_(` pseudo elements - but
		I didn't know them too well back then.`)},l(o){t=w(o,`My first solution when we started playing these CSS battles. Instead of using two inner divs,
		this could have been done with `),m(e.$$.fragment,o),s=w(o," and "),m(i.$$.fragment,o),a=w(o,` pseudo elements - but
		I didn't know them too well back then.`)},m(o,r){f(o,t,r),g(e,o,r),f(o,s,r),g(i,o,r),f(o,a,r),u=!0},p(o,r){const n={};r&4&&(n.$$scope={dirty:r,ctx:o}),e.$set(n);const l={};r&4&&(l.$$scope={dirty:r,ctx:o}),i.$set(l)},i(o){u||(c(e.$$.fragment,o),c(i.$$.fragment,o),u=!0)},o(o){b(e.$$.fragment,o),b(i.$$.fragment,o),u=!1},d(o){o&&(d(t),d(s),d(a)),h(e,o),h(i,o)}}}function j($){let t;return{c(){t=_(`Gradients! This has been done when the Saturday edition of the Frontend Friday Folks started
		over from the beginning. I joined this time and tried solving it again in a different way. Using
		a radial-gradient and moving the background position seemed to make sense to me.`)},l(e){t=w(e,`Gradients! This has been done when the Saturday edition of the Frontend Friday Folks started
		over from the beginning. I joined this time and tried solving it again in a different way. Using
		a radial-gradient and moving the background position seemed to make sense to me.`)},m(e,s){f(e,t,s)},d(e){e&&d(t)}}}function M($){let t,e,s,i,a,u,o,r;return t=new C({props:{title:"Puzzle 3 solution",solution:$[0]}}),s=new F({props:{$$slots:{default:[D]},$$scope:{ctx:$}}}),a=new C({props:{title:"Puzzle 3 solution",solution:$[1]}}),o=new F({props:{$$slots:{default:[j]},$$scope:{ctx:$}}}),{c(){p(t.$$.fragment),e=v(),p(s.$$.fragment),i=v(),p(a.$$.fragment),u=v(),p(o.$$.fragment)},l(n){m(t.$$.fragment,n),e=x(n),m(s.$$.fragment,n),i=x(n),m(a.$$.fragment,n),u=x(n),m(o.$$.fragment,n)},m(n,l){g(t,n,l),f(n,e,l),g(s,n,l),f(n,i,l),g(a,n,l),f(n,u,l),g(o,n,l),r=!0},p(n,l){const z={};l&4&&(z.$$scope={dirty:l,ctx:n}),s.$set(z);const k={};l&4&&(k.$$scope={dirty:l,ctx:n}),o.$set(k)},i(n){r||(c(t.$$.fragment,n),c(s.$$.fragment,n),c(a.$$.fragment,n),c(o.$$.fragment,n),r=!0)},o(n){b(t.$$.fragment,n),b(s.$$.fragment,n),b(a.$$.fragment,n),b(o.$$.fragment,n),r=!1},d(n){n&&(d(e),d(i),d(u)),h(t,n),h(s,n),h(a,n),h(o,n)}}}function N($){let t,e;return t=new E({props:{title:"Push Button",$$slots:{default:[M]},$$scope:{ctx:$}}}),{c(){p(t.$$.fragment)},l(s){m(t.$$.fragment,s)},m(s,i){g(t,s,i),e=!0},p(s,[i]){const a={};i&4&&(a.$$scope={dirty:i,ctx:s}),t.$set(a)},i(s){e||(c(t.$$.fragment,s),e=!0)},o(s){b(t.$$.fragment,s),e=!1},d(s){h(t,s)}}}function T($){return[`<div class="bg-rect">
<div class="blue-circle"></div>
<div class="button"></div>
</div>
<style>
  body {
    margin: 0;
    background: #6592CF;
  }
  .bg-rect {
    position: absolute;
    top: 75px;
    bottom: 75px;
    left: 50px;
    right: 50px;
    background: #243D83;
    overflow: hidden;
  }
  .blue-circle {
    border: 50px solid #6592CF;
    border-radius: 50%;
    position: absolute;
    left: 25px;
    right: 25px;
    top: -50px;
    bottom: -50px;
  }
  .button {
    position: absolute;
    border-radius: 50%;
    background: #EEB850;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    translate: -50% -50%;
  }
</style>`,`<div></div>
<style>
  body {
    background: #6592CF;
    display: grid;
    place-items: center;
  }
  div {
    background: radial-gradient(#EEB850 25px, #243D83 0 75px, #6592CF 0 125px, #243D83 0) 0 50% / 300px 300px;
    height: 150px;
    width: 300px;
  }
</style>`]}class J extends S{constructor(t){super(),I(this,t,T,N,P,{})}}export{J as component};
