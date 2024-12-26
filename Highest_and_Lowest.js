function highAndLow(numbers) {
  let a = Math.max(...numbers.split(" "));
  let b = Math.min(...numbers.split(" "));
  return `${a} ${b}`;
}
