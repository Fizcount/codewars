function deleteNth(arr, n) {
  let totals = {};
  return arr.filter((a) => (totals[a] = ++totals[a] || 0) < n);
}

//1
function deleteNth(arr, x) {
  var obj = {};
  return arr.filter(function (number) {
    obj[number] = obj[number] ? obj[number] + 1 : 1;
    return obj[number] <= x;
  });
}

//2
const deleteNth = (a, x) => {
  let m = {};
  return a.filter((v) => (m[v] = m[v] + 1 || 1) <= x);
};
