let findWords = function(words: string[]): string[] {
  let result: string[] = [];
  let exclude: string[] = [];
  let keyboardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  let keyboardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  let keyboardRow3 = ["Z", "X", "C", "V", "B", "N", "M"];
  let keyboardRows = [keyboardRow1, keyboardRow2, keyboardRow3];

  words.forEach(word => {
    let charArr = word.toUpperCase().split("");
    let row: number;
    const e = charArr[0];
    if (keyboardRow1.includes(e)) {
      row = 0;
    } else if (keyboardRow2.includes(e)) {
      row = 1;
    } else {
      row = 2;
    }

    for (let i = 1; i < charArr.length; i++) {
      const e = charArr[i];

      if (!keyboardRows[row].includes(e)) {
        exclude.push(word);
        break;
      }
    }
  });

  result = words.filter(w => !exclude.includes(w));

  return result;
};

export default findWords;
