export class TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
  constructor(val: number) {
    this.val = val;
  }
}

export function calcLCA(root: TreeNode, p: TreeNode, q: TreeNode): number {
  let pathToP = getSearchPath(root, p);
  let pathToQ = getSearchPath(root, q);

  console.log(pathToP);
  console.log(pathToQ);

  for (let i = 0; i < pathToQ.length; i++) {
    if (pathToP[i].val === pathToQ[i].val) return pathToP[i].val;
  }

  return 0;
}

function getSearchPath(root: TreeNode, node: TreeNode): Array<TreeNode> {
  let path: Array<TreeNode> = [];
  path.push(root);

  if (root.left && root.left.val === node.val) {
    path.push(root.left);
    return path;
  } else if (root.right && root.right.val === node.val) {
    path.push(root.right);
    return path;
  } else {
  }

  return [];
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
