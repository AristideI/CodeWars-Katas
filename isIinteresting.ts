export function isInteresting(n: number, awesomePhrases: number[]): number {
  // A helper function to determine if a number is interesting
  function checkNumber(num: number): boolean {
    // If in awesomePhrases
    if (awesomePhrases.includes(num)) return true;

    const digits = num
      .toString()
      .split("")
      .map((d) => parseInt(d));

    // All zeros after the first digit
    if (digits.slice(1).every((d) => d === 0)) return true;

    // All digits are the same
    if (digits.every((d) => d === digits[0])) return true;

    // Incrementing sequence
    const incrementing = "1234567890";
    if (incrementing.includes(num.toString())) return true;

    // Decrementing sequence
    const decrementing = "9876543210";
    if (decrementing.includes(num.toString())) return true;

    // Palindrome
    if (digits.join("") === digits.reverse().join("")) return true;

    return false;
  }

  if (n > 99 && checkNumber(n)) return 2;
  if (n > 97 && (checkNumber(n + 1) || checkNumber(n + 2))) return 1;

  return 0;
}

console.log(isInteresting(3, [1337, 256])); //0
console.log(isInteresting(1336, [1337, 256])); //1
console.log(isInteresting(1337, [1337, 256])); //2
console.log(isInteresting(11208, [1337, 256])); //0
console.log(isInteresting(11209, [1337, 256])); //1
console.log(isInteresting(11211, [1337, 256])); //2
