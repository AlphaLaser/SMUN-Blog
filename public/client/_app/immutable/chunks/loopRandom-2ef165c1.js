import{w as a}from"./writeAndUnwriteText-a43de27f.js";import{r,a as m,m as l}from"./animationSetup-89080e9f.js";import"./writeEffect-9e66fc00.js";import"./unwriteEffect-a79f6449.js";import"./index-354bd306.js";let t=[];const c=e=>{for(;;){const n=r(0,e.length),o=typeof t=="number"&&n!==t,i=Array.isArray(t)&&!t.includes(n);if(e.length===1||i||o)return o&&(t=[]),t.push(n),e[n];t.length===e.length&&(t=t.pop())}},T=async(e,n)=>{const{options:o,elements:i}=m(e,n);for(;;){l(e);const s=c(i);await a(s,o)}};export{T as default};