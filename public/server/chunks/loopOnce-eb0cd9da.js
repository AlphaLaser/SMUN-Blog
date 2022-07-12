import { a as animationSetup, b as runOnEveryParentUntil } from "./animationSetup-d2910baa.js";
import { w as writeEffect, t as typingInterval } from "./writeEffect-4e02b2cc.js";
import { u as unwriteEffect } from "./unwriteEffect-4c935fd9.js";
import "./index-f1aaf3e0.js";
const loopOnce = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  for (const element of elements) {
    const { currentNode, text } = element;
    await writeEffect(element, options);
    const textWithUnescapedAmpersands = text.replaceAll("&", "&amp;");
    const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands;
    if (fullyWritten) {
      options.dispatch("done");
      await typingInterval(options.wordInterval);
      const isLastElement = elements.indexOf(element) === elements.length - 1;
      if (!isLastElement) {
        await unwriteEffect(currentNode, options);
        runOnEveryParentUntil(currentNode, options.parentElement, (element2) => {
          currentNode === element2 ? element2.classList.remove("typing") : element2.classList.remove("finished-typing");
        });
      }
    }
  }
};
export { loopOnce as default };
