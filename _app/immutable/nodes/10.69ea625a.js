import{s as Y,f as I,a as c,g as N,h as X,A as K,c as d,d as p,i as $,x as m,l as O,m as T,y as Z}from"../chunks/scheduler.52b7490a.js";import{S as tt,i as et,b as h,d as _,m as w,a as C,t as v,e as b}from"../chunks/index.644eb738.js";import{C as M}from"../chunks/CodeBlock.b7e19fb6.js";import{N as H}from"../chunks/Narigo.e24b860c.js";import{K as nt}from"../chunks/KataLayout.f3a2f9f1.js";function ot(a){let t;return{c(){t=O(`The very first solution we came up with, thanks to @komatian to guide me. We improved the
			solution a couple of times:`)},l(e){t=T(e,`The very first solution we came up with, thanks to @komatian to guide me. We improved the
			solution a couple of times:`)},m(e,s){$(e,t,s)},d(e){e&&p(t)}}}function st(a){let t;return{c(){t=O("@Gustaf even made the inner for-loop disappear with String.prototype.repeat:")},l(e){t=T(e,"@Gustaf even made the inner for-loop disappear with String.prototype.repeat:")},m(e,s){$(e,t,s)},d(e){e&&p(t)}}}function rt(a){let t;return{c(){t=O("In the end, we came up with a bit more readable code:")},l(e){t=T(e,"In the end, we came up with a bit more readable code:")},m(e,s){$(e,t,s)},d(e){e&&p(t)}}}function at(a){let t,e,s="[...inputString]",l,r,U="split('')",u;return{c(){t=O(`A completely different solution, using split, map and join instead of using loops. After
			submitting we saw a different way to split the string by using `),e=I("code"),e.textContent=s,l=O(`,
			but it seemed "too clever", so we kept using `),r=I("code"),r.textContent=U,u=O(".")},l(i){t=T(i,`A completely different solution, using split, map and join instead of using loops. After
			submitting we saw a different way to split the string by using `),e=N(i,"CODE",{"data-svelte-h":!0}),K(e)!=="svelte-76r6p1"&&(e.textContent=s),l=T(i,`,
			but it seemed "too clever", so we kept using `),r=N(i,"CODE",{"data-svelte-h":!0}),K(r)!=="svelte-p7sv55"&&(r.textContent=U),u=T(i,".")},m(i,f){$(i,t,f),$(i,e,f),$(i,l,f),$(i,r,f),$(i,u,f)},p:Z,d(i){i&&(p(t),p(e),p(l),p(r),p(u))}}}function it(a){let t,e,s="for-loops",l,r,U,u,i,f,W,j,q,y,B,x,P,E,D,g,A,J="Using split/map/join",z,L,F,S,G;return r=new M({props:{code:a[0]}}),u=new H({props:{$$slots:{default:[ot]},$$scope:{ctx:a}}}),f=new M({props:{code:a[1]}}),j=new H({props:{$$slots:{default:[st]},$$scope:{ctx:a}}}),y=new M({props:{code:a[2]}}),x=new H({props:{$$slots:{default:[rt]},$$scope:{ctx:a}}}),E=new M({props:{code:a[3]}}),L=new M({props:{code:a[4]}}),S=new H({props:{$$slots:{default:[at]},$$scope:{ctx:a}}}),{c(){t=I("section"),e=I("h3"),e.textContent=s,l=c(),h(r.$$.fragment),U=c(),h(u.$$.fragment),i=c(),h(f.$$.fragment),W=c(),h(j.$$.fragment),q=c(),h(y.$$.fragment),B=c(),h(x.$$.fragment),P=c(),h(E.$$.fragment),D=c(),g=I("section"),A=I("h3"),A.textContent=J,z=c(),h(L.$$.fragment),F=c(),h(S.$$.fragment)},l(n){t=N(n,"SECTION",{});var o=X(t);e=N(o,"H3",{"data-svelte-h":!0}),K(e)!=="svelte-37n5hp"&&(e.textContent=s),l=d(o),_(r.$$.fragment,o),U=d(o),_(u.$$.fragment,o),i=d(o),_(f.$$.fragment,o),W=d(o),_(j.$$.fragment,o),q=d(o),_(y.$$.fragment,o),B=d(o),_(x.$$.fragment,o),P=d(o),_(E.$$.fragment,o),o.forEach(p),D=d(n),g=N(n,"SECTION",{});var k=X(g);A=N(k,"H3",{"data-svelte-h":!0}),K(A)!=="svelte-1w0v83i"&&(A.textContent=J),z=d(k),_(L.$$.fragment,k),F=d(k),_(S.$$.fragment,k),k.forEach(p)},m(n,o){$(n,t,o),m(t,e),m(t,l),w(r,t,null),m(t,U),w(u,t,null),m(t,i),w(f,t,null),m(t,W),w(j,t,null),m(t,q),w(y,t,null),m(t,B),w(x,t,null),m(t,P),w(E,t,null),$(n,D,o),$(n,g,o),m(g,A),m(g,z),w(L,g,null),m(g,F),w(S,g,null),G=!0},p(n,o){const k={};o&32&&(k.$$scope={dirty:o,ctx:n}),u.$set(k);const Q={};o&32&&(Q.$$scope={dirty:o,ctx:n}),j.$set(Q);const R={};o&32&&(R.$$scope={dirty:o,ctx:n}),x.$set(R);const V={};o&32&&(V.$$scope={dirty:o,ctx:n}),S.$set(V)},i(n){G||(C(r.$$.fragment,n),C(u.$$.fragment,n),C(f.$$.fragment,n),C(j.$$.fragment,n),C(y.$$.fragment,n),C(x.$$.fragment,n),C(E.$$.fragment,n),C(L.$$.fragment,n),C(S.$$.fragment,n),G=!0)},o(n){v(r.$$.fragment,n),v(u.$$.fragment,n),v(f.$$.fragment,n),v(j.$$.fragment,n),v(y.$$.fragment,n),v(x.$$.fragment,n),v(E.$$.fragment,n),v(L.$$.fragment,n),v(S.$$.fragment,n),G=!1},d(n){n&&(p(t),p(D),p(g)),b(r),b(u),b(f),b(j),b(y),b(x),b(E),b(L),b(S)}}}function lt(a){let t,e;return t=new nt({props:{id:"5667e8f4e3f572a8f2000039",name:"Mumbling",$$slots:{default:[it]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment)},l(s){_(t.$$.fragment,s)},m(s,l){w(t,s,l),e=!0},p(s,[l]){const r={};l&32&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){e||(C(t.$$.fragment,s),e=!0)},o(s){v(t.$$.fragment,s),e=!1},d(s){b(t,s)}}}function ut(a){return[`function accum(s) {
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
}`]}class ct extends tt{constructor(t){super(),et(this,t,ut,lt,Y,{})}}export{ct as component};
