import { c as create_ssr_component, i as is_promise, n as noop, a as is_void, v as validate_component, b as add_attribute, e as escape } from "../../chunks/index-f1aaf3e0.js";
import { N as Navbar } from "../../chunks/Navbar-baf6f4bb.js";
var Typewriter_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "@-webkit-keyframes svelte-12nvf3j-cursorFade{0%,100%{opacity:1}50%{opacity:0}}@keyframes svelte-12nvf3j-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-12nvf3j *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-12nvf3j .finished-typing::after{content:none}.cursor.svelte-12nvf3j .typing::after{content:'';width:var(--cursor-width, 1ch);height:2ch;display:inline-block;vertical-align:text-top;background-color:var(--cursor-color, black);-webkit-animation:svelte-12nvf3j-cursorFade 1.25s infinite;animation:svelte-12nvf3j-cursorFade 1.25s infinite}")();
const css$4 = {
  code: "@keyframes svelte-12nvf3j-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-12nvf3j *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-12nvf3j .finished-typing::after{content:none}.cursor.svelte-12nvf3j .typing::after{content:'';width:var(--cursor-width, 1ch);height:2ch;display:inline-block;vertical-align:text-top;background-color:var(--cursor-color, black);animation:svelte-12nvf3j-cursorFade 1.25s infinite}",
  map: null
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLoopMode;
  let delayPromise;
  let { mode = "concurrent" } = $$props;
  let { interval = 30 } = $$props;
  let { cursor = true } = $$props;
  let { delay = 0 } = $$props;
  let { disabled = false } = $$props;
  let { element = "div" } = $$props;
  let { scrambleDuration = mode === "scramble" ? 3e3 : 0 } = $$props;
  let { scrambleSlowdown = mode === "scramble" ? true : false } = $$props;
  let { unwriteInterval = isLoopMode ? 30 : 0 } = $$props;
  let { wordInterval = isLoopMode ? 1500 : 0 } = $$props;
  const modes = {
    concurrent: () => import("../../chunks/concurrent-de94cd77.js"),
    cascade: () => import("../../chunks/cascade-47980b6a.js"),
    loop: () => import("../../chunks/loop-83f8632a.js"),
    loopOnce: () => import("../../chunks/loopOnce-eb0cd9da.js"),
    loopRandom: () => import("../../chunks/loopRandom-b0a18673.js"),
    scramble: () => import("../../chunks/scramble-11d5652c.js")
  };
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.scrambleDuration === void 0 && $$bindings.scrambleDuration && scrambleDuration !== void 0)
    $$bindings.scrambleDuration(scrambleDuration);
  if ($$props.scrambleSlowdown === void 0 && $$bindings.scrambleSlowdown && scrambleSlowdown !== void 0)
    $$bindings.scrambleSlowdown(scrambleSlowdown);
  if ($$props.unwriteInterval === void 0 && $$bindings.unwriteInterval && unwriteInterval !== void 0)
    $$bindings.unwriteInterval(unwriteInterval);
  if ($$props.wordInterval === void 0 && $$bindings.wordInterval && wordInterval !== void 0)
    $$bindings.wordInterval(wordInterval);
  $$result.css.add(css$4);
  isLoopMode = /^loop(Once|Random)?$/.test(mode);
  {
    if (!isLoopMode && (unwriteInterval || wordInterval)) {
      console.log(mode, unwriteInterval, wordInterval);
      console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' can only be used on loop mode");
    }
  }
  {
    if (mode !== "scramble" && (scrambleDuration || scrambleSlowdown))
      console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' can only be used on scramble mode");
  }
  delayPromise = () => new Promise((resolve) => setTimeout(() => resolve(delay), delay));
  return `

<noscript>${slots.default ? slots.default({}) : ``}</noscript>

${disabled ? `${slots.default ? slots.default({}) : ``}` : `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(delay2) {
      return `
            ${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(selectedMode) {
          return `
                ${((tag) => {
            return tag ? `<${element} class="${["typewriter-container svelte-12nvf3j", cursor ? "cursor" : ""].join(" ").trim()}">${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
          })(element)}
            `;
        }();
      }(modes[mode]())}
        `;
    }();
  }(delayPromise())}`}`;
});
var Intro_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".intro.svelte-2kzpfm{margin-left:20px;margin-right:20px}")();
const css$3 = {
  code: ".intro.svelte-2kzpfm{margin-left:20px;margin-right:20px}",
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"intro svelte-2kzpfm"}"><section class="${"text-gray-600 body-font"}"><div class="${"container mx-auto flex px-7 py-14 md:flex-row flex-col items-center"}"><div class="${"lg:flex-grow md:w-1/2 lg:pr-14 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"}"><h1 class="${"title-font sm:text-4xl text-3xl mb-4 font-medium text-sky-900"}">${validate_component(Typewriter, "Typewriter").$$render($$result, {}, {}, {
    default: () => {
      return `ABOUT THE BLOG
          `;
    }
  })}</h1>
        <p class="${"mb-8 text-base leading-relaxed"}">The Effusion, the official blog of the United Nations Correspondents&#39; Association is a manifestation of the talent this committee boasts of; the exceptional minds, pens, brushes and lenses. The blog serves as an archive that preserves each delegate&#39;s work while providing a guiding perspective to every participant at SMUN. We are also certain that reflecting on one&#39;s work will provide as much insight as it will provide opportunities for improvement.</p>
        <div class="${"flex justify-center"}"></div></div>
      <div class="${"lg:max-w-lg lg:w-full md:w-1/2 w-5/6"}"><img class="${"object-cover object-center rounded"}" alt="${"hero"}" src="${"https://dummyimage.com/500x400"}"></div></div></section></div>`;
});
var IconBase_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "svg.svelte-c8tyih{stroke:currentColor;fill:currentColor;stroke-width:0;width:100%;height:auto;max-height:100%}")();
const css$2 = {
  code: "svg.svelte-c8tyih{stroke:currentColor;fill:currentColor;stroke-width:0;width:100%;height:auto;max-height:100%}",
  map: null
};
const IconBase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = null } = $$props;
  let { viewBox } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  $$result.css.add(css$2);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("viewBox", viewBox, 0)} class="${"svelte-c8tyih"}">${title ? `<title>${escape(title)}</title>` : ``}${slots.default ? slots.default({}) : ``}</svg>`;
});
const IoIosArrowDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}"></path>`;
    }
  })}`;
});
var Hero_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".hero.svelte-1aucdms{height:100vh;overflow:hidden}.icon.svelte-1aucdms{position:relative;bottom:50px;color:#4B5563;width:40px;height:40px;cursor:pointer}")();
const css$1 = {
  code: ".hero.svelte-1aucdms{height:100vh;overflow:hidden}.icon.svelte-1aucdms{position:relative;bottom:50px;color:#4B5563;width:40px;height:40px;cursor:pointer}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="${"hero svelte-1aucdms"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
    ${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})}
    <center><div class="${"icon svelte-1aucdms"}">${validate_component(IoIosArrowDown, "IoIosArrowDown").$$render($$result, {}, {}, {})}</div></center></section>`;
});
const Infobox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"text-gray-600 body-font"}"><div class="${"container px-5 py-24 mx-auto"}"><div class="${"flex flex-col"}"><div class="${"h-1 bg-gray-200 rounded overflow-hidden"}"><div class="${"w-24 h-full bg-sky-900"}"></div></div>
        <div class="${"flex flex-wrap sm:flex-row flex-col py-6 mb-12"}"><h1 class="${"sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0"}">Space The Final Frontier</h1>
          <p class="${"sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"}">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p></div></div>
      <div class="${"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4"}"><div class="${"p-4 md:w-1/3 sm:mb-0 mb-6"}"><div class="${"rounded-lg h-64 overflow-hidden"}"><img alt="${"content"}" class="${"object-cover object-center h-full w-full"}" src="${"journalism.jpeg"}"></div>
          <h2 class="${"text-xl font-medium title-font text-gray-900 mt-5"}">Journalism</h2>
          <p class="${"text-base leading-relaxed mt-2"}">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
          <a class="${"text-sky-900 inline-flex items-center mt-3"}">Read Blogs
            <svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-4 h-4 ml-2"}" viewBox="${"0 0 24 24"}"><path d="${"M5 12h14M12 5l7 7-7 7"}"></path></svg></a></div>
        <div class="${"p-4 md:w-1/3 sm:mb-0 mb-6"}"><div class="${"rounded-lg h-64 overflow-hidden"}"><img alt="${"content"}" class="${"object-cover object-center h-full w-full"}" src="${"cartoonist.jpeg"}"></div>
          <h2 class="${"text-xl font-medium title-font text-gray-900 mt-5"}">Cartoonists</h2>
          <p class="${"text-base leading-relaxed mt-2"}">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
          <a class="${"text-sky-900 inline-flex items-center mt-3"}">View Cartoons
            <svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-4 h-4 ml-2"}" viewBox="${"0 0 24 24"}"><path d="${"M5 12h14M12 5l7 7-7 7"}"></path></svg></a></div>
        <div class="${"p-4 md:w-1/3 sm:mb-0 mb-6"}"><div class="${"rounded-lg h-64 overflow-hidden"}"><img alt="${"content"}" class="${"object-cover object-center h-full w-full"}" src="${"photography.jpeg"}"></div>
          <h2 class="${"text-xl font-medium title-font text-gray-900 mt-5"}">Photographers</h2>
          <p class="${"text-base leading-relaxed mt-2"}">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
          <a class="${"text-sky-900 inline-flex items-center mt-3"}">View Photos
            <svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-4 h-4 ml-2"}" viewBox="${"0 0 24 24"}"><path d="${"M5 12h14M12 5l7 7-7 7"}"></path></svg></a></div></div></div></section>`;
});
var Content_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-1p3id26{height:100vh;margin:10px\r\n    }")();
const css = {
  code: ".content.svelte-1p3id26{height:100vh;margin:10px\r\n    }",
  map: null
};
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"content svelte-1p3id26"}">${validate_component(Infobox, "Infobox").$$render($$result, {}, {}, {})}</section>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(Content, "Content").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
