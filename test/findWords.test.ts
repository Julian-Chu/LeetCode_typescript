import findWords from "../src/LeetCode_500_KeyboardRow/findWords";

describe("Find words", () => {
  it("input one word, and it is in same keyboard row ", () => {
    let input = ["Alaska"];
    let ouput = ["Alaska"];
    expect(findWords(input)).toEqual(ouput);
  });

  it("input 2 words, only one match rule", () => {
    let input = ["Alaska", "Hello"];
    let output = ["Alaska"];
    expect(findWords(input)).toEqual(output);
  });

  it("example test case", () => {
    let input = ["Hello", "Alaska", "Dad", "Peace"];
    let output = ["Alaska", "Dad"];
    expect(findWords(input)).toEqual(output);
  });
});
