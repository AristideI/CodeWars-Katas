function minPrice(coins) {
    // Helper function with memoization to check if a value can be represented by the given coins
    function canRepresent(value, memo = {}) {
      if (value === 0) return true;
      if (value < 0) return false;
      if (value in memo) return memo[value];
      memo[value] = coins.some(coin => canRepresent(value - coin, memo));
      return memo[value];
    }
  
    // Start checking from N = 1 and increment until finding the first value not representable
    let N = 1;
    while (true) {
      if (!canRepresent(N)) return N;
      N++;
    }
  }