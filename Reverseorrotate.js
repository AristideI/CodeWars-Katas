function revrot(str, sz) {
  if (str === "" || sz <= 0 || sz > str.length) return "";
  let arr = [];
  while (str.length >= sz) {
    arr.push(str.slice(0, sz));
    str = str.slice(sz);
  }
  arr = arr.map((elt) => {
    let pro = elt.split("").reduce((a, b) => a + Number(b) ** 3, 0);
    if (pro % 2 === 0) {
      return elt.split("").reverse().join("");
    } else {
      return elt.slice(1) + elt[0];
    }
  });
  return arr.join("");
}

console.log(revrot("733049910872815764", 5));
