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
  const arr = str.split('');
  const result = [];
  let e = 1;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i - 1] !== arr[i]) {
      result.push(arr[i]);
      e = 1;
    } else {
      e += 1;
      result[result.length - 1] = `${e}${arr[i]}`;
    }
  }
  return result.join('');
}

module.exports = encodeLine;
