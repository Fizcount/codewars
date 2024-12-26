function isIsogram(str){
  return !/(.).*\1/i.test(str)
}

const isIsogram = (str) => !/(.).*\1/i.test(str);

//1
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}