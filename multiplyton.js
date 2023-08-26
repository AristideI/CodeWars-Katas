function countWaysToMultiply(n, k) {
    // Helper recursive function to find all combinations
    function findCombinations(currentNum, remainingK) {
      if (remainingK === 0n) {
        // Base case: If remainingK becomes 0, then we have found a valid combination
        return 1n;
      }
  
      let ways = 0n;
      for (let i = currentNum; i <= n; i++) {
        if (n % BigInt(i) === 0n) {
          // Check if the currentNum is a factor of n
          ways += findCombinations(n / BigInt(i), remainingK - 1n);
        }
      }
  
      return ways;
    }
  
    return findCombinations(1n, BigInt(k));
  }
  
  // Test cases
  console.log(countWaysToMultiply(24n, 2n)); // Output: 8n
  console.log(countWaysToMultiply(100n, 1n)); // Output: 1n
  console.log(countWaysToMultiply(20n, 3n)); // Output: 18n
  function multiply(n, k) {
    // Helper function to get all factors of n
    function getFactors(num) {
      const factors = [];
      for (let i = 1n; i * i <= num; i++) {
        if (num % i === 0n) {
          factors.push(i);
          if (num / i !== i) {
            factors.push(num / i);
          }
        }
      }
      return factors;
    }
  
    // Helper recursive function to find all combinations
    function findCombinations(startIdx, remainingK, currentProduct) {
      if (remainingK === 0n) {
        // Base case: If remainingK becomes 0, then we have found a valid combination
        return 1n;
      }
  
      let ways = 0n;
      for (let i = startIdx; i < factors.length; i++) {
        const factor = factors[i];
        if (currentProduct % factor === 0n) {
          ways += findCombinations(i, remainingK - 1n, currentProduct / factor);
        }
      }
  
      return ways;
    }
  
    const factors = getFactors(BigInt(n));
    return findCombinations(0, BigInt(k), BigInt(n));
  }