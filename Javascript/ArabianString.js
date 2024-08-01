function camelize(str) {
  console.log(str);
  return str
    .split(/ |-/)
    .map((elt) => elt[0].toUpperCase() + elt.slice(1).toLowerCase())
    .join("");
}

console.log(camelize("cODE warS"));
