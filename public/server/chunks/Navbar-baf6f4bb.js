import { c as create_ssr_component } from "./index-f1aaf3e0.js";
var Navbar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "body{margin-top:0px}.unca-logo.svelte-153twbu{height:100px;width:auto}p.svelte-153twbu{font-size:65px;letter-spacing:5px}hr.svelte-153twbu{border-top:1px solid darkslategray}")();
const css = {
  code: "body{margin-top:0px}.unca-logo.svelte-153twbu{height:100px;width:auto}p.svelte-153twbu{font-size:65px;letter-spacing:5px}hr.svelte-153twbu{border-top:1px solid darkslategray}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"text-gray-600 body-font"}"><div class="${"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"}"><a class="${"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"}"><img src="${"unca.png"}" alt="${"unca_logo_lol"}" class="${"unca-logo svelte-153twbu"}"></a>
      <nav class="${"md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"}"><p class="${"mr-20 text-sky-900 svelte-153twbu"}">THE EFFUSION</p></nav></div></header>

  <center><hr width="${"97%"}" class="${"svelte-153twbu"}"></center>

  <header class="${"text-gray-600 body-font"}"><div class="${"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"}"><a class="${"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"}"></a>
      <nav class="${"md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"}"><a class="${"mr-6 text-sky-900 text-xl"}" href="${"/"}">Home</a>
        <a class="${"mr-6 text-sky-900 text-xl"}" href="${"/committees"}">Committees</a>
        <a class="${"mr-6 hover:text-sky-900 text-xl"}" href="${"/team"}">Team</a></nav></div></header>`;
});
export { Navbar as N };
