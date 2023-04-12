import{S as Y,i as Z,s as tt,w as x,x as O,y as V,f as q,t as A,z as D,k as w,q as h,a as v,l as y,m as k,r as $,h as i,c as I,b as N,G as s}from"../../../../../chunks/index-ed5c000a.js";import{N as U}from"../../../../../chunks/Narigo-406ea8d0.js";import{C as X}from"../../../../../chunks/CodeBlock-718745a2.js";import{K as et}from"../../../../../chunks/KataLayout-4215043a.js";function ot(l){let t;return{c(){t=h(`I think reducers are a really cool tool to do several things in one run through an array. It's
			very easy for them to get complex and too clever to understand them quickly. I try moving
			things out of them and keep descriptive names for variables and functions that I use.`)},l(o){t=$(o,`I think reducers are a really cool tool to do several things in one run through an array. It's
			very easy for them to get complex and too clever to understand them quickly. I try moving
			things out of them and keep descriptive names for variables and functions that I use.`)},m(o,n){N(o,t,n)},d(o){o&&i(t)}}}function nt(l){let t;return{c(){t=h(`I didn't know that for ... of splits a string directly! It's fun to hear other people's
			solutions and then come up with something else that nobody used to solve this. It seems to be
			a good way of learning new stuff.`)},l(o){t=$(o,`I didn't know that for ... of splits a string directly! It's fun to hear other people's
			solutions and then come up with something else that nobody used to solve this. It seems to be
			a good way of learning new stuff.`)},m(o,n){N(o,t,n)},d(o){o&&i(t)}}}function rt(l){let t,o,n,f,c,W,H,p,K,u,L,a,b,z,B,g,G,E,j,F,J,_,M,d,P;return p=new X({props:{code:l[0]}}),u=new U({props:{$$slots:{default:[ot]},$$scope:{ctx:l}}}),_=new X({props:{code:l[1]}}),d=new U({props:{$$slots:{default:[nt]},$$scope:{ctx:l}}}),{c(){t=w("section"),o=w("h3"),n=h("Array.reduce"),f=v(),c=w("p"),W=h("A somewhat readable reducer"),H=v(),x(p.$$.fragment),K=v(),x(u.$$.fragment),L=v(),a=w("section"),b=w("h3"),z=h("for-of"),B=v(),g=w("p"),G=h("Did you know that "),E=w("code"),j=h("for ... of string"),F=h(" does not need to split the string?"),J=v(),x(_.$$.fragment),M=v(),x(d.$$.fragment)},l(e){t=y(e,"SECTION",{});var r=k(t);o=y(r,"H3",{});var C=k(o);n=$(C,"Array.reduce"),C.forEach(i),f=I(r),c=y(r,"P",{});var S=k(c);W=$(S,"A somewhat readable reducer"),S.forEach(i),H=I(r),O(p.$$.fragment,r),K=I(r),O(u.$$.fragment,r),r.forEach(i),L=I(e),a=y(e,"SECTION",{});var m=k(a);b=y(m,"H3",{});var Q=k(b);z=$(Q,"for-of"),Q.forEach(i),B=I(m),g=y(m,"P",{});var T=k(g);G=$(T,"Did you know that "),E=y(T,"CODE",{});var R=k(E);j=$(R,"for ... of string"),R.forEach(i),F=$(T," does not need to split the string?"),T.forEach(i),J=I(m),O(_.$$.fragment,m),M=I(m),O(d.$$.fragment,m),m.forEach(i)},m(e,r){N(e,t,r),s(t,o),s(o,n),s(t,f),s(t,c),s(c,W),s(t,H),V(p,t,null),s(t,K),V(u,t,null),N(e,L,r),N(e,a,r),s(a,b),s(b,z),s(a,B),s(a,g),s(g,G),s(g,E),s(E,j),s(g,F),s(a,J),V(_,a,null),s(a,M),V(d,a,null),P=!0},p(e,r){const C={};r&4&&(C.$$scope={dirty:r,ctx:e}),u.$set(C);const S={};r&4&&(S.$$scope={dirty:r,ctx:e}),d.$set(S)},i(e){P||(q(p.$$.fragment,e),q(u.$$.fragment,e),q(_.$$.fragment,e),q(d.$$.fragment,e),P=!0)},o(e){A(p.$$.fragment,e),A(u.$$.fragment,e),A(_.$$.fragment,e),A(d.$$.fragment,e),P=!1},d(e){e&&i(t),D(p),D(u),e&&i(L),e&&i(a),D(_),D(d)}}}function st(l){let t,o;return t=new et({props:{id:"52fba66badcd10859f00097e",name:"Disemvowel Trolls",$$slots:{default:[rt]},$$scope:{ctx:l}}}),{c(){x(t.$$.fragment)},l(n){O(t.$$.fragment,n)},m(n,f){V(t,n,f),o=!0},p(n,[f]){const c={};f&4&&(c.$$scope={dirty:f,ctx:n}),t.$set(c)},i(n){o||(q(t.$$.fragment,n),o=!0)},o(n){A(t.$$.fragment,n),o=!1},d(n){D(t,n)}}}function at(l){return[`function isVowel(c) {
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
}`]}class ut extends Y{constructor(t){super(),Z(this,t,at,st,tt,{})}}export{ut as default};
