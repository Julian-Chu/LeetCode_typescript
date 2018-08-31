export let findSecondMinimumValue = function(root: TreeNode): number {
  let nodeList = new Set<number>();

  findLeafNode(root, nodeList);
  if (nodeList.size === 1) return -1;

  let max = Math.max(...nodeList);
  nodeList.delete(max);
  let secondMinVal = Math.max(...nodeList);

  return secondMinVal;
};

function findLeafNode(root: TreeNode, nodeList: Set<number>) {
  if (!root.left && !root.right) {
    nodeList.add(root.val);
  } else {
    root.left && findLeafNode(root.left, nodeList);
    root.right && findLeafNode(root.right, nodeList);
  }
}

export class TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;

  constructor(val: number) {
    this.val = val;
  }
}
