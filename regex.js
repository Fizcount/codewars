function XO(str) {
  let strs = str.toLowerCase();
  let x = (strs.match(/x/g) || []).length;
  let o = (strs.match(/o/g) || []).length;
  return o === x
}
