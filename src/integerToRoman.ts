function integerToRoman(integer: number): string {
  let input: number = integer;
  let result: string[] = [];

  let digit_thousand = Math.floor(input / 1000);
  input = input % 1000;
  if (digit_thousand > 0) {
    for (let i = 0; i < digit_thousand; i++)  result.push("M");
  }
  let digit_hundred = Math.floor(input / 100);
  input = input % 100;
  if (digit_hundred > 0) {
    if (digit_hundred === 9) result.push("CM");
    else if (digit_hundred >= 5) {
      result.push("D");
      for (let i = 0; i < digit_hundred - 5; i++) {
        result.push("C");
      }
    }
    else if (digit_hundred === 4) result.push("CD");
    else {
      for (let i = 0; i < digit_hundred; i++) {
        result.push("C");
      }
    }
  }
  let digit_ten = Math.floor(input / 10);
  input = input % 10;
  if (digit_ten > 0) {
    if (digit_ten === 9) result.push("XC");
    else if (digit_ten >= 5) {
      result.push("L");
      for (let i = 0; i < digit_ten - 5; i++) {
        result.push("X");
      }
    }
    else if (digit_ten === 4) result.push("XL");
    else {
      for (let i = 0; i < digit_ten; i++) {
        result.push("X");
      }
    }
  }

  if (input > 0) {
    if (input === 9) result.push("IX");
    else if (input >= 5) {
      result.push("V");
      for (let i = 0; i < input - 5; i++) {
        result.push("I");
      }
    }
    else if (input === 4) result.push("IV");
    else {
      for (let i = 0; i < input; i++) {
        result.push("I");
      }
    }
  }
  return result.join("");
}

export default integerToRoman;