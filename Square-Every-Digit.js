function squareDigits(num) {
  let stringNumber = num.toString();
  let splited = stringNumber.split("");
  let square = splited.map((a) => a * a);
  return +square.join("");
}

function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}