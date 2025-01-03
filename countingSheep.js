function countSheeps(sheep) {
  let result = 0;
  sheep.forEach((v) => (v === true ? (result += 1) : 0));
  return result;
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

let countSheeps = (x) => x.filter((s) => s).length;