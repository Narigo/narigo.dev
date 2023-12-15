import{s as d,a as h,c as b,i as $,d as g,l as x,m as _}from"../chunks/scheduler.FpTo3f1Q.js";import{S as y,i as w,b as i,d as l,m as p,a as u,t as c,e as f}from"../chunks/index.Fxw16eHx.js";import{N as z}from"../chunks/Narigo.I64xF0yX.js";import{P as k,a as P}from"../chunks/PuzzlePageLayout.pTuDgv0x.js";function v(a){let t;return{c(){t=x(`None of us got it to 100% (yet). The solution above is only 99.9% as well. Getting the inner
		circle parts took a while and trying to use scale couldn't work thanks to the border. I lost my
		best solution somewhere while trying out different approaches.`)},l(n){t=_(n,`None of us got it to 100% (yet). The solution above is only 99.9% as well. Getting the inner
		circle parts took a while and trying to use scale couldn't work thanks to the border. I lost my
		best solution somewhere while trying out different approaches.`)},m(n,e){$(n,t,e)},d(n){n&&g(t)}}}function N(a){let t,n,e,r;return t=new P({props:{title:"Puzzle 59 solution",solution:a[0]}}),e=new z({props:{$$slots:{default:[v]},$$scope:{ctx:a}}}),{c(){i(t.$$.fragment),n=h(),i(e.$$.fragment)},l(o){l(t.$$.fragment,o),n=b(o),l(e.$$.fragment,o)},m(o,s){p(t,o,s),$(o,n,s),p(e,o,s),r=!0},p(o,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:o}),e.$set(m)},i(o){r||(u(t.$$.fragment,o),u(e.$$.fragment,o),r=!0)},o(o){c(t.$$.fragment,o),c(e.$$.fragment,o),r=!1},d(o){o&&g(n),f(t,o),f(e,o)}}}function G(a){let t,n;return t=new k({props:{title:"Earth",$$slots:{default:[N]},$$scope:{ctx:a}}}),{c(){i(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,r){p(t,e,r),n=!0},p(e,[r]){const o={};r&2&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){f(t,e)}}}function I(a){return[`<p><style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  p,p:after {
    position:relative;
    height: 170px;
    width: 170px;
    background: #4f77ff;
  }
  p,p:before {
    box-sizing: border-box;
    border-radius: 50%;
    border: 10px solid #191919;
  }
  p:before {
    position: absolute;
    content: '';
    border-radius: 50%;
    top: -30px;
    left: -90px;
    width: 210px;
    height: 210px;
    -webkit-box-reflect: right -90px;
  }
  p:after {
    position: absolute;
    content: '';
    background:
      repeating-linear-gradient(#0000 0 30px, #191919 0 40px),
      linear-gradient(90deg, #0000 0 70px, #191919 0 80px, #0000 0)
      #0000;
  }
</style>
`]}class E extends y{constructor(t){super(),w(this,t,I,G,d,{})}}export{E as component};
