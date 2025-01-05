function findUniq(arr) {
  return arr.find((a) => arr.indexOf(a) === arr.lastIndexOf(a));
}

//1
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}