import{S as O,i as C,s as T,y as h,z as c,A as m,g as d,d as $,B as p,a as P,c as I,b as f,h as l,k as w,q as g,l as y,m as b,r as _,G as k,H as A}from"../chunks/index.b1660a48.js";import{N as x}from"../chunks/Narigo.1c5e5246.js";import{K as S,a as v}from"../chunks/KataLayout.e62c7d39.js";function G(r){let e,a,t,o,n;return{c(){e=w("p"),a=g(`I had to leave shortly after finishing mine. They did another challenge and had a couple
				more solutions. My version uses default arguments and recursion to get to the result without
				having to write a second helper function.`),t=P(),o=w("p"),n=g(`The initial idea brought up by Gustaf in the screenshare was to add the same string to the
				string again. Then, you can take a slice of the string's length starting from index 1 up to
				the length of the string. While it takes a bit more memory, I'm still wondering which
				approach would be faster for the computer to work with.`)},l(s){e=y(s,"P",{});var i=b(e);a=_(i,`I had to leave shortly after finishing mine. They did another challenge and had a couple
				more solutions. My version uses default arguments and recursion to get to the result without
				having to write a second helper function.`),i.forEach(l),t=I(s),o=y(s,"P",{});var u=b(o);n=_(u,`The initial idea brought up by Gustaf in the screenshare was to add the same string to the
				string again. Then, you can take a slice of the string's length starting from index 1 up to
				the length of the string. While it takes a bit more memory, I'm still wondering which
				approach would be faster for the computer to work with.`),u.forEach(l)},m(s,i){f(s,e,i),k(e,a),f(s,t,i),f(s,o,i),k(o,n)},p:A,d(s){s&&l(e),s&&l(t),s&&l(o)}}}function K(r){let e,a;return e=new x({props:{$$slots:{default:[G]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,o){m(e,t,o),a=!0},p(t,o){const n={};o&4&&(n.$$scope={dirty:o,ctx:t}),e.$set(n)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){$(e.$$.fragment,t),a=!1},d(t){p(e,t)}}}function q(r){let e;return{c(){e=g(`This is the second challenge that has been done. I didn't create a solution during the event
			as I had to leave early. From what I could see in the chat, my solution differs in the way of
			the for loops: If you switch them (count backwards in the outer one), it's possible to return
			the outer one as the length of the palindrome.`)},l(a){e=_(a,`This is the second challenge that has been done. I didn't create a solution during the event
			as I had to leave early. From what I could see in the chat, my solution differs in the way of
			the for loops: If you switch them (count backwards in the outer one), it's possible to return
			the outer one as the length of the palindrome.`)},m(a,t){f(a,e,t)},d(a){a&&l(e)}}}function E(r){let e,a;return e=new x({props:{$$slots:{default:[q]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,o){m(e,t,o),a=!0},p(t,o){const n={};o&4&&(n.$$scope={dirty:o,ctx:t}),e.$set(n)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){$(e.$$.fragment,t),a=!1},d(t){p(e,t)}}}function F(r){let e,a,t,o;return e=new v({props:{id:"586560a639c5ab3a260000f3",name:"All Star Code Challenge #15",solution:r[0],$$slots:{default:[K]},$$scope:{ctx:r}}}),t=new v({props:{id:"54bb6f887e5a80180900046b",name:"Longest Palindrome",solution:r[1],$$slots:{default:[E]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment),a=P(),h(t.$$.fragment)},l(n){c(e.$$.fragment,n),a=I(n),c(t.$$.fragment,n)},m(n,s){m(e,n,s),f(n,a,s),m(t,n,s),o=!0},p(n,s){const i={};s&4&&(i.$$scope={dirty:s,ctx:n}),e.$set(i);const u={};s&4&&(u.$$scope={dirty:s,ctx:n}),t.$set(u)},i(n){o||(d(e.$$.fragment,n),d(t.$$.fragment,n),o=!0)},o(n){$(e.$$.fragment,n),$(t.$$.fragment,n),o=!1},d(n){p(e,n),n&&l(a),p(t,n)}}}function L(r){let e,a;return e=new S({props:{$$slots:{default:[F]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,o){m(e,t,o),a=!0},p(t,[o]){const n={};o&4&&(n.$$scope={dirty:o,ctx:t}),e.$set(n)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){$(e.$$.fragment,t),a=!1},d(t){p(e,t)}}}function M(r){return[`function rotate(str, acc = [], at = 0) {
  if (str.length <= at) {
    return acc;
  }
  const nextSlice = str.slice(at + 1) + str.slice(0, at + 1);
  return rotate(str, [...acc, nextSlice], at + 1);
}`,`function longestPalindrome(s){
  let maxAmountOfChars = 0;
  for (let start = 0; start < (s.length - maxAmountOfChars); start++) {
    for (let endOfPalindrome = s.length; (start + maxAmountOfChars) < endOfPalindrome; endOfPalindrome--) {
      if (isPalindrome(s.slice(start, endOfPalindrome))) {
        maxAmountOfChars = endOfPalindrome - start;
      }
    }
  }
  return maxAmountOfChars;
}

function isPalindrome(s) {
  return s.split("").reverse().join("") === s;
}`]}class z extends O{constructor(e){super(),C(this,e,M,L,T,{})}}export{z as component};
