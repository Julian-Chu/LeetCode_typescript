import { convertToBase7 } from "../src/LeetCode_504_base7/convertToBase7";

describe("convert to base 7", () => {
  it("give 7, return '10'", () => {
    expect(convertToBase7(7)).toBe("10");
  });

  it("give 100, return 202", () => {
    expect(convertToBase7(100)).toBe("202");
  });

  it("give -7, return -10", () => {
    expect(convertToBase7(-7)).toBe("-10");
  });
});
