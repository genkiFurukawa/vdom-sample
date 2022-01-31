export default interface PatchTarget {
    id: string;
    type: 'tagName' | 'content';
    value: string;
  }
  