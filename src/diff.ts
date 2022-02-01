// リアルDOMと仮想DOMの差分を検出するメソッド
import VNode from "./types/vNode.js";
import PatchTaget from "./types/patchTarget.js";

function diff(oldObj: VNode, newObj: VNode): PatchTaget[] {
    let patchTarget: PatchTaget[] = [];
    diffVNode(oldObj, newObj, patchTarget);
    return patchTarget;
}

function diffVNode(oldNode: VNode, newNode: VNode, patchTarget: PatchTaget[]): void {
    if (oldNode.children && newNode.children) {
        for (let i = 0; i < oldNode.children.length; i++) {
            // NOTE: あまり理解できていない
            if (oldNode.children[i].attributes.content != newNode.children[i].attributes.content) {
                patchTarget.push({
                  id: oldNode.attributes.id,
                  type: "content",
                  value: newNode.children[i].attributes.content,
                });
              }
              diffVNode(oldNode.children[i], newNode.children[i], patchTarget);         
        }
    }
    return;
}

export default diff;