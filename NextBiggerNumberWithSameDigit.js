function nextBigger(num) {
    let digits = num.toString().split('').map(Number);
    let i;
    for (i = digits.length - 2; i >= 0; i--) {
      if (digits[i] < digits[i + 1]) break;
    }
    if (i === -1) return -1;
    let j;
    for (j = digits.length - 1; j > i; j--) {
      if (digits[j] > digits[i]) break;
    }
    [digits[i], digits[j]] = [digits[j], digits[i]];
    let sortedRight = digits.slice(i + 1).sort((a, b) => a - b);
    let nextBiggerDigits = digits.slice(0, i + 1).concat(sortedRight);
    return parseInt(nextBiggerDigits.join(''), 10);
  }