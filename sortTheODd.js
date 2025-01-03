function sortArray(array) {
  let odd = array.filter((a) => a % 2 !== 0).sort((v, x) => v - x);
  let i = 0;
  let result = [];
  array.forEach((e) => {
    if (e % 2 == 0) {
      result.push(e);
    } else {
      result.push(odd[i]);
      i++;
    }
  });
  return result;
}
