export default interface VNode {
    tagName: string,
    // [key: string]: string => 連想配列
    attributes: { id: string; content: string; [key: string]: string };
    children?: Array<VNode>;    
}