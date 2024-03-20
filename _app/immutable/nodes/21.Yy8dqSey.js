import{s as P,b as v,j as x,k as l,i as f,e as g,d as _,p as w,n as k,t as y,h as I}from"../chunks/scheduler.Bz19wuGf.js";import{S as O,i as A,c as u,b as c,m,t as h,a as $,d}from"../chunks/index.D0WKZCG1.js";import{N as C}from"../chunks/Narigo.KOWV6Nbp.js";import{K as S,a as b}from"../chunks/KataLayout.B3OMvUsN.js";function T(r){let t,a=`I had to leave shortly after finishing mine. They did another challenge and had a couple
				more solutions. My version uses default arguments and recursion to get to the result without
				having to write a second helper function.`,e,o,n=`The initial idea brought up by Gustaf in the screenshare was to add the same string to the
				string again. Then, you can take a slice of the string's length starting from index 1 up to
				the length of the string. While it takes a bit more memory, I'm still wondering which
				approach would be faster for the computer to work with.`;return{c(){t=g("p"),t.textContent=a,e=v(),o=g("p"),o.textContent=n},l(s){t=_(s,"P",{"data-svelte-h":!0}),w(t)!=="svelte-zvklud"&&(t.textContent=a),e=x(s),o=_(s,"P",{"data-svelte-h":!0}),w(o)!=="svelte-v2jt3m"&&(o.textContent=n)},m(s,i){l(s,t,i),l(s,e,i),l(s,o,i)},p:k,d(s){s&&(f(t),f(e),f(o))}}}function j(r){let t,a;return t=new C({props:{$$slots:{default:[T]},$$scope:{ctx:r}}}),{c(){u(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,o){m(t,e,o),a=!0},p(e,o){const n={};o&4&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){$(t.$$.fragment,e),a=!1},d(e){d(t,e)}}}function K(r){let t;return{c(){t=y(`This is the second challenge that has been done. I didn't create a solution during the event
			as I had to leave early. From what I could see in the chat, my solution differs in the way of
			the for loops: If you switch them (count backwards in the outer one), it's possible to return
			the outer one as the length of the palindrome.`)},l(a){t=I(a,`This is the second challenge that has been done. I didn't create a solution during the event
			as I had to leave early. From what I could see in the chat, my solution differs in the way of
			the for loops: If you switch them (count backwards in the outer one), it's possible to return
			the outer one as the length of the palindrome.`)},m(a,e){l(a,t,e)},d(a){a&&f(t)}}}function F(r){let t,a;return t=new C({props:{$$slots:{default:[K]},$$scope:{ctx:r}}}),{c(){u(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,o){m(t,e,o),a=!0},p(e,o){const n={};o&4&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){$(t.$$.fragment,e),a=!1},d(e){d(t,e)}}}function L(r){let t,a,e,o;return t=new b({props:{id:"586560a639c5ab3a260000f3",name:"All Star Code Challenge #15",solution:r[0],$$slots:{default:[j]},$$scope:{ctx:r}}}),e=new b({props:{id:"54bb6f887e5a80180900046b",name:"Longest Palindrome",solution:r[1],$$slots:{default:[F]},$$scope:{ctx:r}}}),{c(){u(t.$$.fragment),a=v(),u(e.$$.fragment)},l(n){c(t.$$.fragment,n),a=x(n),c(e.$$.fragment,n)},m(n,s){m(t,n,s),l(n,a,s),m(e,n,s),o=!0},p(n,s){const i={};s&4&&(i.$$scope={dirty:s,ctx:n}),t.$set(i);const p={};s&4&&(p.$$scope={dirty:s,ctx:n}),e.$set(p)},i(n){o||(h(t.$$.fragment,n),h(e.$$.fragment,n),o=!0)},o(n){$(t.$$.fragment,n),$(e.$$.fragment,n),o=!1},d(n){n&&f(a),d(t,n),d(e,n)}}}function N(r){let t,a;return t=new S({props:{$$slots:{default:[L]},$$scope:{ctx:r}}}),{c(){u(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,o){m(t,e,o),a=!0},p(e,[o]){const n={};o&4&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){$(t.$$.fragment,e),a=!1},d(e){d(t,e)}}}function q(r){return[`function rotate(str, acc = [], at = 0) {
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
}`]}class B extends O{constructor(t){super(),A(this,t,q,N,P,{})}}export{B as component};
