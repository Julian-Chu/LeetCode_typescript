/**
 * @param {number} num
 * @return {string}
 */
export function convertToBase7(num: number): string {
  let resArr = [];
  let quotient = num;
  let remainder: number;
  while (quotient >= 7) {
    let dividend = quotient;
    quotient = Math.floor(dividend / 7);
    remainder = dividend % 7;
    resArr.unshift(remainder);
  }
  resArr.unshift(quotient);
  return resArr.join("");
}
