export class TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
  constructor(val: number) {
    this.val = val;
  }
}

export function calcLCA(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
  let pathToP = getPath(root, p);
  let arrLength = pathToP.length;
  let pathToQ;
  for (let i = arrLength - 1; i > 0; i--) {
    if (pathToP[i].val === q.val) return q;
    let LCA = pathToP[i];
    pathToQ = getPath(LCA, q);
    if (pathToQ.length > 1) {
      return LCA;
    }
  }

  return root;
}

function getPath(
  root: TreeNode,
  node: TreeNode,
  path: Array<TreeNode> = []
): Array<TreeNode> {
  let newPath = path.slice();
  let newRoot = Object.assign({}, root);
  newPath.push(newRoot);
  if (newRoot.left && newRoot.left.val === node.val) {
    newPath.push(newRoot.left);
    return newPath;
  } else if (newRoot.right && newRoot.right.val === node.val) {
    newPath.push(newRoot.right);
    return newPath;
  } else {
    if (newRoot.left) {
      newPath = getPath(newRoot.left, node, newPath);
      let length = newPath.length;
      if (length > 1 && newPath[0].val !== newPath[length - 1].val)
        return newPath;
      newPath.pop();
    }

    if (newRoot.right) {
      newPath = getPath(newRoot.right, node, newPath);
      let length = newPath.length;
      if (length > 1 && newPath[0].val !== newPath[length - 1].val)
        return newPath;
      newPath.pop();
    }
  }

  if (newPath.length > 1) {
    newPath.pop();
    newPath.push(newPath[0]);
  }

  return newPath;
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
