import{s as R,f as C,a as v,l as N,g as k,h as z,A as B,c as w,d as u,m as O,i as V,x as i}from"../chunks/scheduler.oS2FPi-b.js";import{S as U,i as X,b as I,d as x,m as b,a as S,t as q,e as E}from"../chunks/index.ICQ99_FX.js";import{N as M}from"../chunks/Narigo.3rfA2dqH.js";import{C as Y}from"../chunks/Code.NieIvAYp.js";import{C as Q}from"../chunks/CodeBlock.cxN5hX5B.js";import{K as Z}from"../chunks/KataLayout.Q_xMugkr.js";function tt(r){let t;return{c(){t=N(`I think reducers are a really cool tool to do several things in one run through an array. It's
			very easy for them to get complex and too clever to understand them quickly. I try moving
			things out of them and keep descriptive names for variables and functions that I use.`)},l(e){t=O(e,`I think reducers are a really cool tool to do several things in one run through an array. It's
			very easy for them to get complex and too clever to understand them quickly. I try moving
			things out of them and keep descriptive names for variables and functions that I use.`)},m(e,n){V(e,t,n)},d(e){e&&u(t)}}}function et(r){let t;return{c(){t=N("for ... of string")},l(e){t=O(e,"for ... of string")},m(e,n){V(e,t,n)},d(e){e&&u(t)}}}function ot(r){let t;return{c(){t=N(`I didn't know that for ... of splits a string directly! It's fun to hear other people's
			solutions and then come up with something else that nobody used to solve this. It seems to be
			a good way of learning new stuff.`)},l(e){t=O(e,`I didn't know that for ... of splits a string directly! It's fun to hear other people's
			solutions and then come up with something else that nobody used to solve this. It seems to be
			a good way of learning new stuff.`)},m(e,n){V(e,t,n)},d(e){e&&u(t)}}}function nt(r){let t,e,n="Array.reduce",c,f,F="A somewhat readable reducer",L,h,P,m,A,a,y,G="for-of",T,p,W,d,H,K,g,j,$,D;return h=new Q({props:{code:r[0]}}),m=new M({props:{$$slots:{default:[tt]},$$scope:{ctx:r}}}),d=new Y({props:{$$slots:{default:[et]},$$scope:{ctx:r}}}),g=new Q({props:{code:r[1]}}),$=new M({props:{$$slots:{default:[ot]},$$scope:{ctx:r}}}),{c(){t=C("section"),e=C("h3"),e.textContent=n,c=v(),f=C("p"),f.textContent=F,L=v(),I(h.$$.fragment),P=v(),I(m.$$.fragment),A=v(),a=C("section"),y=C("h3"),y.textContent=G,T=v(),p=C("p"),W=N("Did you know that "),I(d.$$.fragment),H=N(" does not need to split the string?"),K=v(),I(g.$$.fragment),j=v(),I($.$$.fragment)},l(o){t=k(o,"SECTION",{});var s=z(t);e=k(s,"H3",{"data-svelte-h":!0}),B(e)!=="svelte-1f1xkij"&&(e.textContent=n),c=w(s),f=k(s,"P",{"data-svelte-h":!0}),B(f)!=="svelte-qoqzd5"&&(f.textContent=F),L=w(s),x(h.$$.fragment,s),P=w(s),x(m.$$.fragment,s),s.forEach(u),A=w(o),a=k(o,"SECTION",{});var l=z(a);y=k(l,"H3",{"data-svelte-h":!0}),B(y)!=="svelte-1gnuakn"&&(y.textContent=G),T=w(l),p=k(l,"P",{});var _=z(p);W=O(_,"Did you know that "),x(d.$$.fragment,_),H=O(_," does not need to split the string?"),_.forEach(u),K=w(l),x(g.$$.fragment,l),j=w(l),x($.$$.fragment,l),l.forEach(u)},m(o,s){V(o,t,s),i(t,e),i(t,c),i(t,f),i(t,L),b(h,t,null),i(t,P),b(m,t,null),V(o,A,s),V(o,a,s),i(a,y),i(a,T),i(a,p),i(p,W),b(d,p,null),i(p,H),i(a,K),b(g,a,null),i(a,j),b($,a,null),D=!0},p(o,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:o}),m.$set(l);const _={};s&4&&(_.$$scope={dirty:s,ctx:o}),d.$set(_);const J={};s&4&&(J.$$scope={dirty:s,ctx:o}),$.$set(J)},i(o){D||(S(h.$$.fragment,o),S(m.$$.fragment,o),S(d.$$.fragment,o),S(g.$$.fragment,o),S($.$$.fragment,o),D=!0)},o(o){q(h.$$.fragment,o),q(m.$$.fragment,o),q(d.$$.fragment,o),q(g.$$.fragment,o),q($.$$.fragment,o),D=!1},d(o){o&&(u(t),u(A),u(a)),E(h),E(m),E(d),E(g),E($)}}}function st(r){let t,e;return t=new Z({props:{id:"52fba66badcd10859f00097e",name:"Disemvowel Trolls",$$slots:{default:[nt]},$$scope:{ctx:r}}}),{c(){I(t.$$.fragment)},l(n){x(t.$$.fragment,n)},m(n,c){b(t,n,c),e=!0},p(n,[c]){const f={};c&4&&(f.$$scope={dirty:c,ctx:n}),t.$set(f)},i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){q(t.$$.fragment,n),e=!1},d(n){E(t,n)}}}function rt(r){return[`function isVowel(c) {
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
}`]}class mt extends U{constructor(t){super(),X(this,t,rt,st,R,{})}}export{mt as component};
