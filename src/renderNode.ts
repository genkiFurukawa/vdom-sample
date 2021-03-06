import VNode from "./types/vNode.js";

function renderNode(node: VNode): HTMLElement {
  const nodeElement = document.createElement(node.tagName);
  for (const key in node.attributes) {
    nodeElement.setAttribute(key, node.attributes[key]);
  }

  nodeElement.textContent = node.attributes.content;

  if (node.children) {
    node.children.forEach((child: VNode) => {
      if (child.tagName == "text") {
        nodeElement.innerText = child.attributes.content;
        return;
      }
      nodeElement.appendChild(renderNode(child));
    });
  }

  return nodeElement;
}

export default renderNode;
