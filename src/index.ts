import PVDOM from "./vdom.js";
import VNode from './types/vnode.js';

const vDOM: VNode = {
    tagName: "div",
    attributes: { id: "div-id", content: "" },
    children: [
      {
        tagName: "h3",
        attributes: { id: "p-id", content: "" },
        children: [
          {
            tagName: "text",
            attributes: { id: "text-id", content: "入力内容: " },
          },
        ],
      },
      {
        tagName: "input",
        attributes: {
          id: "input-id",
          type: "text",
          content: "hoge",
        },
      },
      {
        tagName: "ol",
        attributes: {
          id: "item-header",
          type: "",
          content: "",
        },
        children: [
            {
                tagName: "li",
                attributes: { id: "item", content: "要素1", "type": "square" },
            },
            {
                tagName: "li",
                attributes: { id: "item", content: "要素2", "type": "circle" },
            },  
        ]
      },
    ],
  };

  // vDOMをrenderする
PVDOM.render(vDOM);

// 30msに1回renderするように設定
setInterval(() => {
    PVDOM.render(vDOM);
}, 30);

// vDOMを更新する
// input-idの値が更新されたときに<h3>のタグの中身を更新するように設定
const input = document.getElementById("input-id");
if (input != null) {
  input.oninput = handleInput;
}
function handleInput(e: Event) {
  const { target } = e;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  if (target.value) {
    if (vDOM.children) {
      const h3Node: VNode | undefined = vDOM.children[0];
      if (h3Node.children) {
        const textNode: VNode | undefined = h3Node.children[0];
        textNode.attributes.content = "入力内容: " + target.value;
        // console.log(target.value);
      }
    }
  }
}