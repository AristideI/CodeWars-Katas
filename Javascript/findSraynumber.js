function stray(numbers) {
    const numCounts = {};
  
    for (const num of numbers) {
      if (numCounts.hasOwnProperty(num)) {
        numCounts[num]++;
      } else {
        numCounts[num] = 1;
      }
    }
  
    for (const num in numCounts) {
      if (numCounts[num] === 1) {
        return parseInt(num);
      }
    }
  }