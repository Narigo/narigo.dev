import{s as C,e as y,b as S,d as b,f as w,p as I,j as k,i as f,k as x,l as u,t as D,h as N}from"../chunks/scheduler.Bz19wuGf.js";import{S as R,i as E,c as $,b as d,m as g,t as p,a as h,d as _}from"../chunks/index.D0WKZCG1.js";import{C as G}from"../chunks/CodeBlock.CPHG3vlK.js";import{N as K}from"../chunks/Narigo.CFWsiWya.js";import{K as j}from"../chunks/KataLayout.DolvdpPq.js";function q(l){let t;return{c(){t=D(`I couldn't make it today, but Gustaf hosted it this time. I've added this solution for
			writing a very naive implementation for this issue.`)},l(e){t=N(e,`I couldn't make it today, but Gustaf hosted it this time. I've added this solution for
			writing a very naive implementation for this issue.`)},m(e,n){x(e,t,n)},d(e){e&&f(t)}}}function B(l){let t,e,n="Sum of Digits / Digital Root",i,s,c,r,m;return s=new G({props:{code:l[0]}}),r=new K({props:{$$slots:{default:[q]},$$scope:{ctx:l}}}),{c(){t=y("section"),e=y("h3"),e.textContent=n,i=S(),$(s.$$.fragment),c=S(),$(r.$$.fragment)},l(a){t=b(a,"SECTION",{});var o=w(t);e=b(o,"H3",{"data-svelte-h":!0}),I(e)!=="svelte-r48e8h"&&(e.textContent=n),i=k(o),d(s.$$.fragment,o),c=k(o),d(r.$$.fragment,o),o.forEach(f)},m(a,o){x(a,t,o),u(t,e),u(t,i),g(s,t,null),u(t,c),g(r,t,null),m=!0},p(a,o){const v={};o&2&&(v.$$scope={dirty:o,ctx:a}),r.$set(v)},i(a){m||(p(s.$$.fragment,a),p(r.$$.fragment,a),m=!0)},o(a){h(s.$$.fragment,a),h(r.$$.fragment,a),m=!1},d(a){a&&f(t),_(s),_(r)}}}function H(l){let t,e;return t=new j({props:{id:"541c8630095125aba6000c00",name:"Sum of Digits / Digital Root",$$slots:{default:[B]},$$scope:{ctx:l}}}),{c(){$(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,i){g(t,n,i),e=!0},p(n,[i]){const s={};i&2&&(s.$$scope={dirty:i,ctx:n}),t.$set(s)},i(n){e||(p(t.$$.fragment,n),e=!0)},o(n){h(t.$$.fragment,n),e=!1},d(n){_(t,n)}}}function L(l){return[`function digitalRoot(n) {
  const nString = \`\${n}\`;
  if (nString.length === 1) {
    return n;
  }

  let sum = 0;
  for (let char of nString) {
    sum = sum + Number(char);
  }
  return digitalRoot(sum);
}`]}class F extends R{constructor(t){super(),E(this,t,L,H,C,{})}}export{F as component};
