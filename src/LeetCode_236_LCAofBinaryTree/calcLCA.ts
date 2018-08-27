export class TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
  constructor(val: number) {
    this.val = val;
  }
}

export function calcLCA(
  root: TreeNode,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  if (root.val === p.val || root.val === q.val) return root;
  else if (!root) return null;

  let left = null;
  if (root.left) {
    left = calcLCA(root.left, p, q);
  }
  let right = null;
  if (root.right) right = calcLCA(root.right, p, q);

  if (right && left) {
    return root;
  } else if (!right) {
    return left;
  } else {
    return right;
  }
}

export function createBinaryTree(): TreeNode {
  let root = new TreeNode(3);
  root.left = new TreeNode(5);
  root.left.left = new TreeNode(6);
  root.left.right = new TreeNode(2);
  root.left.right.left = new TreeNode(7);
  root.left.right.right = new TreeNode(4);

  root.right = new TreeNode(1);
  root.right.left = new TreeNode(0);
  root.right.right = new TreeNode(8);

  return root;
}
