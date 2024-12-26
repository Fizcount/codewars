function dnaStrand(dna) {
  function convert(lett) {
    if (lett === "A") {
      return "T";
    }
    if (lett === "T") {
      return "A";
    }
    if (lett === "G") {
      return "C";
    }
    if (lett === "C") {
      return "G";
    }
  }
  let dnas = dna.split()
  let newDna = dnas.map(base => convert(base)).join("");
  return newDna
}
