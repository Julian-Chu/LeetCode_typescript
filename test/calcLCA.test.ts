import {
  calcLCA,
  createBinaryTree,
  TreeNode
} from "../src/LeetCode_236_LCAofBinaryTree/calcLCA";

describe("calc Lower Common Ancestor", () => {
  let root = createBinaryTree();

  describe("give defined root", () => {
    it("p = 5, q = 1, return 3", () => {
      let node = calcLCA(root, new TreeNode(5), new TreeNode(1));
      expect(node.val).toBe(3);
    });

    it("p=2, q=5, return 5", () => {
      let node = calcLCA(root, new TreeNode(2), new TreeNode(5));
      expect(node.val).toBe(5);
    });

    it("p=6,q=5,return 5", () => {
      let node = calcLCA(root, new TreeNode(6), new TreeNode(5));
      expect(node.val).toBe(5);
    });

    it("p=1,q=8,return 1", () => {
      let node = calcLCA(root, new TreeNode(1), new TreeNode(8));
      expect(node.val).toBe(1);
    });

    it("p=6, q=0, return 3", () => {
      let node = calcLCA(root, new TreeNode(6), new TreeNode(0));
      expect(node.val).toBe(3);
    });

    it("p=6,q=2, return 5", () => {
      let node = calcLCA(root, new TreeNode(6), new TreeNode(2));
      expect(node.val).toBe(5);
    });

    it("p=7, q=8, return 3", () => {
      let node = calcLCA(root, new TreeNode(7), new TreeNode(3));
      expect(node.val).toBe(3);
    });

    it("p=7, q=99, return 3", () => {
      let node = calcLCA(root, new TreeNode(7), new TreeNode(99));
      expect(node.val).toBe(3);
    });
  });
});
