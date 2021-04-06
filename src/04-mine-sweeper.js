/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function getSiblings([rowIndex, colIndex]) {
  return [
    [rowIndex - 1, colIndex - 1],
    [rowIndex - 1, colIndex],
    [rowIndex - 1, colIndex + 1],
    [rowIndex, colIndex - 1],
    [rowIndex, colIndex + 1],
    [rowIndex + 1, colIndex - 1],
    [rowIndex + 1, colIndex],
    [rowIndex + 1, colIndex + 1],
  ];
}

function isSibling(sibling, matrix) {
  return !!(sibling[0] >= 0
    && sibling[1] >= 0
    && sibling[0] < matrix.length
    && sibling[1] < matrix[0].length
  );
}

function minesweeper(matrix) {
  const result = matrix.map((item) => item.map(() => 0));

  matrix.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col) {
        const siblings = getSiblings([rowIndex, colIndex]);

        siblings.forEach((sibling) => {
          if (isSibling(sibling, matrix)) {
            result[sibling.shift()][sibling.pop()]++;
          }
        });
      }
    });
  });

  return result;
}

module.exports = minesweeper;
