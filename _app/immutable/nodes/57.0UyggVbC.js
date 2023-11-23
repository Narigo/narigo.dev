import{s as g,a as h,c as _,i as $,d,l as w,m as x}from"../chunks/scheduler.oS2FPi-b.js";import{S as y,i as z,b as i,d as l,m,a as u,t as f,e as p}from"../chunks/index.ICQ99_FX.js";import{N as k}from"../chunks/Narigo.cTuC28Fb.js";import{P as I,a as b}from"../chunks/PuzzlePageLayout.FY16PZR5.js";function P(s){let t;return{c(){t=w(`It's a grid! I first tried it with nested grids: First for the columns, the inner ones for the
		rows. It looks like that renders a bit differently, since I couldn't get it to 100%. Thanks to
		Ariadne for sharing a simpler solution: It made me remove the inner grids, which worked out way
		better!`)},l(n){t=x(n,`It's a grid! I first tried it with nested grids: First for the columns, the inner ones for the
		rows. It looks like that renders a bit differently, since I couldn't get it to 100%. Thanks to
		Ariadne for sharing a simpler solution: It made me remove the inner grids, which worked out way
		better!`)},m(n,e){$(n,t,e)},d(n){n&&d(t)}}}function v(s){let t,n,e,o;return t=new b({props:{title:"Puzzle 67 solution",solution:s[0]}}),e=new k({props:{$$slots:{default:[P]},$$scope:{ctx:s}}}),{c(){i(t.$$.fragment),n=h(),i(e.$$.fragment)},l(r){l(t.$$.fragment,r),n=_(r),l(e.$$.fragment,r)},m(r,a){m(t,r,a),$(r,n,a),m(e,r,a),o=!0},p(r,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:r}),e.$set(c)},i(r){o||(u(t.$$.fragment,r),u(e.$$.fragment,r),o=!0)},o(r){f(t.$$.fragment,r),f(e.$$.fragment,r),o=!1},d(r){r&&d(n),p(t,r),p(e,r)}}}function F(s){let t,n;return t=new I({props:{title:"Video Reel",$$slots:{default:[v]},$$scope:{ctx:s}}}),{c(){i(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,o){m(t,e,o),n=!0},p(e,[o]){const r={};o&2&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){f(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function A(s){return[`<r></r><r></r><r></r><r></r>
<r></r><r></r><r></r><r></r>
<r></r><r></r><r></r><r></r>
<style>
  r {
    display:grid;
    background: #191919;
    height: 110px;
  }
  r:nth-child(even) {
    margin-top:-50px;
  }
  body {
    background: #5DBCF9;
    display: grid;
    grid-template-columns: 45px 140px 140px 45px;
    gap: 40px 10px;
    margin:-30px 0;
  }
</style>
`]}class q extends y{constructor(t){super(),z(this,t,A,F,g,{})}}export{q as component};
