function fibbo(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }

  return result;
}

console.log(fibbo(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
