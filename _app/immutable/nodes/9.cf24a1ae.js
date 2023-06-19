import{S as Y,i as Z,s as tt,y as A,z as O,A as V,g as q,d as x,B as D,k as w,q as h,a as v,l as y,m as k,r as $,h as i,c as I,b as N,G as s}from"../chunks/index.3d7f15fc.js";import{N as U}from"../chunks/Narigo.f2af5427.js";import{C as X}from"../chunks/CodeBlock.f87bc43a.js";import{K as et}from"../chunks/KataLayout.9a51c795.js";function ot(l){let t;return{c(){t=h(`I think reducers are a really cool tool to do several things in one run through an array. It's
			very easy for them to get complex and too clever to understand them quickly. I try moving
			things out of them and keep descriptive names for variables and functions that I use.`)},l(o){t=$(o,`I think reducers are a really cool tool to do several things in one run through an array. It's
			very easy for them to get complex and too clever to understand them quickly. I try moving
			things out of them and keep descriptive names for variables and functions that I use.`)},m(o,n){N(o,t,n)},d(o){o&&i(t)}}}function nt(l){let t;return{c(){t=h(`I didn't know that for ... of splits a string directly! It's fun to hear other people's
			solutions and then come up with something else that nobody used to solve this. It seems to be
			a good way of learning new stuff.`)},l(o){t=$(o,`I didn't know that for ... of splits a string directly! It's fun to hear other people's
			solutions and then come up with something else that nobody used to solve this. It seems to be
			a good way of learning new stuff.`)},m(o,n){N(o,t,n)},d(o){o&&i(t)}}}function rt(l){let t,o,n,c,f,W,B,p,H,u,L,a,b,K,z,g,G,E,j,F,J,_,M,d,P;return p=new X({props:{code:l[0]}}),u=new U({props:{$$slots:{default:[ot]},$$scope:{ctx:l}}}),_=new X({props:{code:l[1]}}),d=new U({props:{$$slots:{default:[nt]},$$scope:{ctx:l}}}),{c(){t=w("section"),o=w("h3"),n=h("Array.reduce"),c=v(),f=w("p"),W=h("A somewhat readable reducer"),B=v(),A(p.$$.fragment),H=v(),A(u.$$.fragment),L=v(),a=w("section"),b=w("h3"),K=h("for-of"),z=v(),g=w("p"),G=h("Did you know that "),E=w("code"),j=h("for ... of string"),F=h(" does not need to split the string?"),J=v(),A(_.$$.fragment),M=v(),A(d.$$.fragment)},l(e){t=y(e,"SECTION",{});var r=k(t);o=y(r,"H3",{});var C=k(o);n=$(C,"Array.reduce"),C.forEach(i),c=I(r),f=y(r,"P",{});var S=k(f);W=$(S,"A somewhat readable reducer"),S.forEach(i),B=I(r),O(p.$$.fragment,r),H=I(r),O(u.$$.fragment,r),r.forEach(i),L=I(e),a=y(e,"SECTION",{});var m=k(a);b=y(m,"H3",{});var Q=k(b);K=$(Q,"for-of"),Q.forEach(i),z=I(m),g=y(m,"P",{});var T=k(g);G=$(T,"Did you know that "),E=y(T,"CODE",{});var R=k(E);j=$(R,"for ... of string"),R.forEach(i),F=$(T," does not need to split the string?"),T.forEach(i),J=I(m),O(_.$$.fragment,m),M=I(m),O(d.$$.fragment,m),m.forEach(i)},m(e,r){N(e,t,r),s(t,o),s(o,n),s(t,c),s(t,f),s(f,W),s(t,B),V(p,t,null),s(t,H),V(u,t,null),N(e,L,r),N(e,a,r),s(a,b),s(b,K),s(a,z),s(a,g),s(g,G),s(g,E),s(E,j),s(g,F),s(a,J),V(_,a,null),s(a,M),V(d,a,null),P=!0},p(e,r){const C={};r&4&&(C.$$scope={dirty:r,ctx:e}),u.$set(C);const S={};r&4&&(S.$$scope={dirty:r,ctx:e}),d.$set(S)},i(e){P||(q(p.$$.fragment,e),q(u.$$.fragment,e),q(_.$$.fragment,e),q(d.$$.fragment,e),P=!0)},o(e){x(p.$$.fragment,e),x(u.$$.fragment,e),x(_.$$.fragment,e),x(d.$$.fragment,e),P=!1},d(e){e&&i(t),D(p),D(u),e&&i(L),e&&i(a),D(_),D(d)}}}function st(l){let t,o;return t=new et({props:{id:"52fba66badcd10859f00097e",name:"Disemvowel Trolls",$$slots:{default:[rt]},$$scope:{ctx:l}}}),{c(){A(t.$$.fragment)},l(n){O(t.$$.fragment,n)},m(n,c){V(t,n,c),o=!0},p(n,[c]){const f={};c&4&&(f.$$scope={dirty:c,ctx:n}),t.$set(f)},i(n){o||(q(t.$$.fragment,n),o=!0)},o(n){x(t.$$.fragment,n),o=!1},d(n){D(t,n)}}}function at(l){return[`function isVowel(c) {
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
}`]}class ut extends Y{constructor(t){super(),Z(this,t,at,st,tt,{})}}export{ut as component};
