import { TreeNode } from "./calcLCA";
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
  let rootClone = Object.assign({}, root);
  path.push(rootClone);

  if (rootClone.left) {
    if (rootClone.left.val === node.val) {
      path.push(rootClone.left);
      return path;
    } else {
      path = getSubPath(rootClone.left, node, path);
      // path.push(new TreeNode(root.val));
    }
  }
  console.log("path:", path);
  if (path.length !== 1 && path[path.length - 1].val !== root.val) return path;

  console.log("path:", path);
  if (rootClone.right) {
    if (rootClone.right.val === node.val) path.push(rootClone.right);
  }

  return path;
}

function getSubPath(
  root: TreeNode,
  node: TreeNode,
  path: Array<TreeNode>
): Array<TreeNode> {
  let newPath = path.slice();
  let newRoot = Object.assign({}, root);
  if (newRoot.left && newRoot.left.val === node.val) {
    newPath.push(newRoot.left);
    return newPath;
  } else if (newRoot.right && newRoot.right.val === node.val) {
    newPath.push(newRoot.right);
    return newPath;
  } else {
    if (newRoot.left) {
      newPath = getSubPath(newRoot.left, node, newPath);
      if (newPath.length > path.length) return newPath;
    }

    if (newRoot.right) {
      newPath = getSubPath(newRoot.right, node, newPath);
      if (newPath.length > path.length) return newPath;
    }
  }

  if (newPath.length > 1) newPath.pop();

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
