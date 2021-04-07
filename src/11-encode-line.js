/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];

  str.split('').reduce((ac, item, i, arr) => {
    if (i < arr.length - 1 && item === arr[i + 1]) {
      return ac + 1;
    }

    result.push([item, ac]);

    return 1;
  }, 1);

  return result.map(([key, value]) => (value > 1 ? value + key : key)).join('');
}

module.exports = encodeLine;
