function solution (roman) {
    let summ = 0
    let romans = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    for (let i = 0; i < roman.length; i++) {
      if (romans[roman[i]] > romans[roman[i-1]]){
        summ += romans[roman[i]] - (2*romans[roman[i-1]])
        
      }
      
      else {
      summ += romans[roman[i]]
        }
    }
      return summ;
  }