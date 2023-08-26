function sumMul(n,m){

    if (n < 0 || m <= 0) {
      return "INVALID"
    }
      let sum = 0;
      
    
      
      for(let i = 0; i < m; i++) {
        if (i%n === 0) {
          sum = sum + i
        }
      }
      return sum;
    }