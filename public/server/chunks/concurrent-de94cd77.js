import { w as writeEffect } from "./writeEffect-4e02b2cc.js";
import { a as animationSetup } from "./animationSetup-d2910baa.js";
import "./index-f1aaf3e0.js";
const descendingSortFunction = (firstElement, secondElement) => secondElement.text.length - firstElement.text.length;
const getLongestTextElement = (elements) => {
  const descendingTextLengthOrder = elements.sort(descendingSortFunction);
  const longestTextElement = descendingTextLengthOrder[0].currentNode;
  return longestTextElement;
};
const onAnimationEnd = (element, callback) => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const elementAttributeChanged = mutation.type === "attributes";
      const elementFinishedTyping = mutation.target.classList.contains("finished-typing");
      if (elementAttributeChanged && elementFinishedTyping)
        callback();
    });
  });
  observer.observe(element, {
    attributes: true,
    childList: true,
    subtree: true
  });
};
const concurrent = (node, props) => {
  const { options, elements } = animationSetup(node, props);
  const lastElementToFinish = getLongestTextElement(elements);
  onAnimationEnd(lastElementToFinish, () => options.dispatch("done"));
  for (const element of elements) {
    writeEffect(element, options).then(() => {
      element.currentNode.classList.replace("typing", "finished-typing");
    });
  }
};
export { concurrent as default };
