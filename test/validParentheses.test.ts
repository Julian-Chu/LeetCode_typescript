import isValid from "../src/LeetCode_20_ValidParenthesses/validParentheses";

describe("Test isValid()", () => {
  it("give()", () => {
    expect(isValid("()")).toBe(true);
  });

  it("give(]", () => {
    expect(isValid("(]")).toBe(false);
  });

  it("give ()[]{}", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  it("give ({})", () => {
    expect(isValid("({})")).toBe(true);
  });
});
