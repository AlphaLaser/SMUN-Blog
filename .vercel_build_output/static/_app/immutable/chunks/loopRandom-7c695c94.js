import{w as a}from"./writeAndUnwriteText-38659c0c.js";import{r,a as m,m as l}from"./animationSetup-e4d2c2a6.js";import"./writeEffect-30d8b867.js";import"./unwriteEffect-eb3e8106.js";import"./index-fb74600a.js";let t=[];const c=e=>{for(;;){const n=r(0,e.length),o=typeof t=="number"&&n!==t,i=Array.isArray(t)&&!t.includes(n);if(e.length===1||i||o)return o&&(t=[]),t.push(n),e[n];t.length===e.length&&(t=t.pop())}},T=async(e,n)=>{const{options:o,elements:i}=m(e,n);for(;;){l(e);const s=c(i);await a(s,o)}};export{T as default};