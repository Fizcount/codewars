function squareSum(numbers) {
  return numbers.map((a) => a * a).reduce((a, b) => a + b, 0);
}
