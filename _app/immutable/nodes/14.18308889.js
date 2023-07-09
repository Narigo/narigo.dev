import{S as T,i as v,s as I,y as l,z as $,A as m,g as c,d as p,B as g,a as y,c as K,b as h,h as f,q as d,r as _,k as S,l as B,m as D,G as L,H as O}from"../chunks/index.b1660a48.js";import{N as k}from"../chunks/Narigo.1c5e5246.js";import{K as j,a as b}from"../chunks/KataLayout.df9daedb.js";function q(o){let e;return{c(){e=d("We did multiple Katas today. This is the first one of them.")},l(n){e=_(n,"We did multiple Katas today. This is the first one of them.")},m(n,t){h(n,e,t)},d(n){n&&f(e)}}}function x(o){let e,n;return e=new k({props:{$$slots:{default:[q]},$$scope:{ctx:o}}}),{c(){l(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){m(e,t,i),n=!0},p(t,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function C(o){let e,n,t,i;return{c(){e=d(`I first thought this was FizzBuzz, but it summing these numbers turns out to be a bit
			different. The solutions do not include the `),n=S("code"),t=d("number <= 0"),i=d(` guard in the beginning,
			but from the specification, it sounds more like the test for that is missing.`)},l(s){e=_(s,`I first thought this was FizzBuzz, but it summing these numbers turns out to be a bit
			different. The solutions do not include the `),n=B(s,"CODE",{});var u=D(n);t=_(u,"number <= 0"),u.forEach(f),i=_(s,` guard in the beginning,
			but from the specification, it sounds more like the test for that is missing.`)},m(s,u){h(s,e,u),h(s,n,u),L(n,t),h(s,i,u)},p:O,d(s){s&&f(e),s&&f(n),s&&f(i)}}}function E(o){let e,n;return e=new k({props:{$$slots:{default:[C]},$$scope:{ctx:o}}}),{c(){l(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){m(e,t,i),n=!0},p(t,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function F(o){let e;return{c(){e=d(`When comparing this with other solutions, the readability of this Kata can be improved
			drastically by making the first few cases explicit.`)},l(n){e=_(n,`When comparing this with other solutions, the readability of this Kata can be improved
			drastically by making the first few cases explicit.`)},m(n,t){h(n,e,t)},d(n){n&&f(e)}}}function M(o){let e,n;return e=new k({props:{$$slots:{default:[F]},$$scope:{ctx:o}}}),{c(){l(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){m(e,t,i),n=!0},p(t,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function N(o){let e,n,t,i,s,u;return e=new b({props:{id:"5264d2b162488dc400000001",name:"Stop gninnipS My sdroW!",solution:o[0],$$slots:{default:[x]},$$scope:{ctx:o}}}),t=new b({props:{id:"514b92a657cdc65150000006",name:"Training on Multiples of 3 or 5",solution:o[2],$$slots:{default:[E]},$$scope:{ctx:o}}}),s=new b({props:{id:"5266876b8f4bf2da9b000362",name:"Who likes it?",solution:o[1],$$slots:{default:[M]},$$scope:{ctx:o}}}),{c(){l(e.$$.fragment),n=y(),l(t.$$.fragment),i=y(),l(s.$$.fragment)},l(a){$(e.$$.fragment,a),n=K(a),$(t.$$.fragment,a),i=K(a),$(s.$$.fragment,a)},m(a,r){m(e,a,r),h(a,n,r),m(t,a,r),h(a,i,r),m(s,a,r),u=!0},p(a,r){const w={};r&8&&(w.$$scope={dirty:r,ctx:a}),e.$set(w);const z={};r&8&&(z.$$scope={dirty:r,ctx:a}),t.$set(z);const W={};r&8&&(W.$$scope={dirty:r,ctx:a}),s.$set(W)},i(a){u||(c(e.$$.fragment,a),c(t.$$.fragment,a),c(s.$$.fragment,a),u=!0)},o(a){p(e.$$.fragment,a),p(t.$$.fragment,a),p(s.$$.fragment,a),u=!1},d(a){g(e,a),a&&f(n),g(t,a),a&&f(i),g(s,a)}}}function A(o){let e,n;return e=new j({props:{$$slots:{default:[N]},$$scope:{ctx:o}}}),{c(){l(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){m(e,t,i),n=!0},p(t,[i]){const s={};i&8&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function G(o){return[`function spinWords(string){
  const words = string.split(' ');
  return words.map((word) => {
    if (word.length < 5) {
      return word;
    }
    return word.split('').reverse().join('');
  }).join(' ');
}`,'function likes(names) {\n  if (names.length === 0) {\n    return "no one likes this";\n  }\n  if (names.length === 1) {\n    return `${names[0]} likes this`;\n  }\n  if (names.length === 2) {\n    return `${names[0]} and ${names[1]} like this`;\n  }\n  if (names.length === 3) {\n    return `${names[0]}, ${names[1]} and ${names[2]} like this`;\n  }\n  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;\n}',`function solution(number){
  if (number <= 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}`]}class Q extends T{constructor(e){super(),v(this,e,G,A,I,{})}}export{Q as component};
