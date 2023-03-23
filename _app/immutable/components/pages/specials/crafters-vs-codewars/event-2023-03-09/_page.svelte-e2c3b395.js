import{S as z,i as F,s as G,w as P,x as V,y as A,f as L,t as S,z as O,C as H,k as b,q as g,a as v,l as y,m as C,r as k,h as $,c as E,n as q,b as p,G as h,u as K,D as T,E as j,F as I,B as J}from"../../../../../chunks/index-543a8e9c.js";import{C as B}from"../../../../../chunks/CodeBlock-e25b5803.js";import{P as M}from"../../../../../chunks/PageLayout-8dc71dc3.js";function N(l){let e,r,t,s,f,u,c,m;const d=l[2].default,i=H(d,l,l[3],null);return{c(){e=b("h2"),r=g(l[1]),t=v(),s=b("a"),f=g("Link"),c=v(),i&&i.c(),this.h()},l(o){e=y(o,"H2",{});var n=C(e);r=k(n,l[1]),n.forEach($),t=E(o),s=y(o,"A",{href:!0});var w=C(s);f=k(w,"Link"),w.forEach($),c=E(o),i&&i.l(o),this.h()},h(){q(s,"href",u="https://www.codewars.com/kata/"+l[0])},m(o,n){p(o,e,n),h(e,r),p(o,t,n),p(o,s,n),h(s,f),p(o,c,n),i&&i.m(o,n),m=!0},p(o,n){(!m||n&2)&&K(r,o[1]),(!m||n&1&&u!==(u="https://www.codewars.com/kata/"+o[0]))&&q(s,"href",u),i&&i.p&&(!m||n&8)&&T(i,d,o,o[3],m?I(d,o[3],n,null):j(o[3]),null)},i(o){m||(L(i,o),m=!0)},o(o){S(i,o),m=!1},d(o){o&&$(e),o&&$(t),o&&$(s),o&&$(c),i&&i.d(o)}}}function Q(l){let e,r;return e=new M({props:{$$slots:{default:[N]},$$scope:{ctx:l}}}),{c(){P(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){A(e,t,s),r=!0},p(t,[s]){const f={};s&11&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){r||(L(e.$$.fragment,t),r=!0)},o(t){S(e.$$.fragment,t),r=!1},d(t){O(e,t)}}}function R(l,e,r){let{$$slots:t={},$$scope:s}=e,{id:f}=e,{name:u}=e;return l.$$set=c=>{"id"in c&&r(0,f=c.id),"name"in c&&r(1,u=c.name),"$$scope"in c&&r(3,s=c.$$scope)},[f,u,t,s]}class U extends z{constructor(e){super(),F(this,e,R,Q,G,{id:0,name:1})}}function X(l){let e,r,t,s,f,u,c,m,d,i,o,n,w;return s=new B({props:{code:l[0]}}),n=new B({props:{code:l[1]}}),{c(){e=b("p"),r=g("A somewhat readable reducer"),t=v(),P(s.$$.fragment),f=v(),u=b("p"),c=g("Did you know that "),m=b("code"),d=g("for ... of string"),i=g(" does not need to split the string?"),o=v(),P(n.$$.fragment)},l(a){e=y(a,"P",{});var _=C(e);r=k(_,"A somewhat readable reducer"),_.forEach($),t=E(a),V(s.$$.fragment,a),f=E(a),u=y(a,"P",{});var D=C(u);c=k(D,"Did you know that "),m=y(D,"CODE",{});var W=C(m);d=k(W,"for ... of string"),W.forEach($),i=k(D," does not need to split the string?"),D.forEach($),o=E(a),V(n.$$.fragment,a)},m(a,_){p(a,e,_),h(e,r),p(a,t,_),A(s,a,_),p(a,f,_),p(a,u,_),h(u,c),h(u,m),h(m,d),h(u,i),p(a,o,_),A(n,a,_),w=!0},p:J,i(a){w||(L(s.$$.fragment,a),L(n.$$.fragment,a),w=!0)},o(a){S(s.$$.fragment,a),S(n.$$.fragment,a),w=!1},d(a){a&&$(e),a&&$(t),O(s,a),a&&$(f),a&&$(u),a&&$(o),O(n,a)}}}function Y(l){let e,r;return e=new U({props:{id:"52fba66badcd10859f00097e",name:"Disemvowel Trolls",$$slots:{default:[X]},$$scope:{ctx:l}}}),{c(){P(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){A(e,t,s),r=!0},p(t,[s]){const f={};s&4&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){r||(L(e.$$.fragment,t),r=!0)},o(t){S(e.$$.fragment,t),r=!1},d(t){O(e,t)}}}function Z(l){return[`function isVowel(c) {
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
}`]}class oe extends z{constructor(e){super(),F(this,e,Z,Y,G,{})}}export{oe as default};
