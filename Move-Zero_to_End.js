function moveZeros(arr) {
  let sorted = [];
  let zeroCount = 0;
  for (let z of arr)
    if (z === 0) {
      zeroCount++;
    } else {
      sorted.push(z);
    }
  for (let i = 1; i <= zeroCount; i++) sorted.push(0);
  return sorted;
}
