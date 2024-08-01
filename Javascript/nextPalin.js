function nextPalin(a, n = a.toString()) {
  const digits = n.toString().length;
  const arr =
    digits % 2 === 0
      ? [n.slice(0, digits / 2).toString(), n.slice(digits / 2).toString()]
      : [
          n.slice(0, digits / 2).toString(),
          n[Math.floor(digits / 2)],
          n.slice(digits / 2 + 1).toString(),
        ];

  if (arr.length === 2) {
    if (Number(arr[1]) <= Number(arr[0])) {
      arr[1] = [...arr[0]].reverse().join("");
      return Number(arr.join(""));
    } else {
      let pro = [...String(Number(arr[0]) + 1)].reverse().join("");
      return Number(arr[0] + pro);
    }
  }

  if (Number(arr[2]) <= Number(arr[0])) {
    arr[2] = [...arr[0]].reverse().join("");
    return Number(arr.join(""));
  } else {
    arr[2] = arr[0];
    let pro = [...String(Number(arr[1]) + 1)].reverse().join("");
    return Number(arr.join(""));
  }
}

console.log(nextPalin(12343));

function nextPalin(a, n = a.toString()) {
  // If all digits are 9s, return a + 2
  if ([...n].every((digit) => digit === "9")) {
    return BigInt(n) + 2n;
  }

  const digits = n.length;
  const half = Math.floor(digits / 2);
  let left = n.slice(0, half);
  let palindrome = "";

  if (digits % 2 === 0) {
    palindrome = left + [...left].reverse().join("");
  } else {
    let middle = n[half];
    palindrome = left + middle + [...left].reverse().join("");
  }

  if (BigInt(palindrome) > a) {
    return BigInt(palindrome);
  }

  if (digits % 2 === 0) {
    left = (BigInt(left) + 1n).toString();
    palindrome = left + [...left].reverse().join("");
  } else {
    let middle = n[half];
    if (middle !== "9") {
      middle = (Number(middle) + 1).toString();
      palindrome = left + middle + [...left].reverse().join("");
    } else {
      middle = "0";
      left = (BigInt(left) + 1n).toString();
      palindrome = left + middle + [...left].reverse().join("");
    }
  }

  return BigInt(palindrome);
}
