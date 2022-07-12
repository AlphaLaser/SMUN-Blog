import { w as writeEffect } from "./writeEffect-4e02b2cc.js";
import { a as animationSetup } from "./animationSetup-d2910baa.js";
import "./index-f1aaf3e0.js";
const cleanChildText = (elements) => elements.forEach((element) => element.currentNode.textContent = "");
const cascade = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  cleanChildText(elements);
  for (const element of elements) {
    await writeEffect(element, options);
    element.currentNode.classList.replace("typing", "finished-typing");
  }
  options.dispatch("done");
};
export { cascade as default };
