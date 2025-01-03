function solution(str, ending) {
  return str.endsWith(ending);
};

//1
function solution(str, ending) {
  return str.substr(-ending.length) == ending;
}

//2
function solution(str, ending) {
  return str.slice(0 - ending.length) === ending;
}

function solution(str, ending) {
  if (typeof str != "string" || typeof ending != "string") throw "wrong type";
  if (ending.length > str.length) return false;
  return str.substr(str.length - ending.length, ending.length) == ending;
}