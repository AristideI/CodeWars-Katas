function partsSums(ls) {
  if (ls.length === 0) return [0];
  let sum = ls.reduce((a, b) => a + b, 0);
  return [
    sum,
    ...ls.map((elt) => {
      sum = sum - elt;
      return sum;
    }),
  ];
}
