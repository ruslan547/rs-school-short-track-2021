/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const delimiter = '.';

  domains.forEach((domain) => {
    const reversedDomain = domain.split(delimiter).reverse();
    reversedDomain.reduce((ac, item) => {
      const str = ac + delimiter + item;

      if (result[str]) {
        result[str]++;
      } else {
        result[str] = 1;
      }

      return str;
    }, '');
  });

  return result;
}

module.exports = getDNSStats;
