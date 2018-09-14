/**
 * @param {number} num
 * @return {string}
 */
export function convertToBase7(num: number): string {
  let resArr = [];
  let quotient: number;
  let remainder = num;
  while (remainder >= 7) {
    quotient = Math.floor(remainder / 7);
    remainder = remainder % 7;
    resArr.push(quotient);
  }
  resArr.push(remainder);
  return resArr.join("");
}
