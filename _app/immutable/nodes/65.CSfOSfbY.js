import{s as P,b,j as k,k as m,i as c,t as F,h as y}from"../chunks/scheduler.Bz19wuGf.js";import{S as I,i as E,c as p,b as u,m as d,t as f,a as $,d as g}from"../chunks/index.D0WKZCG1.js";import{N as z}from"../chunks/Narigo.O5y70Dyt.js";import{P as C,a as v}from"../chunks/PuzzlePageLayout.DOpdV4b9.js";function A(r){let e;return{c(){e=F(`I'm not sure whether webkit-box-reflect helps too much here. What I don't like is having the
		mouth part. I'd like to know how this can be calculated instead of having to try and test lots
		of values until something works for 100%.`)},l(n){e=y(n,`I'm not sure whether webkit-box-reflect helps too much here. What I don't like is having the
		mouth part. I'd like to know how this can be calculated instead of having to try and test lots
		of values until something works for 100%.`)},m(n,o){m(n,e,o)},d(n){n&&c(e)}}}function N(r){let e;return{c(){e=F("Ok, using another radial gradient makes sense instead of adding another element.")},l(n){e=y(n,"Ok, using another radial gradient makes sense instead of adding another element.")},m(n,o){m(n,e,o)},d(n){n&&c(e)}}}function O(r){let e,n,o,s,i,h,l,x;return e=new v({props:{title:"Puzzle 70 solution",solution:r[0]}}),o=new z({props:{$$slots:{default:[A]},$$scope:{ctx:r}}}),i=new v({props:{title:"Puzzle 70 solution",solution:r[1]}}),l=new z({props:{$$slots:{default:[N]},$$scope:{ctx:r}}}),{c(){p(e.$$.fragment),n=b(),p(o.$$.fragment),s=b(),p(i.$$.fragment),h=b(),p(l.$$.fragment)},l(t){u(e.$$.fragment,t),n=k(t),u(o.$$.fragment,t),s=k(t),u(i.$$.fragment,t),h=k(t),u(l.$$.fragment,t)},m(t,a){d(e,t,a),m(t,n,a),d(o,t,a),m(t,s,a),d(i,t,a),m(t,h,a),d(l,t,a),x=!0},p(t,a){const _={};a&4&&(_.$$scope={dirty:a,ctx:t}),o.$set(_);const w={};a&4&&(w.$$scope={dirty:a,ctx:t}),l.$set(w)},i(t){x||(f(e.$$.fragment,t),f(o.$$.fragment,t),f(i.$$.fragment,t),f(l.$$.fragment,t),x=!0)},o(t){$(e.$$.fragment,t),$(o.$$.fragment,t),$(i.$$.fragment,t),$(l.$$.fragment,t),x=!1},d(t){t&&(c(n),c(s),c(h)),g(e,t),g(o,t),g(i,t),g(l,t)}}}function S(r){let e,n;return e=new C({props:{title:"Froggy",$$slots:{default:[O]},$$scope:{ctx:r}}}),{c(){p(e.$$.fragment)},l(o){u(e.$$.fragment,o)},m(o,s){d(e,o,s),n=!0},p(o,[s]){const i={};s&4&&(i.$$scope={dirty:s,ctx:o}),e.$set(i)},i(o){n||(f(e.$$.fragment,o),n=!0)},o(o){$(e.$$.fragment,o),n=!1},d(o){g(e,o)}}}function W(r){return[`<div><l></l><n></n></div>
<style>
  body {
    background: #293462;
    display: grid;
    place-items:center
  }
  div {
    margin-left: -75px;
    margin-top: 20px;
    width: 75px;
    height: 100px;
    border-radius: 50px 0 0 50px;
    background: radial-gradient(circle at 100% -125px, #FE5F55 0 195px, #A64942 0);
    position:relative;
    -webkit-box-reflect: right;
  }
  l {
    width: 30px;
    height: 30px;
    background:radial-gradient(#293462 5px, #FFF1C1 0);
    position:absolute;
    top: -25px;
    left: 15px;
    border: 10px solid #FE5F55;
    border-radius: 50%;
  }
  n {
    width:10px;
    height:10px;
    background:#293462;
    position:absolute;
    border-radius: 50%;
    top: 50px;
    left: 60px;
  }
</style>`,`<div><l></l></div>
<style>
  body {
    background: #293462;
    display: grid;
    place-items:center
  }
  div {
    margin-left: -75px;
    margin-top: 20px;
    width: 75px;
    height: 100px;
    border-radius: 50px 0 0 50px;
    background: radial-gradient(circle at 65px 55px, #293462 0 5px, #0000 0),
      radial-gradient(circle at 100% -125px, #FE5F55 0 195px, #A64942 0);
    position:relative;
    -webkit-box-reflect: right;
  }
  l {
    width: 30px;
    height: 30px;
    background:radial-gradient(#293462 5px, #FFF1C1 0);
    position:absolute;
    top: -25px;
    left: 15px;
    border: 10px solid #FE5F55;
    border-radius: 50%;
  }
</style>`]}class D extends I{constructor(e){super(),E(this,e,W,S,P,{})}}export{D as component};
