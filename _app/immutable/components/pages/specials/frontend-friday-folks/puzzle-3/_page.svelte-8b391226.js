import{S as I,i as D,s as G,w as c,x as g,y as b,f as h,t as _,z as w,a as v,c as x,b as f,h as d,q as m,k,r as $,l as F,m as C,G as E,B}from"../../../../../chunks/index-ed5c000a.js";import"../../../../../chunks/Bubble-111f0336.js";import{N as P}from"../../../../../chunks/Narigo-406ea8d0.js";import{P as j,a as S}from"../../../../../chunks/PuzzlePageLayout-e3ab490f.js";function q(u){let e,o,n,r,s,p,l;return{c(){e=m(`My first solution when we started playing these CSS battles. Instead of using two inner divs,
		this could have been done with `),o=k("code"),n=m("::before"),r=m(" and "),s=k("code"),p=m("::after"),l=m(` pseudo elements - but
		I didn't know them too well back then.`)},l(i){e=$(i,`My first solution when we started playing these CSS battles. Instead of using two inner divs,
		this could have been done with `),o=F(i,"CODE",{});var t=C(o);n=$(t,"::before"),t.forEach(d),r=$(i," and "),s=F(i,"CODE",{});var a=C(s);p=$(a,"::after"),a.forEach(d),l=$(i,` pseudo elements - but
		I didn't know them too well back then.`)},m(i,t){f(i,e,t),f(i,o,t),E(o,n),f(i,r,t),f(i,s,t),E(s,p),f(i,l,t)},p:B,d(i){i&&d(e),i&&d(o),i&&d(r),i&&d(s),i&&d(l)}}}function M(u){let e;return{c(){e=m(`Gradients! This has been done when the Saturday edition of the Frontend Friday Folks started
		over from the beginning. I joined this time and tried solving it again in a different way. Using
		a radial-gradient and moving the background position seemed to make sense to me.`)},l(o){e=$(o,`Gradients! This has been done when the Saturday edition of the Frontend Friday Folks started
		over from the beginning. I joined this time and tried solving it again in a different way. Using
		a radial-gradient and moving the background position seemed to make sense to me.`)},m(o,n){f(o,e,n)},d(o){o&&d(e)}}}function N(u){let e,o,n,r,s,p,l,i;return e=new S({props:{title:"Puzzle 3 solution",solution:u[0]}}),n=new P({props:{$$slots:{default:[q]},$$scope:{ctx:u}}}),s=new S({props:{title:"Puzzle 3 solution",solution:u[1]}}),l=new P({props:{$$slots:{default:[M]},$$scope:{ctx:u}}}),{c(){c(e.$$.fragment),o=v(),c(n.$$.fragment),r=v(),c(s.$$.fragment),p=v(),c(l.$$.fragment)},l(t){g(e.$$.fragment,t),o=x(t),g(n.$$.fragment,t),r=x(t),g(s.$$.fragment,t),p=x(t),g(l.$$.fragment,t)},m(t,a){b(e,t,a),f(t,o,a),b(n,t,a),f(t,r,a),b(s,t,a),f(t,p,a),b(l,t,a),i=!0},p(t,a){const y={};a&4&&(y.$$scope={dirty:a,ctx:t}),n.$set(y);const z={};a&4&&(z.$$scope={dirty:a,ctx:t}),l.$set(z)},i(t){i||(h(e.$$.fragment,t),h(n.$$.fragment,t),h(s.$$.fragment,t),h(l.$$.fragment,t),i=!0)},o(t){_(e.$$.fragment,t),_(n.$$.fragment,t),_(s.$$.fragment,t),_(l.$$.fragment,t),i=!1},d(t){w(e,t),t&&d(o),w(n,t),t&&d(r),w(s,t),t&&d(p),w(l,t)}}}function O(u){let e,o;return e=new j({props:{title:"Push Button",$$slots:{default:[N]},$$scope:{ctx:u}}}),{c(){c(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,r){b(e,n,r),o=!0},p(n,[r]){const s={};r&4&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){o||(h(e.$$.fragment,n),o=!0)},o(n){_(e.$$.fragment,n),o=!1},d(n){w(e,n)}}}function T(u){return[`<div class="bg-rect">
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
</style>`]}class J extends I{constructor(e){super(),D(this,e,T,O,G,{})}}export{J as default};
