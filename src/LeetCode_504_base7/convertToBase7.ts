/**
 * @param {number} num
 * @return {string}
 */
export function convertToBase7(num: number): string {
  let resArr = [];
  let quotient = Math.abs(num);
  let remainder: number;
  while (quotient >= 7) {
    let dividend = quotient;
    quotient = Math.floor(dividend / 7);
    remainder = dividend % 7;
    resArr.unshift(remainder);
  }
  resArr.unshift(quotient);
  if (num < 0) {
    resArr.unshift("-");
  }
  return resArr.join("");
}
