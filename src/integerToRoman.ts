function integerToRoman(integer: number): string {
  let input: number = integer;
  let result: string[] = [];
  let countOfL: number = 0;
  let countOfX: number = 0;
  let countOfXRightToL: number = 0;
  let countOfV: number = 0;
  let countOfI: number = 0;
  let countOfIRightToV: number = 0;

  if (input < 90) {
    if (input < 40) {
      countOfX = Math.floor(input / 10);
      input = input % 10;
    } else {
      countOfL = 1;
      if (input >= 50) {
        countOfXRightToL = Math.floor((input % 50) / 10);
        input = input % 50 % 10;
      } else {
        countOfX = 1
      }
    }
  }

  for (let i = 0; i < countOfX; i++) {
    result.push("X");
  }
  for (let i = 0; i < countOfL; i++) {
    result.push("L");
  }
  for (let i = 0; i < countOfXRightToL; i++) {
    result.push("X");
  }


  if (input < 10) {
    if (input === 9) {
      result.push("I");
      result.push("X");
    }
    else if (input < 4) {
      countOfI = input;
    } else {
      countOfV = 1
      if (input >= 5) {
        countOfIRightToV = input % 5;
      } else {
        countOfI = 1;
      }
    }
  }

  for (let i = 0; i < countOfI; i++) {
    result.push("I");
  }

  for (let i = 0; i < countOfV; i++) {
    result.push("V");
  }

  for (let i = 0; i < countOfIRightToV; i++) {
    result.push("I");
  }

  if (integer === 100) return "C";
  if (integer === 500) return "D";
  if (integer === 1000) return "M";
  return result.join("");
}

export default integerToRoman;