function f(n) {
    // The base case: if n is 0, return 0
    if (n === 0) {
      return 0;
    }
  
    // Recursive case:
    // We know that f(f(n)) = 3*n
    // So, to find f(n), we can find f(f(n)) and divide it by 3
    let doubleF = f(f(n));
    return doubleF / 3;
  }