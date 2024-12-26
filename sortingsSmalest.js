function findSmallestInt(arr) {
  let array = arr.sort(function (a, b) {
    return a - b;
  });
  return array[0];
}
//
function findSmallestInt(arr) {
 
  return Math.min(...arr)
 }
