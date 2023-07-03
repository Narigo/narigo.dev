import{S as Y,i as Z,s as x,y as h,z as _,A as w,g as b,d as C,B as k,k as T,q as v,a as g,l as G,m as H,r as j,h as l,c as d,b as m,G as u,H as tt}from"../chunks/index.b1660a48.js";import{C as D}from"../chunks/CodeBlock.5c44a274.js";import{N as z}from"../chunks/Narigo.1c5e5246.js";import{K as et}from"../chunks/KataLayout.743872a2.js";function nt(i){let t;return{c(){t=v(`The very first solution we came up with, thanks to @komatian to guide me. We improved the
			solution a couple of times:`)},l(e){t=j(e,`The very first solution we came up with, thanks to @komatian to guide me. We improved the
			solution a couple of times:`)},m(e,s){m(e,t,s)},d(e){e&&l(t)}}}function ot(i){let t;return{c(){t=v("@Gustaf even made the inner for-loop disappear with String.prototype.repeat:")},l(e){t=j(e,"@Gustaf even made the inner for-loop disappear with String.prototype.repeat:")},m(e,s){m(e,t,s)},d(e){e&&l(t)}}}function st(i){let t;return{c(){t=v("In the end, we came up with a bit more readable code:")},l(e){t=j(e,"In the end, we came up with a bit more readable code:")},m(e,s){m(e,t,s)},d(e){e&&l(t)}}}function rt(i){let t,e,s,p,a,L,$;return{c(){t=v(`A completely different solution, using split, map and join instead of using loops. After
			submitting we saw a different way to split the string by using `),e=T("code"),s=v("[...inputString]"),p=v(`,
			but it seemed "too clever", so we kept using `),a=T("code"),L=v("split('')"),$=v(".")},l(r){t=j(r,`A completely different solution, using split, map and join instead of using loops. After
			submitting we saw a different way to split the string by using `),e=G(r,"CODE",{});var f=H(e);s=j(f,"[...inputString]"),f.forEach(l),p=j(r,`,
			but it seemed "too clever", so we kept using `),a=G(r,"CODE",{});var O=H(a);L=j(O,"split('')"),O.forEach(l),$=j(r,".")},m(r,f){m(r,t,f),m(r,e,f),u(e,s),m(r,p,f),m(r,a,f),u(a,L),m(r,$,f)},p:tt,d(r){r&&l(t),r&&l(e),r&&l(p),r&&l(a),r&&l($)}}}function at(i){let t,e,s,p,a,L,$,r,f,O,E,P,A,F,y,J,I,K,c,M,Q,R,N,V,U,W;return a=new D({props:{code:i[0]}}),$=new z({props:{$$slots:{default:[nt]},$$scope:{ctx:i}}}),f=new D({props:{code:i[1]}}),E=new z({props:{$$slots:{default:[ot]},$$scope:{ctx:i}}}),A=new D({props:{code:i[2]}}),y=new z({props:{$$slots:{default:[st]},$$scope:{ctx:i}}}),I=new D({props:{code:i[3]}}),N=new D({props:{code:i[4]}}),U=new z({props:{$$slots:{default:[rt]},$$scope:{ctx:i}}}),{c(){t=T("section"),e=T("h3"),s=v("for-loops"),p=g(),h(a.$$.fragment),L=g(),h($.$$.fragment),r=g(),h(f.$$.fragment),O=g(),h(E.$$.fragment),P=g(),h(A.$$.fragment),F=g(),h(y.$$.fragment),J=g(),h(I.$$.fragment),K=g(),c=T("section"),M=T("h3"),Q=v("Using split/map/join"),R=g(),h(N.$$.fragment),V=g(),h(U.$$.fragment)},l(n){t=G(n,"SECTION",{});var o=H(t);e=G(o,"H3",{});var q=H(e);s=j(q,"for-loops"),q.forEach(l),p=d(o),_(a.$$.fragment,o),L=d(o),_($.$$.fragment,o),r=d(o),_(f.$$.fragment,o),O=d(o),_(E.$$.fragment,o),P=d(o),_(A.$$.fragment,o),F=d(o),_(y.$$.fragment,o),J=d(o),_(I.$$.fragment,o),o.forEach(l),K=d(n),c=G(n,"SECTION",{});var S=H(c);M=G(S,"H3",{});var B=H(M);Q=j(B,"Using split/map/join"),B.forEach(l),R=d(S),_(N.$$.fragment,S),V=d(S),_(U.$$.fragment,S),S.forEach(l)},m(n,o){m(n,t,o),u(t,e),u(e,s),u(t,p),w(a,t,null),u(t,L),w($,t,null),u(t,r),w(f,t,null),u(t,O),w(E,t,null),u(t,P),w(A,t,null),u(t,F),w(y,t,null),u(t,J),w(I,t,null),m(n,K,o),m(n,c,o),u(c,M),u(M,Q),u(c,R),w(N,c,null),u(c,V),w(U,c,null),W=!0},p(n,o){const q={};o&32&&(q.$$scope={dirty:o,ctx:n}),$.$set(q);const S={};o&32&&(S.$$scope={dirty:o,ctx:n}),E.$set(S);const B={};o&32&&(B.$$scope={dirty:o,ctx:n}),y.$set(B);const X={};o&32&&(X.$$scope={dirty:o,ctx:n}),U.$set(X)},i(n){W||(b(a.$$.fragment,n),b($.$$.fragment,n),b(f.$$.fragment,n),b(E.$$.fragment,n),b(A.$$.fragment,n),b(y.$$.fragment,n),b(I.$$.fragment,n),b(N.$$.fragment,n),b(U.$$.fragment,n),W=!0)},o(n){C(a.$$.fragment,n),C($.$$.fragment,n),C(f.$$.fragment,n),C(E.$$.fragment,n),C(A.$$.fragment,n),C(y.$$.fragment,n),C(I.$$.fragment,n),C(N.$$.fragment,n),C(U.$$.fragment,n),W=!1},d(n){n&&l(t),k(a),k($),k(f),k(E),k(A),k(y),k(I),n&&l(K),n&&l(c),k(N),k(U)}}}function it(i){let t,e;return t=new et({props:{id:"5667e8f4e3f572a8f2000039",name:"Mumbling",$$slots:{default:[at]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment)},l(s){_(t.$$.fragment,s)},m(s,p){w(t,s,p),e=!0},p(s,[p]){const a={};p&32&&(a.$$scope={dirty:p,ctx:s}),t.$set(a)},i(s){e||(b(t.$$.fragment,s),e=!0)},o(s){C(t.$$.fragment,s),e=!1},d(s){k(t,s)}}}function lt(i){return[`function accum(s) {
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
}`]}class mt extends Y{constructor(t){super(),Z(this,t,lt,it,x,{})}}export{mt as component};
