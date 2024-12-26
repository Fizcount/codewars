function sumArray(array) {
  if (Array.isArray(array) && array.length > 0) {
    let sorted = array.sort((a, b) => a - b);
    let sum = array.reduce((a, b) => a + b, 0);
    let highLow = sorted[0] + sorted[sorted.length - 1];
    return sum - highLow;
  }
  return 0;
}

//1
function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0;
}

//2
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0