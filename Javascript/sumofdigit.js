function digitalRoot(n) {
    while (n >= 10) {
      let sum = 0;
      String(n).split('').forEach(digit => sum += Number(digit));
      n = sum;
  }
    return n;
  }
  function digitalRoot(n) {
    let sum = 0;
    while (n > 0 || sum > 9) {
      if (n == 0) {
        n = sum;
        sum = 0;
      }
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  }   