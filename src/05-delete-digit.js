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
  const num = n.toString();
  const result = [];
  for (let i = 0; i < num.length; i++) {
    const arr = num.split('');
    arr.splice(i, 1);
    result.push(+arr.join(''));
  }
  return result.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
