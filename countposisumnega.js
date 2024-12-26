function countPositivesSumNegatives(input) {
  if (!input || input.length == 0) {
    return [];
  }
  const negativeSum = (input) => input.reduce((a, b) => a + (b < 0 ? b : 0), 0);
  let positiveLength = [];
  for (let pos of input) {
    if (pos > 0) {
      positiveLength.push(pos);
    }
  }
  const result = [positiveLength.length, negativeSum(input)];
  return result;
}

//
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}