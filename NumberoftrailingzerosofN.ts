function zeros(n) {
  let zeros = 0;
  let pow = 1;
  while (n / 5 ** pow > 0) {
    zeros += Math.floor(n / 5 ** pow);
    pow++;
  }

  return zeros;
}
