import{s as O,b as F,j as v,k as c,i as g,t as z,h as I}from"../chunks/scheduler.Ct-hQNXS.js";import{S as k,i as P,c as p,b as d,m as u,t as $,a as f,d as m}from"../chunks/index.DAUMTxUj.js";import{N as b}from"../chunks/Narigo.DCh2BCzZ.js";import{P as B,a as y}from"../chunks/PuzzlePageLayout.DzOxJxqk.js";function N(i){let e;return{c(){e=z(`I have missed this one and I had to solve this on my own. I've tried doing it the way we do it
		during the sessions: First, tell what you see - I saw four items, so I've started with four
		divs. I've added attributes to allow changing the variations: One for the color change, another
		one to add the line up in the 'd'.`)},l(n){e=I(n,`I have missed this one and I had to solve this on my own. I've tried doing it the way we do it
		during the sessions: First, tell what you see - I saw four items, so I've started with four
		divs. I've added attributes to allow changing the variations: One for the color change, another
		one to add the line up in the 'd'.`)},m(n,o){c(n,e,o)},d(n){n&&g(e)}}}function S(i){let e;return{c(){e=z("Ok, another try now, using gradients.")},l(n){e=I(n,"Ok, another try now, using gradients.")},m(n,o){c(n,e,o)},d(n){n&&g(e)}}}function j(i){let e,n,o,s,r,h,l,x;return e=new y({props:{title:"Odoo solution 1",solution:i[0].trim()}}),o=new b({props:{$$slots:{default:[N]},$$scope:{ctx:i}}}),r=new y({props:{title:"Odoo solution 2",solution:i[1].trim()}}),l=new b({props:{$$slots:{default:[S]},$$scope:{ctx:i}}}),{c(){p(e.$$.fragment),n=F(),p(o.$$.fragment),s=F(),p(r.$$.fragment),h=F(),p(l.$$.fragment)},l(t){d(e.$$.fragment,t),n=v(t),d(o.$$.fragment,t),s=v(t),d(r.$$.fragment,t),h=v(t),d(l.$$.fragment,t)},m(t,a){u(e,t,a),c(t,n,a),u(o,t,a),c(t,s,a),u(r,t,a),c(t,h,a),u(l,t,a),x=!0},p(t,a){const w={};a&4&&(w.$$scope={dirty:a,ctx:t}),o.$set(w);const _={};a&4&&(_.$$scope={dirty:a,ctx:t}),l.$set(_)},i(t){x||($(e.$$.fragment,t),$(o.$$.fragment,t),$(r.$$.fragment,t),$(l.$$.fragment,t),x=!0)},o(t){f(e.$$.fragment,t),f(o.$$.fragment,t),f(r.$$.fragment,t),f(l.$$.fragment,t),x=!1},d(t){t&&(g(n),g(s),g(h)),m(e,t),m(o,t),m(r,t),m(l,t)}}}function q(i){let e,n;return e=new B({props:{title:"Odoo",$$slots:{default:[j]},$$scope:{ctx:i}}}),{c(){p(e.$$.fragment)},l(o){d(e.$$.fragment,o)},m(o,s){u(e,o,s),n=!0},p(o,[s]){const r={};s&4&&(r.$$scope={dirty:s,ctx:o}),e.$set(r)},i(o){n||($(e.$$.fragment,o),n=!0)},o(o){f(e.$$.fragment,o),n=!1},d(o){m(e,o)}}}function C(i){return[`<div a></div>
<div b></div>
<div></div>
<div></div>
<style>
  body {
    display: grid;
    place-items:center;
    background:#191919;
    grid-template-columns: repeat(4, 1fr);
    padding: 28px;
  }
  div {
    position:relative;
    margin-top:23;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-sizing:border-box;
    border:20px solid #8F8F8F;
  }
  [a] {
    border-color:#714B67;
  }
  [b]::before {
    position: absolute;
    top: -40;
    right: -20;
    content:'';
    height:70px;
    width:20px;
    border-radius:20px;
    background:#8F8F8F;
  }
</style>`,`<style>
  body {
    background:
      radial-gradient(circle at 189px 112px,#8F8F8F 10px,#0000 0),
      conic-gradient(#8F8F8F,#8F8F8F)179px 110px/20px 50px no-repeat,
      radial-gradient(circle at 77px 162px,#191919 20px,#714B67 0 40px,#0000 0),
      radial-gradient(circle at 159px 162px,#191919 20px,#8F8F8F 0 40px,#0000 0),
      radial-gradient(circle at 241px 162px,#191919 20px,#8F8F8F 0 40px,#0000 0),
      radial-gradient(circle at 323px 162px,#191919 20px,#8F8F8F 0 40px,#191919 0);
  }
</style>`]}class G extends k{constructor(e){super(),P(this,e,C,q,O,{})}}export{G as component};
