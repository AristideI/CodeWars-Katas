function nextBigger(num) {
    // Convert the number to an array of digits
    let digits = num.toString().split('').map(Number);
  
    // Find the first digit that can be swapped with a greater digit on its right side
    let i;
    for (i = digits.length - 2; i >= 0; i--) {
      if (digits[i] < digits[i + 1]) break;
    }
  
    // If no such digit is found, return -1
    if (i === -1) return -1;
  
    // Find the smallest greater digit on its right side
    let j;
    for (j = digits.length - 1; j > i; j--) {
      if (digits[j] > digits[i]) break;
    }
  
    // Swap the two digits
    [digits[i], digits[j]] = [digits[j], digits[i]];
  
    // Sort the digits to the right in ascending order
    let sortedRight = digits.slice(i + 1).sort((a, b) => a - b);
  
    // Combine the left part, swapped digit, and sorted right part to get the next bigger number
    let nextBiggerDigits = digits.slice(0, i + 1).concat(sortedRight);
  
    // Convert the array of digits back to a number and return it
    return parseInt(nextBiggerDigits.join(''), 10);
  }