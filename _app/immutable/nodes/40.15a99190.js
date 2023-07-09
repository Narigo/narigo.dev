import{S as h,i as g,s as _,y as u,z as f,A as c,g as m,d as b,B as $,a as v,c as w,b as l,h as n,q as d,k as z,r as p,l as y,m as k,G as I,H as P}from"../chunks/index.b1660a48.js";import{N as F}from"../chunks/Narigo.1c5e5246.js";import{P as S,a as T}from"../chunks/PuzzlePageLayout.fbe6c2ec.js";function D(i){let t,o,s,a;return{c(){t=d("Thanks to Dan Ott, I learned something new about "),o=z("code"),s=d("border-radius"),a=d(` this time! The border
		itself counts towards the border-radius. So to see any radius, it needs to be at least as thick as
		the border itself to be visible. It may also lead to different "angles" of the border, but I need
		to research that at some point...`)},l(e){t=p(e,"Thanks to Dan Ott, I learned something new about "),o=y(e,"CODE",{});var r=k(o);s=p(r,"border-radius"),r.forEach(n),a=p(e,` this time! The border
		itself counts towards the border-radius. So to see any radius, it needs to be at least as thick as
		the border itself to be visible. It may also lead to different "angles" of the border, but I need
		to research that at some point...`)},m(e,r){l(e,t,r),l(e,o,r),I(o,s),l(e,a,r)},p:P,d(e){e&&n(t),e&&n(o),e&&n(a)}}}function E(i){let t,o,s,a;return t=new T({props:{title:"Puzzle 58 solution",solution:i[0]}}),s=new F({props:{$$slots:{default:[D]},$$scope:{ctx:i}}}),{c(){u(t.$$.fragment),o=v(),u(s.$$.fragment)},l(e){f(t.$$.fragment,e),o=w(e),f(s.$$.fragment,e)},m(e,r){c(t,e,r),l(e,o,r),c(s,e,r),a=!0},p(e,r){const x={};r&2&&(x.$$scope={dirty:r,ctx:e}),s.$set(x)},i(e){a||(m(t.$$.fragment,e),m(s.$$.fragment,e),a=!0)},o(e){b(t.$$.fragment,e),b(s.$$.fragment,e),a=!1},d(e){$(t,e),e&&n(o),$(s,e)}}}function O(i){let t,o;return t=new S({props:{title:"Rose",$$slots:{default:[E]},$$scope:{ctx:i}}}),{c(){u(t.$$.fragment)},l(s){f(t.$$.fragment,s)},m(s,a){c(t,s,a),o=!0},p(s,[a]){const e={};a&2&&(e.$$scope={dirty:a,ctx:s}),t.$set(e)},i(s){o||(m(t.$$.fragment,s),o=!0)},o(s){b(t.$$.fragment,s),o=!1},d(s){$(t,s)}}}function q(i){return[`<div class="beige f"></div>
<div class="beige e"></div>
<div class="blue d"></div>
<div class="blue c"></div>
<div class="blue b"></div>
<div class="blue a"></div>
<style>
  body {
    background: #191919;
  }
  .blue {
    background: #4F77FF;
  }
  .beige {
    background: #F9E492;
    border: 0;
  }
  div {
    position: fixed;
    border: 10px solid #191919;
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }
  .a {
    top: 35px;
    left: 175px
  }
  .b {
    border-radius: 15px 15px 35px 35px;
    top: 55px;
    left: 140px;
    width: 100px;
  }
  .c {
    border-radius: 15px 15px 35px 35px;
    top: 75px;
    left: 120px;
    width: 140px;
  }
  .d {
    border: 0;
    top: 65px;
    left: 150px;
    height: 100px;
    width: 100px;
  }
  .e {
    top: 145px;
    left: 180px;
    height: 40px;
    width: 40px;
  }
  .f {
    border-radius: 10px;
    top: 155px;
    left: 190px;
    height: 100px;
    width: 20px;
  }
</style>
`]}class B extends h{constructor(t){super(),g(this,t,q,O,_,{})}}export{B as component};
