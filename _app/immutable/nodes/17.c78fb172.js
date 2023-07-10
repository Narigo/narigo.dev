import{s as E,a as v,c as w,i as u,d as p,l as x,f as k,m as _,g as C,A as F,y as I}from"../chunks/scheduler.52b7490a.js";import{S as D,i as G,b as m,d as $,m as g,a as c,t as b,e as h}from"../chunks/index.644eb738.js";import{N as P}from"../chunks/Narigo.e24b860c.js";import{P as B,a as S}from"../chunks/PuzzlePageLayout.389c71ed.js";function j(d){let e,o,n="::before",a,s,f="::after",r;return{c(){e=x(`My first solution when we started playing these CSS battles. Instead of using two inner divs,
		this could have been done with `),o=k("code"),o.textContent=n,a=x(" and "),s=k("code"),s.textContent=f,r=x(` pseudo elements - but
		I didn't know them too well back then.`)},l(i){e=_(i,`My first solution when we started playing these CSS battles. Instead of using two inner divs,
		this could have been done with `),o=C(i,"CODE",{"data-svelte-h":!0}),F(o)!=="svelte-xwyp9n"&&(o.textContent=n),a=_(i," and "),s=C(i,"CODE",{"data-svelte-h":!0}),F(s)!=="svelte-9arc54"&&(s.textContent=f),r=_(i,` pseudo elements - but
		I didn't know them too well back then.`)},m(i,t){u(i,e,t),u(i,o,t),u(i,a,t),u(i,s,t),u(i,r,t)},p:I,d(i){i&&(p(e),p(o),p(a),p(s),p(r))}}}function M(d){let e;return{c(){e=x(`Gradients! This has been done when the Saturday edition of the Frontend Friday Folks started
		over from the beginning. I joined this time and tried solving it again in a different way. Using
		a radial-gradient and moving the background position seemed to make sense to me.`)},l(o){e=_(o,`Gradients! This has been done when the Saturday edition of the Frontend Friday Folks started
		over from the beginning. I joined this time and tried solving it again in a different way. Using
		a radial-gradient and moving the background position seemed to make sense to me.`)},m(o,n){u(o,e,n)},d(o){o&&p(e)}}}function N(d){let e,o,n,a,s,f,r,i;return e=new S({props:{title:"Puzzle 3 solution",solution:d[0]}}),n=new P({props:{$$slots:{default:[j]},$$scope:{ctx:d}}}),s=new S({props:{title:"Puzzle 3 solution",solution:d[1]}}),r=new P({props:{$$slots:{default:[M]},$$scope:{ctx:d}}}),{c(){m(e.$$.fragment),o=v(),m(n.$$.fragment),a=v(),m(s.$$.fragment),f=v(),m(r.$$.fragment)},l(t){$(e.$$.fragment,t),o=w(t),$(n.$$.fragment,t),a=w(t),$(s.$$.fragment,t),f=w(t),$(r.$$.fragment,t)},m(t,l){g(e,t,l),u(t,o,l),g(n,t,l),u(t,a,l),g(s,t,l),u(t,f,l),g(r,t,l),i=!0},p(t,l){const y={};l&4&&(y.$$scope={dirty:l,ctx:t}),n.$set(y);const z={};l&4&&(z.$$scope={dirty:l,ctx:t}),r.$set(z)},i(t){i||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(s.$$.fragment,t),c(r.$$.fragment,t),i=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),b(s.$$.fragment,t),b(r.$$.fragment,t),i=!1},d(t){t&&(p(o),p(a),p(f)),h(e,t),h(n,t),h(s,t),h(r,t)}}}function O(d){let e,o;return e=new B({props:{title:"Push Button",$$slots:{default:[N]},$$scope:{ctx:d}}}),{c(){m(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,a){g(e,n,a),o=!0},p(n,[a]){const s={};a&4&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){o||(c(e.$$.fragment,n),o=!0)},o(n){b(e.$$.fragment,n),o=!1},d(n){h(e,n)}}}function T(d){return[`<div class="bg-rect">
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
</style>`]}class H extends D{constructor(e){super(),G(this,e,T,O,E,{})}}export{H as component};
