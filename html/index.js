const Bt=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};Bt();function U(){}function Nt(t,i){for(const n in i)t[n]=i[n];return t}function xt(t){return t()}function lt(){return Object.create(null)}function je(t){t.forEach(xt)}function At(t){return typeof t=="function"}function ce(t,i){return t!=t?i==i:t!==i||t&&typeof t=="object"||typeof t=="function"}function Ft(t){return Object.keys(t).length===0}function St(t,...i){if(t==null)return U;const n=t.subscribe(...i);return n.unsubscribe?()=>n.unsubscribe():n}function ae(t,i,n){t.$$.on_destroy.push(St(i,n))}function $t(t,i,n,r){if(t){const o=Lt(t,i,n,r);return t[0](o)}}function Lt(t,i,n,r){return t[1]&&r?Nt(n.ctx.slice(),t[1](r(i))):n.ctx}function Ct(t,i,n,r){if(t[2]&&r){const o=t[2](r(n));if(i.dirty===void 0)return o;if(typeof o=="object"){const l=[],a=Math.max(i.dirty.length,o.length);for(let c=0;c<a;c+=1)l[c]=i.dirty[c]|o[c];return l}return i.dirty|o}return i.dirty}function Dt(t,i,n,r,o,l){if(o){const a=Lt(i,n,r,l);t.p(a,o)}}function zt(t){if(t.ctx.length>32){const i=[],n=t.ctx.length/32;for(let r=0;r<n;r++)i[r]=-1;return i}return-1}function Vt(t,i,n){return t.set(n),i}function s(t,i){t.appendChild(i)}function C(t,i,n){t.insertBefore(i,n||null)}function $(t){t.parentNode.removeChild(t)}function Mt(t,i){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(i)}function p(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ze(t){return document.createTextNode(t)}function b(){return ze(" ")}function Ue(){return ze("")}function Oe(t,i,n,r){return t.addEventListener(i,n,r),()=>t.removeEventListener(i,n,r)}function e(t,i,n){n==null?t.removeAttribute(i):t.getAttribute(i)!==n&&t.setAttribute(i,n)}function Tt(t){return Array.from(t.childNodes)}function Xe(t,i){i=""+i,t.wholeText!==i&&(t.data=i)}function _e(t,i,n,r){n===null?t.style.removeProperty(i):t.style.setProperty(i,n,r?"important":"")}let Fe;function Ne(t){Fe=t}function nt(){if(!Fe)throw new Error("Function called outside component initialization");return Fe}function qe(t){nt().$$.on_mount.push(t)}function Ht(t){nt().$$.after_update.push(t)}function Zt(t){nt().$$.on_destroy.push(t)}const Be=[],st=[],He=[],at=[],Rt=Promise.resolve();let Qe=!1;function Ot(){Qe||(Qe=!0,Rt.then(Pt))}function We(t){He.push(t)}const Ke=new Set;let Se=0;function Pt(){const t=Fe;do{for(;Se<Be.length;){const i=Be[Se];Se++,Ne(i),It(i.$$)}for(Ne(null),Be.length=0,Se=0;st.length;)st.pop()();for(let i=0;i<He.length;i+=1){const n=He[i];Ke.has(n)||(Ke.add(n),n())}He.length=0}while(Be.length);for(;at.length;)at.pop()();Qe=!1,Ke.clear(),Ne(t)}function It(t){if(t.fragment!==null){t.update(),je(t.before_update);const i=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,i),t.after_update.forEach(We)}}const Ze=new Set;let De;function Ge(){De={r:0,c:[],p:De}}function Ye(){De.r||je(De.c),De=De.p}function x(t,i){t&&t.i&&(Ze.delete(t),t.i(i))}function B(t,i,n,r){if(t&&t.o){if(Ze.has(t))return;Ze.add(t),De.c.push(()=>{Ze.delete(t),r&&(n&&t.d(1),r())}),t.o(i)}}function ke(t){t&&t.c()}function me(t,i,n,r){const{fragment:o,on_mount:l,on_destroy:a,after_update:c}=t.$$;o&&o.m(i,n),r||We(()=>{const d=l.map(xt).filter(At);a?a.push(...d):je(d),t.$$.on_mount=[]}),c.forEach(We)}function he(t,i){const n=t.$$;n.fragment!==null&&(je(n.on_destroy),n.fragment&&n.fragment.d(i),n.on_destroy=n.fragment=null,n.ctx=[])}function Ut(t,i){t.$$.dirty[0]===-1&&(Be.push(t),Ot(),t.$$.dirty.fill(0)),t.$$.dirty[i/31|0]|=1<<i%31}function pe(t,i,n,r,o,l,a,c=[-1]){const d=Fe;Ne(t);const f=t.$$={fragment:null,ctx:null,props:l,update:U,not_equal:o,bound:lt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:lt(),dirty:c,skip_bound:!1,root:i.target||d.$$.root};a&&a(f.root);let u=!1;if(f.ctx=n?n(t,i.props||{},(h,y,...g)=>{const _=g.length?g[0]:y;return f.ctx&&o(f.ctx[h],f.ctx[h]=_)&&(!f.skip_bound&&f.bound[h]&&f.bound[h](_),u&&Ut(t,h)),y}):[],f.update(),u=!0,je(f.before_update),f.fragment=r?r(f.ctx):!1,i.target){if(i.hydrate){const h=Tt(i.target);f.fragment&&f.fragment.l(h),h.forEach($)}else f.fragment&&f.fragment.c();i.intro&&x(t.$$.fragment),me(t,i.target,i.anchor,i.customElement),Pt()}Ne(d)}class we{$destroy(){he(this,1),this.$destroy=U}$on(i,n){const r=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(i){this.$$set&&!Ft(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}function Ce(t,i){const n=r=>{const{action:o,data:l}=r.data;o===t&&i(l)};qe(()=>window.addEventListener("message",n)),Zt(()=>window.removeEventListener("message",n))}const Pe=[];function ge(t,i=U){let n;const r=new Set;function o(c){if(ce(t,c)&&(t=c,n)){const d=!Pe.length;for(const f of r)f[1](),Pe.push(f,t);if(d){for(let f=0;f<Pe.length;f+=2)Pe[f][0](Pe[f+1]);Pe.length=0}}}function l(c){o(c(t))}function a(c,d=U){const f=[c,d];return r.add(f),r.size===1&&(n=i(o)||U),c(t),()=>{r.delete(f),r.size===0&&(n(),n=null)}}return{set:o,update:l,subscribe:a}}const Ie=ge(!1),ot=ge(!1),et=ge(""),Ae=ge(!1),Je=ge(!1),tt=ge({seatbelt:!1,speed:0,fuel:100,engine:100,nos:0,nosActive:!1,HasTurbo:!1,turbo:0}),qt=ge(null),it=ge({health:100,armour:100,hunger:100,thirst:100,oxygen:100,stress:0,dead:!1,talking:null}),Gt=ge(null);let jt=!1;ot.subscribe(t=>{jt=t});let Et="";et.subscribe(t=>{Et=t});async function Re(t,i={},n){if(jt==!0&&n)return Promise.resolve(n||{});const r={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(i)},o=window.GetParentResourceName?window.GetParentResourceName():Et;return await(await fetch(`https://${o}/${t}`,r)).json()}function ct(t){let i,n;const r=t[2].default,o=$t(r,t,t[1],null);return{c(){i=p("main"),o&&o.c(),e(i,"class","svelte-1fnr7mh")},m(l,a){C(l,i,a),o&&o.m(i,null),n=!0},p(l,a){o&&o.p&&(!n||a&2)&&Dt(o,r,l,l[1],n?Ct(r,l[1],a,null):zt(l[1]),null)},i(l){n||(x(o,l),n=!0)},o(l){B(o,l),n=!1},d(l){l&&$(i),o&&o.d(l)}}}function Yt(t){let i,n,r=t[0]&&ct(t);return{c(){r&&r.c(),i=Ue()},m(o,l){r&&r.m(o,l),C(o,i,l),n=!0},p(o,[l]){o[0]?r?(r.p(o,l),l&1&&x(r,1)):(r=ct(o),r.c(),x(r,1),r.m(i.parentNode,i)):r&&(Ge(),B(r,1,1,()=>{r=null}),Ye())},i(o){n||(x(r),n=!0)},o(o){B(r),n=!1},d(o){r&&r.d(o),o&&$(i)}}}function Jt(t,i,n){let{$$slots:r={},$$scope:o}=i,l;return Ie.subscribe(a=>{n(0,l=a)}),Ce("setVisible",a=>{Ie.set(a)}),t.$$set=a=>{"$$scope"in a&&n(1,o=a.$$scope)},[l,o,r]}class Kt extends we{constructor(i){super(),pe(this,i,Jt,Yt,ce,{})}}const Xt=()=>!window.invokeNative,rt=(t,i=0)=>{if(Xt())for(const n of t)setTimeout(()=>{window.dispatchEvent(new MessageEvent("message",{data:{action:n.action,data:n.data}}))},i)};function ft(t,i,n){const r=t.slice();return r[4]=i[n],r}function ut(t,i,n){const r=t.slice();return r[7]=i[n],r}function dt(t){let i,n=t[1],r=[];for(let o=0;o<n.length;o+=1)r[o]=ht(ft(t,n,o));return{c(){i=p("div");for(let o=0;o<r.length;o+=1)r[o].c();e(i,"class","w-fit h-fit bg-[#25303B] p-2")},m(o,l){C(o,i,l);for(let a=0;a<r.length;a+=1)r[a].m(i,null)},p(o,l){if(l&2){n=o[1];let a;for(a=0;a<n.length;a+=1){const c=ft(o,n,a);r[a]?r[a].p(c,l):(r[a]=ht(c),r[a].c(),r[a].m(i,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=n.length}},d(o){o&&$(i),Mt(r,o)}}}function mt(t){let i,n=t[7].name+"",r,o,l;function a(){return t[3](t[7])}return{c(){i=p("button"),r=ze(n),e(i,"class","bg-[#0098A3] text-white p-2")},m(c,d){C(c,i,d),s(i,r),o||(l=Oe(i,"click",a),o=!0)},p(c,d){t=c},d(c){c&&$(i),o=!1,l()}}}function ht(t){let i,n,r=t[4].component+"",o,l,a,c=t[4].actions,d=[];for(let f=0;f<c.length;f+=1)d[f]=mt(ut(t,c,f));return{c(){i=p("div"),n=p("p"),o=ze(r),l=b();for(let f=0;f<d.length;f+=1)d[f].c();a=b(),e(n,"class","text-white mr-4"),e(i,"class","flex flex-row gap-2 items-center")},m(f,u){C(f,i,u),s(i,n),s(n,o),s(i,l);for(let h=0;h<d.length;h+=1)d[h].m(i,null);s(i,a)},p(f,u){if(u&2){c=f[4].actions;let h;for(h=0;h<c.length;h+=1){const y=ut(f,c,h);d[h]?d[h].p(y,u):(d[h]=mt(y),d[h].c(),d[h].m(i,a))}for(;h<d.length;h+=1)d[h].d(1);d.length=c.length}},d(f){f&&$(i),Mt(d,f)}}}function Qt(t){let i,n,r,o,l,a=t[0]&&dt(t);return{c(){i=p("div"),n=p("button"),n.textContent="Show",r=b(),a&&a.c(),e(n,"class","bg-[#232B33] text-white p-2 font-medium"),e(i,"class","absolute top-0 z-[1000]")},m(c,d){C(c,i,d),s(i,n),s(i,r),a&&a.m(i,null),o||(l=Oe(n,"click",t[2]),o=!0)},p(c,[d]){c[0]?a?a.p(c,d):(a=dt(c),a.c(),a.m(i,null)):a&&(a.d(1),a=null)},i:U,o:U,d(c){c&&$(i),a&&a.d(),o=!1,l()}}}function Wt(t,i,n){let r=!1;return[r,[{component:"Show",actions:[{name:"show",action:"setVisible",data:!0},{name:"hide",action:"setVisible",data:!1}]},{component:"toggle Vehicle",actions:[{name:"show",action:"setVehicle",data:!0},{name:"hide",action:"setVehicle",data:!1}]}],()=>{n(0,r=!r)},c=>{if(c.custom==!0){c.customFunction();return}rt([{action:c.action,data:c.data}])}]}class ei extends we{constructor(i){super(),pe(this,i,Wt,Qt,ce,{})}}function ti(t,i,n){let r,o,l;ae(t,it,c=>n(0,r=c)),ae(t,tt,c=>n(1,o=c)),ae(t,Ie,c=>n(2,l=c)),rt([{action:"setVisible",data:!0}]),rt([{action:"setBrowserMode",data:!0}]);function a(c){c.key==="="&&Vt(Ie,l=!0,l)}return Ce("setBrowserMode",c=>{ot.set(c),console.log("browser mode enabled"),c?window.addEventListener("keydown",a):window.removeEventListener("keydown",a)}),Ce("setVehicle",c=>{Je.set(c)}),Ce("setVehicleData",c=>{typeof c=="object"&&!Array.isArray(c)?(tt.set(c),qt.set(o[0])):console.error("Invalid vehicle data received:",c)}),Ce("setPlayerData",c=>{it.set(c),Gt.set(r[0])}),Ce("ShowMenu",c=>{Ae.set(c)}),[]}class ii extends we{constructor(i){super(),pe(this,i,ti,null,ce,{})}}function ri(t){let i,n,r,o,l,a,c,d,f,u,h,y,g,_,D,L,A,j,Z,F,N,Q,S,ne,v,E,V,R,q,O,G,I,M,Y,J,ee,T,W,te,H,be,K,ye,ie,X,fe,ue,Ve,ve,re,de,Me,xe,oe,Ee,le,$e,Le,se,z,P;return{c(){i=p("div"),n=p("div"),r=p("div"),o=p("i"),a=b(),c=m("svg"),d=m("g"),f=m("path"),u=m("clipPath"),h=m("path"),y=b(),g=p("div"),_=p("i"),D=b(),L=m("svg"),A=m("g"),j=m("path"),Z=m("clipPath"),F=m("rect"),N=m("rect"),ne=b(),v=p("div"),E=p("i"),V=b(),R=m("svg"),q=m("g"),O=m("path"),G=m("clipPath"),I=m("rect"),M=m("rect"),ee=b(),T=p("div"),W=p("i"),te=b(),H=m("svg"),be=m("g"),K=m("path"),ye=m("clipPath"),ie=m("rect"),X=m("rect"),Ve=b(),ve=p("div"),re=p("div"),de=p("div"),de.innerHTML=`<svg class="z-10" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-3 -3 30 30" fill="none"><path d="M19.5 12.6H15.838L14.007 9L10.8 15L9.429 12.6H5.5" stroke="#1c6e27" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> 
                <svg class="fixed w-[4rem]" width="${200}" height="${200}" viewBox="0 0 24 24"><g><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" fill="#1f2b49" stroke="#0f1831" stroke-width="1"></path><clipPath id="c-cut-out-hexwhole"><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"></path></clipPath></g></svg>`,Me=b(),xe=p("div"),oe=p("div"),Ee=b(),le=p("div"),$e=p("div"),$e.innerHTML=`<i class="fas fa-shield z-10 text-[#003d77]"></i> 
                <svg class="fixed w-[4rem]" width="${200}" height="${200}" viewBox="0 0 24 24"><g><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" fill="#1f2b49" stroke="#0f1831" stroke-width="1"></path><clipPath id="c-cut-out-hexwhole"><path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"></path></clipPath></g></svg>`,Le=b(),se=p("div"),z=p("div"),e(o,"class",l="fas fa-wifi fa-rotate-90 fa-sm z-10 "+(t[1]&&t[1].talking?"text-[#faeb63]":"text-gray-300")),e(f,"d","M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"),e(f,"fill","#1f2b49"),e(f,"stroke","#0f1831"),e(f,"stroke-width","1"),e(h,"d","M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"),e(u,"id","c-cut-out-hexwhole"),e(c,"class","fixed w-[4rem]"),e(c,"width",200),e(c,"height",200),e(c,"viewBox","0 0 24 24"),e(r,"class","w-[4rem] h-[4rem] flex items-center justify-center"),e(_,"class","fas fa-burger fa-sm z-10 text-[#dbdbdb]"),e(j,"d","M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"),e(j,"fill","#2c3e50c0"),e(j,"stroke","#0f1831"),e(j,"stroke-width","1"),e(F,"x","0"),e(F,"y","0"),e(F,"width","100%"),e(F,"height","30%"),e(Z,"id","c-cut-out-hexwhole"),e(N,"x","0"),e(N,"y",Q="calc(100% - "+(t[1]?t[1].hunger:0)+"%)"),e(N,"width","100%"),e(N,"height",S=(t[1]?t[1].hunger:0)+"%"),e(N,"fill","#1f2b49"),e(N,"clip-path","url(#c-cut-out-hexwhole)"),e(L,"class","fixed w-[4rem]"),e(L,"width","200"),e(L,"height","200"),e(L,"viewBox","0 0 24 24"),e(g,"class","w-[4rem] h-[4rem] flex items-center justify-center"),e(E,"class","fas fa-glass-water fa-sm z-10 text-[#dbdbdb]"),e(O,"d","M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"),e(O,"fill","#2c3e50c0"),e(O,"stroke","#0f1831"),e(O,"stroke-width","1"),e(I,"x","0"),e(I,"y","0"),e(I,"width","100%"),e(I,"height","30%"),e(G,"id","c-cut-out-hexwhole"),e(M,"x","0"),e(M,"y",Y="calc(100% - "+(t[1]?t[1].thirst:0)+"%)"),e(M,"width","100%"),e(M,"height",J=(t[1]?t[1].thirst:0)+"%"),e(M,"fill","#1f2b49"),e(M,"clip-path","url(#c-cut-out-hexwhole)"),e(R,"class","fixed w-[4rem]"),e(R,"width","200"),e(R,"height","200"),e(R,"viewBox","0 0 24 24"),e(v,"class","w-[4rem] h-[4rem] flex items-center justify-center"),e(W,"class","fas fa-brain fa-sm z-10 text-[#dbdbdb]"),e(K,"d","M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"),e(K,"fill","#2c3e50c0"),e(K,"stroke","#0f1831"),e(K,"stroke-width","1"),e(ie,"x","0"),e(ie,"y","0"),e(ie,"width","100%"),e(ie,"height","30%"),e(ye,"id","c-cut-out-hexwhole"),e(X,"x","0"),e(X,"y",fe="calc(100% - "+(t[1]?t[1].stress:0)+"%)"),e(X,"width","100%"),e(X,"height",ue=(t[1]?t[1].stress:0)+"%"),e(X,"fill","#1f2b49"),e(X,"clip-path","url(#c-cut-out-hexwhole)"),e(H,"class","fixed w-[4rem]"),e(H,"width","200"),e(H,"height","200"),e(H,"viewBox","0 0 24 24"),e(T,"class","w-[4rem] h-[4rem] flex items-center justify-center"),e(n,"class","flex -ml-8 -mb-2"),e(de,"class","w-[4rem] h-[4rem] flex items-center justify-center"),e(oe,"class","h-full rounded-r-full bg-[#1c6e27]"),_e(oe,"width",(t[1]&&t[1].PlayerDead?"0":t[1]?t[1].health:0)+"%"),e(xe,"class","w-[15rem] h-[0.9rem] -ml-2 flex rounded-r-full border-2 border-primary bg-secondary"),e(re,"class","flex items-center"),e($e,"class","w-[4rem] h-[4rem] flex items-center justify-center"),e(z,"class","h-full rounded-r-full bg-[#003d77]"),_e(z,"width",(t[1]?t[1].armour:0)+"%"),e(se,"class","w-[15rem] h-[0.9rem] -ml-2 flex rounded-r-full border-2 border-primary bg-secondary"),e(le,"class","flex items-center ml-8 -mt-4"),e(i,"class",P="mb-[4.5rem] transition-all "+(t[0]?"ml-[40vh]":"ml-[5.6vh]"))},m(w,k){C(w,i,k),s(i,n),s(n,r),s(r,o),s(r,a),s(r,c),s(c,d),s(d,f),s(d,u),s(u,h),s(n,y),s(n,g),s(g,_),s(g,D),s(g,L),s(L,A),s(A,j),s(A,Z),s(Z,F),s(A,N),s(n,ne),s(n,v),s(v,E),s(v,V),s(v,R),s(R,q),s(q,O),s(q,G),s(G,I),s(q,M),s(n,ee),s(n,T),s(T,W),s(T,te),s(T,H),s(H,be),s(be,K),s(be,ye),s(ye,ie),s(be,X),s(i,Ve),s(i,ve),s(ve,re),s(re,de),s(re,Me),s(re,xe),s(xe,oe),s(ve,Ee),s(ve,le),s(le,$e),s(le,Le),s(le,se),s(se,z)},p(w,[k]){k&2&&l!==(l="fas fa-wifi fa-rotate-90 fa-sm z-10 "+(w[1]&&w[1].talking?"text-[#faeb63]":"text-gray-300"))&&e(o,"class",l),k&2&&Q!==(Q="calc(100% - "+(w[1]?w[1].hunger:0)+"%)")&&e(N,"y",Q),k&2&&S!==(S=(w[1]?w[1].hunger:0)+"%")&&e(N,"height",S),k&2&&Y!==(Y="calc(100% - "+(w[1]?w[1].thirst:0)+"%)")&&e(M,"y",Y),k&2&&J!==(J=(w[1]?w[1].thirst:0)+"%")&&e(M,"height",J),k&2&&fe!==(fe="calc(100% - "+(w[1]?w[1].stress:0)+"%)")&&e(X,"y",fe),k&2&&ue!==(ue=(w[1]?w[1].stress:0)+"%")&&e(X,"height",ue),k&2&&_e(oe,"width",(w[1]&&w[1].PlayerDead?"0":w[1]?w[1].health:0)+"%"),k&2&&_e(z,"width",(w[1]?w[1].armour:0)+"%"),k&1&&P!==(P="mb-[4.5rem] transition-all "+(w[0]?"ml-[40vh]":"ml-[5.6vh]"))&&e(i,"class",P)},i:U,o:U,d(w){w&&$(i)}}}function ni(t,i,n){let r,o;return ae(t,Je,l=>n(0,r=l)),ae(t,it,l=>n(1,o=l)),[r,o]}class oi extends we{constructor(i){super(),pe(this,i,ni,ri,ce,{})}}function pt(t){let i,n,r,o,l,a,c,d,f,u,h,y;return{c(){i=p("div"),n=p("i"),o=b(),l=m("svg"),a=m("g"),c=m("path"),d=m("clipPath"),f=m("rect"),u=m("rect"),e(n,"class",r="fas fa-fire fa-sm z-10 "+(t[2]&&t[2].nosActive,"text-[#4076da]")),e(c,"d","M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"),e(c,"fill","#2c3e50c0"),e(c,"stroke","#0f1831"),e(c,"stroke-width","1"),e(f,"x","0"),e(f,"y","0"),e(f,"width","100%"),e(f,"height","30%"),e(d,"id","c-cut-out-hexwhole"),e(u,"x","0"),e(u,"y",h="calc(100% - "+(t[2]?t[2].nos:0)+"%)"),e(u,"width","100%"),e(u,"height",y=(t[2]?t[2].nos:0)+"%"),e(u,"fill","#1f2b49"),e(u,"clip-path","url(#c-cut-out-hexwhole)"),e(l,"class","fixed w-[4rem]"),e(l,"width","200"),e(l,"height","200"),e(l,"viewBox","0 0 24 24"),e(i,"class","w-[4rem] h-[4rem] flex items-center justify-center")},m(g,_){C(g,i,_),s(i,n),s(i,o),s(i,l),s(l,a),s(a,c),s(a,d),s(d,f),s(a,u)},p(g,_){_&4&&r!==(r="fas fa-fire fa-sm z-10 "+(g[2]&&g[2].nosActive,"text-[#4076da]"))&&e(n,"class",r),_&4&&h!==(h="calc(100% - "+(g[2]?g[2].nos:0)+"%)")&&e(u,"y",h),_&4&&y!==(y=(g[2]?g[2].nos:0)+"%")&&e(u,"height",y)},d(g){g&&$(i)}}}function wt(t){let i,n,r,o,l,a,c,d,f,u,h,y,g,_,D,L,A,j,Z,F,N,Q,S=(t[2]&&t[2].turbo)+"",ne;return{c(){i=p("div"),n=m("svg"),r=m("g"),o=m("line"),l=m("line"),a=m("line"),c=m("line"),d=m("line"),f=m("line"),u=m("line"),h=m("line"),y=m("line"),g=m("line"),_=m("line"),D=m("line"),L=m("line"),A=b(),j=p("div"),Z=p("div"),N=b(),Q=p("div"),ne=ze(S),e(o,"id","Line 13"),e(o,"x1","72.5"),e(o,"x2","72.5"),e(o,"y2","9.87968"),e(o,"stroke","#D8D8D8"),e(l,"id","Line 20"),e(l,"y1","-0.5"),e(l,"x2","9.75899"),e(l,"y2","-0.5"),e(l,"transform","matrix(-0.747306 0.664479 -0.648193 -0.761476 31.293 120)"),e(l,"stroke","#D8D8D8"),e(a,"id","Line 21"),e(a,"y1","-0.5"),e(a,"x2","9.70043"),e(a,"y2","-0.5"),e(a,"transform","matrix(-0.914853 0.403787 -0.389219 -0.921145 16 100)"),e(a,"stroke","#D8D8D8"),e(c,"id","Line 22"),e(c,"opacity","0.9"),e(c,"y1","-0.5"),e(c,"x2","9.66663"),e(c,"y2","-0.5"),e(c,"transform","matrix(-0.999998 0.00217205 -0.00207939 -0.999998 9.6665 75)"),e(c,"stroke","#D8D8D8"),e(d,"id","Line 23"),e(d,"y1","-0.5"),e(d,"x2","9.69258"),e(d,"y2","-0.5"),e(d,"transform","matrix(-0.935238 -0.354019 0.340703 -0.940171 13.0649 52.4314)"),e(d,"stroke","#D8D8D8"),e(f,"id","Line 24"),e(f,"y1","-0.5"),e(f,"x2","9.77893"),e(f,"y2","-0.5"),e(f,"transform","matrix(-0.681736 -0.731598 0.716583 -0.697502 29.2002 27.1543)"),e(f,"stroke","#D8D8D8"),e(u,"id","Line 25"),e(u,"y1","-0.5"),e(u,"x2","9.84811"),e(u,"y2","-0.5"),e(u,"transform","matrix(-0.379599 -0.925151 0.919137 -0.393938 48.6001 14.6475)"),e(u,"stroke","#D8D8D8"),e(h,"id","Line 26"),e(h,"y1","-0.5"),e(h,"x2","9.75899"),e(h,"y2","-0.5"),e(h,"transform","matrix(0.747306 0.664479 0.648193 -0.761476 113.307 119.463)"),e(h,"stroke","#D8D8D8"),e(y,"id","Line 27"),e(y,"y1","-0.5"),e(y,"x2","9.70043"),e(y,"y2","-0.5"),e(y,"transform","matrix(0.914853 0.403787 0.389219 -0.921145 128.6 99.4634)"),e(y,"stroke","#D8D8D8"),e(g,"id","Line 28"),e(g,"opacity","0.9"),e(g,"y1","-0.5"),e(g,"x2","9.66663"),e(g,"y2","-0.5"),e(g,"transform","matrix(0.999998 0.00217205 0.00207939 -0.999998 134.934 74.4634)"),e(g,"stroke","#D8D8D8"),e(_,"id","Line 29"),e(_,"y1","-0.5"),e(_,"x2","9.69258"),e(_,"y2","-0.5"),e(_,"transform","matrix(0.935238 -0.354019 -0.340703 -0.940171 131.535 51.8949)"),e(_,"stroke","#D8D8D8"),e(D,"id","Line 30"),e(D,"y1","-0.5"),e(D,"x2","9.77893"),e(D,"y2","-0.5"),e(D,"transform","matrix(0.681736 -0.731598 -0.716583 -0.697502 115.4 26.6178)"),e(D,"stroke","#D8D8D8"),e(L,"id","Line 31"),e(L,"y1","-0.5"),e(L,"x2","9.84811"),e(L,"y2","-0.5"),e(L,"transform","matrix(0.379599 -0.925151 -0.919137 -0.393938 96 14.111)"),e(L,"stroke","#D8D8D8"),e(r,"id","Rev Lines"),e(n,"class","w-[7.5rem] h-[7.5rem] -mt-[1rem]"),e(n,"xmlns","http://www.w3.org/2000/svg"),e(n,"width","145"),e(n,"height","128"),e(n,"viewBox","0 0 145 128"),e(n,"fill","none"),e(Z,"class","bg-[#00D1FF] w-[0.15rem] h-[35%]"),e(j,"class","needle absolute w-[0.2rem] h-[3.6rem] -mt-[3.5rem] transition-all svelte-u36co9"),e(j,"style",F=t[3](t[1])),e(Q,"class","absolute z-10 font-medium text-[3rem]"),e(i,"class","-mt-[8rem] ml-[8.5rem] absolute w-[8rem] h-[8rem] rounded-full border-[3px] border-primary bg-secondary flex items-center justify-center flex-col")},m(v,E){C(v,i,E),s(i,n),s(n,r),s(r,o),s(r,l),s(r,a),s(r,c),s(r,d),s(r,f),s(r,u),s(r,h),s(r,y),s(r,g),s(r,_),s(r,D),s(r,L),s(i,A),s(i,j),s(j,Z),s(i,N),s(i,Q),s(Q,ne)},p(v,E){E&2&&F!==(F=v[3](v[1]))&&e(j,"style",F),E&4&&S!==(S=(v[2]&&v[2].turbo)+"")&&Xe(ne,S)},d(v){v&&$(i)}}}function li(t){let i,n,r,o,l,a,c,d,f,u,h,y,g,_,D,L,A,j,Z,F,N,Q,S,ne,v,E,V,R,q,O,G,I,M,Y,J,ee,T,W,te,H,be,K,ye,ie,X,fe,ue=bt(t[2]&&t[2].speed)+"",Ve,ve,re,de=(t[2]&&t[2].speed)+"",Me,xe,oe,Ee,le,$e,Le,se,z=t[2]&&t[2].nosActive&&pt(t),P=t[2]&&t[2].HasTurbo&&wt(t);return{c(){i=p("div"),n=p("div"),z&&z.c(),r=b(),o=p("div"),l=p("i"),a=b(),c=m("svg"),d=m("g"),f=m("path"),u=m("clipPath"),h=m("path"),y=b(),g=p("div"),_=p("i"),L=b(),A=m("svg"),j=m("g"),Z=m("path"),F=m("clipPath"),N=m("path"),Q=b(),S=p("div"),P&&P.c(),ne=b(),v=p("div"),E=m("svg"),V=m("g"),R=m("line"),q=m("line"),O=m("line"),G=m("line"),I=m("line"),M=m("line"),Y=m("line"),J=m("line"),ee=m("line"),T=m("line"),W=m("line"),te=m("line"),H=m("line"),be=b(),K=p("div"),ye=p("div"),X=b(),fe=p("div"),Ve=ze(ue),ve=b(),re=p("div"),Me=ze(de),xe=b(),oe=p("div"),oe.textContent="MPH",Ee=b(),le=p("i"),$e=b(),Le=p("div"),se=p("div"),e(l,"class","fas fa-triangle-exclamation fa-sm z-10"),_e(l,"color",gt(t[2]?t[2].engine:0)),e(f,"d","M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"),e(f,"fill","#1f2b49"),e(f,"stroke","#0f1831"),e(f,"stroke-width","1"),e(h,"d","M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"),e(u,"id","c-cut-out-hexwhole"),e(c,"class","fixed w-[4rem]"),e(c,"width",200),e(c,"height",200),e(c,"viewBox","0 0 24 24"),e(o,"class","w-[4rem] h-[4rem] flex items-center justify-center -ml-8 mb-14"),e(_,"class",D="fas fa-user-slash fa-sm z-10 "+(t[2]&&t[2].seatbelt?"text-[#00FF47]":"text-[#D72626] animate-pulse")),e(Z,"d","M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"),e(Z,"fill","#1f2b49"),e(Z,"stroke","#0f1831"),e(Z,"stroke-width","1"),e(N,"d","M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"),e(F,"id","c-cut-out-hexwhole"),e(A,"class","fixed w-[4rem]"),e(A,"width",200),e(A,"height",200),e(A,"viewBox","0 0 24 24"),e(g,"class","w-[4rem] h-[4rem] flex items-center justify-center -ml-8"),e(n,"class","flex items-end -mr-4"),e(R,"id","Line 13"),e(R,"x1","72.5"),e(R,"x2","72.5"),e(R,"y2","9.87968"),e(R,"stroke","#D8D8D8"),e(q,"id","Line 20"),e(q,"y1","-0.5"),e(q,"x2","9.75899"),e(q,"y2","-0.5"),e(q,"transform","matrix(-0.747306 0.664479 -0.648193 -0.761476 31.293 120)"),e(q,"stroke","#D8D8D8"),e(O,"id","Line 21"),e(O,"y1","-0.5"),e(O,"x2","9.70043"),e(O,"y2","-0.5"),e(O,"transform","matrix(-0.914853 0.403787 -0.389219 -0.921145 16 100)"),e(O,"stroke","#D8D8D8"),e(G,"id","Line 22"),e(G,"opacity","0.9"),e(G,"y1","-0.5"),e(G,"x2","9.66663"),e(G,"y2","-0.5"),e(G,"transform","matrix(-0.999998 0.00217205 -0.00207939 -0.999998 9.6665 75)"),e(G,"stroke","#D8D8D8"),e(I,"id","Line 23"),e(I,"y1","-0.5"),e(I,"x2","9.69258"),e(I,"y2","-0.5"),e(I,"transform","matrix(-0.935238 -0.354019 0.340703 -0.940171 13.0649 52.4314)"),e(I,"stroke","#D8D8D8"),e(M,"id","Line 24"),e(M,"y1","-0.5"),e(M,"x2","9.77893"),e(M,"y2","-0.5"),e(M,"transform","matrix(-0.681736 -0.731598 0.716583 -0.697502 29.2002 27.1543)"),e(M,"stroke","#D8D8D8"),e(Y,"id","Line 25"),e(Y,"y1","-0.5"),e(Y,"x2","9.84811"),e(Y,"y2","-0.5"),e(Y,"transform","matrix(-0.379599 -0.925151 0.919137 -0.393938 48.6001 14.6475)"),e(Y,"stroke","#D8D8D8"),e(J,"id","Line 26"),e(J,"y1","-0.5"),e(J,"x2","9.75899"),e(J,"y2","-0.5"),e(J,"transform","matrix(0.747306 0.664479 0.648193 -0.761476 113.307 119.463)"),e(J,"stroke","#D8D8D8"),e(ee,"id","Line 27"),e(ee,"y1","-0.5"),e(ee,"x2","9.70043"),e(ee,"y2","-0.5"),e(ee,"transform","matrix(0.914853 0.403787 0.389219 -0.921145 128.6 99.4634)"),e(ee,"stroke","#D8D8D8"),e(T,"id","Line 28"),e(T,"opacity","0.9"),e(T,"y1","-0.5"),e(T,"x2","9.66663"),e(T,"y2","-0.5"),e(T,"transform","matrix(0.999998 0.00217205 0.00207939 -0.999998 134.934 74.4634)"),e(T,"stroke","#D8D8D8"),e(W,"id","Line 29"),e(W,"y1","-0.5"),e(W,"x2","9.69258"),e(W,"y2","-0.5"),e(W,"transform","matrix(0.935238 -0.354019 -0.340703 -0.940171 131.535 51.8949)"),e(W,"stroke","#D8D8D8"),e(te,"id","Line 30"),e(te,"y1","-0.5"),e(te,"x2","9.77893"),e(te,"y2","-0.5"),e(te,"transform","matrix(0.681736 -0.731598 -0.716583 -0.697502 115.4 26.6178)"),e(te,"stroke","#D8D8D8"),e(H,"id","Line 31"),e(H,"y1","-0.5"),e(H,"x2","9.84811"),e(H,"y2","-0.5"),e(H,"transform","matrix(0.379599 -0.925151 -0.919137 -0.393938 96 14.111)"),e(H,"stroke","#D8D8D8"),e(V,"id","Rev Lines"),e(E,"class","w-[15rem] h-[15rem] -mt-[1.7rem]"),e(E,"xmlns","http://www.w3.org/2000/svg"),e(E,"width","145"),e(E,"height","128"),e(E,"viewBox","0 0 145 128"),e(E,"fill","none"),e(ye,"class","bg-[#00D1FF] w-[0.15rem] h-[35%]"),e(K,"class","needle absolute w-[0.2rem] h-[7.2rem] -mt-[7.3rem] transition-all svelte-u36co9"),e(K,"style",ie=t[3](t[0])),e(fe,"class","absolute z-10 font-medium text-[2.2rem] -mt-[7.5rem]"),e(re,"class","absolute z-10 font-medium text-[5rem] -mt-4"),e(oe,"class","absolute z-10 font-medium text-[1,5rem] mt-[5.5rem]"),e(le,"class","fas fa-gas-pump fa-sm absolute mt-[11rem]"),e(se,"class","h-full bg-[#00D1FF] rounded-full"),_e(se,"width",(t[2]?t[2].fuel:0)+"%"),e(Le,"class","absolute w-[7rem] h-[0.54rem] border-2 border-primary bg-secondary mt-[16rem] rounded-full"),e(v,"class","w-[15rem] h-[15rem] bg-secondary rounded-full border-[3px] border-primary flex items-center justify-center"),e(i,"class","mb-[4rem] mr-[2.5rem] flex "+(Je?"":"hidden"))},m(w,k){C(w,i,k),s(i,n),z&&z.m(n,null),s(n,r),s(n,o),s(o,l),s(o,a),s(o,c),s(c,d),s(d,f),s(d,u),s(u,h),s(n,y),s(n,g),s(g,_),s(g,L),s(g,A),s(A,j),s(j,Z),s(j,F),s(F,N),s(i,Q),s(i,S),P&&P.m(S,null),s(S,ne),s(S,v),s(v,E),s(E,V),s(V,R),s(V,q),s(V,O),s(V,G),s(V,I),s(V,M),s(V,Y),s(V,J),s(V,ee),s(V,T),s(V,W),s(V,te),s(V,H),s(v,be),s(v,K),s(K,ye),s(v,X),s(v,fe),s(fe,Ve),s(v,ve),s(v,re),s(re,Me),s(v,xe),s(v,oe),s(v,Ee),s(v,le),s(v,$e),s(v,Le),s(Le,se)},p(w,[k]){w[2]&&w[2].nosActive?z?z.p(w,k):(z=pt(w),z.c(),z.m(n,r)):z&&(z.d(1),z=null),k&4&&_e(l,"color",gt(w[2]?w[2].engine:0)),k&4&&D!==(D="fas fa-user-slash fa-sm z-10 "+(w[2]&&w[2].seatbelt?"text-[#00FF47]":"text-[#D72626] animate-pulse"))&&e(_,"class",D),w[2]&&w[2].HasTurbo?P?P.p(w,k):(P=wt(w),P.c(),P.m(S,ne)):P&&(P.d(1),P=null),k&1&&ie!==(ie=w[3](w[0]))&&e(K,"style",ie),k&4&&ue!==(ue=bt(w[2]&&w[2].speed)+"")&&Xe(Ve,ue),k&4&&de!==(de=(w[2]&&w[2].speed)+"")&&Xe(Me,de),k&4&&_e(se,"width",(w[2]?w[2].fuel:0)+"%")},i:U,o:U,d(w){w&&$(i),z&&z.d(),P&&P.d()}}}const Te=130;function gt(t){return t>50?"#00FF47":t>20?"#D77B26":"#D72626"}function bt(t){return t<30?1:t<70?2:t<100?3:t<120?4:t<160?5:6}function si(t,i,n){let r;ae(t,tt,f=>n(2,r=f));let o=0,l=0;const a=f=>`transform: rotate(${f}deg);`,c=()=>{const f=(r&&r.speed/120)*160-140;n(0,o=Math.max(Math.min(f,Te),-Te))},d=()=>{const f=(r&&r.turbo/250)*160-140;n(1,l=Math.max(Math.min(f,Te),-Te))};return qe(()=>{c(),d()}),Ht(()=>{c(),d()}),[o,l,r,a]}class ai extends we{constructor(i){super(),pe(this,i,si,li,ce,{})}}function yt(t){let i,n,r,o,l,a,c,d,f,u,h,y,g,_;return{c(){i=p("div"),n=p("div"),r=p("div"),o=p("div"),o.textContent="Options",l=b(),a=p("button"),a.innerHTML='<i class="fas fa-xmark"></i>',c=b(),d=p("div"),f=p("div"),u=p("p"),u.textContent="Toggle Hud",h=b(),y=p("button"),y.textContent="Toggle",e(o,"class","h-[10%] p-4 text-[2rem]"),e(a,"class","h-[10%] w-[10%] p-4 text-[2rem] hover:bg-red-500"),e(r,"class","flex justify-between bg-[#242A39]"),e(u,"class","m-4"),e(y,"class","bg-[#242A39] p-3 px-8 rounded-2xl"),e(f,"class","flex mt-4"),e(d,"class","h-[90%]"),e(n,"class","absolute w-[70rem] h-[50rem] bg-[#2C3E50] bg-opacity-95 font-medium z-50"),e(i,"class","h-screen w-screen flex items-center justify-center")},m(D,L){C(D,i,L),s(i,n),s(n,r),s(r,o),s(r,l),s(r,a),s(n,c),s(n,d),s(d,f),s(f,u),s(f,h),s(f,y),g||(_=[Oe(a,"click",t[1]),Oe(y,"click",t[2])],g=!0)},p:U,d(D){D&&$(i),g=!1,je(_)}}}function ci(t){let i,n=t[0]&&yt(t);return{c(){n&&n.c(),i=Ue()},m(r,o){n&&n.m(r,o),C(r,i,o)},p(r,[o]){r[0]?n?n.p(r,o):(n=yt(r),n.c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null)},i:U,o:U,d(r){n&&n.d(r),r&&$(i)}}}function fi(t,i,n){let r;return ae(t,Ae,a=>n(0,r=a)),qe(()=>{const a=c=>{["Escape"].includes(c.code)&&Re("hideMenu")};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)}),[r,()=>{Re("hideMenu")},()=>{Re("ToggleHUD")}]}class ui extends we{constructor(i){super(),pe(this,i,fi,ci,ce,{})}}function vt(t){let i,n;return i=new ai({}),{c(){ke(i.$$.fragment)},m(r,o){me(i,r,o),n=!0},i(r){n||(x(i.$$.fragment,r),n=!0)},o(r){B(i.$$.fragment,r),n=!1},d(r){he(i,r)}}}function di(t){let i,n,r,o;n=new oi({});let l=t[0]&&vt();return{c(){i=p("div"),ke(n.$$.fragment),r=b(),l&&l.c(),e(i,"class","w-screen h-screen flex items-end justify-between")},m(a,c){C(a,i,c),me(n,i,null),s(i,r),l&&l.m(i,null),o=!0},p(a,[c]){a[0]?l?c&1&&x(l,1):(l=vt(),l.c(),x(l,1),l.m(i,null)):l&&(Ge(),B(l,1,1,()=>{l=null}),Ye())},i(a){o||(x(n.$$.fragment,a),x(l),o=!0)},o(a){B(n.$$.fragment,a),B(l),o=!1},d(a){a&&$(i),he(n),l&&l.d()}}}function mi(t,i,n){let r;return ae(t,Je,o=>n(0,r=o)),[r]}class hi extends we{constructor(i){super(),pe(this,i,mi,di,ce,{})}}function _t(t){let i,n;const r=t[2].default,o=$t(r,t,t[1],null);return{c(){i=p("main"),o&&o.c(),e(i,"class","svelte-1fnr7mh")},m(l,a){C(l,i,a),o&&o.m(i,null),n=!0},p(l,a){o&&o.p&&(!n||a&2)&&Dt(o,r,l,l[1],n?Ct(r,l[1],a,null):zt(l[1]),null)},i(l){n||(x(o,l),n=!0)},o(l){B(o,l),n=!1},d(l){l&&$(i),o&&o.d(l)}}}function pi(t){let i,n,r=t[0]&&_t(t);return{c(){r&&r.c(),i=Ue()},m(o,l){r&&r.m(o,l),C(o,i,l),n=!0},p(o,[l]){o[0]?r?(r.p(o,l),l&1&&x(r,1)):(r=_t(o),r.c(),x(r,1),r.m(i.parentNode,i)):r&&(Ge(),B(r,1,1,()=>{r=null}),Ye())},i(o){n||(x(r),n=!0)},o(o){B(r),n=!1},d(o){r&&r.d(o),o&&$(i)}}}function wi(t,i,n){let{$$slots:r={},$$scope:o}=i,l;return Ae.subscribe(a=>{n(0,l=a)}),Ce("setVisibleMenu",a=>{Ae.set(a)}),qe(()=>{const a=c=>{l&&["Escape"].includes(c.code)&&(Re("hideMenu"),Ae.set(!1))};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)}),t.$$set=a=>{"$$scope"in a&&n(1,o=a.$$scope)},[l,o,r]}class gi extends we{constructor(i){super(),pe(this,i,wi,pi,ce,{})}}function bi(t){let i,n;return i=new hi({}),{c(){ke(i.$$.fragment)},m(r,o){me(i,r,o),n=!0},i(r){n||(x(i.$$.fragment,r),n=!0)},o(r){B(i.$$.fragment,r),n=!1},d(r){he(i,r)}}}function yi(t){let i,n;return i=new ui({}),{c(){ke(i.$$.fragment)},m(r,o){me(i,r,o),n=!0},i(r){n||(x(i.$$.fragment,r),n=!0)},o(r){B(i.$$.fragment,r),n=!1},d(r){he(i,r)}}}function kt(t){let i,n,r,o;return i=new ei({}),{c(){ke(i.$$.fragment),n=b(),r=p("body"),e(r,"class","bg-neutral-900")},m(l,a){me(i,l,a),C(l,n,a),C(l,r,a),o=!0},i(l){o||(x(i.$$.fragment,l),o=!0)},o(l){B(i.$$.fragment,l),o=!1},d(l){he(i,l),l&&$(n),l&&$(r)}}}function vi(t){let i,n,r,o,l,a,c,d;i=new Kt({props:{$$slots:{default:[bi]},$$scope:{ctx:t}}}),r=new gi({props:{$$slots:{default:[yi]},$$scope:{ctx:t}}}),l=new ii({});let f=t[0]&&kt();return{c(){ke(i.$$.fragment),n=b(),ke(r.$$.fragment),o=b(),ke(l.$$.fragment),a=b(),f&&f.c(),c=Ue()},m(u,h){me(i,u,h),C(u,n,h),me(r,u,h),C(u,o,h),me(l,u,h),C(u,a,h),f&&f.m(u,h),C(u,c,h),d=!0},p(u,[h]){const y={};h&4&&(y.$$scope={dirty:h,ctx:u}),i.$set(y);const g={};h&4&&(g.$$scope={dirty:h,ctx:u}),r.$set(g),u[0]?f?h&1&&x(f,1):(f=kt(),f.c(),x(f,1),f.m(c.parentNode,c)):f&&(Ge(),B(f,1,1,()=>{f=null}),Ye())},i(u){d||(x(i.$$.fragment,u),x(r.$$.fragment,u),x(l.$$.fragment,u),x(f),d=!0)},o(u){B(i.$$.fragment,u),B(r.$$.fragment,u),B(l.$$.fragment,u),B(f),d=!1},d(u){he(i,u),u&&$(n),he(r,u),u&&$(o),he(l,u),u&&$(a),f&&f.d(u),u&&$(c)}}}function _i(t,i,n){let r,o;return ae(t,et,l=>n(1,r=l)),ae(t,ot,l=>n(0,o=l)),Vt(et,r="ap-hud",r),[o]}class ki extends we{constructor(i){super(),pe(this,i,_i,vi,ce,{})}}new ki({target:document.getElementById("app")});
