const digitize = n => Array.from(String(n), n => Number(n))

//2
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}