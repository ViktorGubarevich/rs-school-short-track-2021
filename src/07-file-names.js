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
  const arr = [...names];
  let a = 0;
  let prev;

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== names.lastIndexOf(arr[i])) {
      if (arr[i] === prev) a = 1;
      if (a > 0) arr[i] += `(${a})`;
      prev = arr[i];
      a++;
    }
  }
  return arr;
}

module.exports = renameFiles;
