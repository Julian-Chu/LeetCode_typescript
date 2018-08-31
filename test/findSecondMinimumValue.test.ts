import {
  TreeNode,
  findSecondMinimumValue
} from "./../src/LeetCode_671_SecondMiniNodeInBTree/findSecondMinimumValue";

describe("find 2nd minimum value in BTree", () => {
  it("root=2, left=2,right=2, return -1", () => {
    let root = new TreeNode(2);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);

    expect(findSecondMinimumValue(root)).toBe(-1);
  });

  it("root:[2, 2 ,5 ,null,null,5,7], return 5", () => {
    let root = new TreeNode(2);
    root.left = new TreeNode(2);
    root.right = new TreeNode(5);
    root.right.left = new TreeNode(5);
    root.right.right = new TreeNode(7);

    expect(findSecondMinimumValue(root)).toBe(5);
  });

  it("root:[2, 5 ,2 ,null,null,2,7], return 5", () => {
    let root = new TreeNode(2);
    root.left = new TreeNode(5);
    root.right = new TreeNode(2);
    root.right.left = new TreeNode(2);
    root.right.right = new TreeNode(7);

    expect(findSecondMinimumValue(root)).toBe(5);
  });

  it("root:[2, 5 ,2 ,5 ,6,2,7], return 6", () => {
    let root = new TreeNode(2);
    root.left = new TreeNode(5);
    root.left.left = new TreeNode(5);
    root.left.right = new TreeNode(6);
    root.right = new TreeNode(2);
    root.right.left = new TreeNode(2);
    root.right.right = new TreeNode(7);

    expect(findSecondMinimumValue(root)).toBe(6);
  });
});
