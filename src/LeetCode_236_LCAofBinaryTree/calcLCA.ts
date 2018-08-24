export class TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
  constructor(val: number) {
    this.val = val;
  }
}

export function calcLCA(root: TreeNode, p: TreeNode, q: TreeNode): number {
  let pathToP = getPath(root, p);
  let pathToQ = getPath(root, q);
  console.log(pathToP);
  console.log(pathToQ);
  let arrLength =
    pathToP.length > pathToQ.length ? pathToP.length : pathToQ.length;
  for (let i = 0; i < arrLength; i++) {
    if (!pathToP[i] || !pathToQ[i] || pathToP[i].val !== pathToQ[i].val)
      return pathToP[i - 1].val;
  }

  return 0;
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
