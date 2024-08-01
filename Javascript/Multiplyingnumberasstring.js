function multiply(a, b) {
  let firstVal = a.startsWith("-") ? `${a}`.slice(1) : a;
  let secondVal = b.startsWith("-") ? `${b}`.slice(1) : b;

  let isNegative = a.startsWith("-") ^ b.startsWith("-");
  let numberBehindPoint = numberOfBehind(firstVal, secondVal);
  firstVal = firstVal.replace(".", "");
  secondVal = secondVal.replace(".", "");
  let myRes = multiplyStrings(firstVal, secondVal);

  if (myRes == 0) return "0";
  let finalRes = `${myRes.slice(
    0,
    myRes.length - numberBehindPoint
  )}.${myRes.slice(myRes.length - numberBehindPoint)}`;

  for (let i of finalRes) {
    if (i == ".") {
      finalRes = `${isNegative ? "-" : ""}0` + finalRes;
      break;
    } else if (i != "0") {
      finalRes = `${isNegative ? "-" : ""}` + finalRes;
      break;
    }
    finalRes = finalRes.slice(1);
  }
  let finalRes2 = finalRes.split("").reverse().join("");

  for (let i of finalRes2) {
    if (i == ".") {
      finalRes2 = finalRes2.slice(1);
      break;
    } else if (i != "0") {
      break;
    }
    finalRes2 = finalRes2.slice(1);
  }
  return finalRes2.split("").reverse().join("");
}

function numberOfBehind(a, b) {
  let firstVal = a.split(".").length == 2 ? a.split(".")[1].length : 0;
  let secondVal = b.split(".").length == 2 ? b.split(".")[1].length : 0;
  return firstVal + secondVal;
}

function multiplyStrings(a, b) {
  let product = Array(a.length + b.length).fill(0);

  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      let mul = parseInt(a[i]) * parseInt(b[j]);
      let sum = mul + product[i + j + 1];
      product[i + j] += Math.floor(sum / 10);
      product[i + j + 1] = sum % 10;
    }
  }
  return product.join("");
}
