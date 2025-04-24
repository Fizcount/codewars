function powersOfTwo(n) {
  const result = [];
  for (i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
}
