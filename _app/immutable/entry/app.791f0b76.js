import{S as B,i as C,s as q,a as U,e as d,c as z,b as w,d as h,f as P,g as E,h as g,j as W,o as F,k as G,l as H,m as J,n as D,p,q as K,r as M,u as Q,v as A,w as I,x as b,y as R,z as O,A as L,B as k}from"../chunks/index.fe3c98df.js";const X="modulepreload",Y=function(_,t){return new URL(_,t).href},T={},f=function(t,i,r){if(!i||i.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(i.map(l=>{if(l=Y(l,r),l in T)return;T[l]=!0;const e=l.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(!!r)for(let a=n.length-1;a>=0;a--){const m=n[a];if(m.href===l&&(!e||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${o}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":X,e||(s.as="script",s.crossOrigin=""),s.href=l,document.head.appendChild(s),e)return new Promise((a,m)=>{s.addEventListener("load",a),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())},rt={};function Z(_){let t,i,r;var n=_[1][0];function l(e){return{props:{data:e[3],form:e[2]}}}return n&&(t=b(n,l(_)),_[12](t)),{c(){t&&R(t.$$.fragment),i=d()},l(e){t&&O(t.$$.fragment,e),i=d()},m(e,o){t&&L(t,e,o),w(e,i,o),r=!0},p(e,o){const u={};if(o&8&&(u.data=e[3]),o&4&&(u.form=e[2]),o&2&&n!==(n=e[1][0])){if(t){A();const s=t;h(s.$$.fragment,1,0,()=>{k(s,1)}),P()}n?(t=b(n,l(e)),e[12](t),R(t.$$.fragment),E(t.$$.fragment,1),L(t,i.parentNode,i)):t=null}else n&&t.$set(u)},i(e){r||(t&&E(t.$$.fragment,e),r=!0)},o(e){t&&h(t.$$.fragment,e),r=!1},d(e){_[12](null),e&&g(i),t&&k(t,e)}}}function $(_){let t,i,r;var n=_[1][0];function l(e){return{props:{data:e[3],$$slots:{default:[x]},$$scope:{ctx:e}}}}return n&&(t=b(n,l(_)),_[11](t)),{c(){t&&R(t.$$.fragment),i=d()},l(e){t&&O(t.$$.fragment,e),i=d()},m(e,o){t&&L(t,e,o),w(e,i,o),r=!0},p(e,o){const u={};if(o&8&&(u.data=e[3]),o&8215&&(u.$$scope={dirty:o,ctx:e}),o&2&&n!==(n=e[1][0])){if(t){A();const s=t;h(s.$$.fragment,1,0,()=>{k(s,1)}),P()}n?(t=b(n,l(e)),e[11](t),R(t.$$.fragment),E(t.$$.fragment,1),L(t,i.parentNode,i)):t=null}else n&&t.$set(u)},i(e){r||(t&&E(t.$$.fragment,e),r=!0)},o(e){t&&h(t.$$.fragment,e),r=!1},d(e){_[11](null),e&&g(i),t&&k(t,e)}}}function x(_){let t,i,r;var n=_[1][1];function l(e){return{props:{data:e[4],form:e[2]}}}return n&&(t=b(n,l(_)),_[10](t)),{c(){t&&R(t.$$.fragment),i=d()},l(e){t&&O(t.$$.fragment,e),i=d()},m(e,o){t&&L(t,e,o),w(e,i,o),r=!0},p(e,o){const u={};if(o&16&&(u.data=e[4]),o&4&&(u.form=e[2]),o&2&&n!==(n=e[1][1])){if(t){A();const s=t;h(s.$$.fragment,1,0,()=>{k(s,1)}),P()}n?(t=b(n,l(e)),e[10](t),R(t.$$.fragment),E(t.$$.fragment,1),L(t,i.parentNode,i)):t=null}else n&&t.$set(u)},i(e){r||(t&&E(t.$$.fragment,e),r=!0)},o(e){t&&h(t.$$.fragment,e),r=!1},d(e){_[10](null),e&&g(i),t&&k(t,e)}}}function V(_){let t,i=_[6]&&y(_);return{c(){t=G("div"),i&&i.c(),this.h()},l(r){t=H(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var n=J(t);i&&i.l(n),n.forEach(g),this.h()},h(){D(t,"id","svelte-announcer"),D(t,"aria-live","assertive"),D(t,"aria-atomic","true"),p(t,"position","absolute"),p(t,"left","0"),p(t,"top","0"),p(t,"clip","rect(0 0 0 0)"),p(t,"clip-path","inset(50%)"),p(t,"overflow","hidden"),p(t,"white-space","nowrap"),p(t,"width","1px"),p(t,"height","1px")},m(r,n){w(r,t,n),i&&i.m(t,null)},p(r,n){r[6]?i?i.p(r,n):(i=y(r),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},d(r){r&&g(t),i&&i.d()}}}function y(_){let t;return{c(){t=K(_[7])},l(i){t=M(i,_[7])},m(i,r){w(i,t,r)},p(i,r){r&128&&Q(t,i[7])},d(i){i&&g(t)}}}function tt(_){let t,i,r,n,l;const e=[$,Z],o=[];function u(a,m){return a[1][1]?0:1}t=u(_),i=o[t]=e[t](_);let s=_[5]&&V(_);return{c(){i.c(),r=U(),s&&s.c(),n=d()},l(a){i.l(a),r=z(a),s&&s.l(a),n=d()},m(a,m){o[t].m(a,m),w(a,r,m),s&&s.m(a,m),w(a,n,m),l=!0},p(a,[m]){let v=t;t=u(a),t===v?o[t].p(a,m):(A(),h(o[v],1,1,()=>{o[v]=null}),P(),i=o[t],i?i.p(a,m):(i=o[t]=e[t](a),i.c()),E(i,1),i.m(r.parentNode,r)),a[5]?s?s.p(a,m):(s=V(a),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i(a){l||(E(i),l=!0)},o(a){h(i),l=!1},d(a){o[t].d(a),a&&g(r),s&&s.d(a),a&&g(n)}}}function et(_,t,i){let{stores:r}=t,{page:n}=t,{constructors:l}=t,{components:e=[]}=t,{form:o}=t,{data_0:u=null}=t,{data_1:s=null}=t;W(r.page.notify);let a=!1,m=!1,v=null;F(()=>{const c=r.page.subscribe(()=>{a&&(i(6,m=!0),i(7,v=document.title||"untitled page"))});return i(5,a=!0),c});function N(c){I[c?"unshift":"push"](()=>{e[1]=c,i(0,e)})}function S(c){I[c?"unshift":"push"](()=>{e[0]=c,i(0,e)})}function j(c){I[c?"unshift":"push"](()=>{e[0]=c,i(0,e)})}return _.$$set=c=>{"stores"in c&&i(8,r=c.stores),"page"in c&&i(9,n=c.page),"constructors"in c&&i(1,l=c.constructors),"components"in c&&i(0,e=c.components),"form"in c&&i(2,o=c.form),"data_0"in c&&i(3,u=c.data_0),"data_1"in c&&i(4,s=c.data_1)},_.$$.update=()=>{_.$$.dirty&768&&r.page.set(n)},[e,l,o,u,s,a,m,v,r,n,N,S,j]}class nt extends B{constructor(t){super(),C(this,t,et,tt,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ot=[()=>f(()=>import("../nodes/0.467adf0f.js"),["../nodes/0.467adf0f.js","../chunks/index.fe3c98df.js","../chunks/paths.6df3ca5b.js","../assets/0.1cea835a.css"],import.meta.url),()=>f(()=>import("../nodes/1.8a661819.js"),["../nodes/1.8a661819.js","../chunks/index.fe3c98df.js","../chunks/singletons.40ec8009.js","../chunks/paths.6df3ca5b.js"],import.meta.url),()=>f(()=>import("../nodes/2.570d6fa8.js"),["../nodes/2.570d6fa8.js","../chunks/index.fe3c98df.js","../chunks/paths.6df3ca5b.js"],import.meta.url),()=>f(()=>import("../nodes/3.ec3501bd.js"),["../nodes/3.ec3501bd.js","../chunks/index.fe3c98df.js","../chunks/paths.6df3ca5b.js","../assets/3.f118227b.css"],import.meta.url),()=>f(()=>import("../nodes/4.6c03a22c.js"),["../nodes/4.6c03a22c.js","../chunks/index.fe3c98df.js","../chunks/paths.6df3ca5b.js","../assets/4.88f07963.css"],import.meta.url),()=>f(()=>import("../nodes/5.b31ef472.js"),["../nodes/5.b31ef472.js","../chunks/index.fe3c98df.js","../chunks/paths.6df3ca5b.js","../assets/5.46d0844c.css"],import.meta.url),()=>f(()=>import("../nodes/6.09f0555b.js"),["../nodes/6.09f0555b.js","../chunks/index.fe3c98df.js"],import.meta.url),()=>f(()=>import("../nodes/7.5cf2f1d8.js"),["../nodes/7.5cf2f1d8.js","../chunks/index.fe3c98df.js"],import.meta.url),()=>f(()=>import("../nodes/8.d0ea27e2.js"),["../nodes/8.d0ea27e2.js","../chunks/index.fe3c98df.js","../chunks/paths.6df3ca5b.js","../assets/8.36b5c39a.css"],import.meta.url),()=>f(()=>import("../nodes/9.9ef58b76.js"),["../nodes/9.9ef58b76.js","../chunks/index.fe3c98df.js","../chunks/paths.6df3ca5b.js","../assets/9.31fad92f.css"],import.meta.url),()=>f(()=>import("../nodes/10.233c0f18.js"),["../nodes/10.233c0f18.js","../chunks/index.fe3c98df.js"],import.meta.url),()=>f(()=>import("../nodes/11.3354c606.js"),["../nodes/11.3354c606.js","../chunks/index.fe3c98df.js","../chunks/paths.6df3ca5b.js","../assets/9.31fad92f.css"],import.meta.url),()=>f(()=>import("../nodes/12.aff3c9a2.js"),["../nodes/12.aff3c9a2.js","../chunks/index.fe3c98df.js"],import.meta.url),()=>f(()=>import("../nodes/13.aff3c9a2.js"),["../nodes/13.aff3c9a2.js","../chunks/index.fe3c98df.js"],import.meta.url),()=>f(()=>import("../nodes/14.c496d705.js"),["../nodes/14.c496d705.js","../chunks/index.fe3c98df.js","../chunks/paths.6df3ca5b.js"],import.meta.url),()=>f(()=>import("../nodes/15.cf269c72.js"),["../nodes/15.cf269c72.js","../chunks/index.fe3c98df.js","../chunks/paths.6df3ca5b.js","../assets/9.31fad92f.css"],import.meta.url),()=>f(()=>import("../nodes/16.95e6b0d6.js"),["../nodes/16.95e6b0d6.js","../chunks/index.fe3c98df.js","../chunks/paths.6df3ca5b.js"],import.meta.url),()=>f(()=>import("../nodes/17.79b2aa9a.js"),["../nodes/17.79b2aa9a.js","../chunks/index.fe3c98df.js","../chunks/paths.6df3ca5b.js"],import.meta.url),()=>f(()=>import("../nodes/18.34e4bb55.js"),["../nodes/18.34e4bb55.js","../chunks/index.fe3c98df.js","../chunks/paths.6df3ca5b.js"],import.meta.url),()=>f(()=>import("../nodes/19.18b0be8e.js"),["../nodes/19.18b0be8e.js","../chunks/index.fe3c98df.js"],import.meta.url),()=>f(()=>import("../nodes/20.1a80082f.js"),["../nodes/20.1a80082f.js","../chunks/index.fe3c98df.js"],import.meta.url)],st=[],_t={"/":[2],"/about":[3],"/about/music":[4],"/about/unity":[5],"/acknowledgements":[6],"/contact":[7],"/gallery":[8],"/notes":[9],"/notes/christoffel":[10],"/pop-science":[11],"/pop-science/aest":[12],"/pop-science/cbh":[13],"/pop-science/symmetron":[14],"/projects":[15],"/projects/aest":[16],"/projects/cbh":[17],"/projects/symmetron":[18],"/publications":[19],"/todo":[20]},at={handleError:({error:_})=>{console.error(_)}};export{_t as dictionary,at as hooks,rt as matchers,ot as nodes,nt as root,st as server_loads};