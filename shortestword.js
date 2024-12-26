function findShort(s) {
  let word = s.split(" ");
  let lengths = [];
  for (let leng of word) {
    lengths.push(leng.length);
  }
  let result = lengths.sort(function (a, b) {
    return a - b;
  });
  return result[0];
}

/*
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
    */

//spread array to find the shortest word
