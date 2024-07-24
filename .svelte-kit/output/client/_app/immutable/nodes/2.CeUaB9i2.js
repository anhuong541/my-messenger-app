import{s as ue,e as d,a as x,c as m,b as k,w as j,g as y,f as g,p as r,i as K,h as u,x as R,y as q,z as $e,k as pe,l as he,t as ge,d as _e}from"../chunks/scheduler.CC9PlWuQ.js";import{S as ce,i as fe,b as W,d as F,m as Y,a as S,t as A,e as z,g as ve,c as be}from"../chunks/index.BRIbHbnF.js";import{I as ae,u as de,S as we,a as xe}from"../chunks/Icon.wyHZoVaf.js";import{s as ye,c as Ce,a as ke,u as Ee}from"../chunks/firebase.CnE4wrMq.js";import{component as Ie}from"./0.DAsufA68.js";import{g as Le}from"../chunks/entry.DKSIAX38.js";const ie=""+new URL("../assets/login-hero.9c9QU9ND.webp",import.meta.url).href;function Te(c){let e,l,t,a="Welcome back",n,s,o,i,f,p,_,M,w,$,X,E,Z,C,v,te=`<input type="checkbox" name="rememberme" id="remember-me" class="w-4 h-4 accent-primaryColor-500"/>
            Remember Me`,V,T,Q="Don't have an account?",P,B,le="Sign in",D,O,se=`<img src="${ie}" srcset="${ie}" alt="Hero Login Image" class="object-contain rounded-2xl my-auto"/>`,U,re,ee;return _=new ae({props:{icon:"solar:user-linear",width:"18",height:"18",style:"color: black",class:"absolute right-3 top-[50%] -translate-y-1/2"}}),E=new ae({props:{icon:"fluent-mdl2:password-field",width:"18",height:"18",style:"color: black",class:"absolute right-3 top-[50%] -translate-y-1/2"}}),{c(){e=d("div"),l=d("div"),t=d("h1"),t.textContent=a,n=x(),s=d("form"),o=d("div"),i=d("label"),f=d("input"),p=x(),W(_.$$.fragment),M=x(),w=d("label"),$=d("input"),X=x(),W(E.$$.fragment),Z=x(),C=d("div"),v=d("label"),v.innerHTML=te,V=x(),T=d("div"),T.textContent=Q,P=x(),B=d("button"),B.textContent=le,D=x(),O=d("div"),O.innerHTML=se,this.h()},l(b){e=m(b,"DIV",{class:!0});var N=k(e);l=m(N,"DIV",{class:!0});var h=k(l);t=m(h,"H1",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-16560wh"&&(t.textContent=a),n=y(h),s=m(h,"FORM",{action:!0,class:!0});var I=k(s);o=m(I,"DIV",{class:!0});var H=k(o);i=m(H,"LABEL",{class:!0,for:!0});var G=k(i);f=m(G,"INPUT",{type:!0,class:!0,placeholder:!0,id:!0}),p=y(G),F(_.$$.fragment,G),G.forEach(g),M=y(H),w=m(H,"LABEL",{class:!0,for:!0});var L=k(w);$=m(L,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),X=y(L),F(E.$$.fragment,L),L.forEach(g),Z=y(H),C=m(H,"DIV",{class:!0});var J=k(C);v=m(J,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),j(v)!=="svelte-aei0qq"&&(v.innerHTML=te),V=y(J),T=m(J,"DIV",{class:!0,"data-svelte-h":!0}),j(T)!=="svelte-l1ys5f"&&(T.textContent=Q),J.forEach(g),H.forEach(g),P=y(I),B=m(I,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),j(B)!=="svelte-1hudp5k"&&(B.textContent=le),I.forEach(g),h.forEach(g),D=y(N),O=m(N,"DIV",{class:!0,"data-svelte-h":!0}),j(O)!=="svelte-18d69tr"&&(O.innerHTML=se),N.forEach(g),this.h()},h(){r(t,"class","font-semibold text-4xl mb-8"),r(f,"type","text"),r(f,"class","p-3 rounded-md text-sm w-full"),r(f,"placeholder","Username"),r(f,"id","username"),r(i,"class","relative flex"),r(i,"for","username"),r($,"type","text"),r($,"id","myPassword"),r($,"class","p-3 rounded-md text-sm w-full"),r($,"placeholder","Password"),r(w,"class","relative flex"),r(w,"for","myPassword"),r(v,"for","remember-me"),r(v,"class","text-xs flex gap-2 items-center text-gray-500"),r(T,"class","hover:underline text-primaryColor-500 text-sm"),r(C,"class","flex justify-between"),r(o,"class","flex flex-col gap-3"),r(B,"type","submit"),r(B,"class","border rounded-md bg-primaryColor-500 text-white px-4 py-2"),r(s,"action",""),r(s,"class","flex flex-col gap-6"),r(l,"class","my-auto lg:max-w-[500px]"),r(O,"class","w-full h-full relative overflow-hidden lg:flex hidden"),r(e,"class","grid lg:grid-cols-2 grid-cols-1 lg:w-[80vw] lg:h-[80vh] h-full w-full lg:rounded-[20px] sm:py-8 sm:px-16 px-8 gap-16 bg-gray-100")},m(b,N){K(b,e,N),u(e,l),u(l,t),u(l,n),u(l,s),u(s,o),u(o,i),u(i,f),R(f,c[0]),u(i,p),Y(_,i,null),u(o,M),u(o,w),u(w,$),R($,c[1]),u(w,X),Y(E,w,null),u(o,Z),u(o,C),u(C,v),u(C,V),u(C,T),u(s,P),u(s,B),u(e,D),u(e,O),U=!0,re||(ee=[q(f,"input",c[4]),q($,"input",c[5]),q(T,"click",c[6]),q(s,"submit",c[2])],re=!0)},p(b,[N]){N&1&&f.value!==b[0]&&R(f,b[0]),N&2&&$.value!==b[1]&&R($,b[1])},i(b){U||(S(_.$$.fragment,b),S(E.$$.fragment,b),U=!0)},o(b){A(_.$$.fragment,b),A(E.$$.fragment,b),U=!1},d(b){b&&g(e),z(_),z(E),re=!1,$e(ee)}}}function Pe(c,e,l){let{auth:t}=e,a="",n="";const s=async()=>{await ye(t,a,n),l(0,a=""),l(1,n="")};function o(){a=this.value,l(0,a)}function i(){n=this.value,l(1,n)}const f=()=>de.set("register");return c.$$set=p=>{"auth"in p&&l(3,t=p.auth)},[a,n,s,t,o,i,f]}class De extends ce{constructor(e){super(),fe(this,e,Pe,Te,ue,{auth:3})}}function Ue(c){let e,l,t,a="Register",n,s,o,i,f,p,_,M,w,$,X,E,Z,C,v,te,V,T,Q,P,B="You already have an account?",le,D,O="Sign up",se,U,re=`<img src="${ie}" srcset="${ie}" alt="Hero Login Image" class="object-contain rounded-2xl my-auto"/>`,ee,b,N;return _=new ae({props:{icon:"solar:user-outline",width:"18",height:"18",style:"color: black;",class:"absolute right-3 top-[50%] -translate-y-1/2"}}),E=new ae({props:{icon:"mdi:password-outline",width:"18",height:"18",style:"color: black",class:"absolute right-3 top-[50%] -translate-y-1/2"}}),V=new ae({props:{icon:"fluent-mdl2:password-field",width:"18",height:"18",style:"color: black",class:"absolute right-3 top-[50%] -translate-y-1/2"}}),{c(){e=d("div"),l=d("div"),t=d("h1"),t.textContent=a,n=x(),s=d("form"),o=d("div"),i=d("label"),f=d("input"),p=x(),W(_.$$.fragment),M=x(),w=d("label"),$=d("input"),X=x(),W(E.$$.fragment),Z=x(),C=d("label"),v=d("input"),te=x(),W(V.$$.fragment),T=x(),Q=d("div"),P=d("button"),P.textContent=B,le=x(),D=d("button"),D.textContent=O,se=x(),U=d("div"),U.innerHTML=re,this.h()},l(h){e=m(h,"DIV",{class:!0});var I=k(e);l=m(I,"DIV",{class:!0});var H=k(l);t=m(H,"H1",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-in3wun"&&(t.textContent=a),n=y(H),s=m(H,"FORM",{action:!0,class:!0});var G=k(s);o=m(G,"DIV",{class:!0});var L=k(o);i=m(L,"LABEL",{class:!0,for:!0});var J=k(i);f=m(J,"INPUT",{type:!0,class:!0,placeholder:!0,id:!0}),p=y(J),F(_.$$.fragment,J),J.forEach(g),M=y(L),w=m(L,"LABEL",{class:!0,for:!0});var ne=k(w);$=m(ne,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),X=y(ne),F(E.$$.fragment,ne),ne.forEach(g),Z=y(L),C=m(L,"LABEL",{class:!0,for:!0});var oe=k(C);v=m(oe,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),te=y(oe),F(V.$$.fragment,oe),oe.forEach(g),T=y(L),Q=m(L,"DIV",{class:!0});var me=k(Q);P=m(me,"BUTTON",{class:!0,"data-svelte-h":!0}),j(P)!=="svelte-1avnuto"&&(P.textContent=B),me.forEach(g),L.forEach(g),le=y(G),D=m(G,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),j(D)!=="svelte-11lo12i"&&(D.textContent=O),G.forEach(g),H.forEach(g),se=y(I),U=m(I,"DIV",{class:!0,"data-svelte-h":!0}),j(U)!=="svelte-18d69tr"&&(U.innerHTML=re),I.forEach(g),this.h()},h(){r(t,"class","font-semibold text-4xl mb-8"),r(f,"type","email"),r(f,"class","p-3 rounded-md text-sm w-full"),r(f,"placeholder","Email"),r(f,"id","email"),r(i,"class","relative flex"),r(i,"for","email"),r($,"type","text"),r($,"id","myPassword"),r($,"class","p-3 rounded-md text-sm w-full"),r($,"placeholder","Password"),r(w,"class","relative flex"),r(w,"for","myPassword"),r(v,"type","text"),r(v,"id","confirmPassword"),r(v,"class","p-3 rounded-md text-sm w-full"),r(v,"placeholder","Confirm Your Password"),r(C,"class","relative flex"),r(C,"for","confirmPassword"),r(P,"class","hover:underline text-primaryColor-500 text-sm"),r(Q,"class","flex justify-end"),r(o,"class","flex flex-col gap-3"),r(D,"type","submit"),r(D,"class","border rounded-md bg-primaryColor-500 text-white px-4 py-2"),r(s,"action",""),r(s,"class","flex flex-col gap-6"),r(l,"class","my-auto lg:max-w-[500px]"),r(U,"class","w-full h-full relative overflow-hidden lg:flex hidden"),r(e,"class","grid lg:grid-cols-2 grid-cols-1 lg:w-[80vw] lg:h-[80vh] h-full w-full lg:rounded-[20px] sm:py-8 sm:px-16 px-8 gap-16 bg-gray-100")},m(h,I){K(h,e,I),u(e,l),u(l,t),u(l,n),u(l,s),u(s,o),u(o,i),u(i,f),R(f,c[0]),u(i,p),Y(_,i,null),u(o,M),u(o,w),u(w,$),R($,c[1]),u(w,X),Y(E,w,null),u(o,Z),u(o,C),u(C,v),R(v,c[2]),u(C,te),Y(V,C,null),u(o,T),u(o,Q),u(Q,P),u(s,le),u(s,D),u(e,se),u(e,U),ee=!0,b||(N=[q(f,"input",c[5]),q($,"input",c[6]),q(v,"input",c[7]),q(P,"click",c[8]),q(s,"submit",c[3])],b=!0)},p(h,[I]){I&1&&f.value!==h[0]&&R(f,h[0]),I&2&&$.value!==h[1]&&R($,h[1]),I&4&&v.value!==h[2]&&R(v,h[2])},i(h){ee||(S(_.$$.fragment,h),S(E.$$.fragment,h),S(V.$$.fragment,h),ee=!0)},o(h){A(_.$$.fragment,h),A(E.$$.fragment,h),A(V.$$.fragment,h),ee=!1},d(h){h&&g(e),z(_),z(E),z(V),b=!1,$e(N)}}}function Ne(c,e,l){let{auth:t}=e,a="",n="",s="";const o=async()=>{n===s&&(await Ce(t,a,n),l(0,a=""),l(1,n=""))};function i(){a=this.value,l(0,a)}function f(){n=this.value,l(1,n)}function p(){s=this.value,l(2,s)}const _=()=>de.set("login");return c.$$set=M=>{"auth"in M&&l(4,t=M.auth)},[a,n,s,o,t,i,f,p,_]}class Se extends ce{constructor(e){super(),fe(this,e,Ne,Ue,ue,{auth:4})}}function Ae(c){let e,l;return e=new Se({props:{auth:c[3]}}),{c(){W(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){Y(e,t,a),l=!0},p(t,a){const n={};a&8&&(n.auth=t[3]),e.$set(n)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function Ve(c){let e,l;return e=new De({props:{auth:c[3]}}),{c(){W(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){Y(e,t,a),l=!0},p(t,a){const n={};a&8&&(n.auth=t[3]),e.$set(n)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function Be(c){let e,l,t,a;const n=[Ve,Ae],s=[];function o(i,f){return i[0]==="login"?0:1}return e=o(c),l=s[e]=n[e](c),{c(){l.c(),t=he()},l(i){l.l(i),t=he()},m(i,f){s[e].m(i,f),K(i,t,f),a=!0},p(i,f){let p=e;e=o(i),e===p?s[e].p(i,f):(ve(),A(s[p],1,1,()=>{s[p]=null}),be(),l=s[e],l?l.p(i,f):(l=s[e]=n[e](i),l.c()),S(l,1),l.m(t.parentNode,t))},i(i){a||(S(l),a=!0)},o(i){A(l),a=!1},d(i){i&&g(t),s[e].d(i)}}}function He(c){let e,l=" ",t,a,n,s="Sign Out",o,i;function f(){return c[2](c[3])}return{c(){e=ge("it sign in "),t=ge(l),a=x(),n=d("button"),n.textContent=s},l(p){e=_e(p,"it sign in "),t=_e(p,l),a=y(p),n=m(p,"BUTTON",{"data-svelte-h":!0}),j(n)!=="svelte-y0w5ad"&&(n.textContent=s)},m(p,_){K(p,e,_),K(p,t,_),K(p,a,_),K(p,n,_),o||(i=q(n,"click",f),o=!0)},p(p,_){c=p},d(p){p&&(g(e),g(t),g(a),g(n)),o=!1,i()}}}function Me(c){let e,l,t,a,n;return l=new we({props:{$$slots:{default:[Be,({auth:s})=>({3:s}),({auth:s})=>s?8:0]},$$scope:{ctx:c}}}),a=new xe({props:{$$slots:{default:[He,({auth:s})=>({3:s}),({auth:s})=>s?8:0]},$$scope:{ctx:c}}}),{c(){e=d("main"),W(l.$$.fragment),t=x(),W(a.$$.fragment),this.h()},l(s){e=m(s,"MAIN",{class:!0});var o=k(e);F(l.$$.fragment,o),t=y(o),F(a.$$.fragment,o),o.forEach(g),this.h()},h(){r(e,"class","container w-screen h-screen m-auto flex justify-center items-center")},m(s,o){K(s,e,o),Y(l,e,null),u(e,t),Y(a,e,null),n=!0},p(s,o){const i={};o&25&&(i.$$scope={dirty:o,ctx:s}),l.$set(i);const f={};o&24&&(f.$$scope={dirty:o,ctx:s}),a.$set(f)},i(s){n||(S(l.$$.fragment,s),S(a.$$.fragment,s),n=!0)},o(s){A(l.$$.fragment,s),A(a.$$.fragment,s),n=!1},d(s){s&&g(e),z(l),z(a)}}}function Oe(c){let e,l;return e=new Ie({props:{$$slots:{default:[Me]},$$scope:{ctx:c}}}),{c(){W(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){Y(e,t,a),l=!0},p(t,[a]){const n={};a&17&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function Re(c,e,l){let t,a;pe(c,Ee,s=>l(1,t=s)),pe(c,de,s=>l(0,a=s));const n=s=>ke(s);return c.$$.update=()=>{c.$$.dirty&2&&t!=null&&t.uid&&Le("/chat")},[a,t,n]}class Qe extends ce{constructor(e){super(),fe(this,e,Re,Oe,ue,{})}}export{Qe as component};
