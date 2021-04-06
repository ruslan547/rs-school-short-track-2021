/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charArr = s2.split('');

  return s1.split('').reduce((ac, item) => {
    if (!charArr.includes(item)) {
      return ac;
    }

    charArr.splice(charArr.indexOf(item), 1);
    return ac + 1;
  }, 0);
}

module.exports = getCommonCharacterCount;
