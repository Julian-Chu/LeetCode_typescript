import {
  calcLCA,
  createBinaryTree,
  TreeNode
} from "../src/LeetCode_236_LCAofBinaryTree/calcLCA";

describe("calc Lower Common Ancestor", () => {
  let root = createBinaryTree();

  it("give defined root, p = 5, q = 1, return 5", () => {
    expect(calcLCA(root, new TreeNode(5), new TreeNode(1))).toBe(3);
  });
});
