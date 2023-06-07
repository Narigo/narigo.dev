import{S as x,i as C,s as N,y as g,z as d,A as p,g as h,d as _,B as v,k as y,q as w,a as S,l as k,m as b,r as I,h as f,c as D,b as R,G as u}from"../chunks/index.0bb61340.js";import{C as E}from"../chunks/CodeBlock.f5da237b.js";import{N as G}from"../chunks/Narigo.7389b9d0.js";import{K as q}from"../chunks/KataLayout.726d57c4.js";function B(l){let t;return{c(){t=w(`I couldn't make it today, but Gustaf hosted it this time. I've added this solution for
			writing a very naive implementation for this issue.`)},l(n){t=I(n,`I couldn't make it today, but Gustaf hosted it this time. I've added this solution for
			writing a very naive implementation for this issue.`)},m(n,e){R(n,t,e)},d(n){n&&f(t)}}}function K(l){let t,n,e,i,s,$,r,m;return s=new E({props:{code:l[0]}}),r=new G({props:{$$slots:{default:[B]},$$scope:{ctx:l}}}),{c(){t=y("section"),n=y("h3"),e=w("Sum of Digits / Digital Root"),i=S(),g(s.$$.fragment),$=S(),g(r.$$.fragment)},l(a){t=k(a,"SECTION",{});var o=b(t);n=k(o,"H3",{});var c=b(n);e=I(c,"Sum of Digits / Digital Root"),c.forEach(f),i=D(o),d(s.$$.fragment,o),$=D(o),d(r.$$.fragment,o),o.forEach(f)},m(a,o){R(a,t,o),u(t,n),u(n,e),u(t,i),p(s,t,null),u(t,$),p(r,t,null),m=!0},p(a,o){const c={};o&2&&(c.$$scope={dirty:o,ctx:a}),r.$set(c)},i(a){m||(h(s.$$.fragment,a),h(r.$$.fragment,a),m=!0)},o(a){_(s.$$.fragment,a),_(r.$$.fragment,a),m=!1},d(a){a&&f(t),v(s),v(r)}}}function z(l){let t,n;return t=new q({props:{id:"541c8630095125aba6000c00",name:"Sum of Digits / Digital Root",$$slots:{default:[K]},$$scope:{ctx:l}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,i){p(t,e,i),n=!0},p(e,[i]){const s={};i&2&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){v(t,e)}}}function A(l){return[`function digitalRoot(n) {
  const nString = \`\${n}\`;
  if (nString.length === 1) {
    return n;
  }

  let sum = 0;
  for (let char of nString) {
    sum = sum + Number(char);
  }
  return digitalRoot(sum);
}`]}class T extends x{constructor(t){super(),C(this,t,A,z,N,{})}}export{T as component};
