import findWords from "../src/LeetCode_500_KeyboardRow/findWords";

describe("Find words", () => {
  it("input one word, and it is in same keyboard row ", () => {
    let input = ["Alaska"];
    let ouput = ["Alaska"];
    expect(findWords(input)).toEqual(ouput);
  });
});
