import{s as g,f as u,a as h,g as f,A as _,c as $,i,y as v,d as m}from"../chunks/scheduler.wxh4t93s.js";import{S as x,i as y,b as w,d as C,m as k,a as q,t as S,e as b}from"../chunks/index.qiVYbOcq.js";import{b as L}from"../chunks/paths.MRUJbAuf.js";import{P}from"../chunks/PageLayout.0y2_5qtp.js";function H(p){let t,s="Slides for my talks",e,n,l=`I usually share the slide deck to my talks for people who attended the
		meetup/conference/whatever. Reach out if you have questions!`,c,o,d=`<li><a href="${L}/talks/static-pages-with-dynamic-content">Static pages with &quot;dynamic&quot; content</a>
			-
			<a href="https://www.meetup.com/de-DE/frankenjs/events/289645924/" rel="external">FrankenJS Meetup 2022-12-07</a></li>`;return{c(){t=u("h2"),t.textContent=s,e=h(),n=u("p"),n.textContent=l,c=h(),o=u("ul"),o.innerHTML=d},l(a){t=f(a,"H2",{"data-svelte-h":!0}),_(t)!=="svelte-q0sm5c"&&(t.textContent=s),e=$(a),n=f(a,"P",{"data-svelte-h":!0}),_(n)!=="svelte-1g8b5gq"&&(n.textContent=l),c=$(a),o=f(a,"UL",{"data-svelte-h":!0}),_(o)!=="svelte-1drpm6e"&&(o.innerHTML=d)},m(a,r){i(a,t,r),i(a,e,r),i(a,n,r),i(a,c,r),i(a,o,r)},p:v,d(a){a&&(m(t),m(e),m(n),m(c),m(o))}}}function M(p){let t,s;return t=new P({props:{$$slots:{default:[H]},$$scope:{ctx:p}}}),{c(){w(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,n){k(t,e,n),s=!0},p(e,[n]){const l={};n&1&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){s||(q(t.$$.fragment,e),s=!0)},o(e){S(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}class E extends x{constructor(t){super(),y(this,t,null,M,g,{})}}export{E as component};