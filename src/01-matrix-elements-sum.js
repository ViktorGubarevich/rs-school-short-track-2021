/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const matrixIndexes = [];
  let sum = 0;
  matrix.forEach((array) => {
    array.forEach((item, index) => {
      if (item === 0) {
        matrixIndexes.push(index);
      }
      if (!matrixIndexes.includes(index)) {
        sum += item;
      }
    });
  });
  return sum;
}

module.exports = getMatrixElementsSum;
