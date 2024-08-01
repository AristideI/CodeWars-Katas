function multiply(a, b) {
  return a * b;
}
function fakeBin(x) {
  return x
    .split("")
    .map((elt) => (Number(elt) < 5 ? "0" : "1"))
    .join("");
}
