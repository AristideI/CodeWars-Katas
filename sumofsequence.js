const sequenceSum = (begin, end, step) => {
    if (begin > end) {
        return 0;
      }
    
      let sequenceSum = 0;
      let currentNumber = begin;
    
      while (currentNumber <= end) {
        sequenceSum += currentNumber;
        currentNumber += step;
      }
    
      return sequenceSum;
    };