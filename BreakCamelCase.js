function solution(string) {
  let result = "";
  for (let word of string) {
    if (word === word.toUpperCase()) {
      result += ` ${word}`;
    } else {
      result += word;
    }
  }
  return result;
}

//1
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}