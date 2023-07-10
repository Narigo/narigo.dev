import{s as T,a as z,c as K,i as l,d as f,l as d,m as _,f as y,g as x,A as C,y as I}from"../chunks/scheduler.52b7490a.js";import{S,i as D,b as $,d as m,m as c,a as g,t as p,e as h}from"../chunks/index.644eb738.js";import{N as k}from"../chunks/Narigo.e24b860c.js";import{K as L,a as b}from"../chunks/KataLayout.f3a2f9f1.js";function O(o){let e;return{c(){e=d("We did multiple Katas today. This is the first one of them.")},l(n){e=_(n,"We did multiple Katas today. This is the first one of them.")},m(n,t){l(n,e,t)},d(n){n&&f(e)}}}function j(o){let e,n;return e=new k({props:{$$slots:{default:[O]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,i){c(e,t,i),n=!0},p(t,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function B(o){let e,n,t="number <= 0",i;return{c(){e=d(`I first thought this was FizzBuzz, but it summing these numbers turns out to be a bit
			different. The solutions do not include the `),n=y("code"),n.textContent=t,i=d(` guard in the beginning,
			but from the specification, it sounds more like the test for that is missing.`)},l(s){e=_(s,`I first thought this was FizzBuzz, but it summing these numbers turns out to be a bit
			different. The solutions do not include the `),n=x(s,"CODE",{"data-svelte-h":!0}),C(n)!=="svelte-1t1pivb"&&(n.textContent=t),i=_(s,` guard in the beginning,
			but from the specification, it sounds more like the test for that is missing.`)},m(s,u){l(s,e,u),l(s,n,u),l(s,i,u)},p:I,d(s){s&&(f(e),f(n),f(i))}}}function F(o){let e,n;return e=new k({props:{$$slots:{default:[B]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,i){c(e,t,i),n=!0},p(t,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function M(o){let e;return{c(){e=d(`When comparing this with other solutions, the readability of this Kata can be improved
			drastically by making the first few cases explicit.`)},l(n){e=_(n,`When comparing this with other solutions, the readability of this Kata can be improved
			drastically by making the first few cases explicit.`)},m(n,t){l(n,e,t)},d(n){n&&f(e)}}}function N(o){let e,n;return e=new k({props:{$$slots:{default:[M]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,i){c(e,t,i),n=!0},p(t,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function q(o){let e,n,t,i,s,u;return e=new b({props:{id:"5264d2b162488dc400000001",name:"Stop gninnipS My sdroW!",solution:o[0],$$slots:{default:[j]},$$scope:{ctx:o}}}),t=new b({props:{id:"514b92a657cdc65150000006",name:"Training on Multiples of 3 or 5",solution:o[2],$$slots:{default:[F]},$$scope:{ctx:o}}}),s=new b({props:{id:"5266876b8f4bf2da9b000362",name:"Who likes it?",solution:o[1],$$slots:{default:[N]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment),n=z(),$(t.$$.fragment),i=z(),$(s.$$.fragment)},l(a){m(e.$$.fragment,a),n=K(a),m(t.$$.fragment,a),i=K(a),m(s.$$.fragment,a)},m(a,r){c(e,a,r),l(a,n,r),c(t,a,r),l(a,i,r),c(s,a,r),u=!0},p(a,r){const w={};r&8&&(w.$$scope={dirty:r,ctx:a}),e.$set(w);const W={};r&8&&(W.$$scope={dirty:r,ctx:a}),t.$set(W);const v={};r&8&&(v.$$scope={dirty:r,ctx:a}),s.$set(v)},i(a){u||(g(e.$$.fragment,a),g(t.$$.fragment,a),g(s.$$.fragment,a),u=!0)},o(a){p(e.$$.fragment,a),p(t.$$.fragment,a),p(s.$$.fragment,a),u=!1},d(a){a&&(f(n),f(i)),h(e,a),h(t,a),h(s,a)}}}function A(o){let e,n;return e=new L({props:{$$slots:{default:[q]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,i){c(e,t,i),n=!0},p(t,[i]){const s={};i&8&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function E(o){return[`function spinWords(string){
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
}`]}class Q extends S{constructor(e){super(),D(this,e,E,A,T,{})}}export{Q as component};
