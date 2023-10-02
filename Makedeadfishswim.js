function parse(data) {
  const arr = [];
  let curr = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") {
      curr = curr + 1;
    } else if (data[i] === "d") {
      curr = curr - 1;
    } else if (data[i] === "s") {
      curr = curr ** 2;
    } else if (data[i] === "o") {
      arr.push(curr);
    }
  }

  return arr;
}
