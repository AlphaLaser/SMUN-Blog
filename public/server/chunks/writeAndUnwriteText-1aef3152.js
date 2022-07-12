import { w as writeEffect, t as typingInterval } from "./writeEffect-4e02b2cc.js";
import { u as unwriteEffect } from "./unwriteEffect-4c935fd9.js";
import { b as runOnEveryParentUntil } from "./animationSetup-d2910baa.js";
const writeAndUnwriteText = async ({ currentNode, text }, options) => {
  await writeEffect({ currentNode, text }, options);
  const textWithUnescapedAmpersands = text.replaceAll("&", "&amp;");
  const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands;
  if (fullyWritten) {
    options.dispatch("done");
    await typingInterval(options.wordInterval);
    await unwriteEffect(currentNode, options);
  }
  runOnEveryParentUntil(currentNode, options.parentElement, (element) => {
    currentNode === element ? element.classList.remove("typing") : element.classList.remove("finished-typing");
  });
};
export { writeAndUnwriteText as w };
