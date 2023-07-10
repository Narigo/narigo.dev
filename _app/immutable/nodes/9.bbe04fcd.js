import{s as G,f as w,a as h,g as y,h as K,A as V,c as p,d as g,i as q,x as l,l as B,m as F}from"../chunks/scheduler.52b7490a.js";import{S as J,i as Q,b as C,d as k,m as x,a as I,t as b,e as S}from"../chunks/index.644eb738.js";import{N as M}from"../chunks/Narigo.e24b860c.js";import{C as j}from"../chunks/CodeBlock.b7e19fb6.js";import{K as R}from"../chunks/KataLayout.f3a2f9f1.js";function U(i){let t;return{c(){t=B(`I think reducers are a really cool tool to do several things in one run through an array. It's
			very easy for them to get complex and too clever to understand them quickly. I try moving
			things out of them and keep descriptive names for variables and functions that I use.`)},l(e){t=F(e,`I think reducers are a really cool tool to do several things in one run through an array. It's
			very easy for them to get complex and too clever to understand them quickly. I try moving
			things out of them and keep descriptive names for variables and functions that I use.`)},m(e,o){q(e,t,o)},d(e){e&&g(t)}}}function X(i){let t;return{c(){t=B(`I didn't know that for ... of splits a string directly! It's fun to hear other people's
			solutions and then come up with something else that nobody used to solve this. It seems to be
			a good way of learning new stuff.`)},l(e){t=F(e,`I didn't know that for ... of splits a string directly! It's fun to hear other people's
			solutions and then come up with something else that nobody used to solve this. It seems to be
			a good way of learning new stuff.`)},m(e,o){q(e,t,o)},d(e){e&&g(t)}}}function Y(i){let t,e,o="Array.reduce",f,u,A="A somewhat readable reducer",E,m,H,c,L,r,_,P="for-of",N,v,W="Did you know that <code>for ... of string</code> does not need to split the string?",O,$,z,d,T;return m=new j({props:{code:i[0]}}),c=new M({props:{$$slots:{default:[U]},$$scope:{ctx:i}}}),$=new j({props:{code:i[1]}}),d=new M({props:{$$slots:{default:[X]},$$scope:{ctx:i}}}),{c(){t=w("section"),e=w("h3"),e.textContent=o,f=h(),u=w("p"),u.textContent=A,E=h(),C(m.$$.fragment),H=h(),C(c.$$.fragment),L=h(),r=w("section"),_=w("h3"),_.textContent=P,N=h(),v=w("p"),v.innerHTML=W,O=h(),C($.$$.fragment),z=h(),C(d.$$.fragment)},l(n){t=y(n,"SECTION",{});var s=K(t);e=y(s,"H3",{"data-svelte-h":!0}),V(e)!=="svelte-1f1xkij"&&(e.textContent=o),f=p(s),u=y(s,"P",{"data-svelte-h":!0}),V(u)!=="svelte-qoqzd5"&&(u.textContent=A),E=p(s),k(m.$$.fragment,s),H=p(s),k(c.$$.fragment,s),s.forEach(g),L=p(n),r=y(n,"SECTION",{});var a=K(r);_=y(a,"H3",{"data-svelte-h":!0}),V(_)!=="svelte-1gnuakn"&&(_.textContent=P),N=p(a),v=y(a,"P",{"data-svelte-h":!0}),V(v)!=="svelte-ezazy0"&&(v.innerHTML=W),O=p(a),k($.$$.fragment,a),z=p(a),k(d.$$.fragment,a),a.forEach(g)},m(n,s){q(n,t,s),l(t,e),l(t,f),l(t,u),l(t,E),x(m,t,null),l(t,H),x(c,t,null),q(n,L,s),q(n,r,s),l(r,_),l(r,N),l(r,v),l(r,O),x($,r,null),l(r,z),x(d,r,null),T=!0},p(n,s){const a={};s&4&&(a.$$scope={dirty:s,ctx:n}),c.$set(a);const D={};s&4&&(D.$$scope={dirty:s,ctx:n}),d.$set(D)},i(n){T||(I(m.$$.fragment,n),I(c.$$.fragment,n),I($.$$.fragment,n),I(d.$$.fragment,n),T=!0)},o(n){b(m.$$.fragment,n),b(c.$$.fragment,n),b($.$$.fragment,n),b(d.$$.fragment,n),T=!1},d(n){n&&(g(t),g(L),g(r)),S(m),S(c),S($),S(d)}}}function Z(i){let t,e;return t=new R({props:{id:"52fba66badcd10859f00097e",name:"Disemvowel Trolls",$$slots:{default:[Y]},$$scope:{ctx:i}}}),{c(){C(t.$$.fragment)},l(o){k(t.$$.fragment,o)},m(o,f){x(t,o,f),e=!0},p(o,[f]){const u={};f&4&&(u.$$scope={dirty:f,ctx:o}),t.$set(u)},i(o){e||(I(t.$$.fragment,o),e=!0)},o(o){b(t.$$.fragment,o),e=!1},d(o){S(t,o)}}}function tt(i){return[`function isVowel(c) {
  return "aeiou".includes(c.toLowerCase());
}

function disemvowel(str) {
  return str.split('').reduce((stringWithoutVowels, char) => {
    if (isVowel(char)) {
      return stringWithoutVowels;
    }
    return stringWithoutVowels + char;
  }, '');
}`,`function disemvowel(str) {
  let out = '';
  for (const c of str) {
    if (!['a','e','i','o','u'].includes(c.toLowerCase())) {
      out += c;
    }
  }
  return out;
}`]}class at extends J{constructor(t){super(),Q(this,t,tt,Z,G,{})}}export{at as component};
