import{S as I,i as D,s as G,y as c,z as g,A as b,g as h,d as _,B as w,a as v,c as x,b as f,h as d,q as m,k,r as $,l as F,m as C,G as E,H as B}from"../chunks/index.b1660a48.js";import{N as P}from"../chunks/Narigo.1c5e5246.js";import{P as j,a as S}from"../chunks/PuzzlePageLayout.b12dd494.js";function q(u){let t,o,n,r,i,p,l;return{c(){t=m(`My first solution when we started playing these CSS battles. Instead of using two inner divs,
		this could have been done with `),o=k("code"),n=m("::before"),r=m(" and "),i=k("code"),p=m("::after"),l=m(` pseudo elements - but
		I didn't know them too well back then.`)},l(s){t=$(s,`My first solution when we started playing these CSS battles. Instead of using two inner divs,
		this could have been done with `),o=F(s,"CODE",{});var e=C(o);n=$(e,"::before"),e.forEach(d),r=$(s," and "),i=F(s,"CODE",{});var a=C(i);p=$(a,"::after"),a.forEach(d),l=$(s,` pseudo elements - but
		I didn't know them too well back then.`)},m(s,e){f(s,t,e),f(s,o,e),E(o,n),f(s,r,e),f(s,i,e),E(i,p),f(s,l,e)},p:B,d(s){s&&d(t),s&&d(o),s&&d(r),s&&d(i),s&&d(l)}}}function M(u){let t;return{c(){t=m(`Gradients! This has been done when the Saturday edition of the Frontend Friday Folks started
		over from the beginning. I joined this time and tried solving it again in a different way. Using
		a radial-gradient and moving the background position seemed to make sense to me.`)},l(o){t=$(o,`Gradients! This has been done when the Saturday edition of the Frontend Friday Folks started
		over from the beginning. I joined this time and tried solving it again in a different way. Using
		a radial-gradient and moving the background position seemed to make sense to me.`)},m(o,n){f(o,t,n)},d(o){o&&d(t)}}}function N(u){let t,o,n,r,i,p,l,s;return t=new S({props:{title:"Puzzle 3 solution",solution:u[0]}}),n=new P({props:{$$slots:{default:[q]},$$scope:{ctx:u}}}),i=new S({props:{title:"Puzzle 3 solution",solution:u[1]}}),l=new P({props:{$$slots:{default:[M]},$$scope:{ctx:u}}}),{c(){c(t.$$.fragment),o=v(),c(n.$$.fragment),r=v(),c(i.$$.fragment),p=v(),c(l.$$.fragment)},l(e){g(t.$$.fragment,e),o=x(e),g(n.$$.fragment,e),r=x(e),g(i.$$.fragment,e),p=x(e),g(l.$$.fragment,e)},m(e,a){b(t,e,a),f(e,o,a),b(n,e,a),f(e,r,a),b(i,e,a),f(e,p,a),b(l,e,a),s=!0},p(e,a){const y={};a&4&&(y.$$scope={dirty:a,ctx:e}),n.$set(y);const z={};a&4&&(z.$$scope={dirty:a,ctx:e}),l.$set(z)},i(e){s||(h(t.$$.fragment,e),h(n.$$.fragment,e),h(i.$$.fragment,e),h(l.$$.fragment,e),s=!0)},o(e){_(t.$$.fragment,e),_(n.$$.fragment,e),_(i.$$.fragment,e),_(l.$$.fragment,e),s=!1},d(e){w(t,e),e&&d(o),w(n,e),e&&d(r),w(i,e),e&&d(p),w(l,e)}}}function O(u){let t,o;return t=new j({props:{title:"Push Button",$$slots:{default:[N]},$$scope:{ctx:u}}}),{c(){c(t.$$.fragment)},l(n){g(t.$$.fragment,n)},m(n,r){b(t,n,r),o=!0},p(n,[r]){const i={};r&4&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){o||(h(t.$$.fragment,n),o=!0)},o(n){_(t.$$.fragment,n),o=!1},d(n){w(t,n)}}}function T(u){return[`<div class="bg-rect">
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
</style>`]}class L extends I{constructor(t){super(),D(this,t,T,O,G,{})}}export{L as component};
