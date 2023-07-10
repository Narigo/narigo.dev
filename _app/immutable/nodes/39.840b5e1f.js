import{s as w,a as x,c as _,i as l,d as p,f as g,g as h,A as b,y as k}from"../chunks/scheduler.52b7490a.js";import{S as v,i as y,b as u,d as c,m,a as d,t as f,e as $}from"../chunks/index.644eb738.js";import{N as z}from"../chunks/Narigo.e24b860c.js";import{P,a as F}from"../chunks/PuzzlePageLayout.389c71ed.js";function L(s){let e,o=`Lots of <code>-webkit-box-reflect</code> in here! We did this 100% solution at the
			<a href="https://jscraftcamp.org" rel="external">JSCraftCamp 2023</a> in a group. Later, we started
			working on another solution with gradients. Somehow the numbers didn&#39;t really add up, so maybe
			other units like percentages or similar should have been used to cleanly get to 100%.`,t,n,a=`Interestingly, using <code>r</code> (or other non-assigned names) as an element name seems to work
			out as block elements!`;return{c(){e=g("p"),e.innerHTML=o,t=x(),n=g("p"),n.innerHTML=a},l(r){e=h(r,"P",{"data-svelte-h":!0}),b(e)!=="svelte-wen5kp"&&(e.innerHTML=o),t=_(r),n=h(r,"P",{"data-svelte-h":!0}),b(n)!=="svelte-15d7grc"&&(n.innerHTML=a)},m(r,i){l(r,e,i),l(r,t,i),l(r,n,i)},p:k,d(r){r&&(p(e),p(t),p(n))}}}function C(s){let e,o,t,n;return e=new F({props:{title:"Puzzle 57 solution",solution:s[0]}}),t=new z({props:{$$slots:{default:[L]},$$scope:{ctx:s}}}),{c(){u(e.$$.fragment),o=x(),u(t.$$.fragment)},l(a){c(e.$$.fragment,a),o=_(a),c(t.$$.fragment,a)},m(a,r){m(e,a,r),l(a,o,r),m(t,a,r),n=!0},p(a,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:a}),t.$set(i)},i(a){n||(d(e.$$.fragment,a),d(t.$$.fragment,a),n=!0)},o(a){f(e.$$.fragment,a),f(t.$$.fragment,a),n=!1},d(a){a&&p(o),$(e,a),$(t,a)}}}function S(s){let e,o;return e=new P({props:{title:"Skull",$$slots:{default:[C]},$$scope:{ctx:s}}}),{c(){u(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,n){m(e,t,n),o=!0},p(t,[n]){const a={};n&2&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){o||(d(e.$$.fragment,t),o=!0)},o(t){f(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}function H(s){return[`<r>
  <div id=a>
  <div class=pillar>
    <div class=blue></div>
  </div>
  </div>
</r>
<style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  r {
    width: 110px;
    height: 110px;
    background: #4F77FF;
  }

  #a {
    -webkit-box-reflect: below 60px;
  }

  .pillar {
    background: #F9E492;
    border-radius: 50%;
    box-shadow: #191919 8px 8px 0px 7px;
    margin: -20px;
    height: 45px;
    width: 45px;
    -webkit-box-reflect: right 60px;
  }

  .blue {
    background: #4F77FF;
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }
</style>
`]}class q extends v{constructor(e){super(),y(this,e,H,S,w,{})}}export{q as component};
