var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2835083a = require("../../chunks/index-2835083a.js");
var Typewriter_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "@-webkit-keyframes svelte-58umx0-cursorFade{0%,100%{opacity:1}50%{opacity:0}}@keyframes svelte-58umx0-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-58umx0 *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-58umx0 .finished-typing::after{content:none}.cursor.svelte-58umx0 .typing::after{content:'';width:var(--cursor-width, 1ch);height:2ch;display:inline-block;vertical-align:text-top;background-color:var(--cursor-color, black);-webkit-animation:svelte-58umx0-cursorFade 1.25s infinite;animation:svelte-58umx0-cursorFade 1.25s infinite}")();
const Card = (0, import_index_2835083a.c)(($$result, $$props, $$bindings, slots) => {
  let { content = "Dummy content" } = $$props;
  let { image_link = "https://mdbootstrap.com/img/new/standard/nature/182.jpg" } = $$props;
  let { title = "Dummy Title" } = $$props;
  let { blog_link = "#" } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.image_link === void 0 && $$bindings.image_link && image_link !== void 0)
    $$bindings.image_link(image_link);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.blog_link === void 0 && $$bindings.blog_link && blog_link !== void 0)
    $$bindings.blog_link(blog_link);
  return `<div class="${"flex justify-center"}"><div class="${"rounded-lg shadow-lg bg-white max-w-sm"}"><a href="${"#!"}" data-mdb-ripple="${"true"}" data-mdb-ripple-color="${"light"}"><img class="${"rounded-t-lg"}"${(0, import_index_2835083a.a)("src", image_link, 0)} alt="${"Card Image"}"></a>
      <div class="${"p-6"}"><h5 class="${"text-gray-900 text-xl font-medium mb-2"}">${(0, import_index_2835083a.e)(title)}</h5>
        <p class="${"text-gray-700 text-base mb-4"}">${(0, import_index_2835083a.e)(content)}</p>
        <a${(0, import_index_2835083a.a)("href", blog_link, 0)}><button type="${"button"}" class="${"inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"}">Read More</button></a></div></div></div>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Poppins&display=swap');\nbody{font-family:'Poppins', sans-serif}\n.hero.svelte-1ueaw9m{background-image:url('/graph.jpg');height:100vh}\nh1.svelte-1ueaw9m{font-family:'Cabin Sketch', cursive;font-size:100px;color:orange}\nh2.svelte-1ueaw9m{font-family:'Cabin Sketch', cursive;font-size:40px;color:orange}\n.blogs.svelte-1ueaw9m{background-color:#DADADA;height:100vh;padding-top:5%}\n.heading.svelte-1ueaw9m{height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;text-align:center}")();
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Poppins&display=swap');body{font-family:'Poppins', sans-serif}.hero.svelte-1ueaw9m{background-image:url('/graph.jpg');height:100vh}h1.svelte-1ueaw9m{font-family:'Cabin Sketch', cursive;font-size:100px;color:orange}h2.svelte-1ueaw9m{font-family:'Cabin Sketch', cursive;font-size:40px;color:orange}.blogs.svelte-1ueaw9m{background-color:#DADADA;height:100vh;padding-top:5%}.heading.svelte-1ueaw9m{height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;text-align:center}",
  map: null
};
const Routes = (0, import_index_2835083a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"hero svelte-1ueaw9m"}"><div class="${"heading svelte-1ueaw9m"}"><h1 class="${"svelte-1ueaw9m"}">Sanskriti MUN
            </h1>
            <h2 class="${"svelte-1ueaw9m"}">Conference Log
            </h2></div></section>


<section class="${"blogs svelte-1ueaw9m"}"><div class="${"grid lg:grid-cols-3"}">${(0, import_index_2835083a.v)(Card, "Card").$$render($$result, { blog_link: "/blog_temp" }, {}, {})}
        ${(0, import_index_2835083a.v)(Card, "Card").$$render($$result, {}, {}, {})}  
        ${(0, import_index_2835083a.v)(Card, "Card").$$render($$result, {}, {}, {})}</div></section>`;
});
