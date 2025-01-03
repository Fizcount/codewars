function expandedForm(num) {
  const str = String(num);
  let result = [];
  for (i = 0; i < str.length; i++) {
    const digit = str[i];
    if (digit !== "0") {
      let nols = "0".repeat(str.length - i - 1);
      result.push(digit + nols);
    }
  }
  return result.join("+");
}

//1
function expandedForm(num) {
  return String(num)
          .split("")
          .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
          .filter((num) => Number(num) != 0)
          .join(" + ")
}

//2
const expandedForm = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(" + ");