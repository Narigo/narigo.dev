import{S as R,i as C,s as N,w as d,x as g,y as p,f as h,t as _,z as v,k as y,q as D,a as S,l as k,m as b,r as x,h as f,c as w,b as I,G as u}from"../../../../../chunks/index-ed5c000a.js";import{C as E}from"../../../../../chunks/CodeBlock-718745a2.js";import{N as G}from"../../../../../chunks/Narigo-406ea8d0.js";import{K as q}from"../../../../../chunks/KataLayout-8792a90c.js";function K(l){let t;return{c(){t=D(`I couldn't make it today, but Gustaf hosted it this time. I've added this solution for
			writing a very naive implementation for this issue.`)},l(n){t=x(n,`I couldn't make it today, but Gustaf hosted it this time. I've added this solution for
			writing a very naive implementation for this issue.`)},m(n,e){I(n,t,e)},d(n){n&&f(t)}}}function z(l){let t,n,e,i,s,$,r,m;return s=new E({props:{code:l[0]}}),r=new G({props:{$$slots:{default:[K]},$$scope:{ctx:l}}}),{c(){t=y("section"),n=y("h3"),e=D("Sum of Digits / Digital Root"),i=S(),d(s.$$.fragment),$=S(),d(r.$$.fragment)},l(a){t=k(a,"SECTION",{});var o=b(t);n=k(o,"H3",{});var c=b(n);e=x(c,"Sum of Digits / Digital Root"),c.forEach(f),i=w(o),g(s.$$.fragment,o),$=w(o),g(r.$$.fragment,o),o.forEach(f)},m(a,o){I(a,t,o),u(t,n),u(n,e),u(t,i),p(s,t,null),u(t,$),p(r,t,null),m=!0},p(a,o){const c={};o&2&&(c.$$scope={dirty:o,ctx:a}),r.$set(c)},i(a){m||(h(s.$$.fragment,a),h(r.$$.fragment,a),m=!0)},o(a){_(s.$$.fragment,a),_(r.$$.fragment,a),m=!1},d(a){a&&f(t),v(s),v(r)}}}function B(l){let t,n;return t=new q({props:{id:"541c8630095125aba6000c00",name:"Sum of Digits / Digital Root",$$slots:{default:[z]},$$scope:{ctx:l}}}),{c(){d(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,i){p(t,e,i),n=!0},p(e,[i]){const s={};i&2&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){v(t,e)}}}function H(l){return[`function digitalRoot(n) {
  const nString = \`\${n}\`;
  if (nString.length === 1) {
    return n;
  }

  let sum = 0;
  for (let char of nString) {
    sum = sum + Number(char);
  }
  return digitalRoot(sum);
}`]}class j extends R{constructor(t){super(),C(this,t,H,B,N,{})}}export{j as default};
