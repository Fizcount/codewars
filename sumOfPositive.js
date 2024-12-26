function positiveSum(arr) {
  const filterArr = arr.filter((arrs) => typeof arrs === "number" && arrs > 0);
  const sum = filterArr.reduce((total, number) => total + number, 0);
  return sum;
}
//1 MY
function positiveSum(arr) {
  let filterArr = [];
  for (let positive of arr) {
    if (positive > 0) {
      filterArr.push(positive);
    }
  }
  return filterArr.reduce((total, sum) => total + sum, 0);
}
//2
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}