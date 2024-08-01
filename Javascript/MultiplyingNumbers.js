function multiply(a, b)
{
  const len1 = a.length;
  const len2 = b.length;
  const result = new Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const product = parseInt(a[i]) * parseInt(b[j]);
      const sum = product + result[i + j + 1];
      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  // Convert result array to a string
  const resultString = result.join('').replace(/^0+/, '');

  return resultString.length === 0 ? '0' : resultString;
}