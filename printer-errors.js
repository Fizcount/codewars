function printerError(s) {
  let nonAm = (s.match(/[^a-m]/g) || []).length;
  return `${nonAm}/${s.length}`;
}

//1
const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

//1 MY
const printerError = (s) => `${(s.match(/[^a-m]/g) || []).length}/${s.length}`;