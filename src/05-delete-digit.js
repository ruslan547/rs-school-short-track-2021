/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberArr = n.toString().split('').map((item) => +item);
  const minNumber = Math.min(...numberArr);
  const minNumIndex = numberArr.indexOf(minNumber);

  numberArr.splice(minNumIndex, 1);

  return +numberArr.join('');
}

module.exports = deleteDigit;
