/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  const used = new Map();
  const regex = /\(\d\)/;

  return names.map((item) => {
    if (regex.test(item)) {
      if (used.get(item.replace(regex, ''))) {
        used.set(item, 0);

        return `${item}(1)`;
      }
    }

    if (used.has(item)) {
      let currentCount = used.get(item);
      used.set(item, ++currentCount);

      return `${item}(${currentCount})`;
    }

    used.set(item, 0);

    return item;
  });
}

module.exports = renameFiles;
