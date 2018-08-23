import {
  calcLCA,
  createBinaryTree,
  TreeNode
} from "../src/LeetCode_236_LCAofBinaryTree/calcLCA";

describe("calc Lower Common Ancestor", () => {
  let root = createBinaryTree();

  describe("give defined root", () => {
    it("p = 5, q = 1, return 3", () => {
      expect(calcLCA(root, new TreeNode(5), new TreeNode(1))).toBe(3);
    });

    it("p=5, q=8, return 3", () => {
      expect(calcLCA(root, new TreeNode(5), new TreeNode(8))).toBe(3);
    });

    it("p=6,q=5,return 5", () => {
      expect(calcLCA(root, new TreeNode(6), new TreeNode(5))).toBe(5);
    });

    it("p=1,q=8,return 1", () => {
      expect(calcLCA(root, new TreeNode(1), new TreeNode(8))).toBe(1);
    });
  });
});
