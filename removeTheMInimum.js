const removeSmallest = (numbers) =>
  numbers
    ? numbers.filter(
        (_, index) => index !== numbers.indexOf(Math.min(...numbers))
      )
    : numbers;

//1
function removeSmallest(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}