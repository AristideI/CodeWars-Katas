function sumUpNumbers(arr) {
  let FormalArr = [];
  arr.forEach((elt) => {
    if (elt.includes(",") && elt.includes(".")) {
      if (elt.indexOf(",") < elt.indexOf(".")) {
        FormalArr.push(Number(elt.replace(",", "")));
      } else {
        FormalArr.push(Number(elt.replace(",", ".").replace(".", "")));
      }
    } else if (elt.includes(",") && !elt.includes(".")) {
      FormalArr.push(Number(elt.replace(",", ".")));
    } else {
      FormalArr.push(Number(elt));
    }
  });

  let ret = FormalArr.reduce((a, b) => a + b, 0)
    .toLocaleString()
    .split(".");

  if (ret.length === 1) {
    ret.push(".00");
    console.log(ret);
    return ret.join("");
  }

  return ret.join(".");
}

console.log(sumUpNumbers(["1,234.34", "1.324,2", "14"])); // "2,572.54"
console.log(sumUpNumbers(["4.44", "8", "14,56"])); // "2,572.54"
