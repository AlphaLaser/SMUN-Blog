import { w as writeAndUnwriteText } from "./writeAndUnwriteText-1aef3152.js";
import { a as animationSetup, m as makeNestedStaticElementsVisible } from "./animationSetup-d2910baa.js";
import "./writeEffect-4e02b2cc.js";
import "./unwriteEffect-4c935fd9.js";
import "./index-f1aaf3e0.js";
const loop = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  while (true) {
    makeNestedStaticElementsVisible(node);
    for (const element of elements)
      await writeAndUnwriteText(element, options);
  }
};
export { loop as default };
