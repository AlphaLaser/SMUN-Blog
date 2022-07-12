import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index-f1aaf3e0.js";
import { N as Navbar } from "../../chunks/Navbar-baf6f4bb.js";
const Team_block = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "Rick Astley" } = $$props;
  let { position = "Singer" } = $$props;
  let { intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.intro === void 0 && $$bindings.intro && intro !== void 0)
    $$bindings.intro(intro);
  return `<div class="${"p-4 lg:w-1/2"}"><div class="${"h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"}"><img alt="${"team"}" class="${"flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"}" src="${"https://dummyimage.com/204x204"}">
      <div class="${"flex-grow sm:pl-8"}"><h2 class="${"title-font font-medium text-lg text-gray-900"}">${escape(name)}</h2>
        <h3 class="${"text-gray-500 mb-3"}">${escape(position)}</h3>
        <p class="${"mb-4"}">${escape(intro)}</p>
        <span class="${"inline-flex"}"><a class="${"text-gray-500"}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><path d="${"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"}"></path></svg></a>
          <a class="${"ml-2 text-gray-500"}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><path d="${"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"}"></path></svg></a>
          <a class="${"ml-2 text-gray-500"}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><path d="${"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"}"></path></svg></a></span></div></div></div>`;
});
const Team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<section class="${"text-gray-600 body-font"}"><div class="${"container px-5 py-24 mx-auto"}"><div class="${"flex flex-col text-center w-full mb-20"}"><h1 class="${"text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest"}">OUR TEAM</h1>
        <p class="${"lg:w-2/3 mx-auto leading-relaxed text-base"}">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&#39;t heard of them.</p></div>
      <div class="${"flex flex-wrap -m-4"}">${validate_component(Team_block, "TeamBlock").$$render($$result, {
    name: "Gouri Mehra",
    position: "Editor-in-Chief"
  }, {}, {})}
${validate_component(Team_block, "TeamBlock").$$render($$result, {
    name: "Chirag Seghal",
    position: "Head of Journalism"
  }, {}, {})}
${validate_component(Team_block, "TeamBlock").$$render($$result, {
    name: "Mansi Mahajan",
    position: "Deputy Editor"
  }, {}, {})}
${validate_component(Team_block, "TeamBlock").$$render($$result, {
    name: "Amritaansh Srivastava",
    position: "Director of Photography"
  }, {}, {})}
${validate_component(Team_block, "TeamBlock").$$render($$result, {
    name: "Isha Kanudia",
    position: "Director of Photography"
  }, {}, {})}
${validate_component(Team_block, "TeamBlock").$$render($$result, {
    name: "Navya Ariqa Singh",
    position: "Head of Cartoonists"
  }, {}, {})}
${validate_component(Team_block, "TeamBlock").$$render($$result, {
    name: "Alaina Aneja",
    position: "Additional Editor"
  }, {}, {})}
${validate_component(Team_block, "TeamBlock").$$render($$result, {
    name: "Anvadya Khatri",
    position: "Additional Editor"
  }, {}, {})}
${validate_component(Team_block, "TeamBlock").$$render($$result, {
    name: "Dhruv Mishra",
    position: "Additional Editor"
  }, {}, {})}
${validate_component(Team_block, "TeamBlock").$$render($$result, {
    name: "Adya Choudhury",
    position: "Additional Director of Photography"
  }, {}, {})}
${validate_component(Team_block, "TeamBlock").$$render($$result, {
    name: "Reeva Dahiya",
    position: "Additional Director of Photography"
  }, {}, {})}
${validate_component(Team_block, "TeamBlock").$$render($$result, {
    name: "Shreya Mishra",
    position: "Additional Director of Cartoonists"
  }, {}, {})}
${validate_component(Team_block, "TeamBlock").$$render($$result, {
    name: "Hrishitaa Satish",
    position: "Additional Director of Cartoonists"
  }, {}, {})}</div></div></section>`;
});
export { Team as default };
