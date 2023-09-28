function add(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) {
      sum += parseInt(a[i], 10);
      i--;
    }
    if (j >= 0) {
      sum += parseInt(b[j], 10);
      j--;
    }

    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }

  return result;
}
