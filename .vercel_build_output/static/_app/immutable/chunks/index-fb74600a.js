function $(){}function Q(t,e){for(const n in e)t[n]=e[n];return t}function R(t){return t&&typeof t=="object"&&typeof t.then=="function"}function D(t){return t()}function O(){return Object.create(null)}function g(t){t.forEach(D)}function L(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function yt(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function U(t){return Object.keys(t).length===0}function gt(t,e,n,r){if(t){const c=z(t,e,n,r);return t[0](c)}}function z(t,e,n,r){return t[1]&&r?Q(n.ctx.slice(),t[1](r(e))):n.ctx}function xt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const s=[],l=Math.max(e.dirty.length,c.length);for(let o=0;o<l;o+=1)s[o]=e.dirty[o]|c[o];return s}return e.dirty|c}return e.dirty}function bt(t,e,n,r,c,s){if(c){const l=z(e,n,r,s);t.p(l,c)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function vt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function kt(t){return t&&L(t.destroy)?t.destroy:$}const B=typeof window!="undefined";let $t=B?()=>window.performance.now():()=>Date.now(),F=B?t=>requestAnimationFrame(t):$;const m=new Set;function H(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),m.size!==0&&F(H)}function Et(t){let e;return m.size===0&&F(H),{promise:new Promise(n=>{m.add(e={c:t,f:n})}),abort(){m.delete(e)}}}let E=!1;function V(){E=!0}function X(){E=!1}function Y(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let i=0;i<e.length;i++){const u=e[i].claim_order,f=(c>0&&e[n[c]].claim_order<=u?c+1:Y(1,c,d=>e[n[d]].claim_order,u))-1;r[i]=n[f]+1;const a=f+1;n[a]=i,c=Math.max(a,c)}const s=[],l=[];let o=e.length-1;for(let i=n[c]+1;i!=0;i=r[i-1]){for(s.push(e[i-1]);o>=i;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);s.reverse(),l.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<l.length;i++){for(;u<s.length&&l[i].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(l[i],f)}}function tt(t,e){if(E){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){E&&!n?tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function et(t){t.parentNode.removeChild(t)}function nt(t){return document.createElement(t)}function rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function At(){return S(" ")}function Nt(){return S("")}function St(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:ct(t,r,e[r])}function it(t){return Array.from(t.childNodes)}function lt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,r,c=!1){lt(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const i=n(o);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const i=n(o);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function W(t,e,n,r){return I(t,c=>c.nodeName===e,c=>{const s=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];n[o.name]||s.push(o.name)}s.forEach(l=>c.removeAttribute(l))},()=>r(e))}function Pt(t,e,n){return W(t,e,n,nt)}function Mt(t,e,n){return W(t,e,n,rt)}function st(t,e){return I(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>S(e),!0)}function Ot(t){return st(t," ")}function Tt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function qt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Dt(t,e,n){t.classList[n?"add":"remove"](e)}function ot(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,r,e),c}let y;function _(t){y=t}function x(){if(!y)throw new Error("Function called outside component initialization");return y}function Lt(t){x().$$.on_mount.push(t)}function zt(t){x().$$.after_update.push(t)}function Bt(){const t=x();return(e,n,{cancelable:r=!1}={})=>{const c=t.$$.callbacks[e];if(c){const s=ot(e,n,{cancelable:r});return c.slice().forEach(l=>{l.call(t,s)}),!s.defaultPrevented}return!0}}function Ft(t,e){return x().$$.context.set(t,e),e}const p=[],T=[],v=[],q=[],G=Promise.resolve();let A=!1;function J(){A||(A=!0,G.then(C))}function Ht(){return J(),G}function N(t){v.push(t)}const j=new Set;let w=0;function C(){const t=y;do{for(;w<p.length;){const e=p[w];w++,_(e),ut(e.$$)}for(_(null),p.length=0,w=0;T.length;)T.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];j.has(n)||(j.add(n),n())}v.length=0}while(p.length);for(;q.length;)q.pop()();A=!1,j.clear(),_(t)}function ut(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const k=new Set;let h;function at(){h={r:0,c:[],p:h}}function ft(){h.r||g(h.c),h=h.p}function K(t,e){t&&t.i&&(k.delete(t),t.i(e))}function _t(t,e,n,r){if(t&&t.o){if(k.has(t))return;k.add(t),h.c.push(()=>{k.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function It(t,e){const n=e.token={};function r(c,s,l,o){if(e.token!==n)return;e.resolved=o;let i=e.ctx;l!==void 0&&(i=i.slice(),i[l]=o);const u=c&&(e.current=c)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==s&&a&&(at(),_t(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),ft())}):e.block.d(1),u.c(),K(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[s]=u),f&&C()}if(R(t)){const c=x();if(t.then(s=>{_(c),r(e.then,1,e.value,s),_(null)},s=>{if(_(c),r(e.catch,2,e.error,s),_(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Wt(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function Gt(t,e){const n={},r={},c={$$scope:1};let s=t.length;for(;s--;){const l=t[s],o=e[s];if(o){for(const i in l)i in o||(r[i]=1);for(const i in o)c[i]||(n[i]=o[i],c[i]=1);t[s]=o}else for(const i in l)c[i]=1}for(const l in r)l in n||(n[l]=void 0);return n}function Jt(t){return typeof t=="object"&&t!==null?t:{}}function Kt(t){t&&t.c()}function Qt(t,e){t&&t.l(e)}function dt(t,e,n,r){const{fragment:c,on_mount:s,on_destroy:l,after_update:o}=t.$$;c&&c.m(e,n),r||N(()=>{const i=s.map(D).filter(L);l?l.push(...i):g(i),t.$$.on_mount=[]}),o.forEach(N)}function ht(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(p.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Rt(t,e,n,r,c,s,l,o=[-1]){const i=y;_(t);const u=t.$$={fragment:null,ctx:null,props:s,update:$,not_equal:c,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:O(),dirty:o,skip_bound:!1,root:e.target||i.$$.root};l&&l(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,d,...P)=>{const M=P.length?P[0]:d;return u.ctx&&c(u.ctx[a],u.ctx[a]=M)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](M),f&&mt(t,a)),d}):[],u.update(),f=!0,g(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){V();const a=it(e.target);u.fragment&&u.fragment.l(a),a.forEach(et)}else u.fragment&&u.fragment.c();e.intro&&K(t.$$.fragment),dt(t,e.target,e.anchor,e.customElement),X(),C()}_(i)}class Ut{$destroy(){ht(this,1),this.$destroy=$}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!U(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Gt as A,Jt as B,ht as C,Q as D,Ht as E,gt as F,bt as G,wt as H,xt as I,tt as J,yt as K,rt as L,Mt as M,C as N,vt as O,It as P,Wt as Q,Ct as R,Ut as S,Dt as T,kt as U,L as V,$t as W,Et as X,St as Y,Bt as Z,it as a,ct as b,Pt as c,et as d,nt as e,qt as f,jt as g,st as h,Rt as i,Tt as j,At as k,Nt as l,Ot as m,$ as n,at as o,_t as p,ft as q,K as r,pt as s,S as t,Ft as u,zt as v,Lt as w,Kt as x,Qt as y,dt as z};
