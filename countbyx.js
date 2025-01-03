function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

//1
const countBy = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);