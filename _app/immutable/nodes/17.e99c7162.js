import{s as v,a as K,c as T,i as g,d as h,l as d,m as _}from"../chunks/scheduler.8a7a49fc.js";import{S as y,i as I,b as u,d as f,m as l,a as m,t as c,e as p}from"../chunks/index.6f578239.js";import{C as S}from"../chunks/Code.d0a84767.js";import{N as k}from"../chunks/Narigo.70679acd.js";import{K as C,a as b}from"../chunks/KataLayout.aad13293.js";function L(o){let e;return{c(){e=d("We did multiple Katas today. This is the first one of them.")},l(n){e=_(n,"We did multiple Katas today. This is the first one of them.")},m(n,t){g(n,e,t)},d(n){n&&h(e)}}}function j(o){let e,n;return e=new k({props:{$$slots:{default:[L]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,r){l(e,t,r),n=!0},p(t,r){const s={};r&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}function x(o){let e;return{c(){e=d("number <= 0")},l(n){e=_(n,"number <= 0")},m(n,t){g(n,e,t)},d(n){n&&h(e)}}}function B(o){let e,n,t,r;return n=new S({props:{$$slots:{default:[x]},$$scope:{ctx:o}}}),{c(){e=d(`I first thought this was FizzBuzz, but it summing these numbers turns out to be a bit
			different. The solutions do not include the `),u(n.$$.fragment),t=d(` guard in the beginning,
			but from the specification, it sounds more like the test for that is missing.`)},l(s){e=_(s,`I first thought this was FizzBuzz, but it summing these numbers turns out to be a bit
			different. The solutions do not include the `),f(n.$$.fragment,s),t=_(s,` guard in the beginning,
			but from the specification, it sounds more like the test for that is missing.`)},m(s,$){g(s,e,$),l(n,s,$),g(s,t,$),r=!0},p(s,$){const i={};$&8&&(i.$$scope={dirty:$,ctx:s}),n.$set(i)},i(s){r||(m(n.$$.fragment,s),r=!0)},o(s){c(n.$$.fragment,s),r=!1},d(s){s&&(h(e),h(t)),p(n,s)}}}function D(o){let e,n;return e=new k({props:{$$slots:{default:[B]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,r){l(e,t,r),n=!0},p(t,r){const s={};r&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}function F(o){let e;return{c(){e=d(`When comparing this with other solutions, the readability of this Kata can be improved
			drastically by making the first few cases explicit.`)},l(n){e=_(n,`When comparing this with other solutions, the readability of this Kata can be improved
			drastically by making the first few cases explicit.`)},m(n,t){g(n,e,t)},d(n){n&&h(e)}}}function M(o){let e,n;return e=new k({props:{$$slots:{default:[F]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,r){l(e,t,r),n=!0},p(t,r){const s={};r&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}function N(o){let e,n,t,r,s,$;return e=new b({props:{id:"5264d2b162488dc400000001",name:"Stop gninnipS My sdroW!",solution:o[0],$$slots:{default:[j]},$$scope:{ctx:o}}}),t=new b({props:{id:"514b92a657cdc65150000006",name:"Training on Multiples of 3 or 5",solution:o[2],$$slots:{default:[D]},$$scope:{ctx:o}}}),s=new b({props:{id:"5266876b8f4bf2da9b000362",name:"Who likes it?",solution:o[1],$$slots:{default:[M]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment),n=K(),u(t.$$.fragment),r=K(),u(s.$$.fragment)},l(i){f(e.$$.fragment,i),n=T(i),f(t.$$.fragment,i),r=T(i),f(s.$$.fragment,i)},m(i,a){l(e,i,a),g(i,n,a),l(t,i,a),g(i,r,a),l(s,i,a),$=!0},p(i,a){const w={};a&8&&(w.$$scope={dirty:a,ctx:i}),e.$set(w);const W={};a&8&&(W.$$scope={dirty:a,ctx:i}),t.$set(W);const z={};a&8&&(z.$$scope={dirty:a,ctx:i}),s.$set(z)},i(i){$||(m(e.$$.fragment,i),m(t.$$.fragment,i),m(s.$$.fragment,i),$=!0)},o(i){c(e.$$.fragment,i),c(t.$$.fragment,i),c(s.$$.fragment,i),$=!1},d(i){i&&(h(n),h(r)),p(e,i),p(t,i),p(s,i)}}}function O(o){let e,n;return e=new C({props:{$$slots:{default:[N]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,r){l(e,t,r),n=!0},p(t,[r]){const s={};r&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}function q(o){return[`function spinWords(string){
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
}`]}class J extends y{constructor(e){super(),I(this,e,q,O,v,{})}}export{J as component};
