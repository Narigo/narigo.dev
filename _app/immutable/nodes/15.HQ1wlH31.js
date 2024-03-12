import{s as R,e as k,b as v,t as N,d as C,f as z,p as B,j as w,i as u,h as O,k as V,l as i}from"../chunks/scheduler.Bz19wuGf.js";import{S as U,i as X,c as I,b,m as x,t as S,a as q,d as E}from"../chunks/index.D0WKZCG1.js";import{N as M}from"../chunks/Narigo.Btfh-9bg.js";import{C as Y}from"../chunks/Code.DH1kOu0O.js";import{C as Q}from"../chunks/CodeBlock.CQlpxQZW.js";import{K as Z}from"../chunks/KataLayout.Dqi_cAxb.js";function tt(r){let t;return{c(){t=N(`I think reducers are a really cool tool to do several things in one run through an array. It's
			very easy for them to get complex and too clever to understand them quickly. I try moving
			things out of them and keep descriptive names for variables and functions that I use.`)},l(e){t=O(e,`I think reducers are a really cool tool to do several things in one run through an array. It's
			very easy for them to get complex and too clever to understand them quickly. I try moving
			things out of them and keep descriptive names for variables and functions that I use.`)},m(e,n){V(e,t,n)},d(e){e&&u(t)}}}function et(r){let t;return{c(){t=N("for ... of string")},l(e){t=O(e,"for ... of string")},m(e,n){V(e,t,n)},d(e){e&&u(t)}}}function ot(r){let t;return{c(){t=N(`I didn't know that for ... of splits a string directly! It's fun to hear other people's
			solutions and then come up with something else that nobody used to solve this. It seems to be
			a good way of learning new stuff.`)},l(e){t=O(e,`I didn't know that for ... of splits a string directly! It's fun to hear other people's
			solutions and then come up with something else that nobody used to solve this. It seems to be
			a good way of learning new stuff.`)},m(e,n){V(e,t,n)},d(e){e&&u(t)}}}function nt(r){let t,e,n="Array.reduce",c,f,F="A somewhat readable reducer",P,h,T,d,D,a,y,G="for-of",W,p,j,m,A,H,g,K,$,L;return h=new Q({props:{code:r[0]}}),d=new M({props:{$$slots:{default:[tt]},$$scope:{ctx:r}}}),m=new Y({props:{$$slots:{default:[et]},$$scope:{ctx:r}}}),g=new Q({props:{code:r[1]}}),$=new M({props:{$$slots:{default:[ot]},$$scope:{ctx:r}}}),{c(){t=k("section"),e=k("h3"),e.textContent=n,c=v(),f=k("p"),f.textContent=F,P=v(),I(h.$$.fragment),T=v(),I(d.$$.fragment),D=v(),a=k("section"),y=k("h3"),y.textContent=G,W=v(),p=k("p"),j=N("Did you know that "),I(m.$$.fragment),A=N(" does not need to split the string?"),H=v(),I(g.$$.fragment),K=v(),I($.$$.fragment)},l(o){t=C(o,"SECTION",{});var s=z(t);e=C(s,"H3",{"data-svelte-h":!0}),B(e)!=="svelte-1f1xkij"&&(e.textContent=n),c=w(s),f=C(s,"P",{"data-svelte-h":!0}),B(f)!=="svelte-qoqzd5"&&(f.textContent=F),P=w(s),b(h.$$.fragment,s),T=w(s),b(d.$$.fragment,s),s.forEach(u),D=w(o),a=C(o,"SECTION",{});var l=z(a);y=C(l,"H3",{"data-svelte-h":!0}),B(y)!=="svelte-1gnuakn"&&(y.textContent=G),W=w(l),p=C(l,"P",{});var _=z(p);j=O(_,"Did you know that "),b(m.$$.fragment,_),A=O(_," does not need to split the string?"),_.forEach(u),H=w(l),b(g.$$.fragment,l),K=w(l),b($.$$.fragment,l),l.forEach(u)},m(o,s){V(o,t,s),i(t,e),i(t,c),i(t,f),i(t,P),x(h,t,null),i(t,T),x(d,t,null),V(o,D,s),V(o,a,s),i(a,y),i(a,W),i(a,p),i(p,j),x(m,p,null),i(p,A),i(a,H),x(g,a,null),i(a,K),x($,a,null),L=!0},p(o,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:o}),d.$set(l);const _={};s&4&&(_.$$scope={dirty:s,ctx:o}),m.$set(_);const J={};s&4&&(J.$$scope={dirty:s,ctx:o}),$.$set(J)},i(o){L||(S(h.$$.fragment,o),S(d.$$.fragment,o),S(m.$$.fragment,o),S(g.$$.fragment,o),S($.$$.fragment,o),L=!0)},o(o){q(h.$$.fragment,o),q(d.$$.fragment,o),q(m.$$.fragment,o),q(g.$$.fragment,o),q($.$$.fragment,o),L=!1},d(o){o&&(u(t),u(D),u(a)),E(h),E(d),E(m),E(g),E($)}}}function st(r){let t,e;return t=new Z({props:{id:"52fba66badcd10859f00097e",name:"Disemvowel Trolls",$$slots:{default:[nt]},$$scope:{ctx:r}}}),{c(){I(t.$$.fragment)},l(n){b(t.$$.fragment,n)},m(n,c){x(t,n,c),e=!0},p(n,[c]){const f={};c&4&&(f.$$scope={dirty:c,ctx:n}),t.$set(f)},i(n){e||(S(t.$$.fragment,n),e=!0)},o(n){q(t.$$.fragment,n),e=!1},d(n){E(t,n)}}}function rt(r){return[`function isVowel(c) {
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
}`]}class dt extends U{constructor(t){super(),X(this,t,rt,st,R,{})}}export{dt as component};
