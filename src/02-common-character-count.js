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
  const arrayS1 = s1.split('');
  const arrayS2 = s2.split('');

  const resultArray = arrayS1.filter((couple) => {
    if (arrayS2.includes(couple)) {
      arrayS2.splice(arrayS2.indexOf(couple), 1);
      return true;
    }
    return false;
  });
  return resultArray.length;
}

module.exports = getCommonCharacterCount;
