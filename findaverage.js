function findAverage(array) {
  if (!array || array.length == 0) {
    return 0;
  } else {
    let sum = array.reduce((a, b) => a + b, 0);
    let average = sum / array.length;
    return average;
  }
}
//1
var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}