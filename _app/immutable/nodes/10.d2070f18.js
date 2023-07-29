import{s as Z,f as K,a as b,g as O,h as V,A as X,c as v,d as u,i as _,x as h,l as x,m as y}from"../chunks/scheduler.7b4a0948.js";import{S as tt,i as et,b as $,d as p,m,a as g,t as c,e as d}from"../chunks/index.38f4d462.js";import{C as Y}from"../chunks/Code.81306a52.js";import{C as M}from"../chunks/CodeBlock.1195a1eb.js";import{N as W}from"../chunks/Narigo.3993b19b.js";import{K as nt}from"../chunks/KataLayout.52effc84.js";function ot(a){let t;return{c(){t=x(`The very first solution we came up with, thanks to @komatian to guide me. We improved the
			solution a couple of times:`)},l(e){t=y(e,`The very first solution we came up with, thanks to @komatian to guide me. We improved the
			solution a couple of times:`)},m(e,s){_(e,t,s)},d(e){e&&u(t)}}}function st(a){let t;return{c(){t=x("@Gustaf even made the inner for-loop disappear with String.prototype.repeat:")},l(e){t=y(e,"@Gustaf even made the inner for-loop disappear with String.prototype.repeat:")},m(e,s){_(e,t,s)},d(e){e&&u(t)}}}function rt(a){let t;return{c(){t=x("In the end, we came up with a bit more readable code:")},l(e){t=y(e,"In the end, we came up with a bit more readable code:")},m(e,s){_(e,t,s)},d(e){e&&u(t)}}}function at(a){let t;return{c(){t=x("[...inputString]")},l(e){t=y(e,"[...inputString]")},m(e,s){_(e,t,s)},d(e){e&&u(t)}}}function it(a){let t;return{c(){t=x("split('')")},l(e){t=y(e,"split('')")},m(e,s){_(e,t,s)},d(e){e&&u(t)}}}function lt(a){let t,e,s,i,l,j;return e=new Y({props:{$$slots:{default:[at]},$$scope:{ctx:a}}}),i=new Y({props:{$$slots:{default:[it]},$$scope:{ctx:a}}}),{c(){t=x(`A completely different solution, using split, map and join instead of using loops. After
			submitting we saw a different way to split the string by using `),$(e.$$.fragment),s=x(`,
			but it seemed "too clever", so we kept using `),$(i.$$.fragment),l=x(".")},l(o){t=y(o,`A completely different solution, using split, map and join instead of using loops. After
			submitting we saw a different way to split the string by using `),p(e.$$.fragment,o),s=y(o,`,
			but it seemed "too clever", so we kept using `),p(i.$$.fragment,o),l=y(o,".")},m(o,f){_(o,t,f),m(e,o,f),_(o,s,f),m(i,o,f),_(o,l,f),j=!0},p(o,f){const w={};f&32&&(w.$$scope={dirty:f,ctx:o}),e.$set(w);const N={};f&32&&(N.$$scope={dirty:f,ctx:o}),i.$set(N)},i(o){j||(g(e.$$.fragment,o),g(i.$$.fragment,o),j=!0)},o(o){c(e.$$.fragment,o),c(i.$$.fragment,o),j=!1},d(o){o&&(u(t),u(s),u(l)),d(e,o),d(i,o)}}}function ft(a){let t,e,s="for-loops",i,l,j,o,f,w,N,S,q,A,B,L,P,E,G,C,T,F="Using split/map/join",z,I,D,U,H;return l=new M({props:{code:a[0]}}),o=new W({props:{$$slots:{default:[ot]},$$scope:{ctx:a}}}),w=new M({props:{code:a[1]}}),S=new W({props:{$$slots:{default:[st]},$$scope:{ctx:a}}}),A=new M({props:{code:a[2]}}),L=new W({props:{$$slots:{default:[rt]},$$scope:{ctx:a}}}),E=new M({props:{code:a[3]}}),I=new M({props:{code:a[4]}}),U=new W({props:{$$slots:{default:[lt]},$$scope:{ctx:a}}}),{c(){t=K("section"),e=K("h3"),e.textContent=s,i=b(),$(l.$$.fragment),j=b(),$(o.$$.fragment),f=b(),$(w.$$.fragment),N=b(),$(S.$$.fragment),q=b(),$(A.$$.fragment),B=b(),$(L.$$.fragment),P=b(),$(E.$$.fragment),G=b(),C=K("section"),T=K("h3"),T.textContent=F,z=b(),$(I.$$.fragment),D=b(),$(U.$$.fragment)},l(n){t=O(n,"SECTION",{});var r=V(t);e=O(r,"H3",{"data-svelte-h":!0}),X(e)!=="svelte-37n5hp"&&(e.textContent=s),i=v(r),p(l.$$.fragment,r),j=v(r),p(o.$$.fragment,r),f=v(r),p(w.$$.fragment,r),N=v(r),p(S.$$.fragment,r),q=v(r),p(A.$$.fragment,r),B=v(r),p(L.$$.fragment,r),P=v(r),p(E.$$.fragment,r),r.forEach(u),G=v(n),C=O(n,"SECTION",{});var k=V(C);T=O(k,"H3",{"data-svelte-h":!0}),X(T)!=="svelte-1w0v83i"&&(T.textContent=F),z=v(k),p(I.$$.fragment,k),D=v(k),p(U.$$.fragment,k),k.forEach(u)},m(n,r){_(n,t,r),h(t,e),h(t,i),m(l,t,null),h(t,j),m(o,t,null),h(t,f),m(w,t,null),h(t,N),m(S,t,null),h(t,q),m(A,t,null),h(t,B),m(L,t,null),h(t,P),m(E,t,null),_(n,G,r),_(n,C,r),h(C,T),h(C,z),m(I,C,null),h(C,D),m(U,C,null),H=!0},p(n,r){const k={};r&32&&(k.$$scope={dirty:r,ctx:n}),o.$set(k);const J={};r&32&&(J.$$scope={dirty:r,ctx:n}),S.$set(J);const Q={};r&32&&(Q.$$scope={dirty:r,ctx:n}),L.$set(Q);const R={};r&32&&(R.$$scope={dirty:r,ctx:n}),U.$set(R)},i(n){H||(g(l.$$.fragment,n),g(o.$$.fragment,n),g(w.$$.fragment,n),g(S.$$.fragment,n),g(A.$$.fragment,n),g(L.$$.fragment,n),g(E.$$.fragment,n),g(I.$$.fragment,n),g(U.$$.fragment,n),H=!0)},o(n){c(l.$$.fragment,n),c(o.$$.fragment,n),c(w.$$.fragment,n),c(S.$$.fragment,n),c(A.$$.fragment,n),c(L.$$.fragment,n),c(E.$$.fragment,n),c(I.$$.fragment,n),c(U.$$.fragment,n),H=!1},d(n){n&&(u(t),u(G),u(C)),d(l),d(o),d(w),d(S),d(A),d(L),d(E),d(I),d(U)}}}function ut(a){let t,e;return t=new nt({props:{id:"5667e8f4e3f572a8f2000039",name:"Mumbling",$$slots:{default:[ft]},$$scope:{ctx:a}}}),{c(){$(t.$$.fragment)},l(s){p(t.$$.fragment,s)},m(s,i){m(t,s,i),e=!0},p(s,[i]){const l={};i&32&&(l.$$scope={dirty:i,ctx:s}),t.$set(l)},i(s){e||(g(t.$$.fragment,s),e=!0)},o(s){c(t.$$.fragment,s),e=!1},d(s){d(t,s)}}}function $t(a){return[`function accum(s) {
  let length = s.length;
  let output = '';
  for (let i = 0; i < length; i++) {
    output += s[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      output += s[i].toLowerCase();
    }
    if (i < length - 1) {
      output += '-';
    }
  }
  return output;
}`,`function accum(s) {
  let length = s.length;
  let fragments = [];
  for (let i = 0; i < length; i++) {
    let output = s[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      output += s[i].toLowerCase();
    }
    fragments.push(output);
  }
  return fragments.join('-');
}`,`function accum(s) {
  let length = s.length;
  let fragments = [];
  for (let i = 0; i < length; i++) {
    let output = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
    fragments.push(output);
  }
  return fragments.join('-');
}`,`function accum(inputString) {
  const fragments = [];
  for (let i = 0; i < inputString.length; i++) {
    const letter = inputString[i];
    const fragment = letter.toUpperCase() + letter.toLowerCase().repeat(i);
    fragments.push(fragment);
  }
  return fragments.join('-');
}`,`function accum(inputString) {
  const letters = inputString.split('');
  const fragments = letters.map((letter, index) => {
    return letter.toUpperCase() + letter.toLowerCase().repeat(index);
  })
  return fragments.join('-');
}`]}class _t extends tt{constructor(t){super(),et(this,t,$t,ut,Z,{})}}export{_t as component};
