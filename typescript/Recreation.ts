export const listSquared = (m: number, n: number): number[][] => {
  const squares: number[][] = [];
  for (let i = m; i <= n; i++) {
    if (i === 1) {
      squares.push([1, 1]);
    }
    if (
      Math.sqrt(
        divisors(i)
          .map((elt) => elt * elt)
          .reduce((a, b) => a + b, 0)
      ) %
        2 ===
      0
    ) {
      squares.push([
        i,
        divisors(i)
          .map((elt) => elt * elt)
          .reduce((a, b) => a + b, 0),
      ]);
    }
  }

  return squares;
};

function divisors(num: number): number[] {
  let divs: number[] = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divs.push(i);
    }
  }

  return divs;
}
