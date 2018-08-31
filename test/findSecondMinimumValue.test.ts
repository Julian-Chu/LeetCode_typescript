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
});
